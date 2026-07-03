import type { Metadata } from "next";
import Link from "next/link";
import ProSubscribeButton from "@/components/ProSubscribeButton";

export const metadata: Metadata = {
  title: "DemandFlowww Pro — Unlimited Demand Letters | $19/mo",
  description:
    "Go Pro for unlimited demand letters. Custom letterhead, batch export, no watermarks, and all 6 templates. $19/month — cancel anytime.",
  keywords: [
    "unlimited demand letters",
    "demand letter subscription",
    "demand letter pro",
    "custom letterhead demand letter",
    "batch export demand letters",
    "freelancer demand letter subscription",
  ],
  alternates: { canonical: "/pro" },
};

const FREE_FEATURES = [
  { feature: "Demand letters per month", free: "3 letters", pro: "Unlimited" },
  { feature: "Letter templates", free: "Basic templates", pro: "All 6 templates + future ones" },
  { feature: "PDF watermark", free: "Watermarked", pro: "Clean, professional PDFs" },
  { feature: "Custom letterhead", free: "Brand name only", pro: "Logo + full company info" },
  { feature: "Batch export", free: "One at a time", pro: "Download all as ZIP" },
  { feature: "Instant generation", free: "After $29 payment", pro: "Instantly, no per-letter cost" },
  { feature: "Support", free: "Email support", pro: "Priority support" },
  { feature: "Cancel anytime", free: "—", pro: "✓" },
];

const PRO_FAQS = [
  {
    q: "What happens when I upgrade to Pro?",
    a: "You get instant access to unlimited letters, custom letterhead with your logo, batch export, and watermark-free PDFs. There's no waiting period — everything unlocks the moment your subscription activates.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel your Pro subscription anytime from your account page and you won't be charged again. You'll keep access until the end of your current billing period.",
  },
  {
    q: "Is Pro worth it if I only send a few letters?",
    a: "If you send more than one letter every two months, Pro saves you money. Plus you get custom letterhead, batch export, and no watermarks — features that make your letters look more professional.",
  },
  {
    q: "How does the custom letterhead work?",
    a: "Pro subscribers can upload their company logo and add address/phone info. This appears at the top of every letter, making your demand letters look like they came from a professional office — not a template generator.",
  },
  {
    q: "How does batch export work?",
    a: "Every letter you generate as a Pro subscriber is saved. When you need them, just click 'Batch Export' and download all your letters as a single ZIP file — perfect for record-keeping or sharing with your accountant.",
  },
];

export default function ProPage() {
  return (
    <main className="w-full">
      {/* ─────────────── Hero ─────────────── */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-blue-50/60 to-transparent">
        <div className="mx-auto w-full max-w-[720px] px-5 py-14 text-center sm:py-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Go Pro.
            <br />
            <span className="text-blue-600">Send unlimited letters for $19/mo.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600">
            Stop paying $29 every time a client ghosts you. With Pro you send as
            many letters as you need — custom letterhead, batch export, no
            watermarks — for one flat price.
          </p>

          <div className="mt-8 flex flex-col items-center">
            <div className="w-full max-w-sm">
              <ProSubscribeButton />
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Cancel anytime. No long-term commitment.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── Feature comparison table ─────────────── */}
      <section className="mx-auto w-full max-w-[960px] px-5 py-12 sm:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Free vs. Pro
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-slate-600">
          See what you get with each plan. Pro is built for freelancers who need
          to chase payment seriously and often.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-5 py-4 font-semibold text-slate-900">Feature</th>
                  <th className="px-5 py-4 font-semibold text-slate-600">
                    Free
                  </th>
                  <th className="px-5 py-4 font-semibold text-blue-600 bg-blue-50/50">
                    Pro — $19/mo
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {FREE_FEATURES.map((row) => (
                  <tr key={row.feature} className="transition hover:bg-slate-50/50">
                    <td className="px-5 py-3.5 font-medium text-slate-900">
                      {row.feature}
                    </td>
                    <td className="px-5 py-3.5 text-slate-600">{row.free}</td>
                    <td className="px-5 py-3.5 text-slate-900 bg-blue-50/30 font-medium">
                      {row.pro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-sm">
            <ProSubscribeButton />
          </div>
        </div>
      </section>

      {/* ─────────────── Pro benefits cards ─────────────── */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-[960px] px-5 py-14">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why go Pro?
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-xl">
                ⚡
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                Send unlimited letters
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                As a Pro subscriber, every letter is free. Fill out the form and
                download instantly — no checkout, no hesitation. Perfect for
                freelancers juggling multiple late-paying clients.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-xl">
                🏢
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                Custom letterhead
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Upload your logo and add your company name, address, and phone
                number. Every letter you send carries your professional brand —
                not a generic template header.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-xl">
                📦
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                Batch export
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Download all your letters as a ZIP file with one click. Great
                for end-of-month record keeping, sharing with your accountant,
                or preparing for court.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── Price anchoring ─────────────── */}
      <section className="mx-auto w-full max-w-[720px] px-5 py-14">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Pro vs. paying per letter
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-slate-600">
          If you send more than one letter every two months, Pro saves you money —
          and gives you features the free tier doesn&apos;t have.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-500">
                <th className="px-4 py-3 font-medium">Letters per month</th>
                <th className="px-4 py-3 font-medium">Pay-as-you-go</th>
                <th className="px-4 py-3 font-medium text-blue-600">Pro ($19/mo)</th>
                <th className="hidden px-4 py-3 font-medium sm:table-cell">
                  You save
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="text-slate-600">
                <td className="px-4 py-3">1 letter</td>
                <td className="px-4 py-3">$29.00</td>
                <td className="px-4 py-3 font-semibold text-blue-700">$19.00</td>
                <td className="hidden px-4 py-3 font-medium text-green-600 sm:table-cell">
                  $10.00
                </td>
              </tr>
              <tr className="text-slate-600">
                <td className="px-4 py-3">2 letters</td>
                <td className="px-4 py-3">$58.00</td>
                <td className="px-4 py-3 font-semibold text-blue-700">$19.00</td>
                <td className="hidden px-4 py-3 font-medium text-green-600 sm:table-cell">
                  $39.00
                </td>
              </tr>
              <tr className="text-slate-600">
                <td className="px-4 py-3">5 letters</td>
                <td className="px-4 py-3">$145.00</td>
                <td className="px-4 py-3 font-semibold text-blue-700">$19.00</td>
                <td className="hidden px-4 py-3 font-medium text-green-600 sm:table-cell">
                  $126.00
                </td>
              </tr>
              <tr className="bg-blue-50/60 text-slate-900">
                <td className="px-4 py-3 font-semibold">10+ letters</td>
                <td className="px-4 py-3">$290.00+</td>
                <td className="px-4 py-3 font-bold text-blue-700">$19.00</td>
                <td className="hidden px-4 py-3 font-semibold text-green-700 sm:table-cell">
                  $271.00+
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─────────────── FAQ ─────────────── */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-[720px] px-5 py-14">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Pro FAQ
          </h2>
          <div className="mt-8 space-y-4">
            {PRO_FAQS.map((faq) => (
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
        </div>
      </section>

      {/* ─────────────── Final CTA ─────────────── */}
      <section className="mx-auto w-full max-w-[720px] px-5 py-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Ready to stop paying per letter?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
          Unlimited letters, custom letterhead, batch export, no watermarks —
          all for $19/month. Cancel anytime.
        </p>
        <div className="mt-6 mx-auto w-full max-w-sm">
          <ProSubscribeButton />
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Cancel anytime. No questions asked.
        </p>
      </section>

      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: PRO_FAQS.map((faq) => ({
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
