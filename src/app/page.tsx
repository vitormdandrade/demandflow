"use client";

import { useRef, useState } from "react";
import { pushDataLayer } from "@/lib/gtm";

interface Field {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

const FIELDS: Field[] = [
  { name: "yourName", label: "Your Full Name", placeholder: "Jane Freelancer" },
  {
    name: "yourEmail",
    label: "Your Email",
    type: "email",
    placeholder: "jane@example.com",
  },
  {
    name: "clientName",
    label: "Client / Business Name",
    placeholder: "Acme Corp",
  },
  {
    name: "clientAddress",
    label: "Client Address",
    placeholder: "123 Market St, San Francisco, CA 94103",
  },
  { name: "amount", label: "Amount Owed ($)", placeholder: "2500.00" },
  {
    name: "description",
    label: "Brief Description of Work Done",
    placeholder: "Website redesign and development",
  },
  {
    name: "dateCompleted",
    label: "Date Work Was Completed",
    placeholder: "March 15, 2026",
  },
];

const EMPTY = Object.fromEntries(FIELDS.map((f) => [f.name, ""])) as Record<
  string,
  string
>;

const STEPS = [
  {
    icon: "📝",
    title: "Fill in the details",
    body: "Enter your info, your client's details, and what you're owed. Takes about a minute.",
  },
  {
    icon: "🔒",
    title: "Pay securely",
    body: "One-time $29 via Stripe. No subscription, no account, no surprises.",
  },
  {
    icon: "📄",
    title: "Download your letter",
    body: "Get a polished, ready-to-send demand letter instantly. Save it as a PDF and send.",
  },
];

export default function Home() {
  const [values, setValues] = useState<Record<string, string>>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formStarted = useRef(false);

  function update(name: string, value: string) {
    // Fire a single `form_start` event the first time the user types anything.
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
      value: 29.0,
    });
    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
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
          Send a Demand Letter When a Client Doesn&apos;t Pay
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          A legally-formatted demand letter in 60 seconds. No lawyer needed.{" "}
          <span className="font-semibold text-slate-900">$29.</span>
        </p>
        <div className="mt-5 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
            <span className="text-amber-500" aria-hidden>
              ★★★★★
            </span>
            Trusted by freelancers
          </span>
        </div>
      </header>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-900/5 sm:p-8"
      >
        <div className="flex flex-col gap-5">
          {FIELDS.map((field) => (
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
                value={values[field.name]}
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
          {loading ? "Redirecting to checkout…" : "Send Demand Letter — $29"}
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
