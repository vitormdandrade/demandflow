import Link from "next/link";
import type { Metadata } from "next";
import { NDA_DOC_LIST } from "@/lib/nda";

export const metadata: Metadata = {
  title: "Contract Generator — NDA, Service Agreement, Partnership | DemandFlow",
  description:
    "Generate professional legal contracts instantly. NDA, Service Agreement, and Partnership Agreement — starting at $15. No lawyer needed.",
};

const FAQ = [
  {
    q: "What is a Non-Disclosure Agreement (NDA)?",
    a: "An NDA is a legally binding contract that establishes a confidential relationship between two parties. It prevents the signing party from disclosing proprietary information shared by the other party.",
  },
  {
    q: "Do I need a lawyer to create an NDA or Service Agreement?",
    a: "No. For standard contracts between two parties, DemandFlow provides professionally formatted agreements that cover the essential terms. For complex transactions or very large sums, consulting an attorney is always recommended.",
  },
  {
    q: "How quickly will I get my contract?",
    a: "Your contract is generated as a PDF immediately after payment — typically within 60 seconds. You can download it and share it right away.",
  },
  {
    q: "What is the difference between an NDA and a Service Agreement?",
    a: "An NDA protects confidential information between parties. A Service Agreement outlines the scope, payment, and terms of professional services rendered. If you're hiring a contractor, you may need both.",
  },
];

export default function NdaLandingPage() {
  return (
    <main className="mx-auto w-full max-w-[680px] px-5 py-12 sm:py-16">
      <header className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
          Contract Generator
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Professional Contracts in 60 Seconds
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          NDAs, Service Agreements, and Partnership Agreements — starting at{" "}
          <span className="font-semibold text-slate-900">$15</span>. No lawyer
          needed.
        </p>
        <div className="mt-5 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
            <span className="text-amber-500" aria-hidden>
              ★★★★★
            </span>
            Trusted by freelancers &amp; small businesses
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {NDA_DOC_LIST.map((doc) => (
          <Link
            key={doc.id}
            href={`/nda/${doc.id}`}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              {doc.icon}
            </div>
            <h2 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-blue-700">
              {doc.name}
            </h2>
            <p className="mt-1.5 flex-1 text-sm text-slate-600">
              {doc.description}
            </p>
            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="text-lg font-bold text-slate-900">
                ${(doc.priceCents / 100).toFixed(0)}
              </span>
              <span className="rounded-full bg-blue-600 px-3.5 py-1.5 text-sm font-semibold text-white transition group-hover:bg-blue-700">
                Get started →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="text-center text-xl font-semibold text-slate-900">
          How it works
        </h2>
        <ol className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: "📝", step: 1, title: "Fill in the details", body: "Answer a few questions about the parties and terms. Takes about 2 minutes." },
            { icon: "🔒", step: 2, title: "Pay securely", body: "One-time payment via Stripe. No subscription, no account required." },
            { icon: "📄", step: 3, title: "Download your contract", body: "Get a professionally formatted PDF instantly. Ready to sign and send." },
          ].map((item) => (
            <li
              key={item.title}
              className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-2xl">
                {item.icon}
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-blue-600">
                Step {item.step}
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="text-center text-xl font-semibold text-slate-900">
          Frequently asked questions
        </h2>
        <dl className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {FAQ.map((item) => (
            <div key={item.q} className="px-6 py-5">
              <dt className="font-semibold text-slate-900">{item.q}</dt>
              <dd className="mt-2 text-sm text-slate-600 leading-relaxed">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="mt-10 text-center text-sm text-slate-500">
        Looking for demand letters?{" "}
        <Link href="/" className="font-medium text-blue-600 underline hover:text-blue-700">
          Go back to DemandFlow
        </Link>
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
    </main>
  );
}
