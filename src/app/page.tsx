"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { pushDataLayer } from "@/lib/gtm";
import { gaEvent } from "@/lib/ga";
import { LETTERS_SENT_THIS_MONTH } from "@/lib/site";
import { TEMPLATE_LIST, type TemplateConfig } from "@/lib/templates";

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

const AUDIENCE = [
  {
    icon: "🎨",
    title: "Freelance Designers",
    pain: "\"Final files delivered\" — then radio silence when the invoice is due.",
  },
  {
    icon: "💻",
    title: "Web Developers",
    pain: "The site is live and earning them money. Your last milestone? Still unpaid.",
  },
  {
    icon: "✍️",
    title: "Writers & Consultants",
    pain: "You delivered the strategy. They ghosted the moment it was time to pay.",
  },
  {
    icon: "📸",
    title: "Photographers & Creatives",
    pain: "They used your photos everywhere — everywhere except the payment portal.",
  },
  {
    icon: "🔧",
    title: "Contractors & Trades",
    pain: "The job's done and signed off, but the final check keeps 'getting lost.'",
  },
  {
    icon: "🏢",
    title: "Small Business Owners",
    pain: "A late-paying client is quietly wrecking your cash flow this month.",
  },
];

const BEFORE_AFTER = {
  before: [
    "Google \"how to write a demand letter\" for an hour",
    "Second-guess every sentence — is this even legally sound?",
    "Pay a lawyer $250–$400 just for a first letter",
    "Wait days for a draft to come back",
    "Send something that looks amateur and gets ignored",
    "Give up and write off the money",
  ],
  after: [
    "Pick your letter type and fill a short form",
    "Get airtight, professional legal language automatically",
    "Pay a flat $29 — no retainer, no hourly billing",
    "Download your finished letter in about 60 seconds",
    "Send a letter that looks like it came from a law office",
    "Get paid — or get your money back",
  ],
};

const FAQS = [
  {
    q: "What is a demand letter and when should I send one?",
    a: "A demand letter is a formal written notice that requests payment for work completed. You should send one when a client has not paid an invoice after reasonable follow-ups — it puts your claim in writing, signals you're serious, and is often the step before small claims court.",
  },
  {
    q: "How quickly will my demand letter be ready?",
    a: "Your professionally formatted demand letter is generated instantly after checkout — usually within 60 seconds. You can download it, save it as a PDF, and send it right away.",
  },
  {
    q: "Do I need a lawyer to send a demand letter?",
    a: "No. A demand letter does not require a lawyer. DemandFlow generates a legally-formatted letter based on your details that you send directly to your client. For disputes involving very large amounts or complex contracts, consulting an attorney is always an option.",
  },
  {
    q: "What if the letter doesn't get me paid?",
    a: "We stand behind our letters with a 100% money-back guarantee. If you're not satisfied, email us and we'll refund your $29 — no questions asked. You've got nothing to lose and an unpaid invoice to recover.",
  },
  {
    q: "Is my payment information secure?",
    a: "Yes. All payments are processed by Stripe, a PCI-DSS Level 1 certified payment provider — the same infrastructure used by Amazon and Google. DemandFlow never sees or stores your card details.",
  },
  {
    q: "Do you store my personal or client information?",
    a: "We only use the details you enter to generate your letter. We don't sell your data, and your letter is yours to keep. See our Privacy Policy for the full details.",
  },
];

const TRUST_BADGES = [
  { icon: "🔒", label: "SSL Secured" },
  { icon: "💳", label: "Stripe Verified" },
  { icon: "↩️", label: "100% Money-Back" },
  { icon: "⚡", label: "Ready in 60s" },
];

const SAMPLE_LETTER = `Re: Demand for Payment — Outstanding Balance of $2,500.00

Dear Acme Corp,

This letter serves as formal notice that payment in the amount of $2,500.00
remains outstanding for website redesign and development, completed on
March 15, 2026.

Despite previous communications, this balance remains unpaid.

DEMAND IS HEREBY MADE for immediate payment of the full amount of $2,500.00.
If payment is not received within 14 days of this letter, I reserve the right
to pursue all available legal remedies, including but not limited to filing a
claim in small claims court.

This letter is sent without prejudice to any and all rights, which are
expressly reserved.

Sincerely,
Jane Freelancer`;

