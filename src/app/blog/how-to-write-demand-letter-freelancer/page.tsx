import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("how-to-write-demand-letter-freelancer")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="how-to-write-demand-letter-freelancer">
      <p>
        A client owes you money, the friendly reminders have stopped working, and
        you&apos;re staring at a blank document wondering how to sound serious
        without sounding unhinged. That document is a demand letter, and when it&apos;s
        written well it does something remarkable: it gets you paid without a
        lawyer, without small claims court, and often within a week. This guide
        walks through exactly how to write a demand letter as a freelancer,
        including the structure that works, the tone that lands, and a
        copy-and-paste template you can adapt in minutes.
      </p>

      <h2>What a demand letter actually is</h2>
      <p>
        A demand letter is a formal, written request for payment that states what
        you&apos;re owed, why you&apos;re owed it, and what happens if the client
        doesn&apos;t pay by a specific date. It is not a threat and it is not an
        angry email. It is a calm, documented, business-like escalation that shows
        the client you&apos;ve moved from &quot;chasing&quot; to &quot;collecting.&quot;
      </p>
      <p>
        Two things make it powerful. First, it creates a paper trail — if you ever
        do end up in <a href="/blog/small-claims-court-alternatives">small claims
        court</a>, a judge will want to see that you asked for the money in writing
        first. Second, it signals resolve. Most non-payment is a game of chicken;
        the client is waiting to see if you&apos;ll give up. A demand letter tells
        them you won&apos;t.
      </p>

      <h2>The exact structure of a demand letter</h2>
      <p>
        Every effective demand letter follows the same skeleton. Keep it to one
        page. Judges, clients, and their bookkeepers all appreciate brevity.
      </p>
      <ol>
        <li>
          <strong>Header and date.</strong> Your name or business name, contact
          details, the date, and the client&apos;s name and address. This is a
          formal document — treat it like one.
        </li>
        <li>
          <strong>A clear subject line.</strong> Something unambiguous like
          &quot;Formal Demand for Payment — Invoice #1042.&quot;
        </li>
        <li>
          <strong>The facts.</strong> State the agreement, the work you delivered,
          the invoice number, the amount, and the original due date. Stick to
          verifiable facts and dates.
        </li>
        <li>
          <strong>The demand.</strong> One plain sentence stating the exact amount
          owed and that you are requesting payment in full.
        </li>
        <li>
          <strong>A firm deadline.</strong> Give a specific date — 7, 10, or 14
          days out. Deadlines create urgency; &quot;as soon as possible&quot; does
          not.
        </li>
        <li>
          <strong>The consequence.</strong> State what you&apos;ll do if the
          deadline passes — pursue the claim in small claims court, report the debt,
          or hand it to a collections process. Keep it factual, never emotional.
        </li>
        <li>
          <strong>Payment instructions and sign-off.</strong> Make paying you the
          easiest thing on their desk. Include the exact methods and links.
        </li>
      </ol>

      <h2>The tone that gets you paid</h2>
      <p>
        The single most common mistake freelancers make is letting frustration
        leak into the letter. Anger reads as weakness — it tells the client
        you&apos;re rattled and might not follow through. The tone you want is the
        tone of a bank statement: neutral, precise, and completely unbothered.
        Short sentences. No adjectives. No apologies, and no &quot;I hate to have
        to do this.&quot; You&apos;re not doing anything wrong by asking to be paid
        for work you completed.
      </p>
      <blockquote>
        Write it, then read it out loud. If any sentence sounds like you&apos;re
        venting, pleading, or negotiating, cut it. A demand letter states; it does
        not argue.
      </blockquote>

      <h2>A copy-and-paste demand letter template</h2>
      <p>
        Here&apos;s a template you can adapt. Replace the bracketed parts with your
        details and delete anything that doesn&apos;t apply.
      </p>
      <blockquote>
        <p>[Your Name / Business Name] · [Your Email] · [Your Phone] · [Date]</p>
        <p>To: [Client Name], [Client Company], [Client Address]</p>
        <p>
          <strong>Re: Formal Demand for Payment — Invoice #[0000]</strong>
        </p>
        <p>Dear [Client Name],</p>
        <p>
          This letter is a formal demand for payment of an overdue invoice. On
          [date] I completed [brief description of the work] under our agreement
          dated [date]. I invoiced you $[amount] on [invoice date] under Invoice
          #[0000], with payment due on [due date]. As of today, that invoice
          remains unpaid.
        </p>
        <p>
          I am requesting payment in full of $[amount] by [specific deadline
          date]. Payment can be made by [payment method / link].
        </p>
        <p>
          If I do not receive payment by [deadline], I will pursue the amount owed
          through [small claims court / a formal collections process], and may seek
          additional costs and interest permitted by law. I would prefer to resolve
          this directly and promptly.
        </p>
        <p>Please treat this as a time-sensitive matter. I look forward to your payment.</p>
        <p>Sincerely,<br />[Your Name]</p>
      </blockquote>

      <h2>How to send it</h2>
      <p>
        Send the letter by email so it&apos;s timestamped, and attach it as a PDF so
        it looks and feels formal. For larger amounts, follow up with a physical
        copy sent by certified mail or a trackable courier — the delivery receipt
        becomes evidence, and a printed letter has a psychological weight an email
        never will. Keep copies of everything.
      </p>

      <h2>Or skip the blank page entirely</h2>
      <p>
        Getting the wording, the structure, and the tone right is exactly where
        most freelancers stall for days. That&apos;s why we built{" "}
        <a href="/">DemandFlow</a>. You answer a few questions about the client,
        the invoice, and the deadline, and it generates a professional,
        properly-formatted demand letter in about 60 seconds — for $29, with a 100%
        money-back guarantee. It handles the legal-sounding language and the
        firm-but-neutral tone for you, so you can send it today instead of dreading
        it all week. If you want to understand the full escalation path first, read
        our guide on{" "}
        <a href="/blog/unpaid-invoice-what-to-do">what to do about an unpaid
        invoice</a>, or compare the DIY route against{" "}
        <a href="/blog/demand-letter-vs-lawyer">hiring a lawyer</a>.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I write a demand letter as a freelancer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "State the facts of the agreement and the unpaid invoice, make a clear demand for the exact amount owed, set a specific deadline (7 to 14 days), spell out the consequence if it passes, and include easy payment instructions. Keep it to one page and use a neutral, factual tone.",
                },
              },
              {
                "@type": "Question",
                name: "Does a demand letter for unpaid freelance work need to be from a lawyer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. A demand letter you write yourself is fully valid and often just as effective. A lawyer's letterhead can add pressure, but a clear, professional letter from you carries real weight and creates the paper trail you need if you later escalate.",
                },
              },
              {
                "@type": "Question",
                name: "How long should I give a client to pay after a demand letter?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A firm deadline of 7 to 14 days is standard. It's long enough to be reasonable and short enough to create urgency. Always give a specific calendar date rather than a vague phrase like 'as soon as possible.'",
                },
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}
