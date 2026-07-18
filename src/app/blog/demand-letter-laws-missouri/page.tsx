import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-missouri")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-missouri">
      <p>
        You're a freelance web developer in Central West End, and a St. Louis-based
        healthcare startup owes you $8,400 for a custom patient-portal dashboard
        you delivered three months ago. They're using it in production, their
        investors love it, and your emails now bounce back with "unmonitored
        mailbox." It's time for a demand letter — and if you're in Missouri, you
        can use a distinctly Missouri set of collection tools: a $5,000 small
        claims limit in Associate Circuit Court (Mo. Rev. Stat. § 482.305), 9%
        prejudgment interest on qualifying liquidated claims after demand (Mo.
        Rev. Stat. § 408.020), a 10-year limitations period for qualifying
        written-payment obligations (Mo. Rev. Stat. § 516.110), and the Missouri
        Merchandising Practices Act (Mo. Rev. Stat. § 407.020) in consumer
        transactions involving deception. The MMPA can support actual damages,
        attorney fees, and punitive awards that create treble-damages exposure
        in an appropriate case. Here's exactly how Missouri freelancers write a
        demand letter that leverages every tool the Show-Me State provides.
      </p>

      <h2>Missouri Small Claims Court: $5,000 Limit in Associate Circuit Court</h2>

      <p>
        Missouri's small claims system operates through Associate Circuit Court
        under Mo. Rev. Stat. § 482.305. The jurisdictional limit is
        <strong>$5,000</strong>. For freelancers, this means many routine
        non-payment disputes can stay in a faster, less formal forum, where the
        process is faster, cheaper, and intentionally informal. Here's what every
        Missouri freelancer needs to know:
      </p>

      <ul>
        <li>
          <strong>$5,000 cap:</strong> Claims up to $5,000 are heard in
          Associate Circuit Court under small claims rules. For a multi-project
          freelancer, this covers many project deposits, design engagements,
          copywriting packages, and monthly retainers. A larger claim may need
          the ordinary civil docket, or the claimant may decide whether waiving
          the excess makes economic sense.
        </li>
        <li>
          <strong>No formal pleading required:</strong> Missouri's small claims
          process uses forms supplied by the relevant circuit court clerk. The
          petition should identify the parties, the amount requested, and the
          basis for the debt. Check the local court's current instructions,
          filing fee, service requirements, and hearing schedule before filing.
        </li>
        <li>
          <strong>Local procedure matters:</strong> St. Louis City, St. Louis
          County, Jackson County, and Greene County publish their own clerk
          information. A St. Louis freelancer, Kansas City designer, or
          Springfield consultant should confirm the current fee and service
          options with the court where the case will actually be filed.
        </li>
        <li>
          <strong>Venue:</strong> File in the Associate Circuit Court for the
          county where the defendant resides or does business. For a St. Louis
          client, that may be St. Louis City or St. Louis County. For a Kansas
          City client, it may be Jackson County; for a Springfield client, it
          may be Greene County. Confirm venue from the contract, the defendant's
          location, and where the transaction occurred.
        </li>
        <li>
          <strong>Attorney representation allowed but not required:</strong>
          Unlike some states that prohibit lawyers in small claims, Missouri
          allows attorney representation. This gives you options: you can go
          pro se (representing yourself) or hire an attorney if the amount
          justifies the cost. The MMPA's attorney-fee provision (discussed
          below) often makes representation cost-neutral for winning plaintiffs.
        </li>
        <li>
          <strong>Small claims has tradeoffs:</strong> The streamlined process
          is useful, but procedural and review rights differ from an ordinary
          civil action. Read the clerk's current small-claims instructions and
          Missouri's governing rules before choosing the forum, especially if
          the dispute includes counterclaims or a complex MMPA theory.
        </li>
      </ul>

      <div className="bg-accent-soft border border-border rounded-lg p-6 my-8">
        <h3 className="text-lg font-bold mb-2">The $5,000 Freelancer Advantage</h3>
        <p>
          Missouri's $5,000 small claims cap gives freelancers a practical
          option for modest invoices without using the ordinary civil docket,
          where the rules of civil
          procedure, discovery, and evidentiary standards raise the cost and
          complexity can be greater. For an $8,400 invoice like our St. Louis
          developer example, the full amount exceeds the small claims ceiling;
          the freelancer must evaluate an ordinary civil claim or a waiver of
          the excess rather than pretending the whole dispute fits. Compare this to states
          like Arizona ($3,500 cap) or California (recently raised to $12,500),
          and Missouri freelancers have a structural advantage: the court's
          jurisdictional limit still covers many common freelance invoices.
          Your demand letter can explicitly
          reference the $5,000 Associate Circuit limit to make clear you're
          aware of — and prepared to use — Missouri's uniquely accessible
          small claims system.
        </p>
      </div>

      <h2>Statute of Limitations: 10 Years for Written Contracts</h2>

      <p>
        Missouri gives freelancers a generous statute-of-limitations window
        under Mo. Rev. Stat. § 516.110: <strong>10 years for written
        contracts</strong> when the action is based on a writing for the payment
        of money or property. Missouri courts focus on whether the promise to
        pay is contained in the writing itself, so not every dispute that happens
        to involve an email or invoice automatically receives ten years. Crucially:
      </p>

      <ul>
        <li>
          <strong>What's a "written contract" in Missouri?</strong> Courts
          examine the writing itself. A signed services agreement stating scope,
          price, and payment terms is much stronger than a bare invoice created
          after the work. Preserve the signed proposal, statement of work,
          written change orders, and messages that incorporate those terms.
        </li>
        <li>
          <strong>The clock starts at breach:</strong> The 10 years run from the
          date the payment became due — not from the date the contract was
          signed. If your contract says "net 30" and you invoiced on March 1,
          the clock starts April 1. If a client ghosted you 5 years ago on a
          $3,000 invoice, don't assume it's too late — verify the exact date
          payment was due.
        </li>
        <li>
          <strong>Do not wait:</strong> Accrual, acknowledgment, partial payment,
          and the nature of the writing can change the limitations analysis.
          Your demand letter should identify the agreement, due date, invoices,
          and payment history, but a ten-year headline is not a reason to let
          evidence disappear or postpone advice on an aging claim.
        </li>
      </ul>

      <h2>Prejudgment Interest: 9% Per Year Under § 408.020</h2>

      <p>
        Missouri allows <strong>9% per year</strong> prejudgment interest under
        Mo. Rev. Stat. § 408.020 on qualifying liquidated contract or account
        claims after payment becomes due and demand is made. The debt must be
        fixed or readily ascertainable, and the statute's demand requirements
        matter. For freelancers, the demand letter can therefore start or
        document a valuable interest claim. Here is illustrative simple-interest
        math, assuming the legal requirements are satisfied:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-border p-3 text-left font-bold">Invoice</th>
              <th className="border border-border p-3 text-left font-bold">Due Date</th>
              <th className="border border-border p-3 text-left font-bold">Days Late (as of demand)</th>
              <th className="border border-border p-3 text-left font-bold">Interest Owed</th>
              <th className="border border-border p-3 text-left font-bold">Total Demanded</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3">$2,000</td>
              <td className="border border-border p-3">6 months ago</td>
              <td className="border border-border p-3">180</td>
              <td className="border border-border p-3">$88.77</td>
              <td className="border border-border p-3 font-bold">$2,088.77</td>
            </tr>
            <tr>
              <td className="border border-border p-3">$8,400</td>
              <td className="border border-border p-3">12 months ago</td>
              <td className="border border-border p-3">365</td>
              <td className="border border-border p-3">$756.00</td>
              <td className="border border-border p-3 font-bold">$9,156.00</td>
            </tr>
            <tr>
              <td className="border border-border p-3">$15,000</td>
              <td className="border border-border p-3">18 months ago</td>
              <td className="border border-border p-3">547</td>
              <td className="border border-border p-3">$2,024.38</td>
              <td className="border border-border p-3 font-bold">$17,024.38</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The precise start date depends on when the amount was due, when a proper
        demand was made, and whether the claim was sufficiently certain. This
        is why a dated written demand that states an exact amount is important.
        A demand letter that includes a precise interest calculation (down to
        the penny, using the standard formula: principal × 9% ÷ 365 × days
        late) signals that you understand Missouri's statutory interest
        framework and aren't bluffing. For a $15,000 year-and-a-half-old
        invoice, the illustrative interest is $2,024.38. State that interest
        continues to accrue, but avoid presenting it as guaranteed when the
        amount or underlying performance is genuinely disputed.
      </p>

      <h2>The Missouri Merchandising Practices Act: Treble-Damages Exposure</h2>

      <p>
        The Missouri Merchandising Practices Act begins at Mo. Rev. Stat.
        § 407.020 and prohibits deception, fraud, false promises,
        misrepresentation, unfair practices, and concealment in connection with
        the sale or advertisement of merchandise. A qualifying private claim
        under § 407.025 can seek actual damages, equitable relief, attorney fees,
        and, when the facts support it, punitive damages. Those punitive damages
        can create <strong>treble-damages exposure</strong>, but tripling is not
        automatic. Here's what freelancers need to understand:
      </p>

      <ul>
        <li>
          <strong>What triggers the MMPA?</strong> The transaction must fit the
          statute, including its private-action requirements. A freelancer who
          purchased merchandise or services primarily for personal, family, or
          household purposes may have a different position from a freelancer
          collecting an ordinary business-to-business invoice. Nonpayment alone
          is a contract problem; deception connected to a qualifying consumer
          transaction is what potentially brings § 407.020 into play.
        </li>
        <li>
          <strong>Treble damages require a real legal basis:</strong> Section
          407.025 does not mechanically multiply every unpaid invoice by three.
          A petition may request punitive damages where authorized and supported
          by aggravated facts, and a court may award attorney fees. For an
          $8,400 dispute, a three-times damages theory would create $25,200 in
          exposure, but the letter should describe that as potential exposure,
          not a sum already owed.
        </li>
        <li>
          <strong>Use the letter to define the misconduct:</strong> Identify the
          representation, who made it, when it was made, why it was false, and
          how it caused the loss. Do not merely paste “MMPA” beside a breach of
          contract. A concrete narrative is more credible and helps counsel
          later assess whether an MMPA count belongs in the case.
        </li>
      </ul>

      <div className="bg-accent-soft border border-border rounded-lg p-6 my-8">
        <h3 className="text-lg font-bold mb-2">The MMPA Demand Letter Formula</h3>
        <p className="mb-3">
          A Missouri demand letter that cites the MMPA should follow this
          structure to maximize leverage:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Principal owed:</strong> State the exact invoice amount(s),
            dates, and the services provided. Reference the contract or written
            agreement establishing the obligation.
          </li>
          <li>
            <strong>Statutory interest:</strong> Calculate and demand 9%
            per year from the date each payment was due, under Tenn. Code Ann.
            § 47-14-121. Show the math.
          </li>
          <li>
            <strong>MMPA damages notice:</strong> If the transaction qualifies,
            identify the deceptive practice under § 407.020 and reserve claims
            for actual damages, attorney fees, and punitive relief under
            § 407.025, including potential treble-damages exposure.
          </li>
          <li>
            <strong>Demand resolution within 30 days:</strong> Give the client
            a clear deadline to pay the principal plus accrued interest or make
            a concrete settlement response before litigation begins.
          </li>
          <li>
            <strong>Associate Circuit Court reference:</strong> Note that the
            claim falls well within the $5,000 jurisdictional limit and will
            be filed in the county where the defendant does business, with
            attorney fees added to the judgment under the MMPA.
          </li>
        </ol>
      </div>

      <h2>Missouri's "Good Faith" Dispute Exception and How to Preempt It</h2>

      <p>
        A common defense in non-payment cases is the claim that the dispute is
        "genuine" — not a refusal to pay, but a disagreement over quality,
        scope, or deliverables. Missouri courts apply a reasonableness standard:
        the dispute must be genuine and not a post-hoc fabrication. Your demand
        letter should preempt this defense by including:
      </p>

      <ul>
        <li>
          <strong>Evidence of acceptance:</strong> Forward the email where the
          client approved final deliverables, the Slack message saying "looks
          great," or the GitHub PR merge showing the code went to production.
          Attach screenshots to the demand letter as exhibits.
        </li>
        <li>
          <strong>Evidence of use:</strong> If the client is using your work
          in production — the website is live, the design appears in their
          marketing materials, the dashboard is serving real patients — document
          it in the letter. A client cannot claim your work was "unacceptable"
          while simultaneously using it to generate revenue.
        </li>
        <li>
          <strong>Opportunity to cure:</strong> Missouri's good-faith
          framework favors the party that gave the other party a reasonable
          chance to address concerns. If the client never raised quality issues
          before the demand letter, state that explicitly: "At no point prior
          to this letter was any concern expressed about the quality or
          completeness of the work performed."
        </li>
      </ul>

      <h2>Putting It All Together: The Missouri Demand Letter Template</h2>

      <p>
        Here's a template structure that incorporates Missouri-specific
        statutes and puts maximum pressure on a non-paying client:
      </p>

      <div className="bg-surface border border-border rounded-lg p-6 my-6 font-mono text-sm leading-relaxed">
        <p className="mb-2">[Your Name / Business]</p>
        <p className="mb-2">[Your Address]</p>
        <p className="mb-2">[City, State ZIP]</p>
        <p className="mb-4">[Date]</p>

        <p className="mb-2"><strong>VIA CERTIFIED MAIL — RETURN RECEIPT REQUESTED</strong></p>

        <p className="mb-4">[Client Name / Business]<br />[Client Address]<br />[City, State ZIP]</p>

        <p className="mb-2"><strong>Re: Demand for Payment — Unpaid Invoice[s] #[Numbers]</strong></p>

        <p className="mb-4">Dear [Client Name]:</p>

        <p className="mb-4">
          This letter constitutes a formal demand for payment and notice of
          the written agreement identified below, Mo. Rev. Stat. § 408.020,
          and, if applicable, the Missouri Merchandising Practices Act,
          Mo. Rev. Stat. §§ 407.020 and 407.025.
        </p>

        <p className="mb-4">
          On [date], you engaged my services to [describe the work]. We agreed
          on a fee of $[amount], payable within [terms — e.g., 30 days of
          invoice]. I delivered the completed work on [date], which you
          [accepted / approved / put into production use] on [date]. A copy
          of your acceptance is attached as Exhibit A. A screenshot of the
          work in production is attached as Exhibit B.
        </p>

        <p className="mb-4">
          As of today, [X] days have elapsed since payment was due. Under
          Missouri law, you owe:
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>Principal: $[amount]</li>
          <li>
            Pre-judgment interest at 9% per annum (Mo. Rev. Stat. § 408.020),
            from [due date] to [today]: $[calculated]
          </li>
          <li><strong>Total currently owed: $[total]</strong></li>
        </ul>

        <p className="mb-4">
          Your ongoing refusal to pay — especially while continuing to use the
          work I delivered — constitutes a willful deceptive act or practice
          through a specific false representation or unfair practice may also
          violate Mo. Rev. Stat. § 407.020 if this transaction satisfies the
          MMPA's requirements. In that event, I reserve all relief available
          under § 407.025, including actual damages, reasonable attorney fees,
          and punitive damages. Potential damages at three times the principal
          would be $[principal × 3], subject to proof and the court's ruling.
        </p>

        <p className="mb-4">
          <strong>This letter is a formal demand for the exact amount stated
          above and documents the date on which demand was made.</strong>
        </p>

        <p className="mb-4">
          I am prepared to resolve this without litigation if payment of
          $[principal + interest] is received within 30 days of the date of
          this letter. If payment is not received, I will file this claim in
          [County] Associate Circuit Court, where the jurisdictional limit is
          $5,000 (Mo. Rev. Stat. § 482.305). The claim will include the
          principal, qualifying prejudgment interest at 9%, costs, and any
          MMPA relief supported by the transaction and evidence.
        </p>

        <p className="mb-4">
          Please direct payment to [your payment method] and confirm receipt
          of this letter in writing. This is your opportunity to resolve this
          matter at the lowest possible cost. Should you fail to respond
          within 30 days, I will proceed with litigation without further
          notice.
        </p>

        <p className="mb-4">Sincerely,</p>
        <p>[Your Signature]<br />[Your Name]</p>
      </div>

      <h2>What Happens If Litigation Becomes Necessary</h2>

      <p>
        If the 30 days expire without payment, here's the Missouri litigation
        path:
      </p>

      <ol>
        <li>
          <strong>File the small-claims petition:</strong> Go to the Associate Circuit
          Court clerk in the county where the defendant does business. Fill out
          the court's approved form listing the amount owed and factual basis.
          Keep the requested small-claims recovery within $5,000 and confirm the
          current filing fee and service charge with the local clerk.
        </li>
        <li>
          <strong>Service:</strong> The sheriff or a private process server
          serves the defendant using a method allowed by the court. Timing and
          hearing settings vary, so use the dates supplied by the clerk rather
          than assuming a statewide schedule.
        </li>
        <li>
          <strong>The hearing:</strong> Missouri Associate Circuit Court
          proceedings are informal. You present your case — the contract,
          the work delivered, evidence of acceptance, and the demand letter
          as proof that payment was demanded. Present an MMPA theory only when
          the transaction and evidence actually support it.
        </li>
        <li>
          <strong>Post-judgment:</strong> Read the judgment and clerk's
          instructions immediately. Deadlines and available review procedures
          can be short, and winning a judgment is separate from collecting it.
        </li>
      </ol>

      <div className="callout bg-accent-soft border border-border rounded-lg p-6 my-8">
        <h3 className="text-lg font-bold mb-2">Key Missouri Deadlines to Remember</h3>
        <ul className="space-y-1">
          <li><strong>Your stated deadline:</strong> Use a clear, reasonable payment deadline in the demand letter</li>
          <li><strong>Promptly after judgment:</strong> Check the court's current review and collection rules</li>
          <li><strong>10 years:</strong> Statute of limitations for written contracts (Mo. Rev. Stat. § 516.110)</li>
          <li><strong>9% per year:</strong> Statutory judgment interest rate (Mo. Rev. Stat. § 408.020)</li>
        </ul>
      </div>

      <p>
        Missouri gives freelancers meaningful leverage: a $5,000 small claims
        forum, 9% prejudgment interest on qualifying demanded debts, a long
        limitations period for qualifying written promises to pay, and MMPA
        remedies—including potential treble-damages exposure—when a covered
        consumer transaction truly involves deception. A strong letter does
        not overclaim. It states the agreement, proof of performance, exact
        balance, interest basis, deadline, and next forum so a St. Louis,
        Kansas City, or Springfield client can see that litigation is the more
        expensive option. This article provides general information, not legal
        advice; ask a Missouri lawyer about an MMPA or aging-contract claim.
      </p>
    </ArticleLayout>
  );
}
