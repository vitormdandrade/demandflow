"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { pushDataLayer } from "@/lib/gtm";
import {
  LEGAL_KIT,
  TEMPLATE_LIST,
  type TemplateConfig,
  type TemplateId,
} from "@/lib/templates";

interface CheckoutSessionSummary {
  mode: string;
  status: string | null;
  payment_status: string;
  customer_email: string | null;
  subscription_id: string | null;
  amount_total: number | null;
  currency: string | null;
}

function SubscriptionSuccess({ sessionId }: { sessionId: string }) {
  const [session, setSession] = useState<CheckoutSessionSummary | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `/api/checkout-session?session_id=${encodeURIComponent(sessionId)}`,
        );
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "We couldn't confirm your subscription.");
        }
        if (!cancelled) {
          setSession(data);
            pushDataLayer({
              event: "purchase",
              currency: (data.currency ?? "usd").toUpperCase(),
              value: (data.amount_total ?? 1900) / 100,
              transaction_id: sessionId,
              plan: "pro",
            });
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "We couldn't confirm your subscription.",
          );
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  return (
    <main className="mx-auto w-full max-w-[600px] px-5 py-12 text-center sm:py-16">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
        ✓
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Welcome to Pro!
      </h1>
      <p className="mt-3 text-slate-600">
        Your subscription is active — send as many letters as you need, all
        month.
      </p>

      {error && (
        <div className="mt-8 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {!error && !session && (
        <p className="mt-8 text-slate-500">Confirming your subscription…</p>
      )}

      {session && (
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm">
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Plan</dt>
              <dd className="font-semibold text-slate-900">DemandFlowww Pro</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Email</dt>
              <dd className="font-semibold text-slate-900">
                {session.customer_email ?? "—"}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Billed</dt>
              <dd className="font-semibold text-slate-900">
                {session.amount_total != null
                  ? `$${(session.amount_total / 100).toFixed(2)} / month`
                  : "$19.00 / month"}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-500">Status</dt>
              <dd className="font-semibold capitalize text-green-700">
                {session.payment_status}
              </dd>
            </div>
          </dl>
        </div>
      )}

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="w-full rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
        >
          Create your first letter
        </Link>
        <Link
          href="/account"
          className="w-full rounded-lg border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
        >
          Manage subscription
        </Link>
      </div>
    </main>
  );
}

