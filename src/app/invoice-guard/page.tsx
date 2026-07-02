"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import LegalWarning from "@/components/LegalWarning";

// Per-state statutory late payment / judgment interest rates (annual %).
// Source: publicly available state statutes as of 2025. Rates may change by
// legislative amendment — always verify with the current statute for your state.
const STATE_RATES: Record<string, { name: string; rate: number; statute: string }> = {
  AL: { name: "Alabama",        rate: 6.00,  statute: "Ala. Code § 8-8-1" },
  AK: { name: "Alaska",         rate: 10.50, statute: "AS § 45.45.010" },
  AZ: { name: "Arizona",        rate: 10.00, statute: "A.R.S. § 44-1201" },
  AR: { name: "Arkansas",       rate: 6.00,  statute: "Ark. Code Ann. § 4-57-101" },
  CA: { name: "California",     rate: 10.00, statute: "Cal. Civ. Code § 3289" },
  CO: { name: "Colorado",       rate: 8.00,  statute: "C.R.S. § 5-12-102" },
  CT: { name: "Connecticut",    rate: 10.00, statute: "Conn. Gen. Stat. § 37-3a" },
  DE: { name: "Delaware",       rate: 5.00,  statute: "Del. Code tit. 6 § 2301" },
  FL: { name: "Florida",        rate: 8.00,  statute: "Fla. Stat. § 55.03" },
  GA: { name: "Georgia",        rate: 7.00,  statute: "O.C.G.A. § 7-4-2" },
  HI: { name: "Hawaii",         rate: 10.00, statute: "Haw. Rev. Stat. § 478-2" },
  ID: { name: "Idaho",          rate: 12.00, statute: "Idaho Code § 28-22-104" },
  IL: { name: "Illinois",       rate: 9.00,  statute: "815 ILCS 205/2" },
  IN: { name: "Indiana",        rate: 8.00,  statute: "Ind. Code § 24-4.6-1-103" },
  IA: { name: "Iowa",           rate: 5.00,  statute: "Iowa Code § 535.2" },
  KS: { name: "Kansas",         rate: 10.00, statute: "K.S.A. § 16-201" },
  KY: { name: "Kentucky",       rate: 8.00,  statute: "KRS § 360.010" },
  LA: { name: "Louisiana",      rate: 5.00,  statute: "La. Civ. Code art. 2924" },
  ME: { name: "Maine",          rate: 6.00,  statute: "Me. Rev. Stat. tit. 9-A § 9-201" },
  MD: { name: "Maryland",       rate: 6.00,  statute: "Md. Courts § 11-107" },
  MA: { name: "Massachusetts",  rate: 12.00, statute: "Mass. Gen. Laws ch. 231 § 6C" },
  MI: { name: "Michigan",       rate: 5.00,  statute: "MCL § 438.31" },
  MN: { name: "Minnesota",      rate: 10.00, statute: "Minn. Stat. § 334.01" },
  MS: { name: "Mississippi",    rate: 8.00,  statute: "Miss. Code Ann. § 75-17-1" },
  MO: { name: "Missouri",       rate: 9.00,  statute: "Mo. Rev. Stat. § 408.020" },
  MT: { name: "Montana",        rate: 10.00, statute: "Mont. Code Ann. § 31-1-106" },
  NE: { name: "Nebraska",       rate: 6.00,  statute: "Neb. Rev. Stat. § 45-101.04" },
  NV: { name: "Nevada",         rate: 5.50,  statute: "NRS § 99.040" },
  NH: { name: "New Hampshire",  rate: 10.00, statute: "RSA 336:1" },
  NJ: { name: "New Jersey",     rate: 6.00,  statute: "N.J.S.A. § 31:1-1" },
  NM: { name: "New Mexico",     rate: 8.75,  statute: "NMSA § 56-8-4" },
  NY: { name: "New York",       rate: 9.00,  statute: "N.Y. CPLR § 5004" },
  NC: { name: "North Carolina", rate: 8.00,  statute: "N.C. Gen. Stat. § 24-1" },
  ND: { name: "North Dakota",   rate: 6.00,  statute: "N.D. Cent. Code § 47-14-05" },
  OH: { name: "Ohio",           rate: 5.00,  statute: "ORC § 1343.01" },
  OK: { name: "Oklahoma",       rate: 6.00,  statute: "15 Okla. Stat. § 266" },
  OR: { name: "Oregon",         rate: 9.00,  statute: "ORS § 82.010" },
  PA: { name: "Pennsylvania",   rate: 6.00,  statute: "41 P.S. § 202" },
  RI: { name: "Rhode Island",   rate: 12.00, statute: "R.I. Gen. Laws § 9-21-10" },
  SC: { name: "South Carolina", rate: 8.75,  statute: "S.C. Code Ann. § 34-31-20" },
  SD: { name: "South Dakota",   rate: 15.00, statute: "SDCL § 54-3-5" },
  TN: { name: "Tennessee",      rate: 10.00, statute: "Tenn. Code Ann. § 47-14-103" },
  TX: { name: "Texas",          rate: 6.00,  statute: "Tex. Fin. Code § 302.002" },
  UT: { name: "Utah",           rate: 10.00, statute: "Utah Code § 15-1-1" },
  VT: { name: "Vermont",        rate: 12.00, statute: "9 V.S.A. § 41a" },
  VA: { name: "Virginia",       rate: 6.00,  statute: "Va. Code Ann. § 6.2-301" },
  WA: { name: "Washington",     rate: 12.00, statute: "RCW § 19.52.010" },
  WV: { name: "West Virginia",  rate: 6.00,  statute: "W. Va. Code § 47-6-5" },
  WI: { name: "Wisconsin",      rate: 5.00,  statute: "Wis. Stat. § 138.04" },
  WY: { name: "Wyoming",        rate: 7.00,  statute: "Wyo. Stat. § 40-14-106" },
};

