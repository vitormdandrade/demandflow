import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-maine")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-maine">
      <p>
        You're a freelance web developer in Portland, and a lobster export
        company in Bar Harbor owes you $5,400 for an e-commerce site that's
        been processing orders for three months. Your code is powering their
        entire direct-to-consumer business, your final invoice is 90 days
        past due, and your follow-ups have been met with "we'll get to it
        next week" since April. Maine gives freelancers a $6,000 small claims
        limit (14 M.R.S.A. § 5252), a 6% prejudgment interest rate plus
        post-judgment interest tied to the 1-year Treasury bill rate plus 6%
        (14 M.R.S.A. § 1602-B), a 6-year statute of limitations for written
        contracts (14 M.R.S.A. § 752), and the Maine Unfair Trade Practices
        Act (5 M.R.S.A. § 207) that can triple your damages and award
        attorney fees. From Portland's booming creative and tech scene to
        the seasonal tourism economy in Bar Harbor, Kennebunkport, and
        Camden, Maine's freelance workforce punches above its weight — and
        a demand letter that cites the Maine UTPA gets attention fast.
        Here's exactly how Maine freelancers write a demand letter that
        leverages every tool the Pine Tree State provides.
      </p>

      <h2>Maine Small Claims Court: $6,000 Limit</h2>

      <p>
        Maine's small claims process operates through the District Court
        under 14 M.R.S.A. § 5252 with a jurisdictional limit of{" "}
        <strong>$6,000</strong>. For most freelance disputes — from a
        $2,000 branding project to a $5,500 web development contract —
        this limit comfortably covers the typical unpaid invoice. Here's
        what every Maine freelancer needs to know:
      </p>

      <ul>
        <li>
          <strong>Filing fee:</strong> approximately $50–$75 depending on
          the county and claim amount
        </li>
        <li>
          <strong>No attorneys required:</strong> Maine's small claims
          procedure (M.R. Civ. P. 80L) is designed for self-represented
          litigants, with relaxed rules of evidence
        </li>
        <li>
          <strong>Hearing timeline:</strong> typically 45–90 days depending
          on the court's docket — Maine District Courts in Portland,
          Bangor, and Augusta are generally accessible
        </li>
        <li>
          <strong>Statement of claim:</strong> a simple, plain-language
          form available at any District Court clerk's office or online
          through the Maine Judicial Branch website
        </li>
        <li>
          <strong>Mediation requirement:</strong> Maine courts often require
          or strongly encourage mediation before a small claims hearing —
          which means a demand letter that leaves the door open to
          settlement positions you favorably with the court
        </li>
      </ul>

      <h2>Maine Statutory Interest: 6% Prejudgment + Post-Judgment Rate</h2>

      <p>
        Maine imposes <strong>6%</strong> annual prejudgment interest on
        liquidated contract claims under 14 M.R.S.A. § 1602-B. This is a
        moderate rate — not the 12% of Massachusetts or Vermont, but still
        meaningful. For <strong>post-judgment</strong> interest, Maine uses
        a floating rate: the 1-year constant maturity Treasury bill rate
        plus 6%, calculated annually. In the current rate environment, this
        effective post-judgment rate runs 10–12% — substantially higher
        than the prejudgment rate and a strong incentive for clients to
        settle before a judgment is entered.
      </p>

      <p>
        For a freelancer owed $5,400 that's been outstanding for 12 months,
        the prejudgment interest calculation at 6% would add approximately
        $324 to the demand. Including this specific calculation with the
        statutory citation in the demand letter puts the escalating cost
        of non-payment in clear financial terms. Importantly, Maine allows
        prejudgment interest to run from the date the debt became due —
        so every additional month of delay adds 0.5% to the total.
      </p>

      <h2>The Maine Unfair Trade Practices Act: 5 M.R.S.A. § 207</h2>

      <p>
        The Maine Unfair Trade Practices Act (Maine UTPA), codified at
        5 M.R.S.A. § 205-A through § 214, is Maine's primary consumer
        protection statute. Section 207 declares unlawful any "unfair or
        deceptive acts or practices in the conduct of any trade or
        commerce."
      </p>

      <p>
        Under 5 M.R.S.A. § 213, a prevailing plaintiff can recover:
      </p>

      <ul>
        <li>
          <strong>Actual damages</strong> — the amount you're owed, plus
          any consequential damages
        </li>
        <li>
          <strong>Treble damages</strong> — the court may award up to three
          times the actual damages upon a finding of a willful or knowing
          violation
        </li>
        <li>
          <strong>Reasonable attorney fees and costs</strong> — 5 M.R.S.A.
          § 213(2) authorizes fee-shifting for prevailing plaintiffs
        </li>
      </ul>

      <p>
        The Maine UTPA is interpreted broadly and can apply to business
        disputes where a client engaged in deceptive conduct. Maine courts
        have held that the UTPA applies to transactions "in commerce" and
        that freelancer-client relationships involving systematic
        non-payment or deceptive practices regarding payment terms can
        fall within its scope.
      </p>

      <p>
        A critical note for freelancers: the Maine UTPA has a{" "}
        <strong>mandatory 30-day pre-suit demand letter requirement</strong>{" "}
        under 5 M.R.S.A. § 213(1-A). Before you can file a UTPA claim in
        court, you must send a written demand for relief that identifies
        the claimant, describes the unfair or deceptive practice with
        reasonable particularity, and states the amount of damages claimed.
        This makes the demand letter not just strategic but{" "}
        <strong>legally mandatory</strong> for any UTPA claim — a point
        every Maine freelancer should understand and cite in their letter.
      </p>

      <h2>Statute of Limitations: 6 Years for Written Contracts (14 M.R.S.A. § 752)</h2>

      <p>
        Maine provides a <strong>6-year</strong> statute of limitations
        for written contracts under 14 M.R.S.A. § 752. This is the standard
        New England period and gives freelancers a reasonable window to
        pursue unpaid invoices without rushing into litigation prematurely.
      </p>

      <p>
        For <strong>oral contracts</strong>, the statute of limitations is
        also 6 years under 14 M.R.S.A. § 752. For claims under the Maine
        UTPA, the limitations period is 6 years from the date of the
        violation. The demand letter should reference the 6-year window
        to make clear that the client cannot simply wait out the claim —
        and that if litigation becomes necessary, you have years of runway
        to pursue it.
      </p>

      <h2>What Every Maine Demand Letter Must Include</h2>

      <ol>
        <li>
          <strong>A clear statement of the debt.</strong> Identify the
          specific invoice(s) by number, date, and amount. Attach copies
          of the contract or statement of work. Maine courts expect
          detailed documentation, especially in small claims where the
          judge reviews the file before the hearing.
        </li>
        <li>
          <strong>The UTPA 30-day demand requirement (5 M.R.S.A. § 213(1-A)).</strong>
          Explicitly state that this letter satisfies the Maine UTPA's
          pre-suit demand requirement — identifying the claimant (you),
          describing the deceptive practice (accepting completed work
          without payment), and stating the damages claimed.
        </li>
        <li>
          <strong>The statutory interest calculation.</strong> State the
          6% prejudgment interest rate under 14 M.R.S.A. § 1602-B and
          compute the interest through the deadline date. Note that
          post-judgment interest would exceed 10% at current Treasury
          rates — a significant escalation.
        </li>
        <li>
          <strong>Reference to the Maine UTPA treble damages.</strong>
          Note that if the client's conduct violated 5 M.R.S.A. § 207,
          they face treble damages and mandatory attorney fees under
          5 M.R.S.A. § 213(2).
        </li>
        <li>
          <strong>A payment deadline and a statement of intent.</strong>
          Given the mandatory 30-day UTPA waiting period, set a deadline
          of 14–21 days for payment — shorter than the full 30 days,
          signaling urgency. Name the specific District Court where you'll
          file (typically the county where the defendant resides or does
          business).
        </li>
        <li>
          <strong>Your contact information and an invitation to resolve.</strong>
          Maine's business culture values direct, respectful communication.
          Offer to discuss payment terms or a structured settlement as an
          alternative to litigation — this demonstrates reasonableness to
          both the client and the court.
        </li>
      </ol>

      <h2>Sample Demand Letter Language for Maine</h2>

      <p>
        Here is sample language a Maine freelancer might include in the
        "legal consequences" section of their demand letter. Adapt it to
        your specific situation and consult a Maine attorney for final
        review.
      </p>

      <blockquote>
        <p>
          This letter serves as the written demand for relief required by
          5 M.R.S.A. § 213(1-A) of the Maine Unfair Trade Practices Act.
          Pursuant to that statute, I identify myself as the claimant and
          describe the unfair or deceptive practice as follows: your
          acceptance of the completed [website / design / writing / etc.]
          delivered on [DATE] and your subsequent refusal to pay Invoice
          #[NUMBER] in the amount of $[AMOUNT] despite [NUMBER] requests
          for payment over [TIMEFRAME].
        </p>

        <p>
          Pursuant to 14 M.R.S.A. § 752, my claim for this unpaid debt is
          governed by Maine's 6-year statute of limitations for written
          contracts. Prejudgment interest on this liquidated debt accrues
          at the rate of 6% per annum under 14 M.R.S.A. § 1602-B. As of
          [DATE], the prejudgment interest on the outstanding balance of
          $[AMOUNT] totals $[INTEREST].
        </p>

        <p>
          Furthermore, your conduct may constitute an unfair or deceptive
          act or practice under 5 M.R.S.A. § 207 of the Maine Unfair
          Trade Practices Act. Should litigation become necessary and a
          court determine that your conduct violated the Maine UTPA, you
          may be liable for treble damages — up to three times the amount
          owed — plus my reasonable attorney fees and court costs under
          5 M.R.S.A. § 213(2).
        </p>

        <p>
          If I do not receive payment in full by [DEADLINE DATE], I will
          file this matter in [Cumberland / Hancock / York] County District
          Court, Small Claims Division, and pursue all available remedies
          under Maine law, including prejudgment interest, treble damages
          under the Maine UTPA, and post-judgment interest at the
          1-year Treasury rate plus 6% as provided by 14 M.R.S.A. § 1602-B.
        </p>
      </blockquote>

      <h2>Practical Considerations for Maine Freelancers</h2>

      <ul>
        <li>
          <strong>The UTPA pre-suit demand letter is mandatory — don't skip it.</strong>
          Unlike states where the demand letter is merely strategic, Maine
          law requires it for any UTPA claim. If you file a UTPA claim
          without first sending a compliant demand letter, your UTPA claim
          may be dismissed. This is the single most important rule for
          Maine freelancers to understand.
        </li>
        <li>
          <strong>Portland's freelance economy is concentrated and
          interconnected.</strong> Maine's largest city has a thriving
          creative, tech, and food-service freelance community. A demand
          letter sent to one Portland client may be discussed among the
          owner's network within days. The reputational leverage is real
          — use it carefully. The goal is payment, not scorched earth.
        </li>
        <li>
          <strong>Seasonal businesses require careful timing.</strong>
          Maine's tourism and lobster industries are intensely seasonal.
          A demand letter to a Bar Harbor restaurant owner in January
          (off-season, tight cash flow) may be less effective than one
          sent in October (post-season, when revenue is highest). Consider
          the client's seasonal cash flow cycle when timing your demand.
        </li>
        <li>
          <strong>Venue is manageable in a geographically large state.</strong>
          Maine's District Courts are located in 13 divisions across the
          state — from York in the south to Caribou in Aroostook County.
          While the state is large geographically, the District Court
          system ensures reasonable access. File in the division where the
          defendant resides or does business, or where the contract was
          to be performed.
        </li>
        <li>
          <strong>Certified mail is essential.</strong> Send the demand
          letter via USPS Certified Mail with Return Receipt Requested.
          The green card proves delivery and is admissible in Maine
          District Court as evidence that the debtor received the UTPA
          pre-suit demand — satisfying the 30-day requirement under
          5 M.R.S.A. § 213(1-A).
        </li>
      </ul>

      <h2>What Happens After You Send the Letter</h2>

      <p>
        Most clients pay within 7–14 days of receiving a well-written
        demand letter that cites the Maine UTPA's mandatory pre-suit
        requirement and the escalating financial consequences of
        non-payment. If they don't:
      </p>

      <ul>
        <li>
          <strong>Wait the full 30 days if you intend to bring a UTPA claim.</strong>
          The 5 M.R.S.A. § 213(1-A) requirement is jurisdictional — you
          cannot file before the 30-day window closes. Use this period to
          continue negotiating in good faith and document every
          communication.
        </li>
        <li>
          <strong>For claims up to $6,000</strong> → File in District Court
          Small Claims Division. No attorneys required. Hearing typically
          within 45–90 days. Maine's small claims procedure (M.R. Civ. P.
          80L) is accessible and designed for self-represented parties.
        </li>
        <li>
          <strong>For claims above $6,000</strong> → File in District Court
          or Superior Court (claims above $25,000 go to Superior Court).
          This is the forum where the UTPA treble damages and fee-shifting
          provisions create maximum settlement leverage.
        </li>
      </ul>

      <p>
        Maine's 6-year statute of limitations gives you ample time to build
        your case. But the mandatory 30-day UTPA pre-suit demand letter
        requirement means the demand letter isn't optional — it's the
        gateway to Maine's most powerful consumer protection remedy. The
        Pine Tree State's combination of a practical small claims system,
        a statutory interest rate that escalates dramatically after
        judgment, and a UTPA with treble damages and mandatory fee-shifting
        gives Maine freelancers strong leverage to get paid without setting
        foot in a courtroom.
      </p>
    </ArticleLayout>
  );
}
