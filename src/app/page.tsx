"use client";

import { useRef, useState } from "react";
import { pushDataLayer } from "@/lib/gtm";
import {
  TEMPLATE_LIST,
  type TemplateConfig,
} from "@/lib/templates";

const TESTIMONIALS = [
  {
    quote:
      "I sent the letter on a Friday. Client paid Monday morning. Best $29 I've ever spent.",
    name: "Marcus R.",
    role: "Graphic Designer",
    metric: "Paid in 3 days",
  },
  {
    quote:
      "Three months of ignored invoices — one DemandFlow letter got a response in 24 hours. It paid for itself 100x over.",
    name: "Priya K.",
    role: "Web Developer",
    metric: "$4,200 recovered",
  },
  {
    quote:
      "I was about to write off a $950 invoice. The letter looked so professional the client apologized and paid immediately.",
    name: "David L.",
    role: "Marketing Consultant",
    metric: "100% recovery",
  },
];

const STEPS = [
  {
    icon: "📝",
    title: "Fill in the details",
    body: "Enter your info, the recipient's details, and your situation. Takes about a minute.",
  },
  {
    icon: "🔒",
    title: "Pay securely",
    body: "One-time $29 via Stripe. No subscription, no account, no surprises.",
  },
  {
    icon: "📄",
    title: "Download your letter",
    body: "Get a polished, ready-to-send letter instantly. Save it as a PDF and send.",
  },
];

export default function Home() {
  const [template, setTemplate] = useState<TemplateConfig>(TEMPLATE_LIST[0]);
  const [values, setValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formStarted = useRef(false);

  function selectTemplate(t: TemplateConfig) {
    setTemplate(t);
    setValues({});
    setError(null);
    formStarted.current = false;
  }

  function update(name: string, value: string) {
    if (!formStarted.current && value.length > 0) {
      formStarted.current = true;
      pushDataLayer({ event: "form_start" });
    }
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    pushDataLayer({
      event: "begin_checkout",
      currency: "USD",
      value: template.priceCents / 100,
      template: template.id,
    });
    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ template: template.id, ...values }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      window.location.href = data.url;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      pushDataLayer({ event: "checkout_error", error_message: message });
      setError(message);
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-[600px] px-5 py-12 sm:py-16">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {template.heading}
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          {template.subheading}{" "}
          <span className="font-semibold text-slate-900">${(template.priceCents / 100).toFixed(0)}.</span>
        </p>
        <div className="mt-5 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
            <span className="text-amber-500" aria-hidden>
              ★★★★★
            </span>
            Trusted by thousands
          </span>
        </div>
      </header>

      {/* ── Template Selector ── */}
      <div className="mb-8">
        <p className="mb-3 text-sm font-medium text-slate-500">
          Choose a letter type:
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {TEMPLATE_LIST.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => selectTemplate(t)}
              className={`flex flex-col items-center rounded-xl border p-3 text-center transition ${
                template.id === t.id
                  ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/30"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <span className="text-2xl">{t.icon}</span>
              <span className="mt-1 text-xs font-semibold text-slate-800">
                {t.name}
              </span>
              <span className="mt-0.5 text-[10px] text-slate-500 leading-tight">
                {t.description}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Form ── */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-900/5 sm:p-8"
      >
        <div className="flex flex-col gap-5">
          {template.fields.map((field) => (
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
                required
                disabled={loading}
                className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60"
              />
            </div>
          ))}
        </div>

        {error && (
          <p className="mt-5 rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-7 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Redirecting to checkout…" : `Send ${template.name} — $${(template.priceCents / 100).toFixed(0)}`}
        </button>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
          <span aria-hidden>🔒</span>
          Secure payment via Stripe. Your letter is generated instantly after
          checkout.
        </p>
      </form>

      <section className="mt-14">
        <h2 className="text-center text-xl font-semibold text-slate-900">
          How it works
        </h2>
        <ol className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-2xl">
                <span aria-hidden>{step.icon}</span>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-blue-600">
                Step {i + 1}
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="text-center text-xl font-semibold text-slate-900">
          Trusted by freelancers
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-1 text-amber-500 text-sm">
                {"★★★★★"}
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100 mt-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
                <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                  {t.metric}
                </span>
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a demand letter and when should I send one?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A demand letter is a formal written notice that requests payment for work completed. You should send one when a client has not paid an invoice after reasonable follow-ups — it puts your claim in writing, signals you're serious, and is often the step before small claims court.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly will my demand letter be ready?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Your professionally formatted demand letter is generated instantly after checkout — usually within 60 seconds. You can download, save as PDF, and send it right away.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a lawyer to send a demand letter?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. A demand letter does not require a lawyer. DemandFlow generates a legally-formatted letter based on your details that you send directly to your client. For disputes involving very large amounts or complex contracts, consulting an attorney is always an option.",
                },
              },
              {
                "@type": "Question",
                name: "Is my payment information secure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. All payments are processed by Stripe, a PCI-DSS Level 1 certified payment provider. DemandFlow never stores your credit card details — Stripe handles everything securely.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
