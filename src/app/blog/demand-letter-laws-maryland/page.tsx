import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-maryland")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-maryland">
      <p>
        You're a freelance graphic designer in Baltimore's Hampden 
        neighborhood, and a DC-based marketing agency owes you $4,600 for a 
        branding package you delivered three months ago. They've launched the 
        campaign, posted your work on their portfolio, and your last four 
        follow-ups got nothing but "processing." It's time for a demand 
        letter — and if you're in Maryland, you're working with a 
        $5,000 small claims limit (Md. Code, Cts. &amp; Jud. Proc. § 4-405), 
        6% prejudgment interest (Md. Code, Cts. &amp; Jud. Proc. § 11-106), a 
        3-year statute of limitations for written contracts (Md. Code, Cts. 
        &amp; Jud. Proc. § 5-101) — the shortest on the East Coast — and the 
        powerful Maryland Consumer Protection Act (Md. Code, Comm. Law § 
        13-301) that can triple your damages plus attorney fees. Maryland's 
        proximity to DC, its dense freelance economy (over 500,000 independent 
        workers in the Baltimore-Washington corridor), and its uniquely short 
        statute of limitations make it a state where freelancers need to act 
        fast — and a well-crafted demand letter is your fastest move.
      </p>

      <h2>Maryland Small Claims: $5,000 Limit, District Court</h2>

      <p>
        Maryland's small claims system operates through the District Court of 
        Maryland. Under Md. Code, Cts. &amp; Jud. Proc. § 4-405, small claims 
        are capped at $5,000 for claims involving money. Here's what 
        freelancers need to know:
      </p>

      <ul>
        <li>
          <strong>$5,000 cap:</strong> For a $4,600 unpaid branding invoice,
          you're entirely within the small claims track. Claims exceeding
          $5,000 must go to regular District Court or Circuit Court.
        </li>
        <li>
          <strong>No lawyers required:</strong> Small claims proceedings are
          designed for self-representation. District Court judges are
          accustomed to pro se parties and the rules of evidence are relaxed.
        </li>
        <li>
          <strong>Filing fees:</strong> $35 for claims up to $5,000. You can
          request the defendant reimburse your filing and service costs.
        </li>
        <li>
          <strong>Venue:</strong> File in the county where the defendant
          lives or conducts business. For a Baltimore freelancer suing a DC
          agency, file in the county where the agency is located — the District
          of Columbia has its own small claims system.
        </li>
        <li>
          <strong>Counterclaims:</strong> If a defendant files a 
          counterclaim exceeding $5,000, the case moves to the regular 
          District Court docket where lawyers can appear.
        </li>
      </ul>

      <h2>6% Prejudgment Interest: Md. Code, Cts. &amp; Jud. Proc. § 11-106</h2>

      <p>
        Maryland allows creditors to collect prejudgment interest at the 
        legal rate of 6% per year on liquidated claims — and an unpaid 
        freelance invoice is a liquidated claim because the amount is 
        fixed. Here's how it works:
      </p>

      <ul>
        <li>
          <strong>Calculation:</strong> Interest accrues from the date the
          debt was due, not the date you file. For a $4,600 invoice that was
          due 90 days ago, that's approximately $68 in prejudgment interest
          — not life-changing, but it signals seriousness.
        </li>
        <li>
          <strong>Post-judgment:</strong> After a judgment is entered, 
          interest continues to accrue at the same 6% rate under Md. Rule 
          2-604 until the judgment is satisfied.
        </li>
        <li>
          <strong>Demand letter inclusion:</strong> Explicitly calculating 
          and demanding prejudgment interest in your demand letter shows the 
          client you've done the math and you know the law. It's one of the 
          most effective psychological signals a demand letter can carry.
        </li>
      </ul>

      <h2>3-Year Statute of Limitations — The Tightest on the East Coast</h2>

      <p>
        Maryland has one of the shortest statutes of limitations for written 
        contracts in the country. Under Md. Code, Cts. &amp; Jud. Proc. § 
        5-101, you have only <strong>three years</strong> from the date of 
        breach to file a lawsuit on a written contract. Here's why this 
        matters for freelancers:
      </p>

      <ul>
        <li>
          <strong>Don't wait:</strong> Unlike states with 6 or 8-year limits,
          Maryland's 3-year clock is unforgiving. A client who stopped paying
          in 2024 gives you until 2027. You cannot afford a "let's wait and
          see" approach.
        </li>
        <li>
          <strong>Oral contracts:</strong> The same 3-year limit applies. 
          For open accounts (like ongoing freelance work), it's also 3 years.
        </li>
        <li>
          <strong>Tolling:</strong> The clock can pause if the defendant 
          leaves Maryland, but partial payments do <em>not</em> reset the 
          statute. Once you breach the 3-year window, the claim is gone.
        </li>
      </ul>

      <div className="callout callout-warning">
        <p className="callout-title">⚠️ Maryland's 3-Year Clock is Real</p>
        <p>
          If a client ghosted you in January 2024, you must file by January 
          2027. A demand letter sent in 2026 gives you only one year of 
          runway for all follow-up steps — negotiation, mediation, filing. 
          Freelancers in Maryland should treat a demand letter not as a 
          "final warning" but as step one of a compressed timeline.
        </p>
      </div>

      <h2>Maryland Consumer Protection Act: Treble Damages</h2>

      <p>
        The Maryland Consumer Protection Act (MCPA), Md. Code, Comm. Law § 
        13-301 et seq., prohibits unfair and deceptive trade practices — 
        including deceptive conduct in connection with the sale of consumer 
        services. For freelancers, this statute can be a game-changer when 
        a client engaged in deceptive conduct. Key provisions:
      </p>

      <ul>
        <li>
          <strong>Treble damages:</strong> Under § 13-408, if the court 
          finds the client engaged in unfair or deceptive trade practices, 
          you can recover <strong>three times</strong> your actual damages. 
          A $4,600 unpaid invoice becomes a $13,800 judgment.
        </li>
        <li>
          <strong>Attorney fees:</strong> The MCPA includes a fee-shifting 
          provision: if you win under the MCPA, the defendant pays your 
          attorney fees. This makes contingency-fee representation viable 
          for well-documented claims.
        </li>
        <li>
          <strong>What qualifies as deceptive:</strong> A client who 
          accepts deliverables, uses your work, and then refuses to pay 
          while making false representations about payment processing or 
          contract terms may qualify. A client who repeatedly promises 
          payment "next week" without any intent to pay is engaging in 
          deceptive conduct.
        </li>
        <li>
          <strong>Pleading requirement:</strong> The MCPA requires a 
          heightened pleading standard — you must state the specific 
          deceptive acts with particularity. Your demand letter serves as 
          the first draft of that pleading.
        </li>
      </ul>

      <h2>How to Write a Maryland Demand Letter</h2>

      <ol>
        <li>
          <strong>Identify the parties:</strong> Your full legal name 
          (or business name if an LLC), the client's full name and address.
        </li>
        <li>
          <strong>State the debt clearly:</strong> "$4,600 for graphic 
          design and branding services delivered on [date] pursuant to our 
          contract dated [date]."
        </li>
        <li>
          <strong>Calculate prejudgment interest:</strong> "As of the date 
          of this letter, prejudgment interest at Maryland's legal rate of 
          6% per year (Md. Code, Cts. &amp; Jud. Proc. § 11-106) accruing 
          from [due date] totals approximately $68."
        </li>
        <li>
          <strong>Set a firm deadline:</strong> "Payment in full must be 
          received by [date, typically 14-21 days from the letter]."
        </li>
        <li>
          <strong>Reference the MCPA:</strong> "Your repeated 
          representations that payment was 'processing' while continuing to 
          use and display our work may constitute deceptive trade practices 
          under the Maryland Consumer Protection Act (Md. Code, Comm. Law § 
          13-301), which provides for treble damages and attorney fees."
        </li>
        <li>
          <strong>State the small claims intention:</strong> "If payment 
          is not received by the deadline, we will file a claim in the 
          District Court of Maryland under the small claims procedure (Md. 
          Code, Cts. &amp; Jud. Proc. § 4-405)."
        </li>
        <li>
          <strong>Sign, date, and send:</strong> Send via certified mail 
          with return receipt requested. Keep a copy. The return receipt is 
          your proof the demand letter was received — essential evidence if 
          you proceed to litigation.
        </li>
      </ol>

      <h2>For Maryland Freelancers: Act Fast</h2>

      <p>
        Maryland's 3-year statute of limitations is an outlier — most states 
        give freelancers five to eight years to pursue a written contract 
        claim. If you're sitting on an unpaid invoice, every month you wait 
        is 2.8% of your legal runway gone forever. The demand letter isn't 
        just a collection tool in Maryland — it's a preservation mechanism. 
        Send it early, document everything, and if you need to escalate, the 
        Maryland District Court's small claims system is efficient, 
        accessible, and designed for exactly this kind of dispute.
      </p>

      <div className="callout callout-accent">
        <p className="callout-title">Bottom Line for Maryland Freelancers</p>
        <p>
          Maryland gives you a $5,000 small claims track, 6% interest, and 
          the MCPA's treble damages — but only three years to act. A demand 
          letter that cites the MCPA, calculates prejudgment interest to the 
          dollar, and sets a firm deadline is the most effective tool in a 
          Maryland freelancer's collection arsenal. Use it early and use it 
          confidently.
        </p>
      </div>
    </ArticleLayout>
  );
}