type CalcResult = {
  daysOverdue: number;
  annualRate: number;
  statute: string;
  lateFeeAmount: number;
  totalDue: number;
  stateName: string;
};

function calcLateFee(
  invoiceAmount: number,
  dueDate: string,
  paymentDate: string,
  stateCode: string,
): CalcResult | null {
  const due = new Date(dueDate + "T00:00:00");
  const paid = new Date(paymentDate + "T00:00:00");
  if (isNaN(due.getTime()) || isNaN(paid.getTime())) return null;

  const msPerDay = 1000 * 60 * 60 * 24;
  const daysOverdue = Math.max(0, Math.floor((paid.getTime() - due.getTime()) / msPerDay));

  const stateData = STATE_RATES[stateCode];
  if (!stateData) return null;

  const dailyRate = stateData.rate / 100 / 365;
  const lateFeeAmount = invoiceAmount * dailyRate * daysOverdue;
  const totalDue = invoiceAmount + lateFeeAmount;

  return {
    daysOverdue,
    annualRate: stateData.rate,
    statute: stateData.statute,
    lateFeeAmount,
    totalDue,
    stateName: stateData.name,
  };
}

function fmt(n: number) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function InvoiceGuardPage() {
  const [invoiceAmount, setInvoiceAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [result, setResult] = useState<CalcResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);

    const amount = parseFloat(invoiceAmount);
    if (isNaN(amount) || amount <= 0) {
      setError("Please enter a valid invoice amount greater than $0.");
      return;
    }
    if (!dueDate) {
      setError("Please select an invoice due date.");
      return;
    }
    if (!paymentDate) {
      setError("Please select the payment date (or today if still unpaid).");
      return;
    }
    if (!stateCode) {
      setError("Please select a US state.");
      return;
    }

    const calc = calcLateFee(amount, dueDate, paymentDate, stateCode);
    if (!calc) {
      setError("Something went wrong — please check your inputs and try again.");
      return;
    }

    if (calc.daysOverdue === 0) {
      setError("The payment date is on or before the due date — no late fees apply.");
      return;
    }

    setResult(calc);
  }

  const demandLetterHref = result
    ? `/?amount=${encodeURIComponent(fmt(result.totalDue))}`
    : "/";

  return (
    <main className="mx-auto w-full max-w-[680px] px-5 py-12 sm:py-16">
      <header className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
          Invoice Guard
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Late Fee Calculator
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Know exactly what to charge. Calculate statutory interest by state — in
          seconds.
        </p>
      </header>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Amber legal disclaimer banner */}
        <div className="flex items-start gap-3 rounded-t-2xl border-b border-amber-200 bg-amber-50 px-5 py-4">
          <span className="mt-0.5 shrink-0 text-lg leading-none" aria-hidden>
            ⚠️
          </span>
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Informational purposes only.</strong> Interest rates shown are
            based on publicly available statutes and may not reflect recent
            legislative changes. Verify current rates with your state&apos;s
            statutes or a licensed attorney before sending a demand.
          </p>
        </div>

        <form onSubmit={handleCalculate} className="space-y-5 p-6">
          {/* Invoice Amount */}
          <div>
            <label
              htmlFor="invoiceAmount"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              Invoice Amount ($)
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400 font-medium">
                $
              </span>
              <input
                id="invoiceAmount"
                type="number"
                min="0.01"
                step="0.01"
                placeholder="2500.00"
                value={invoiceAmount}
                onChange={(e) => setInvoiceAmount(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-slate-50/50 py-2.5 pl-7 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          {/* Due Date + Payment Date — side by side */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="dueDate"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                Invoice Due Date
              </label>
              <input
                id="dueDate"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3 py-2.5 text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <div>
              <label
                htmlFor="paymentDate"
                className="mb-1.5 block text-sm font-semibold text-slate-700"
              >
                Payment Date{" "}
                <span className="font-normal text-slate-500">(or today if unpaid)</span>
              </label>
              <input
                id="paymentDate"
                type="date"
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3 py-2.5 text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          {/* US State */}
          <div>
            <label
              htmlFor="stateCode"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              US State
            </label>
            <select
              id="stateCode"
              value={stateCode}
              onChange={(e) => setStateCode(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3 py-2.5 text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="">Select a state…</option>
              {Object.entries(STATE_RATES)
                .sort((a, b) => a[1].name.localeCompare(b[1].name))
                .map(([code, data]) => (
                  <option key={code} value={code}>
                    {data.name}
                  </option>
                ))}
            </select>
          </div>

          {error && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="btn-glow w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
          >
            Calculate Late Fees
          </button>
        </form>
      </div>

      {/* Results */}
      {result && (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-4">
            <h2 className="text-base font-semibold text-slate-900">
              Results for {result.stateName}
            </h2>
            <p className="mt-0.5 text-xs text-slate-500">{result.statute}</p>
          </div>

          <dl className="divide-y divide-slate-100">
            <div className="flex items-center justify-between px-6 py-4">
              <dt className="text-sm text-slate-600">Days Overdue</dt>
              <dd className="text-sm font-semibold text-slate-900">
                {result.daysOverdue.toLocaleString()} days
              </dd>
            </div>
            <div className="flex items-center justify-between px-6 py-4">
              <dt className="text-sm text-slate-600">Statutory Interest Rate</dt>
              <dd className="text-sm font-semibold text-slate-900">
                {result.annualRate.toFixed(2)}% per year
              </dd>
            </div>
            <div className="flex items-center justify-between px-6 py-4">
              <dt className="text-sm text-slate-600">Late Fee Amount</dt>
              <dd className="text-sm font-semibold text-red-600">
                +${fmt(result.lateFeeAmount)}
              </dd>
            </div>
            <div className="flex items-center justify-between bg-slate-50 px-6 py-4 rounded-b-2xl">
              <dt className="font-semibold text-slate-900">Total Due</dt>
              <dd className="text-lg font-bold text-slate-900">
                ${fmt(result.totalDue)}
              </dd>
            </div>
          </dl>

          <div className="border-t border-slate-200 bg-blue-50/60 px-6 py-5 rounded-b-2xl">
            <LegalWarning
              value={result.totalDue}
              label="invoice total"
            />
            <p className="mb-4 text-sm text-slate-700">
              Ready to collect? A professional demand letter puts clients on notice
              — and gets you paid faster.
            </p>
            <Link
              href={demandLetterHref}
              className="btn-glow inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
            >
              Generate Demand Letter for ${fmt(result.totalDue)} →
            </Link>
            <p className="mt-2.5 text-center text-xs text-slate-500">
              Amount pre-filled · $29 one-time · PDF in 60 seconds
            </p>
          </div>
        </div>
      )}

      <p className="mt-10 text-center text-sm text-slate-500">
        Need a demand letter without the calculator?{" "}
        <Link
          href="/"
          className="font-medium text-blue-600 underline hover:text-blue-700"
        >
          Go to DemandFlowww
        </Link>
      </p>

      <p className="mt-3 text-center text-xs text-slate-400">
        By using this calculator, you agree to the{" "}
        <Link
          href="/terms"
          className="font-medium text-slate-500 underline hover:text-slate-700"
        >
          Terms of Service
        </Link>
        .
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How are late fees calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Late fees are based on your state's statutory interest rate, the invoice amount, and the number of days the payment is overdue. DemandFlowww's calculator divides the annual rate by 365 to get a daily rate, then multiplies by the invoice amount and days overdue.",
                },
              },
              {
                "@type": "Question",
                name: "Are the interest rates up to date?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Rates shown are based on publicly available state statutes. However, laws change — always verify the current rate with your state's official statutes or a licensed attorney before sending a demand.",
                },
              },
              {
                "@type": "Question",
                name: "Can I charge late fees on any unpaid invoice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Most states allow creditors to charge statutory interest on overdue payments, but requirements vary by jurisdiction. Some states require the interest rate to be stated in the original contract. Consult an attorney for your specific situation.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
