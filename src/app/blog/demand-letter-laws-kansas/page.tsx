import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-kansas")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-kansas">
      <p>
        You're a freelance graphic designer in Lawrence, and a Wichita-based
        e-commerce company owes you $3,800 for a complete brand identity package
        — logo, style guide, packaging design — that you delivered two months
        ago and has been live on their site ever since. Their CFO stopped
        returning emails after the second reminder. Kansas law gives freelancers
        a surprisingly strong toolkit: a $4,000 small claims limit (K.S.A.
        § 61-2703), 10% pre-judgment interest on liquidated claims (K.S.A.
        § 16-201), a 5-year statute of limitations for written contracts (K.S.A.
        § 60-511), and the Kansas Consumer Protection Act (K.S.A. § 50-623 et
        seq.) which provides a private right of action with treble damages and
        mandatory attorney fees for deceptive practices. From Wichita's
        aerospace engineering hub — anchored by Spirit AeroSystems, Textron,
        and Koch Industries — to Kansas City's growing tech corridor and
        Lawrence's vibrant freelance community around KU, the Sunflower State
        punches above its weight in the freelance economy. A demand letter that
        cites the KCPA with its treble damages and attorney fee provisions
        signals a freelancer who understands Kansas's uniquely strong consumer
        protection posture. Here's exactly how Kansas freelancers write a
        demand letter that gets results.
      </p>

      <h2>Kansas Small Claims Court: $4,000 Limit</h2>

      <p>
        Kansas's small claims process operates through the District Court
        system under K.S.A. § 61-2703 with a jurisdictional limit of{" "}
        <strong>$4,000</strong> — slightly below the national median but
        sufficient to cover the majority of freelance disputes. Here's what
        every Kansas freelancer needs to know:
      </p>

      <ul>
        <li>
          <strong>Filing fee:</strong> Typically $47.50 plus a service fee of
          approximately $15 per defendant, payable to the District Court Clerk
          in the county where the defendant resides or does business
        </li>
        <li>
          <strong>Attorneys permitted:</strong> Unlike some states, Kansas
          allows attorney representation in small claims court — which cuts both
          ways. Freelancers can bring counsel, but so can the non-paying client.
          This makes the demand letter even more critical as a pre-litigation
          settlement lever
        </li>
        <li>
          <strong>Hearing timeline:</strong> Typically 30–45 days after filing;
          Kansas District Courts prioritize small claims and aim for efficient
          resolution
        </li>
        <li>
          <strong>Venue:</strong> File in the county where the defendant resides
          or where the contract was to be performed — for remote freelancers
          serving Kansas clients, the defendant's county controls
        </li>
        <li>
          <strong>Appeal:</strong> Either party may appeal a District Court
          small claims judgment to the District Court for a trial de novo
          within 10 days — this is a short window, so be prepared to act
          quickly if the losing party appeals
        </li>
      </ul>

      <h2>Kansas Statutory Interest: Pre-Judgment and Post-Judgment at 10%</h2>

      <p>
        Kansas provides one of the highest statutory interest rates in the
        Midwest — 10% — that every freelancer should understand and cite in a
        demand letter:
      </p>

      <ul>
        <li>
          <strong>Pre-judgment interest (K.S.A. § 16-201):</strong> 10% per
          annum on liquidated claims from the date payment was due. For a
          $3,800 invoice that's 60 days past due, that's approximately $62 in
          accrued interest already — and it grows by roughly $31 every month
          the client delays
        </li>
        <li>
          <strong>Post-judgment interest (K.S.A. § 16-204):</strong> The
          judgment bears interest at 10% per annum from the date of judgment
          until paid — this is significantly higher than most neighboring states
          (Missouri has 9%, Oklahoma uses the Treasury rate plus 2%), creating
          meaningful pressure to settle before trial
        </li>
        <li>
          <strong>Contractual interest:</strong> If your freelance contract
          specifies a late-payment interest rate, Kansas courts will enforce it
          provided it doesn't exceed Kansas's usury limit (K.S.A. § 16-207 caps
          the general limit at 15% for most consumer transactions, though
          different rules may apply to commercial contracts)
        </li>
      </ul>

      <h2>Kansas Consumer Protection Act: K.S.A. § 50-623 et seq.</h2>

      <p>
        The Kansas Consumer Protection Act (KCPA), codified at K.S.A. § 50-623
        through § 50-643, is Kansas's consumer protection statute and the most
        powerful tool in a freelancer's arsenal. It prohibits deceptive and
        unconscionable acts and practices and provides a{" "}
        <strong>private right of action</strong> with treble damages and
        mandatory attorney fees.
      </p>

      <p>Key provisions freelancers must know:</p>

      <ul>
        <li>
          <strong>Private right of action:</strong> K.S.A. § 50-634 allows any
          consumer who suffers loss from a deceptive or unconscionable practice
          to bring a civil action — this includes freelancers whose clients
          misrepresented their intent or ability to pay
        </li>
        <li>
          <strong>Treble damages:</strong> Unlike Arkansas (which provides a
          $200 statutory minimum), Kansas allows the court to award{" "}
          <strong>up to three times the actual damages</strong> or $10,000,
          whichever is greater, for willful violations — this can turn a $3,800
          invoice into a potential $11,400 judgment
        </li>
        <li>
          <strong>Mandatory attorney fees:</strong> K.S.A. § 50-634(e) provides
          that the court <em>shall</em> award attorney fees to a prevailing
          consumer — this is mandatory, not discretionary, shifting substantial
          litigation risk to the non-paying client
        </li>
        <li>
          <strong>Deceptive practices defined:</strong> K.S.A. § 50-626 lists
          prohibited practices including knowingly making false representations
          about goods or services. For freelancers, a client who commissions
          work with no intention or ability to pay may fall within the KCPA's
          broad scope
        </li>
        <li>
          <strong>Statute of limitations for KCPA:</strong> 3 years from the
          date of the violation (K.S.A. § 60-512) — shorter than the contract
          SOL of 5 years, so bring KCPA claims promptly
        </li>
      </ul>

      <h2>Kansas Statute of Limitations: 5 Years for Written Contracts</h2>

      <p>
        K.S.A. § 60-511 provides a <strong>5-year statute of
        limitations</strong> for actions founded on a written contract. This is
        the standard for contract actions in Kansas and matches neighboring
        states like Missouri and Nebraska. Oral contracts carry a 3-year
        limitation (K.S.A. § 60-512) — another reason every freelancer should
        insist on written agreements. For partial payment or written
        acknowledgment of the debt, Kansas recognizes that the limitations
        period may restart — so keep every email, text message, and partial
        payment record.
      </p>

      <h2>What to Include in a Kansas Demand Letter</h2>

      <p>
        An effective Kansas demand letter should cite the specific statutes
        that create maximum leverage. Here's the structure:
      </p>

      <ol>
        <li>
          <strong>Contract details:</strong> Date of agreement, scope of work,
          deliverables completed, and payment terms — establish the written
          contract to secure the 5-year SOL under K.S.A. § 60-511
        </li>
        <li>
          <strong>Amount owed and interest:</strong> State the exact amount,
          including any contractual late fees and pre-judgment interest at the
          10% statutory rate (K.S.A. § 16-201) — calculate the running interest
          to demonstrate it grows with every passing day. At 10%, a $4,000 debt
          accrues roughly $33 per month — that's real money the client is
          losing by delaying
        </li>
        <li>
          <strong>Payment deadline:</strong> Set a reasonable deadline (14–30
          days) for payment — Kansas courts expect good-faith negotiation
          before litigation
        </li>
        <li>
          <strong>KCPA treble damages:</strong> Cite the Kansas Consumer
          Protection Act (K.S.A. § 50-634) including the treble damages
          provision — point out that a $3,800 invoice could become an $11,400
          judgment plus attorney fees under the KCPA
        </li>
        <li>
          <strong>Mandatory attorney fees:</strong> Emphasize that the KCPA
          makes attorney fees mandatory for prevailing consumers (K.S.A.
          § 50-634(e)) — this warns the client that their litigation costs
          compound while yours shift entirely to them
        </li>
        <li>
          <strong>Small claims path:</strong> Reference the $4,000 small claims
          limit (K.S.A. § 61-2703) and the District Court's efficient process —
          signaling you can pursue this quickly and inexpensively, with or
          without an attorney
        </li>
      </ol>

      <h2>Kansas-Specific Considerations for Freelancers</h2>

      <ul>
        <li>
          <strong>Wichita's aerospace and manufacturing ecosystem:</strong>{" "}
          Wichita is known as the "Air Capital of the World," with Spirit
          AeroSystems, Textron Aviation, and a dense network of aerospace
          suppliers and subcontractors. Freelancers serving this industry —
          from technical writers to industrial designers — should use written
          contracts with Kansas governing-law clauses. The aerospace supply
          chain's payment terms can stretch to Net-60 or even Net-90, making
          the 10% interest rate particularly valuable for overdue invoices
        </li>
        <li>
          <strong>Kansas City metro's bi-state complexity:</strong> The Kansas
          City metropolitan area straddles the Kansas-Missouri state line, and
          many freelancers serve clients on both sides. If your client is
          physically in Missouri but you performed the work in Kansas, venue
          rules get complicated — include a governing-law clause specifying
          Kansas law and a venue clause naming the county where you work to
          avoid jurisdictional fights
        </li>
        <li>
          <strong>Lawrence and Manhattan's university ecosystems:</strong>{" "}
          Freelancers serving KU in Lawrence and K-State in Manhattan should be
          aware that university clients follow different payment rules. State
          universities may have mandatory procurement processes, and Kansas's
          prompt-payment statute for government contracts may apply — research
          before you start work
        </li>
        <li>
          <strong>Rural Kansas and agricultural clients:</strong> Outside the
          major metros, many Kansas freelancers serve agricultural and
          agribusiness clients where business is often done on personal
          relationships. Kansas courts are comfortable with self-represented
          litigants in small claims, making the demand-letter-to-small-claims
          pipeline accessible even in counties with fewer legal resources
        </li>
        <li>
          <strong>The 10% interest advantage:</strong> Kansas's 10% statutory
          interest rate is a standout feature. While most states hover between
          6–9%, Kansas's rate creates genuine financial urgency — a $4,000 debt
          accrues over $400 per year in interest alone. Make sure your demand
          letter calculates and displays the running interest total prominently
        </li>
      </ul>

      <h2>When to Escalate Beyond a Demand Letter</h2>

      <p>
        If your demand letter doesn't produce payment within the stated
        deadline, Kansas offers clear next steps:
      </p>

      <ul>
        <li>
          <strong>Under $4,000:</strong> File in District Court — Small Claims
          Division. Filing fee approximately $47.50 plus service costs. You may
          represent yourself or bring an attorney. The process is
          straightforward and designed for self-represented litigants
        </li>
        <li>
          <strong>$4,001 and above:</strong> File in District Court as a regular
          civil case — this requires an attorney for most litigants and
          involves formal discovery, but opens access to full KCPA remedies
          including treble damages and mandatory attorney fees
        </li>
        <li>
          <strong>KCPA claim:</strong> If the client's behavior was deceptive —
          e.g., they commissioned work knowing they couldn't or wouldn't pay —
          include a KCPA claim. The combination of treble damages (up to 3×
          actual damages or $10,000 minimum), mandatory attorney fees, and 10%
          interest creates overwhelming pressure to settle
        </li>
        <li>
          <strong>Contract + KCPA together:</strong> Plead both breach of
          contract and KCPA violations in the alternative — the KCPA claim
          unlocks mandatory attorney fees and treble damages that a pure
          contract claim doesn't. Kansas courts routinely hear both theories in
          the same case
        </li>
      </ul>

      <p>
        Kansas's legal toolkit for freelancers is stronger than its modest
        reputation suggests. The $4,000 small claims limit covers the vast
        majority of freelance invoices, the KCPA's treble damages provision
        can turn a modest claim into a serious threat, mandatory attorney fees
        shift the entire cost of litigation to the non-paying client, and the
        10% interest rate — one of the highest in the Midwest — makes delay
        genuinely expensive for the defendant. A demand letter that names these
        statutes specifically — particularly the KCPA with its mandatory
        attorney fee provision and treble damages — often resolves disputes
        without a single court filing. Whether you're a UX designer in Overland
        Park's growing tech scene, a copywriter serving Wichita's aerospace
        industry, or a photographer capturing the Flint Hills, Kansas's legal
        system gives freelancers real, enforceable tools to get paid.
      </p>
    </ArticleLayout>
  );
}
