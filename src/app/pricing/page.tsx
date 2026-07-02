import type { Metadata } from "next";
import Link from "next/link";
import ProWaitlistForm from "@/components/ProWaitlistForm";

export const metadata: Metadata = {
  title: "Pricing — DemandFlowww | $29 Per Letter or Unlimited from $79/yr",
  description:
    "DemandFlowww pricing: pay $29 once for a professional demand letter — instant PDF, all 6 templates, money-back guarantee. Or go Pro for unlimited letters from $79/year. Far cheaper than a lawyer ($300–$500) or a collections agency (20–50%).",
  keywords: [
    "demand letter cost",
    "demand letter price",
    "demand letter pricing",
    "how much does a demand letter cost",
    "cheap demand letter",
    "unlimited demand letters",
    "freelancer demand letter",
  ],
  alternates: { canonical: "/pricing" },
};

const PRICING_FAQS = [
  {
    q: "How much does a demand letter cost with DemandFlowww?",
    a: "A single professional demand letter is a flat $29 — paid once, with no subscription or hidden fees. You get an instantly generated, ready-to-send PDF using any of our five letter templates. If you need to send letters regularly, our Pro plan gives you unlimited letters for $79 per year.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. Every $29 letter is backed by a 100% money-back guarantee. If you're not satisfied for any reason, email us and we'll refund your payment — no questions asked. The only real risk is leaving your invoice unpaid.",
  },
  {
    q: "Why is DemandFlowww so much cheaper than a lawyer?",
    a: "A lawyer charges $300–$500+ just to draft a first demand letter, and a collections agency can take 20–50% of whatever they recover. DemandFlowww automates the legal formatting and language, so you get a letter that looks like it came from a law office for a flat $29 — generated in about 60 seconds.",
  },
];

const BASIC_FEATURES = [
  "One professional demand letter",
  "Instantly generated, ready-to-send PDF",
  "All 5 letter templates included",
  "Airtight, professional legal language",
  "100% money-back guarantee",
  "No account, no subscription, no surprises",
];

const PRO_FEATURES = [
  "UNLIMITED letters — send as many as you need",
  "All current and future letter templates",
  "Priority generation — always first in line",
  "Saved sender details for one-click letters",
  "Early access to new letter types",
  "Everything in Basic, forever",
];

export default function PricingPage() {
  return (
    <main className="w-full">
      {/* ─────────────── Header ─────────────── */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-blue-50/60 to-transparent">
        <div className="mx-auto w-full max-w-[960px] px-5 py-12 text-center sm:py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Simple pricing.
            <br />
            <span className="text-blue-600">Pay for what you need.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600">
            One letter or a hundred — DemandFlowww costs a fraction of a lawyer and
            gets your invoices paid. Start with a single{" "}
            <strong className="text-slate-900">$29</strong> letter, or go{" "}
            <strong className="text-slate-900">Pro</strong> for unlimited.
          </p>
        </div>
      </section>

      {/* ─────────────── Pricing tiers ─────────────── */}
      <section className="mx-auto w-full max-w-[960px] px-5 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Basic */}
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Basic</h2>
              <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                Available now
              </span>
            </div>
            <p className="mt-3 flex items-baseline gap-1.5">
              <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                $29
              </span>
              <span className="text-sm font-medium text-slate-500">
                one-time
              </span>
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Perfect for recovering a single unpaid invoice. No subscription —
              you only pay when you need a letter.
            </p>

            <ul className="mt-6 space-y-3">
              {BASIC_FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <span
                    className="mt-0.5 font-bold text-green-600"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/"
              className="mt-7 flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Create a letter — $29
            </Link>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs font-medium text-green-700">
              <span aria-hidden>✓</span>
              Backed by our 100% money-back guarantee
            </p>
          </div>

          {/* Pro — featured */}
          <div className="relative flex flex-col rounded-2xl border-2 border-blue-500 bg-white p-7 shadow-lg shadow-blue-200/40">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-blue-600 px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                Most popular
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Pro</h2>
              <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                Coming soon
              </span>
            </div>
            <p className="mt-3 flex items-baseline gap-1.5">
              <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                $79
              </span>
              <span className="text-sm font-medium text-slate-500">
                /year (billed annually)
              </span>
            </p>
            <p className="mt-2 text-sm text-slate-600">
              For freelancers and small businesses who chase payment more than
              once. Send unlimited letters for less than the cost of three
              single ones.
            </p>

            <ul className="mt-6 space-y-3">
              {PRO_FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <span className="mt-0.5 font-bold text-blue-600" aria-hidden>
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-xl border border-slate-200 bg-slate-50/60 p-4">
              <p className="mb-3 text-center text-sm font-semibold text-slate-900">
                Pro isn&apos;t live yet — join the waitlist
              </p>
              <ProWaitlistForm />
            </div>
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
                  <td className="hidden px-4 py-3 sm:table-cell">
                    Days to weeks
                  </td>
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
                    DemandFlowww Basic
                  </td>
                  <td className="px-4 py-3 font-bold text-blue-700">$29 flat</td>
                  <td className="hidden px-4 py-3 font-medium sm:table-cell">
                    60 seconds
                  </td>
                </tr>
                <tr className="bg-blue-50/60 text-slate-900">
                  <td className="px-4 py-3 font-semibold">
                    <span className="mr-1.5" aria-hidden>
                      ⚡
                    </span>
                    DemandFlowww Pro
                  </td>
                  <td className="px-4 py-3 font-bold text-blue-700">
                    $79/yr — unlimited
                  </td>
                  <td className="hidden px-4 py-3 font-medium sm:table-cell">
                    60 seconds each
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-slate-500">
            Most freelancers make their $29 back many times over on the very
            first invoice they recover.
          </p>
        </div>
      </section>

      {/* ─────────────── Pricing FAQ ─────────────── */}
      <section className="mx-auto w-full max-w-[720px] px-5 py-14">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Pricing questions
        </h2>
        <div className="mt-8 space-y-4">
          {PRICING_FAQS.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {faq.q}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────── Final CTA ─────────────── */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-[720px] px-5 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Ready to get paid?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-slate-600">
            Send a professional demand letter in the next 60 seconds — for a flat
            $29, backed by our money-back guarantee.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
          >
            Create a letter — $29
          </Link>
        </div>
      </section>

      {/* FAQ structured data — mirrors the visible pricing FAQ above */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: PRICING_FAQS.map((faq) => ({
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
