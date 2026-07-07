import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("late-payment-interest-by-state")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="late-payment-interest-by-state">
      <p>
        When a client pays late, you lose twice: once on the missing cash, and
        again on the time you spend chasing it. Charging interest on overdue
        invoices is one of the few ways to make late payment cost the client
        something — and in most US states, the law is on your side. Here's what
        freelancers can legally charge, how to calculate it, and how to include
        it in a demand letter without looking punitive.
      </p>

      <h2>The legal basis: usury laws and statutory interest</h2>
      <p>
        Every state sets a maximum legal interest rate (its usury limit) and, in
        most cases, a default statutory interest rate that applies when a
        contract doesn't specify one. For freelancers, the relevant rule is
        usually the state's judgment or statutory interest rate — the rate courts
        apply to unpaid debts. When your contract or invoice terms are silent,
        this is the fallback you can cite in a demand letter.
      </p>
      <p>
        The critical distinction: you can almost always <em>ask</em> for
        reasonable interest as part of a settlement demand, even if the
        contract doesn't specify it. You're not a lender charging usurious
        rates — you're a creditor requesting compensation for delayed payment.
      </p>

      <h2>State-by-state statutory interest rates</h2>
      <p>
        Below are the default statutory or judgment interest rates for the
        states where most freelance work clusters. These are the rates you can
        reference when a written contract doesn't set its own rate. Always
        check your state's current figure — these change periodically.
      </p>

      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Statutory Rate (Annual)</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>California</td><td>10%</td><td>Applies to obligations not covered by a contract rate; 7% if contract specifies but no rate stated.</td></tr>
          <tr><td>New York</td><td>9%</td><td>Statutory rate for breach of contract and unpaid debts.</td></tr>
          <tr><td>Texas</td><td>6% (or 18% if written agreement)</td><td>Default is 6%; up to 18% if a written contract specifies a rate.</td></tr>
          <tr><td>Florida</td><td>Varies (Fed discount rate +)</td><td>Florida adjusts quarterly based on the Federal Reserve discount rate; check the CFO website for the current figure.</td></tr>
          <tr><td>Illinois</td><td>5% (under $25K); 9% otherwise</td><td>Lower rate for smaller claims makes Illinois less favorable for most freelance debts.</td></tr>
          <tr><td>Washington</td><td>12%</td><td>Applies to judgments and unpaid contract obligations.</td></tr>
          <tr><td>Massachusetts</td><td>12%</td><td>Contract claims accrue at 12% from the date of breach or demand.</td></tr>
          <tr><td>Colorado</td><td>8%</td><td>Applies if no contractual rate is set; adjustments are annual.</td></tr>
          <tr><td>Georgia</td><td>7%</td><td>Applies to liquidated (quantified) demands; unpaid invoices qualify.</td></tr>
          <tr><td>Oregon</td><td>9%</td><td>Simple interest on contract claims.</td></tr>
        </tbody>
      </table>

      <h2>How to calculate interest on a late invoice</h2>
      <p>
        The formula is straightforward: <strong>Principal × Annual Rate × (Days
        Late ÷ 365)</strong>. For example, a $3,000 invoice that's 60 days late
        in California at 10%:
      </p>
      <p>
        $3,000 × 0.10 × (60 ÷ 365) = <strong>$49.32</strong>
      </p>
      <p>
        That number looks small per invoice, but it compounds across multiple
        late payments — and including it in a demand letter signals that you
        know the rules and take them seriously. Most clients pay the principal
        immediately rather than argue over $50 in interest.
      </p>

      <h2>When you need it in the contract</h2>
      <p>
        While statutory rates apply as a fallback, the strongest position is a
        written contract that spells out your late-payment terms explicitly:
      </p>
      <ul>
        <li>The interest rate (e.g., "1.5% per month" or "18% APR")</li>
        <li>When interest starts accruing (e.g., "30 days after invoice date")</li>
        <li>Whether it compounds or is simple interest</li>
        <li>Any flat late fee in addition to interest</li>
      </ul>
      <p>
        A clause this clear is hard to dispute, and it converts interest from a
        negotiation point into a contractual right. Our demand letter templates
        include a line-item for accrued interest so you can add it automatically.
      </p>

      <h2>How to include interest in a demand letter</h2>
      <p>
        When you send a demand letter, list the interest as a separate line item
        — never bury it or make it the headline. The structure that works:
      </p>
      <ol>
        <li>Principal amount owed: $X</li>
        <li>Interest accrued (Y days at Z%): $X</li>
        <li>Total demanded: $X</li>
        <li>Deadline for payment (typically 7–14 days)</li>
        <li>Consequences if the deadline passes (collections, legal action)</li>
      </ol>
      <p>
        This approach is transparent, defensible, and makes the demand look
        calculated rather than emotional — which is exactly what a court or a
        mediator wants to see if the letter doesn't resolve things on its own.
        For the full escalation sequence, read our guide on{" "}
        <a href="/blog/unpaid-invoice-what-to-do">what to do about an unpaid
        invoice</a>.
      </p>

      <blockquote>
        Interest isn't about the money — it's about making inaction more
        expensive than action. A client who sees $50 in accrued interest on a
        $3,000 invoice realizes the meter is running.
      </blockquote>

      <h2>Generate your demand letter with interest included</h2>
      <p>
        <a href="/">DemandFlowww</a> generates a professional demand letter in
        about 60 seconds for $29, including an optional interest line-item you
        can configure with your state's rate and the number of days late. Backed
        by a 100% money-back guarantee. If you're considering whether to go
        straight to legal help, see our comparison of{" "}
        <a href="/blog/demand-letter-vs-lawyer">demand letter vs. lawyer</a>.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can freelancers charge interest on late invoices?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Most US states allow creditors to charge interest on overdue payments. If your contract specifies a rate, that rate applies. If not, each state has a default statutory or judgment interest rate — typically 6–12% annually — that serves as the fallback. Including interest in a demand letter is legal and common.",
                },
              },
              {
                "@type": "Question",
                name: "What is the legal interest rate for late payments in my state?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Statutory interest rates vary by state. California uses 10%, New York 9%, Texas defaults to 6% (or 18% with a written agreement), Massachusetts 12%, Florida uses a variable rate tied to the Federal Reserve discount rate, and Illinois is 5% for claims under $25,000. Check your state's current rate before citing it in a demand letter.",
                },
              },
              {
                "@type": "Question",
                name: "How do I calculate interest on an overdue freelance invoice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use the formula: Principal × Annual Rate × (Days Late ÷ 365). For example, a $3,000 invoice 60 days past due in California at 10% accrues $49.32 in interest. Include it as a separate line item in your demand letter to show the client the cost of continued delay.",
                },
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}