export default function Home() {
  const [template, setTemplate] = useState<TemplateConfig>(TEMPLATE_LIST[0]);
  const [values, setValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formStarted = useRef(false);

  // Pre-checkout email capture ("See a sample first").
  const [sampleEmail, setSampleEmail] = useState("");
  const [sampleShown, setSampleShown] = useState(false);
  const [sampleError, setSampleError] = useState<string | null>(null);
  const [sampleSubmitting, setSampleSubmitting] = useState(false);

  // FAQ accordion.
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const price = (template.priceCents / 100).toFixed(0);

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
      gaEvent("form_start", { template: template.id });
    }
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSampleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSampleError(null);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sampleEmail.trim())) {
      setSampleError("Please enter a valid email address.");
      return;
    }
    setSampleSubmitting(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: sampleEmail.trim(),
          source: "sample-preview",
          template: template.id,
        }),
      });
      pushDataLayer({ event: "lead_capture", source: "sample-preview" });
      gaEvent("generate_lead", { source: "sample-preview" });
      setSampleShown(true);
    } catch {
      // Even if the network hiccups, still show the sample — the value is the point.
      setSampleShown(true);
    } finally {
      setSampleSubmitting(false);
    }
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
    gaEvent("begin_checkout", {
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
    <main className="w-full">
      {/* ─────────────── Hero ─────────────── */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-blue-50/60 to-transparent">
        <div className="mx-auto w-full max-w-[720px] px-5 py-12 text-center sm:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {LETTERS_SENT_THIS_MONTH.toLocaleString()} letters sent this month
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Your Client Owes You Money.
            <br />
            <span className="text-blue-600">We&apos;ll Help You Get It.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600">
            Generate a professional, legally-formatted demand letter for an
            unpaid invoice in <strong className="text-slate-900">60 seconds</strong>
            {" "}— no lawyer, no retainer, no monthly fee. Just{" "}
            <strong className="text-slate-900">${price} once.</strong>
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#create"
              className="w-full rounded-lg bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md sm:w-auto"
            >
              Create My Letter — ${price}
            </a>
            <a
              href="#sample"
              className="w-full rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
            >
              See a sample first
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {TRUST_BADGES.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500"
              >
                <span aria-hidden>{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Create (template selector + form) ─────────────── */}
      <section id="create" className="mx-auto w-full max-w-[600px] px-5 py-12 sm:py-16 scroll-mt-16">
        <header className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {template.heading}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {template.subheading}
          </p>
        </header>

        {/* Money-back guarantee — prominent, above the form */}
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
          <span className="text-2xl" aria-hidden>
            🛡️
          </span>
          <div>
            <p className="text-sm font-semibold text-green-900">
              100% Money-Back Guarantee
            </p>
            <p className="mt-0.5 text-sm text-green-800">
              If the letter doesn&apos;t get you paid, we&apos;ll refund every
              cent. No questions asked. The only risk is leaving your invoice
              unpaid.
            </p>
          </div>
        </div>

        {/* Template Selector */}
        <div className="mb-8">
          <p className="mb-3 text-sm font-medium text-slate-500">
            Choose a letter type:
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {TEMPLATE_LIST.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => selectTemplate(t)}
                aria-pressed={template.id === t.id}
                className={`flex flex-col items-center rounded-xl border p-3 text-center transition ${
                  template.id === t.id
                    ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/30"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span className="text-2xl" aria-hidden>
                  {t.icon}
                </span>
                <span className="mt-1 text-xs font-semibold text-slate-800">
                  {t.name}
                </span>
                <span className="mt-0.5 text-[10px] leading-tight text-slate-500">
                  ${(t.priceCents / 100).toFixed(0)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
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
                  className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60"
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
            {loading
              ? "Redirecting to checkout…"
              : `Send ${template.name} — $${price}`}
          </button>

          <div className="mt-4 space-y-2">
            <p className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
              <span aria-hidden>🔒</span>
              Secure payment via Stripe. Your letter is generated instantly after
              checkout.
            </p>
            <p className="flex items-center justify-center gap-1.5 text-center text-xs font-medium text-green-700">
              <span aria-hidden>✓</span>
              100% Money-Back Guarantee — refund if you&apos;re not satisfied. No
              questions asked.
            </p>
          </div>
        </form>
      </section>

      {/* ─────────────── Price anchoring ─────────────── */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-[720px] px-5 py-14">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            $29 vs. the alternatives
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-slate-600">
            A single unpaid invoice usually dwarfs the cost of getting it paid.
            Here&apos;s what recovering your money normally looks like:
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-500">
                  <th className="px-4 py-3 font-medium">Option</th>
                  <th className="px-4 py-3 font-medium">Typical cost</th>
                  <th className="hidden px-4 py-3 font-medium sm:table-cell">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="text-slate-600">
                  <td className="px-4 py-3">Hire a lawyer</td>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    $300–$500+
                  </td>
                  <td className="hidden px-4 py-3 sm:table-cell">Days to weeks</td>
                </tr>
                <tr className="text-slate-600">
                  <td className="px-4 py-3">Collections agency</td>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    20–50% of the invoice
                  </td>
                  <td className="hidden px-4 py-3 sm:table-cell">Weeks</td>
                </tr>
                <tr className="text-slate-600">
                  <td className="px-4 py-3">Write it off</td>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    100% of what you&apos;re owed
                  </td>
                  <td className="hidden px-4 py-3 sm:table-cell">Forever</td>
                </tr>
                <tr className="bg-blue-50/60 text-slate-900">
                  <td className="px-4 py-3 font-semibold">
                    <span className="mr-1.5" aria-hidden>
                      ⭐
                    </span>
                    DemandFlow
                  </td>
                  <td className="px-4 py-3 font-bold text-blue-700">$29 flat</td>
                  <td className="hidden px-4 py-3 font-medium sm:table-cell">
                    60 seconds
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-slate-500">
            Need more than one letter?{" "}
            <Link
              href="/pricing"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              See our Pro plan →
            </Link>
          </p>
        </div>
      </section>

      {/* ─────────────── See a sample first (email capture) ─────────────── */}
      <section
        id="sample"
        className="mx-auto w-full max-w-[720px] px-5 py-14 scroll-mt-16"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
            Want to see one first?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-slate-600">
            Enter your email and we&apos;ll show you exactly what a finished
            DemandFlow letter looks like — no payment required.
          </p>

          {!sampleShown ? (
            <form
              onSubmit={handleSampleSubmit}
              className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <div className="flex-1">
                <label htmlFor="sample-email" className="sr-only">
                  Your email address
                </label>
                <input
                  id="sample-email"
                  name="sample-email"
                  type="email"
                  value={sampleEmail}
                  onChange={(e) => setSampleEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30"
                />
              </div>
              <button
                type="submit"
                disabled={sampleSubmitting}
                className="rounded-lg bg-slate-900 px-5 py-2.5 font-semibold text-white transition hover:bg-slate-800 disabled:opacity-70"
              >
                {sampleSubmitting ? "Loading…" : "Show me the sample"}
              </button>
            </form>
          ) : (
            <div className="mt-6">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <div className="border-b border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-400">
                  Sample — Demand Letter (preview)
                </div>
                <pre className="max-h-80 overflow-auto whitespace-pre-wrap px-5 py-4 font-mono text-xs leading-relaxed text-slate-700">
                  {SAMPLE_LETTER}
                </pre>
              </div>
              <div className="mt-5 text-center">
                <a
                  href="#create"
                  className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Create mine now — ${price}
                </a>
              </div>
            </div>
          )}

          {sampleError && (
            <p className="mt-3 text-center text-sm text-red-600">{sampleError}</p>
          )}
        </div>
      </section>

      {/* ─────────────── Who is this for ─────────────── */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-[960px] px-5 py-14">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Built for people who do the work — and deserve to be paid
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCE.map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-xl">
                  <span aria-hidden>{a.icon}</span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-slate-900">
                  {a.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">{a.pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Before vs After ─────────────── */}
      <section className="mx-auto w-full max-w-[960px] px-5 py-14">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          The hard way vs. the DemandFlow way
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-700">
              <span aria-hidden>😩</span> Doing it yourself
            </h3>
            <ul className="mt-4 space-y-3">
              {BEFORE_AFTER.before.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-slate-600"
                >
                  <span className="mt-0.5 text-red-400" aria-hidden>
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/40 p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-900">
              <span aria-hidden>⚡</span> With DemandFlow
            </h3>
            <ul className="mt-4 space-y-3">
              {BEFORE_AFTER.after.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <span className="mt-0.5 font-bold text-green-600" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────────── How it works ─────────────── */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-[960px] px-5 py-14">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            How it works
          </h2>
          <ol className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
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
        </div>
      </section>

      {/* ─────────────── Testimonials ─────────────── */}
      <section className="mx-auto w-full max-w-[960px] px-5 py-14">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Freelancers are getting paid
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-1 text-sm text-amber-500">
                {"★★★★★"}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
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

      {/* ─────────────── FAQ accordion ─────────────── */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-[720px] px-5 py-14">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-semibold text-slate-900">
                        {faq.q}
                      </span>
                      <span
                        aria-hidden
                        className={`shrink-0 text-slate-400 transition-transform ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  {isOpen && (
                    <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── Final CTA ─────────────── */}
      <section className="mx-auto w-full max-w-[720px] px-5 py-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Stop chasing. Start collecting.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
          Every day you wait is another day your money sits in someone else&apos;s
          account. Send a letter that gets taken seriously — in the next 60
          seconds.
        </p>
        <a
          href="#create"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
        >
          Get My Letter — ${price}
        </a>
        <p className="mt-3 text-xs text-slate-500">
          Backed by our 100% money-back guarantee.
        </p>
      </section>

      {/* FAQ structured data — mirrors the visible accordion above */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </main>
  );
}
