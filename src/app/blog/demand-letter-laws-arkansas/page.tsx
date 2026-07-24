import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-arkansas")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-arkansas">
      <p>
        You're a freelance web developer in Fayetteville, and a Little Rock
        marketing agency owes you $4,200 for a complete website redesign you
        delivered three months ago. The site is live, your invoice is 90 days
        past due, and their accounts-payable contact has gone radio silent.
        Arkansas law gives freelancers a solid but often overlooked toolkit:
        a $5,000 small claims limit (Ark. Code Ann. § 16-17-704), 6%
        pre-judgment interest on contract claims (Ark. Code Ann. § 16-65-114),
        a 5-year statute of limitations for written contracts (Ark. Code Ann.
        § 16-56-111), and the Arkansas Deceptive Trade Practices Act (Ark. Code
        Ann. § 4-88-101) which provides a private right of action with actual
        damages or a $200 statutory floor plus attorney fees. From Northwest
        Arkansas's booming tech corridor — anchored by Walmart, Tyson, and J.B.
        Hunt — to Little Rock's growing startup scene, the Natural State's
        freelance economy punches above its weight. A demand letter that cites
        the ADTPA with its mandatory minimum damages and attorney fee
        provisions signals a freelancer who understands Arkansas's uniquely
        consumer-protective posture. Here's exactly how Arkansas freelancers
        write a demand letter that gets results.
      </p>

      <h2>Arkansas Small Claims Court: $5,000 Limit</h2>

      <p>
        Arkansas's small claims process operates through the District Court
        system under Ark. Code Ann. § 16-17-704 with a jurisdictional limit of{" "}
        <strong>$5,000</strong> — right at the national median and sufficient
        to cover the majority of freelance disputes. Here's what every Arkansas
        freelancer needs to know:
      </p>

      <ul>
        <li>
          <strong>Filing fee:</strong> Typically $30–$65 depending on the
          county and claim amount, payable to the District Court Clerk in the
          county where the defendant resides or does business
        </li>
        <li>
          <strong>Attorneys permitted:</strong> Unlike Oklahoma, Arkansas allows
          attorney representation in small claims court — which cuts both ways.
          Freelancers can bring counsel, but so can the non-paying client. This
          makes the demand letter even more critical as a pre-litigation
          settlement lever
        </li>
        <li>
          <strong>Hearing timeline:</strong> Typically 30–60 days after filing;
          Arkansas District Courts prioritize small claims and aim for efficient
          resolution
        </li>
        <li>
          <strong>Venue:</strong> File in the county where the defendant resides
          or where the contract was to be performed — for remote freelancers
          serving Arkansas clients, the defendant's county controls
        </li>
        <li>
          <strong>Appeal:</strong> Either party may appeal a District Court
          judgment to the Circuit Court within 30 days, where the case is heard
          de novo — this is a significant consideration since attorney
          representation creates more appeal risk
        </li>
      </ul>

      <h2>Arkansas Statutory Interest: Pre-Judgment and Post-Judgment</h2>

      <p>
        Arkansas provides clear interest statutes every freelancer should
        understand and cite in a demand letter:
      </p>

      <ul>
        <li>
          <strong>Pre-judgment interest (Ark. Code Ann. § 16-65-114):</strong>{" "}
          6% per annum on contract claims from the date payment was due.
          Importantly, this accrues from the date of breach — not from judgment —
          meaning a 90-day overdue $4,200 invoice already carries approximately
          $62 in accrued interest, and that number grows every month the client
          delays
        </li>
        <li>
          <strong>Post-judgment interest (Ark. Code Ann. § 16-65-114):</strong>{" "}
          10% per annum on judgments, or the contract rate if higher — this is one
          of the higher post-judgment rates in the region and creates meaningful
          pressure to settle before trial
        </li>
        <li>
          <strong>Contractual interest:</strong> If your freelance contract
          specifies a late-payment interest rate, Arkansas courts will enforce it
          provided it doesn't exceed Arkansas's usury limit (Ark. Const. Art. 19,
          § 13 caps general interest at 17%; the cap is 5% above the Federal
          Reserve discount rate for consumer transactions)
        </li>
      </ul>

      <h2>Arkansas Deceptive Trade Practices Act: Ark. Code Ann. § 4-88-101</h2>

      <p>
        The Arkansas Deceptive Trade Practices Act (ADTPA), codified at Ark.
        Code Ann. § 4-88-101 through § 4-88-115, is Arkansas's consumer
        protection statute and a powerful tool for freelancers. It prohibits
        deceptive and unconscionable trade practices and provides a
        <strong>private right of action</strong> with statutory minimum damages
        and attorney fees.
      </p>

      <p>Key provisions freelancers must know:</p>

      <ul>
        <li>
          <strong>Private right of action:</strong> Ark. Code Ann. § 4-88-107(a)
          allows any person who suffers actual damage from a deceptive trade
          practice to bring a civil action — this includes freelancers whose
          clients misrepresented their intent or ability to pay
        </li>
        <li>
          <strong>Statutory minimum damages:</strong> Ark. Code Ann. § 4-88-107(a)
          provides recovery of actual damages <em>or</em> $200, whichever is
          greater — this floor ensures even small freelance claims are worth
          pursuing under the Act
        </li>
        <li>
          <strong>Attorney fees:</strong> Ark. Code Ann. § 4-88-107(e) authorizes
          attorney fees and costs for prevailing plaintiffs, shifting significant
          litigation risk to the non-paying client
        </li>
        <li>
          <strong>Deceptive practices defined:</strong> Ark. Code Ann. § 4-88-107(b)
          lists prohibited practices including knowingly making false
          representations about goods or services. For freelancers, a client who
          commissions work with no intention or ability to pay may fall within
          the ADTPA's scope
        </li>
        <li>
          <strong>Statute of limitations:</strong> 5 years (Ark. Code Ann.
          § 4-88-115) — matching the written contract SOL, giving freelancers
          a comfortable window to pursue both contract and ADTPA claims
          simultaneously
        </li>
      </ul>

      <h2>Arkansas Statute of Limitations: 5 Years for Written Contracts</h2>

      <p>
        Ark. Code Ann. § 16-56-111 provides a <strong>5-year statute of
        limitations</strong> for actions founded on a written contract. This
        mirrors the ADTPA's 5-year SOL and is the standard for contract actions
        in Arkansas. Oral contracts carry a 3-year limitation (Ark. Code Ann.
        § 16-56-105) — another reason every freelancer should insist on written
        agreements. For partial payment or written acknowledgment of the debt,
        Arkansas recognizes that the limitations period may restart — so keep
        every email, text message, and partial payment record.
      </p>

      <h2>What to Include in an Arkansas Demand Letter</h2>

      <p>
        An effective Arkansas demand letter should cite the specific statutes
        that create maximum leverage. Here's the structure:
      </p>

      <ol>
        <li>
          <strong>Contract details:</strong> Date of agreement, scope of work,
          deliverables completed, and payment terms — establish the written
          contract to secure the 5-year SOL under Ark. Code Ann. § 16-56-111
        </li>
        <li>
          <strong>Amount owed and interest:</strong> State the exact amount,
          including any contractual late fees and pre-judgment interest at the
          6% statutory rate (Ark. Code Ann. § 16-65-114) — calculate the
          running interest to demonstrate it grows with every passing day
        </li>
        <li>
          <strong>Payment deadline:</strong> Set a reasonable deadline (14–30
          days) for payment — Arkansas courts expect good-faith negotiation
          before litigation
        </li>
        <li>
          <strong>ADTPA statutory damages:</strong> Cite the Arkansas Deceptive
          Trade Practices Act (Ark. Code Ann. § 4-88-107) including the $200
          statutory minimum damages and the attorney fee provision — even though
          treble damages aren't available under the ADTPA (unlike Oklahoma's
          OCPA), the attorney fee threat is significant
        </li>
        <li>
          <strong>Attorney fee exposure:</strong> Mention that the ADTPA makes
          attorney fees recoverable for prevailing plaintiffs (Ark. Code Ann.
          § 4-88-107(e)) — this warns the client that their litigation costs
          will compound while yours shift to them
        </li>
        <li>
          <strong>Small claims path:</strong> Reference the $5,000 small claims
          limit (Ark. Code Ann. § 16-17-704) and the District Court's efficient
          process — signaling you can pursue this quickly and inexpensively,
          with or without an attorney
        </li>
      </ol>

      <h2>Arkansas-Specific Considerations for Freelancers</h2>

      <ul>
        <li>
          <strong>Northwest Arkansas's tech boom:</strong> The Fayetteville–
          Springdale–Rogers corridor is one of the fastest-growing metro areas
          in the country, fueled by Walmart's global headquarters, Tyson Foods,
          J.B. Hunt, and a rapidly expanding startup ecosystem. Freelancers
          serving this market should use written contracts with Arkansas
          governing-law clauses — verbal handshake deals are common in the
          tight-knit NWA business community but create proof problems
        </li>
        <li>
          <strong>Little Rock's government and startup scene:</strong> The
          capital city has a growing concentration of fintech and healthtech
          startups alongside state government contracts. Government clients
          follow different payment rules — freelancers with state contracts
          should understand Arkansas's prompt-payment statute (Ark. Code Ann.
          § 19-4-1416) which requires state agencies to pay within 45 days
        </li>
        <li>
          <strong>Rural freelancer outreach:</strong> Outside NWA and Central
          Arkansas, many freelancers operate in smaller rural communities
          where business is often done on trust. Arkansas courts are
          comfortable with self-represented litigants in small claims, making
          the demand-letter-to-small-claims pipeline accessible even in
          counties with fewer legal resources
        </li>
        <li>
          <strong>Attorney representation reality:</strong> Because Arkansas
          permits attorneys in small claims, a well-cited demand letter serves
          a dual purpose: it attempts settlement <em>and</em> demonstrates to
          the court that you made a good-faith effort to resolve the dispute
          without litigation — a factor Arkansas judges weigh heavily
        </li>
      </ul>

      <h2>When to Escalate Beyond a Demand Letter</h2>

      <p>
        If your demand letter doesn't produce payment within the stated
        deadline, Arkansas offers clear next steps:
      </p>

      <ul>
        <li>
          <strong>Under $5,000:</strong> File in District Court — Small Claims
          Division. Filing fee typically $30–$65. You may represent yourself or
          bring an attorney. The process is straightforward and designed for
          self-represented litigants
        </li>
        <li>
          <strong>$5,001 and above:</strong> File in Circuit Court as a regular
          civil case — this requires an attorney for most litigants and involves
          formal discovery, but opens access to full ADTPA remedies including
          the $200 statutory minimum and attorney fees
        </li>
        <li>
          <strong>ADTPA claim:</strong> If the client's behavior was deceptive —
          e.g., they commissioned work knowing they couldn't or wouldn't pay —
          include an ADTPA claim. While Arkansas doesn't offer treble damages
          like Oklahoma, the combination of statutory minimum damages ($200),
          attorney fees, and post-judgment interest at 10% creates substantial
          pressure to settle
        </li>
        <li>
          <strong>Contract + ADTPA together:</strong> Plead both breach of
          contract and ADTPA violations in the alternative — the ADTPA claim
          unlocks attorney fees that a pure contract claim doesn't. Arkansas
          courts routinely hear both theories in the same case
        </li>
      </ul>

      <p>
        Arkansas's legal toolkit for freelancers is stronger than its modest
        reputation suggests. The $5,000 small claims limit covers the vast
        majority of freelance invoices, the ADTPA's $200 statutory minimum
        ensures even small claims generate meaningful consequences for
        non-paying clients, and the 10% post-judgment interest rate creates
        genuine urgency to resolve disputes before trial. A demand letter that
        names these statutes specifically — particularly the ADTPA with its
        attorney fee provision — often resolves disputes without a single court
        filing. Whether you're a UX designer in Bentonville's innovation
        district, a copywriter serving Little Rock's agency scene, or a
        photographer shooting the Ozark Mountains, Arkansas's legal system
        gives freelancers real, enforceable tools to get paid.
      </p>
    </ArticleLayout>
  );
}
