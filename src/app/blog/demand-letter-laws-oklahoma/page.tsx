import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-oklahoma")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-oklahoma">
      <p>
        You're a freelance graphic designer in Oklahoma City, and an energy
        consulting firm in Tulsa owes you $8,500 for a full rebranding package
        you delivered four months ago. They've launched the new branding across
        all their channels, your invoice is 120 days past due, and their
        procurement manager has stopped returning your calls. Oklahoma law
        gives freelancers one of the strongest toolkits in the region: a
        $10,000 small claims limit (Okla. Stat. tit. 12, § 1751), 6%
        pre-judgment interest on liquidated demands (Okla. Stat. tit. 15,
        § 266), a 5-year statute of limitations for written contracts (Okla.
        Stat. tit. 12, § 95), and the Oklahoma Consumer Protection Act (Okla.
        Stat. tit. 15, § 751) which can award treble damages plus attorney fees
        for deceptive trade practices. From Oklahoma City's growing tech and
        energy corridor to Tulsa's arts and startup scene, the Sooner State's
        freelance community is surprisingly robust — and a demand letter that
        cites the Oklahoma Consumer Protection Act with its treble damages
        provision signals a freelancer who knows exactly how to turn a $10,000
        claim into a $30,000 problem for the non-paying client. Here's exactly
        how Oklahoma freelancers write a demand letter that gets results.
      </p>

      <h2>Oklahoma Small Claims Court: $10,000 Limit</h2>

      <p>
        Oklahoma's small claims process operates under Okla. Stat. tit. 12,
        § 1751 with a jurisdictional limit of <strong>$10,000</strong> — one of
        the highest in the Great Plains region and among the most
        freelancer-friendly in the country. This covers nearly all freelance
        disputes. Here's what every Oklahoma freelancer needs to know:
      </p>

      <ul>
        <li>
          <strong>Filing fee:</strong> Approximately $58 for claims up to
          $1,500, scaling to about $98 for claims up to $10,000, payable to
          the Court Clerk in the county where the defendant resides or does
          business
        </li>
        <li>
          <strong>No attorneys permitted:</strong> Oklahoma's small claims
          rules prohibit attorney representation in small claims court — both
          sides present their case directly to the judge, which levels the
          playing field for freelancers
        </li>
        <li>
          <strong>Hearing timeline:</strong> Typically 30–60 days after filing;
          Oklahoma courts are known for their efficiency in small claims
          matters
        </li>
        <li>
          <strong>Venue:</strong> File in the county where the defendant
          resides or where the contract was to be performed — for remote
          freelancers serving Oklahoma clients, the defendant's county
          controls
        </li>
        <li>
          <strong>Appeal:</strong> Either party may appeal a small claims
          judgment to the District Court within 30 days (Okla. Stat. tit. 12,
          § 1757), where the case is tried de novo and attorneys may
          participate
        </li>
      </ul>

      <h2>Oklahoma Statutory Interest: Pre-Judgment and Post-Judgment</h2>

      <p>
        Oklahoma law provides two distinct interest mechanisms freelancers
        should understand and cite:
      </p>

      <ul>
        <li>
          <strong>Pre-judgment interest (Okla. Stat. tit. 15, § 266):</strong>{" "}
          6% per annum on liquidated damages — meaning the amount must be
          certain or capable of being made certain by calculation. Your
          freelance invoice, with its fixed amount, qualifies. If your contract
          specifies a different interest rate, that rate governs up to
          Oklahoma's usury limit
        </li>
        <li>
          <strong>Post-judgment interest (Okla. Stat. tit. 12, § 727):</strong>{" "}
          Interest accrues on judgments at the U.S. Treasury constant maturity
          rate plus 2%, adjusted annually. As of mid-2026, this is roughly
          7–8%, making it a meaningful incentive for clients to pay before
          judgment
        </li>
        <li>
          <strong>Contractual interest:</strong> If your freelance contract
          includes a late-payment interest clause, it governs — and Oklahoma's
          courts enforce reasonable contractual interest rates as long as they
          don't violate the state's usury statute (Okla. Stat. tit. 14A, § 3-201)
        </li>
      </ul>

      <h2>Oklahoma Consumer Protection Act: Okla. Stat. tit. 15, § 751</h2>

      <p>
        The Oklahoma Consumer Protection Act (OCPA), found at Okla. Stat. tit.
        15, § 751 through § 764.1, is the state's powerhouse for freelancers
        dealing with deceptive clients. It prohibits deceptive trade practices
        — defined broadly enough to cover a client who misrepresents their
        ability or intent to pay — and provides <strong>treble damages</strong>{" "}
        plus mandatory attorney fees.
      </p>

      <p>Key provisions freelancers must know:</p>

      <ul>
        <li>
          <strong>Private right of action:</strong> Okla. Stat. tit. 15,
          § 761.1 allows any person who suffers damages as a result of a
          deceptive trade practice to bring a civil action
        </li>
        <li>
          <strong>Treble damages:</strong> The court may award up to three
          times the actual damages sustained — this is the single most
          valuable tool in your demand letter. A $10,000 unpaid invoice becomes
          a potential $30,000 liability plus attorney fees
        </li>
        <li>
          <strong>Mandatory attorney fees:</strong> Unlike Nebraska where fees
          are discretionary, Oklahoma's OCPA makes attorney fee awards
          mandatory for the prevailing party — this shifts significant
          litigation risk to the non-paying client
        </li>
        <li>
          <strong>Deceptive trade practices defined:</strong> Okla. Stat. tit.
          15, § 753 includes a list of prohibited practices. For freelancers,
          the most relevant is § 753(5): knowingly making false
          representations as to the characteristics or benefits of goods or
          services — which can apply when a client represents they can and will
          pay but never intended to
        </li>
        <li>
          <strong>Statute of limitations:</strong> 3 years for OCPA claims
          (Okla. Stat. tit. 15, § 761.2) — shorter than the 5-year contract
          SOL, so pursue OCPA claims promptly
        </li>
      </ul>

      <h2>Oklahoma Statute of Limitations: 5 Years for Written Contracts</h2>

      <p>
        Okla. Stat. tit. 12, § 95 provides a <strong>5-year statute of
        limitations</strong> for actions founded on a written contract. This
        gives freelancers a comfortable window to pursue unpaid invoices —
        longer than OCPA claims (3 years) and equal to the standard for
        contract actions in most states. However, because the OCPA provides
        treble damages, you should pursue consumer protection claims before
        the third year.
      </p>

      <h2>What to Include in an Oklahoma Demand Letter</h2>

      <p>
        An effective Oklahoma demand letter should cite the specific statutes
        that create maximum leverage. Here's the structure:
      </p>

      <ol>
        <li>
          <strong>Contract details:</strong> Date of agreement, scope of work,
          deliverables completed, and payment terms — establish the written
          contract to secure the 5-year SOL under Okla. Stat. tit. 12, § 95
        </li>
        <li>
          <strong>Amount owed and interest:</strong> State the exact amount,
          including any contractual late fees or pre-judgment interest at the
          6% statutory rate (Okla. Stat. tit. 15, § 266)
        </li>
        <li>
          <strong>Payment deadline:</strong> Set a reasonable deadline (14–30
          days) for payment — Oklahoma courts expect good-faith negotiation
          before litigation
        </li>
        <li>
          <strong>OCPA treble damages:</strong> Cite the Oklahoma Consumer
          Protection Act (Okla. Stat. tit. 15, § 751) and its treble damages
          provision — multiplying the outstanding amount by three sends a
          powerful message
        </li>
        <li>
          <strong>Attorney fee exposure:</strong> Mention that the OCPA makes
          attorney fees mandatory for the prevailing party (Okla. Stat. tit.
          15, § 761.1) — this warns the client that their litigation costs will
          compound
        </li>
        <li>
          <strong>Small claims path:</strong> Reference the $10,000 small
          claims limit (Okla. Stat. tit. 12, § 1751) and the no-attorney rule
          — signaling you can pursue this efficiently and inexpensively
        </li>
      </ol>

      <h2>Oklahoma-Specific Considerations for Freelancers</h2>

      <ul>
        <li>
          <strong>Oklahoma City's diversified economy:</strong> OKC has a
          strong mix of energy, aviation (Tinker AFB, Boeing), healthcare
          (OU Medical Center), and tech. Freelancers serving these sectors
          should use net-30 terms and specify Oklahoma governing law in
          contracts
        </li>
        <li>
          <strong>Tulsa's arts and tech renaissance:</strong> Tulsa has
          invested heavily in its tech ecosystem through programs like Tulsa
          Remote, attracting freelancers and remote workers from across the
          country. The city's creative and startup scenes make written
          contracts essential — verbal agreements are common in creative
          gigs but create problems under Oklahoma law
        </li>
        <li>
          <strong>Energy sector volatility:</strong> Oklahoma's energy
          economy can be cyclical. Freelancers serving oil and gas companies
          should consider requiring retainers or milestone-based payments to
          limit exposure during industry downturns
        </li>
        <li>
          <strong>Tribal jurisdiction considerations:</strong> Oklahoma has
          the largest Native American population and tribal land area of any
          state. If your client is a tribal entity or the work was performed on
          tribal land, jurisdictional issues may arise — consult an attorney
          familiar with Indian Country law if the client is tribally affiliated
        </li>
      </ul>

      <h2>When to Escalate Beyond a Demand Letter</h2>

      <p>
        If your demand letter doesn't produce payment within the stated
        deadline, Oklahoma offers clear next steps:
      </p>

      <ul>
        <li>
          <strong>Under $10,000:</strong> File in Small Claims Division of the
          District Court — filing fee starting around $58, no attorneys
          permitted, straightforward process designed for self-represented
          litigants
        </li>
        <li>
          <strong>$10,001 and above:</strong> File in Oklahoma District Court
          as a regular civil case — this requires an attorney and formal
          litigation but opens access to full OCPA remedies including treble
          damages and mandatory attorney fees
        </li>
        <li>
          <strong>OCPA claim:</strong> If the client's behavior was deceptive —
          e.g., they commissioned work knowing they couldn't or wouldn't pay —
          include an OCPA claim to access treble damages (up to $30,000 on
          a $10,000 invoice) and mandatory attorney fees under Okla. Stat. tit.
          15, § 761.1
        </li>
        <li>
          <strong>Attorney fee strategy:</strong> Under the OCPA, the
          prevailing party gets mandatory attorney fees. This means if your
          case is strong, the client must pay not only the judgment but your
          legal costs — a powerful incentive to settle before litigation
        </li>
      </ul>

      <p>
        Oklahoma's legal toolkit for freelancers is significantly stronger
        than many realize. The combination of a $10,000 small claims limit
        (covering nearly every freelance dispute), the Oklahoma Consumer
        Protection Act's treble damages provision (turning a $10,000 claim
        into a potential $30,000 liability), and mandatory attorney fee awards
        for prevailing OCPA plaintiffs makes the Sooner State one of the most
        freelancer-friendly jurisdictions in the country. A demand letter that
        names these statutes specifically — particularly the OCPA treble
        damages provision — often resolves disputes without litigation.
        Whether you're a developer in Oklahoma City's Innovation District, a
        designer in Tulsa's Arts District, or a photographer covering the
        Wichita Mountains, Oklahoma's legal system gives freelancers real,
        powerful tools to get paid.
      </p>
    </ArticleLayout>
  );
}
