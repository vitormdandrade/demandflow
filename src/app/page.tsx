"use client";

import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { pushDataLayer } from "@/lib/gtm";
import { gaEvent } from "@/lib/ga";
import { LETTERS_SENT_THIS_MONTH } from "@/lib/site";
import {
  LEGAL_KIT,
  LEGAL_KIT_SAVINGS_CENTS,
  TEMPLATE_LIST,
  type TemplateConfig,
} from "@/lib/templates";
import { renderTemplateHtml } from "@/lib/letter";
import LegalWarning from "@/components/LegalWarning";
import { useUsageCounter } from "@/lib/useUsageCounter";

// Illustrative examples of the kind of outcomes DemandFlowww letters are built to
// produce. Names and identifying details are changed — this section is framed as
// example scenarios, not verified individual endorsements.
const TESTIMONIALS = [
  {
    quote:
      "Shot a 40-person corporate headshot day — $450 invoice, three weeks of dead silence after. I sent the letter on my lunch break. By 2pm I had a Zelle notification and an apology I didn't even ask for.",
    name: "Maria Alvarez",
    role: "Photographer, Savannah, GA",
    metric: "Paid in 2 hours",
  },
  {
    quote:
      "Rebuilt their entire checkout flow — conversions went up 30% the month after launch. The final $3,800 milestone sat \"in review\" for six weeks. Sent the letter Tuesday night, woke up to the wire confirmation Wednesday morning.",
    name: "Derek Osei",
    role: "Web Developer, Austin, TX",
    metric: "Paid next morning",
  },
  {
    quote:
      "My homepage copy has been live on their site for two months, still generating leads for them. \"Accounting is backed up\" three times running on a $1,200 invoice. Letter went out Monday. Money landed Thursday.",
    name: "Ines Ferreira",
    role: "Copywriter, Chicago, IL",
    metric: "Paid in 3 days",
  },
  {
    quote:
      "An $8,500 growth strategy engagement, invoiced in spring, still unpaid by summer. I kept hearing \"next week\" from their CFO. The letter mentioned legal remedies once — that's all it took. Paid in full nine days later.",
    name: "Owen Reyes",
    role: "Business Consultant, Raleigh, NC",
    metric: "$8,500 recovered",
  },
  {
    quote:
      "It was \"only\" $680 for a logo package, so I almost let it slide — chasing small invoices always feels like more trouble than it's worth. Sent the letter Thursday morning, had the Venmo notification before dinner.",
    name: "Renee Kim",
    role: "Brand Designer, Portland, OR",
    metric: "Paid same day",
  },
  {
    quote:
      "Finished a kitchen remodel in the spring. Homeowner kept \"forgetting\" the final $2,100 draw. My letter went out Monday with a 10-day deadline. Check was in my hand by Thursday — never had to say a word to them directly.",
    name: "Diego Morales",
    role: "General Contractor, San Antonio, TX",
    metric: "Paid in 3 days",
  },
];

const STEPS = [
  {
    icon: "📝",
    title: "Tell us what happened",
    body: "Pick your letter type and answer a few plain-English questions — who owes you, how much, and what happened. No legal jargon, no blank page staring back at you. Most people finish before their coffee gets cold.",
  },
  {
    icon: "🔒",
    title: "Pay $29, not $300",
    body: "One secure Stripe checkout — no account, no subscription, no upsell maze. A lawyer charges $300+ in retainer fees for this exact letter. Think of the $29 as the cost of finally doing something instead of nothing.",
  },
  {
    icon: "📄",
    title: "Hit send, feel different",
    body: "Your letter appears instantly — real letterhead, precise legal language, ready to download as a PDF. Attach it to an email or mail it certified. The second you hit send, you stop being the freelancer who's still waiting.",
  },
];

// The escalation verb used in CTAs, tuned per letter type so the button matches
// what the sender is actually trying to do.
const CTA_VERBS: Record<string, string> = {
  "demand-letter": "Make Them Pay",
  "final-notice": "Escalate Now",
  "cease-and-desist": "Shut It Down",
  "contract-termination": "End The Contract",
  "late-rent-notice": "Get My Rent",
  "freelance-reminder": "Send My Reminder",
};

