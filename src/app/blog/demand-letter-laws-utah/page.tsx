import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-utah")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-utah">
      <p>
        You're a freelance brand designer in Salt Lake City, and a Provo-based
        e-commerce startup owes you $6,200 for a full identity system — logo,
        typography, and launch collateral — that you delivered six weeks ago and
        they've been using in production ever since. Their founder keeps saying
        "the check is in the pipeline" while the invoices stack up. Utah law
        gives freelancers one of the most freelancer-friendly small claims
        systems in the West: a{" "}
        <strong>$20,000 small claims limit</strong> (Utah Code § 78A-8-102),
        10% pre-judgment interest on breach of contract (Utah Code § 15-1-1), a{" "}
        <strong>6-year statute of limitations for written contracts</strong>{" "}
        (Utah Code § 78B-2-309), and the Utah Consumer Sales Practices Act
        (Utah Code § 13-11-1 et seq.) — which lets a prevailing consumer recover
        the greater of actual damages or $2,000 plus attorney fees. From the
        Silicon Slopes corridor stretching from Lehi to Provo — anchored by
        Qualtrics, Pluralsight, and a dense startup ecosystem — to Salt Lake
        City's growing creative scene and Park City's film and outdoor
        industries, Utah's freelance economy is booming. A demand letter that
        cites the UCSPA with its attorney fee provision signals a freelancer
        who understands Utah's uniquely strong consumer protection posture.
        Here's exactly how Utah freelancers write a demand letter that gets
        results.
      </p>

      <h2>Utah Small Claims Court: $20,000 Limit</h2>

      <p>
        Utah's small claims process operates through the Justice Court system
        under Utah Code § 78A-8-102 with a jurisdictional limit of{" "}
        <strong>$20,000</strong> (including attorney fees, but exclusive of
        court costs and interest) — effective January 1, 2025 through December
        31, 2029, and among the highest limits in the United States. That
        covers the overwhelming majority of freelance invoices. Here's what
        every Utah freelancer needs to know:
      </p>

      <ul>
        <li>
          <strong>Filing fee:</strong> Generally $55–$70 depending on the
          Justice Court, plus a small service fee per defendant — among the
          most affordable filing systems in the West
        </li>
        <li>
          <strong>Attorneys generally not permitted:</strong> Utah small claims
          is designed for self-represented litigants, and attorneys are
          typically not allowed (with limited exceptions). This levels the
          playing field — a non-paying client can't bury you in legal fees,
          which makes the demand letter even more potent as a pre-litigation
          settlement lever
        </li>
        <li>
          <strong>Hearing timeline:</strong> Usually scheduled within 60–90
          days of filing — Utah Justice Courts are efficient, and the informal
          hearing format favors freelancers who come prepared with contracts,
          emails, and deliverable records
        </li>
        <li>
          <strong>Venue:</strong> File in the Justice Court precinct where the
          defendant resides or does business — for remote freelancers serving
          Utah clients, the defendant's location controls
        </li>
        <li>
          <strong>Appeal:</strong> Either party may appeal a Justice Court
          small claims judgment to the District Court for a trial de novo
          within 21 days (Utah R. Civ. P. 72) — be aware the appeal opens the
          door to attorney representation and formal procedures
        </li>
      </ul>

      <h2>Utah Statutory Interest: 10% Pre-Judgment, Annual Post-Judgment Rate</h2>

      <p>
        Utah provides a strong statutory interest framework that every
        freelancer should calculate and cite in a demand letter:
      </p>

      <ul>
        <li>
          <strong>Pre-judgment interest (Utah Code § 15-1-1):</strong> When a
          contract doesn't specify a late-payment rate, Utah imposes{" "}
          <strong>10% per annum</strong> for breach of contract. For a $6,200
          invoice that's 45 days past due, that's roughly $76 in accrued
          interest already — and it grows by about $51 every month the client
          delays. Parties may agree to a higher rate in writing, which is why
          a late-payment clause in your freelance contract pays for itself
        </li>
        <li>
          <strong>Post-judgment interest (Utah Code § 15-1-4):</strong> Once
          you obtain a judgment, interest accrues at the rate set annually
          under § 15-1-4 — historically around 10% in recent years — from the
          date of judgment until the debt is paid in full. A judgment that
          keeps compounding is a powerful reason for a client to settle before
          trial
        </li>
        <li>
          <strong>Contractual interest:</strong> If your freelance agreement
          specifies a late-fee rate, Utah courts will enforce it — Utah has no
          general usury ceiling for commercial contracts, so parties are
          largely free to set their own terms in writing
        </li>
      </ul>

      <h2>Utah Consumer Sales Practices Act: Utah Code § 13-11-1 et seq.</h2>

      <p>
        The Utah Consumer Sales Practices Act (UCSPA), codified at Utah Code
        § 13-11-1 through § 13-11-23, is Utah's consumer protection statute
        and one of the most powerful tools in a freelancer's arsenal. It
        prohibits deceptive and unconscionable acts or practices in
        consumer transactions and provides a{" "}
        <strong>private right of action</strong> with a meaningful statutory
        damage floor.
      </p>

      <p>Key provisions freelancers must know:</p>

      <ul>
        <li>
          <strong>Private right of action (Utah Code § 13-11-19):</strong> A
          consumer who suffers loss from a violation of the UCSPA may bring a
          civil action — including freelancers whose clients misrepresented
          their intent or ability to pay for commissioned work
        </li>
        <li>
          <strong>Statutory damage floor:</strong> Recovery is the{" "}
          <strong>greater of actual damages or $2,000 per violation</strong>,
          plus court costs — this means even a relatively small unpaid invoice
          can carry a meaningful statutory penalty if the client's conduct was
          deceptive
        </li>
        <li>
          <strong>Attorney fees:</strong> The UCSPA allows a prevailing
          consumer to recover <em>reasonable attorney fees</em> — shifting
          substantial litigation risk to the non-paying client, who now faces
          not just your invoice but your legal costs as well
        </li>
        <li>
          <strong>Deceptive practices defined (Utah Code § 13-11-4):</strong>{" "}
          The act prohibits a broad range of deceptive acts, including
          knowingly making false or misleading representations — a client who
          commissions work with no intention of paying may fall squarely
          within the UCSPA's scope
        </li>
        <li>
          <strong>Statute of limitations for UCSPA claims:</strong> Actions
          must be brought within 3 years of the violation (Utah Code
          § 13-11-20) — shorter than the 6-year contract SOL, so raise UCSPA
          theories promptly
        </li>
      </ul>

      <h2>Utah Statute of Limitations: 6 Years for Written Contracts</h2>

      <p>
        Utah Code § 78B-2-309 provides a <strong>6-year statute of
        limitations</strong> for actions founded upon an instrument in writing
        — among the more generous periods in the Mountain West and a full year
        longer than neighboring Colorado. Oral contracts and open accounts
        carry a 4-year limitation (Utah Code § 78B-2-307). That gap is a
        concrete financial reason every freelancer should insist on written
        agreements: a written contract doubles your window to collect.
        Utah courts also recognize that partial payments or written
        acknowledgments of the debt can affect the limitations analysis — so
        keep every email, text message, and payment record.
      </p>

      <h2>What to Include in a Utah Demand Letter</h2>

      <p>
        An effective Utah demand letter should cite the specific statutes that
        create maximum leverage. Here's the structure:
      </p>

      <ol>
        <li>
          <strong>Contract details:</strong> Date of agreement, scope of work,
          deliverables completed, and payment terms — establish the written
          contract to secure the 6-year SOL under Utah Code § 78B-2-309
        </li>
        <li>
          <strong>Amount owed and interest:</strong> State the exact amount,
          including any contractual late fees and pre-judgment interest at the
          10% statutory rate (Utah Code § 15-1-1) — calculate the running
          interest to demonstrate it grows with every passing day. At 10%, a
          $6,200 debt accrues roughly $51 per month — real money the client is
          losing by delaying
        </li>
        <li>
          <strong>Payment deadline:</strong> Set a reasonable deadline (14–30
          days) for payment — Utah courts expect good-faith efforts to resolve
          disputes before litigation, and a clear deadline signals seriousness
        </li>
        <li>
          <strong>UCSPA damages:</strong> Cite the Utah Consumer Sales
          Practices Act (Utah Code § 13-11-19) including the greater-of
          actual-damages-or-$2,000 recovery and attorney fees — point out that
          a deceptive non-payment could expose the client to statutory damages
          plus your legal costs
        </li>
        <li>
          <strong>Attorney fees:</strong> Emphasize that the UCSPA allows a
          prevailing consumer to recover reasonable attorney fees — the client
          understands that refusing to pay now may mean paying your lawyer
          later
        </li>
        <li>
          <strong>Small claims path:</strong> Reference the $20,000 small
          claims limit (Utah Code § 78A-8-102) and the Justice Court's
          fast, attorney-free process — signaling you can pursue this quickly
          and inexpensively on your own
        </li>
      </ol>

      <h2>Utah-Specific Considerations for Freelancers</h2>

      <ul>
        <li>
          <strong>Silicon Slopes tech corridor:</strong> The Lehi-to-Provo
          corridor — home to Qualtrics, Pluralsight, Domo, and thousands of
          startups — runs on contract work. Tech clients often stretch payment
          terms to Net-30 or Net-60, and when startups churn, invoices get
          orphaned. The $20,000 small claims limit covers virtually every
          freelance engagement in this ecosystem, and the 10% interest rate
          makes overdue invoices genuinely expensive for cash-strapped
          startups
        </li>
        <li>
          <strong>Salt Lake City's creative and agency scene:</strong> Utah's
          capital hosts a dense network of design studios, film and
          post-production shops, and marketing agencies serving national
          brands. Freelancers here should include governing-law and venue
          clauses naming Salt Lake County — avoiding jurisdictional fights when
          a client is registered elsewhere
        </li>
        <li>
          <strong>Park City and the outdoor industry:</strong> Between Sundance
          and a cluster of outdoor brands (Backcountry, Cotopaxi, and
          numerous equipment makers), Park City and the Wasatch Back generate
          significant freelance work. Seasonal businesses can be slow-pay —
          the UCSPA's $2,000 statutory floor is a particularly useful lever
          with clients who ghost after seasonal peaks
        </li>
        <li>
          <strong>Ogden and the northern Wasatch:</strong> Ogden's
          revitalization has attracted manufacturing, aerospace (Hill Air
          Force Base supply chains), and logistics work. Government-adjacent
          and defense supply chains have rigid procurement cycles — confirm
          payment terms in writing before starting work, and track every
          invoice against the 6-year SOL
        </li>
        <li>
          <strong>The $20,000 advantage:</strong> Utah's small claims limit is
          among the highest in the nation — $20,000 including attorney fees —
          which means the vast majority of freelance disputes never require a
          lawyer or a formal civil case. The demand-letter-to-small-claims
          pipeline is shorter and cheaper in Utah than almost anywhere else in
          the country
        </li>
      </ul>

      <h2>When to Escalate Beyond a Demand Letter</h2>

      <p>
        If your demand letter doesn't produce payment within the stated
        deadline, Utah offers clear next steps:
      </p>

      <ul>
        <li>
          <strong>Up to $20,000:</strong> File in Justice Court — Small Claims
          Division. Filing fee around $55–$70 plus service costs. Attorneys
          are generally not permitted, so you represent yourself in an
          informal hearing. The process is designed for self-represented
          freelancers and typically resolves within 60–90 days
        </li>
        <li>
          <strong>Above $20,000:</strong> File in District Court as a regular
          civil case — this requires formal procedures and often an attorney,
          but opens access to the full range of remedies including UCSPA
          statutory damages and attorney fees
        </li>
        <li>
          <strong>UCSPA claim:</strong> If the client's behavior was deceptive
          — e.g., they commissioned work knowing they couldn't or wouldn't pay —
          add a UCSPA claim. The combination of the $2,000 statutory damage
          floor, attorney fees, and 10% interest creates serious pressure to
          settle
        </li>
        <li>
          <strong>Contract + UCSPA together:</strong> Plead both breach of
          contract and UCSPA violations in the alternative — the UCSPA claim
          unlocks statutory damages and attorney fees that a pure contract
          claim doesn't. Utah courts routinely entertain both theories in the
          same action
        </li>
      </ul>

      <p>
        Utah's legal toolkit for freelancers is among the strongest in the
        nation. The $20,000 small claims limit — one of the highest in the
        country — covers nearly every freelance invoice, the UCSPA provides a
        $2,000 statutory damage floor plus attorney fees for deceptive
        non-payment, the 6-year statute of limitations for written contracts
        gives you time, and the 10% interest rate makes delay genuinely
        expensive for the client. A demand letter that names these statutes
        specifically — particularly the UCSPA with its attorney fee provision —
        often resolves disputes without a single court filing. Whether you're
        a product designer in Lehi's Silicon Slopes, a videographer in Salt
        Lake City, a copywriter serving Park City's outdoor brands, or a
        developer in Provo's startup scene, Utah's legal system gives
        freelancers real, enforceable tools to get paid.
      </p>
    </ArticleLayout>
  );
}
