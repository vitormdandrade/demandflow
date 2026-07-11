import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-massachusetts")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-massachusetts">
      <p>
        You're a freelance software engineer in Boston and a startup client owes
        you $11,400 for a completed MVP build. You've sent the polite follow-up,
        the detailed invoice breakdown, and now it's been seven weeks of radio
        silence. It's time for a demand letter — and if you're in Massachusetts,
        you're sitting on one of the most powerful sets of legal tools in the
        country. Massachusetts has a $7,000 small claims limit (M.G.L. c. 218,
        § 21), a 12% statutory interest rate on contract claims (M.G.L. c. 231,
        § 6C) — one of the highest in the nation — a 6-year statute of
        limitations for written contracts, and the legendary Chapter 93A
        consumer protection statute that can <strong>triple your damages</strong>{' '}
        and make the other side pay your attorney fees.
      </p>

      <p>
        This guide covers what Massachusetts law actually says about demand
        letters: the $7,000 small claims threshold, the 12% statutory interest
        rate, the 6-year statute of limitations (M.G.L. c. 260, § 2), the
        Chapter 93A 30-day demand letter requirement and its treble-damages
        power, and the specific language that makes a Massachusetts demand
        letter carry maximum legal weight.
      </p>

      <h2>Massachusetts Small Claims Limit: $7,000</h2>

      <p>
        Massachusetts small claims cases are heard in the{' '}
        <strong>District Court Department</strong> or the{' '}
        <strong>Boston Municipal Court Department</strong> under M.G.L. c. 218,
        § 21. The jurisdictional limit is <strong>$7,000</strong>, which puts
        Massachusetts in the middle tier — lower than Georgia ($15,000),
        California ($12,500 for individuals), and Pennsylvania ($12,000), but
        the same as Michigan's recently increased limit and higher than Ohio
        ($6,000) and New York ($5,000 in town/village courts).
      </p>

      <p>
        Key Massachusetts small claims court facts for freelancers:
      </p>
      <ul>
        <li>Limit: <strong>$7,000</strong> in damages (excluding costs and interest)</li>
        <li>Filing fee: $40 for claims up to $500; $50 for claims $501–$2,000; $100 for claims $2,001–$5,000; $150 for claims $5,001–$7,000</li>
        <li>Attorneys are <strong>allowed</strong> in Massachusetts small claims court — unlike Michigan or California small claims</li>
        <li>Either party can request a jury trial by transferring the case to the regular civil docket — but this removes the small claims procedural simplicity</li>
        <li>Statute of limitations for written contracts: <strong>6 years</strong> (M.G.L. c. 260, § 2)</li>
        <li>Statute of limitations for oral contracts: 6 years (M.G.L. c. 260, § 2)</li>
        <li>Cases are heard by a clerk-magistrate, not a judge, unless either party objects</li>
      </ul>

      <p>
        The fact that attorneys are allowed in Massachusetts small claims is a
        double-edged sword. On one hand, if your client is a funded startup with
        in-house counsel, they can bring a lawyer — which raises the stakes. On
        the other hand, this makes a well-crafted Chapter 93A demand letter even
        more powerful: if the client ignores a 93A letter and you later win
        treble damages plus attorney fees, the math flips dramatically in your
        favor.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
        <strong>⚠️ Important:</strong> Because attorneys are permitted in
        Massachusetts small claims court, a freelancer facing a well-funded
        client should take the demand letter phase seriously. A proper Chapter
        93A demand letter, sent by certified mail with a 30-day response window,
        creates a paper trail that dramatically strengthens your position —
        whether you end up in small claims, district court, or a settlement
        negotiation.
      </div>

      <h2>Massachusetts Statutory Interest: 12% Under M.G.L. c. 231, § 6C</h2>

      <p>
        Here's where Massachusetts separates itself from virtually every other
        state: the statutory interest rate on contract claims is{' '}
        <strong>12% per annum</strong> under M.G.L. c. 231, § 6C. This is one
        of the highest statutory rates in the United States — double what New
        York applies (9%), nearly double Texas (6%), and four times what
        Illinois provides (5%). For a freelancer with an $11,400 unpaid invoice
        that's six months overdue, that's roughly $684 in statutory interest —
        not life-changing, but a meaningful addition to your demand letter that
        signals you know the law.
      </p>

      <p>
        Key Massachusetts interest rate facts:
      </p>
      <ul>
        <li>Rate: <strong>12% per annum</strong> (simple interest) on contract claims (M.G.L. c. 231, § 6C)</li>
        <li>Interest starts accruing from the date of breach or demand, depending on the nature of the claim</li>
        <li>For liquidated claims (fixed amounts like an invoice), interest runs from the date payment was due</li>
        <li>For unliquidated claims, interest runs from the date of the demand letter or the filing of the complaint</li>
        <li>Interest continues accruing through judgment and post-judgment</li>
        <li>The rate is fixed by statute — it doesn't float with market rates like Michigan's T-note-indexed rate</li>
      </ul>

      <p>
        For an $11,400 invoice due January 1, 2026, a demand letter sent July 1,
        2026 would include approximately $684 in accrued interest (6 months ×
        1% per month). That brings the total demand to $12,084 — and you should
        state both figures clearly: the principal ($11,400) and the accrued
        interest ($684), with the statutory basis cited (M.G.L. c. 231, § 6C).
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
        <strong>💡 Pro tip:</strong> Always calculate and include statutory
        interest in your Massachusetts demand letter. A client who sees "plus
        12% annual interest under M.G.L. c. 231, § 6C" knows two things: (1)
        you've done your homework, and (2) the meter is running at $3.74 per day
        on that $11,400 invoice. That daily cost psychology is far more
        persuasive than a lump sum.
      </div>

      <h2>Massachusetts Statute of Limitations: 6 Years for Written Contracts</h2>

      <p>
        Under M.G.L. c. 260, § 2, Massachusetts provides a{' '}
        <strong>6-year statute of limitations</strong> for actions on written
        contracts. This is fairly standard — the same as Michigan, Georgia, and
        most other states. Oral contracts also get 6 years. The key practical
        takeaway: you have a long runway, but don't wait. The sooner you send
        the demand letter, the stronger your position — evidence is fresher,
        witnesses are available, and the client hasn't had time to reorganize or
        disappear.
      </p>

      <p>
        Timelines to know:
      </p>
      <ul>
        <li>Written contracts: <strong>6 years</strong> from the date of breach (M.G.L. c. 260, § 2)</li>
        <li>Oral contracts: <strong>6 years</strong> (M.G.L. c. 260, § 2)</li>
        <li>Consumer protection claims (Chapter 93A): <strong>4 years</strong> from the date of the unfair or deceptive act (M.G.L. c. 260, § 5A)</li>
        <li>Fraud claims: <strong>3 years</strong> from discovery (M.G.L. c. 260, § 12)</li>
      </ul>

      <h2>Massachusetts Chapter 93A: The Freelancer's Secret Weapon</h2>

      <p>
        This is the section that makes Massachusetts demand letters genuinely
        dangerous to ignore. Chapter 93A of the Massachusetts General Laws
        (M.G.L. c. 93A, § 1–11) is the state's consumer protection statute —
        and it's one of the broadest and most powerful in the country. While its
        name says "consumer," Massachusetts courts have interpreted it to cover
        <strong>business-to-business transactions</strong> as well, so long as
        the conduct occurred "primarily and substantially" within Massachusetts
        and the unfair or deceptive act took place in a business context.
      </p>

      <p>
        Here's what Chapter 93A means for a freelancer sending a demand letter:
      </p>
      <ul>
        <li>
          <strong>30-Day Demand Letter Requirement:</strong> Before you can file
          a Chapter 93A lawsuit, you <strong>must</strong> send a written demand
          letter to the other party at least 30 days in advance (M.G.L. c. 93A,
          § 9(3)). The letter must identify the claimant, describe the unfair or
          deceptive act, and state the injury suffered.
        </li>
        <li>
          <strong>Treble Damages:</strong> If the court finds that the other
          party's conduct was willful or knowing — and "I just didn't feel like
          paying the freelancer" can qualify — the court <strong>must</strong>
          award triple damages (M.G.L. c. 93A, § 9(3)).
        </li>
        <li>
          <strong>Attorney Fees:</strong> If you win, the court{' '}
          <strong>must</strong> award reasonable attorney fees and costs (M.G.L.
          c. 93A, § 9(4)). This is huge — it means you can hire a lawyer on
          contingency for a claim that might otherwise be too small to justify
          legal fees.
        </li>
        <li>
          <strong>"Unfair or deceptive" is broad:</strong> Breach of contract
          alone isn't automatically a 93A violation — but breach of contract{' '}
          <em>plus</em> some deceptive conduct (like lying about why they
          haven't paid, stringing you along with false promises, or ghosting you
          after repeated commitments) can be. Massachusetts courts have found
          93A violations in a wide range of business-to-business disputes.
        </li>
      </ul>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-6">
        <strong>⚡ The Chapter 93A Math:</strong> If your $11,400 invoice goes
        unpaid for months, the client makes repeated false promises ("the check
        is in the mail"), and you send a proper 93A demand letter establishing
        the deceptive pattern — then win in court: $11,400 × 3 (treble) ={' '}
        <strong>$34,200</strong>, plus 12% statutory interest, plus your
        attorney fees paid by the other side. A client who understands this math
        usually settles after the demand letter.
      </div>

      <h2>How to Write a Massachusetts Chapter 93A Demand Letter</h2>

      <p>
        A Massachusetts demand letter that invokes Chapter 93A must meet
        specific requirements to preserve your right to treble damages. Here's
        what to include:
      </p>
      <ol>
        <li>
          <strong>Your identity and contact information</strong> — full name,
          address, email, phone
        </li>
        <li>
          <strong>Description of the unfair or deceptive act</strong> — be
          specific: dates, amounts, what was promised vs. what happened, any
          false statements or deceptive conduct. Don't just say "they didn't
          pay" — document the pattern: "On March 15, you said the check was
          mailed. On April 2, you said there was a 'bank issue.' On May 10, you
          stopped responding entirely."
        </li>
        <li>
          <strong>The injury suffered</strong> — the amount owed, plus any
          consequential damages (lost opportunities, overdraft fees because you
          were counting on the payment, etc.)
        </li>
        <li>
          <strong>A reasonable settlement offer</strong> — the statute requires
          you to make a written offer of settlement. This can simply be: "I am
          willing to settle this matter for the full amount owed ($11,400 plus
          $684 in statutory interest under M.G.L. c. 231, § 6C, for a total of
          $12,084) paid within 30 days."
        </li>
        <li>
          <strong>The 30-day response deadline</strong> — explicitly state that
          the recipient has 30 days from receipt to respond with a reasonable
          settlement offer, as required by M.G.L. c. 93A, § 9(3).
        </li>
        <li>
          <strong>Warning about Chapter 93A remedies</strong> — state clearly
          that if the matter is not resolved within 30 days and you are forced to
          file suit, you will seek treble damages, attorney fees, and costs
          under M.G.L. c. 93A, § 9.
        </li>
      </ol>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
        <strong>📬 Send it by certified mail, return receipt requested.</strong>{' '}
        The 30-day clock under Chapter 93A starts from the date of receipt, not
        the date you send it. The certified mail receipt is your proof that the
        clock started — and that the client can't claim they never got it. Also
        keep a copy for your records; you'll need to show the court what you
        sent.
      </div>

      <h2>What Happens If the Client Ignores Your 93A Letter</h2>

      <p>
        If 30 days pass with no reasonable settlement offer, you can file suit.
        In Massachusetts, you have several options depending on the amount:
      </p>
      <ul>
        <li>
          <strong>Small Claims Court ($7,000 or less):</strong> Fast,
          inexpensive, attorneys allowed but procedural simplicity makes it
          manageable solo. Works well for smaller invoices.
        </li>
        <li>
          <strong>District Court (up to $50,000):</strong> More formal, but
          where most Chapter 93A claims are heard. The filing fee is $180 plus
          $15 for the summons. You'll want a lawyer here — but remember, if you
          win on 93A grounds, the other side pays your legal fees.
        </li>
        <li>
          <strong>Superior Court (unlimited):</strong> For larger claims. Higher
          filing fees, mandatory case management conferences, and strict
          procedural rules. Chapter 93A claims above $50,000 go here.
        </li>
      </ul>

      <p>
        The key strategic decision: if your claim is under $7,000, small claims
        is the obvious path. If it's between $7,001 and $50,000, the Chapter 93A
        attorney-fee provision makes hiring a lawyer economically viable —
        because the other side pays if you win. This fundamentally changes the
        risk calculus compared to other states where you eat your own legal fees
        regardless.
      </p>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-6">
        <strong>✅ The Massachusetts Advantage:</strong> In most states, a
        freelancer with a $11,400 unpaid invoice faces a brutal cost-benefit
        analysis: hiring a lawyer might cost $5,000–$8,000, eating most of your
        recovery. In Massachusetts, Chapter 93A flips that: the lawyer costs the
        other side $5,000–$8,000 if you win. That's why a well-written 93A
        demand letter gets responses that demand letters in other states don't.
      </div>

      <h2>Putting It All Together: The Massachusetts Demand Letter That Works</h2>

      <p>
        Your Massachusetts demand letter should hit every note:
      </p>
      <ol>
        <li>State the amount owed clearly — principal + accrued 12% interest under M.G.L. c. 231, § 6C</li>
        <li>Document the deceptive pattern that triggers Chapter 93A — false promises, ghosting, intentional delay</li>
        <li>Make a specific settlement offer with a 30-day deadline</li>
        <li>State clearly that you will seek treble damages + attorney fees under Chapter 93A if forced to litigate</li>
        <li>Send it certified mail, return receipt requested</li>
        <li>Keep the tone professional and factual — the letter is evidence, not a venting session</li>
      </ol>

      <p>
        The combination of high statutory interest (12%), Chapter 93A's treble
        damages, and the attorney-fee-shifting provision makes Massachusetts one
        of the most favorable states in the country for freelancers chasing an
        unpaid invoice. A demand letter that cites these statutes correctly
        doesn't just ask for payment — it lays out the math of what happens if
        the client forces you to sue. And in Massachusetts, that math is
        expensive for the client.
      </p>

      <p>
        <strong>Bottom line:</strong> Sending a Massachusetts demand letter
        without citing Chapter 93A is like bringing a knife to a gunfight. Cite
        it, respect the 30-day procedure, and your demand letter goes from
        "please pay me" to "pay me now, or pay me three times as much later —
        plus my lawyer."
      </p>
    </ArticleLayout>
  );
}
