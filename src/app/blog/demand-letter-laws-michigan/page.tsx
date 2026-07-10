import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-michigan")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-michigan">
      <p>
        You're a freelance UX designer in Detroit and a client owes you $6,200
        for a completed website redesign. You've sent the friendly nudge, the
        itemized follow-up, and now it's been six weeks of silence. It's time
        for a demand letter — and you want to write one that carries real legal
        weight in Michigan. Good call. Michigan has a $7,000 small claims limit
        in district courts (MCL 600.8401), a variable judgment interest rate
        under MCL 600.6013 that automatically applies once a court rules, and
        a 6-year statute of limitations for written contracts — all of which
        shape exactly what an effective Michigan demand letter looks like.
      </p>

      <p>
        This guide covers what Michigan law actually says about demand letters:
        the $7,000 district court small claims threshold, the variable judgment
        interest rate under MCL 600.6013, the 6-year statute of limitations
        (MCL 600.5807(8)), Michigan's treble damages for bounced checks, and
        the specific language that makes your Michigan demand letter impossible
        to ignore.
      </p>

      <h2>Michigan's Small Claims Limit: $7,000 in District Court</h2>

      <p>
        Michigan's small claims court operates through the <strong>District
        Court</strong> system under MCL 600.8401. The jurisdictional limit was
        raised from $6,500 to <strong>$7,000</strong> in 2024, making Michigan
        one of the more generous states for small claims — higher than Ohio
        ($6,000) and New York ($5,000 in town/village courts, though NYC has
        $10,000), but lower than Georgia ($15,000). Your $6,200 invoice falls
        comfortably within the small claims limit.
      </p>

      <p>
        Key Michigan small claims court facts for freelancers:
      </p>
      <ul>
        <li>Limit: <strong>$7,000</strong> in damages (excluding costs and interest)</li>
        <li>Filing fee: $30–$70 depending on the claim amount</li>
        <li>Attorneys are <strong>not allowed</strong> in Michigan small claims court — it's designed for self-representation (MCL 600.8408)</li>
        <li>If the defendant wants a lawyer, the case is automatically moved to the general civil docket</li>
        <li>Statute of limitations for written contracts: <strong>6 years</strong> (MCL 600.5807(8))</li>
        <li>Statute of limitations for oral contracts: 6 years (MCL 600.5807(4))</li>
        <li>Appeals from small claims go to the Circuit Court for a de novo trial</li>
      </ul>

      <p>
        The attorney prohibition is a key Michigan advantage for freelancers.
        Because neither side can bring a lawyer to small claims, you're on
        equal footing with the client — even if they're a large company with
        in-house counsel. In fact, this often makes Michigan demand letters
        more effective: a client who knows they can't bring their lawyer to
        small claims court is more likely to settle before a hearing.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
        <strong>⚠️ Important:</strong> Michigan's small claims attorney
        prohibition means the playing field is genuinely level. A well-documented
        demand letter with clear evidence (contract, invoices, emails, payment
        history) gives you every advantage. The client can't out-lawyer you —
        they can only out-evidence you. Bring everything.
      </div>

      <h2>Michigan Judgment Interest: MCL 600.6013</h2>

      <p>
        Michigan law provides for <strong>automatic interest on money
        judgments</strong> under MCL 600.6013. Unlike Ohio's flat 6% rate,
        Michigan's rate is <strong>variable</strong> — it's calculated based on
        the 5-year United States Treasury Note auction rate plus 1%, and the
        Michigan Department of Treasury recalculates it every January 1 and
        July 1. As of mid-2026, the rate typically ranges from 5% to 7%.
      </p>

      <p>
        Here's what MCL 600.6013 means for your demand letter in practice:
      </p>

      <ul>
        <li>Interest begins accruing from the <strong>date the complaint is
        filed</strong> with the court — not from the invoice due date (MCL
        600.6013(8))</li>
        <li>For <strong>written instruments</strong> (like a signed contract or
        promissory note), interest accrues from the date the instrument becomes
        due — this is a critical distinction for freelancers with signed
        contracts (MCL 600.6013(6))</li>
        <li>The rate changes every January 1 and July 1 — reference the
        Michigan Department of Treasury's published rate as of your demand
        letter's date</li>
        <li>The current rate as of this writing is approximately 5.5% — roughly
        $341/year on a $6,200 claim</li>
      </ul>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4 font-mono text-sm">
        Interest under MCL 600.6013 (July 2026 est.):<br />
        Rate = 5-year T-note auction average + 1% ≈ 5.5% per year<br />
        <em>Example: ($6,200 × 0.055 × 1) = ~$341 per year of litigation</em>
      </div>

      <p>
        Your demand letter should acknowledge that Michigan's interest rate is
        variable under MCL 600.6013, reference the current published rate from
        the Michigan Department of Treasury, and state that interest will
        accrue from the date of filing if litigation becomes necessary. If you
        have a signed contract, assert that interest accrues from the due date
        under MCL 600.6013(6) for written instruments.
      </p>

      <h2>Michigan's 6-Year Statute of Limitations: MCL 600.5807(8)</h2>

      <p>
        Under <strong>MCL 600.5807(8)</strong>, claims based on a written
        contract must be brought within <strong>6 years</strong> from the date
        the claim accrues. For oral contracts, it's also 6 years under MCL
        600.5807(4). This is longer than California's 4-year limit for written
        contracts but shorter than Ohio's generous 8-year window.
      </p>

      <p>
        What this means for Michigan freelancers:
      </p>

      <ul>
        <li>You have 6 years from the date the invoice became past due to file
        a claim — a solid window but not indefinite</li>
        <li>The clock starts when the <strong>cause of action accrues</strong> —
        typically the date payment was due under your contract or invoice</li>
        <li>Part payment or a written acknowledgment of the debt can reset the
        6-year clock under Michigan's partial payment doctrine (MCL
        600.5866)</li>
        <li>For email agreements: Michigan courts have recognized that
        electronic communications can constitute a written contract, but a
        formal signed agreement is always stronger</li>
      </ul>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
        <strong>⚠️ Practical advice:</strong> Six years is plenty of time, but
        don't wait. Evidence gets lost, businesses close, and key people move
        on. Send your Michigan demand letter within 90 days of non-payment — the
        6-year statute is your safety net, not your strategy.
      </div>

      <h2>Michigan's Bounced-Check Treble Damages: MCL 600.2952</h2>

      <p>
        This is Michigan's hidden weapon for freelancers. Under <strong>MCL
        600.2952</strong>, if a client pays you with a check that bounces, you
        can recover <strong>treble damages</strong> (three times the check
        amount) up to $500 in statutory damages on top of the check amount. Many
        freelancers don't know this exists — and including it in your demand
        letter signals that you understand Michigan law beyond basic contract
        principles.
      </p>

      <p>
        How it works:
      </p>
      <ul>
        <li>If the client paid with a bad check (NSF or account closed), send a
        written notice demanding payment within 7 days</li>
        <li>If they don't pay, you can sue for the check amount plus statutory
        damages of up to $500</li>
        <li>For a $2,000 bounced check, you could claim $2,000 (check amount) +
        $500 (statutory damages under MCL 600.2952) = $2,500</li>
        <li>This applies regardless of whether your contract mentions bounced
        checks — it's statutory</li>
      </ul>

      <p>
        If a bounced check is part of your dispute, mention MCL 600.2952 in
        your demand letter and calculate the statutory damages explicitly. It
        transforms a standard breach-of-contract demand into a claim with
        enhanced remedies — and it shows the client you've done your legal
        homework.
      </p>

      <h2>Michigan Consumer Protection Act — Limited B2B Application</h2>

      <p>
        The Michigan Consumer Protection Act (MCPA), MCL 445.903, prohibits
        unfair and deceptive acts in trade or commerce. It allows for actual
        damages, injunctive relief, and attorney fees in consumer transactions.
        However, Michigan courts have generally held that the MCPA applies to
        <strong>consumer transactions</strong> — not business-to-business
        disputes. If your client is a business entity (LLC, corporation), the
        MCPA probably doesn't apply.
      </p>

      <p>
        The exception: if your client hired you as an <strong>individual
        consumer</strong> for personal services (e.g., a personal website, a
        family portrait photography session), the MCPA may apply. In those
        cases, consult a Michigan attorney about potential MCPA claims. For
        typical B2B freelance work, rely on your contract — not the MCPA.
      </p>

      <h2>What a Michigan Demand Letter Must Include</h2>

      <p>
        Michigan district courts don't require a specific demand letter format,
        but a letter with these elements maximizes your leverage:
      </p>

      <ol>
        <li>
          <strong>Clear identification of parties:</strong> your full name or
          business entity name, your address, the client's legal name and
          registered business address. For Michigan LLCs and corporations, you
          can verify business registrations through the Michigan Department of
          Licensing and Regulatory Affairs (LARA) business entity search.
        </li>
        <li>
          <strong>Itemized claim:</strong> list each unpaid invoice by number,
          date, and amount. Include late fees per your contract. If applicable,
          reference bounced-check damages under MCL 600.2952.
        </li>
        <li>
          <strong>Legal basis:</strong> reference your written contract,
          statement of work, or the email approval chain. Note that Michigan's
          6-year statute of limitations under MCL 600.5807(8) confirms the claim
          is timely.
        </li>
        <li>
          <strong>Interest notice:</strong> state: "Under MCL 600.6013, judgment
          interest will accrue at the rate published by the Michigan Department
          of Treasury (currently approximately [X]% per annum) from the date of
          filing should litigation become necessary. If this debt is based on a
          written instrument, interest may accrue from the due date under MCL
          600.6013(6)."
        </li>
        <li>
          <strong>Clear payment deadline:</strong> 14 days from receipt of the
          letter is standard. State what happens after the deadline: filing in
          the appropriate Michigan District Court, Small Claims Division.
        </li>
        <li>
          <strong>Venue statement:</strong> name the specific Michigan District
          Court where venue is proper — e.g., "36th District Court (Detroit)"
          or "Washtenaw County 14A District Court (Ann Arbor)." Venue is proper
          where the defendant resides or where the contract was performed.
        </li>
      </ol>

      <h2>Michigan-Specific Pitfalls to Avoid</h2>

      <h3>1. Assuming the judgment interest rate without checking</h3>
      <p>
        Unlike Ohio's flat 6% rate, Michigan's rate under MCL 600.6013 changes
        every January 1 and July 1. Citing an outdated or incorrect rate
        undermines your credibility. Before writing your demand letter, check
        the Michigan Department of Treasury's current published judgment
        interest rate. As of mid-2026, it's approximately 5.5% — but verify.
      </p>

      <h3>2. Filing in the wrong district</h3>
      <p>
        Michigan has over 100 district courts. Venue is proper where the
        defendant resides or where the contract was performed. If you're in
        Grand Rapids and the client is in Ann Arbor, you likely need to file in
        Washtenaw County — not Kent County. Naming the wrong district court in
        your demand letter signals carelessness. Verify the correct district
        court at courts.michigan.gov before writing.
      </p>

      <h3>3. Missing the bounced-check treble damages</h3>
      <p>
        If a client's check bounced, MCL 600.2952 gives you treble damages
        plus up to $500 in statutory penalties — remedies that go far beyond
        the invoice amount. Many Michigan freelancers fail to claim these in
        their demand letters. Don't leave money on the table. If a bad check is
        part of your claim, include the statutory damages calculation
        explicitly.
      </p>

      <h3>4. Relying on the MCPA for B2B disputes</h3>
      <p>
        The Michigan Consumer Protection Act is powerful — but it's for
        consumers. If your client is a business, citing the MCPA in your demand
        letter weakens your credibility because the statute almost certainly
        doesn't apply. Stick to your contract, the UCC (if applicable), and
        Michigan's interest and bad-check statutes. Leave the MCPA for genuine
        consumer disputes.
      </p>

      <h2>When to Escalate Beyond a Demand Letter in Michigan</h2>

      <p>
        If 14 days pass after a properly-sent Michigan demand letter and
        payment hasn't arrived, your next step is small claims court:
      </p>

      <ul>
        <li>Go to the District Court clerk's office in the county where the
        defendant resides or does business</li>
        <li>File an Affidavit and Claim (Small Claims form DC 84) — available
        at michigan.gov/courtforms</li>
        <li>Pay the filing fee ($30 for claims up to $600; $50 for $600–$1,750;
        $70 for $1,750–$7,000)</li>
        <li>The court schedules a hearing, typically within 30–45 days</li>
        <li>Bring your demand letter, signed contract, invoices, bank records,
        and all correspondence — the attorney prohibition means evidence is
        everything</li>
      </ul>

      <p>
        Your Michigan demand letter is the centerpiece of your small claims
        case. It proves good-faith attempt to resolve before filing. It
        documents exact amounts, legal basis, and interest calculations. It
        establishes the timeline. And in Michigan — where neither side can
        bring a lawyer — a clear, comprehensive demand letter with solid
        documentation often wins before the hearing even starts. The client
        reads it, realizes they can't out-lawyer you, and sends the check.
      </p>

      <h2>Generate Your Michigan Demand Letter — $29</h2>

      <p>
        DemandFlow generates a Michigan-compliant demand letter with all the
        legal language your claim needs: itemized damages, interest calculation
        under MCL 600.6013, the correct District Court venue, bounced-check
        treble damages under MCL 600.2952 where applicable, the 6-year statute
        of limitations reference, and a 14-day payment deadline. Fill in your
        details, download the letter, and give your Michigan invoice the legal
        weight it deserves — $29, one-time, no subscription.
      </p>

      <p>
        <strong>Not legal advice:</strong> This guide and DemandFlow's templates
        are for informational purposes only and do not constitute legal advice.
        For claims near or above the $7,000 small claims limit, bounced-check
        scenarios, or disputes involving the MCPA, consult a Michigan-licensed
        attorney.
      </p>
    </ArticleLayout>
  );
}