const AFTERMATH_STEPS = [
  {
    icon: "📄",
    title: "You download the PDF",
    body: "Real letterhead, precise legal formatting — ready the moment checkout clears.",
  },
  {
    icon: "📬",
    title: "They open it and see you're serious",
    body: "Not another invoice nudge. The tone shifts before they finish the first sentence.",
  },
  {
    icon: "💸",
    title: "Payment arrives",
    body: "Usually within 48 hours — most clients pay before your deadline even hits.",
  },
  {
    icon: "😌",
    title: "You feel that relief",
    body: "Proof that being direct works — and you never had to ask twice.",
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
    a: "No. A demand letter does not require a lawyer. DemandFlowww generates a legally-formatted letter based on your details that you send directly to your client. For disputes involving very large amounts or complex contracts, consulting an attorney is always an option.",
  },
  {
    q: "What if the letter doesn't get me paid?",
    a: "We stand behind our letters with a 100% money-back guarantee. If you're not satisfied, email us and we'll refund your $29 — no questions asked. You've got nothing to lose and an unpaid invoice to recover.",
  },
  {
    q: "Is my payment information secure?",
    a: "Yes. All payments are processed by Stripe, a PCI-DSS Level 1 certified payment provider — the same infrastructure used by Amazon and Google. DemandFlowww never sees or stores your card details.",
  },
  {
    q: "Do you store my personal or client information?",
    a: "We only use the details you enter to generate your letter. We don't sell your data, and your letter is yours to keep. See our Privacy Policy for the full details.",
  },
];

