import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-nevada")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-nevada">
      <p>
        You're a freelance videographer in Las Vegas, and a casino marketing
        agency owes you $9,200 for three promotional videos you delivered four
        months ago — they're already running on YouTube, generating hundreds of
        thousands of views, and bringing in new clients for the agency. Your
        last two invoices got "we'll process it next week." It's time for a
        demand letter — and if you're in Nevada, you're holding a strong hand:
        a $10,000 small claims limit (NRS 73.010), post-judgment interest tied
        to the prime rate plus 2% (NRS 99.040), and a Deceptive Trade Practices
        Act (NRS 598.0903–598.0999) that can triple your damages plus attorney
        fees for willful misconduct. With over 80,000 independent workers in
        the Las Vegas metro area alone — from videographers and web developers
        to entertainment contractors serving the Strip — Nevada's freelance
        economy is massive, and a demand letter that cites NRS 598 commands
        attention. Here's exactly how Nevada freelancers write a demand letter
        that leverages every tool the Silver State provides.
      </p>

      <h2>Nevada Small Claims Court: $10,000 Limit</h2>

      <p>
        Nevada's small claims system operates through Justice Courts under NRS
        73.010 with a jurisdictional limit of <strong>$10,000</strong> — tied
        for one of the highest in the nation and covering virtually all
        freelance disputes from web design contracts to multi-month marketing
        retainers. Here's what every Nevada freelancer needs to know:
      </p>

      <ul>
        <li><strong>Filing fee:</strong> $66–$196 depending on the claim amount, waived for indigent plaintiffs</li>
        <li><strong>No attorneys allowed</strong> in small claims court — both parties represent themselves, leveling the field against corporate defendants with in-house counsel</li>
        <li><strong>Venue:</strong> file in the township where the defendant resides, does business, or where the contract was performed — for most freelancers, this means the Las Vegas, Henderson, or Reno Justice Courts</li>
        <li><strong>Mediation may be ordered</strong> before trial — many Nevada Justice Courts require the parties to attempt settlement through court-sponsored mediation first</li>
        <li><strong>Appeal:</strong> either party can appeal a small claims judgment to district court for a trial de novo (new trial) — rare in practice because of the cost and time</li>
      </ul>

      <p>
        For claims above $10,000, you'll file in Nevada District Court. But the
        threat of treble damages under the Nevada Deceptive Trade Practices Act
        can push the effective exposure well above $10,000 even for claims that
        fall within the small claims limit — making a demand letter that cites
        NRS 598 particularly effective at producing payment without litigation.
      </p>

      <h2>Nevada Deceptive Trade Practices Act (NRS 598): Treble Damages</h2>

      <p>
        Nevada's Deceptive Trade Practices Act (NRS 598.0903–598.0999) is a
        powerful consumer protection statute that also reaches
        business-to-business transactions when deceptive conduct is involved.
        For freelancers, this is a critical tool: if a client made false
        promises about payment terms, misrepresented their ability to pay, or
        engaged in any deceptive practice related to the contract, you can seek
        <strong>treble damages</strong> (three times your actual damages) plus
        attorney fees and costs under NRS 598.0999.
      </p>

      <p>Key NRS 598 provisions for freelancers:</p>

      <ul>
        <li><strong>NRS 598.0915</strong> — defines deceptive trade practices broadly, including knowingly making false representations about goods or services, failing to deliver goods or services after accepting payment, and making misleading statements of fact</li>
        <li><strong>NRS 598.0923</strong> — specifically prohibits representing that a transaction involves rights or remedies that it does not — relevant when a client falsely claims a contract lets them withhold payment</li>
        <li><strong>NRS 598.0999</strong> — authorizes a private right of action for any person who is a victim of a deceptive trade practice, with recovery of actual damages, treble damages for willful violations, and mandatory attorney fees and costs</li>
        <li><strong>NRS 598.0975</strong> — allows the Nevada Attorney General to bring enforcement actions, which means the statute has teeth; citing it signals you understand the enforcement landscape</li>
        <li><strong>Civil penalty:</strong> in addition to treble damages, willful violations can result in civil penalties of up to $5,000 per violation under NRS 598.0999(3)</li>
      </ul>

      <p>
        The critical difference between Nevada's DTPA and many other state
        consumer protection statutes: <strong>NRS 598 does not require a formal
        pre-suit notice letter before filing a lawsuit</strong>. This means your
        demand letter is purely strategic — you're giving the client one final
        chance to pay before you file, not satisfying a statutory prerequisite.
        That said, a demand letter that lays out the NRS 598 claim in detail
        (showing the math: $9,200 × 3 = $27,600 in treble damages plus your
        attorney fees) is often the most powerful single-page document you can
        send.
      </p>

      <h2>Statutory Interest in Nevada: Prime Rate + 2%</h2>

      <p>
        Nevada's statutory interest framework is set by NRS 99.040, which
        establishes the legal rate of interest at the <strong>prime rate as
        published by the Federal Reserve plus 2%</strong> for judgments entered
        in Nevada courts. For prejudgment interest (interest that accrues
        before you get a judgment), Nevada courts have discretion to award it
        under NRS 17.130 when the damages are liquidated or readily calculable
        — and an unpaid freelance invoice with a fixed dollar amount is the
        classic example of a liquidated claim.
      </p>

      <ul>
        <li><strong>Post-judgment interest:</strong> prime rate + 2% per year, recalculated annually</li>
        <li><strong>Prejudgment interest:</strong> discretionary, but routinely awarded on liquidated claims like unpaid invoices — include a specific dollar figure for accrued interest in your demand letter</li>
        <li><strong>Contractual interest:</strong> if your freelance contract specifies an interest rate for late payments, Nevada courts will generally enforce it as long as it's not unconscionable</li>
      </ul>

      <h2>Statute of Limitations: 6 Years for Written Contracts</h2>

      <p>
        Under NRS 11.190(1)(b), Nevada gives freelancers a generous
        <strong>6-year statute of limitations</strong> for claims based on
        written contracts. This is longer than most states (where 3-5 years is
        common) and gives you substantial breathing room. For oral contracts,
        the limitation period is 4 years under NRS 11.190(2)(c). The clock
        starts running from the date of breach — when payment was due and not
        received.
      </p>

      <ul>
        <li><strong>Written contracts:</strong> 6 years from the date of breach</li>
        <li><strong>Oral contracts:</strong> 4 years from the date of breach</li>
        <li><strong>DTPA claims (NRS 598):</strong> 4 years from the date the deceptive practice was discovered or reasonably should have been discovered (NRS 11.190(2)(d))</li>
        <li><strong>Partial payment:</strong> any partial payment restarts the statute of limitations clock</li>
      </ul>

      <h2>How to Write a Nevada Demand Letter: 7 Elements</h2>

      <p>
        A Nevada demand letter that cites NRS 598 is fundamentally different
        from a standard invoice reminder. It communicates: "I understand the
        Nevada statutes that apply to this situation, I've calculated my legal
        damages (including treble exposure under the DTPA), and I am fully
        prepared to file in Justice Court if this isn't resolved." Here are the
        seven elements every Nevada demand letter must include:
      </p>

      <ol>
        <li><strong>Clear statement of the debt:</strong> the exact dollar amount owed, the invoice numbers, dates of service, and a brief description of the work performed</li>
        <li><strong>Contractual basis:</strong> reference the contract, statement of work, or email chain that established the payment obligation — if it's a written agreement, say so explicitly (this triggers the 6-year statute of limitations)</li>
        <li><strong>NRS 598 DTPA notice:</strong> if the client made any representations about payment timing or ability to pay that turned out to be false, state that this constitutes a deceptive trade practice under NRS 598.0915, and that willful violations are subject to treble damages plus attorney fees under NRS 598.0999</li>
        <li><strong>Treble damages calculation:</strong> show the math — your actual damages ($X), trebled ($X × 3 = $3X), plus reasonable attorney fees — so the recipient understands the exposure they're facing if you litigate</li>
        <li><strong>Interest calculation:</strong> calculate accrued interest using Nevada's prime + 2% rate (or your contractual rate if higher) from the date payment was due through the date of the letter</li>
        <li><strong>Firm deadline:</strong> give 14 calendar days to pay in full — this is reasonable under Nevada's standard commercial practices and shows you're not demanding immediate payment, just prompt payment</li>
        <li><strong>Consequences paragraph:</strong> state clearly that if payment is not received by the deadline, you will file a complaint in the appropriate Nevada Justice Court seeking the full amount plus treble damages under NRS 598, prejudgment interest, court costs, and attorney fees — and that judgment liens in Nevada are good for 6 years and attach to real property</li>
      </ol>

      <h2>Las Vegas, Reno, and Henderson: Filing in the Right Court</h2>

      <p>
        Nevada's Justice Courts are organized by township. Filing in the wrong
        one will get your case dismissed, so here's what freelancers in
        Nevada's three largest metro areas need to know:
      </p>

      <ul>
        <li><strong>Las Vegas Township Justice Court</strong> (Clark County) — serves the Las Vegas Strip, downtown Las Vegas, and surrounding areas. This is where most freelance disputes in southern Nevada are filed. The court handles thousands of small claims per year and is well-versed in contract disputes.</li>
        <li><strong>Henderson Justice Court</strong> (Clark County) — serves Henderson and Green Valley. If the defendant is based in Henderson, file here.</li>
        <li><strong>Reno Justice Court</strong> (Washoe County) — serves Reno and Sparks. Northern Nevada's primary venue for small claims.</li>
        <li><strong>North Las Vegas Justice Court</strong> (Clark County) — serves North Las Vegas. Separate from Las Vegas Township.</li>
      </ul>

      <h2>When to Name the Business Owner Individually</h2>

      <p>
        In Nevada, you can name both the business entity (LLC, corporation) and
        the individual owner or officer as defendants if you can show the
        individual personally engaged in the deceptive practice. This is
        critical for freelancers dealing with small agencies and consulting
        firms. Under NRS 598, an individual who directly participated in or
        authorized a deceptive trade practice can be held personally liable —
        even if the business is an LLC. Your demand letter should be addressed
        to both the business entity and the individual owner/decision-maker.
        This closes the "I'll dissolve the LLC and walk away" loophole that
        unscrupulous clients sometimes attempt.
      </p>

      <h2>Key Takeaways for Nevada Freelancers</h2>

      <ul>
        <li><strong>Use the $10,000 small claims limit to your advantage.</strong> Most freelance disputes fall well within this range, and the no-attorney rule means corporate defendants face you on equal footing — without their legal team in the courtroom.</li>
        <li><strong>Lead with NRS 598 in your demand letter.</strong> Nevada's Deceptive Trade Practices Act doesn't require pre-suit notice, so a demand letter that cites it signals you're choosing negotiation over litigation — for now. The treble damages calculation ($X × 3 + attorney fees) is the single most persuasive number in the letter.</li>
        <li><strong>Calculate interest explicitly.</strong> At prime + 2%, even a few months of non-payment adds up — and showing a precise interest calculation signals competence and preparation, which encourages settlement.</li>
        <li><strong>Name individuals, not just the business.</strong> NRS 598 reaches individuals who personally participated in deceptive conduct. Your demand letter should go to both the entity and the owner.</li>
        <li><strong>Don't wait.</strong> While Nevada's 6-year statute of limitations for written contracts is generous, the 4-year limit on DTPA claims and the practical difficulty of collecting older debts mean you should send a demand letter as soon as a client goes 30 days past due. The faster you act, the higher your recovery rate.</li>
      </ul>

      <p>
        A well-written Nevada demand letter that references the Deceptive Trade
        Practices Act, calculates treble damages, and names both the business
        entity and the individual decision-maker is one of the most powerful
        freelancer tools in the country. The Silver State's $10,000 small claims
        limit and its willingness to triple damages for deceptive conduct mean
        that a single-page letter is often all it takes to convert a non-paying
        client into a prompt payment — no court appearance required.
      </p>
    </ArticleLayout>
  );
}
