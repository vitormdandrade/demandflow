"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNdaDoc, NDA_WIZARD_STEPS, type NdaDocType } from "@/lib/nda";
import { StepProgressBar } from "@/components/nda/StepProgressBar";
import { pushDataLayer } from "@/lib/gtm";
import LegalWarning from "@/components/LegalWarning";

const REVIEW_LABELS: Record<string, string> = {
  party1Name: "Party 1",
  party1Email: "Email",
  party2Name: "Party 2",
  jurisdiction: "Governing Law",
  effectiveDate: "Effective Date",
  confidentialityPeriod: "Confidentiality Period",
  description: "Confidential Information",
  serviceDescription: "Services",
  paymentAmount: "Payment Amount",
  paymentTerms: "Payment Terms",
  startDate: "Start Date",
  businessPurpose: "Business Purpose",
  profitSplit: "Profit Split",
};

export default function NdaWizardPage() {
  const params = useParams<{ type: string }>();
  const router = useRouter();
  const docType = params.type as NdaDocType;
  const doc = getNdaDoc(docType);

  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [agreedToDisclaimer, setAgreedToDisclaimer] = useState(false);

  if (!doc) {
    return notFound();
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const safeDoc = doc!;
  const wizardSteps = NDA_WIZARD_STEPS[docType];
  const progressLabels = [
    ...wizardSteps.map((s) => s.title),
    "Review & Pay",
  ];
  const isReviewStep = step === wizardSteps.length;
  const allFields = wizardSteps.flatMap((s) => s.fields);

  function update(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function validateStep(stepIndex: number): boolean {
    const fields = wizardSteps[stepIndex]?.fields ?? [];
    const newErrors: Record<string, string> = {};
    for (const field of fields) {
      if (!values[field.name]?.trim()) {
        newErrors[field.name] = "This field is required.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleNext() {
    if (validateStep(step)) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleBack() {
    setStep((s) => s - 1);
    setCheckoutError(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleCheckout() {
    setCheckoutError(null);
    setLoading(true);
    pushDataLayer({
      event: "begin_checkout",
      currency: "USD",
      value: safeDoc.priceCents / 100,
      template: docType,
    });
    try {
      const res = await fetch("/api/nda/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: docType, ...values }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      router.push(data.url);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      pushDataLayer({ event: "checkout_error", error_message: message });
      setCheckoutError(message);
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-[560px] px-5 py-12 sm:py-16">
      <div className="mb-2">
        <Link
          href="/nda"
          className="text-sm text-slate-500 hover:text-slate-700"
        >
          ← Contract Generator
        </Link>
      </div>

      <header className="mb-8">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{safeDoc.icon}</span>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            {safeDoc.name}
          </h1>
          <span className="ml-auto rounded-full bg-blue-50 px-2.5 py-0.5 text-sm font-semibold text-blue-700">
            ${(safeDoc.priceCents / 100).toFixed(0)}
          </span>
        </div>
        <p className="mt-1 text-sm text-slate-500">{safeDoc.description}</p>
      </header>

      <StepProgressBar steps={progressLabels} current={step} />

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-900/5 sm:p-8">
        {/* Disclaimer banner — visible on every step */}
        <div className="mb-6 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <span className="mt-0.5 text-base" aria-hidden>
            ⚠️
          </span>
          <p>
            DemandFlowww generates document{" "}
            <strong>templates</strong> — it is{" "}
            <strong>not a law firm</strong> and does not provide legal advice.
            For complex situations, consult a licensed attorney in your
            jurisdiction.
          </p>
        </div>

        {!isReviewStep ? (
          <>
            <h2 className="mb-5 text-base font-semibold text-slate-800">
              {wizardSteps[step].title}
            </h2>
            <div className="flex flex-col gap-5">
              {wizardSteps[step].fields.map((field) =>
                field.type === "textarea" ? (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label
                      htmlFor={field.name}
                      className="text-sm font-medium text-slate-700"
                    >
                      {field.label}
                    </label>
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={3}
                      value={values[field.name] || ""}
                      placeholder={field.placeholder}
                      onChange={(e) => update(field.name, e.target.value)}
                      maxLength={500}
                      className="w-full resize-none rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30"
                    />
                    {errors[field.name] && (
                      <p className="text-xs text-red-600">{errors[field.name]}</p>
                    )}
                  </div>
                ) : (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label
                      htmlFor={field.name}
                      className="text-sm font-medium text-slate-700"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type ?? "text"}
                      value={values[field.name] || ""}
                      placeholder={field.placeholder}
                      onChange={(e) => update(field.name, e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30"
                    />
                    {errors[field.name] && (
                      <p className="text-xs text-red-600">{errors[field.name]}</p>
                    )}
                  </div>
                ),
              )}
            </div>
            <div className="mt-7 flex gap-3">
              {step > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Continue →
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="mb-5 text-base font-semibold text-slate-800">
              Review your details
            </h2>
            <dl className="divide-y divide-slate-100">
              {allFields.map((field) =>
                values[field.name] ? (
                  <div key={field.name} className="py-3">
                    <dt className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                      {REVIEW_LABELS[field.name] ?? field.label}
                    </dt>
                    <dd className="mt-0.5 text-sm text-slate-900 break-words">
                      {values[field.name]}
                    </dd>
                  </div>
                ) : null,
              )}
            </dl>

            {checkoutError && (
              <p className="mt-5 rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
                {checkoutError}
              </p>
            )}

            {/* High-value legal warning */}
            {docType === "service-agreement" && values.paymentAmount ? (
              <LegalWarning
                value={parseFloat(values.paymentAmount) || 0}
                label="payment amount"
              />
            ) : null}
            {docType === "partnership-agreement" ? (
              <div className="mt-4 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3.5 text-sm text-amber-800">
                <span className="mt-0.5 shrink-0 text-lg leading-none" aria-hidden>
                  ⚖️
                </span>
                <div>
                  <p className="font-semibold">
                    Partnership Agreements carry significant legal weight.
                  </p>
                  <p className="mt-1.5 leading-relaxed">
                    A partnership agreement governs profit sharing, liability,
                    and governance — decisions that can have{" "}
                    <strong className="font-semibold">meaningful financial and legal
                    consequences</strong>. We recommend having this
                    document reviewed by a licensed attorney before signing.
                  </p>
                  <p className="mt-2 leading-relaxed">
                    DemandFlowww provides document <strong>templates</strong>{" "}
                    and is <strong>not a law firm</strong>. By proceeding, you
                    assume full responsibility. See our{" "}
                    <Link
                      href="/terms"
                      className="font-medium text-amber-900 underline hover:text-amber-950"
                    >
                      Terms of Service
                    </Link>.
                  </p>
                </div>
              </div>
            ) : null}

            {/* Required legal disclaimer checkbox */}
            <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-700 transition hover:bg-slate-100">
              <input
                type="checkbox"
                checked={agreedToDisclaimer}
                onChange={(e) => setAgreedToDisclaimer(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span>
                I understand that DemandFlowww generates document{" "}
                <strong>templates</strong> and is{" "}
                <strong>not a law firm</strong>. I am not receiving legal advice,
                and no attorney–client relationship is created.
              </span>
            </label>

            <div className="mt-7 flex gap-3">
              <button
                type="button"
                onClick={handleBack}
                className="rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleCheckout}
                disabled={loading || !agreedToDisclaimer}
                className="flex-1 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading
                  ? "Redirecting to checkout…"
                  : `Pay $${(safeDoc.priceCents / 100).toFixed(0)} & Download PDF`}
              </button>
            </div>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
              <span aria-hidden>🔒</span>
              Secure payment via Stripe. PDF generated instantly after checkout.
            </p>
          </>
        )}
      </div>

      <p className="mt-6 text-center text-xs text-slate-400">
        📍 Templates based on general US contract principles. State-specific
        requirements may apply — verify with local counsel for complex
        transactions.
      </p>

      <p className="mt-3 text-center text-xs text-slate-400">
        By purchasing, you agree to the{" "}
        <Link
          href="/terms"
          className="font-medium text-slate-500 underline hover:text-slate-700"
        >
          Terms of Service
        </Link>
        .
      </p>
    </main>
  );
}
