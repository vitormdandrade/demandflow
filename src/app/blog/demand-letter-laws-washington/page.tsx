import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-washington")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-washington">
      <p>
        You're a freelance web developer in Seattle's Capitol Hill
        neighborhood, and a local tech startup owes you $9,200 for a
        completed MVP build. You delivered the code, they launched the
        product, and now eight weeks of polite follow-ups have gone
        unanswered. It's time for a demand letter — and if you're in
        Washington State, you're holding one of the most favorable legal
        toolkits in the country. Washington gives you a $10,000 small claims
        limit that covers nearly all freelance disputes (RCW 12.40.010), a
        12% statutory interest rate that's tied for the highest in the
        nation (RCW 19.52.020 and RCW 4.56.110), a six-year statute of
        limitations for written contracts (RCW 4.16.040), and — critically —
        the Washington Consumer Protection Act (RCW 19.86), which allows{' '}
        <strong>treble damages up to $25,000</strong> plus attorney fees,
        with no mandatory pre-suit notice required. Most states make you
        jump through procedural hoops to unlock enhanced damages. Washington
        doesn't. If the client's conduct was deceptive or unfair, the CPA
        gives you a direct path to triple recovery — and your demand letter
        is the document that puts them on notice.
      </p>

      <h2>Washington Small Claims Court: $10,000 Limit, No Lawyers</h2>

      <p>
        Washington's small claims system is one of the most freelancer-friendly
        in the country. Under RCW 12.40.010, individuals can file claims up to
        $10,000 in District Court — a threshold that covers the vast majority
        of unpaid freelance invoices. Businesses (including LLCs and
        corporations) are capped at $5,000. Here's what freelancers need to
        know:
      </p>

      <ul>
        <li>
          <strong>$10,000 cap for individuals:</strong> If you operate as a
          sole proprietor (which most freelancers are), the full $10,000 limit
          applies. For a $9,200 unpaid web development invoice, you stay
          entirely within the small claims track.
        </li>
        <li>
          <strong>No lawyers:</strong> Washington small claims court does not
          permit attorney representation at the hearing. Both sides represent
          themselves. This levels the playing field — a well-documented
          freelancer with a clear demand letter often has a stronger case than
          a business owner who shows up unprepared.
        </li>
        <li>
          <strong>Low filing fees:</strong> Filing a small claims case costs
          $50 for claims up to $5,000 and $75 for claims between $5,001 and
          $10,000. You can request that the defendant reimburse your filing
          fee and service costs if you win.
        </li>
        <li>
          <strong>Venue:</strong> File in the District Court for the county
          where the defendant lives, or where the contract was performed.
          For remote freelancers in Seattle who worked from their home office
          for a client in Spokane, King County District Court is the right
          venue — that's where you performed the work.
        </li>
        <li>
          <strong>No minimum claim amount:</strong> Unlike some states,
          Washington has no minimum dollar threshold for small claims. Even a
          $200 unpaid consulting invoice can be pursued.
        </li>
      </ul>

      <p>
        For amounts above $10,000, you'll need to file in the regular civil
        division of District Court or Superior Court (for claims over
        $100,000). In those forums, lawyers are permitted — which is where
        the CPA's attorney-fee-shifting provision becomes critical. More on
        that below.
      </p>

      <h2>Statute of Limitations: 6 Years for Written Contracts</h2>

      <p>
        Under RCW 4.16.040, Washington gives you six years from the date the
        cause of action accrues to sue on a written contract. For freelancers,
        the "accrual date" is typically when the invoice became overdue — the
        moment the client breached by failing to pay by the agreed deadline.
        Six years is generous and gives you substantial runway, but don't sit
        on it. Evidence degrades, email chains get deleted, and witnesses
        forget key details. The strongest demand letter is the one sent
        promptly — ideally within 30–60 days of the invoice becoming overdue.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
        <strong>📋 Key Statute:</strong> RCW 4.16.040 — "An action upon a
        contract in writing, or liability express or implied arising out of
        a written agreement... shall be commenced within six years." This
        covers formal freelance contracts, signed engagement letters, and
        detailed email chains that clearly memorialize the agreement terms
        and payment obligations.
      </div>

      <h2>Statutory Interest: 12% — Tied for the Highest in the Nation</h2>

      <p>
        This is the single most powerful number in a Washington demand letter.
        Washington's statutory interest rate on judgments is 12% per annum —
        tied with Massachusetts for the highest in the United States. Here's
        how it works:
      </p>

      <ul>
        <li>
          <strong>Post-judgment interest (RCW 4.56.110):</strong> Once a
          judgment is entered, interest accrues at 12% annually on the unpaid
          principal. This is automatic — the court has no discretion to reduce
          it. On a $9,200 judgment that takes a year to collect, that's an
          additional $1,104 in interest.
        </li>
        <li>
          <strong>Prejudgment interest (RCW 19.52.020):</strong> Washington
          allows prejudgment interest on liquidated damages — meaning a
          specific, calculable amount like an unpaid invoice. If the amount
          is "liquidated" (i.e., not in dispute as to the dollar figure) and
          the client has had use of your money, Washington courts award
          prejudgment interest at 12%. On a $9,200 invoice that's been unpaid
          for a year, that adds another $1,104 to your claim.
        </li>
        <li>
          <strong>Contractual interest:</strong> If your freelance contract
          specifies a late-payment interest rate, that rate controls — but
          Washington caps contractual interest at 12% for non-consumer
          transactions (RCW 19.52.020). If your contract says 18%, a court
          will reduce it to 12%. If your contract is silent, the statutory
          12% applies as the default.
        </li>
      </ul>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
        <strong>⚠️ Practical advice:</strong> If your freelance contract
        doesn't specify a late-payment interest rate, add one that matches
        Washington's 12% statutory maximum. Language like: "Overdue balances
        shall accrue interest at the rate of 12% per annum from the due date
        until paid in full." This converts the statutory default into an
        explicit contractual right — eliminating any argument that the rate
        is discretionary.
      </div>

      <h2>The Washington Consumer Protection Act: Treble Damages Without a Pre-Suit Notice</h2>

      <p>
        RCW 19.86, the Washington Consumer Protection Act (CPA), is what
        makes Washington one of the best states in the country for a
        freelancer chasing an unpaid invoice. Unlike many state consumer
        protection statutes that require a formal pre-suit demand letter{' '}
        <em>before</em> you can seek enhanced damages, Washington's CPA has{' '}
        <strong>no mandatory pre-suit notice requirement</strong>. This
        doesn't mean you shouldn't send one — you absolutely should. It
        means the demand letter works as a tactical tool, not a procedural
        hurdle.
      </p>

      <p>When the CPA applies, it provides:</p>

      <ul>
        <li>
          <strong>Treble damages up to $25,000:</strong> The court may award
          up to three times the actual damages sustained, with a statutory
          cap of $25,000 (RCW 19.86.090). For a $9,200 unpaid invoice, that
          could mean a $27,600 recovery — if the cap didn't limit it to
          $25,000. For most freelance disputes under ~$8,300, the full treble
          amount is recoverable without hitting the cap.
        </li>
        <li>
          <strong>Mandatory attorney fees and costs:</strong> Under RCW
          19.86.090, the prevailing plaintiff is entitled to recover
          reasonable attorney fees and costs. This is what makes hiring a
          lawyer economically rational for disputes above the small claims
          limit — because the client pays your legal fees if you win.
        </li>
        <li>
          <strong>Broad scope:</strong> Washington courts interpret the CPA
          broadly. It covers "unfair or deceptive acts or practices in the
          conduct of any trade or commerce" (RCW 19.86.020). "Trade or
          commerce" includes the sale of services — so freelance work is
          squarely covered.
        </li>
      </ul>

      <p>
        To trigger the CPA, you need to establish five elements (per{' '}
        <em>Hangman Ridge Training Stables, Inc. v. Safeco Title Ins. Co.</em>,
        105 Wn.2d 778 (1986)): (1) an unfair or deceptive act or practice,
        (2) occurring in trade or commerce, (3) that impacts the public
        interest, (4) causing injury to the plaintiff's business or property,
        and (5) a causal link between the act and the injury. For freelancers,
        the most common trigger is a client who made false promises to induce
        the work, fabricated excuses to delay payment, or engaged in a pattern
        of deceptive billing practices.
      </p>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-6">
        <strong>🔥 Critical distinction:</strong> The CPA covers deceptive
        conduct — not mere breach of contract. A client who simply can't
        pay is not violating the CPA. A client who lied about their budget
        to get you to lower your price, who claimed "the check is in the
        mail" repeatedly with no check ever arriving, or who fabricated
        "quality issues" to justify non-payment after accepting and using
        your work — those are CPA violations. Your demand letter should
        describe each deceptive act with specificity: dates, statements made,
        and how they were false.
      </div>

      <h2>Attorney Fee Recovery in Washington</h2>

      <p>
        Washington follows the "American Rule" — each party pays their own
        fees unless a statute, contract, or recognized equitable ground
        provides otherwise. Freelancers have three paths to recovering
        attorney fees:
      </p>

      <ol>
        <li>
          <strong>The Consumer Protection Act:</strong> If the CPA applies,
          attorney fees are mandatory under RCW 19.86.090. This is the
          strongest path — and it applies even if the case settles before
          trial, as long as the plaintiff is the "prevailing party."
        </li>
        <li>
          <strong>Contractual fee-shifting:</strong> If your freelance
          contract includes language like "the prevailing party in any
          dispute arising under this agreement shall be entitled to recover
          reasonable attorney fees and costs," that provision is enforceable
          in Washington (RCW 4.84.330 makes such clauses reciprocal — if
          the client can recover fees, so can you).
        </li>
        <li>
          <strong>Offer of Settlement (CR 68 / RCW 4.84.250):</strong>
          Washington's offer of settlement rule allows a party to serve a
          written settlement offer. If the offer is rejected and the final
          judgment is at least as favorable as the offer, the rejecting
          party may be liable for costs and, in some cases, attorney fees.
          This turns your demand letter's settlement offer into a tactical
          weapon: make a reasonable offer, document it, and if the client
          refuses and you win at trial, the cost consequences shift to them.
        </li>
      </ol>

      <h2>Writing the Washington Demand Letter That Gets Results</h2>

      <p>
        A Washington demand letter should hit every note the state's
        statutory framework provides. Here's the structure that works:
      </p>

      <ol>
        <li>
          <strong>State the facts with precision:</strong> Date of contract
          (or engagement), scope of work, date of completion and delivery,
          date invoice was sent, payment terms, due date, and the current
          overdue status. Attach supporting documents: the contract, the
          invoice, and any acknowledgment of receipt from the client.
        </li>
        <li>
          <strong>State the amount due — with interest:</strong> Principal
          amount + 12% annual interest calculated from the due date to the
          present. Show the math. For a $9,200 invoice overdue by 8 months:
          $9,200 × 12% × (8/12) = $736 in accrued interest. Total demand:
          $9,936. This number grows every month — make that clear.
        </li>
        <li>
          <strong>Describe deceptive conduct (CPA trigger):</strong> If the
          client made false representations, fabricated excuses, or engaged
          in a pattern of deceptive conduct, describe each act specifically.
          "On March 15, you stated by email that payment would be processed
          'within 48 hours.' No payment was made. On April 2, you stated the
          check 'was mailed on March 28.' No check arrived..." This creates
          the factual record that triggers the CPA's treble damages and
          attorney fee provisions.
        </li>
        <li>
          <strong>Assert the legal basis:</strong> Cite RCW 4.16.040 (6-year
          statute), RCW 19.52.020 / RCW 4.56.110 (12% interest), RCW 12.40.010
          ($10,000 small claims limit), and — if the facts support it — RCW
          19.86 (Consumer Protection Act, treble damages up to $25,000, plus
          attorney fees).
        </li>
        <li>
          <strong>Make a settlement offer with a clear deadline:</strong>
          Offer to accept the principal (optionally plus accrued interest) in
          full settlement within 21 days. This serves dual purpose: it
          demonstrates reasonableness to any future court, and it triggers
          the offer-of-settlement machinery under CR 68 / RCW 4.84.250.
        </li>
        <li>
          <strong>State consequences of non-payment:</strong> Clearly state
          that if payment is not received by the deadline, you will file suit
          in District Court (or Superior Court if over $10,000), seek the
          full amount with 12% prejudgment interest, treble damages under the
          CPA (if applicable), and attorney fees and costs.
        </li>
        <li>
          <strong>Send it properly:</strong> Certified mail, return receipt
          requested, to the client's registered business address or last
          known address. Send a copy by regular mail and email. The certified
          mail receipt is your proof of delivery — keep it forever.
        </li>
      </ol>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-6">
        <strong>✅ The Washington Advantage:</strong> Most states force you
        to choose between small claims (fast, cheap, but capped low) and
        regular court (unlimited damages, but expensive with lawyers).
        Washington's framework is different: the $10,000 small claims limit
        covers nearly all freelance disputes, the 12% interest rate
        compounds aggressively (adding ~$100/month to a $10K claim), and the
        CPA's treble damages + attorney fee provisions mean that even a
        claim above the small claims limit becomes economically rational to
        pursue with a lawyer — because the client pays your legal fees if
        you win. For a $9,200 invoice where the client lied to induce the
        work, the arithmetic is devastating: $9,200 in principal + $1,100
        in prejudgment interest at 12% + treble damages under the CPA
        (potentially $27,600, capped at $25,000) = a liability exposure of
        over $26,000. A demand letter that lays out this math, cites the
        statutes, and offers to settle for the original invoice amount within
        21 days turns "please pay me" into "pay me now or face triple damages
        plus my legal fees." Most businesses, when they see that arithmetic
        in writing from a Washington-licensed attorney or a well-prepared
        freelancer, choose to pay.
      </div>

      <p>
        The Washington Consumer Protection Act also doesn't require you to
        prove the client intended to deceive — it's a strict liability
        statute in many respects. If the act was deceptive in effect, even
        if the client didn't mean it to be, the CPA can apply. This is a
        lower bar than many state consumer fraud statutes, which require
        proof of intentional or knowing deception. For freelancers, this
        means a pattern of broken promises and fabricated excuses — even if
        the client genuinely "meant" to pay — can still trigger treble
        damages, because the cumulative effect of the conduct was deceptive.
      </p>

      <p>
        <strong>Bottom line:</strong> Washington freelancers have access to
        the highest statutory interest rate in the nation (12%), a $10,000
        small claims limit that covers nearly every freelance dispute, and
        a Consumer Protection Act that triples damages without requiring a
        pre-suit notice. No other state combines these three features in the
        same way. A Washington demand letter that correctly cites RCW 19.86,
        RCW 19.52.020, and RCW 4.56.110 — and supports a CPA claim with
        specific, documented deceptive acts — doesn't just ask for payment.
        It lays out the math of what happens if the client forces a lawsuit.
        And in Washington, that math is staggering: 12% interest accumulating
        monthly, treble damages up to $25,000, and the client paying your
        attorney fees on top. Send the certified mail to their registered
        business address. Start the 21-day clock. And watch what happens when
        the recipient's general counsel — or the business owner sitting in a
        Pioneer Square office — reads the phrase "RCW 19.86.090: treble
        damages, plus attorney fees and costs."
      </p>
    </ArticleLayout>
  );
}
