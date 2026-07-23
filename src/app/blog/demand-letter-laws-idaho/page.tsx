import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-idaho")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-idaho">
      <p>
        You're a freelance graphic designer in Boise, and a potato-processing
        equipment manufacturer in Idaho Falls owes you $4,200 for a rebranding
        package you delivered four months ago. Their new product line is shipping
        with your logos on every crate, your invoice is 120 days past due, and
        they've stopped returning your calls. Idaho gives freelancers a
        straightforward toolkit: a $5,000 small claims limit in the
        Magistrate's Division (Idaho Code § 1-2301), 12% statutory interest on
        judgments — one of the highest rates in the country (Idaho Code
        § 28-22-104), a 5-year statute of limitations for written contracts
        (Idaho Code § 5-216), and the Idaho Consumer Protection Act (Idaho
        Code § 48-601) that provides a private right of action for actual
        damages plus discretionary attorney fees. From Boise's growing tech and
        startup ecosystem to the outdoor recreation economy of Coeur d'Alene and
        Sun Valley, Idaho's freelance community punches above its weight — and a
        demand letter that cites the Idaho Consumer Protection Act signals a
        freelancer who understands the Gem State's consumer-protection remedies.
        Here's exactly how Idaho freelancers write a demand letter that leverages
        every tool Idaho law provides.
      </p>

      <h2>Idaho Small Claims Court: $5,000 Limit</h2>

      <p>
        Idaho's small claims process operates through the Magistrate's Division
        of the Idaho District Court under Idaho Code § 1-2301 with a
        jurisdictional limit of <strong>$5,000</strong>. This covers the vast
        majority of freelance disputes — from a $1,500 website redesign to a
        $4,500 video production contract. Here's what every Idaho freelancer
        needs to know:
      </p>

      <ul>
        <li>
          <strong>Filing fee:</strong> $69 for claims up to $5,000 (Idaho
          Court Administrative Rule 53), payable to the Clerk of the
          Magistrate's Division in the county where the defendant resides or
          does business
        </li>
        <li>
          <strong>No attorneys required:</strong> Idaho's small claims rules
          (Idaho R. Civ. P. 83) are designed for self-represented litigants —
          corporations and LLCs must appear through an officer or employee, not
          an attorney
        </li>
        <li>
          <strong>Hearing timeline:</strong> typically 30–60 days after the
          claim is filed; Idaho's lower population density means less congested
          dockets than many coastal states
        </li>
        <li>
          <strong>Mediation:</strong> many Idaho judicial districts offer
          court-annexed mediation; a demand letter expressing willingness to
          mediate strengthens your position
        </li>
        <li>
          <strong>Appeal:</strong> small claims judgments can be appealed to
          the District Court for a new trial (trial de novo) within 30 days
          (Idaho R. Civ. P. 83(j))
        </li>
      </ul>

      <h2>Idaho Statutory Interest: 12% on Judgments</h2>

      <p>
        Idaho Code § 28-22-104 sets the judgment interest rate at{" "}
        <strong>12% per annum</strong> — one of the highest statutory judgment
        rates in the United States. This applies once a judgment is entered,
        making Idaho an exceptionally favorable state for creditors who obtain a
        court judgment. For a $4,200 unpaid invoice, that's $504 per year in
        interest alone — a powerful incentive for a client to pay before
        litigation reaches judgment.
      </p>

      <p>
        Key interest provisions every Idaho freelancer should cite in a demand
        letter:
      </p>

      <ul>
        <li>
          <strong>Pre-judgment interest:</strong> Idaho courts may award
          pre-judgment interest at the 12% rate from the date the debt became
          due when the amount is liquidated or easily calculable (Dillon v.
          Montgomery, 138 Idaho 614, 67 P.3d 93)
        </li>
        <li>
          <strong>Contractual interest:</strong> If your freelance contract
          specifies an interest rate on late payments, that rate governs
          pre-judgment — but may not exceed Idaho usury limits
        </li>
        <li>
          <strong>Post-judgment:</strong> Once the judgment is entered, the 12%
          statutory rate applies automatically
        </li>
      </ul>

      <h2>Idaho Consumer Protection Act: Idaho Code § 48-601</h2>

      <p>
        The Idaho Consumer Protection Act (ICPA), found at Idaho Code
        § 48-601 through § 48-619, prohibits unfair methods of competition
        and unfair or deceptive acts or practices in trade or commerce. For
        freelancers, the ICPA is most relevant when a client misrepresents
        their ability or intent to pay — such as commissioning work they
        never intended to compensate.
      </p>

      <p>
        Key provisions for freelancers:
      </p>

      <ul>
        <li>
          <strong>Private right of action:</strong> Idaho Code § 48-608(1)
          allows any person who suffers a loss of money as a result of an
          unfair or deceptive act to bring a civil action
        </li>
        <li>
          <strong>Actual damages:</strong> Recoverable under ICPA — this is your
          unpaid invoice amount
        </li>
        <li>
          <strong>Attorney fees:</strong> Idaho Code § 48-608(4) gives courts
          discretion to award reasonable attorney fees to the prevailing
          plaintiff — a significant leverage point in demand letters
        </li>
        <li>
          <strong>No treble damages:</strong> Unlike some state consumer
          protection acts (e.g., Vermont's VCPA, South Carolina's SCUTPA),
          Idaho's ICPA does not provide for treble damages — but the 12%
          judgment interest rate compensates
        </li>
        <li>
          <strong>Statute of limitations:</strong> 2 years from the date of
          the violation (Idaho Code § 48-619) — shorter than the 5-year
          contract SOL, so file ICPA claims promptly
        </li>
      </ul>

      <h2>Idaho Statute of Limitations: 5 Years for Written Contracts</h2>

      <p>
        Idaho Code § 5-216 provides a <strong>5-year statute of limitations</strong>{" "}
        for actions founded on a written contract. This gives freelancers a
        comfortable window compared to states like South Carolina (3 years) or
        Louisiana (3 years). However, the 2-year ICPA statute of limitations
        (Idaho Code § 48-619) means you should pursue consumer protection claims
        well before the contract SOL expires.
      </p>

      <h2>What to Include in an Idaho Demand Letter</h2>

      <p>
        An effective Idaho demand letter should reference the specific statutes
        that give you leverage. Here's the structure:
      </p>

      <ol>
        <li>
          <strong>Contract details:</strong> Date of agreement, scope of work,
          deliverables completed, and payment terms — establish the written
          contract to secure the 5-year SOL under Idaho Code § 5-216
        </li>
        <li>
          <strong>Amount owed:</strong> State the exact amount, including any
          contractual late fees or interest
        </li>
        <li>
          <strong>Payment deadline:</strong> Set a reasonable deadline (14–30
          days) for payment
        </li>
        <li>
          <strong>Legal consequences:</strong> Cite the $5,000 small claims
          limit (Idaho Code § 1-2301), the 12% post-judgment interest rate
          (Idaho Code § 28-22-104), the 5-year written contract SOL (Idaho Code
          § 5-216), and the Idaho Consumer Protection Act (Idaho Code § 48-601)
          with attorney fee recovery
        </li>
        <li>
          <strong>Good faith:</strong> Express willingness to resolve the
          matter without litigation — Idaho courts expect good faith efforts
        </li>
      </ol>

      <h2>Idaho-Specific Considerations for Freelancers</h2>

      <ul>
        <li>
          <strong>Boise's tech corridor:</strong> Boise has become a significant
          hub for software development, fintech, and startup activity.
          Freelancers working with funded startups should include contract
          provisions requiring payment within 30 days of invoice — and
          specifically reference Idaho law as governing the contract
        </li>
        <li>
          <strong>Coeur d'Alene and resort economy:</strong> Freelance
          photographers, videographers, and creative professionals serving
          destination weddings and tourism businesses should use written
          contracts with 50% upfront deposits to mitigate non-payment risk
        </li>
        <li>
          <strong>Agricultural and manufacturing clients:</strong> Idaho Falls,
          Twin Falls, and Pocatello have substantial agricultural and
          manufacturing sectors. Freelancers serving these industries should
          be aware that many of these businesses operate on seasonal cash
          flow schedules — contract accordingly
        </li>
        <li>
          <strong>Remote freelancers serving Idaho clients:</strong> If you're
          an out-of-state freelancer with an Idaho client, Idaho's long-arm
          statute (Idaho Code § 5-514) allows Idaho courts to exercise
          jurisdiction over the client as long as the transaction has
          sufficient minimum contacts with Idaho
        </li>
      </ul>

      <h2>When to Escalate Beyond a Demand Letter</h2>

      <p>
        If your demand letter doesn't produce payment within the stated
        deadline, Idaho offers clear next steps:
      </p>

      <ul>
        <li>
          <strong>Under $5,000:</strong> File in the Magistrate's Division
          Small Claims Department — $69 filing fee, no attorney required,
          hearing typically within 30–60 days
        </li>
        <li>
          <strong>$5,001–$10,000:</strong> File in the Magistrate's Division
          as a regular civil case — small claims rules still apply but
          jurisdictional limit is higher (Idaho Code § 1-2301)
        </li>
        <li>
          <strong>Over $10,000:</strong> File in Idaho District Court — this
          requires an attorney and formal litigation, but the 12% judgment
          interest rate makes it worthwhile for larger claims
        </li>
        <li>
          <strong>ICPA claim:</strong> If the client's behavior was deceptive
          (e.g., they commissioned work knowing they wouldn't pay), include an
          ICPA claim to access attorney fee recovery under Idaho Code § 48-608(4)
        </li>
      </ul>

      <p>
        Idaho may not be the first state that comes to mind for freelancers, but
        its combination of a 12% judgment interest rate, a 5-year written
        contract SOL, and a consumer protection act with attorney fee recovery
        makes it a surprisingly strong jurisdiction for collecting unpaid
        freelance invoices. A well-drafted demand letter that cites Idaho's
        specific statutes — particularly the 12% interest rate and ICPA attorney
        fee provision — often motivates payment without the need for litigation.
      </p>
    </ArticleLayout>
  );
}
