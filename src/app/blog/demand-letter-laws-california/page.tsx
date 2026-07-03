import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-california")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-california">
      <p>
        California doesn&apos;t make you hire a lawyer to demand payment, and it
        doesn&apos;t require a special form to do it. But the state does have its
        own rules that shape <em>how</em> a demand letter fits into getting paid —
        from the amount you can ultimately sue for in small claims to a strict
        20-day deadline that construction freelancers can&apos;t afford to miss.
        Here&apos;s what a California freelancer needs to know before sending that
        letter.
      </p>
      <p>
        <em>
          This is general information, not legal advice. California law changes,
          and the right move depends on your situation — for a specific dispute,
          consult a licensed California attorney.
        </em>
      </p>

      <h2>Is a demand letter required in California?</h2>
      <p>
        No statute forces you to send a demand letter before chasing an unpaid
        invoice. But California&apos;s small claims system effectively assumes you
        will. When you file a small claims case, the court&apos;s form (SC-100)
        asks whether you asked the defendant to pay and why they haven&apos;t —
        and a judge wants to see that you made a clear, good-faith request before
        dragging the other side into court. A written demand letter is the cleanest
        way to prove you did exactly that.
      </p>
      <p>
        So while it&apos;s not a legal prerequisite, a demand letter is close to
        mandatory in practice. It resolves most disputes on its own, and when it
        doesn&apos;t, it becomes the paper trail that makes your case in front of a
        California judge. For the structure and tone that works, see our{" "}
        <a href="/blog/how-to-write-demand-letter-freelancer">
          step-by-step guide to writing a demand letter
        </a>
        .
      </p>

      <h2>What a California demand letter should contain</h2>
      <p>
        There&apos;s no state-mandated format, but a letter that holds up well in
        California covers the same essentials a court would want to see:
      </p>
      <ul>
        <li>
          <strong>Who owes what.</strong> Your name, the client&apos;s legal name,
          and the exact amount due — tied to a specific invoice number and date.
        </li>
        <li>
          <strong>The basis for the debt.</strong> The contract, agreement, or
          work order the payment relates to, and confirmation the work was
          delivered.
        </li>
        <li>
          <strong>A firm deadline.</strong> A clear date by which payment is
          expected — typically 10 to 14 days from the letter.
        </li>
        <li>
          <strong>The consequence.</strong> A statement that you may pursue
          remedies, including a claim in California small claims court, if the
          deadline passes.
        </li>
        <li>
          <strong>How to pay.</strong> Remove every excuse by spelling out exactly
          how and where to send the money.
        </li>
      </ul>
      <p>
        If your contract allows interest or a late fee, California generally caps
        prejudgment interest at 10% per year on most contract debts absent a
        different agreed-upon rate. State the amount you&apos;re claiming plainly —
        vague threats weaken a letter; specific numbers strengthen it.
      </p>

      <h2>California small claims thresholds</h2>
      <p>
        If the letter doesn&apos;t work, small claims court is the usual next step
        for freelancers — it&apos;s designed to be used without a lawyer. As of
        2024, the California limits are:
      </p>
      <ul>
        <li>
          <strong>$12,500</strong> — the maximum an individual (a &ldquo;natural
          person,&rdquo; including a sole proprietor) can sue for in a single
          small claims case.
        </li>
        <li>
          <strong>$6,250</strong> — the cap for corporations, LLCs, and other
          business entities.
        </li>
        <li>
          <strong>Two claims a year over $2,500.</strong> You can file as many
          smaller claims as you like, but no more than two per calendar year that
          exceed $2,500.
        </li>
      </ul>
      <p>
        If your unpaid invoice is larger than $12,500, you can either sue in civil
        court (where a lawyer usually makes sense) or waive the excess to keep the
        case in small claims. For most freelancers, the invoice fits well under the
        cap — which is exactly why a demand letter plus the small claims backstop
        is such a practical combination. If you&apos;re weighing court against
        other routes, read{" "}
        <a href="/blog/small-claims-court-alternatives">
          5 alternatives to small claims court
        </a>
        .
      </p>

      <h2>Pre-lien rules: the 20-day preliminary notice</h2>
      <p>
        If you do construction-related work in California — design, contracting,
        materials, or labor tied to real property — there&apos;s a rule that trumps
        the ordinary demand-letter timeline. To preserve your right to file a
        mechanics lien, California requires a{" "}
        <strong>20-day preliminary notice</strong> (sometimes called a
        &ldquo;pre-lien&rdquo; notice) served on the property owner, the direct
        contractor, and the construction lender within 20 days of first furnishing
        labor or materials to the project.
      </p>
      <p>
        Miss that 20-day window and you can generally only lien for work performed
        in the 20 days <em>before</em> you finally send the notice, plus work after
        — you forfeit the right to lien for everything earlier. Because a mechanics
        lien is one of the most powerful collection tools in California
        construction, that notice is not paperwork to skip. A demand letter is
        still your first outreach, but if you&apos;re in the building trades, the
        preliminary notice is the deadline to protect first. When a lien is on the
        table, this is squarely lawyer territory — the notice, filing, and
        timelines are unforgiving.
      </p>

      <h2>How DemandFlowww templates work for California</h2>
      <p>
        <a href="/">DemandFlowww</a> generates a professional, properly-formatted
        demand letter in about 60 seconds. You enter the client, the invoice, the
        amount owed, and your deadline, and it produces a letter that hits every
        essential a California reader — client or judge — expects to see: a clear
        statement of the debt, the underlying agreement, a firm deadline, and a
        plain description of the next step if the deadline passes.
      </p>
      <p>
        The template gives you the compliant structure and the confident, measured
        tone that gets results, so you&apos;re not staring at a blank page or
        guessing at wording. What it doesn&apos;t do is replace a lawyer for the
        situations that need one — an invoice above the $12,500 small claims cap,
        or a construction debt that hinges on the 20-day preliminary notice and a
        mechanics lien. For a straightforward unpaid California invoice, though,
        it&apos;s usually the only step you&apos;ll need. Curious how it compares to
        hiring an attorney? Read{" "}
        <a href="/blog/demand-letter-vs-lawyer">demand letter vs. lawyer</a>.
      </p>
      <blockquote>
        In California, the letter does most of the work, and the $12,500 small
        claims backstop does the rest. Keep the invoice under the cap, send a clear
        demand, and you rarely need anything more.
      </blockquote>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is a demand letter required before suing in California?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "California law doesn't strictly require a demand letter, but the small claims process assumes you asked the defendant to pay first. The SC-100 form asks whether you requested payment, so a written demand letter is the cleanest way to show a judge you made a good-faith request before filing.",
                },
              },
              {
                "@type": "Question",
                name: "What is the small claims court limit in California?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "As of 2024, an individual can sue for up to $12,500 in California small claims court, while corporations and other business entities are capped at $6,250. You can file no more than two claims per year that exceed $2,500.",
                },
              },
              {
                "@type": "Question",
                name: "What is California's 20-day preliminary notice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For construction-related work, California requires a 20-day preliminary (pre-lien) notice served on the property owner, direct contractor, and construction lender within 20 days of first furnishing labor or materials. It preserves your right to file a mechanics lien; miss the window and you generally can only lien for work in the 20 days before the notice was finally sent.",
                },
              },
              {
                "@type": "Question",
                name: "Do DemandFlowww templates work for California?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. DemandFlowww generates a demand letter that includes the essentials a California client or judge expects — the debt, the underlying agreement, a firm deadline, and the next step. It's ideal for a straightforward unpaid invoice under the $12,500 small claims cap, but a lawyer is still recommended for larger claims or construction debts involving a mechanics lien.",
                },
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}
