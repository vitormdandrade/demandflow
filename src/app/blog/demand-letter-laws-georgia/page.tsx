import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-georgia")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-georgia">
      <p>
        You're a freelancer in Atlanta and a client owes you $9,200 for four
        months of design work. You've sent reminders, you've called, you've
        waited. Now you're ready to send a demand letter — and you want to make
        sure you're using every tool Georgia law gives you. Good call. Georgia
        has a $15,000 small claims limit (one of the highest in the country),
        a 7% statutory interest rate that runs from the date of demand, and a
        unique statute that lets freelancers recover attorney fees if their
        contract includes the right language — all of which change what your
        demand letter should say.
      </p>

      <p>
        This guide covers what Georgia law actually says about demand letters:
        the $15,000 Magistrate Court threshold, the 7% statutory interest
        provision (O.C.G.A. § 7-4-2), Georgia's contractual attorney fee
        recovery statute (O.C.G.A. § 13-1-11), the 6-year statute of
        limitations on written contracts, and the specific language that makes
        a Georgia demand letter effective.
      </p>

      <h2>Georgia's Small Claims Limit: $15,000 in Magistrate Court</h2>

      <p>
        Georgia's small claims court — officially called <strong>Magistrate
        Court</strong> — handles disputes up to <strong>$15,000</strong>. That's
        the highest limit in the Southeast and well above the $5,000–$8,000
        range that most neighboring states offer. For a freelance dispute of
        $9,200, you don't need a Superior Court lawyer — Magistrate Court was
        designed for self-represented litigants.
      </p>

      <p>
        Key Magistrate Court facts for Georgia freelancers:
      </p>
      <ul>
        <li>Limit: <strong>$15,000</strong> in damages (excluding costs and interest)</li>
        <li>Filing fee: ~$50–$60 depending on the county</li>
        <li>Attorneys are allowed but not required — the system is built for self-representation</li>
        <li>Statute of limitations for written contracts: <strong>6 years</strong> (O.C.G.A. § 9-3-24)</li>
        <li>Statute of limitations for oral contracts: 4 years (O.C.G.A. § 9-3-25)</li>
        <li>Appeals from Magistrate Court go to State or Superior Court for a de novo hearing</li>
      </ul>

      <p>
        Why the $15,000 limit matters for your demand letter: it means most
        freelance non-payment disputes can stay in Magistrate Court, which is
        faster, cheaper, and simpler than Superior Court. But Georgia judges
        expect you to have made a genuine attempt to resolve the dispute before
        filing — and that's exactly what a demand letter does. It becomes
        Exhibit A when you show the court you tried.
      </p>

      <h2>Georgia's 7% Statutory Interest: O.C.G.A. § 7-4-2</h2>

      <p>
        Georgia law entitles you to <strong>7% per year</strong> simple interest
        on liquidated demands — meaning invoices where the amount is certain and
        undisputed — from the date the demand is made. This is codified at
        O.C.G.A. § 7-4-2. Key points:
      </p>

      <ul>
        <li>The 7% rate applies to <strong>liquidated</strong> (fixed-amount) demands — if your invoice says $9,200 and there's no genuine dispute about the amount, you're entitled to 7% from the date of your written demand</li>
        <li>For <strong>unliquidated</strong> damages (where the amount is genuinely in dispute), the pre-judgment interest rate is the prime rate plus 3%, determined by the court</li>
        <li>Interest runs from the date of the <strong>written demand</strong> — so the date on your demand letter is the clock-start date for interest accrual</li>
        <li>On a $9,200 invoice that's 6 months overdue, 7% simple interest = $322 and climbing</li>
      </ul>

      <p>
        Your demand letter should explicitly reference O.C.G.A. § 7-4-2,
        calculate the interest owed as of the letter's date, and state that
        interest continues to accrue at 7% per year until payment is made in
        full. Including the math signals to the recipient that you understand
        Georgia law — and that delaying further only increases what they owe.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4 font-mono text-sm">
        Interest = (Principal × 0.07 × Days Since Demand) / 365
      </div>

      <h2>Georgia's Attorney Fee Recovery: O.C.G.A. § 13-1-11</h2>

      <p>
        This is the Georgia-specific tool that most freelancers miss — and it
        can dramatically change the leverage you bring to a demand letter.
        Georgia Code <strong>§ 13-1-11</strong> allows a party to recover
        reasonable attorney fees and court costs if:
      </p>

      <ol>
        <li>Your contract (or statement of work, or even email agreement) includes
        a provision allowing for the recovery of attorney fees in the event of a
        breach, <strong>and</strong></li>
        <li>You give the debtor written notice that the attorney fee provision
        will be enforced if payment isn't made within 10 days</li>
      </ol>

      <p>
        That second requirement — the <strong>10-day written notice</strong> —
        is often satisfied by the demand letter itself. If your contract says
        something like "In the event of non-payment, Client agrees to pay all
        costs of collection, including reasonable attorney fees," your demand
        letter should:
      </p>

      <ul>
        <li>Quote the exact contract language that provides for attorney fees</li>
        <li>State that you will seek attorney fees under O.C.G.A. § 13-1-11 if
        payment isn't made within 10 days</li>
        <li>Send it with proof of delivery (certified mail or email with read
        receipt)</li>
      </ul>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
        <strong>⚠️ Important:</strong> If your freelance contract doesn't
        include an attorney fee provision, O.C.G.A. § 13-1-11 does not apply.
        This is why every freelancer in Georgia should include an attorney fee
        clause in their contracts — it turns a demand letter from a polite
        request into a document with real financial consequences for the
        non-paying client. DemandFlow's templates include this language by
        default for Georgia users.
      </div>

      <h2>What a Georgia Demand Letter Must Include</h2>

      <p>
        Georgia Magistrate Courts don't mandate a specific format, but a demand
        letter that includes the following elements is far more effective:
      </p>

      <ol>
        <li>
          <strong>Clear identification of parties:</strong> your name/business
          name, your address, and the client's legal name and address. If the
          client is an LLC registered in Georgia, name the entity — not just
          the person you email. You can verify Georgia business registrations at
          the Secretary of State's website.
        </li>
        <li>
          <strong>The claim amount, itemized:</strong> list each invoice by
          number, date, and amount. Include any late fees specified in your
          contract. Include the 7% interest calculation under O.C.G.A. § 7-4-2,
          showing the math.
        </li>
        <li>
          <strong>The legal basis for the debt:</strong> reference your contract,
          statement of work, or the email chain where the client approved the
          deliverables. If it was an oral agreement, describe the terms and when
          they were agreed to. Georgia's 6-year statute of limitations on
          written contracts gives you a long runway, but document everything.
        </li>
        <li>
          <strong>Reference to O.C.G.A. § 13-1-11 (attorney fees):</strong> if
          your contract includes an attorney fee provision, quote it verbatim
          and state: "Pursuant to O.C.G.A. § 13-1-11, if payment is not received
          within 10 days of this notice, I will seek to recover reasonable
          attorney fees and costs of collection as provided in our agreement."
        </li>
        <li>
          <strong>A specific deadline:</strong> 10 days from receipt (to satisfy
          the O.C.G.A. § 13-1-11 attorney fee notice requirement) or 14 days
          as a general demand deadline. State what happens next if the deadline
          passes.
        </li>
        <li>
          <strong>Reference to Magistrate Court filing:</strong> "[County]
          County Magistrate Court" — name the specific county where you'll file
          (usually where the client is located or where the contract was
          performed).
        </li>
      </ol>

      <h2>Georgia-Specific Pitfalls to Avoid</h2>

      <h3>1. Not including the attorney fee notice language</h3>
      <p>
        If your contract has an attorney fee provision but your demand letter
        doesn't give the required 10-day notice under O.C.G.A. § 13-1-11, you
        can't recover attorney fees — even if you win. This is one of the most
        common mistakes Georgia freelancers make. The demand letter is your
        statutory notice vehicle.
      </p>

      <h3>2. Waiting too long to send the demand</h3>
      <p>
        Georgia gives you a generous 6 years on written contracts and 4 years on
        oral ones. But the longer you wait, the harder it is to prove the debt
        existed and the work was delivered. Send the demand letter as soon as the
        first polite reminder doesn't work — the 7% interest under O.C.G.A.
        § 7-4-2 starts running from the date of your written demand, so delay
        costs you money.
      </p>

      <h3>3. Forgetting to name the correct county</h3>
      <p>
        Georgia has 159 counties — more than any state except Texas. Venue in
        Magistrate Court is generally proper where the defendant resides or
        where the contract was to be performed. If you name the wrong county
        in your demand letter, the client may correctly ignore it as
        non-credible. Look up the client's business address and verify the
        county before writing the letter.
      </p>

      <h3>4. Over-promising on the 7% interest</h3>
      <p>
        The 7% rate under O.C.G.A. § 7-4-2 applies to <strong>liquidated</strong>
        demands — fixed-amount invoices where there's no genuine dispute about
        what's owed. If the client has raised a legitimate dispute about the
        quality of work or the scope, the demand may be unliquidated and the 7%
        rate may not apply until a judge determines the amount. Your demand
        letter should still claim the 7% rate, but don't guarantee it if the
        debt is disputed.
      </p>

      <h2>When to Escalate Beyond a Demand Letter</h2>

      <p>
        If you've sent a properly-formatted Georgia demand letter, the 10-day
        O.C.G.A. § 13-1-11 window has passed, the 14-day general demand deadline
        has come and gone, and you haven't received payment — it's time to file
        in Magistrate Court. The process is straightforward:
      </p>

      <ul>
        <li>Go to the Magistrate Court clerk's office in the appropriate county</li>
        <li>File a Statement of Claim (a simple form that states who owes you
        what and why)</li>
        <li>Pay the filing fee (~$50–$60) — you can ask the court to add this
        to the judgment</li>
        <li>The court will schedule a hearing, typically within 30–45 days</li>
        <li>Bring your demand letter, contract, invoices, and email correspondence
        to the hearing</li>
      </ul>

      <p>
        The demand letter you sent becomes Exhibit A. A well-written Georgia
        demand letter doesn't just get you paid — it builds the paper trail
        that wins your case, recovers your attorney fees, and earns 7% interest
        from the date of demand.
      </p>

      <h2>Generate Your Georgia Demand Letter — $29</h2>

      <p>
        DemandFlow generates a Georgia-compliant demand letter with all the
        legal language your claim needs: itemized damages, O.C.G.A. § 7-4-2
        interest calculation, O.C.G.A. § 13-1-11 attorney fee notice, the
        correct Magistrate Court county, and a 14-day payment deadline. Fill in
        your details, download the letter, send it — and give your Georgia
        invoice the legal weight it deserves.
      </p>

      <p>
        <strong>Not legal advice:</strong> This guide and DemandFlow's templates
        are for informational purposes only and do not constitute legal advice.
        For claims near or above the $15,000 Magistrate Court limit, or for
        complex disputes, consult a Georgia-licensed attorney.
      </p>
    </ArticleLayout>
  );
}
