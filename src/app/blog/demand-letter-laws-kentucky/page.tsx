import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-kentucky")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-kentucky">
      <p>
        You're a freelance graphic designer in Louisville's NuLu district, and a
        Lexington-based bourbon distillery owes you $4,200 for a rebranding
        package you delivered five months ago. Their new labels are on every
        shelf from Total Wine to Kroger, your designs are winning awards, and
        your last four invoice follow-ups went completely unanswered. Kentucky
        gives freelancers a fascinating mix of tools: a modest $2,500 small
        claims limit in District Court (KRS 24A.230), an 8% statutory interest
        rate on judgments (KRS 360.010), one of the longest statutes of
        limitations in the United States at 15 years for written contracts
        (KRS 413.090), and the Kentucky Consumer Protection Act (KRS 367.170)
        — which can support treble damages and attorney fee recovery when a
        business practice involves an unfair, false, misleading, or deceptive
        act in a consumer transaction. Here's exactly how Kentucky freelancers
        write a demand letter that leverages every tool the Bluegrass State
        provides.
      </p>

      <h2>Kentucky Small Claims Court: $2,500 Limit in District Court</h2>

      <p>
        Kentucky's small claims division operates within District Court under
        KRS 24A.230. The jurisdictional limit is <strong>$2,500</strong> —
        one of the lowest small claims caps in the country and notably below
        many neighboring states (Tennessee allows $25,000; Ohio $6,000).
      </p>

      <p>
        For freelancers in Louisville, Lexington, or Bowling Green, this means
        claims up to $2,500 can use the streamlined small claims process — no
        lawyers required, relaxed evidentiary rules, and typically a hearing
        date within 30–60 days. Claims between $2,501 and $5,000 fall under
        the District Court's regular civil jurisdiction, while anything above
        $5,000 must be filed in Circuit Court (KRS 23A.010), where rules of
        evidence apply and legal representation becomes significantly more
        important.
      </p>

      <p>
        For a freelancer owed $4,200 — like our Louisville designer — the
        demand letter should clearly acknowledge this tiered system. Mentioning
        the Circuit Court option adds weight even when the claim exceeds the
        small claims cap, because the client knows litigation moves to a
        higher-stakes forum.
      </p>

      <h2>Kentucky Statutory Interest: 8% Under KRS 360.010</h2>

      <p>
        Kentucky imposes <strong>8%</strong> annual interest on judgments
        under KRS 360.010. This rate applies from the date of judgment forward
        and accrues until the debt is satisfied — including through garnishment
        or levy.
      </p>

      <p>
        Prejudgment interest is also recoverable on liquidated claims — meaning
        claims where the damages amount is calculable with certainty, like an
        agreed-upon project fee. Kentucky courts apply the same 8% rate for
        prejudgment interest on liquidated debts under the common-law "interest
        as damages" doctrine recognized in <em>Nucor Corp. v. General Electric
        Co.</em>, 812 S.W.2d 136 (Ky. 1991). A freelancer suing for an
        unpaid $4,200 invoice that's been outstanding for 18 months could
        potentially add $504 in prejudgment interest to the demand.
      </p>

      <p>
        Including an interest calculation in the demand letter — with the
        specific statutory citation — demonstrates to the client that (1) you
        know the law, (2) the amount owed is growing, and (3) waiting only makes
        it worse for them.
      </p>

      <h2>The Kentucky Consumer Protection Act (KCPA): KRS 367.170 — Treble Damages</h2>

      <p>
        The Kentucky Consumer Protection Act, codified at KRS 367.110 through
        KRS 367.360, is Kentucky's primary unfair-trade-practices statute.
        KRS 367.170 makes unlawful any "[u]nfair, false, misleading, or
        deceptive acts or practices in the conduct of any trade or commerce."
      </p>

      <p>
        Under KRS 367.220, a prevailing plaintiff can recover:
      </p>

      <ul>
        <li>
          <strong>Actual damages</strong> — the amount you're owed plus
          consequential losses
        </li>
        <li>
          <strong>Treble damages</strong> — up to three times the actual
          damages, at the court's discretion, when the defendant's conduct
          was intentional or egregious
        </li>
        <li>
          <strong>Attorney fees and costs</strong> — KRS 367.220(3)
          mandates fee-shifting for prevailing plaintiffs
        </li>
      </ul>

      <p>
        The KCPA applies to "consumer" transactions, which Kentucky courts have
        interpreted broadly. A freelance engagement — hiring a designer,
        developer, or consultant — falls within the KCPA when the services are
        purchased for personal, family, or household purposes. Even B2B
        transactions can qualify if the business client engaged in deception
        in connection with the purchase of services. The Kentucky Supreme
        Court in <em>Stevens v. Motorists Mutual Insurance Co.</em>, 161
        S.W.3d 331 (Ky. 2005), confirmed the KCPA's broad remedial purpose.
      </p>

      <p>
        For the demand letter, the KCPA is the strongest leverage tool
        available. A client who commissioned work, accepted delivery, and then
        stopped communicating without justification may have engaged in conduct
        that exposes them to treble damages and your attorney fees. The letter
        should reference KRS 367.170 and note that continued non-payment
        suggests deceptive conduct within the meaning of the Act.
      </p>

      <h2>Statute of Limitations: 15 Years for Written Contracts (KRS 413.090)</h2>

      <p>
        Kentucky offers one of the longest statutes of limitations in the
        United States for written contracts: <strong>15 years</strong> under
        KRS 413.090(2). This is dramatically longer than most states — Ohio
        gives 8 years, Indiana 6 years, Tennessee and Missouri 10 years. Only
        a handful of states (like Rhode Island and Iowa) match or exceed
        Kentucky's 15-year window.
      </p>

      <p>
        What qualifies as a "written contract"? Under Kentucky law, any
        document signed by the party to be charged that contains the essential
        terms — including emails, signed statements of work, and formal
        contracts — satisfies the writing requirement. For freelancers, this
        means even an email thread confirming the project scope and fee can
        trigger the 15-year limitations period.
      </p>

      <p>
        For <strong>oral contracts</strong>, the statute of limitations is
        <strong>5 years</strong> (KRS 413.120). A freelancer who relied on a
        handshake deal rather than written confirmation should move faster.
      </p>

      <p>
        Practically, the 15-year window means Kentucky freelancers have far
        more time to pursue collection than their counterparts in most other
        states. But waiting is rarely advisable — evidence fades, clients
        relocate, and businesses dissolve. The demand letter should mention the
        15-year window not as an invitation to delay, but as a signal that the
        client cannot simply wait out the freelancer's claim.
      </p>

      <h2>What Every Kentucky Demand Letter Must Include</h2>

      <ol>
        <li>
          <strong>A clear statement of the debt.</strong> Identify the
          specific invoice(s) by number, date, and amount. Attach copies
          of the contract or statement of work.
        </li>
        <li>
          <strong>A payment deadline.</strong> Kentucky does not impose a
          statutory waiting period before filing suit. A 14-day deadline is
          reasonable and common — enough time for the client to respond
          without signaling weakness.
        </li>
        <li>
          <strong>The statutory interest calculation.</strong> State the
          8% rate under KRS 360.010 and compute the prejudgment interest
          through the deadline date.
        </li>
        <li>
          <strong>Reference to the KCPA (KRS 367.170).</strong> Note that
          continued non-payment in the face of a written demand may
          constitute an unfair or deceptive act, exposing the client to
          treble damages and mandatory attorney fees under KRS 367.220.
        </li>
        <li>
          <strong>A statement of intent to pursue legal remedies.</strong>
          Name the specific court — District Court for claims under $2,500
          (small claims) or under $5,000 (regular civil), Circuit Court for
          claims above $5,000 (KRS 23A.010). Naming the court makes the
          threat concrete.
        </li>
        <li>
          <strong>Your contact information and a request for a written
          response.</strong> Give them a way to resolve this without
          litigation — a phone number, email, or payment portal link.
        </li>
      </ol>

      <h2>Sample Demand Letter Language for Kentucky</h2>

      <p>
        Here is sample language a Kentucky freelancer might include in the
        "legal consequences" section of their demand letter. This is
        not a complete letter — adapt it to your specific situation and
        consult a Kentucky attorney for a final review.
      </p>

      <blockquote>
        <p>
          Pursuant to KRS 413.090(2), my claim for this unpaid debt is
          governed by Kentucky's 15-year statute of limitations for written
          contracts. Interest on this liquidated debt accrues at the rate
          of 8% per annum under KRS 360.010. As of [DATE], the prejudgment
          interest on the outstanding balance of $[AMOUNT] totals
          $[INTEREST].
        </p>

        <p>
          Furthermore, your acceptance of the completed deliverables
          followed by a refusal to pay after repeated demands may constitute
          an unfair, false, misleading, or deceptive act under the
          Kentucky Consumer Protection Act, KRS 367.170. Should litigation
          become necessary and a court determine that your conduct violated
          the KCPA, you may be liable for treble damages — up to
          $[AMOUNT × 3] — plus my reasonable attorney fees and court
          costs under KRS 367.220.
        </p>

        <p>
          If I do not receive payment in full by [DEADLINE DATE], I will
          file this matter in [Jefferson County / Fayette County / Warren
          County] [District Court / Circuit Court] and pursue all available
          remedies, including the treble damages and attorney fee provisions
          of the Kentucky Consumer Protection Act.
        </p>
      </blockquote>

      <h2>Practical Considerations for Kentucky Freelancers</h2>

      <ul>
        <li>
          <strong>Venue matters.</strong> Under KRS 452.450, a lawsuit on a
          contract may be brought in the county where the defendant resides,
          the county where the contract was made, or the county where the
          breach occurred. For a Louisville freelancer suing a Lexington
          client, you can file in either Jefferson County or Fayette County.
        </li>
        <li>
          <strong>Small claims may require in-person appearances.</strong>
          Kentucky small claims courts generally require the plaintiff to
          appear in person for the hearing. If you relocate, be prepared to
          return to the county where you filed.
        </li>
        <li>
          <strong>Certified mail is standard practice.</strong> Kentucky
          courts routinely accept certified-mail return receipts as proof
          of delivery. Send the demand letter via USPS Certified Mail with
          Return Receipt Requested — and keep the green card.
        </li>
        <li>
          <strong>The KCPA has a notice requirement for some claims.</strong>
          While the KCPA does not universally require a pre-suit demand
          letter, sending one is unequivocally the right move. It satisfies
          any notice requirement that might apply and demonstrates your
          good-faith effort to resolve the dispute — which Kentucky judges
          look for when considering treble damages and fee awards.
        </li>
        <li>
          <strong>Kentucky is a "pure comparative fault" state.</strong>
          Under KRS 411.182, a plaintiff's recovery is reduced by their
          percentage of fault — but you can still recover even if you were
          99% at fault. For freelancers, this means even if there's a
          dispute about scope or quality, you can still recover the portion
          of the fee that corresponds to work the client accepted and used.
        </li>
      </ul>

      <h2>What Happens After You Send the Letter</h2>

      <p>
        Most clients pay within 7–14 days of receiving a well-written demand
        letter that cites Kentucky-specific statutes. If they don't:
      </p>

      <ul>
        <li>
          <strong>Claims up to $2,500</strong> → File in Small Claims
          Division of District Court. Filing fee: approximately $50–100.
          No lawyers required. Hearing typically within 30–60 days.
        </li>
        <li>
          <strong>Claims $2,501–$5,000</strong> → File in District Court
          regular civil docket. Filing fee: approximately $150. Rules of
          civil procedure apply. You can appear pro se but may want
          counsel.
        </li>
        <li>
          <strong>Claims above $5,000</strong> → File in Circuit Court.
          Filing fee: approximately $200–250. Formal discovery, rules of
          evidence, and legal representation strongly recommended. This is
          also where the KCPA treble damages claim creates the greatest
          leverage — a $10,000 freelance invoice with KCPA treble damages
          becomes a $30,000 claim plus attorney fees.
        </li>
      </ul>

      <p>
        Kentucky's 15-year statute of limitations means you can take your
        time building your case, gathering documentation, and finding the
        right attorney. But remember: the goal of a demand letter is to
        resolve the dispute without ever setting foot in court. The
        Bluegrass State gives you the tools — use them wisely.
      </p>
    </ArticleLayout>
  );
}
