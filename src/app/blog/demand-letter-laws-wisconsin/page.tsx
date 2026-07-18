import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-wisconsin")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-wisconsin">
      <p>
        You're a freelance UX designer in Madison's Capitol Square district, and
        a Milwaukee-based healthtech startup owes you $11,200 for a patient-app
        redesign you delivered four months ago. The app shipped to production,
        their NPS scores are up, and your last three invoice reminders met radio
        silence. Wisconsin gives freelancers a powerful set of collection tools:
        a $10,000 small claims limit that handles most freelance disputes
        (Wis. Stat. § 799.01), a 12% statutory interest rate on contract
        obligations after demand (Wis. Stat. § 138.04), a 6-year statute of
        limitations for written contracts (Wis. Stat. § 893.43), and the
        Wisconsin Deceptive Trade Practices Act (Wis. Stat. § 100.18) — one of
        the oldest and most plaintiff-friendly consumer protection statutes in
        the country, which can support treble damages when a business practice
        involves a materially deceptive statement made to the public. Here's
        exactly how Wisconsin freelancers write a demand letter that leverages
        every tool the Badger State provides.
      </p>

      <h2>Wisconsin Small Claims Court: $10,000 Limit</h2>

      <p>
        Wisconsin's small claims system operates through circuit courts under
        Wis. Stat. § 799.01. The jurisdictional limit is{' '}
        <strong>$10,000</strong> for most money claims, making it one of the
        higher small claims caps in the Midwest. For freelancers, this means the
        vast majority of project-based disputes can stay in a faster, less
        formal forum. Here's what every Wisconsin freelancer needs to know:
      </p>

      <ul>
        <li>
          <strong>$10,000 cap:</strong> Claims up to $10,000 are heard under
          small claims procedure in Wisconsin circuit courts. For a freelance
          developer, designer, writer, or consultant, this covers most
          individual project disputes, monthly retainers, and multi-deliverable
          engagements. Claims above $10,000 proceed on the regular civil docket
          — or a freelancer may waive the excess to stay in small claims.
        </li>
        <li>
          <strong>Simplified pleadings:</strong> Wisconsin small claims uses a
          standard summons and complaint form (SC-500) available from the clerk
          of circuit court. The complaint must identify the parties, state the
          amount claimed, and briefly describe the basis for the debt. No formal
          legal drafting is required, though specificity helps.
        </li>
        <li>
          <strong>Venue rules:</strong> File in the circuit court for the county
          where the defendant resides or does business. For a Milwaukee client,
          that's Milwaukee County; for a Madison client, Dane County. For
          out-of-state clients who contracted with a Wisconsin freelancer,
          Wisconsin's long-arm statute (Wis. Stat. § 801.05) may provide
          jurisdiction if the client transacted business in Wisconsin or
          contracted to supply services here.
        </li>
        <li>
          <strong>No mandatory attorney:</strong> Individuals may represent
          themselves in Wisconsin small claims. If the defendant is a business
          entity (LLC, corporation), Wisconsin generally requires attorney
          representation for entities in circuit court — a tactical advantage
          for freelancers: your demand letter signals that the client will need
          to hire a lawyer if the case proceeds.
        </li>
        <li>
          <strong>Mediation option:</strong> Many Wisconsin counties
          (particularly Dane and Milwaukee) offer or require mediation before a
          small claims trial. A demand letter that references willingness to
          mediate shows good faith and strengthens your position if you later
          need to file.
        </li>
      </ul>

      <h2>Statutory Interest: Up to 12% Per Year</h2>

      <p>
        Wisconsin has two key interest statutes that freelancers can reference in a
        demand letter:
      </p>

      <ul>
        <li>
          <strong>Wis. Stat. § 138.04 — 12% on liquidated contract claims:</strong>{' '}
          When a debt is "liquidated" (a fixed, determinable amount — like an
          unpaid invoice with a specific dollar figure) and payment has been
          demanded, the creditor is entitled to interest at 12% per year from
          the date of demand. This is one of the highest statutory rates in the
          country and a powerful motivator. A demand letter that specifies this
          statute and calculates the daily interest accrual ($11,200 × 12% ÷ 365
          = approximately $3.68/day) makes the cost of delay visible.
        </li>
        <li>
          <strong>Wis. Stat. § 815.05 — 5% on judgments:</strong> Once a
          judgment is entered, it accrues interest at 5% per year until paid.
          While lower than the pre-judgment rate, it still adds up — and
          Wisconsin judgments are enforceable for 20 years (Wis. Stat.
          § 806.15).
        </li>
        <li>
          <strong>The demand letter as the trigger:</strong> The 12% rate under
          § 138.04 runs from the date of a proper demand. Your demand letter
          should explicitly state: "Pursuant to Wis. Stat. § 138.04, interest on
          the outstanding balance of $[amount] shall accrue at 12% per annum
          from the date of this letter until paid in full." This creates a
          documented trigger date and pressures the client to pay quickly.
        </li>
      </ul>

      <h2>Six-Year Statute of Limitations — But Don't Wait</h2>

      <p>
        Wisconsin provides a generous 6-year statute of limitations for written
        contracts under Wis. Stat. § 893.43. Freelancers should note several
        nuances:
      </p>

      <ul>
        <li>
          <strong>Written vs. oral contracts:</strong> Written contracts
          (including emails that establish scope, rate, and deliverables) enjoy
          the full 6-year period. Oral contracts or unwritten agreements fall
          under the same 6-year period in Wisconsin — Wis. Stat. § 893.43 covers
          both, unlike states that give oral contracts shorter windows. This
          provides freelancers a stronger safety net even when documentation is
          imperfect.
        </li>
        <li>
          <strong>When the clock starts:</strong> The limitations period runs
          from the date the cause of action accrues — typically when payment was
          due under the contract. For a series of invoices, the clock may start
          separately for each unpaid invoice, not from the last one.
        </li>
        <li>
          <strong>Partial payment resets the clock:</strong> Under Wisconsin
          law, a partial payment or written acknowledgment of the debt can reset
          the statute of limitations. If your client makes even a token payment
          or sends an email acknowledging they owe the money, the 6-year clock
          restarts from that date (Wis. Stat. § 893.45).
        </li>
        <li>
          <strong>Don't wait:</strong> While the 6-year window provides
          breathing room, evidence deteriorates, witnesses move, and businesses
          dissolve. Send your demand letter within 30–90 days of non-payment for
          the strongest position.
        </li>
      </ul>

      <h2>
        The Wisconsin Deceptive Trade Practices Act — Wis. Stat. § 100.18
      </h2>

      <p>
        Wisconsin's DTPA is one of the oldest consumer protection statutes in
        the United States and can be a powerful tool for freelancers when a
        client's non-payment involves deceptive conduct:
      </p>

      <ul>
        <li>
          <strong>What it covers:</strong> Wis. Stat. § 100.18 prohibits
          "untrue, deceptive or misleading" statements made to the public in
          connection with the sale of goods or services. If a client made
          materially false representations to induce you to perform work (e.g.,
          "we have funding through Q3" when they didn't, "the payment processor
          is just delayed" when they never set one up), you may have a DTPA
          claim.
        </li>
        <li>
          <strong>Pecuniary loss requirement:</strong> Wisconsin courts require
          the plaintiff to show "pecuniary loss" — the unpaid invoice itself
          satisfies this. The Wisconsin Supreme Court has held that the statute
          is remedial and should be "liberally construed" to protect the public
          (State v. Automatic Merchandisers, Inc., 64 Wis. 2d 659).
        </li>
        <li>
          <strong>Treble damages potential:</strong> While § 100.18 itself
          allows for recovery of damages, Wisconsin courts have recognized that
          a willful violation can support punitive damages. Combined with the
          12% statutory interest, a DTPA claim in a demand letter communicates
          that the exposure is far greater than the invoice amount alone — a
          powerful incentive for a client to negotiate.
        </li>
        <li>
          <strong>No pre-suit notice required:</strong> Unlike some states'
          consumer protection statutes, Wisconsin's § 100.18 does not require a
          pre-suit demand letter. However, sending one that expressly reserves
          DTPA claims preserves your position and signals sophistication.
        </li>
        <li>
          <strong>Practical framing in your letter:</strong> "Your
          representations regarding [describe the false statements] constitute
          violations of the Wisconsin Deceptive Trade Practices Act, Wis. Stat.
          § 100.18, which may subject you to treble damages, attorney fees, and
          costs in addition to the invoice principal and 12% statutory interest
          under Wis. Stat. § 138.04."
        </li>
      </ul>

      <h2>How to Structure Your Wisconsin Demand Letter</h2>

      <p>
        A Wisconsin demand letter that commands attention follows this structure:
      </p>

      <ol>
        <li>
          <strong>Header:</strong> Your name/LLC, address, date. Reference line:
          "Re: Demand for Payment — Invoice #[number] — Outstanding Balance
          $[amount]"
        </li>
        <li>
          <strong>Opening paragraph:</strong> State the contract date, the work
          performed, and the amount due. Attach the invoice and any relevant
          contract or email establishing the agreement.
        </li>
        <li>
          <strong>Wisconsin-specific legal framework:</strong> Cite the small
          claims jurisdictional limit (§ 799.01), the 12% statutory interest
          rate (§ 138.04), and the 6-year statute of limitations (§ 893.43).
          If deceptive conduct occurred, reference § 100.18.
        </li>
        <li>
          <strong>Payment deadline:</strong> Offer 14 calendar days for payment
          in full, with interest accruing daily at 12% per annum from the date
          of the letter. This is a reasonable window that Wisconsin courts
          recognize as good faith.
        </li>
        <li>
          <strong>Consequences of non-payment:</strong> State clearly that you
          will file in [County] Circuit Court Small Claims Division, seeking the
          principal, statutory interest, court costs, and any applicable
          attorney fees. Reference that the client, if a business entity, will
          need to retain counsel.
        </li>
        <li>
          <strong>Closing:</strong> Provide your contact information and
          reiterate willingness to discuss a resolution before the deadline.
          Sign personally — a typed signature is acceptable, but a scanned
          handwritten signature carries more weight.
        </li>
      </ol>

      <h2>Madison, Milwaukee, and Beyond: Local Considerations</h2>

      <p>
        Wisconsin's freelance economy is concentrated in a few key markets, and
        each has local court practices worth knowing:
      </p>

      <ul>
        <li>
          <strong>Madison (Dane County):</strong> Dane County Circuit Court has
          a busy small claims docket and is generally freelancer-friendly. The
          court offers a small claims mediation program that can resolve cases
          without trial. The tech and biotech concentration in Madison means
          many disputes involve software development, design, and consulting
          contracts — judges here see these cases regularly.
        </li>
        <li>
          <strong>Milwaukee (Milwaukee County):</strong> Milwaukee County
          handles the state's highest volume of small claims. Filing fees are
          modest (typically under $100 for claims under $10,000), and the court
          has well-established procedures. Milwaukee's diverse economy means
          freelancers in creative services, construction consulting, and
          healthcare IT will find judges familiar with their industries.
        </li>
        <li>
          <strong>Green Bay / Fox Valley (Brown, Outagamie, Winnebago
          counties):</strong> These courts handle a mix of commercial and
          consumer disputes. Freelancers serving manufacturing, logistics, and
          paper-industry clients should note that many of these clients are
          well-capitalized and may pay quickly once a formal demand letter
          arrives — they rarely want court involvement.
        </li>
        <li>
          <strong>Eau Claire / La Crosse (western Wisconsin):</strong> These
          circuits serve a growing freelance community in western Wisconsin.
          Proximity to the Twin Cities means some clients may be Minnesota-based
          — verify jurisdiction and venue before filing.
        </li>
      </ul>

      <h2>A Note on the Wisconsin Consumer Act (WCA)</h2>

      <p>
        Separately from the DTPA, Wisconsin's Consumer Act (Wis. Stat.
        §§ 421–427) applies to "consumer credit transactions." Most freelance
        contracts are business-to-business transactions and fall outside the WCA,
        but if your client is an individual (not a business entity) and the
        services were for personal, family, or household purposes, the WCA may
        apply. The WCA provides additional remedies including statutory damages
        and attorney fees. If your situation involves an individual client, note
        this in your demand letter as an additional source of legal leverage.
      </p>

      <h2>What Happens If They Still Don't Pay</h2>

      <p>
        If your 14-day deadline passes without payment, your escalation path in
        Wisconsin is clear:
      </p>

      <ol>
        <li>
          <strong>File in small claims:</strong> Complete form SC-500 (summons
          and complaint), pay the filing fee, and serve the defendant. Wisconsin
          allows service by certified mail (restricted delivery) or personal
          service by the sheriff. Filing fees vary by county; as of 2026, most
          are $94.50 for claims up to $10,000.
        </li>
        <li>
          <strong>Prepare your evidence:</strong> Bring the contract, all
          invoices, email correspondence, your demand letter, proof of delivery
          of the demand letter, and any acknowledgment of the debt. Organize
          chronologically and bring three copies (court, defendant, yourself).
        </li>
        <li>
          <strong>At the hearing:</strong> Wisconsin small claims hearings are
          informal. The judge or court commissioner will ask each side to
          present their case. Stick to facts — what was agreed, what was
          delivered, what remains unpaid. The demand letter demonstrates you
          attempted to resolve the matter before filing, which courts expect.
        </li>
        <li>
          <strong>Judgment enforcement:</strong> A Wisconsin money judgment is
          enforceable for 20 years. You can garnish wages (subject to
          limitations), levy bank accounts, or place a lien on real property.
          The judgment accrues interest at 5% per year under Wis. Stat.
          § 815.05 from the date of entry.
        </li>
      </ol>

      <p>
        Wisconsin's combination of a high small claims limit, a 12% statutory
        interest rate that starts running from the date of a proper demand, and
        a plaintiff-friendly deceptive trade practices statute makes it one of
        the most freelancer-favorable states in the country for collecting
        unpaid invoices. Most clients — particularly established businesses in
        Madison and Milwaukee — pay once they see the cost of non-payment
        itemized in a properly structured demand letter. For those who don't,
        the Wisconsin circuit court system provides an accessible and efficient
        path to judgment.
      </p>
    </ArticleLayout>
  );
}
