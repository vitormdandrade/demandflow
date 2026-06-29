import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — DemandFlow",
  description:
    "The terms that govern your use of DemandFlow, including payment, refunds, and important legal disclaimers.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-[760px] px-5 py-12 sm:py-16">
      <Link
        href="/"
        className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
      >
        ← Back to DemandFlow
      </Link>

      <article className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: June 28, 2026</p>

        <p className="mt-6 text-slate-600">
          These terms govern your use of DemandFlow. By using the service, you
          agree to them. Please read them carefully &mdash; especially the
          disclaimer, which is important.
        </p>

        <Section title="The service">
          <p>
            DemandFlow generates a professionally formatted demand letter from
            the details you provide. You receive a printable document you can
            download, save as a PDF, and send to your client.
          </p>
        </Section>

        <Section title="Payment terms">
          <p>
            DemandFlow costs a one-time fee of{" "}
            <span className="font-semibold text-slate-900">$29</span> per letter,
            charged at checkout via Stripe. Prices are in U.S. dollars. Your
            letter is generated immediately after a successful payment.
          </p>
        </Section>

        <Section title="Refund policy">
          <p>
            If you&rsquo;re not satisfied, we offer a full refund within{" "}
            <span className="font-semibold text-slate-900">30 days</span> of your
            purchase. Just email{" "}
            <a
              href="mailto:support@demandflow.app"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              support@demandflow.app
            </a>{" "}
            and we&rsquo;ll take care of it &mdash; no hassle.
          </p>
        </Section>

        <Section title="Not legal advice">
          <p>
            DemandFlow is a document-generation tool, not a law firm. The letters
            we produce are templates populated with the information you provide.
            We do not provide legal advice, and using DemandFlow does not create
            an attorney&ndash;client relationship. For advice about your specific
            situation, consult a licensed attorney in your jurisdiction.
          </p>
        </Section>

        <Section title="Your responsibilities">
          <p>
            You are responsible for the accuracy of the information you enter and
            for ensuring your letter is appropriate for your situation. You agree
            to use DemandFlow only for lawful purposes.
          </p>
        </Section>

        <Section title="Limitation of liability">
          <p>
            DemandFlow is provided &ldquo;as is&rdquo; without warranties of any
            kind. To the fullest extent permitted by law, DemandFlow and its
            operators are not liable for any indirect, incidental, or
            consequential damages arising from your use of the service. Our total
            liability is limited to the amount you paid us.
          </p>
        </Section>

        <Section title="Changes to these terms">
          <p>
            We may update these terms from time to time. Continued use of the
            service after changes means you accept the updated terms.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about these terms? Email{" "}
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
