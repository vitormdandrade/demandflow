import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("freelance-contract-clauses-prevent-non-payment")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  openGraph: {
    title: post.title,
    description: post.description,
    type: "article",
    publishedTime: post.date,
  },
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function ContractClausesPost() {
  return (
    <ArticleLayout post={post}>
      <section>
        <p className="lead">
          Most freelancers focus on getting the signature — then cross their fingers on payment day. A strong freelance contract flips that dynamic. The right clauses don't just protect you legally; they create <em>behavioral guardrails</em> that make paying on time the path of least resistance for your client. Here are the seven contract clauses every freelancer should include to prevent non-payment before it starts.
        </p>
      </section>

      <section>
        <h2>1. The Payment Schedule — Not Just "Net 30"</h2>
        <p>
          A single "payment due 30 days after invoice" clause is a freelancer's most common and most damaging mistake. It concentrates all risk at the very end of the project, after you've delivered everything and lost all leverage.
        </p>
        <p>
          <strong>Instead, use a milestone-based payment schedule:</strong>
        </p>
        <ul>
          <li><strong>Deposit / kickoff:</strong> 30-50% upfront, non-refundable. Filters out unserious clients before you write a single line of code or design a single frame.</li>
          <li><strong>Mid-project milestone:</strong> 25-30% at a clearly defined halfway point — draft delivered, first round of wireframes approved, MVP features built. You get paid for work completed and the client stays committed.</li>
          <li><strong>Final delivery:</strong> Remaining balance upon approval, <em>before</em> you hand over source files, admin credentials, or final deliverables. This is the single most important leverage point you have — do not give it away.</li>
        </ul>
        <div className="callout">
          <p><strong>Why this works:</strong> If a client ghosts at the final invoice, they lose access to the deliverables. You've already been paid for 70-80% of the work. The asymmetry is now in your favor.</p>
        </div>
      </section>

      <section>
        <h2>2. The Late Payment Penalty Clause</h2>
        <p>
          "Payment due within 15 days" without a consequence is a suggestion, not a term. Add teeth.
        </p>
        <p>
          <strong>Sample language:</strong> "Invoices not paid within 15 calendar days of the due date will accrue interest at a rate of 1.5% per month (or the maximum rate permitted by applicable law) on the outstanding balance, compounded monthly, until paid in full."
        </p>
        <p>
          Many states allow 6-12% annual interest on late commercial payments. Check your state's legal rate — including it in the contract makes it enforceable and signals seriousness. If you later send a demand letter for an unpaid invoice, the interest calculation is already contractually established, not something you're inventing retroactively.
        </p>
      </section>

      <section>
        <h2>3. The Kill Fee (Cancellation Clause)</h2>
        <p>
          Mid-project cancellations are a freelancer's silent revenue killer. A client gets cold feet, budget gets cut, priorities shift — and suddenly the project is "on hold indefinitely," which in practice means cancelled, and you're stuck holding unbilled work.
        </p>
        <p>
          <strong>Sample language:</strong> "If Client terminates this Agreement before completion of the Project for reasons other than Freelancer's material breach, Client shall pay Freelancer a cancellation fee equal to [25-50%] of the remaining project balance, in addition to payment for all work completed to date at the agreed rate."
        </p>
        <p>
          This isn't punitive — it's fair compensation for the opportunity cost of time blocked on your calendar that you could have filled with other paying work. A kill fee turns a "sorry, we're going in a different direction" from a total write-off into a partial recovery.
        </p>
      </section>

      <section>
        <h2>4. The Scope Change = Cost Change Clause</h2>
        <p>
          Scope creep is the most common cause of delayed payment. The client feels like "the project keeps growing" and starts questioning whether the price is fair. You feel like you're doing more work than you agreed to and start resenting the client. Both of you are unhappy, and payment becomes a battle.
        </p>
        <p>
          <strong>Sample language:</strong> "Any work outside the defined Scope of Work (attached as Exhibit A) must be documented in a written Change Order signed by both parties. Change Orders will include a description of the additional work, the additional fee, and the impact on the project timeline. Freelancer is not obligated to perform out-of-scope work without a signed Change Order."
        </p>
        <p>
          This clause does two things: it <strong>forces the scope conversation to happen</strong> instead of being avoided, and it creates a <strong>paper trail</strong>. When the client says "can you also just add X?" you can say "Absolutely — I'll send over a change order for that," which makes the cost explicit and the decision theirs.
        </p>
      </section>

      <section>
        <h2>5. The Ownership Transfer = Full Payment Clause</h2>
        <p>
          This is the clause that gives the previous four their teeth. Without it, a client can demand deliverables, use your work commercially, and still not pay you — leaving you to chase them through the legal system.
        </p>
        <p>
          <strong>Sample language:</strong> "All intellectual property rights in the Deliverables shall remain the exclusive property of Freelancer until full and final payment of all invoices under this Agreement has been received. Upon receipt of full payment, Freelancer hereby assigns to Client all right, title, and interest in the Deliverables created specifically for Client under this Agreement."
        </p>
        <p>
          This is the freelancer's equivalent of a mechanic's lien. It doesn't mean you'll actually enforce it in court — it means you <em>can</em>, and the client knows it. For most clients, the threat of not owning the logo, codebase, or designs they've been using for weeks is enough to get the invoice paid.
        </p>
      </section>

      <section>
        <h2>6. The Expenses = Pre-Approved (or Reimbursed) Clause</h2>
        <p>
          Expenses are a frequent source of invoice disputes. The client feels nickel-and-dimed; you feel like you're eating costs the client should cover.
        </p>
        <p>
          <strong>Sample language:</strong> "Freelancer shall not incur expenses exceeding $100 per item without Client's prior written approval. Approved expenses will be reimbursed within 15 days of Freelancer submitting a receipt. Pre-approved recurring expenses (e.g., hosting, software licenses) will be billed monthly at cost."
        </p>
        <p>
          This clause prevents surprises on both sides. You're never out-of-pocket for a $500 software license the client didn't know about, and the client never sees an expense line item they didn't authorize.
        </p>
      </section>

      <section>
        <h2>7. The Dispute Resolution Clause</h2>
        <p>
          A contract without a dispute mechanism is a contract that assumes everything will go perfectly — which is when contracts are least needed. A dispute resolution clause tells both parties what happens when things go wrong, which paradoxically makes things less likely to go wrong.
        </p>
        <p>
          <strong>Sample language:</strong> "Any dispute arising under this Agreement shall first be submitted to mediation in [your city, your state]. If mediation does not resolve the dispute within 30 days, either party may pursue remedies in the courts of [your county, your state]. The prevailing party in any action to enforce this Agreement shall be entitled to recover reasonable attorneys' fees and costs."
        </p>
        <p>
          Three protections in one: (1) mediation is cheap and keeps you out of court, (2) the venue is <em>your</em> jurisdiction, not the client's, so they can't force you to litigate in a distant state, and (3) the prevailing-party fees provision means if you have to sue to get paid, the client pays your legal costs too — which is a powerful incentive for them to just pay the invoice.
        </p>
      </section>

      <section>
        <h2>How These Clauses Work Together</h2>
        <p>
          No single clause prevents non-payment on its own. It's the <strong>system</strong> that works:
        </p>
        <ul>
          <li>The <strong>payment schedule</strong> keeps cash flowing throughout the project.</li>
          <li>The <strong>late payment penalty</strong> makes delinquency costly.</li>
          <li>The <strong>kill fee</strong> protects against cancellations.</li>
          <li>The <strong>scope change clause</strong> prevents disputes over what work was included.</li>
          <li>The <strong>ownership transfer clause</strong> gives you leverage at the final invoice.</li>
          <li>The <strong>expenses clause</strong> eliminates a common point of invoice friction.</li>
          <li>The <strong>dispute resolution clause</strong> makes enforcement predictable and affordable.</li>
        </ul>
        <p>
          Together, they create a client relationship where <strong>the default outcome is payment</strong> — not because your client is a good person (though they probably are), but because the contract makes non-payment the more expensive and complicated path. That's the kind of leverage every freelancer deserves.
        </p>
      </section>

      <section>
        <h2>One More Thing: The Demand Letter Clause</h2>
        <p>
          If the above clauses fail and a client still isn't paying, your next move is a formal <strong>demand letter</strong> — and you should have that option in the contract too:
        </p>
        <p>
          <strong>Sample language:</strong> "Prior to initiating any legal action, the non-breaching party shall send a written demand letter to the breaching party detailing the specific breach, the amount due (if applicable), and a cure period of 14 calendar days. If the breach is not cured within that period, the non-breaching party may pursue all available legal remedies."
        </p>
        <p>
          This clause does two things: it gives you a clear, contractual basis for sending a demand letter, and it gives the client a final, formal warning before things escalate. Most clients pay at this stage — which is exactly what you want.
        </p>
        <p>
          Need to generate a professional demand letter right now? <strong>DemandFlow creates a legally-worded demand letter for your unpaid invoice in under 60 seconds.</strong> Just fill in the details, preview, pay $29, and download. No account needed.
        </p>
      </section>
    </ArticleLayout>
  );
}
