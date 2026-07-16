import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-oregon")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-oregon">
      <p>
        You're a freelance illustrator in Portland's Pearl District, and a
        California-based publishing house owes you $8,400 for a children's book
        you illustrated — delivered six months ago, already in print, selling
        on Amazon. Your last three emails got "processing" auto-replies. It's
        time for a demand letter — and if you're in Oregon, you're holding a
        strong hand: a $10,000 small claims limit (ORS 46.405), 9% statutory
        interest on judgments (ORS 82.010) — one of the highest rates on the
        West Coast — and the Oregon Unlawful Trade Practices Act (ORS 646.608)
        that can triple your damages for deceptive business conduct. Oregon
        combines progressive consumer protections with a freelancer-heavy
        economy (Portland alone has over 60,000 independent workers), and a
        demand letter that cites the UTPA gets attention. Here's exactly how
        Oregon freelancers write a demand letter that leverages every tool the
        Beaver State provides.
      </p>

      <h2>Oregon Small Claims Court: $10,000 Limit</h2>

      <p>
        Oregon's small claims system operates through circuit courts under ORS
        46.405. The jurisdictional limit is <strong>$10,000</strong> — one of
        the most generous in the country, covering nearly all freelance
        disputes from web development contracts to multi-month consulting
        engagements. Here's what every Oregon freelancer needs to know about
        small claims:
      </p>

      <ul>
        <li><strong>Filing fee:</strong> $55–$115 depending on claim amount</li>
        <li><strong>No attorneys allowed</strong> in small claims court — you represent yourself, which levels the playing field against corporate defendants</li>
        <li><strong>Mediation required</strong> before trial in many Oregon counties — a chance to settle without a judgment</li>
        <li><strong>Venue:</strong> file in the county where the defendant resides or does business, or where the contract was performed</li>
        <li><strong>Appeal:</strong> either party can appeal a small claims judgment to circuit court for a new trial (rare in practice)</li>
      </ul>

      <p>
        For amounts above $10,000, you'll need to file in regular circuit court
        — but a well-written demand letter often makes that unnecessary. The
        threat of treble damages under the UTPA can push the effective exposure
        well above $10,000 even for smaller claims, which we'll cover next.
      </p>

      <h2>Oregon Unlawful Trade Practices Act (UTPA): Treble Damages</h2>

      <p>
        Oregon's Unlawful Trade Practices Act (ORS 646.605–646.656) is the
        state's primary consumer protection statute — and it applies to
        business-to-business transactions when the defendant engages in
        deceptive conduct. For freelancers, this is a powerful tool. If a
        client misrepresented their ability to pay, made false promises about
        the scope of work, or engaged in any deceptive practice related to the
        contract, you can seek <strong>treble damages</strong> (three times
        your actual damages) plus attorney fees under ORS 646.638.
      </p>

      <p>Key UTPA provisions for freelancers:</p>

      <ul>
        <li><strong>ORS 646.608(1)</strong> — lists specific deceptive trade practices, including misrepresenting the quality or characteristics of goods/services and making false promises about payment</li>
        <li><strong>ORS 646.638(1)</strong> — allows any person who suffers an "ascertainable loss" from a UTPA violation to bring a private action for actual damages or $200, whichever is greater</li>
        <li><strong>Treble damages:</strong> if the violation was willful, the court may award up to three times actual damages</li>
        <li><strong>Attorney fees:</strong> mandatory for prevailing plaintiffs — this is what makes the UTPA threat credible even for smaller claims</li>
      </ul>

      <p>
        The key phrase in your demand letter: <em>"Pursuant to ORS 646.608
        and 646.638, your conduct may constitute an unlawful trade practice
        entitling me to treble damages plus attorney fees. Continued
        non-payment will be treated as willful."</em> This signals that you
        understand Oregon's consumer protection framework and are prepared
        to use it.
      </p>

      <h2>Statutory Interest: 9% Per Year (ORS 82.010)</h2>

      <p>
        Oregon sets its statutory judgment interest rate at <strong>9% per
        annum</strong> under ORS 82.010 — one of the highest rates on the
        West Coast, tied with California and well above Washington's 12%
        (though WA's applies differently). This rate applies to judgments,
        not pre-judgment interest (which is governed by your contract terms).
        Here's what this means for your demand letter:
      </p>

      <ul>
        <li>On an $8,400 unpaid invoice, 9% annual interest adds $756/year — roughly $63/month</li>
        <li>If the invoice is 12 months overdue, include a line item for $756 in accrued interest</li>
        <li>The interest continues accruing until the judgment is satisfied</li>
        <li>Pre-judgment interest: Oregon courts may award pre-judgment interest at 9% on "liquidated" (fixed-amount) claims from the date payment was due</li>
      </ul>

      <p>
        Your demand letter should state: <em>"Interest accrues at 9% per
        annum under ORS 82.010 from [due date]. As of today, accrued interest
        totals $[amount]. This amount increases by $[daily rate] for each
        additional day of non-payment."</em>
      </p>

      <h2>Statute of Limitations: 6 Years for Written Contracts</h2>

      <p>
        Oregon gives freelancers a generous <strong>6-year statute of
        limitations</strong> for written contracts under ORS 12.080. For oral
        contracts, it's also 6 years (ORS 12.080(1)). For actions based on
        fraud or deceit, it's 2 years from discovery (ORS 12.110). This
        means:
      </p>

      <ul>
        <li>You have 6 years from the date of breach to file a lawsuit on a written contract</li>
        <li>Email chains, signed proposals, and even detailed invoices with terms can constitute a "written contract"</li>
        <li>If your client engaged in fraud (e.g., never intended to pay), the 2-year clock starts when you discover the fraud — not when it occurred</li>
        <li>Don't wait: the longer you wait, the harder it is to collect, regardless of the legal deadline</li>
      </ul>

      <h2>Writing Your Oregon Demand Letter: The Formula</h2>

      <p>
        An effective Oregon demand letter follows this structure. Each section
        builds leverage toward payment — and makes clear what happens if the
        client doesn't comply:
      </p>

      <ol>
        <li>
          <strong>Header:</strong> Your name, address, date. Client's legal
          name and registered address (check the Oregon Secretary of State's
          business registry if they're an LLC or corporation).
        </li>
        <li>
          <strong>Reference line:</strong> "Re: Demand for Payment — Invoice
          #[number], Amount: $[amount]"
        </li>
        <li>
          <strong>Factual summary:</strong> One paragraph. What was the
          contract? What work did you deliver? When was payment due? Attach
          the contract, invoice, and delivery confirmation as exhibits.
        </li>
        <li>
          <strong>Legal basis:</strong> Cite the contract, ORS 82.010
          (interest), ORS 646.608 (UTPA if applicable), and ORS 12.080
          (statute of limitations). This signals you've done your homework.
        </li>
        <li>
          <strong>Amount owed:</strong> Principal + accrued interest (show
          your math) + any late fees your contract allows.
        </li>
        <li>
          <strong>Deadline:</strong> 14 calendar days from receipt. Oregon
          courts consider 14 days reasonable for a demand letter response
          before filing.
        </li>
        <li>
          <strong>Consequences:</strong> State clearly that you will file in
          Multnomah County Circuit Court (or the appropriate county) for the
          full amount plus treble damages under the UTPA, 9% interest, court
          costs, and attorney fees.
        </li>
        <li>
          <strong>Payment instructions:</strong> How to pay (ACH, check, wire)
          and where. Make it easy — include your bank details if you accept
          ACH.
        </li>
      </ol>

      <h2>Portland-Specific Considerations</h2>

      <p>
        Portland and Multnomah County have particular quirks freelancers should
        know:
      </p>

      <ul>
        <li>
          <strong>Multnomah County Circuit Court</strong> (downtown Portland)
          handles small claims and civil cases. The courthouse is at 1200 SW
          1st Avenue. Filing fees are paid at the cashier's office on the
          first floor.
        </li>
        <li>
          <strong>Portland's freelance density:</strong> With over 60,000
          independent workers, Portland judges see a lot of freelance payment
          disputes. They're generally familiar with the UTPA and take
          documented non-payment seriously.
        </li>
        <li>
          <strong>City of Portland business license tax:</strong> If your
          client is a Portland-based business, they're required to have a
          City of Portland business license. Mentioning this in your demand
          letter adds another layer of regulatory pressure.
        </li>
        <li>
          <strong>Tech and creative industry norms:</strong> Portland's tech
          and creative sectors often operate on handshake deals. A formal
          demand letter can be particularly jarring — and effective — in an
          industry culture that relies on informal trust.
        </li>
      </ul>

      <h2>When to Send and What Happens After</h2>

      <p>
        Send your demand letter via <strong>certified mail with return
        receipt</strong> and also via email (so you have timestamped
        delivery proof). The clock starts when the certified mail is
        delivered or the email is sent, whichever is earlier.
      </p>

      <p>After sending, three things typically happen:</p>

      <ol>
        <li>
          <strong>Payment within 14 days</strong> — Most common outcome
          (roughly 60–70% of cases). The combination of the UTPA treble
          damages threat, 9% interest, and attorney fee exposure makes
          payment the rational choice.
        </li>
        <li>
          <strong>Negotiation</strong> — The client offers partial payment
          or a payment plan. You can accept, but don't release your UTPA
          claims unless the settlement explicitly covers them.
        </li>
        <li>
          <strong>Silence or refusal</strong> — File in small claims (if
          under $10,000) or circuit court. Attach your demand letter to the
          complaint — it demonstrates good-faith effort to resolve the
          dispute before litigation, which Oregon judges appreciate.
        </li>
      </ol>

      <h2>Bottom Line for Oregon Freelancers</h2>

      <p>
        Oregon is one of the best states in the country to be a freelancer
        chasing an unpaid invoice. The $10,000 small claims limit covers
        nearly all freelance disputes, the 9% statutory interest rate is
        among the highest in the nation, and the UTPA's treble damages
        provision turns a $5,000 invoice into a $15,000 liability for the
        client — plus your attorney fees. A demand letter that cites these
        statutes isn't a bluff. It's a math problem the client solves in
        about 30 seconds: pay what's owed, or risk paying three times that
        amount plus legal fees. Most choose the former.
      </p>

      <p>
        <strong>Disclaimer:</strong> This article is for informational
        purposes only and does not constitute legal advice. Oregon demand
        letter laws can change, and your specific situation may involve
        nuances not covered here. Consult an Oregon-licensed attorney for
        advice on your particular case.
      </p>
    </ArticleLayout>
  );
}
