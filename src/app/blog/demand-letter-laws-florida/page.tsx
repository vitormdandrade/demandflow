import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-florida")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-florida">
      <p>
        You're a freelancer in Florida and a client owes you $6,800. You know a
        demand letter is your first move — but Florida has specific rules that can
        make or break your claim. Florida's small claims limit is higher than most
        states ($8,000), the state has a powerful civil theft statute that can
        treble your damages, and Florida courts take a dim view of plaintiffs who
        skip pre-suit demands. Getting the letter right matters.
      </p>

      <p>
        This guide covers what Florida law actually says about demand letters: the
        $8,000 small claims threshold, the civil theft statute (F.S. § 772.11),
        Florida's pre-suit notice requirements, how to calculate pre-judgment
        interest, and the specific language that makes a Florida demand letter
        carry real legal weight.
      </p>

      <h2>Florida's Small Claims Limit: $8,000</h2>

      <p>
        Florida's small claims court (technically "county court" in the small
        claims division) handles disputes up to <strong>$8,000</strong> as of
        2026 — one of the highest limits in the country. That's well above the
        $5,000 median for all states and more than double the limits in
        neighboring Georgia and Alabama.
      </p>

      <p>
        Why this matters for your demand letter: if a client owes you $6,800,
        you don't need a circuit-court lawyer — county court is designed for
        self-represented litigants. But Florida judges expect you to have made a
        good-faith attempt to resolve the dispute before filing. A demand letter
        is that attempt, on paper.
      </p>

      <p>
        Key small claims facts for Florida freelancers:
      </p>
      <ul>
        <li>Limit: <strong>$8,000</strong> in damages (excluding costs and interest)</li>
        <li>Filing fee: ~$55–$300 depending on the claim amount and county</li>
        <li>Attorneys are allowed but not required — the system is built for self-representation</li>
        <li>Statute of limitations for written contracts: 5 years (F.S. § 95.11(2)(b))</li>
        <li>Statute of limitations for oral contracts: 4 years (F.S. § 95.11(3)(k))</li>
      </ul>

      <h2>Florida's Civil Theft Statute: The Demand Letter's Best Friend</h2>

      <p>
        Florida Statute <strong>§ 772.11</strong> — the civil theft statute — is
        one of the most powerful collection tools available to freelancers in the
        state. If a client knowingly refuses to pay for services they received and
        benefited from, and you can show the refusal was intentional (not a
        genuine billing dispute), Florida law allows you to recover:
      </p>
      <ul>
        <li><strong>Three times</strong> the actual damages (treble damages)</li>
        <li>Your attorney's fees and court costs</li>
        <li>Pre-judgment interest</li>
      </ul>

      <p>
        But — and this is critical for your demand letter — Florida's civil theft
        statute has a <strong>mandatory pre-suit notice requirement</strong>.
        Before you can file a civil theft claim, you must send the defendant a
        written demand for payment by certified mail, return receipt requested.
        The letter must:
      </p>
      <ul>
        <li>Identify the property or money at issue and the amount</li>
        <li>State that the recipient has 30 days to make payment</li>
        <li>Be sent by certified mail, return receipt requested (keep the receipt
        — it's evidence of compliance)</li>
      </ul>

      <p>
        If the defendant pays within 30 days, you cannot file the civil theft
        claim (you can still sue for the underlying debt, but treble damages are
        off the table). If they don't pay, you can add the civil theft count —
        and the prospect of treble damages often motivates settlement far faster
        than a standard breach-of-contract claim.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
        <strong>⚠️ Important:</strong> Mentioning Florida's civil theft statute
        in your demand letter is a double-edged sword. It's extremely effective
        at getting attention — but if you threaten criminal prosecution or use
        the statute as a threat rather than a legitimate legal notice, Florida
        courts have sanctioned plaintiffs for abuse. Your letter should reference
        the statute factually ("Florida law provides for treble damages under
        F.S. § 772.11") without making threats or demands that go beyond what
        the statute allows.
      </div>

      <h2>Pre-Judgment Interest in Florida</h2>

      <p>
        Florida law entitles you to pre-judgment interest on unpaid invoices from
        the date the payment became due. The interest rate is set annually by
        the Florida Chief Financial Officer and is currently <strong>11.03% per
        year</strong> (2026 rate). That's substantial — on a $6,800 invoice that's
        six months overdue, interest alone is approximately $375.
      </p>

      <p>
        Your demand letter should calculate and include the interest owed as of
        the letter's date, and state that interest continues to accrue daily. The
        formula:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4 font-mono text-sm">
        Interest = (Principal × 0.1103 × Days Past Due) / 365
      </div>

      <p>
        Including the math in your letter signals that you understand Florida law
        and have done the work — it makes the recipient take you more seriously
        than a letter that just says "pay me."
      </p>

      <h2>What a Florida Demand Letter Must Include</h2>

      <p>
        Florida courts don't mandate a specific format, but a demand letter that
        includes the following elements is far more likely to be treated as a
        credible pre-suit communication:
      </p>

      <ol>
        <li>
          <strong>Clear identification of parties:</strong> your name/business
          name, your address, and the client's legal name and address. If the
          client is an LLC, name the entity — not just the person you email.
        </li>
        <li>
          <strong>The claim amount, itemized:</strong> don't just list a total.
          Show the invoice number, date, amount, and any late fees or interest
          calculated separately. Florida judges appreciate arithmetic.
        </li>
        <li>
          <strong>The legal basis for the debt:</strong> reference the contract,
          the statement of work, or the email chain where the client approved
          the work. If it's an oral agreement, describe the terms and when they
          were agreed to.
        </li>
        <li>
          <strong>Reference to F.S. § 772.11 (civil theft) — carefully:</strong>
          state that Florida law provides for treble damages and attorney's fees
          if the debt resulted from a knowing refusal to pay for services
          received. Do not accuse the client of theft — just state the law.
        </li>
        <li>
          <strong>A specific deadline:</strong> 30 days from the date of the
          letter. If you're sending by certified mail (which you should),
          specify that the 30 days begins on the date of delivery as shown on
          the return receipt.
        </li>
        <li>
          <strong>What happens next:</strong> state that if payment isn't
          received by the deadline, you will file a claim in [County] County
          Court and will seek all available damages including treble damages
          under F.S. § 772.11, pre-judgment interest, and court costs.
        </li>
      </ol>

      <h2>Florida-Specific Pitfalls to Avoid</h2>

      <h3>1. Threatening criminal prosecution</h3>
      <p>
        Never write "pay or I'll call the police" or "this is theft and you'll
        go to jail." Florida courts distinguish between civil theft (a money
        damages claim) and criminal theft (prosecution by the state). Threatening
        criminal prosecution to collect a civil debt can constitute extortion
        under Florida law. Stick to civil remedies.
      </p>

      <h3>2. Sending from a personal email with no paper trail</h3>
      <p>
        Florida's civil theft pre-suit notice requires certified mail, return
        receipt requested. An email — even a read receipt — doesn't satisfy the
        statutory requirement if you later want to add a civil theft count. Send
        the letter by certified mail and keep the receipt and the return card.
      </p>

      <h3>3. Forgetting the 5-year statute of limitations</h3>
      <p>
        Florida gives you 5 years on a written contract and 4 years on an oral
        one — which is generous. But don't let an unpaid invoice sit for years
        while you "hope they'll pay eventually." The clock is ticking, and a
        demand letter sent close to the deadline doesn't reset it.
      </p>

      <h2>When to Escalate Beyond a Demand Letter</h2>

      <p>
        If you've sent a properly-formatted demand letter by certified mail, the
        30-day window has passed, and you haven't received payment — it's time to
        file. Florida's small claims process is relatively fast (typically 30–90
        days to a hearing) and the forms are straightforward. You can file in the
        county where the defendant lives, where the contract was signed, or where
        the payment was supposed to be made.
      </p>

      <p>
        The demand letter you sent becomes Exhibit A in your filing. A well-written
        letter doesn't just get you paid — it builds the paper trail that wins
        your case if you have to go to court.
      </p>

      <h2>Generate Your Florida Demand Letter — $29</h2>

      <p>
        DemandFlow generates a Florida-compliant demand letter with all the legal
        language your claim needs: itemized damages, pre-judgment interest
        calculation, civil theft statute notice, and a 30-day deadline. Fill in
        your details, download the letter, send it by certified mail — and give
        your invoice the legal weight it deserves.
      </p>

      <p>
        <strong>Not legal advice:</strong> This guide and DemandFlow's templates
        are for informational purposes only and do not constitute legal advice.
        For claims near or above the $8,000 small claims limit, or for complex
        disputes, consult a Florida-licensed attorney.
      </p>
    </ArticleLayout>
  );
}
