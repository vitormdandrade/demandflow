import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-mississippi")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-mississippi">
      <p>
        You're a freelance web developer in Jackson's Fondren arts district, and
        a Gulfport-based real estate firm owes you $3,200 for a property listing
        platform you delivered four months ago — the site is live, your code is
        in production, and your final invoice has been ignored through four
        follow-ups. It's time for a demand letter — and if you're in Mississippi,
        you have tools that many freelancers overlook: a $3,500 small claims
        limit in Justice Court (Miss. Code Ann. § 9-11-9), 8% statutory interest
        on judgments (Miss. Code Ann. § 75-17-7), a 3-year statute of limitations
        for written contracts and open accounts (Miss. Code Ann. § 15-1-29), and
        the Mississippi Consumer Protection Act (Miss. Code Ann. § 75-24-1) that
        — while limited to Attorney General enforcement — still carries weight as
        leverage in a demand letter. From Jackson's growing tech and creative
        scene and the Gulf Coast's tourism and real estate economy to the
        manufacturing hubs of Tupelo and the university towns of Oxford and
        Starkville, Mississippi's freelance landscape is diverse and
        under-appreciated — and a well-crafted demand letter that cites the open
        account statute and 8% interest gets results. Here's exactly how
        Mississippi freelancers write a demand letter that leverages every tool
        the Magnolia State provides.
      </p>

      <h2>Mississippi Justice Court: $3,500 Small Claims Limit</h2>

      <p>
        Mississippi's small claims system operates through Justice Court under
        Miss. Code Ann. § 9-11-9 with a jurisdictional limit of{" "}
        <strong>$3,500</strong>. While this limit is modest compared to states
        like Tennessee ($25,000) or Texas ($20,000), it comfortably covers the
        majority of freelance disputes — a $500 logo design, a $2,000 website,
        a $3,200 development contract — without requiring an attorney. Here's
        what every Mississippi freelancer needs to know about Justice Court:
      </p>

      <ul>
        <li>
          <strong>Filing fee:</strong> $35–$75 depending on the county — among
          the lowest in the country, making Justice Court accessible even for
          small claims under $500
        </li>
        <li>
          <strong>No attorneys required</strong> — Justice Court is designed for
          self-represented parties; judges are accustomed to hearing cases from
          individuals without lawyers, and the relaxed procedural rules make it
          relatively straightforward for freelancers to present their case
        </li>
        <li>
          <strong>Venue:</strong> file in the county where the defendant resides
          or has their principal place of business — for Jackson freelancers,
          this is typically Hinds County; for Gulf Coast freelancers, Harrison
          County (Gulfport/Biloxi) or Jackson County (Pascagoula); for North
          Mississippi, Lee County (Tupelo) or Lafayette County (Oxford)
        </li>
        <li>
          <strong>Appeal:</strong> the losing party can appeal to County Court or
          Circuit Court within 30 days for a trial de novo — but in practice,
          most defendants don't appeal claims under $3,500 because the cost of
          hiring a lawyer for the appeal exceeds the claim amount
        </li>
        <li>
          <strong>Service of process:</strong> the Justice Court clerk handles
          service by certified mail or by the county sheriff — for demand letter
          recipients who don't respond, the ease of service in Mississippi makes
          the threat of a lawsuit credible and immediate
        </li>
      </ul>

      <p>
        For claims above $3,500, you'll need to file in County Court (up to
        $200,000) or Circuit Court. But many Mississippi freelancers with claims
        between $3,500 and $5,000 choose to waive the excess and stay in Justice
        Court — the lower filing fee, faster timeline, and no-lawyer requirement
        make the trade-off worthwhile when the alternative is years of litigation
        and thousands in legal fees.
      </p>

      <h2>Mississippi's Open Account Statute: A Freelancer's Secret Weapon</h2>

      <p>
        Mississippi has a unique legal tool that few freelancers know about: the{" "}
        <strong>open account statute</strong> (Miss. Code Ann. § 15-1-29). In
        Mississippi law, an "open account" is an ongoing business relationship
        where goods or services are provided over time with a reasonable
        expectation of payment — and Mississippi courts have interpreted this
        broadly to include freelance relationships where you provide services on
        an ongoing or project basis. Here's why this matters for your demand
        letter:
      </p>

      <ul>
        <li>
          <strong>Shifts the burden of proof:</strong> once you establish that
          your freelance relationship qualifies as an open account (and most
          ongoing client relationships do), the burden shifts to the client to
          prove they paid — you don't have to prove they owe; they have to prove
          they don't
        </li>
        <li>
          <strong>Sworn account procedure:</strong> under Mississippi Rule of
          Civil Procedure 8(c) and the common law of sworn accounts, you can file
          a sworn affidavit itemizing the services provided, dates, and amounts
          owed — and if the client doesn't file a sworn denial within 30 days,
          you're entitled to a default judgment without a trial
        </li>
        <li>
          <strong>Demand letter integration:</strong> mention in your demand
          letter that your freelance relationship constitutes an open account
          under Mississippi law, and that you've prepared a sworn account
          statement itemizing every invoice — this signals to the client that
          they won't be able to simply deny the debt and force you to prove every
          line item
        </li>
        <li>
          <strong>Practical example:</strong> if you've been a client's go-to
          graphic designer for 18 months, completing 12 projects — even if each
          had a separate contract — Mississippi courts treat that as an open
          account, making it much harder for the client to dispute individual
          invoices without sworn testimony
        </li>
      </ul>

      <h2>Mississippi Statutory Interest: 8% on Judgments (Miss. Code Ann. § 75-17-7)</h2>

      <p>
        Mississippi sets statutory interest on judgments at{" "}
        <strong>8% per year</strong> under Miss. Code Ann. § 75-17-7. This
        interest accrues from the date of judgment and — critically for
        freelancers — Mississippi courts also allow prejudgment interest on
        liquidated claims (a specific, calculable amount like an unpaid invoice)
        from the date the payment was due. For freelancers, this means:
      </p>

      <ul>
        <li>
          <strong>Prejudgment interest on invoices:</strong> Mississippi courts
          routinely award prejudgment interest at 8% on liquidated claims,
          running from the date the invoice became past due — a $3,200 invoice
          that's 18 months overdue accrues approximately $384 in prejudgment
          interest, turning a $3,200 claim into a $3,584 claim
        </li>
        <li>
          <strong>Demand letter as documentation:</strong> your demand letter
          should explicitly calculate the interest owed and state the total —
          this creates a paper trail that makes it easy for a judge to award
          interest without additional hearings or motions
        </li>
        <li>
          <strong>Contractual interest:</strong> if your freelance contract
          specifies an interest rate on late payments (e.g., 1.5% per month),
          Mississippi courts will generally enforce that contractual rate up to
          the state's usury limit — so include a late payment interest clause in
          every contract
        </li>
      </ul>

      <h2>Mississippi Statute of Limitations: 3 Years (Miss. Code Ann. § 15-1-29)</h2>

      <p>
        Mississippi gives freelancers a{" "}
        <strong>3-year statute of limitations</strong> on written contracts and
        open accounts under Miss. Code Ann. § 15-1-29. This is shorter than most
        states (which typically allow 4-6 years), so Mississippi freelancers need
        to be more vigilant about pursuing overdue invoices promptly. Key points:
      </p>

      <ul>
        <li>
          <strong>Clock starts when payment is due:</strong> the 3-year clock
          begins running from the date payment was due under your contract — not
          from the date the work was completed or the invoice was sent
        </li>
        <li>
          <strong>Partial payment restarts the clock:</strong> if the client
          makes a partial payment on the invoice, the 3-year clock resets from
          the date of that payment — this is critical for freelancers with older,
          partially-paid invoices that would otherwise be time-barred
        </li>
        <li>
          <strong>Written acknowledgment also restarts:</strong> if the client
          acknowledges the debt in writing (email, text, or letter), the 3-year
          clock resets from the date of that acknowledgment — so any email from
          the client saying "we'll get to this next month" effectively extends
          your deadline
        </li>
        <li>
          <strong>Don't wait:</strong> because Mississippi's 3-year SOL is
          shorter than most states, send your demand letter within 12-18 months
          of non-payment — waiting until year two or three risks the client
          running out the clock
        </li>
      </ul>

      <h2>Mississippi Consumer Protection Act: Leverage Without a Private Right of Action</h2>

      <p>
        The Mississippi Consumer Protection Act (Miss. Code Ann. § 75-24-1 et
        seq.) prohibits deceptive trade practices, including fraudulent or
        misleading conduct in business transactions. However — and this is
        critical — the Act does <strong>not</strong> provide a private right of
        action for individuals; only the Mississippi Attorney General can bring
        enforcement actions. That said, the Act still has value in a demand
        letter:
      </p>

      <ul>
        <li>
          <strong>AG complaint threat:</strong> your demand letter can state that
          if the client's conduct rises to the level of a deceptive trade
          practice (e.g., they never intended to pay, they misrepresented their
          financial situation), you will file a complaint with the Mississippi
          Attorney General's Consumer Protection Division — and the AG can seek
          civil penalties of up to $10,000 per violation (Miss. Code Ann.
          § 75-24-19)
        </li>
        <li>
          <strong>Reputational pressure:</strong> for businesses that rely on
          their reputation — real estate firms, restaurants, retailers — the
          threat of an AG investigation is often more motivating than the threat
          of a small claims lawsuit, because AG investigations become public
          record
        </li>
        <li>
          <strong>Bad faith claims:</strong> Mississippi recognizes a common law
          cause of action for bad faith breach of contract when the breach is
          intentional and without arguable reason — if your client clearly owes
          the money and simply refuses to pay, you may be able to recover
          punitive damages beyond the invoice amount through a bad faith claim
        </li>
      </ul>

      <h2>How to Write a Mississippi Demand Letter: Step-by-Step</h2>

      <h3>1. Header and Formal Tone</h3>

      <p>
        Use your letterhead or business name at the top. Address the letter to
        the client's registered agent (look it up on the Mississippi Secretary of
        State's website at{" "}
        <a href="https://www.sos.ms.gov/business-services" target="_blank" rel="noopener noreferrer">
          sos.ms.gov/business-services
        </a>
        ) or, for smaller companies, the owner or manager who authorized your
        contract. Send via certified mail with return receipt requested — this
        creates proof of delivery that's critical if you later need to file in
        Justice Court.
      </p>

      <h3>2. Reference the Contract and Invoke the Open Account Statute</h3>

      <p>
        State the contract date, project description, agreed deliverables, and
        payment terms. Attach the contract (or relevant email thread) as an
        exhibit. Then — and this is the Mississippi-specific move — state that
        your ongoing business relationship constitutes an open account under
        Miss. Code Ann. § 15-1-29, and that you've prepared a sworn account
        statement (attach it as Exhibit B) itemizing every invoice with dates,
        amounts, and evidence of delivery. A sample paragraph:
      </p>

      <blockquote>
        <p>
          "Pursuant to our Independent Contractor Agreement dated January 15,
          2026, and the subsequent scope of work for the Gulf Coast Properties
          website redesign (Exhibit A), I delivered the completed platform on
          March 1, 2026. Payment of $3,200 was due within 30 days per Section 5.2
          of the Agreement. Our ongoing business relationship — spanning four
          projects over eight months — constitutes an open account under Miss.
          Code Ann. § 15-1-29. Attached as Exhibit B is a sworn account statement
          itemizing all services rendered, dates of delivery, and the balance
          owed. Under Mississippi law, your failure to file a sworn denial within
          30 days entitles me to a default judgment without further proceedings."
        </p>
      </blockquote>

      <h3>3. Cite the 8% Interest Rate and Calculate Total Owed</h3>

      <p>
        Mississippi's 8% statutory interest rate (Miss. Code Ann. § 75-17-7) is
        one of the highest in the Southeast. Calculate the interest from the date
        payment was due to the date of your letter, and state the total:
      </p>

      <blockquote>
        <p>
          "The principal amount owed is $3,200.00. Prejudgment interest at 8% per
          annum (Miss. Code Ann. § 75-17-7) has accrued from April 1, 2026
          through the date of this letter, in the amount of $170.67, for a total
          of $3,370.67. Interest will continue to accrue at 8% per annum until
          the balance is paid in full."
        </p>
      </blockquote>

      <h3>4. Set a Deadline and Name the Justice Court</h3>

      <p>
        Give the client 14 calendar days to pay. State that if payment is not
        received by the deadline, you will file a claim in{" "}
        <strong>Mississippi Justice Court</strong> in the county where the
        defendant does business. Mention the $3,500 jurisdictional limit, the low
        filing fee, and that attorneys are not required — this signals that
        you're ready and able to file immediately without incurring significant
        costs:
      </p>

      <blockquote>
        <p>
          "If full payment of $3,370.67 is not received by [date], I will file a
          claim in the Justice Court of Harrison County, Mississippi, where your
          business is located. Justice Court has jurisdiction over claims up to
          $3,500, requires no attorneys, and imposes a filing fee of less than
          $75. I am prepared to present my contract (Exhibit A), sworn account
          statement (Exhibit B), and this demand letter as evidence at trial."
        </p>
      </blockquote>

      <h3>5. Mention the AG Complaint Option</h3>

      <p>
        If the client's conduct involves deceptive or fraudulent behavior
        (misrepresentations about payment ability, false promises, bait-and-switch
        on scope), add a paragraph about the Mississippi Consumer Protection Act
        and your intent to file an AG complaint:
      </p>

      <blockquote>
        <p>
          "Your repeated assurances of payment — including your email of March 15
          stating 'the check is in the mail' — followed by five months of silence,
          may constitute deceptive trade practices under the Mississippi Consumer
          Protection Act (Miss. Code Ann. § 75-24-1). A copy of this letter will
          be retained for submission to the Mississippi Attorney General's
          Consumer Protection Division should this matter remain unresolved."
        </p>
      </blockquote>

      <h3>6. Close Professionally</h3>

      <p>
        Maintain a businesslike tone throughout. End with: "I remain open to
        resolving this matter amicably and without the need for litigation. I
        look forward to receiving full payment of $3,370.67 by [date]."
      </p>

      <h2>Top Mississippi Freelance Cities and Their Demand Letter Strategies</h2>

      <h3>Jackson — Government, Healthcare, and Creative Economy</h3>

      <p>
        Jackson's freelance economy is anchored by state government agencies, the
        University of Mississippi Medical Center (UMMC), and a growing creative
        scene in the Fondren and Belhaven neighborhoods. Freelancers here work on
        government RFPs, healthcare IT contracts, and branding/marketing for
        local businesses. For Jackson freelancers: state government clients often
        require invoices to go through multiple approval layers — your demand
        letter should go to both the person who authorized your contract and the
        agency's fiscal officer. Government agencies are particularly sensitive
        to AG complaint threats. File in Hinds County Justice Court.
      </p>

      <h3>Gulfport and Biloxi — Tourism, Hospitality, and Real Estate</h3>

      <p>
        The Mississippi Gulf Coast's freelance economy revolves around tourism,
        hospitality, casino resorts, and coastal real estate. Freelancers here
        build websites for hotels and restaurants, create marketing materials for
        tourism campaigns, and develop property management software for real
        estate firms. For Gulf Coast freelancers: real estate and hospitality
        clients are highly reputation-sensitive — the threat of a public Justice
        Court filing or AG complaint carries outsized weight. File in Harrison
        County Justice Court (Gulfport/Biloxi) or Jackson County Justice Court
        (Pascagoula/Ocean Springs).
      </p>

      <h3>Oxford and Starkville — University Towns and Creative Hubs</h3>

      <p>
        Oxford (University of Mississippi / Ole Miss) and Starkville
        (Mississippi State University) support vibrant freelance communities
        serving the university ecosystem — graphic designers for athletic
        departments, web developers for research labs, copywriters for alumni
        magazines, and photographers for campus events. For university-town
        freelancers: university clients have procurement departments with
        specific invoice procedures — a demand letter that copies the procurement
        office often resolves issues that individual departments have been
        sitting on. File in Lafayette County Justice Court (Oxford) or Oktibbeha
        County Justice Court (Starkville).
      </p>

      <h3>Tupelo — Manufacturing and Small Business</h3>

      <p>
        Tupelo's freelance economy is driven by manufacturing (furniture,
        automotive parts) and small business services. Freelancers here do
        industrial photography, B2B copywriting, and manufacturing software
        development. For Tupelo freelancers: manufacturing clients often have
        net-60 or net-90 payment terms in their own contracts — your demand
        letter should acknowledge their payment cycle but hold them to the
        specific terms in your agreement, not theirs. File in Lee County Justice
        Court.
      </p>

      <h2>Pro Tips for Mississippi Freelance Demand Letters</h2>

      <ul>
        <li>
          <strong>Sworn account is your best friend:</strong> prepare a sworn
          account statement (notarized) itemizing every project, invoice date,
          amount, and evidence of delivery — this single document, combined with
          the open account statute, makes it extremely difficult for a client to
          contest your claim in Justice Court
        </li>
        <li>
          <strong>Mississippi Secretary of State business search:</strong> always
          look up the client's registered agent at{" "}
          <a href="https://www.sos.ms.gov/business-services" target="_blank" rel="noopener noreferrer">
            sos.ms.gov/business-services
          </a>{" "}
          — serving your demand letter on the registered agent ensures it reaches
          the right person and creates an official record that's admissible in
          Justice Court
        </li>
        <li>
          <strong>Document partial payments carefully:</strong> if a client makes
          a partial payment, save the check image, bank statement, or payment
          confirmation — a partial payment resets the 3-year statute of
          limitations under Mississippi law, but you need proof of both the
          payment and the date it was made
        </li>
        <li>
          <strong>Small claims limit strategy:</strong> if your claim is $4,200,
          strongly consider waiving the $700 excess and filing for $3,500 in
          Justice Court rather than escalating to County Court — the difference
          in filing fees, timeline, and attorney requirements almost always
          favors staying in Justice Court
        </li>
        <li>
          <strong>Contractual late fees:</strong> Mississippi courts generally
          enforce reasonable late payment fees in contracts — include a 1.5%
          monthly late fee (18% annual) in every freelance agreement, which is
          well within Mississippi's usury limit and gives you additional leverage
          in your demand letter
        </li>
      </ul>

      <p>
        Mississippi freelancers operate in a state with modest small claims
        limits but powerful procedural tools — the open account statute that
        shifts the burden of proof to the defendant, the sworn account procedure
        that can secure default judgments without trial, an 8% interest rate that
        adds meaningful dollars to overdue invoices, and the threat of AG
        complaints through the Consumer Protection Act. The key is writing a
        demand letter that puts every one of these tools on the table — and
        Mississippi law gives you more than most freelancers realize.
      </p>

      <p>
        <strong>Disclaimer:</strong> This article is for informational purposes
        only and does not constitute legal advice. Mississippi laws and court
        rules change, and every freelance situation is different. Consult a
        Mississippi licensed attorney for advice specific to your situation.
      </p>
    </ArticleLayout>
  );
}
