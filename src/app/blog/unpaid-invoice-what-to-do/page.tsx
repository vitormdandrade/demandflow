import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("unpaid-invoice-what-to-do")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="unpaid-invoice-what-to-do">
      <p>
        The invoice is a week overdue. Then two. The client who used to reply in
        minutes has gone quiet, and that quiet is starting to feel personal. If a
        client is not paying an invoice, the worst thing you can do is either
        nothing or everything at once. What actually works is a calm, deliberate
        escalation ladder — a sequence of steps that each apply a little more
        pressure while keeping you in control and keeping the door open to getting
        paid. Here&apos;s the exact ladder to climb, one rung at a time.
      </p>

      <h2>First, rule out the boring explanations</h2>
      <p>
        Before you assume the worst, confirm the basics. Did the invoice actually
        arrive? Is it in a spam folder? Did it go to the right person — the founder
        who hired you, or an accounts inbox that never got the memo? A surprising
        share of &quot;non-payment&quot; is just an invoice that fell through a
        crack. Re-send it, confirm receipt, and make sure your payment details are
        correct and clickable. Now you know you&apos;re dealing with a real
        problem, not an administrative one.
      </p>

      <h2>The escalation ladder</h2>
      <p>
        Work through these steps in order. Give each one a few days to breathe
        before moving to the next — but don&apos;t let the whole thing drift for
        months.
      </p>
      <ol>
        <li>
          <strong>The friendly nudge.</strong> A short, warm email assuming good
          faith: &quot;Hi [name], just checking this invoice didn&apos;t slip
          through — it was due on [date]. Can you confirm when I should expect
          payment?&quot; No pressure yet. You&apos;re giving them an easy out.
        </li>
        <li>
          <strong>The firm reminder.</strong> A few days later, drop the softness.
          State the invoice number, the amount, the original due date, and how many
          days overdue it now is. Ask for a specific payment date in reply. Keep it
          polite but businesslike.
        </li>
        <li>
          <strong>The phone call.</strong> Email is easy to ignore; a voice is not.
          Call, stay calm, and ask directly: &quot;Is there a reason the invoice
          hasn&apos;t been paid?&quot; Sometimes you&apos;ll uncover a genuine issue
          — a dispute, a cash crunch, a change of contact. Sometimes the mere fact
          you called is enough. Follow up the call with an email summarizing what
          was agreed.
        </li>
        <li>
          <strong>The late-fee notice.</strong> If your contract or invoice
          included late fees or interest, now is when you invoke them, in writing.
          Even a modest fee changes the math for a client who&apos;s been stalling
          on purpose — waiting costs them money now.
        </li>
        <li>
          <strong>The formal demand letter.</strong> This is the rung that most
          often ends the standoff. A demand letter states what&apos;s owed, sets a
          hard deadline, and spells out what happens next. It moves you from
          &quot;freelancer sending reminders&quot; to &quot;creditor collecting a
          debt.&quot; Learn exactly how to write one in our{" "}
          <a href="/blog/how-to-write-demand-letter-freelancer">demand letter
          guide</a>, or generate one in 60 seconds below.
        </li>
        <li>
          <strong>The final options.</strong> If the demand deadline passes, you
          escalate to real consequences: small claims court, a collections agency,
          or — for the right amounts — a solicitor&apos;s letter. Before you sue,
          though, weigh the faster, cheaper routes in our roundup of{" "}
          <a href="/blog/small-claims-court-alternatives">alternatives to small
          claims court</a>.
        </li>
      </ol>

      <h2>Keep a paper trail the whole way up</h2>
      <p>
        From the very first nudge, document everything: dated emails, notes from
        phone calls, the signed contract or accepted proposal, and proof you
        delivered the work. This does two things. It keeps your facts straight when
        the client claims they &quot;never agreed to that,&quot; and it becomes your
        evidence if you ever stand in front of a judge. A freelancer with a clean,
        timestamped record wins disputes that a freelancer relying on memory does
        not.
      </p>

      <h2>Stay professional, even when they don&apos;t</h2>
      <p>
        It is genuinely maddening to be stiffed for work you delivered. But every
        angry, sarcastic, or emotional message you send becomes ammunition for the
        client and weakens your position. Neutral and relentless beats furious and
        sporadic every time. Think of yourself as a debt collector doing a routine
        job, not a person who&apos;s been wronged — even though you have been.
      </p>
      <blockquote>
        The goal is not to win an argument. The goal is to get paid. Keep every
        message pointed squarely at that outcome.
      </blockquote>

      <h2>When to send the demand letter — and how</h2>
      <p>
        Most freelancers wait far too long to reach the demand-letter rung, hoping
        the problem resolves itself. It rarely does. If you&apos;ve sent a firm
        reminder and made a call with nothing to show for it, it&apos;s time. The
        letter is where reminders end and consequences begin, and it&apos;s the step
        that recovers money most often without any of the cost or stress of court.
      </p>
      <p>
        Writing one from scratch is where people freeze — the tone has to be firm
        but not aggressive, and the structure has to be right. That&apos;s exactly
        what <a href="/">DemandFlowww</a> handles for you. Answer a few questions and
        it produces a professional, properly-formatted demand letter in about 60
        seconds for $29, backed by a 100% money-back guarantee. No lawyer, no
        subscription, no blank page. You can be sending it today — see{" "}
        <a href="/pricing">pricing</a> or browse the available{" "}
        <a href="/templates">templates</a>.
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
                name: "What should I do first when a client is not paying an invoice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Confirm the invoice was received by the right person and isn't stuck in spam, then send a short, friendly reminder that states the invoice number, amount, and due date. Rule out simple administrative mistakes before assuming deliberate non-payment.",
                },
              },
              {
                "@type": "Question",
                name: "How long should I wait before sending a demand letter for an unpaid invoice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Once you've sent a friendly nudge and a firm reminder and made a phone call with no result — usually two to four weeks past the due date — it's time for a formal demand letter. Waiting longer rarely helps and often signals you won't follow through.",
                },
              },
              {
                "@type": "Question",
                name: "Can I charge late fees on an unpaid freelance invoice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, if your contract or invoice stated late fees or interest terms. Invoking them in writing changes the incentive for a client who's stalling, because waiting now costs them money. Always base fees on what you agreed to in advance.",
                },
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}
