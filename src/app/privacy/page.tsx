import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — DemandFlowww",
  description:
    "How DemandFlowww collects, uses, and protects your information when you create a demand letter.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-[760px] px-5 py-12 sm:py-16">
      <Link
        href="/"
        className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
      >
        ← Back to DemandFlowww
      </Link>

      <article className="prose-slate mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: June 28, 2026</p>

        <p className="mt-6 text-slate-600">
          DemandFlowww (&ldquo;we&rdquo;, &ldquo;us&rdquo;) helps freelancers
          generate professional demand letters. This policy explains what
          information we collect, why we collect it, and the choices you have. We
          keep it short and plain because that&rsquo;s how it should be.
        </p>

        <Section title="Information we collect">
          <p>When you use DemandFlowww you provide details to build your letter:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600">
            <li>Your name and email address</li>
            <li>
              Client or business details (name, address, amount owed,
              description of work, and dates)
            </li>
          </ul>
          <p className="mt-3">
            We also automatically collect basic usage data through cookies and
            analytics tools (see below).
          </p>
        </Section>

        <Section title="How we use your information">
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600">
            <li>To generate and deliver your demand letter</li>
            <li>To process your payment</li>
            <li>To respond to support requests</li>
            <li>To understand and improve how the service is used</li>
          </ul>
          <p className="mt-3">
            We do not sell your personal information.
          </p>
        </Section>

        <Section title="Payment processing">
          <p>
            Payments are processed securely by{" "}
            <a
              href="https://stripe.com/privacy"
              className="font-medium text-blue-600 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe
            </a>
            . We never see or store your full card number. Stripe handles your
            card data under its own privacy policy and PCI-compliant
            infrastructure.
          </p>
        </Section>

        <Section title="Cookies and analytics">
          <p>
            We use Google Analytics 4 and Google Tag Manager to measure traffic
            and improve the product. These tools set cookies that collect
            anonymized usage information such as the pages you visit and how you
            arrived at our site. You can block cookies in your browser settings,
            though some features may not work as expected.
          </p>
        </Section>

        <Section title="Data retention">
          <p>
            Letter details are stored only as long as needed to deliver your
            letter and provide support, and are associated with your payment
            record. You may request deletion of your data at any time (see
            below).
          </p>
        </Section>

        <Section title="Your rights">
          <p>
            You may request access to, correction of, or deletion of your
            personal information. To do so, email us at{" "}
            <a
              href="mailto:support@demandflow.app"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              support@demandflow.app
            </a>{" "}
            and we&rsquo;ll respond promptly.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We may update this policy from time to time. When we do, we&rsquo;ll
            revise the &ldquo;last updated&rdquo; date above.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions? Reach us at{" "}
            <a
              href="mailto:support@demandflow.app"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              support@demandflow.app
            </a>
            .
          </p>
        </Section>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-2 text-slate-600">{children}</div>
    </section>
  );
}
