import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-colorado")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-colorado">
      <p>
        You're a freelance UX designer in RiNo (River North Art District), and a
        Denver-based fintech startup owes you $6,200 for a mobile app redesign
        you delivered six months ago. The app launched, their Series A closed,
        and your emails now get "we'll circle back next quarter" replies. It's
        time for a demand letter — and if you're in Colorado, you operate under
        a freelancer-friendly framework: a $7,500 small claims limit (C.R.S.
        § 13-6-403), 8% statutory judgment interest (C.R.S. § 5-12-102)
        compounded annually, and the powerful Colorado Consumer Protection Act
        (C.R.S. § 6-1-113) that awards treble damages plus mandatory attorney
        fees for deceptive trade practices. Colorado combines the West's
        independent spirit with surprisingly robust consumer protections — and a
        demand letter that cites the CCPA carries outsized weight. Here's
        exactly how Colorado freelancers write a demand letter that leverages
        every tool the Centennial State provides.
      </p>

      <h2>Colorado Small Claims Court: $7,500 Limit</h2>

      <p>
        Colorado's small claims system operates through County Court under
        C.R.S. § 13-6-403. The jurisdictional limit is <strong>$7,500</strong>
        — generous enough to cover most freelance disputes, from web development
        contracts to multi-month creative retainers. Here's what every Colorado
        freelancer needs to know:
      </p>

      <ul>
        <li>
          <strong>$7,500 cap:</strong> Claims up to $7,500 (excluding costs and
          interest) are heard under small claims rules. For most freelancers,
          this covers the bulk of unpaid invoices — including substantial design
          and development contracts. If your claim exceeds $7,500, you can
          waive the excess to stay in small claims (the faster, cheaper track)
          or file in regular County Court.
        </li>
        <li>
          <strong>No lawyers in small claims:</strong> Colorado prohibits
          attorney representation in small claims court (C.R.S. § 13-6-405)
          unless both parties agree. This keeps costs low and creates a
          level playing field — but you must present your own case clearly.
          Corporations can send a non-lawyer representative.
        </li>
        <li>
          <strong>Filing fees:</strong> Approximately $50–$65 depending on the
          county (Denver County: $55; Boulder County: $50; El Paso
          County/Colorado Springs: $55). If you win, the fee is typically
          recoverable from the defendant.
        </li>
        <li>
          <strong>Venue:</strong> File in the County Court where the defendant
          resides or does business. For a Denver client, that's Denver County
          Court. For a Boulder client, Boulder County Court. Colorado's venue
          rules (C.R.C.P. 398) require filing where the defendant is located
          or where the contract was performed.
        </li>
        <li>
          <strong>Service of process:</strong> Colorado allows personal service
          by the sheriff's office or a private process server. Certified mail
          with return receipt is also accepted. Budget $10–$50 for service.
        </li>
      </ul>

      <h2>Colorado Consumer Protection Act (CCPA): Treble Damages</h2>

      <p>
        This is Colorado's heavyweight. The CCPA (C.R.S. § 6-1-113) prohibits
        deceptive trade practices, which can include knowingly accepting
        services without intending to pay, making false promises about payment
        timelines, or misrepresenting the financial health of the business to
        induce continued work. If you can prove the client engaged in a
        deceptive trade practice, Colorado courts can award:
      </p>

      <ul>
        <li>
          <strong>Actual damages:</strong> the unpaid invoice amount plus any
          consequential damages you can document.
        </li>
        <li>
          <strong>Treble damages:</strong> three times the actual damages if
          the deceptive act was committed in bad faith or with willful
          disregard. For a $6,200 unpaid invoice, that becomes $18,600.
        </li>
        <li>
          <strong>Mandatory attorney fees:</strong> Unlike most states where
          fee awards are discretionary, Colorado's CCPA mandates attorney fee
          recovery for prevailing plaintiffs — even in small claims, where
          lawyers aren't allowed during trial. If your demand letter leads to
          a settlement before trial, you avoid litigation costs entirely.
        </li>
        <li>
          <strong>Statutory damages:</strong> Colorado also provides for
          statutory damages of $500 per violation under certain circumstances
          (C.R.S. § 6-1-113(2)(a)(III)).
        </li>
      </ul>

      <p>
        <strong>Key demand-letter language:</strong> Explicitly cite C.R.S.
        § 6-1-113 and state: "Under the Colorado Consumer Protection Act, a
        court may award treble damages plus mandatory attorney fees for
        deceptive trade practices, including accepting your services without
        intent to pay. This letter serves as formal notice of the deceptive
        practice, and continued non-payment after notice strengthens the case
        for treble damages." This single paragraph often converts a stalled
        invoice into a same-week wire transfer.
      </p>

      <h2>Statutory Interest: 8% Compounded Annually</h2>

      <p>
        Colorado sets the statutory interest rate at <strong>8% per
        year</strong>, compounded annually, under C.R.S. § 5-12-102. This
        applies from the date the debt became due (the invoice due date) or
        from the date of breach, not just from the judgment date. Here's why
        this matters:
      </p>

      <ul>
        <li>
          For a $6,200 invoice that's 6 months past due, pre-judgment interest
          is approximately $248 and climbing — and compounding annually means
          your claim grows faster than simple-interest states.
        </li>
        <li>
          Post-judgment interest continues at the same 8% compounded rate until
          the judgment is satisfied. Colorado judgments are enforceable for 20
          years (C.R.S. § 13-52-102), and interest keeps accruing.
        </li>
        <li>
          <strong>Demand letter calculation:</strong> Always include a specific
          interest calculation in your demand letter: "$6,200.00 principal +
          $248.00 in accrued interest at 8% compounded as of [date] = $6,448.00
          total due." Showing the math makes non-payment look expensive.
        </li>
      </ul>

      <h2>Statute of Limitations: Know Your Contract Type</h2>

      <p>
        Colorado has a bifurcated statute of limitations that freelancers must
        track carefully:
      </p>

      <ul>
        <li>
          <strong>Written contracts:</strong> 6 years (C.R.S. § 13-80-103.5).
          This applies to signed service agreements, statements of work,
          detailed email agreements that constitute a writing, and formal
          contracts. Most freelance work falls under this category.
        </li>
        <li>
          <strong>Oral contracts:</strong> 3 years (C.R.S. § 13-80-101).
          Applies to handshake deals and verbal agreements without written
          documentation. For freelancers, the lesson is clear: always get it
          in writing — even a detailed email summary of a phone call counts.
        </li>
        <li>
          <strong>When the clock starts:</strong> The statute runs from the
          date the cause of action accrues — typically the invoice due date or
          the date the client breached by failing to pay. For ongoing projects
          with multiple invoices, each unpaid invoice starts its own clock.
        </li>
      </ul>

      <h2>Sample Demand Letter: Colorado Freelancer</h2>

      <p>
        Below is a template structured for Colorado law, incorporating the
        CCPA reference, the 8% compounding interest, and the treble-damages
        warning. Fill in your specifics and send via certified mail with return
        receipt to the client's registered agent or business address (look up
        the registered agent on the Colorado Secretary of State's business
        search at https://www.sos.state.co.us).
      </p>

      <pre style={{ background: "#f5f5f5", padding: "1.5rem", borderRadius: "0.5rem", fontSize: "0.875rem", overflow: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>
{`[Your Name]
[Your Address]
[Denver/Boulder/Colorado Springs, CO ZIP]
[Your Email]
[Date]

VIA CERTIFIED MAIL — RETURN RECEIPT REQUESTED

[Client Name / Company Name]
[Registered Agent or Business Address]
[City, CO ZIP]

Re: DEMAND FOR PAYMENT — [Project Description]
     Invoice #[Number] — $[Amount] Past Due

Dear [Client Name]:

I am writing to formally demand payment of $[Principal Amount] for
[describe the work performed], which was delivered on [date] and
accepted by your company. This amount has been past due since
[Invoice Due Date].

As of today, [Date], the total amount owed is:

  Principal (Invoice #[Number]) ................ $[Principal]
  Accrued interest at 8% compounded
  (C.R.S. § 5-12-102) from [Due Date]
  through [Today's Date] ...................... $[Interest]
                                        --------------
  TOTAL DUE .................................... $[Total]

Under Colorado law, a court may award treble damages plus mandatory
attorney fees for deceptive trade practices (C.R.S. § 6-1-113,
Colorado Consumer Protection Act). Accepting services rendered
without intending to pay for them constitutes a deceptive trade
practice. This letter serves as formal notice of the deceptive
practice — continued non-payment after notice strengthens the case
for treble damages and mandatory fee recovery.

If payment is not received by [Date — give 14 days], I will file
suit in [Denver/Boulder/El Paso] County Small Claims Court under
C.R.S. § 13-6-403. My claim will include the full principal,
accrued interest measured from the due date, and all filing and
service costs.

You may avoid litigation entirely by remitting payment of $[Total]
to the address above, or via [payment method]. Please direct any
questions to [email/phone].

Sincerely,

[Your Name]
[Your Signature]`}
      </pre>

      <h2>Colorado Small Claims: Step-by-Step Filing</h2>

      <p>If your demand letter doesn't produce payment within the deadline:</p>

      <ol>
        <li>
          <strong>Complete the Notice, Claim, and Summons to Appear for
          Trial (Form JDF 250).</strong> Available at any Colorado Judicial
          Branch website (https://www.courts.state.co.us) or at the County
          Court clerk's office. The form is straightforward — state who you
          are, who the defendant is, the amount owed, and a brief description
          of why.
        </li>
        <li>
          <strong>File in person at the County Court clerk's office.</strong>
          Bring the completed JDF 250 form, the filing fee ($50–$65), and
          three copies of all supporting documents (contract, invoices, email
          correspondence). The clerk stamps everything and sets a trial date,
          typically 30–60 days out.
        </li>
        <li>
          <strong>Serve the defendant.</strong> The clerk provides a stamped
          copy for service. Use the sheriff's office or a private process
          server. If the defendant is a registered Colorado business, serve
          the registered agent listed on the Secretary of State's website.
        </li>
        <li>
          <strong>Prepare for trial.</strong> Colorado small claims is
          informal — no lawyers, no formal pleadings. Bring your contract,
          all invoices, email chains showing acceptance and non-payment, and
          your demand letter with the certified mail receipt. The magistrate
          or judge will ask you to tell your story. Keep it chronological and
          factual.
        </li>
        <li>
          <strong>Collecting the judgment.</strong> Colorado judgments earn
          8% interest compounded annually and are enforceable for 20 years.
          If the defendant doesn't pay voluntarily, you can garnish wages
          (C.R.S. § 13-54.5), levy bank accounts, or place a lien on
          property (C.R.S. § 13-52-102).
        </li>
      </ol>

      <h2>Key Colorado Statutes for Your Demand Letter</h2>

      <ul>
        <li><strong>C.R.S. § 13-6-403:</strong> Small claims jurisdiction — $7,500 limit</li>
        <li><strong>C.R.S. § 6-1-113:</strong> Colorado Consumer Protection Act — treble damages + mandatory attorney fees for deceptive trade practices</li>
        <li><strong>C.R.S. § 5-12-102:</strong> 8% statutory interest, compounded annually, from date of breach</li>
        <li><strong>C.R.S. § 13-80-103.5:</strong> 6-year statute of limitations for written contracts</li>
        <li><strong>C.R.S. § 13-80-101:</strong> 3-year statute of limitations for oral contracts</li>
        <li><strong>C.R.S. § 13-52-102:</strong> Judgment enforceable for 20 years with continuing interest</li>
      </ul>

      <h2>When the CCPA Doesn't Apply — And What to Do</h2>

      <p>
        The CCPA applies to consumer transactions, which Colorado courts
        interpret broadly. However, if the transaction is purely commercial
        (B2B) and doesn't involve any element of consumer deception, the CCPA
        may not apply. In that case, your demand letter should focus on:
      </p>

      <ul>
        <li><strong>Breach of contract</strong> — the simplest and most straightforward claim.</li>
        <li><strong>Quantum meruit</strong> — you did the work, they benefited, fairness demands payment.</li>
        <li><strong>Promissory estoppel</strong> — you reasonably relied on their promise to pay and changed your position (e.g., turned down other work).</li>
        <li><strong>Colorado's general interest statute</strong> (C.R.S. § 5-12-102) still applies — 8% compounded from the breach date.</li>
      </ul>

      <p>
        Even without the CCPA, a well-crafted demand letter citing breach of
        contract with 8% compounding interest and the $7,500 small claims path
        is persuasive. Most business clients, when faced with a clear legal
        roadmap to a judgment plus 20 years of accruing interest, choose to pay.
      </p>
    </ArticleLayout>
  );
}
