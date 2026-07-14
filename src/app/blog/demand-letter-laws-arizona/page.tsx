import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-arizona")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-arizona">
      <p>
        You're a freelance graphic designer in Scottsdale, and a Phoenix-based
        real estate developer owes you $3,800 for a complete rebranding package
        you delivered six weeks ago. They approved every comp, launched the new
        brand across their entire portfolio of properties, and now your emails
        go to a black hole labeled "we'll cut a check next week." It's time
        for a demand letter — and if you're in Arizona, you operate under a
        framework that's uniquely favorable to freelancers: a modest $3,500
        small claims limit (A.R.S. § 22-503), a generous 6-year statute of
        limitations for written contracts (A.R.S. § 12-548), and the Arizona
        Consumer Fraud Act (A.R.S. § 44-1521) that can award treble damages
        plus attorney fees for deceptive business practices. Arizona's legal
        ecosystem combines the West's pro-business tilt with specific
        consumer-protection teeth — and the demand letter that cites the right
        statutes carries disproportionate weight. Here's exactly how Arizona
        freelancers write a demand letter that uses every tool the Grand
        Canyon State provides.
      </p>

      <h2>Arizona Small Claims Court: $3,500 Limit in Justice Court</h2>

      <p>
        Arizona's small claims system operates through Justice Courts under
        A.R.S. § 22-503. The jurisdictional limit is $3,500 — one of the lower
        caps in the country but adequate for the majority of freelance payment
        disputes. Here's what every Arizona freelancer needs to know:
      </p>

      <ul>
        <li>
          <strong>$3,500 cap:</strong> Claims up to $3,500 are heard in small
          claims division of Justice Courts. For a $3,800 invoice, you must
          either waive the excess $300 or file in regular civil division
          (higher filing fee, formal rules of evidence apply).
        </li>
        <li>
          <strong>No attorneys allowed in small claims:</strong> Arizona small
          claims court prohibits attorney representation at trial (A.R.S.
          § 22-512). This levels the playing field — both you and the
          non-paying client appear pro se, and the proceedings are informal.
        </li>
        <li>
          <strong>Filing fees are low:</strong> Approximately $35–$49
          depending on the county (Maricopa County: $39 for claims up to
          $3,500). Fee is recoverable if you win.
        </li>
        <li>
          <strong>Venue:</strong> File in the Justice Court precinct where the
          defendant resides or does business. For a Phoenix-based client,
          that's one of the Maricopa County Justice Courts.
        </li>
        <li>
          <strong>Appeal:</strong> The small claims judgment is final and
          binding — no appeal to Superior Court. This is a double-edged sword:
          if you win, the client can't drag it out on appeal, but if you lose,
          neither can you.
        </li>
      </ul>

      <div className="bg-accent-soft border border-border rounded-lg p-6 my-8">
        <h3 className="text-lg font-bold mb-2">The $3,500 Strategic Decision</h3>
        <p>
          If your claim exceeds $3,500 (even by $1), you face a choice: (a)
          waive the excess and stay in small claims with its lower fees, no
          attorneys, and faster resolution, or (b) file in regular civil
          division with formal rules, higher fees, and the possibility of
          recovering the full amount plus attorney fees under the Arizona
          Consumer Fraud Act. For a $3,800 invoice, the math strongly favors
          waiving the $300 — the time, cost, and complexity of civil division
          rarely justify an additional $300 recovery. But for a $12,000
          invoice, civil division with a well-crafted ACFA demand letter
          becomes the right play. Your demand letter should reference both
          options to signal you've done the math.
        </p>
      </div>

      <h2>Statute of Limitations: 6 Years for Written Contracts</h2>

      <p>
        Arizona gives freelancers one of the longest statute-of-limitations
        windows in the country under A.R.S. § 12-548: <strong>6 years for
        written contracts</strong>. This applies to any agreement "founded
        upon a contract in writing executed within this state." Crucially:
      </p>

      <ul>
        <li>
          <strong>What counts as "written"?</strong> Emails, signed SOWs,
          accepted proposals, and even a detailed invoice acknowledged by the
          client can constitute a written contract. Arizona courts interpret
          this broadly — a chain of emails that shows the agreed scope, rate,
          and deliverables is sufficient.
        </li>
        <li>
          <strong>Oral contracts get 3 years</strong> (A.R.S. § 12-543).
          Always get the scope in writing, even if it's just a confirming
          email.
        </li>
        <li>
          <strong>Open accounts get 3 years</strong> (A.R.S. § 12-543).
          Freelancers with multiple invoices on an ongoing relationship may
          fall under the open-account rule if there's no single governing
          contract — another reason to always have a written agreement.
        </li>
        <li>
          <strong>Accrual:</strong> The clock starts when the cause of action
          accrues — typically the date the invoice became past due under the
          contract terms (e.g., net-30 from the invoice date). If the contract
          is silent, the default is payment due upon completion.
        </li>
      </ul>

      <p>
        The 6-year window means even an invoice from 2022 or 2023 is still
        actionable in 2026. Your demand letter should cite A.R.S. § 12-548 to
        remind the client that walking away isn't a strategy — you can pursue
        this for years, and the interest keeps accruing.
      </p>

      <h2>Arizona Consumer Fraud Act (ACFA): Treble Damages & Attorney Fees</h2>

      <p>
        This is Arizona's most powerful tool for freelancers. The Arizona
        Consumer Fraud Act (A.R.S. § 44-1521 et seq.) prohibits "any
        deception, deceptive or unfair act or practice, fraud, false pretense,
        false promise, misrepresentation, or concealment, suppression or
        omission of any material fact" in connection with the sale of goods or
        services. Here's why it matters for a demand letter:
      </p>

      <ul>
        <li>
          <strong>Treble damages:</strong> A successful ACFA claim can result
          in treble (triple) the actual damages. A $3,800 unpaid invoice
          becomes $11,400 in potential liability for the client.
        </li>
        <li>
          <strong>Attorney fees:</strong> A.R.S. § 44-1534 mandates that the
          prevailing party in an ACFA action recovers reasonable attorney fees
          and costs. This flips the economics — the client can't afford to
          lose, because losing means paying your lawyer too.
        </li>
        <li>
          <strong>What triggers it:</strong> A client who ordered work, knew
          they lacked the funds (or never intended to pay), and strung you
          along with false promises of payment has committed a deceptive act
          under the ACFA. The key is "knowing misrepresentation about the
          intent or ability to pay."
        </li>
        <li>
          <strong>Pre-suit notice NOT required:</strong> Unlike some states'
          consumer protection acts, Arizona's ACFA does not require a formal
          pre-suit demand letter. However, sending one anyway (a) creates a
          paper trail proving the client knew about the ACFA exposure and chose
          not to resolve it, and (b) often triggers settlement without
          litigation.
        </li>
      </ul>

      <div className="bg-warning-soft border border-border rounded-lg p-6 my-8">
        <h3 className="text-lg font-bold mb-2">⚡ The ACFA Demand Letter Formula</h3>
        <p className="mb-3">
          An effective Arizona Consumer Fraud Act demand letter includes
          specific language the client's own attorney will recognize as a
          credible threat:
        </p>
        <ol className="space-y-2">
          <li>
            <strong>State the facts establishing deception:</strong> "On
            [date], you represented that payment would be made within [X] days.
            On [date], you reiterated that 'the check is in the mail.' Those
            representations were false when made and constitute deceptive acts
            under A.R.S. § 44-1522."
          </li>
          <li>
            <strong>Calculate the treble damages:</strong> "Actual damages:
            $3,800. Under A.R.S. § 44-1533, you face potential liability of
            $11,400 in trebled damages, plus reasonable attorney fees and costs
            under A.R.S. § 44-1534."
          </li>
          <li>
            <strong>Offer a settlement window:</strong> "This letter serves as
            a demand for payment of the outstanding $3,800 within 14 calendar
            days. Payment within this window resolves the matter without
            litigation and avoids treble-damages exposure. Non-payment will
            result in a superior court filing under the Arizona Consumer Fraud
            Act, where we will seek the full $11,400 plus fees."
          </li>
        </ol>
        <p className="text-sm mt-3" style={{ color: 'var(--color-muted)' }}>
          Disclaimer: This is illustrative, not legal advice. Consult an
          Arizona-licensed attorney before asserting ACFA claims — the
          threshold for what constitutes a "deceptive act" is fact-specific.
        </p>
      </div>

      <h2>Statutory Interest: 6.5% on Judgments (2026 Rate)</h2>

      <p>
        Arizona sets its judgment interest rate annually under A.R.S.
        § 44-1201, tied to the federal prime rate plus 1%. As of 2026, the
        rate is 6.5% per annum. However, Arizona does not allow pre-judgment
        interest as a matter of right on unliquidated contract claims — you
        must either (a) have a contractual provision for interest, or (b)
        assert the claim under the ACFA, where pre-judgment interest is
        available at the court's discretion on trebled damages. Your demand
        letter should reference the judgment-interest rate to signal that delay
        costs the client money.
      </p>

      <h2>Putting It All Together: The Arizona Demand Letter</h2>

      <p>
        An Arizona demand letter that commands attention does six things. Here's
        the structure:
      </p>

      <ol className="space-y-3">
        <li>
          <strong>Header:</strong> Your name/LLC, the client's name/entity,
          date, subject line ("Demand for Payment — Outstanding Invoice #[X] —
          Notice of Potential ACFA Claim").
        </li>
        <li>
          <strong>Factual Background:</strong> A clear, numbered timeline of
          the engagement, deliverables, invoice date, and every representation
          the client made about payment (especially false ones). This builds
          the ACFA foundation.
        </li>
        <li>
          <strong>Legal Framework:</strong> Cite A.R.S. § 12-548 (6-year
          statute of limitations), A.R.S. § 44-1521 (Arizona Consumer Fraud
          Act), A.R.S. § 44-1533 (treble damages), A.R.S. § 44-1534 (attorney
          fees), and A.R.S. § 44-1201 (judgment interest at 6.5%).
        </li>
        <li>
          <strong>Damages Calculation:</strong> Show the math — actual damages
          ($X), potential trebled amount ($3X), plus estimated attorney fees
          ($5,000–$15,000 for a superior court action). The total exposure
          figure should make a businessperson pause.
        </li>
        <li>
          <strong>Settlement Offer:</strong> A clear 14-day window to pay the
          actual amount owed and avoid litigation. This demonstrates
          reasonableness to a future judge.
        </li>
        <li>
          <strong>Closing:</strong> Your signature, date, and method of
          delivery (certified mail, return receipt requested, AND email —
          dual delivery prevents "I never got it" claims).
        </li>
      </ol>

      <h2>Arizona-Specific Pitfalls to Avoid</h2>

      <ul className="space-y-2">
        <li>
          <strong>Don't threaten criminal prosecution:</strong> Arizona
          treats threats of criminal prosecution to gain advantage in a civil
          matter as potential extortion under A.R.S. § 13-1804. Stick to civil
          remedies.
        </li>
        <li>
          <strong>Don't inflate the claim to hit $3,500:</strong> Adding
          fictional damages to reach small claims jurisdiction is fraud. The
          demand letter must reflect actual, documented losses only.
        </li>
        <li>
          <strong>Don't ignore the client's entity structure:</strong> If
          the client is an LLC, confirm whether you contracted with the LLC or
          the individual. Arizona LLCs provide liability protection — suing
          the individual requires piercing the corporate veil (a high bar).
        </li>
        <li>
          <strong>Don't forget the certified-mail requirement for ACFA
          service:</strong> While Arizona doesn't require a pre-suit ACFA
          demand letter, if you later file suit, service of process must comply
          with Arizona Rules of Civil Procedure. Start the paper trail now with
          certified mail.
        </li>
      </ul>

      <h2>What Happens After You Send the Arizona Demand Letter</h2>

      <p>
        Three outcomes, roughly in order of likelihood:
      </p>

      <ol className="space-y-3">
        <li>
          <strong>Payment (most common):</strong> A well-crafted ACFA demand
          letter quantifying treble damages plus attorney fees usually produces
          payment within the 14-day window. The client's own attorney or
          accountant will advise settlement — the math is too unfavorable to
          fight.
        </li>
        <li>
          <strong>Negotiation:</strong> The client offers partial payment or a
          payment plan. Evaluate against the cost of litigation: if they offer
          80% within 30 days, consider accepting (with a signed settlement
          agreement and release). The goal is getting paid, not winning a
          lawsuit.
        </li>
        <li>
          <strong>Silence / refusal:</strong> This is when you file. If the
          claim is ≤ $3,500, file in Maricopa County Justice Court (or the
          defendant's county). If larger, file in Superior Court. Arizona
          Superior Court has a mandatory arbitration program for claims under
          $50,000 (Rule 72, Arizona Rules of Civil Procedure) — it's faster
          and cheaper than a full trial, but you can appeal the arbitration
          award (unlike small claims).
        </li>
      </ol>

      <div className="bg-surface border border-border rounded-lg p-6 my-8">
        <h3 className="text-lg font-bold mb-3">Arizona Demand Letter Quick Reference</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Small Claims Limit:</strong> $3,500 (A.R.S. § 22-503)
          </div>
          <div>
            <strong>Statute of Limitations:</strong> 6 years written, 3 years oral (A.R.S. § 12-548/543)
          </div>
          <div>
            <strong>Judgment Interest:</strong> 6.5% (A.R.S. § 44-1201, 2026 rate)
          </div>
          <div>
            <strong>Consumer Fraud Act:</strong> Treble damages + attorney fees (A.R.S. § 44-1521 et seq.)
          </div>
          <div>
            <strong>Attorney Fees:</strong> Mandatory for prevailing ACFA plaintiff (A.R.S. § 44-1534)
          </div>
          <div>
            <strong>Filing Fee:</strong> ~$35–$49 (varies by county)
          </div>
          <div>
            <strong>Venue:</strong> Justice Court where defendant resides/does business
          </div>
          <div>
            <strong>Key Statute:</strong> A.R.S. § 44-1522 (deceptive acts)
          </div>
        </div>
      </div>

      <p>
        Arizona freelancers have more legal leverage than most realize. The
        combination of a 6-year limitations window and the ACFA's treble
        damages makes Arizona one of the more favorable states for recovering
        unpaid freelance invoices — provided you document the client's false
        payment promises and send a demand letter that spells out the math. A
        client facing a potential $11,400 judgment (plus $10,000 in your
        attorney fees) on a $3,800 invoice is a client who suddenly finds the
        accounts-payable checkbook. Send the letter, wait 14 days, and then
        decide whether you're filing in Maricopa County Justice Court or
        collecting your money.
      </p>
    </ArticleLayout>
  );
}
