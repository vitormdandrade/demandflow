"use client";

import { useState } from "react";
import Link from "next/link";
import { calculateRetirement, type RetirementParams, type RetirementResult } from "@/lib/retirement-calc";
import LegalWarning from "@/components/LegalWarning";

type FormValues = {
  currentAge: string;
  currentIncome: string;
  currentSavings: string;
  monthlyContribution: string;
  retirementAge: string;
  expectedReturn: string;
  email: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const DEFAULTS: FormValues = {
  currentAge: "",
  currentIncome: "",
  currentSavings: "",
  monthlyContribution: "",
  retirementAge: "65",
  expectedReturn: "7",
  email: "",
};

function fmt(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function parseNum(s: string): number {
  return parseFloat(s.replace(/,/g, ""));
}

export default function RetirementCalculator() {
  const [values, setValues] = useState<FormValues>(DEFAULTS);
  const [errors, setErrors] = useState<FormErrors>({});
  const [result, setResult] = useState<RetirementResult | null>(null);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  function set(key: keyof FormValues, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};
    const age = parseInt(values.currentAge, 10);
    const retAge = parseInt(values.retirementAge, 10);
    const income = parseNum(values.currentIncome);
    const savings = parseNum(values.currentSavings);
    const contrib = parseNum(values.monthlyContribution);
    const ret = parseFloat(values.expectedReturn);

    if (!values.currentAge || isNaN(age) || age < 18 || age > 79) {
      newErrors.currentAge = "Enter your current age (18–79).";
    }
    if (!values.retirementAge || isNaN(retAge) || retAge < 40 || retAge > 80) {
      newErrors.retirementAge = "Enter a retirement age between 40 and 80.";
    } else if (!isNaN(age) && retAge <= age) {
      newErrors.retirementAge = "Retirement age must be greater than your current age.";
    }
    if (values.currentIncome === "" || isNaN(income) || income < 0) {
      newErrors.currentIncome = "Enter your current annual income.";
    }
    if (values.currentSavings === "" || isNaN(savings) || savings < 0) {
      newErrors.currentSavings = "Enter your current savings (enter 0 if none).";
    }
    if (values.monthlyContribution === "" || isNaN(contrib) || contrib < 0) {
      newErrors.monthlyContribution = "Enter a monthly contribution (enter 0 if none).";
    }
    if (!values.expectedReturn || isNaN(ret) || ret < 0 || ret > 30) {
      newErrors.expectedReturn = "Enter an expected return between 0% and 30%.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleCalculate() {
    if (!validate()) return;

    const params: RetirementParams = {
      currentAge: parseInt(values.currentAge, 10),
      currentIncome: parseNum(values.currentIncome),
      currentSavings: parseNum(values.currentSavings),
      monthlyContribution: parseNum(values.monthlyContribution),
      retirementAge: parseInt(values.retirementAge, 10),
      expectedReturn: parseFloat(values.expectedReturn),
    };

    setResult(calculateRetirement(params));
    setCheckoutError(null);
  }

  async function handleCheckout() {
    if (!result) return;
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setErrors((e) => ({ ...e, email: "Enter a valid email address." }));
      return;
    }

    setCheckoutLoading(true);
    setCheckoutError(null);

    try {
      const res = await fetch("/api/retirement/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentAge: values.currentAge,
          currentIncome: values.currentIncome,
          currentSavings: values.currentSavings,
          monthlyContribution: values.monthlyContribution,
          retirementAge: values.retirementAge,
          expectedReturn: values.expectedReturn,
          email: values.email,
        }),
      });

      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Checkout failed.");
      }
      window.location.href = data.url;
    } catch (err) {
      setCheckoutError(err instanceof Error ? err.message : "Checkout failed.");
    } finally {
      setCheckoutLoading(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-[640px] px-5 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Retirement Calculator
        </h1>
        <p className="mt-2 text-slate-500">
          Social Security + 401(k) projections in seconds
        </p>
      </div>

      {/* Legal Disclaimer Banner */}
      <div className="mb-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3.5 text-sm text-amber-800">
        <span className="shrink-0 text-base leading-snug" aria-hidden>⚠️</span>
        <p>
          This calculator is an educational tool, not financial advice. Projections are
          estimates based on assumptions and historical averages — actual results will
          vary. Consult a certified financial planner or fiduciary before making
          retirement decisions.{" "}
          <strong>DemandFlowww is not a financial advisor.</strong>
        </p>
      </div>

      {/* Form Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-base font-semibold text-slate-900">Your Details</h2>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Current Age
            </label>
            <input
              type="number"
              min="18"
              max="79"
              placeholder="35"
              value={values.currentAge}
              onChange={(e) => set("currentAge", e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            {errors.currentAge && (
              <p className="mt-1 text-xs text-red-600">{errors.currentAge}</p>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Target Retirement Age
            </label>
            <input
              type="number"
              min="40"
              max="80"
              placeholder="65"
              value={values.retirementAge}
              onChange={(e) => set("retirementAge", e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            {errors.retirementAge && (
              <p className="mt-1 text-xs text-red-600">{errors.retirementAge}</p>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Current Annual Income ($)
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm text-slate-400">
                $
              </span>
              <input
                type="text"
                inputMode="numeric"
                placeholder="80,000"
                value={values.currentIncome}
                onChange={(e) => set("currentIncome", e.target.value)}
                className="w-full rounded-lg border border-slate-300 py-2.5 pl-7 pr-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            {errors.currentIncome && (
              <p className="mt-1 text-xs text-red-600">{errors.currentIncome}</p>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Current Retirement Savings ($)
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm text-slate-400">
                $
              </span>
              <input
                type="text"
                inputMode="numeric"
                placeholder="25,000"
                value={values.currentSavings}
                onChange={(e) => set("currentSavings", e.target.value)}
                className="w-full rounded-lg border border-slate-300 py-2.5 pl-7 pr-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            {errors.currentSavings && (
              <p className="mt-1 text-xs text-red-600">{errors.currentSavings}</p>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Monthly Contribution ($)
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm text-slate-400">
                $
              </span>
              <input
                type="text"
                inputMode="numeric"
                placeholder="500"
                value={values.monthlyContribution}
                onChange={(e) => set("monthlyContribution", e.target.value)}
                className="w-full rounded-lg border border-slate-300 py-2.5 pl-7 pr-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            {errors.monthlyContribution && (
              <p className="mt-1 text-xs text-red-600">{errors.monthlyContribution}</p>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Expected Annual Return (%)
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                max="30"
                step="0.1"
                placeholder="7"
                value={values.expectedReturn}
                onChange={(e) => set("expectedReturn", e.target.value)}
                className="w-full rounded-lg border border-slate-300 py-2.5 pl-3 pr-8 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-slate-400">
                %
              </span>
            </div>
            {errors.expectedReturn && (
              <p className="mt-1 text-xs text-red-600">{errors.expectedReturn}</p>
            )}
            <p className="mt-1 text-xs text-slate-400">
              Historical S&P 500 avg ≈ 7% after inflation
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCalculate}
          className="mt-8 w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.99]"
        >
          Calculate My Retirement →
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl">
              📊
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Your Retirement Projection
              </h2>
              <p className="text-sm text-slate-500">
                Retiring at age {values.retirementAge} in {result.yearsToRetirement}{" "}
                year{result.yearsToRetirement !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-blue-100 bg-blue-50 px-5 py-4">
              <p className="text-xs font-medium uppercase tracking-wide text-blue-600">
                Projected Savings
              </p>
              <p className="mt-1 text-2xl font-bold text-blue-800">
                {fmt(result.projectedSavings)}
              </p>
              <p className="mt-0.5 text-xs text-blue-600">
                Total 401(k) / retirement balance
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Monthly Withdrawal
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-800">
                {fmt(result.monthlyWithdrawal)}/mo
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                Based on 4% annual withdrawal rule
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Social Security Est.
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-800">
                {fmt(result.socialSecurityEstimate)}/mo
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                Estimated monthly SS benefit
              </p>
            </div>

            <div className="rounded-xl border border-green-100 bg-green-50 px-5 py-4">
              <p className="text-xs font-medium uppercase tracking-wide text-green-600">
                Total Monthly Income
              </p>
              <p className="mt-1 text-2xl font-bold text-green-800">
                {fmt(result.totalMonthlyIncome)}/mo
              </p>
              <p className="mt-0.5 text-xs text-green-600">
                Withdrawal + Social Security
              </p>
            </div>
          </div>

          {/* High-projection legal warning */}
          <LegalWarning
            value={result.projectedSavings}
            threshold={250000}
            label="projected retirement savings"
          />

          {/* PDF CTA */}
          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-base font-semibold text-slate-900">
              Get Full Report PDF — $9
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Detailed year-by-year projections, Social Security breakdown, and a
              personalized summary to share with your financial planner.
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={values.email}
                  onChange={(e) => set("email", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                )}
              </div>
              <button
                type="button"
                onClick={handleCheckout}
                disabled={checkoutLoading}
                className="shrink-0 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:opacity-60"
              >
                {checkoutLoading ? "Redirecting…" : "Get PDF Report — $9 →"}
              </button>
            </div>

            {checkoutError && (
              <p className="mt-3 text-sm text-red-600">{checkoutError}</p>
            )}

            <p className="mt-3 text-xs text-slate-400">
              Secure checkout via Stripe. One-time payment — no subscription.
            </p>
          </div>
        </div>
      )}

      {/* FAQ */}
      <div className="mt-10">
        <h2 className="mb-4 text-xl font-bold text-slate-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "How is my projected savings calculated?",
              a: "We apply compound interest to your current savings plus monthly contributions over the years until retirement, using your expected annual return rate (FV formula).",
            },
            {
              q: "How accurate is the Social Security estimate?",
              a: "Our estimate uses a 40% income replacement rate at full retirement age (67), adjusted for early or delayed claiming. The SSA's actual benefit depends on your full 35-year earnings history — this is an approximation.",
            },
            {
              q: "What is the 4% withdrawal rule?",
              a: "A widely-cited guideline suggesting retirees can withdraw 4% of their portfolio annually with a high probability of not outliving savings over 30 years. Monthly withdrawal = (Savings × 4%) ÷ 12.",
            },
            {
              q: "Is this financial advice?",
              a: "No. This is an educational tool only. Results depend on many variables including taxes, inflation, and market performance. Always consult a certified financial planner or fiduciary before making retirement decisions.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <h3 className="font-semibold text-slate-900">{item.q}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-slate-400">
        By using this tool you agree to our{" "}
        <Link href="/terms" className="underline hover:text-slate-600">
          Terms of Service
        </Link>
        .
      </div>
    </main>
  );
}
