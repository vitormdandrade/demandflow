import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-ohio")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-ohio">
      <p>
        You're a freelance developer in Columbus and a client owes you $5,400
        for three months of app development work. You've sent the friendly
        reminder, the firm follow-up, and now you're staring at silence. It's
        time for a demand letter — and you want to write one that carries
        genuine legal weight in Ohio. Good instinct. Ohio has a $6,000 small
        claims limit in municipal courts, one of the longest statutes of
        limitations for written contracts in the country (8 years), and 6%
        statutory interest on judgments under O.R.C. § 1343.03 — all of which
        shape what an effective Ohio demand letter looks like.
      </p>

      <p>
        This guide covers what Ohio law actually says about demand letters:
        the $6,000 municipal court small claims threshold, the 8-year statute
        of limitations on written contracts (O.R.C. § 2305.06), the 6%
        statutory interest rule, and the specific language that makes an Ohio
        demand letter impossible to ignore.
      </p>

      <h2>Ohio's Small Claims Limit: $6,000 in Municipal Court</h2>

      <p>
        Ohio's small claims court operates through <strong>Municipal Courts</strong>
        and <strong>County Courts</strong>, with a jurisdictional limit of
        <strong>$6,000</strong> (O.R.C. § 1925.02). This is mid-range among
        states — higher than New Jersey ($5,000) and Texas ($5,000 in most
        courts), but lower than Georgia ($15,000) or Pennsylvania ($12,000).
        For a freelance dispute of $5,400, you're well within the small claims
        limit.
      </p>

      <p>
        Key Municipal Court small claims facts for Ohio freelancers:
      </p>
      <ul>
        <li>Limit: <strong>$6,000</strong> in damages (excluding costs and interest)</li>
        <li>Filing fee: ~$50–$80 depending on the county</li>
        <li>Attorneys are allowed but the process is designed for self-representation</li>
        <li>Statute of limitations for written contracts: <strong>8 years</strong> (O.R.C. § 2305.06)</li>
        <li>Statute of limitations for oral contracts: 6 years (O.R.C. § 2305.07)</li>
        <li>Appeals from small claims go to the Court of Common Pleas for a de novo hearing</li>
      </ul>

      <p>
        Why the $6,000 limit matters for your demand letter: it sets the
        practical ceiling for what you can recover without hiring a lawyer. If
        your claim exceeds $6,000, you have two options — waive the amount above
        $6,000 to stay in small claims (and mention this in your demand letter
        as a compromise offer), or file in the Court of Common Pleas, which
        usually requires an attorney. A well-written demand letter can often
        resolve the dispute before you need to make that call.
      </p>

      <h2>Ohio's 6% Statutory Interest: O.R.C. § 1343.03</h2>

      <p>
        Ohio law provides for <strong>6% per year</strong> interest on
        judgments under O.R.C. § 1343.03. But there's a crucial distinction
        Ohio freelancers need to understand — the 6% rate applies to
        <strong>judgments</strong> (after a court rules), not automatically to
        pre-judgment demands. Here's how it works:
      </p>

      <ul>
        <li>If your <strong>contract specifies an interest rate</strong> for late payments (e.g., "1.5% per month on overdue invoices"), that contractual rate applies from the date of non-payment — and your demand letter should cite the exact contract language</li>
        <li>If your contract is <strong>silent on interest</strong>, Ohio courts typically apply the statutory 6% rate from the date the debt became due — but only once a judgment is entered</li>
        <li>For <strong>pre-judgment interest</strong> in Ohio, the general rule is that interest accrues from the date the money becomes due and payable under the contract — your demand letter should calculate this and put the debtor on notice</li>
        <li>On a $5,400 invoice that's 9 months overdue, 6% simple interest = $243 — not life-changing, but it adds up and sends a signal that the meter is running</li>
      </ul>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4 font-mono text-sm">
        Interest = (Principal × 0.06 × Days Past Due) / 365<br />
        <em>Example: ($5,400 × 0.06 × 270) / 365 = $239.67</em>
      </div>

      <p>
        Your demand letter should calculate the interest owed as of the
        letter's date, reference O.R.C. § 1343.03, and state that interest
        continues to accrue at 6% per year until payment is received in full.
        Even if the dollar amount is modest, the line item shows the debtor
        that every day of delay costs them money.
      </p>

      <h2>Ohio's 8-Year Statute of Limitations: O.R.C. § 2305.06</h2>

      <p>
        This is Ohio's standout statutory feature for freelancers. Under
        <strong>O.R.C. § 2305.06</strong>, written contracts have an
        <strong>8-year</strong> statute of limitations — one of the longest in
        the United States. Oral contracts have a 6-year limit under O.R.C.
        § 2305.07. Compare this to California (4 years for written contracts)
        or Florida (5 years), and you can see why Ohio freelancers have an
        unusually long runway to pursue unpaid invoices.
      </p>

      <p>
        What this means in practice:
      </p>

      <ul>
        <li>Even if a client stiffed you 3, 5, or even 7 years ago on a written contract, you may still have a viable legal claim — far longer than most states allow</li>
        <li>The 8-year clock starts when the <strong>cause of action accrues</strong> — typically the date the invoice became past due or the contract was breached</li>
        <li>This long window is a double-edged sword: it gives you more time to pursue old debts, but it also means clients have 8 years to bring claims against you — keep your contracts and correspondence indefinitely</li>
        <li>For emails and digital agreements: Ohio courts have recognized that a chain of emails can constitute a "written contract" for statute of limitations purposes, but this varies by judge — when in doubt, get a formal signed agreement</li>
      </ul>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
        <strong>⚠️ Practical advice:</strong> The 8-year window doesn't mean you
        should wait 8 years. Evidence disappears, witnesses forget, businesses
        dissolve, and debts become harder to collect. Send your demand letter
        as soon as a friendly reminder fails. The 8-year statute is your safety
        net — not your timeline.
      </div>

      <h2>Ohio-Specific Considerations for Your Demand Letter</h2>

      <h3>1. The Ohio Consumer Sales Practices Act (CSPA) — Probably Doesn't Apply</h3>
      <p>
        Ohio has a powerful Consumer Sales Practices Act (O.R.C. § 1345.01 et
        seq.) that allows for treble damages and attorney fee recovery in
        consumer transactions — but it applies to <strong>consumer
        transactions</strong>, not B2B freelance disputes. If your client is a
        business (LLC, corporation), the CSPA almost certainly doesn't apply.
        If your client is an individual hiring you for personal services (not
        related to their business), consult an Ohio attorney about potential
        CSPA coverage. In most freelance scenarios, rely on your contract's
        terms — not the CSPA.
      </p>

      <h3>2. Ohio's Prompt Pay Act (Public Works Only)</h3>
      <p>
        Ohio has a Prompt Pay Act (O.R.C. § 153.12) that requires timely
        payment on <strong>public works</strong> contracts — but this applies
        to government construction projects, not private freelance work. If
        you're a freelance designer working on a municipal website, it may be
        relevant. For the vast majority of freelancers, your contract terms
        are the governing law on payment timing.
      </p>

      <h3>3. Ohio Revised Code Title 13 — Commercial Paper</h3>
      <p>
        If the client paid you with a check that bounced, Ohio's commercial
        paper statutes (O.R.C. Chapter 1303) may provide additional remedies
        beyond breach of contract, including statutory damages. Your demand
        letter should mention the bounced check separately and reference
        O.R.C. § 1303.55, which allows recovery of the check amount plus
        damages of the lesser of $200 or three times the check amount in some
        bad-check scenarios. If a bounced check is part of your claim, flag it
        explicitly.
      </p>

      <h2>What an Ohio Demand Letter Must Include</h2>

      <p>
        Ohio small claims courts don't prescribe a specific demand letter
        format, but a letter with these elements will be far more effective:
      </p>

      <ol>
        <li>
          <strong>Clear identification of parties:</strong> your full name or
          business entity name, your address, the client's legal name and
          registered business address. For Ohio LLCs and corporations, you can
          verify business registrations through the Ohio Secretary of State's
          business search.
        </li>
        <li>
          <strong>The claim amount, itemized:</strong> list each unpaid invoice
          by number, date, and amount. Include any late fees specified in your
          contract. Calculate 6% interest under O.R.C. § 1343.03 and show your
          math — the transparency makes the claim harder to dispute.
        </li>
        <li>
          <strong>The legal basis for the debt:</strong> reference your written
          contract, statement of work, or the email chain where the client
          approved the deliverables. Ohio's 8-year statute of limitations means
          even older contracts are still in play — mention O.R.C. § 2305.06 to
          confirm the claim is timely.
        </li>
        <li>
          <strong>Interest demand:</strong> state: "Pursuant to O.R.C.
          § 1343.03, interest accrues on this debt at the rate of 6% per
          annum from [date debt became due]. As of the date of this letter,
          accrued interest totals $[amount]. Interest continues to accrue
          until payment is received in full."
        </li>
        <li>
          <strong>A clear deadline:</strong> 14 days from receipt of the
          letter is standard. Specify what happens after the deadline: filing
          in the appropriate Municipal Court.
        </li>
        <li>
          <strong>Venue statement:</strong> name the specific Ohio Municipal
          Court where you'll file — e.g., "Franklin County Municipal Court
          (Small Claims Division)" for a Columbus-based client.
        </li>
      </ol>

      <h2>Ohio-Specific Pitfalls to Avoid</h2>

      <h3>1. Assuming the 6% rate applies pre-judgment</h3>
      <p>
        O.R.C. § 1343.03 is most clearly a <strong>judgment interest</strong>
        statute — the 6% rate is automatic once a court issues a judgment.
        Pre-judgment interest depends on your contract or equitable principles.
        If your contract specifies a late payment interest rate, cite that. If
        not, your demand letter should still claim interest under O.R.C.
        § 1343.03 but acknowledge that a court will ultimately determine the
        pre-judgment period. Don't overstate the automatic nature of pre-judgment
        interest — it weakens your credibility.
      </p>

      <h3>2. Filing in the wrong municipal court</h3>
      <p>
        Ohio has over 100 municipal and county courts. Venue is generally proper
        where the defendant resides, where the contract was performed, or where
        the cause of action arose. If you're in Cincinnati and your client is
        in Cleveland, you likely need to file in the Cuyahoga County Municipal
        Court — not Hamilton County. A demand letter naming the wrong court
        signals that you haven't done your homework. Verify the correct court
        at the Ohio Supreme Court's directory before writing the letter.
      </p>

      <h3>3. Missing the bounced-check damages opportunity</h3>
      <p>
        If the client paid you with a check that was returned for insufficient
        funds, Ohio law gives you additional remedies beyond the invoice amount.
        O.R.C. § 1303.55 allows recovery of statutory damages on top of the
        check amount. Many Ohio freelancers miss this entirely in their demand
        letters — include it and you signal that you understand Ohio commercial
        law beyond basic contract principles.
      </p>

      <h3>4. Letting the 8-year window create false confidence</h3>
      <p>
        Yes, you have 8 years on a written contract. But Ohio courts apply the
        doctrine of <strong>laches</strong> — an equitable defense that can bar
        a claim if you unreasonably delayed in asserting it and the delay
        prejudiced the defendant. If you wait 7 years to pursue a $2,000 invoice
        and the client's business records are gone, a judge may dismiss your
        case even though the statute of limitations hasn't run. Send the demand
        letter while the evidence is fresh.
      </p>

      <h2>When to Escalate Beyond a Demand Letter</h2>

      <p>
        If 14 days pass after a properly-sent Ohio demand letter and you haven't
        received payment, your next step is small claims court. The process:
      </p>

      <ul>
        <li>Go to the Clerk of Courts office in the appropriate Municipal Court</li>
        <li>File a Small Claims Complaint (a simple form stating who owes you what)</li>
        <li>Pay the filing fee (~$50–$80) — you can request that the court add this to the judgment</li>
        <li>The court will schedule a hearing, typically within 30–60 days</li>
        <li>Bring your demand letter, contract, invoices, bank records, and all correspondence</li>
      </ul>

      <p>
        Your demand letter is the cornerstone of your small claims case. It
        proves you made a good-faith attempt to resolve the dispute before
        filing; it documents the exact amount owed, the legal basis, and the
        interest accrued; and it establishes the timeline. A well-written Ohio
        demand letter doesn't just get you paid — it builds the paper trail that
        wins your case in Municipal Court.
      </p>

      <h2>Generate Your Ohio Demand Letter — $29</h2>

      <p>
        DemandFlow generates an Ohio-compliant demand letter with all the
        legal language your claim needs: itemized damages, interest calculation
        under O.R.C. § 1343.03, the correct Municipal Court venue, the 8-year
        statute of limitations reference under O.R.C. § 2305.06, and a 14-day
        payment deadline. Fill in your details, download the letter, and give
        your Ohio invoice the legal weight it deserves.
      </p>

      <p>
        <strong>Not legal advice:</strong> This guide and DemandFlow's templates
        are for informational purposes only and do not constitute legal advice.
        For claims near or above the $6,000 small claims limit, bounced-check
        scenarios, or disputes involving the CSPA, consult an Ohio-licensed
        attorney.
      </p>
    </ArticleLayout>
  );
}
