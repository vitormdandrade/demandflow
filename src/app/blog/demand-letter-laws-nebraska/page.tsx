import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-nebraska")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-nebraska">
      <p>
        You're a freelance web developer in Omaha, and a logistics company in
        Lincoln owes you $3,400 for a custom inventory dashboard you delivered
        three months ago. They've been using it daily, your invoice is 90 days
        past due, and their accounting department has gone silent. Nebraska law
        gives freelancers a practical toolkit: a $3,900 small claims limit in
        County Court (Neb. Rev. Stat. § 25-2802), post-judgment interest at
        2% above the federal funds rate (Neb. Rev. Stat. § 45-104), a 5-year
        statute of limitations for written contracts (Neb. Rev. Stat.
        § 25-205), and the Nebraska Consumer Protection Act (Neb. Rev. Stat.
        § 59-1601) which prohibits deceptive trade practices and allows
        attorney fee recovery in certain circumstances. From Omaha's growing
        tech and insurance corridor to the agricultural and manufacturing
        economy of the Platte River Valley, Nebraska's freelance community is
        quietly thriving — and a demand letter that cites the Nebraska Consumer
        Protection Act signals a freelancer who knows the Cornhusker State's
        legal landscape. Here's exactly how Nebraska freelancers write a demand
        letter that gets results.
      </p>

      <h2>Nebraska Small Claims Court: $3,900 Limit</h2>

      <p>
        Nebraska's small claims process operates through the County Court
        system under Neb. Rev. Stat. § 25-2802 with a jurisdictional limit of
        <strong>$3,900</strong>. This covers most freelance disputes — from a
        $1,200 logo design to a $3,500 social media marketing campaign. Here's
        what every Nebraska freelancer needs to know:
      </p>

      <ul>
        <li>
          <strong>Filing fee:</strong> $31 for claims up to $3,900 (Neb. Rev.
          Stat. § 33-100), payable to the Clerk of the County Court in the
          county where the defendant resides or does business
        </li>
        <li>
          <strong>No attorneys required:</strong> Nebraska's small claims rules
          are designed for self-represented litigants — you can present your
          case without an attorney, and the process is streamlined for
          individuals and sole proprietors
        </li>
        <li>
          <strong>Hearing timeline:</strong> typically 30–60 days after filing;
          Nebraska's County Courts are efficient and less congested than many
          urban jurisdictions
        </li>
        <li>
          <strong>Mediation:</strong> Many Nebraska County Courts offer
          court-annexed mediation programs — a demand letter expressing
          willingness to mediate shows good faith and strengthens your
          position
        </li>
        <li>
          <strong>Appeal:</strong> Small claims judgments can be appealed to
          the District Court within 30 days (Neb. Rev. Stat. § 25-2807)
        </li>
      </ul>

      <h2>Nebraska Statutory Interest: Pre-Judgment and Post-Judgment</h2>

      <p>
        Nebraska law provides two distinct interest rates freelancers should
        understand:
      </p>

      <ul>
        <li>
          <strong>Pre-judgment interest (Neb. Rev. Stat. § 45-103):</strong>{" "}
          6% per annum on contracts that don't specify a rate. If your contract
          includes a late-payment interest clause, that rate governs — but
          cannot exceed Nebraska's usury limit (generally 16% under Neb. Rev.
          Stat. § 45-101.03)
        </li>
        <li>
          <strong>Post-judgment interest (Neb. Rev. Stat. § 45-104):</strong>{" "}
          2% above the federal funds rate on judgments — this rate adjusts
          periodically, but it's typically in the 7–9% range, giving
          freelancers significant leverage once a judgment is obtained
        </li>
      </ul>

      <h2>Nebraska Consumer Protection Act: Neb. Rev. Stat. § 59-1601</h2>

      <p>
        The Nebraska Consumer Protection Act (NCPA), found at Neb. Rev. Stat.
        § 59-1601 through § 59-1623, prohibits unfair methods of competition
        and unfair or deceptive acts or practices in trade or commerce. For
        freelancers, the NCPA is most relevant when a client misrepresents
        their ability or intent to pay — such as commissioning work they knew
        they couldn't afford.
      </p>

      <p>Key provisions for freelancers:</p>

      <ul>
        <li>
          <strong>Private right of action:</strong> Neb. Rev. Stat.
          § 59-1609 allows any person injured by a violation of the NCPA to
          bring a civil action
        </li>
        <li>
          <strong>Actual damages:</strong> Recoverable — this is your unpaid
          invoice amount
        </li>
        <li>
          <strong>Attorney fees:</strong> Courts may award reasonable attorney
          fees to the prevailing party under Neb. Rev. Stat. § 59-1609 —
          this is a significant leverage point in demand letters
        </li>
        <li>
          <strong>No statutory treble damages:</strong> Unlike some states that
          provide automatic treble damages under their consumer protection
          acts, Nebraska's NCPA does not include a statutory treble damages
          provision — but the attorney fee recovery and efficient small claims
          system compensate
        </li>
        <li>
          <strong>Statute of limitations:</strong> 4 years from the date of
          the violation (Neb. Rev. Stat. § 59-1610) — shorter than the 5-year
          contract SOL, so pursue NCPA claims promptly
        </li>
      </ul>

      <h2>Nebraska Statute of Limitations: 5 Years for Written Contracts</h2>

      <p>
        Neb. Rev. Stat. § 25-205 provides a <strong>5-year statute of
        limitations</strong> for actions founded on a written contract. This
        gives freelancers a comfortable window — longer than Illinois (5 years
        but same), substantially longer than South Carolina (3 years) or
        Louisiana (3 years). However, the 4-year NCPA statute of limitations
        (Neb. Rev. Stat. § 59-1610) means you should pursue consumer
        protection claims before the fourth year.
      </p>

      <h2>What to Include in a Nebraska Demand Letter</h2>

      <p>
        An effective Nebraska demand letter should reference the specific
        statutes that give you leverage. Here's the structure:
      </p>

      <ol>
        <li>
          <strong>Contract details:</strong> Date of agreement, scope of work,
          deliverables completed, and payment terms — establish the written
          contract to secure the 5-year SOL under Neb. Rev. Stat. § 25-205
        </li>
        <li>
          <strong>Amount owed:</strong> State the exact amount, including any
          contractual late fees or pre-judgment interest at the 6% statutory
          rate (Neb. Rev. Stat. § 45-103)
        </li>
        <li>
          <strong>Payment deadline:</strong> Set a reasonable deadline (14–30
          days) for payment
        </li>
        <li>
          <strong>Legal consequences:</strong> Cite the $3,900 small claims
          limit (Neb. Rev. Stat. § 25-2802), the post-judgment interest rate
          at 2% above the federal funds rate (Neb. Rev. Stat. § 45-104), the
          5-year written contract SOL (Neb. Rev. Stat. § 25-205), and the
          Nebraska Consumer Protection Act (Neb. Rev. Stat. § 59-1601) with
          attorney fee recovery
        </li>
        <li>
          <strong>Good faith:</strong> Express willingness to resolve the
          matter without litigation — Nebraska courts expect parties to make
          reasonable efforts to settle before filing
        </li>
      </ol>

      <h2>Nebraska-Specific Considerations for Freelancers</h2>

      <ul>
        <li>
          <strong>Omaha's insurance and tech corridor:</strong> Omaha is home to
          major insurance carriers (Mutual of Omaha, Berkshire Hathaway
          subsidiaries) and a growing tech scene. Freelancers serving these
          sectors should include net-30 payment terms in contracts and
          reference Nebraska governing law explicitly
        </li>
        <li>
          <strong>Lincoln's university and government economy:</strong> With the
          University of Nebraska-Lincoln and state government as major
          economic drivers, freelancers working with university departments
          or state agencies should understand Nebraska's claims process for
          government entities — which may have different notice requirements
          under the Nebraska State Tort Claims Act
        </li>
        <li>
          <strong>Agricultural clients and seasonal cash flow:</strong>{" "}
          Central and western Nebraska's agricultural economy operates on
          seasonal schedules. Freelancers serving farmers, ranchers, and
          agribusinesses should structure payment terms around harvest and
          planting cycles — or require upfront payment
        </li>
        <li>
          <strong>Remote freelancers serving Nebraska clients:</strong> If
          you're an out-of-state freelancer with a Nebraska client, Nebraska's
          long-arm statute (Neb. Rev. Stat. § 25-536) allows Nebraska courts
          to exercise jurisdiction over defendants with sufficient minimum
          contacts — which includes commissioning work from a Nebraska-based
          business
        </li>
      </ul>

      <h2>When to Escalate Beyond a Demand Letter</h2>

      <p>
        If your demand letter doesn't produce payment within the stated
        deadline, Nebraska offers clear next steps:
      </p>

      <ul>
        <li>
          <strong>Under $3,900:</strong> File in County Court Small Claims
          Department — $31 filing fee, no attorney required, hearing typically
          within 30–60 days
        </li>
        <li>
          <strong>$3,901–$56,000:</strong> File in County Court as a regular
          civil case — Nebraska County Courts have jurisdiction up to $56,000
          (Neb. Rev. Stat. § 24-517)
        </li>
        <li>
          <strong>Over $56,000:</strong> File in Nebraska District Court — this
          requires an attorney and formal litigation
        </li>
        <li>
          <strong>NCPA claim:</strong> If the client's behavior was deceptive
          (e.g., they commissioned work knowing they couldn't pay), include an
          NCPA claim to access attorney fee recovery under Neb. Rev. Stat.
          § 59-1609
        </li>
      </ul>

      <p>
        Nebraska may not be the largest market for freelancers, but its
        straightforward court system, reasonable small claims process, and
        consumer protection act with attorney fee provisions make it a
        freelancer-friendly jurisdiction for collecting unpaid invoices. A
        well-drafted demand letter that cites Nebraska's specific statutes —
        particularly the NCPA's attorney fee provision and the efficient
        $3,900 small claims process — creates meaningful leverage that often
        resolves disputes without litigation. Whether you're a developer in
        Omaha's Blackstone District, a designer serving Lincoln's startup
        scene, or a photographer capturing the Sandhills, Nebraska's legal
        system gives freelancers real tools to get paid.
      </p>
    </ArticleLayout>
  );
}