function BundleSuccess({ sessionId }: { sessionId: string }) {
  // Verify the checkout session before showing the generator.
  const [verified, setVerified] = useState(false);
  const [verifyError, setVerifyError] = useState<string | null>(null);

  // Generator state — one set of field values and one generated letter per
  // template, so the buyer can switch between templates without losing work.
  const [template, setTemplate] = useState<TemplateConfig>(TEMPLATE_LIST[0]);
  const [values, setValues] = useState<Record<string, Record<string, string>>>({});
  const [letters, setLetters] = useState<Partial<Record<TemplateId, string>>>({});
  const [generating, setGenerating] = useState(false);
  const [genError, setGenError] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `/api/checkout-session?session_id=${encodeURIComponent(sessionId)}`,
        );
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "We couldn't confirm your purchase.");
        }
        if (data.payment_status !== "paid") {
          throw new Error("Payment not completed for this session.");
        }
        if (!cancelled) {
          setVerified(true);
          // Pre-fill the buyer's email everywhere it appears.
          if (data.customer_email) {
            setValues((prev) => {
              const next = { ...prev };
              for (const t of TEMPLATE_LIST) {
                next[t.id] = { yourEmail: data.customer_email, ...next[t.id] };
              }
              return next;
            });
          }
          pushDataLayer({
            event: "purchase",
            currency: (data.currency ?? "usd").toUpperCase(),
            value: (data.amount_total ?? LEGAL_KIT.priceCents) / 100,
            transaction_id: sessionId,
            plan: "legal-kit",
          });
        }
      } catch (err) {
        if (!cancelled) {
          setVerifyError(
            err instanceof Error ? err.message : "We couldn't confirm your purchase.",
          );
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  const templateValues = values[template.id] ?? {};
  const currentLetter = letters[template.id] ?? null;

  function update(name: string, value: string) {
    setValues((prev) => ({
      ...prev,
      [template.id]: { ...prev[template.id], [name]: value },
    }));
  }

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setGenError(null);
    setGenerating(true);
    try {
      const res = await fetch("/api/bundle-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId,
          template: template.id,
          fields: templateValues,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.html) {
        throw new Error(data.error || "We couldn't generate your letter.");
      }
      setLetters((prev) => ({ ...prev, [template.id]: data.html }));
      pushDataLayer({ event: "bundle_letter_generated", template: template.id });
    } catch (err) {
      setGenError(
        err instanceof Error ? err.message : "We couldn't generate your letter.",
      );
    } finally {
      setGenerating(false);
    }
  }

  function handlePrint() {
    const win = iframeRef.current?.contentWindow;
    if (win) {
      win.focus();
      win.print();
    }
  }

  return (
    <main className="mx-auto w-full max-w-[760px] px-5 py-12 sm:py-16">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
          ✓
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Your Freelancer Legal Kit is ready!
        </h1>
        <p className="mt-3 text-slate-600">
          All 6 templates are unlocked. Pick a letter type below, fill in the
          details, and generate it — as many times as you need.
        </p>
      </div>

      {verifyError && (
        <div className="mt-8 rounded-lg bg-red-50 px-4 py-3 text-center text-sm text-red-700">
          {verifyError}{" "}
          <Link href="/pricing" className="font-semibold underline">
            Back to pricing
          </Link>
        </div>
      )}

      {!verifyError && !verified && (
        <p className="mt-8 text-center text-slate-500">
          Confirming your purchase…
        </p>
      )}

      {verified && (
        <>
          {/* Template picker — all 6 templates, switch freely */}
          <div className="mt-10">
            <p className="mb-3 text-sm font-medium text-slate-500">
              Choose a letter type:
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {TEMPLATE_LIST.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setTemplate(t);
                    setGenError(null);
                  }}
                  aria-pressed={template.id === t.id}
                  className={`flex flex-col items-center rounded-xl border p-3 text-center transition duration-150 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] ${
                    template.id === t.id
                      ? "border-blue-500 bg-blue-50 shadow-sm ring-2 ring-blue-500/30"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm"
                  }`}
                >
                  <span className="text-2xl" aria-hidden>
                    {t.icon}
                  </span>
                  <span className="mt-1 text-xs font-semibold text-slate-800">
                    {t.name}
                  </span>
                  {letters[t.id] && (
                    <span className="mt-0.5 text-[10px] font-medium text-green-600">
                      ✓ Generated
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Field form for the selected template */}
          <form
            onSubmit={handleGenerate}
            className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-900/5 sm:p-8"
          >
            <h2 className="text-lg font-bold text-slate-900">
              {template.icon} {template.name}
            </h2>
            <p className="mt-1 text-sm text-slate-500">{template.description}</p>

            <div className="mt-6 flex flex-col gap-5">
              {template.fields.map((field) => (
                <div key={field.name} className="flex flex-col gap-1.5">
                  <label
                    htmlFor={`kit-${field.name}`}
                    className="text-sm font-medium text-slate-700"
                  >
                    {field.label}
                  </label>
                  <input
                    id={`kit-${field.name}`}
                    name={field.name}
                    type={field.type ?? "text"}
                    value={templateValues[field.name] || ""}
                    placeholder={field.placeholder}
                    onChange={(e) => update(field.name, e.target.value)}
                    required
                    disabled={generating}
                    className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60"
                  />
                </div>
              ))}
            </div>

            {genError && (
              <p className="mt-5 rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
                {genError}
              </p>
            )}

            <button
              type="submit"
              disabled={generating}
              className="mt-6 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:scale-[1.01] hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
            >
              {generating
                ? "Generating your letter…"
                : currentLetter
                  ? "Regenerate letter"
                  : "Generate letter"}
            </button>
            <p className="mt-3 text-center text-xs text-slate-500">
              Included in your Legal Kit — regenerate any of the 6 templates as
              often as you need.
            </p>
          </form>

          {/* Generated letter — preview + print/download */}
          {currentLetter && (
            <>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  onClick={handlePrint}
                  className="w-full rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
                >
                  Download / Print as PDF
                </button>
                <a
                  href={`data:text/html;charset=utf-8,${encodeURIComponent(currentLetter)}`}
                  download={`${template.id}.html`}
                  className="w-full rounded-lg border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
                >
                  Download HTML
                </a>
              </div>

              <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <iframe
                  ref={iframeRef}
                  title="Your letter"
                  srcDoc={currentLetter}
                  className="h-[800px] w-full border-0"
                />
              </div>
            </>
          )}

          <p className="mt-10 text-center text-xs text-slate-400">
            DemandFlowww provides self-help document templates and is not a law
            firm or a substitute for an attorney.
          </p>
        </>
      )}
    </main>
  );
}

