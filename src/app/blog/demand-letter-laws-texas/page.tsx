import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-texas")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-texas">
      <p>
        You're a freelancer in Texas and a client owes you $4,200. You've heard
        a demand letter can get results — but you've also heard Texas has specific
        laws that can make the wrong letter backfire. You're right on both counts.
        Texas is one of the most demand-letter-friendly states in the country, with
        statutes that can turn a well-written letter into a powerful collection tool
        — and one of the few states where a bad demand letter can expose you to
        liability under the Deceptive Trade Practices Act (DTPA).
      </p>

      <p>
        This guide covers what Texas law actually says about demand letters: the
        DTPA notice requirement, the 60-day cure window, what language carries
        legal weight, how to recover attorney's fees, and the specific formatting
        conventions Texas courts expect. Whether you're sending a demand letter for
        an unpaid freelance invoice, a construction contract dispute, or a
        breach-of-contract claim, get the Texas-specific details right before you
        hit send.
      </p>

      <h2>Is a Demand Letter Required Before Suing in Texas?</h2>
      <p>
        The short answer: <strong>it depends on the claim.</strong> Texas does not
        have a blanket pre-suit demand-letter requirement for all civil cases.
        However, several Texas-specific statutes <em>do</em> require written notice
        before filing suit — and failing to provide proper notice can result in
        your case being dismissed, delayed, or your ability to recover attorney's
        fees being eliminated entirely.
      </p>

      <h3>When a Demand Letter Is Required</h3>
      <ul>
        <li>
          <strong>Deceptive Trade Practices Act (DTPA) — Tex. Bus. &amp; Com. Code § 17.505.</strong>{" "}
          For any DTPA claim, you <em>must</em> send a written notice at least 60
          days before filing suit. The notice must include: the specific complaint,
          the amount of economic damages and expenses (including attorney's fees),
          and the alleged DTPA violation. The defendant then has 60 days to make a
          settlement offer. If they offer an amount equal to or greater than what
          you ultimately recover at trial, your damages may be capped. Get this
          letter wrong and you can seriously damage your case.
        </li>
        <li>
          <strong>Prompt Payment Act (construction) — Tex. Prop. Code § 28.002.</strong>{" "}
          Contractors and subcontractors on private construction projects must send
          a written payment demand before suing for non-payment. The notice must
          be sent by certified mail and include a specific statutory warning.
        </li>
        <li>
          <strong>Medical malpractice — Tex. Civ. Prac. &amp; Rem. Code § 74.051.</strong>{" "}
          A 60-day pre-suit notice letter is required, sent by certified mail,
          along with an authorization form for release of medical records.
        </li>
        <li>
          <strong>Certain government claims.</strong> Suits against Texas
          municipalities and counties often require a notice-of-claim letter within
          a specific timeframe (often 90–180 days from the incident).
        </li>
      </ul>

      <h3>When a Demand Letter Is Not Required (But Still Smart)</h3>
      <p>
        For the most common freelancer and small-business disputes — breach of
        contract, unjust enrichment, unpaid invoices — Texas does not require a
        pre-suit demand letter. You <em>can</em> file suit without one. But sending
        a demand letter is still the smart play for three reasons: (1) many cases
        settle without litigation, saving you filing fees and legal costs; (2) a
        demand letter establishes the date the defendant was formally put on notice,
        which can affect interest calculations and your right to recover attorney's
        fees; and (3) Texas judges appreciate reasonable pre-suit attempts to
        resolve disputes — failing to send any written demand can make you look
        unreasonable, even if it's not technically required.
      </p>

      <h2>The DTPA Demand Letter: The One Texas Letter You Must Get Right</h2>
      <p>
        If your dispute involves any allegation of deceptive, misleading, or unfair
        conduct — and in Texas, many business disputes can be framed this way — the
        DTPA notice letter is both a sword and a shield. Done correctly, it locks in
        your right to recover treble damages (up to 3× economic damages) and
        attorney's fees. Done incorrectly — or not done at all — and you waive those
        remedies. The statute is unforgiving.
      </p>

      <h3>Required Elements of a DTPA Notice Letter</h3>
      <p>Under Texas law, the notice must be in writing and must advise the defendant of:</p>
      <ul>
        <li>
          <strong>The specific complaint.</strong> Not &ldquo;you wronged me.&rdquo; A
          detailed description of what the defendant did that you allege violates the
          DTPA — the specific act, date, and how it caused your damages.
        </li>
        <li>
          <strong>The amount of economic damages.</strong> Itemized: the amount you
          paid, the amount you lost, the cost to fix the problem, and any
          consequential damages (lost business, etc.).
        </li>
        <li>
          <strong>The amount of reasonable and necessary attorney's fees incurred.</strong>{" "}
          Even if you haven't hired a lawyer yet, you should state the fees incurred
          to date, or at minimum state that fees are accruing.
        </li>
      </ul>

      <p>
        The notice is typically sent by certified mail, return receipt requested —
        while the statute doesn't explicitly require certified mail for all claims,
        Texas courts have a strong preference for a provable delivery method. An
        email alone is unlikely to satisfy a judge that proper notice was given if
        the DTPA's 60-day clock is disputed.
      </p>

      <h3>The 60-Day Cure Window</h3>
      <p>
        Once the defendant receives your DTPA notice, a 60-day clock starts.
        During this window, the defendant can make a written settlement offer. If
        they offer an amount equal to or greater than what you ultimately recover
        at trial, your damages are capped at the offer amount — even if a jury
        would have awarded more. This creates a strategic risk: if your demand
        letter is too aggressive and inflates your damages, and the defendant makes
        a reasonable counteroffer that you reject, you may be stuck with that
        number even if you win at trial. The DTPA notice letter is not a place to
        bluff. Be precise, be reasonable, and be prepared to back up every number
        with documentation.
      </p>

      <h2>Attorney's Fee Recovery in Texas: The Statute That Changes Everything</h2>
      <p>
        One of the most overlooked features of Texas law is how strongly it allows
        for recovery of attorney's fees in contract disputes. Under{" "}
        <strong>Texas Civil Practice &amp; Remedies Code § 38.001</strong>, a
        prevailing party in a breach-of-contract claim <em>may</em> recover
        reasonable attorney's fees — but only if they made a proper written demand
        at least 30 days before filing suit.
      </p>

      <p>
        Here's the critical detail most freelancers miss: the demand letter itself
        must satisfy § 38.002, which requires that the demand be presented to the
        opposing party and that payment for the just amount owed be tendered (i.e.,
        you gave them a chance to pay before suing). If you skip the demand letter
        and go straight to a lawsuit, you may win the breach-of-contract claim but
        <strong>lose the right to recover your attorney's fees</strong> — which in
        a $4,200 dispute could easily be $3,000–$5,000 in legal fees.
      </p>

      <p>
        In practical terms: a well-written Texas demand letter that meets § 38.002
        requirements can be worth more than the underlying claim itself, because it
        preserves your ability to make the defendant pay for your lawyer. If you're
        hiring an attorney, they'll send this letter as a matter of routine — it is
        the first step in virtually every Texas commercial litigation. If you're
        sending it yourself, you need to know that this statute exists and what it
        requires.
      </p>

      <h2>What Language Carries Legal Weight in Texas</h2>
      <p>
        Texas judges and defendants respond differently to demand letters than their
        counterparts in California or New York. Texas business culture places a high
        premium on directness, specificity, and reasonableness. Here's what works:
      </p>

      <ul>
        <li>
          <strong>Be direct, not threatening.</strong> &ldquo;I am prepared to
          pursue all legal remedies available to me&rdquo; carries more weight in
          Texas than &ldquo;I will sue you immediately.&rdquo; Threatening litigation
          without articulating that you've explored resolution options signals
          unreasonableness to a Texas judge. The DTPA's 60-day cure period exists
          precisely because Texas law prefers settlement over litigation — your
          letter should reflect that preference.
        </li>
        <li>
          <strong>Cite the specific statute.</strong> Texas courts expect parties to
          know which law applies to their claim. A letter that says &ldquo;this is
          a breach of contract under Texas law&rdquo; is fine; a letter that says
          &ldquo;this violates the Texas Deceptive Trade Practices Act, Tex. Bus.
          &amp; Com. Code § 17.46(b)&rdquo; is persuasive. Precision signals
          credibility and that you've done your homework.
        </li>
        <li>
          <strong>Include a specific deadline tied to the statute.</strong> &ldquo;I
          look forward to your response within the 60-day period provided under
          Texas law&rdquo; is better than &ldquo;respond by Friday.&rdquo; It shows
          you know the statute and are following it.
        </li>
        <li>
          <strong>Be reasonable about the amount.</strong> Texas judges have broad
          discretion on attorney's fees and are quick to penalize parties who
          demand amounts far beyond what is actually owed. Your demand letter should
          tie every dollar you're asking for to a specific invoice, contract term,
          or documented expense. Overreaching in the demand letter — even if you
          later reduce your ask at trial — can hurt your credibility and your
          fee recovery.
        </li>
      </ul>

      <h2>Formatting and Delivery: Texas Conventions</h2>
      <p>
        Texas courts place high evidentiary weight on properly formatted demand
        letters. A letter on professional letterhead, dated, signed, and sent by
        certified mail with a return receipt creates a record that is difficult to
        dispute. Email alone is not sufficient for DTPA notice or § 38.002 demand
        — and in Texas state court, a defendant who claims they never received your
        email demand will almost always get the benefit of the doubt unless you
        have additional proof of receipt. Certified mail, return receipt requested,
        is the gold standard. Send a copy by email as well for speed, but the
        certified mail copy is what matters for the statutory clock.
      </p>

      <h2>Demand Letter vs. Small Claims Court in Texas</h2>
      <p>
        For claims under $20,000, Texas Justice Courts (small claims) are a viable
        and relatively inexpensive forum. But sending a demand letter first has a
        specific advantage in the Texas small claims context: many Texas Justice
        Courts encourage or even require mediation before trial. A demand letter
        that includes a clear settlement offer, sent before you file, may satisfy
        the court's preference for pre-suit dispute resolution and can shorten the
        time to trial. For claims between $10,000 and $20,000, the demand letter
        is also a critical tool for anchoring the settlement conversation before
        filing fees and service costs start to accumulate.
      </p>

      <h2>Sample Language: A Texas-Compliant Demand Letter for Unpaid Invoice</h2>
      <p>
        Below is a template structured to comply with Texas demand-letter best
        practices — suitable for a breach-of-contract claim with potential DTPA
        implications. This is not legal advice; consult an attorney for your
        specific situation:
      </p>

      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 font-mono text-sm leading-relaxed whitespace-pre-line">
        {`[Your Name / Company Name]
[Your Address]
[City, TX, ZIP]
[Date]

VIA CERTIFIED MAIL, RETURN RECEIPT REQUESTED
[Defendant Name]
[Defendant Address]
[City, TX, ZIP]

Re: Demand for Payment — Unpaid Invoice #[Number]
     Breach of Contract and Texas Deceptive Trade Practices Act Notice

Dear [Defendant],

This letter serves as formal demand for payment and, to the extent applicable, written notice under the Texas Deceptive Trade Practices Act (Tex. Bus. & Com. Code § 17.505) and Texas Civil Practice & Remedies Code § 38.002.

On [date], you and I entered into an agreement under which I would provide [description of services] for [amount]. I performed all obligations under that agreement. The attached invoice #[number], dated [date], reflects the agreed-upon amount: $[amount]. Payment was due on [date]. As of this letter, payment has not been received.

My total economic damages resulting from your breach of contract and, to the extent applicable, your deceptive trade practices are:

  • Unpaid invoice amount: $[amount]
  • Late-payment interest at [rate]% from [date] through [date]: $[amount]
  • Total economic damages: $[total]
  • Reasonable attorney's fees incurred to date: $[fees]

Pursuant to the DTPA, you have 60 days from receipt of this notice to make a written settlement offer. Please direct any communication to the address above. I remain willing to discuss a reasonable resolution and encourage you to do so within the statutory 60-day period.

This letter is not intended to be a complete statement of all facts or legal claims. I reserve all rights.

Sincerely,
[Signature]
[Your Name]`}
      </div>

      <h2>Bottom Line: Texas Demand Letters Have Teeth</h2>
      <p>
        Texas is one of the best states in the country to be a creditor sending a
        demand letter — provided you follow the rules. The DTPA notice requirement,
        the 60-day cure window, and § 38.002 attorney's fee recovery are statutes
        that work in your favor if you comply with them. A properly drafted,
        statute-aware Texas demand letter is not just a request for payment — it is
        a legal instrument that can determine the entire trajectory of your claim.
        Send it by certified mail, be precise about your damages, cite the right
        statutes, and give the defendant the full statutory cure period. If
        litigation becomes necessary, your demand letter will be Exhibit A — and
        in Texas, a good Exhibit A can be the difference between recovering
        attorney's fees and eating them yourself.
      </p>
    </ArticleLayout>
  );
}
