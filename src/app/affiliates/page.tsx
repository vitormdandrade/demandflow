import type { Metadata } from "next";
import AffiliateSignupForm from "@/components/AffiliateSignupForm";

export const metadata: Metadata = {
  title: "Affiliate Program — Earn 10% Promoting DemandFlowww",
  description:
    "Join the DemandFlowww affiliate program and earn a 10% commission on every $29 demand-letter sale you refer. 60-day cookie, monthly payouts via Stripe or PayPal, no cost to join.",
  keywords: [
    "DemandFlowww affiliate program",
    "affiliate program for freelancers",
    "earn commission demand letter",
    "freelance tools affiliate",
    "invoicing software affiliate",
    "creator affiliate program",
  ],
  alternates: { canonical: "/affiliates" },
};

const STEPS = [
  {
    icon: "🔗",
    title: "Apply & get your link",
    body: "Fill out the short form below. Once approved, you get a unique tracking link and a simple dashboard to watch your referrals roll in.",
  },
  {
    icon: "📣",
    title: "Share with your audience",
    body: "Drop your link in a newsletter, video description, blog post, or community. Every freelancer who clicks and buys is credited to you for 60 days.",
  },
  {
    icon: "💸",
    title: "Get paid monthly",
    body: "We total up your commissions and pay out every month via Stripe or PayPal once you clear the $50 minimum. No chasing, no invoices.",
  },
];

const PARTNERS = [
  {
    icon: "📰",
    title: "Freelancer communities & newsletters",
    body: "Your audience already fights unpaid invoices. A demand letter is the obvious next tool to recommend.",
  },
  {
    icon: "🧾",
    title: "Accounting & invoicing software audiences",
    body: "Invoicing tools send the invoice — DemandFlowww handles what happens when it goes unpaid. A perfect complement.",
  },
  {
    icon: "🎥",
    title: "YouTubers & creators teaching freelancing",
    body: "Turn 'how to get clients to pay' content into a link that earns on every recommendation you make.",
  },
  {
    icon: "🎓",
    title: "Coaches & course creators",
    body: "Add a genuinely useful resource to your business, freelancing, or design courses — and earn while you do.",
  },
  {
    icon: "💬",
    title: "Slack & Discord communities",
    body: "Freelance and agency communities constantly ask how to handle deadbeat clients. Give them the answer, get paid for it.",
  },
];

const TERMS = [
  {
    label: "Commission rate",
    value: "10%",
    detail: "On every sale — $2.90+ per $29 letter, and Pro plan referrals earn more.",
  },
  {
    label: "Cookie window",
    value: "60 days",
    detail: "Get credit even if they buy weeks after clicking your link.",
  },
  {
    label: "Minimum payout",
    value: "$50",
    detail: "Balances roll over each month until you cross the threshold.",
  },
  {
    label: "Payment schedule",
    value: "Monthly",
    detail: "Paid every month via Stripe or PayPal — your choice.",
  },
];

export default function AffiliatesPage() {
  return (
    <main className="w-full">
      {/* ─────────────── Hero ─────────────── */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-blue-50/60 to-transparent">
        <div className="mx-auto w-full max-w-[720px] px-5 py-12 text-center sm:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
            <span aria-hidden>🤝</span>
            DemandFlowww Affiliate Program
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Earn 10% for every freelancer
            <br />
            <span className="text-blue-600">you help get paid.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600">
            No recurring subscriptions to sell and no complicated tiers to learn.
            It&apos;s a simple{" "}
            <strong className="text-slate-900">10% commission</strong> on every
            $29 sale you refer —{" "}
            <strong className="text-slate-900">$2.90+ per referral</strong>, and
            Pro plan referrals earn even more.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#apply"
              className="w-full rounded-lg bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md sm:w-auto"
            >
              Become an affiliate
            </a>
            <a
              href="#how"
              className="w-full rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
            >
              See how it works
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {[
              { icon: "💰", label: "10% per sale" },
              { icon: "🍪", label: "60-day cookie" },
              { icon: "📆", label: "Monthly payouts" },
              { icon: "🆓", label: "Free to join" },
            ].map((b) => (
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

      {/* ─────────────── How it works ─────────────── */}
      <section id="how" className="mx-auto w-full max-w-[960px] px-5 py-12 sm:py-16 scroll-mt-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          How it works
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-slate-600">
          Three simple steps between you and your first commission.
        </p>
        <ol className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
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

      {/* ─────────────── Perfect for ─────────────── */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-[960px] px-5 py-12 sm:py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Perfect for
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-slate-600">
            If you reach freelancers, creators, or small business owners,
            DemandFlowww practically sells itself.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-xl">
                  <span aria-hidden>{p.icon}</span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Commission structure ─────────────── */}
      <section className="mx-auto w-full max-w-[960px] px-5 py-12 sm:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Commission structure
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-slate-600">
          Straightforward terms, no fine print games. Here&apos;s exactly what
          you earn and how you get paid.
        </p>

        {/* Cards on mobile, table-like clarity on all sizes */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TERMS.map((t) => (
            <div
              key={t.label}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {t.label}
              </p>
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-blue-700">
                {t.value}
              </p>
              <p className="mt-2 text-sm text-slate-600">{t.detail}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Example: refer 50 freelancers who each buy a $29 letter and you earn{" "}
          <strong className="text-slate-700">$145</strong> — before any Pro plan
          upgrades.
        </p>
      </section>

      {/* ─────────────── Apply / signup form ─────────────── */}
      <section
        id="apply"
        className="border-t border-slate-200 bg-slate-50 scroll-mt-16"
      >
        <div className="mx-auto w-full max-w-[600px] px-5 py-12 sm:py-16">
          <header className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Apply to become an affiliate
            </h2>
            <p className="mt-3 text-base text-slate-600">
              It&apos;s free to join and takes under a minute. Tell us a little
              about your audience and we&apos;ll get you set up.
            </p>
          </header>

          <AffiliateSignupForm />
        </div>
      </section>
    </main>
  );
}