function SuccessInner() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const isSubscription = searchParams.get("subscription") === "1";
  const isBundle = searchParams.get("bundle") === "1";

  const [html, setHtml] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(
    sessionId ? null : "No checkout session was found in the URL.",
  );
  const [templateId, setTemplateId] = useState<TemplateId>("demand-letter");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!sessionId || isSubscription || isBundle) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `/api/get-letter?session_id=${encodeURIComponent(sessionId)}`,
        );
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || "We couldn't load your letter.");
        }
        const text = await res.text();
        if (!cancelled) {
          setHtml(text);

          // Try to parse templateId from the HTML title
          let detected: TemplateId = "demand-letter";
          if (text.includes("Cease and Desist")) {
            detected = "cease-and-desist";
          } else if (text.includes("Contract Termination")) {
            detected = "contract-termination";
          } else if (text.includes("Late Rent Notice")) {
            detected = "late-rent-notice";
          } else if (text.includes("Payment Reminder")) {
            detected = "freelance-reminder";
          }
          setTemplateId(detected);

          const tpl = TEMPLATE_LIST.find((t) => t.id === detected) ?? TEMPLATE_LIST[0];
          pushDataLayer({
            event: "purchase",
            currency: "USD",
            value: tpl.priceCents / 100,
            transaction_id: sessionId,
          });
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "We couldn't load your letter.",
          );
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [sessionId, isSubscription, isBundle]);

  function handlePrint() {
    const win = iframeRef.current?.contentWindow;
    if (win) {
      win.focus();
      win.print();
    }
  }

  const currentTemplate = TEMPLATE_LIST.find((t) => t.id === templateId);
  const otherTemplates = TEMPLATE_LIST.filter((t) => t.id !== templateId);

  if (isSubscription || isBundle) {
    if (!sessionId) {
      return (
        <main className="mx-auto w-full max-w-[600px] px-5 py-16 text-center text-slate-500">
          No checkout session was found in the URL.
        </main>
      );
    }
    return isBundle ? (
      <BundleSuccess sessionId={sessionId} />
    ) : (
      <SubscriptionSuccess sessionId={sessionId} />
    );
  }

  return (
    <main className="mx-auto w-full max-w-[760px] px-5 py-12 sm:py-16">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
          ✓
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          {currentTemplate?.successTitle ?? "Your letter is ready!"}
        </h1>
        <p className="mt-3 text-slate-600">
          {currentTemplate?.successMessage ??
            "Review it below, then download or print it as a PDF to send."}
        </p>
      </div>

      {error && (
        <div className="mt-8 rounded-lg bg-red-50 px-4 py-3 text-center text-sm text-red-700">
          {error}{" "}
          <Link href="/" className="font-semibold underline">
            Start over
          </Link>
        </div>
      )}

      {!error && !html && (
        <p className="mt-8 text-center text-slate-500">Loading your letter…</p>
      )}

      {html && (
        <>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={handlePrint}
              className="w-full rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
            >
              Download / Print as PDF
            </button>
            <a
              href={`/api/get-letter?session_id=${encodeURIComponent(
                sessionId ?? "",
              )}&download=1`}
              className="w-full rounded-lg border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
            >
              Download HTML
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <iframe
              ref={iframeRef}
              title="Your letter"
              srcDoc={html}
              className="h-[800px] w-full border-0"
            />
          </div>
        </>
      )}

      {/* ── Cross-sell: Need another letter type? ── */}
      {otherTemplates.length > 0 && (
        <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-center text-xl font-semibold text-slate-900">
            Need another letter type?
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            We have more templates ready for you.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherTemplates.map((t) => (
              <Link
                key={t.id}
                href="/"
                className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 p-4 text-center transition hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm"
              >
                <span className="text-2xl">{t.icon}</span>
                <span className="mt-2 text-sm font-semibold text-slate-800">
                  {t.name}
                </span>
                <span className="mt-1 text-xs text-slate-500">
                  {t.description}
                </span>
                <span className="mt-2 inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                  $29
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <p className="mt-10 text-center text-sm text-slate-500">
        <Link href="/" className="underline">
          Create another letter
        </Link>
      </p>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-[760px] px-5 py-16 text-center text-slate-500">
          Loading…
        </main>
      }
    >
      <SuccessInner />
    </Suspense>
  );
}
