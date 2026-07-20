import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-wyoming")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-wyoming">
      <p>
        You're a freelance web developer in Cheyenne, and a Jackson Hole
        tourism company owes you $5,200 for a booking platform you built
        for their summer season. The site has been processing reservations
        for four months, your code is powering their entire revenue stream,
        and they've stopped returning your calls. Wyoming gives freelancers
        an unusual combination of tools: a $6,000 small claims limit in
        Circuit Court (Wyo. Stat. § 1-21-201), 7% statutory interest on
        judgments (Wyo. Stat. § 40-14-106(e)), an exceptional 10-year
        statute of limitations for written contracts (Wyo. Stat. § 1-3-105),
        and the Wyoming Consumer Protection Act (Wyo. Stat. § 40-12-101)
        — a statute that, while narrower than some state consumer laws,
        provides meaningful leverage in the right circumstances. Here's
        exactly how Wyoming freelancers write a demand letter that leverages
        every tool the Cowboy State provides.
      </p>

      <h2>Wyoming Small Claims Court: $6,000 Limit in Circuit Court</h2>

      <p>
        Wyoming's small claims process operates within the Circuit Court
        system under Wyo. Stat. § 1-21-201. The jurisdictional limit is
        <strong>$6,000</strong> — placing Wyoming in the middle tier among
        states, above the $2,500–$5,000 range of many Southern and
        Northeastern states but below the $10,000+ limits found in
        Tennessee ($25,000), Minnesota ($15,000), and several others.
      </p>

      <p>
        For freelancers in Cheyenne, Casper, Laramie, or Jackson Hole, this
        means claims up to $6,000 can use the streamlined small claims
        process — no attorneys required, relaxed rules of evidence, and
        typically a hearing date within 45–90 days depending on the court's
        docket. Claims above $6,000 must be filed in District Court, where
        formal rules of civil procedure apply and legal representation
        becomes significantly more important.
      </p>

      <p>
        For our Cheyenne developer owed $5,200 — the small claims route is
        available and highly practical. Wyoming Circuit Courts are generally
        accessible and designed for self-represented litigants. A demand
        letter that explicitly names the Circuit Court in the appropriate
        county signals that litigation is imminent and practical — not an
        empty threat.
      </p>

      <h2>Wyoming Statutory Interest: 7% Under Wyo. Stat. § 40-14-106(e)</h2>

      <p>
        Wyoming imposes <strong>7%</strong> annual interest on judgments
        under Wyo. Stat. § 40-14-106(e). This rate applies from the date of
        judgment forward and continues until the judgment is satisfied.
        While 7% is not the highest in the country — states like
        Massachusetts and Washington allow 12% — it's above the 5–6% range
        common in many states and provides meaningful accrual on overdue
        debts.
      </p>

      <p>
        Prejudgment interest on liquidated claims — where the amount owed
        is calculable with certainty, like an agreed-upon project fee —
        is available under Wyoming common law. Wyoming courts recognize
        that a debtor who withholds a liquidated sum has effectively
        received an interest-free loan, and prejudgment interest compensates
        the creditor for the time value of money. The Wyoming Supreme Court
        addressed this in <em>Rissler & McMurry Co. v. Wyoming Highway
        Department</em>, 672 P.2d 101 (Wyo. 1983), establishing that
        prejudgment interest on liquidated claims is appropriate when the
        debtor had notice of the debt and an opportunity to pay.
      </p>

      <p>
        For a freelancer owed $5,200 that's been outstanding for 14 months,
        the prejudgment interest calculation at 7% would add approximately
        $424 to the demand. Including this specific calculation — with
        the statutory citation — in the demand letter demonstrates command
        of Wyoming law and makes clear that every month of delay increases
        the client's exposure.
      </p>

      <h2>The Wyoming Consumer Protection Act: Wyo. Stat. § 40-12-101</h2>

      <p>
        The Wyoming Consumer Protection Act (WCPA), codified at Wyo. Stat.
        § 40-12-101 through § 40-12-114, prohibits deceptive trade practices
        in consumer transactions. Section 40-12-105 lists specific prohibited
        acts, including representing that goods or services have
        characteristics they do not, and engaging in unconscionable conduct
        in connection with a consumer transaction.
      </p>

      <p>
        Under Wyo. Stat. § 40-12-108, a prevailing plaintiff can recover:
      </p>

      <ul>
        <li>
          <strong>Actual damages</strong> — the amount you're owed
        </li>
        <li>
          <strong>Reasonable attorney fees and costs</strong> — Wyo. Stat.
          § 40-12-108(b) allows recovery of attorney fees for prevailing
          plaintiffs
        </li>
      </ul>

      <p>
        The WCPA is narrower than consumer protection statutes in some other
        states — it does not automatically provide for treble damages.
        However, Wyo. Stat. § 40-12-108(c) allows courts to award
        discretionary additional relief, and Wyoming courts have broad
        equitable authority. A freelancer who can demonstrate that the
        client engaged in deceptive practices — such as misrepresenting
        their intent to pay or falsely claiming dissatisfaction to avoid
        payment — can use the WCPA to recover attorney fees, which
        significantly changes the economics of litigation.
      </p>

      <p>
        For the demand letter, the WCPA is most useful as a fee-shifting
        tool. The letter should reference Wyo. Stat. § 40-12-108 and note
        that if the client's conduct is found to violate the WCPA, they
        will be responsible not only for the principal and interest but
        also for the freelancer's reasonable attorney fees — turning a
        $5,200 claim into a substantially larger exposure.
      </p>

      <h2>Statute of Limitations: 10 Years for Written Contracts (Wyo. Stat. § 1-3-105)</h2>

      <p>
        Wyoming offers one of the longest statutes of limitations in the
        country for written contracts: <strong>10 years</strong> under
        Wyo. Stat. § 1-3-105(a). This places Wyoming alongside states like
        Missouri (10 years) and Louisiana (10 years), exceeded only by
        Kentucky (15 years) and a handful of others.
      </p>

      <p>
        What qualifies as a written contract under Wyoming law? Any written
        instrument signed by the party to be charged that contains the
        essential terms — including formal contracts, signed statements of
        work, and written confirmation emails — satisfies the requirement.
        For freelancers, even a detailed email thread agreeing to scope
        and price, followed by performance, can constitute a written
        contract for limitations purposes.
      </p>

      <p>
        For <strong>oral contracts</strong>, the statute of limitations is
        <strong>8 years</strong> (Wyo. Stat. § 1-3-105). While shorter
        than the written-contract period, 8 years is still more generous
        than most states' written-contract limits. Even a freelancer with
        only an oral agreement has significant time to pursue collection.
      </p>

      <p>
        Practically, the 10-year window means Wyoming freelancers have far
        more time than most to pursue unpaid invoices. But this is not an
        invitation to delay — evidence degrades, businesses dissolve, and
        client memories fade. The demand letter should reference the
        10-year window to make clear that the client cannot simply wait
        out the claim. The message is not "I have 10 years," but rather
        "this debt will follow you for a decade, and the interest compounds
        the entire time."
      </p>

      <h2>What Every Wyoming Demand Letter Must Include</h2>

      <ol>
        <li>
          <strong>A clear statement of the debt.</strong> Identify the
          specific invoice(s) by number, date, and amount. Attach copies
          of the contract or statement of work. Wyoming courts value
          specificity.
        </li>
        <li>
          <strong>A payment deadline.</strong> Wyoming does not impose a
          statutory waiting period before filing suit. A 14-day deadline
          is standard and reasonable — enough time for a response without
          appearing weak.
        </li>
        <li>
          <strong>The statutory interest calculation.</strong> State the
          7% rate under Wyo. Stat. § 40-14-106(e) and compute the
          prejudgment interest through the deadline date.
        </li>
        <li>
          <strong>Reference to the Wyoming Consumer Protection Act.</strong>
          Note that if the client's conduct violated Wyo. Stat. § 40-12-105,
          they face not only the principal and interest but also your
          reasonable attorney fees under Wyo. Stat. § 40-12-108(b).
        </li>
        <li>
          <strong>A statement of intent to pursue legal remedies.</strong>
          Name the specific court — Circuit Court for claims up to $6,000,
          District Court for claims above $6,000. Naming the court in the
          county where you'll file makes the threat concrete.
        </li>
        <li>
          <strong>Your contact information and a request for a written
          response.</strong> Give them a path to resolution — a phone
          number, email, or payment portal.
        </li>
      </ol>

      <h2>Sample Demand Letter Language for Wyoming</h2>

      <p>
        Here is sample language a Wyoming freelancer might include in the
        "legal consequences" section of their demand letter. Adapt it to
        your specific situation and consult a Wyoming attorney for final
        review.
      </p>

      <blockquote>
        <p>
          Pursuant to Wyo. Stat. § 1-3-105(a), my claim for this unpaid
          debt is governed by Wyoming's 10-year statute of limitations for
          written contracts. Interest on this liquidated debt accrues at
          the rate of 7% per annum under Wyo. Stat. § 40-14-106(e). As of
          [DATE], the prejudgment interest on the outstanding balance of
          $[AMOUNT] totals $[INTEREST].
        </p>

        <p>
          Furthermore, your acceptance of the completed work followed by a
          refusal to pay after repeated demands may constitute a deceptive
          trade practice under the Wyoming Consumer Protection Act, Wyo.
          Stat. § 40-12-105. Should litigation become necessary and a court
          determine that your conduct violated the WCPA, you may be liable
          for my reasonable attorney fees and court costs under Wyo. Stat.
          § 40-12-108(b), in addition to the principal and accrued
          interest.
        </p>

        <p>
          If I do not receive payment in full by [DEADLINE DATE], I will
          file this matter in [Laramie County / Natrona County / Teton
          County] Circuit Court and pursue all available remedies under
          Wyoming law.
        </p>
      </blockquote>

      <h2>Practical Considerations for Wyoming Freelancers</h2>

      <ul>
        <li>
          <strong>Venue matters in a geographically vast state.</strong>
          Wyoming is the least populous state but the 10th largest by land
          area. Under Wyoming law, a contract action may be brought in the
          county where the defendant resides or does business. For a
          Cheyenne freelancer suing a Jackson Hole client, the 400-mile
          distance between those cities raises practical challenges. You
          may need to file in Teton County if that's where the client
          operates — factor travel costs into your claim.
        </li>
        <li>
          <strong>Circuit Court judges handle small claims directly.</strong>
          In Wyoming, Circuit Court judges — not magistrates or
          commissioners — preside over small claims cases. This means your
          case gets attention from an elected judge, which can expedite
          resolution.
        </li>
        <li>
          <strong>Wyoming's small claims process is genuinely accessible.</strong>
          The filing fee is modest (typically $25–50), the forms are
          available online through the Wyoming Judicial Branch website, and
          Circuit Court clerks are generally helpful to self-represented
          litigants. For claims under $6,000, Wyoming's system is one of
          the more freelancer-friendly in the country.
        </li>
        <li>
          <strong>Certified mail is essential.</strong> Send the demand
          letter via USPS Certified Mail with Return Receipt Requested.
          The green card proves delivery and is admissible in Wyoming
          courts as evidence that the debtor received notice — a critical
          foundation for any prejudgment interest claim under
          <em>Rissler & McMurry</em>.
        </li>
        <li>
          <strong>Wyoming's energy economy affects collections.</strong>
          A significant portion of Wyoming's freelance work serves the
          energy, tourism, and agriculture sectors. Energy clients may be
          structured as LLCs with complex ownership — verify the correct
          legal entity before sending the demand letter. A demand sent to
          the wrong entity is a wasted demand.
        </li>
      </ul>

      <h2>What Happens After You Send the Letter</h2>

      <p>
        Most clients pay within 7–14 days of receiving a well-written
        demand letter that cites Wyoming-specific statutes. If they don't:
      </p>

      <ul>
        <li>
          <strong>Claims up to $6,000</strong> → File in Circuit Court
          small claims division. Filing fee: approximately $25–50. No
          attorneys required. Hearing typically within 45–90 days.
        </li>
        <li>
          <strong>Claims above $6,000</strong> → File in District Court.
          Filing fee: approximately $100–150. Formal discovery and rules
          of civil procedure apply. Legal representation strongly
          recommended. This is the forum where the WCPA fee-shifting
          provision creates the greatest leverage — a $10,000 invoice
          plus attorney fees changes the settlement calculus substantially.
        </li>
      </ul>

      <p>
        Wyoming's 10-year statute of limitations means you have ample time
        to build your case, gather documentation, and, if necessary, find
        the right attorney. But the goal of a demand letter is always to
        resolve the dispute without setting foot in a courtroom — and the
        Cowboy State's combination of a practical small claims system, a
        generous limitations period, and fee-shifting consumer protection
        law gives Wyoming freelancers strong leverage to get paid without
        litigation.
      </p>
    </ArticleLayout>
  );
}
