import type { Metadata } from "next";
import Link from "next/link";
import { TEMPLATE_LIST } from "@/lib/templates";

export const metadata: Metadata = {
  title: "Legal Letter Templates for Freelancers | DemandFlowww",
  description:
    "Professional demand letter, cease & desist, contract termination, late rent notice, and payment reminder templates. Lawyer-quality legal letters generated in 60 seconds from $19. No lawyer, no retainer.",
  keywords: [
    "demand letter template",
    "legal letter templates",
    "cease and desist template",
    "contract termination letter",
    "late rent notice template",
    "payment reminder letter",
    "freelancer legal letters",
    "unpaid invoice letter",
  ],
  alternates: { canonical: "/templates" },
  openGraph: {
    title: "Legal Letter Templates for Freelancers | DemandFlowww",
    description:
      "Lawyer-quality demand letters, cease & desist notices, contract terminations, and more — generated in 60 seconds from $19.",
    url: "/templates",
    type: "website",
  },
};

// Rich, SEO-focused editorial copy for each template.
// Keyed by template id from TEMPLATE_LIST (the source of truth for name, icon, price).
const COPY: Record<
  string,
  { longDescription: string; includes: string[] }
> = {
  "demand-letter": {
    longDescription:
      "The go-to letter when a client has gone quiet on an invoice that's clearly overdue. A demand letter puts your claim in formal, unambiguous writing — stating exactly what's owed, for what work, and by when — and signals that you're prepared to escalate to small claims court if it isn't paid. It's often the single step that turns weeks of silence into a payment.",
    includes: [
      "Formal demand for the exact amount owed, with a firm payment deadline",
      "A clear record of the work completed and the date it was delivered",
      "Reservation-of-rights language referencing small claims court",
    ],
  },
  "cease-and-desist": {
    longDescription:
      "Use this when someone is using your copyrighted work without permission, harassing you, or spreading defamatory statements — and you need them to stop now. A cease & desist letter formally documents the violation, demands it end immediately, and creates a paper trail that matters if the dispute later heads to court.",
    includes: [
      "A precise description of the infringement, harassment, or defamation",
      "An explicit demand to cease the conduct immediately",
      "Documented notice that establishes a record for any future legal action",
    ],
  },
  "contract-termination": {
    longDescription:
      "When a working relationship needs to end — whether the other party breached the agreement or you're simply exercising a termination clause — this letter ends it cleanly and professionally. It states the reason, cites the original contract, and sets a clear effective date so both sides know exactly where they stand.",
    includes: [
      "A clear statement of termination, for breach or for convenience",
      "A reference to the original contract and its date",
      "A defined effective date so obligations wind down cleanly",
    ],
  },
  "late-rent-notice": {
    longDescription:
      "Built for landlords and property managers who need to formally notify a tenant that rent is past due. This notice states the amount owed, any late fees, and a deadline to pay — creating the documented record you'll want before taking any further action. Professional wording keeps things firm without escalating unnecessarily.",
    includes: [
      "The exact past-due balance, including any applicable late fees",
      "A specific payment deadline for the tenant to cure the balance",
      "A dated, professional record suitable for your files",
    ],
  },
  "freelance-reminder": {
    longDescription:
      "Not every late invoice needs a hard demand — sometimes a client just forgot. This friendly payment reminder is the polite first nudge: professional, warm, and easy to send, while still making the amount and due date crystal clear. It's the perfect opening move before things ever need to get formal.",
    includes: [
      "A courteous reminder that references the invoice number and amount",
      "The original due date and a gentle prompt to pay",
      "Your preferred payment method to make settling up effortless",
    ],
  },
};

const WHY_POINTS = [
  {
    icon: "⚖️",
    title: "Legally-formatted language",
    body: "Every template uses the formal structure and reservation-of-rights wording that makes a letter read like it came from a law office — not a Google search.",
  },
  {
    icon: "📄",
    title: "Professional letterhead",
    body: "Your details are laid out in a clean, credible format that gets taken seriously the moment the recipient opens it.",
  },
  {
    icon: "⚡",
    title: "Instant PDF, ready to send",
    body: "Fill a short form, pay once, and download a finished letter in about 60 seconds. Save it as a PDF and send it right away.",
  },
  {
    icon: "🛡️",
    title: "100% money-back guarantee",
    body: "If you're not satisfied with your letter, we'll refund every cent — no questions asked. The only risk is doing nothing.",
  },
];

function priceLabel(cents: number): string {
  return `$${(cents / 100).toFixed(0)}`;
}

export default function TemplatesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Legal Letter Templates for Freelancers",
    description:
      "Professional, legally-formatted letter templates generated instantly by DemandFlowww.",
    itemListElement: TEMPLATE_LIST.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: `${t.name} Template`,
        description: COPY[t.id]?.longDescription ?? t.description,
        url: "https://demandflowww.com/templates",
        offers: {
          "@type": "Offer",
          price: (t.priceCents / 100).toFixed(2),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <main className="w-full">
      {/* ─────────────── Hero ─────────────── */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-blue-50/60 to-transparent">
        <div className="mx-auto w-full max-w-[960px] px-5 py-12 text-center sm:py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Professional Legal Letter Templates
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Every letter is lawyer-quality, formally formatted, and ready to
            send in{" "}
            <strong className="text-slate-900">60 seconds</strong> — no lawyer,
            no retainer, no monthly fee. Pick your letter type below and generate
            it from just{" "}
            <strong className="text-slate-900">$29</strong> (payment reminders
            from{" "}
            <strong className="text-slate-900">$19</strong>).
          </p>
          <div className="mt-7">
            <Link
              href="/"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
            >
              Create My Letter →
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────── Templates grid ─────────────── */}
      <section className="mx-auto w-full max-w-[960px] px-5 py-12 sm:py-16">
        <header className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Choose the letter you need
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            Five professionally-drafted templates covering the situations
            freelancers, creators, and small landlords run into most.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEMPLATE_LIST.map((t) => {
            const copy = COPY[t.id];
            return (
              <article
                key={t.id}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-2xl">
                    <span aria-hidden>{t.icon}</span>
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                    {priceLabel(t.priceCents)}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {t.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {copy?.longDescription ?? t.description}
                </p>

                {copy?.includes && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      What it includes
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {copy.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <span
                            className="mt-0.5 font-bold text-green-600"
                            aria-hidden
                          >
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-6 pt-2">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                  >
                    Create this letter →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ─────────────── Why our templates work ─────────────── */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-[960px] px-5 py-12 sm:py-16">
          <header className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Why our templates work
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              These aren&apos;t generic fill-in-the-blank documents. They&apos;re
              built to be taken seriously — and to get you a result.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {WHY_POINTS.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-2xl">
                  <span aria-hidden>{point.icon}</span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-slate-900">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Final CTA ─────────────── */}
      <section className="mx-auto w-full max-w-[960px] px-5 py-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Ready to send yours?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
          Pick your template, fill a short form, and download a polished,
          ready-to-send letter in the next 60 seconds — backed by our 100%
          money-back guarantee.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
        >
          Create My Letter →
        </Link>
        <p className="mt-3 text-xs text-slate-500">
          From $19. No lawyer, no retainer, no subscription.
        </p>
      </section>

      {/* ItemList structured data for the template offerings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