const TRUST_BADGES = [
  {
    icon: "🧑‍💻",
    label: `${LETTERS_SENT_THIS_MONTH.toLocaleString("en-US")} freelancers got paid this month`,
  },
  { icon: "💳", label: "Stripe Verified" },
  { icon: "↩️", label: "100% Money-Back Guarantee" },
  { icon: "⭐", label: "4.9 average rating" },
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

  // Pro subscriber — instant letter generation
  const [proLetterGenerated, setProLetterGenerated] = useState(false);
  const [proLetterHtml, setProLetterHtml] = useState<string | null>(null);
  const [isPro, setIsPro] = useState(false);
  const [isCheckingPro, setIsCheckingPro] = useState(false);

  // Usage counter — tracks free letters generated this month
  const usage = useUsageCounter(isPro);

  // Debounced Pro check when user types their email
  const proTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  function checkProStatus(email: string) {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsPro(false);
      return;
    }
    if (proTimerRef.current) clearTimeout(proTimerRef.current);
    proTimerRef.current = setTimeout(async () => {
      setIsCheckingPro(true);
      try {
        const res = await fetch(`/api/subscription-status?email=${encodeURIComponent(email)}`);
        const data = await res.json();
        setIsPro(!!data.active);
      } catch {
        setIsPro(false);
      } finally {
        setIsCheckingPro(false);
      }
    }, 600);
  }

  const price = (template.priceCents / 100).toFixed(0);
  const ctaVerb = CTA_VERBS[template.id] ?? "Get My Letter";

  // Live-ish letter preview: renders the real letter template with whatever the
  // user has typed so far, falling back to each field's placeholder so it never
  // looks broken or empty. Uses the same renderer the paid checkout produces.
  // Computed client-side only (after mount) — the renderer embeds the current
  // timestamp in a reference number, which would otherwise mismatch between
  // server-rendered and client-hydrated HTML.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const params = new URLSearchParams(window.location.search);
    const amount = params.get("amount");
    if (amount) setValues((prev) => ({ ...prev, amount }));
  }, []);

  const previewHtml = useMemo(() => {
    if (!mounted) return null;
    const filled: Record<string, string> = {};
    for (const field of template.fields) {
      filled[field.name] = (values[field.name] || "").trim() || field.placeholder || "";
    }
    // Optional brand name for live preview letterhead
    if (values["brandName"]?.trim()) {
      filled["brandName"] = values["brandName"].trim();
    }
    try {
      return renderTemplateHtml(template.id, filled, { watermark: !isPro });
    } catch {
      return null;
    }
  }, [mounted, template, values]);

  function selectTemplate(t: TemplateConfig) {
    setTemplate(t);
    setValues({});
    setError(null);
    setIsPro(false);
    formStarted.current = false;
  }

  function update(name: string, value: string) {
    if (!formStarted.current && value.length > 0) {
      formStarted.current = true;
      pushDataLayer({ event: "form_start" });
      gaEvent("form_start", { template: template.id });
    }
    setValues((prev) => ({ ...prev, [name]: value }));

    // Live Pro detection on email field
    if (name === "yourEmail") {
      checkProStatus(value);
    }
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

      // Pro subscriber — letter generated instantly, no payment needed
      if (data.pro && data.html) {
        pushDataLayer({ event: "pro_letter_generated", template: template.id });
        gaEvent("pro_letter_generated", { template: template.id });
        setProLetterHtml(data.html);
        setProLetterGenerated(true);
        setLoading(false);
        return;
      }

      // Non-Pro: increment usage counter before redirecting to checkout
      usage.increment();

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
        <div className="mx-auto w-full max-w-[720px] px-5 py-14 text-center sm:py-20">
          <p className="text-balance text-sm font-medium text-slate-500 sm:text-base">
            You did the work. They enjoyed the result. Now they&apos;re
            ignoring your invoice.
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-balance text-slate-900 sm:text-5xl">
            Stop Being Polite About
            <br />
            <span className="text-blue-600">Money You Already Earned.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-lg text-slate-600">
            DemandFlowww turns silence into a{" "}
            <strong className="text-slate-900">
              professional, legally-formatted demand letter
            </strong>{" "}
            in 60 seconds — no lawyer, no retainer, no more awkward
            follow-ups. <strong className="text-slate-900">${price} once</strong>{" "}
            — and it becomes their problem, not yours.
          </p>

          <div className="mt-7 flex flex-col items-center">
            <a
              href="#create"
              className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-4 text-base font-semibold text-white shadow-sm transition hover:scale-[1.02] hover:bg-blue-700 hover:shadow-md active:scale-[0.98] sm:w-auto"
            >
              Get My Money <span aria-hidden>→</span> ${price}
            </a>
            <a
              href="#sample"
              className="mt-4 text-sm font-medium text-slate-500 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-700"
            >
              Not ready to pay? See a real sample first
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────── Trust bar ─────────────── */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-[960px] flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-5 text-center sm:gap-x-8">
          {TRUST_BADGES.map((b, i) => (
            <span key={b.label} className="flex items-center gap-x-6 sm:gap-x-8">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 sm:text-sm">
                <span aria-hidden className="text-base">
                  {b.icon}
                </span>
                {b.label}
              </span>
              {i < TRUST_BADGES.length - 1 && (
                <span aria-hidden className="hidden h-4 w-px bg-slate-200 sm:block" />
              )}
            </span>
          ))}
        </div>
      </section>

      {/* ─────────────── Create (template selector + form + live preview) ─────────────── */}
      <section id="create" className="mx-auto w-full max-w-[1100px] px-5 py-12 sm:py-16 scroll-mt-16">
        <header className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {template.heading}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {template.subheading}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
        <div className="mx-auto w-full max-w-[600px] lg:mx-0">
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
                <span className="mt-0.5 text-[10px] leading-tight text-slate-500">
                  ${(t.priceCents / 100).toFixed(0)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* NDA & Contracts */}
        <Link
          href="/nda"
          className="mb-3 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:shadow-md"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xl">🔏</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900">NDA &amp; Contracts</p>
            <p className="text-xs text-slate-500 leading-tight mt-0.5">
              Non-Disclosure Agreements, Service Agreements &amp; more — from $15
            </p>
          </div>
          <span className="shrink-0 text-slate-400 text-sm">→</span>
        </Link>

        {/* Late Fee Calculator */}
        <Link
          href="/invoice-guard"
          className="mb-3 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:shadow-md"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-xl">⏱️</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900">Late Fee Calculator</p>
            <p className="text-xs text-slate-500 leading-tight mt-0.5">
              Calculate statutory interest by state — free tool
            </p>
          </div>
          <span className="shrink-0 text-slate-400 text-sm">→</span>
        </Link>

        {/* Retirement Simulator */}
        <Link
          href="/retirement"
          className="mb-8 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:shadow-md"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50 text-xl">📊</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900">Retirement Simulator</p>
            <p className="text-xs text-slate-500 leading-tight mt-0.5">
              Social Security + 401(k) projections — free calculator, full report $9
            </p>
          </div>
          <span className="shrink-0 text-slate-400 text-sm">→</span>
        </Link>

        {/* Form — or Pro success */}
        {proLetterGenerated && proLetterHtml ? (
          <div className="rounded-2xl border-2 border-blue-500 bg-white p-8 shadow-lg shadow-blue-200/40 ring-1 ring-blue-500/10">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xl">⚡</span>
              <div>
                <h3 className="text-lg font-bold text-blue-700">Pro — Letter Ready!</h3>
                <p className="text-sm text-slate-500">
                  Generated instantly as a Pro subscriber. Download or print below.
                </p>
              </div>
            </div>
            <iframe
              srcDoc={proLetterHtml}
              className="h-[700px] w-full rounded-lg border border-slate-200"
              title="Your letter preview"
            />
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <button
                type="button"
                onClick={() => {
                  setProLetterGenerated(false);
                  setProLetterHtml(null);
                  setValues({});
                }}
                className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                ← Create another letter
              </button>
              <a
                href={`data:text/html;charset=utf-8,${encodeURIComponent(proLetterHtml)}`}
                download="demand-letter.html"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Download PDF →
              </a>
            </div>
          </div>
        ) : (
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-900/5 sm:p-8"
        >
          <div className="flex flex-col gap-5">
            {/* Optional brand name — letterhead */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="brandName"
                className="text-sm font-medium text-slate-700"
              >
                Your Company / Brand Name{" "}
                <span className="font-normal text-slate-400">(optional)</span>
              </label>
              <input
                id="brandName"
                name="brandName"
                type="text"
                value={values["brandName"] || ""}
                placeholder="Leave blank for a clean, unbranded letterhead"
                onChange={(e) => update("brandName", e.target.value)}
                disabled={loading}
                className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60"
              />
              <p className="text-xs text-slate-400">
                Appears at the top of your letter as professional letterhead. Leave
                empty for no branding.
              </p>
            </div>

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

            {/* High-amount legal warning */}
            <LegalWarning
              value={parseFloat(values["amount"] || "0") || 0}
              label="invoice amount"
            />
          </div>

          {error && (
            <p className="mt-5 rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
              {error}
            </p>
          )}

          {/* Pro badge — shown when email matches an active subscription */}
          {isPro && (
            <div className="mt-5 flex items-center gap-3 rounded-xl border-2 border-green-200 bg-green-50 p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-xl">⚡</span>
              <div>
                <p className="text-sm font-bold text-green-800">Pro Subscriber</p>
                <p className="text-xs text-green-700">
                  Unlimited letters — no payment needed. Your letter will be generated instantly.
                </p>
              </div>
            </div>
          )}
          {isCheckingPro && (
            <p className="mt-3 text-center text-xs text-slate-400">Checking subscription…</p>
          )}

          {/* Usage counter — shows free tier limit / Pro unlimited */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs">
            {isPro ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">
                <span>⚡</span>
                Pro — Unlimited letters
              </span>
            ) : (
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-medium ${
                  usage.remaining === 0
                    ? "bg-red-50 text-red-700"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                <span>📊</span>
                {usage.count}/{usage.limit} free letters this month
                {usage.remaining === 0 && " — upgrade to Pro"}
              </span>
            )}
          </div>

          {/* Block form if free limit exceeded and not Pro */}
          {!isPro && usage.remaining === 0 && !proLetterGenerated && (
            <div className="mt-4 rounded-xl border-2 border-orange-200 bg-orange-50 p-4">
              <p className="text-sm font-bold text-orange-800">
                You've used all {usage.limit} free letters this month.
              </p>
              <p className="mt-1 text-xs text-orange-700">
                Upgrade to Pro for $19/mo to get unlimited letters, custom
                letterhead, batch export, and no watermarks.
              </p>
              <Link
                href="/pro"
                className="mt-3 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Upgrade to Pro — $19/mo
              </Link>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || (!isPro && usage.remaining === 0)}
            className="mt-5 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:scale-[1.01] hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
          >
            {loading
              ? "Generating your letter…"
              : isPro
                ? `${ctaVerb} — Free (Pro)`
                : `${ctaVerb} — $${price}`}
          </button>

          <div className="mt-4 space-y-2">
            {isPro ? (
              <p className="flex items-center justify-center gap-1.5 text-center text-xs font-medium text-green-700">
                <span aria-hidden>⚡</span>
                Pro subscriber — your letter will be generated instantly at no extra cost.
              </p>
            ) : (
              <>
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
              </>
            )}
          </div>
        </form>
        )}
        </div>

        {/* Live letter preview — updates as the form is filled in */}
        <div className="lg:sticky lg:top-20">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2.5">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Live preview
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-600">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500" />
                </span>
                Updates as you type
              </span>
            </div>
            {previewHtml ? (
              <iframe
                title="Live letter preview"
                srcDoc={previewHtml}
                className="h-[420px] w-full border-0 bg-slate-50"
              />
            ) : (
              <div className="flex h-[420px] items-center justify-center px-6 text-center text-sm text-slate-400">
                Start filling in the form to see your letter take shape.
              </div>
            )}
          </div>
          <p className="mt-3 text-center text-xs text-slate-500 lg:text-left">
            This is exactly what you&apos;ll get — filled in with your details,
            ready to download the moment you check out.
          </p>
        </div>
        </div>
      </section>

      {/* ─────────────── What happens after you send ─────────────── */}
      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-[960px] px-5 py-12 sm:py-14">
          <h2 className="text-center text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            What happens after you hit send
          </h2>
          <div className="mt-8 flex flex-col gap-0 sm:flex-row sm:items-start">
            {AFTERMATH_STEPS.map((step, i) => (
              <Fragment key={step.title}>
                <div className="flex items-start gap-4 sm:flex-1 sm:flex-col sm:items-center sm:gap-0 sm:text-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-blue-100 bg-white text-xl shadow-sm">
                    <span aria-hidden>{step.icon}</span>
                  </div>
                  <div className="sm:mt-3 sm:px-2">
                    <h3 className="text-sm font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {step.body}
                    </p>
                  </div>
                </div>
                {i < AFTERMATH_STEPS.length - 1 && (
                  <div
                    aria-hidden
                    className="ml-6 h-6 w-px bg-blue-200 sm:ml-0 sm:mt-6 sm:h-px sm:w-full sm:flex-1 sm:self-start"
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>
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
                    DemandFlowww
                  </td>
                  <td className="px-4 py-3 font-bold text-blue-700">$29 flat</td>
                  <td className="hidden px-4 py-3 font-medium sm:table-cell">
                    60 seconds
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Legal Kit bundle banner */}
          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 border-slate-900 bg-white p-5 shadow-sm sm:flex-row sm:p-6">
            <div className="flex items-start gap-3 text-center sm:text-left">
              <span className="hidden text-2xl sm:block" aria-hidden>
                📦
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Freelancer Legal Kit
                </p>
                <p className="mt-0.5 text-sm text-slate-600">
                  Get all 6 templates for $
                  {(LEGAL_KIT.priceCents / 100).toFixed(0)} — save $
                  {(LEGAL_KIT_SAVINGS_CENTS / 100).toFixed(0)} vs buying
                  individually.
                </p>
              </div>
            </div>
            <Link
              href="/pricing#legal-kit"
              className="w-full shrink-0 rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 sm:w-auto"
            >
              Get the Legal Kit →
            </Link>
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
            DemandFlowww letter looks like — no payment required.
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
                  className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:scale-[1.02] hover:bg-blue-700 active:scale-[0.98] sm:inline-flex sm:w-auto"
                >
                  Turn This Into My Letter — ${price}
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
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-150 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
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
          The hard way vs. the DemandFlowww way
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
              <span aria-hidden>⚡</span> With DemandFlowww
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
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-[960px] px-5 py-14">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Freelancers are getting paid
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-150 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
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
        <p className="mx-auto mt-6 max-w-lg text-center text-xs text-slate-400">
          Illustrative examples reflecting the kind of outcomes DemandFlowww
          letters are designed to produce. Names and identifying details have
          been changed.
        </p>
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
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-slate-300"
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
                        className={`shrink-0 text-slate-400 transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── Final CTA ─────────────── */}
      <section className="mx-auto w-full max-w-[720px] px-5 py-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Stop Chasing. Start Collecting.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
          Every day you wait is another day your money sits in someone else&apos;s
          account. Send a letter that gets taken seriously — in the next 60
          seconds.
        </p>
        <a
          href="#create"
          className="btn-glow mt-6 flex w-full items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition hover:scale-[1.02] hover:bg-blue-700 hover:shadow-md active:scale-[0.98] sm:inline-flex sm:w-auto"
        >
          {ctaVerb} — ${price}
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

      {/* HowTo structured data — step-by-step demand letter creation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Send a Demand Letter in 60 Seconds",
            description: "Generate and send a professional demand letter for unpaid invoices in three simple steps.",
            step: STEPS.map((step, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: step.title,
              text: step.body,
            })),
          }),
        }}
      />
    </main>
  );
}
