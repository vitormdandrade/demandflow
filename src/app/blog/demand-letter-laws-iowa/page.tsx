import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-iowa")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-iowa">
      <p>
        You're a freelance web developer in Des Moines, and an ag-tech startup
        in Cedar Rapids owes you $5,800 for a SaaS dashboard you delivered six
        months ago. Their investors just closed a Series A, your code is powering
        their entire customer-facing platform, and your final invoice is 180 days
        past due. Iowa gives freelancers a solid toolkit: a $6,500 small claims
        limit (Iowa Code § 631.1), 5% statutory interest on written contracts
        plus post-judgment interest at the federal funds rate + 2% (Iowa Code
        § 535.3), a generous 10-year statute of limitations for written contracts
        (Iowa Code § 614.1(5)), and the Iowa Consumer Fraud Act (Iowa Code
        § 714H) that provides a private right of action for actual damages plus
        equitable relief and attorney fees. From Des Moines's growing tech and
        insurance hub to the manufacturing corridors of Cedar Rapids and
        Davenport, Iowa's freelance economy is more diverse than outsiders assume
        — and a demand letter that cites the Consumer Fraud Act signals a
        freelancer who understands Iowa's consumer-protection framework. Here's
        exactly how Iowa freelancers write a demand letter that leverages the
        Hawkeye State's civil remedies.
      </p>

      <h2>Iowa Small Claims Court: $6,500 Limit</h2>

      <p>
        Iowa's small claims process operates through the Iowa District Court
        under Iowa Code § 631.1 with a jurisdictional limit of{" "}
        <strong>$6,500</strong>. This is squarely in the reasonable range for
        freelance disputes — from a $2,000 logo design to a $6,000 web
        development contract — covering the vast majority of unpaid invoice
        scenarios. Here's what every Iowa freelancer needs to know:
      </p>

      <ul>
        <li>
          <strong>Filing fee:</strong> $95 for claims up to $6,500, payable
          to the Clerk of Court in the county where the defendant resides or
          does business
        </li>
        <li>
          <strong>No attorneys required:</strong> Iowa's small claims rules
          (Iowa R. Civ. P. 1.901–1.911) are explicitly designed for
          self-represented litigants — the court provides standardized forms
          and the rules of evidence are relaxed
        </li>
        <li>
          <strong>Hearing timeline:</strong> typically 30–60 days; Iowa's
          less congested dockets mean faster resolution than many coastal
          states
        </li>
        <li>
          <strong>Mediation:</strong> many Iowa judicial districts offer
          voluntary mediation through the Iowa Mediation Service; a demand
          letter that expresses willingness to mediate shows good faith
        </li>
        <li>
          <strong>Appeal:</strong> small claims judgments can be appealed
          to the District Court for a new trial (trial de novo), but the
          appealing party must post a bond
        </li>
      </ul>

      <h2>Iowa Statutory Interest: 5% on Written Contracts + Judgment Rate</h2>

      <p>
        Iowa imposes <strong>5%</strong> annual interest on money due under
        written contracts when no rate is specified (Iowa Code § 535.2(1)(a)).
        For <strong>post-judgment</strong> interest, Iowa uses a floating rate
        under Iowa Code § 535.3: the average federal funds rate plus 2%,
        calculated annually. In the current rate environment, this effective
        judgment rate runs approximately 6–7%, higher than the 5% prejudgment
        rate but not punitive.
      </p>

      <p>
        For a freelancer owed $5,800 that's been outstanding for six months,
        the prejudgment interest calculation at 5% would add approximately
        $145 to the demand. More importantly, the Iowa Supreme Court has held
        that prejudgment interest runs from the date the debt became due
        (i.e., the invoice due date), so every month of delay adds
        approximately 0.42% to the total. Including this calculation — with
        the specific statutory citation — converts "pay me" into "here's the
        exact additional cost of waiting."
      </p>

      <h2>The Iowa Consumer Fraud Act: Iowa Code § 714H</h2>

      <p>
        Iowa's Consumer Fraud Act (Iowa Code § 714H) is the state's primary
        consumer-protection statute and applies to "unfair practices,
        deception, fraud, false pretense, false promise, or misrepresentation"
        in connection with the sale or advertisement of merchandise or
        services. Critically for freelancers, the statute creates a{" "}
        <strong>private right of action</strong> — meaning you don't need
        the Attorney General to bring a claim; you can sue directly.
      </p>

      <p>
        Under § 714H.5, a consumer who suffers an ascertainable loss as a
        result of a prohibited practice may recover <strong>actual
        damages</strong> plus equitable relief, including injunctive relief.
        The court <strong>may</strong> award reasonable attorney fees and
        costs to the prevailing party (unlike the mandatory fee-shifting
        found in some other state consumer-protection laws).
      </p>

      <p>
        When does the Consumer Fraud Act apply to a freelance dispute? If the
        client:
      </p>
      <ul>
        <li>
          Made false representations about their ability or intent to pay
        </li>
        <li>
          Engaged in deceptive conduct during the contracting or payment
          process
        </li>
        <li>
          Misrepresented the scope or value of the project to obtain a lower
          rate
        </li>
      </ul>
      <p>
        — then citing § 714H in the demand letter puts the client on notice
        that they're facing potential attorney-fee exposure and equitable
        remedies beyond the invoice itself. For intentional or egregious
        conduct, the threat of court-ordered attorney fees is often enough
        to move a stalled negotiation forward.
      </p>

      <h2>Statute of Limitations: 10 Years for Written Contracts</h2>

      <p>
        Iowa Code § 614.1(5) provides a <strong>10-year</strong> statute of
        limitations for written contracts. This is among the longer SOLs in
        the country (only a handful of states like Kentucky at 15 years,
        Ohio at 8, and Illinois at 10 years match or exceed it). For oral
        contracts, Iowa uses a 5-year SOL under § 614.1(4).
      </p>

      <p>
        The 10-year window means a demand letter citing the SOL is less about
        urging immediacy and more about signaling that the freelancer is aware
        they have a long runway — they can afford to escalate methodically.
        The effective message is: "I have a decade to pursue this claim, and
        I know it."
      </p>

      <h2>How to Write an Iowa Demand Letter: Structure</h2>

      <p>
        An effective Iowa demand letter should follow this structure:
      </p>

      <ol>
        <li>
          <strong>Header with letterhead:</strong> Your name/business, address,
          date, and the recipient's name and address. Professional formatting
          signals seriousness.
        </li>
        <li>
          <strong>Reference line:</strong> Include the invoice number(s),
          contract date, and project name. Example: "Re: Unpaid Invoice
          #2026-042 — Web Development Services for [Project Name]"
        </li>
        <li>
          <strong>Factual summary:</strong> Brief, dispassionate timeline —
          when the agreement was made, what was delivered, when payment was
          due, and the dates of prior reminders.
        </li>
        <li>
          <strong>Amount owed:</strong> Principal + accrued prejudgment
          interest at 5% from the due date (Iowa Code § 535.2). Show the
          calculation.
        </li>
        <li>
          <strong>Legal basis:</strong> Cite the contract, Iowa Code § 535.2
          (interest), and if applicable, § 714H (Consumer Fraud Act) if the
          circumstances support a claim of deceptive practices.
        </li>
        <li>
          <strong>Escalation notice:</strong> State clearly: "If payment is
          not received within 14 days, I will file a claim in Iowa District
          Court, Small Claims Division, under Iowa Code § 631.1, where the
          jurisdictional limit is $6,500. A judgment may include the full
          principal, statutory interest from the date of default, court
          costs, and where applicable, attorney fees under Iowa Code
          § 714H.5."
        </li>
        <li>
          <strong>Payment instructions and deadline:</strong> Specify how
          to pay (bank transfer details, payment link), and state the
          exact deadline date. Always use "14 calendar days from the date
          of this letter."
        </li>
        <li>
          <strong>Signature:</strong> Sign and date the letter. Keep a
          copy — it's the first exhibit in any small claims filing.
        </li>
      </ol>

      <h2>Iowa vs. Surrounding States</h2>

      <p>
        Iowa compares favorably to its neighbors for freelancers:
      </p>

      <ul>
        <li>
          <strong>Illinois:</strong> $10,000 small claims limit, 5% prejudgment
          interest (same), 10-year SOL (same), but the Illinois Consumer Fraud
          Act (815 ILCS 505) is broader and allows for punitive damages —
          something Iowa's § 714H does not provide.
        </li>
        <li>
          <strong>Minnesota:</strong> $15,000 conciliation court limit
          (higher), 6% prejudgment interest (higher), 6-year SOL (shorter),
          and a strong Consumer Fraud Act with private-attorney-general
          provisions.
        </li>
        <li>
          <strong>Missouri:</strong> $5,000 small claims limit (lower), 9%
          prejudgment interest if no contract rate (higher), 10-year SOL
          (same), and the Missouri Merchandising Practices Act (MMPA) with
          attorney-fee recovery.
        </li>
        <li>
          <strong>Nebraska:</strong> $3,900 small claims limit (lower), 6%
          judgment interest (higher if agreement is not in writing — but
          Nebraska defaults to the contract rate if one is stated), 5-year SOL
          (shorter).
        </li>
        <li>
          <strong>Wisconsin:</strong> $10,000 small claims limit (higher),
          12% prejudgment interest on liquidated damages (much higher),
          6-year SOL (shorter), and the Wisconsin Deceptive Trade Practices
          Act with treble damages.
        </li>
      </ul>

      <p>
        The key insight for Iowa freelancers working across state lines: if the
        client is in Wisconsin, cite Wisconsin's 12% interest rate — but if
        they're in Nebraska or Missouri, Iowa's 10-year SOL is a longer
        enforcement window. Always assert jurisdiction in the state most
        favorable to your claim when the contract or the parties' locations
        allow it.
      </p>

      <h2>Practical Tips for Iowa Freelancers</h2>

      <ul>
        <li>
          <strong>Use the Iowa Judicial Branch's online forms:</strong> The
          official Iowa Small Claims Original Notice form is available at
          iowacourts.gov and is designed for self-represented litigants.
          Mention in the demand letter that you've already retrieved the
          form — it shows you're serious and prepared.
        </li>
        <li>
          <strong>File in the correct county:</strong> Small claims must be
          filed in the county where the defendant resides or does business
          (Iowa Code § 631.4). If the client is a remote LLC, check the
          Iowa Secretary of State's business entity search to confirm their
          registered agent and county.
        </li>
        <li>
          <strong>Document everything:</strong> Save all emails, texts,
          Slack messages, and proof of delivery. Iowa small claims courts
          are document-driven — the more paper you have, the less you rely
          on oral testimony.
        </li>
        <li>
          <strong>The Consumer Fraud Act angle:</strong> If the client strung
          you along with promises of payment ("the check is in the mail,"
          "approval is pending," repeated assurances that never materialized),
          consider whether that pattern constitutes a deceptive practice under
          § 714H. Even the prospect of fee-shifting changes the negotiation
          dynamic.
        </li>
      </ul>

      <h2>When to Send the Demand Letter</h2>

      <p>
        The demand letter is step 3 in a standard escalation:
      </p>
      <ol>
        <li>
          <strong>Reminder (day 1 past due):</strong> A polite email or
          message referencing the invoice.
        </li>
        <li>
          <strong>Follow-up (day 15 past due):</strong> A firmer message
          referencing the contract terms and payment deadline.
        </li>
        <li>
          <strong>Demand letter (day 30 past due):</strong> The formal,
          written demand letter with statutory citations.
        </li>
        <li>
          <strong>Small claims filing (day 45–60):</strong> If the demand
          letter doesn't produce payment, file in Iowa District Court.
        </li>
      </ol>

      <p>
        In Iowa, waiting until day 30 is reasonable and consistent with
        professional norms in the Des Moines, Cedar Rapids, and Iowa City
        business communities. Sending a demand letter too early can damage
        client relationships unnecessarily; sending it too late signals
        that you're not serious about collection.
      </p>
    </ArticleLayout>
  );
}
