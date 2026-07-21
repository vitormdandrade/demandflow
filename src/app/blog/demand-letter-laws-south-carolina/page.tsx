import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-south-carolina")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-south-carolina">
      <p>
        You're a freelance web developer in Charleston, and a Columbia-based
        marketing agency owes you $6,200 for a complete e-commerce site
        redesign that's been live for four months. They've stopped
        responding to your emails, and your invoices are piling up. South
        Carolina gives freelancers several key tools: a $7,500 small claims
        limit in Magistrate's Court (S.C. Code Ann. § 22-3-10), an 8.75%
        statutory interest rate on judgments (S.C. Code Ann. § 34-31-20), a
        3-year statute of limitations on written contracts (S.C. Code Ann.
        § 15-3-530), and the South Carolina Unfair Trade Practices Act —
        a statute that can triple your damages plus attorney fees under
        S.C. Code Ann. § 39-5-140. Here's exactly how South Carolina
        freelancers write a demand letter that leverages every tool the
        Palmetto State provides.
      </p>

      <h2>South Carolina Small Claims Court: $7,500 Limit in Magistrate's Court</h2>

      <p>
        South Carolina's small claims process operates within the Magistrate's
        Court under S.C. Code Ann. § 22-3-10. The jurisdictional limit is{" "}
        <strong>$7,500</strong> — placing South Carolina in the upper tier
        alongside states like Michigan, Massachusetts, and Florida. Claims
        above $7,500 must be filed in the Court of Common Pleas, where
        formal rules of civil procedure apply and legal representation
        becomes significantly more important.
      </p>

      <p>
        For freelancers in Charleston, Columbia, Greenville, or Myrtle Beach,
        this means claims up to $7,500 can use the streamlined Magistrate's
        Court process — no attorneys required, relaxed rules of evidence, and
        typically a hearing date within 30–60 days. Filing fees are modest:
        approximately $80 for claims up to $7,500, plus a service fee of
        about $10 per defendant. South Carolina's Magistrate's Courts are
        designed to be accessible to self-represented litigants, and the
        judges are accustomed to handling contract disputes between
        businesses and contractors.
      </p>

      <p>
        For our Charleston developer owed $6,200 — the small claims route is
        available and practical. A demand letter that explicitly names the
        appropriate Magistrate's Court signals that litigation is imminent
        and practical — not an empty threat.
      </p>

      <p>
        One South Carolina-specific consideration: the state has 46 counties,
        each with its own Magistrate's Court. The correct venue is typically
        the county where the defendant resides or does business. For a
        Charleston freelancer suing a Columbia agency, the case should be
        filed in Richland County Magistrate's Court. This specificity in the
        demand letter — naming the exact court — adds significant weight.
      </p>

      <h2>South Carolina Statutory Interest: 8.75% Under S.C. Code Ann. § 34-31-20</h2>

      <p>
        South Carolina imposes <strong>8.75%</strong> annual interest on
        judgments and on contractual obligations where no rate is specified,
        under S.C. Code Ann. § 34-31-20. This rate was revised in 2024 and
        applies to judgments entered after the revision date. For judgments
        entered before 2024, the previous rate of 7.5% (S.C. Code Ann.
        § 34-31-20(B)) applies.
      </p>

      <p>
        Prejudgment interest on liquidated claims — where the amount owed is
        calculable with certainty, like an agreed-upon project fee — is
        available under South Carolina law. The South Carolina Supreme Court
        has held in <em>Dixie Bell, Inc. v. Redd</em> that prejudgment
        interest is appropriate when the measure of recovery is fixed by
        conditions existing at the time the claim arose.
      </p>

      <p>
        For a freelancer owed $6,200 that's been outstanding for 12 months,
        the prejudgment interest calculation at 8.75% would add approximately
        $542.50 to the demand — nearly 9% of the principal. Including this
        specific calculation with the statutory citation in the demand letter
        puts the escalating cost of non-payment in concrete terms.
      </p>

      <h2>The South Carolina Unfair Trade Practices Act: S.C. Code Ann. § 39-5-10 et seq.</h2>

      <p>
        The South Carolina Unfair Trade Practices Act (SCUTPA), codified at
        S.C. Code Ann. § 39-5-10 through § 39-5-560, prohibits "unfair or
        deceptive acts or practices in the conduct of any trade or commerce."
        Section 39-5-20 defines unlawful acts broadly, and South Carolina
        courts have interpreted "trade or commerce" to include a wide range
        of business transactions.
      </p>

      <p>
        Under S.C. Code Ann. § 39-5-140(a), a prevailing plaintiff may
        recover:
      </p>

      <ul>
        <li>
          <strong>Actual damages</strong> — the amount you're owed, plus any
          consequential damages
        </li>
        <li>
          <strong>Treble damages</strong> — the court must award up to three
          times the actual damages if it finds the violation was willful or
          knowing
        </li>
        <li>
          <strong>Reasonable attorney fees and costs</strong> — S.C. Code
          Ann. § 39-5-140(a) mandates fee-shifting for prevailing plaintiffs
        </li>
      </ul>

      <p>
        The SCUTPA is a powerful tool for freelancers. A client who accepts
        completed work, makes no payment, and goes silent despite repeated
        demands may be engaged in an unfair or deceptive act or practice. The
        South Carolina Court of Appeals has recognized that the SCUTPA
        applies to ordinary commercial transactions, not just consumer-facing
        conduct.
      </p>

      <p>
        For the demand letter, the SCUTPA is most useful as a treble-damages
        multiplier and fee-shifting tool. The letter should reference S.C.
        Code Ann. § 39-5-20 and § 39-5-140(a) and note that if the client's
        conduct is found to violate the SCUTPA, they face not only the
        principal and 8.75% interest but also up to three times the amount
        owed plus reasonable attorney fees — turning a $6,200 invoice into a
        potential $19,000+ exposure including fees.
      </p>

      <h2>Statute of Limitations: 3 Years for Written Contracts (S.C. Code Ann. § 15-3-530)</h2>

      <p>
        South Carolina provides a <strong>3-year</strong> statute of
        limitations for written contracts under S.C. Code Ann. § 15-3-530.
        This is notably shorter than the 4–6 year windows common in many
        states and is one of the tightest deadlines in the country. South
        Carolina freelancers must act promptly on unpaid invoices — waiting
        too long can permanently bar your claim.
      </p>

      <p>
        For <strong>oral contracts</strong>, the same 3-year statute of
        limitations applies under S.C. Code Ann. § 15-3-530(1), which covers
        "an action upon a contract, obligation, or liability, express or
        implied." Unlike states that distinguish between written and oral
        contracts with different limitation periods, South Carolina applies
        the same 3-year window to both.
      </p>

      <p>
        Practically, 3 years is enough time to exhaust informal collection
        efforts and send a demand letter, but it's not generous. The demand
        letter should reference the 3-year window to make clear that the
        clock is ticking. For any invoice approaching the 2-year mark, a
        demand letter should be sent immediately — and if the deadline is
        imminent, filing suit to toll the statute may be necessary.
      </p>

      <h2>What Every South Carolina Demand Letter Must Include</h2>

      <ol>
        <li>
          <strong>A clear statement of the debt.</strong> Identify the
          specific invoice(s) by number, date, and amount. Attach copies of
          the contract or statement of work. South Carolina courts value
          specificity and thorough documentation.
        </li>
        <li>
          <strong>A payment deadline.</strong> South Carolina does not impose
          a statutory waiting period before filing suit. A 14-day deadline
          is standard and reasonable — long enough for a meaningful response
          without appearing weak.
        </li>
        <li>
          <strong>The statutory interest calculation.</strong> State the
          8.75% rate under S.C. Code Ann. § 34-31-20 and compute the
          prejudgment interest through the deadline date. At 8.75%, every
          month of delay adds approximately 0.73% to the total — make the
          math clear.
        </li>
        <li>
          <strong>Reference to the South Carolina Unfair Trade Practices
          Act.</strong> Note that if the client's conduct violated S.C. Code
          Ann. § 39-5-20, they face treble damages and mandatory attorney
          fees under S.C. Code Ann. § 39-5-140(a).
        </li>
        <li>
          <strong>A statement of intent to pursue legal remedies.</strong>
          Name the specific court — Magistrate's Court in the county where
          you'll file. For most freelancers, this will be the county where
          the client resides or does business. Naming the court makes the
          threat concrete.
        </li>
        <li>
          <strong>Your contact information and a request for a written
          response.</strong> Give them a path to resolution — a phone number,
          email, or payment portal. South Carolina's business culture values
          direct, professional communication.
        </li>
      </ol>

      <h2>Sample Demand Letter Language for South Carolina</h2>

      <p>
        Here is sample language a South Carolina freelancer might include in
        the "legal consequences" section of their demand letter. Adapt it to
        your specific situation and consult a South Carolina attorney for
        final review.
      </p>

      <blockquote>
        <p>
          Pursuant to S.C. Code Ann. § 15-3-530, my claim for this unpaid
          debt is governed by South Carolina's 3-year statute of limitations
          for written contracts. Interest on this liquidated debt accrues at
          the rate of 8.75% per annum under S.C. Code Ann. § 34-31-20. As of
          [DATE], the prejudgment interest on the outstanding balance of
          $[AMOUNT] totals $[INTEREST].
        </p>

        <p>
          Furthermore, your acceptance of the completed work followed by a
          refusal to pay after repeated demands may constitute an unfair or
          deceptive act or practice under the South Carolina Unfair Trade
          Practices Act, S.C. Code Ann. § 39-5-20. Should litigation become
          necessary and a court determine that your conduct violated the
          SCUTPA, you may be liable for treble damages — up to three times
          the amount owed — plus my reasonable attorney fees and court costs
          under S.C. Code Ann. § 39-5-140(a).
        </p>

        <p>
          If I do not receive payment in full by [DEADLINE DATE], I will
          file this matter in [Charleston / Richland / Greenville] County
          Magistrate's Court and pursue all available remedies under South
          Carolina law, including treble damages and attorney fees under the
          South Carolina Unfair Trade Practices Act.
        </p>
      </blockquote>

      <h2>Practical Considerations for South Carolina Freelancers</h2>

      <ul>
        <li>
          <strong>South Carolina's 3-year statute of limitations is
          aggressive.</strong> This is one of the shortest contract statutes
          of limitations in the country. Set a calendar reminder at the
          2-year mark for any unpaid invoice — by the time 3 years passes,
          your claim is permanently barred. This urgency is itself a
          persuasive element in the demand letter.
        </li>
        <li>
          <strong>The SCUTPA's treble damages are mandatory, not
          discretionary.</strong> Unlike some state consumer protection
          statutes where treble damages are at the court's discretion, S.C.
          Code Ann. § 39-5-140(a) states that the court{" "}
          <em>shall</em> award three times the actual damages if it finds a
          willful violation. This mandatory language significantly increases
          the settlement leverage of a demand letter.
        </li>
        <li>
          <strong>Venue matters in a geographically diverse state.</strong>
          South Carolina stretches from the Blue Ridge Mountains to the
          Atlantic coast, and a client in Greenville may be a 3-hour drive
          from a freelancer in Charleston. Under South Carolina venue rules,
          a contract action may be brought in the county where the defendant
          resides or does business, or where the contract was to be
          performed. The demand letter should specify the correct Magistrate's
          Court by county name.
        </li>
        <li>
          <strong>Certified mail is essential.</strong> Send the demand
          letter via USPS Certified Mail with Return Receipt Requested. The
          green card proves delivery and is admissible in South Carolina
          courts as evidence that the debtor received notice — a critical
          foundation for any prejudgment interest claim.
        </li>
        <li>
          <strong>South Carolina's business culture values personal
          relationships.</strong> The state's business community,
          particularly in smaller cities like Greenville, Spartanburg, and
          Mount Pleasant, operates heavily on reputation and personal
          connections. A demand letter sent to a local business owner may be
          discussed among their network within days. This reputational
          leverage is real — keep the tone professional and focused on
          resolution rather than confrontation.
        </li>
      </ul>

      <h2>What Happens After You Send the Letter</h2>

      <p>
        Most clients pay within 7–14 days of receiving a well-written demand
        letter that cites South Carolina-specific statutes with their real
        financial consequences. If they don't:
      </p>

      <ul>
        <li>
          <strong>Claims up to $7,500</strong> → File in Magistrate's Court
          in the appropriate county. Filing fee: approximately $80. Service
          fee: approximately $10. No attorneys required. Hearing typically
          within 30–60 days. South Carolina's Magistrate's Courts are
          designed for self-represented litigants, and the judges routinely
          handle contract disputes.
        </li>
        <li>
          <strong>Claims above $7,500</strong> → File in Court of Common
          Pleas. Filing fee: approximately $150. Formal discovery and rules
          of civil procedure apply. Legal representation strongly
          recommended. This is the forum where the SCUTPA fee-shifting and
          mandatory treble damages provisions create the greatest settlement
          leverage.
        </li>
      </ul>

      <p>
        South Carolina's 3-year statute of limitations means freelancers must
        act decisively, but the combination of a practical $7,500 small claims
        limit, an 8.75% statutory interest rate, and a powerful Unfair Trade
        Practices Act with mandatory treble damages gives Palmetto State
        freelancers significant leverage to get paid without litigation —
        provided they don't let the clock run out.
      </p>
    </ArticleLayout>
  );
}
