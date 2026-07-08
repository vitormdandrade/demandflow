import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("payment-reminder-email-templates")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="payment-reminder-email-templates">
      <p>
        You sent the invoice. The due date came and went. Now you&apos;re staring at
        your inbox wondering: do I send a reminder? How firm should it be? Will I
        sound like a jerk — or worse, a pushover who doesn&apos;t expect to get paid?
      </p>

      <p>
        The payment reminder email is one of the highest-leverage pieces of writing
        a freelancer will ever send. Done right, it gets you paid within 24 hours
        and <em>strengthens</em> the client relationship. Done wrong, it either gets
        ignored or makes the client defensive. Most freelancers land somewhere in
        the messy middle: they wait too long, then overcorrect with language that
        sounds either robotic or desperate.
      </p>

      <p>
        The templates below solve that. They&apos;re structured as a five-step
        escalation ladder — from &ldquo;hey, just checking in&rdquo; to &ldquo;this
        is now a formal demand.&rdquo; Each one is copy-and-paste ready, with notes
        on <em>when</em> to send it and <em>why</em> the language works. Use them
        sequentially and you&apos;ll recover more money with less awkwardness than
        anything you&apos;ve tried before.
      </p>

      <h2>Template 1: The Friendly Reminder (Day 1–2 past due)</h2>

      <p>
        <strong>When to send:</strong> 1–2 days after the due date. Most late
        payments are innocent — the client forgot, the finance person was out
        sick, the invoice got buried in an inbox. Start with the assumption of
        goodwill.
      </p>

      <p>
        <strong>Why it works:</strong> You&apos;re not accusing anyone of
        anything. You&apos;re just making sure the invoice didn&apos;t get lost.
        The tone is helpful, not confrontational — it gives the client an easy
        out (&ldquo;let me know if anything&apos;s missing&rdquo;) while
        restating the amount and the due date clearly.
      </p>

      <p><strong>Subject:</strong> Quick check-in — Invoice #1042</p>

      <blockquote>
        <p>Hi [Name],</p>

        <p>
          Just a quick note to make sure Invoice #1042 (R$ 1,500, due April 5)
          landed in the right inbox. Let me know if anything&apos;s missing on
          my end — happy to resend or update anything you need.
        </p>

        <p>
          If it&apos;s already been processed, no need to reply — and thank you!
        </p>

        <p>Best,<br />[Your Name]</p>
      </blockquote>

      <h2>Template 2: The Direct Follow-Up (Day 4–5 past due)</h2>

      <p>
        <strong>When to send:</strong> 4–5 days after the due date. The friendly
        reminder got no response (or the client said &ldquo;I&apos;ll check on
        it&rdquo; and went silent). Now you need to be direct without being
        aggressive.
      </p>

      <p>
        <strong>Why it works:</strong> Three key moves here. First, you reference
        the previous email — this makes it clear you&apos;re keeping track.
        Second, you use the word &ldquo;overdue&rdquo; — neutral, factual,
        non-inflammatory. Third, you ask a closed question (&ldquo;when can I
        expect payment?&rdquo;) instead of an open one (&ldquo;any updates?&rdquo;).
        Closed questions demand a concrete answer.
      </p>

      <p><strong>Subject:</strong> Following up — Invoice #1042 (now overdue)</p>

      <blockquote>
        <p>Hi [Name],</p>

        <p>
          I&apos;m following up on Invoice #1042 for R$ 1,500 — this was due
          April 5 and is now 5 days overdue. I haven&apos;t heard back since my
          note on Monday.
        </p>

        <p>
          Can you let me know when I can expect payment? If there&apos;s an
          issue with the invoice or something needs to be adjusted on my end,
          just say the word.
        </p>

        <p>Thanks,<br />[Your Name]</p>
      </blockquote>

      <h2>Template 3: The Firm Request (Day 7–10 past due)</h2>

      <p>
        <strong>When to send:</strong> 7–10 days after the due date. Two emails
        in, no payment. The client is either avoiding you or dealing with an
        internal issue. Either way, the tone shifts from &ldquo;helpful&rdquo;
        to &ldquo;expectant.&rdquo;
      </p>

      <p>
        <strong>Why it works:</strong> This email introduces a <em>deadline</em> —
        the most powerful word in a payment-reminder vocabulary. It also flags
        that the work was completed and delivered (no ambiguity about whether
        you fulfilled your end). The phrase &ldquo;I need to ask&rdquo; is
        purposeful: it&apos;s polite but signals that the patience period is
        ending.
      </p>

      <p><strong>Subject:</strong> Payment request — Invoice #1042 (10 days overdue)</p>

      <blockquote>
        <p>Hi [Name],</p>

        <p>
          Invoice #1042 for R$ 1,500 is now 10 days past the due date of April
          5. The work was completed and delivered on March 28, and I&apos;ve
          followed up twice (April 6 and April 10) without receiving payment or
          a confirmed ETA.
        </p>

        <p>
          I need to ask that payment be made by April 18 — that&apos;s three
          business days from now. If that timeline doesn&apos;t work for any
          reason, please let me know so we can figure out an alternative.
        </p>

        <p>
          You can pay via [payment link] or find the original invoice attached.
        </p>

        <p>Best,<br />[Your Name]</p>
      </blockquote>

      <h2>Template 4: The Escalation Notice (Day 14–21 past due)</h2>

      <p>
        <strong>When to send:</strong> 14–21 days past due. Three emails, no
        payment, no credible explanation. You&apos;re now past the point where
        a single reminder email will fix this. The goal here is to signal that
        you&apos;re prepared to take the next step — without specifying exactly
        what that step is.
      </p>

      <p>
        <strong>Why it works:</strong> The word &ldquo;formal&rdquo; does heavy
        lifting. It suggests documentation, process, and potential consequences
        without threatening anything specific. The request for a &ldquo;written
        dispute&rdquo; also puts the burden on the client: if they have a
        legitimate reason not to pay, they need to produce it. Silence is no
        longer a valid response.
      </p>

      <p><strong>Subject:</strong> Formal payment notice — Invoice #1042</p>

      <blockquote>
        <p>[Name],</p>

        <p>
          This is a formal notice regarding Invoice #1042 for R$ 1,500, which
          was due April 5 and remains unpaid 21 days later. I&apos;ve sent three
          previous emails (April 6, April 10, April 12) and have not received
          payment or a substantive response.
        </p>

        <p>
          The work was completed, delivered, and accepted on March 28. I have
          fulfilled all obligations under our agreement. I am now documenting
          this delinquency in writing.
        </p>

        <p>
          Payment of R$ 1,500 is due immediately. If you believe there is a
          legitimate reason this invoice should not be paid, please provide a
          written explanation by April 25. Without one, I will proceed with
          further collection steps after that date.
        </p>

        <p>Regards,<br />[Your Name]</p>
      </blockquote>

      <h2>Template 5: The Final Demand (Day 30+ past due)</h2>

      <p>
        <strong>When to send:</strong> 30+ days past due, after all previous
        templates have been ignored. This is your last written communication
        before a formal demand letter, a collections agency, or small claims
        court.
      </p>

      <p>
        <strong>Why it works:</strong> This email does three things: (1) it
        summarizes the paper trail (every date you contacted them), (2) it
        names the specific legal right you&apos;re asserting (demand letter,
        collection action), and (3) it gives one final window to resolve
        things without escalation. The phrase &ldquo;without further notice&rdquo;
        is important — it tells the client this is the last email, period.
      </p>

      <p><strong>Subject:</strong> Final notice — Invoice #1042 (35 days overdue)</p>

      <blockquote>
        <p>[Name],</p>

        <p>
          Invoice #1042 for R$ 1,500 (due April 5, 2026) is now 35 days overdue
          and remains unpaid despite five attempts to reach you:
        </p>

        <ul>
          <li>April 6 — Initial reminder</li>
          <li>April 10 — Follow-up</li>
          <li>April 12 — Payment request with deadline</li>
          <li>April 19 — Formal payment notice</li>
          <li>Today — This final notice</li>
        </ul>

        <p>
          I have completed all work, delivered all deliverables, and received no
          dispute or complaint regarding quality or completion. This debt is
          valid and undisputed.
        </p>

        <p>
          Unless full payment of R$ 1,500 is received by May 12, 2026, I will
          proceed with a formal demand letter and, if necessary, further
          collection action — without further notice.
        </p>

        <p>
          Payment can be made at: [payment link]
        </p>

        <p>Sincerely,<br />[Your Name]</p>
      </blockquote>

      <h2>Why Templates Beat Freeform Emails</h2>

      <p>
        Most freelancers write payment reminders from scratch. That means every
        email carries the emotional weight of the moment — frustration,
        anxiety, resentment. The result is inconsistency: one reminder is too
        soft, the next one is passive-aggressive, the third one is a rambling
        guilt trip that loses the plot entirely.
      </p>

      <p>
        Templates solve this by separating the <em>decision</em> from the
        <em>execution</em>. You decide which stage of the escalation ladder
        you&apos;re on (a business decision), then you paste the template (a
        mechanical action). No emotional deliberation. No staring at a blank
        compose window for 20 minutes. Just send and move on.
      </p>

      <h2>The Psychology Behind These Scripts</h2>

      <p>The five templates above aren&apos;t random — they&apos;re built on a few deliberate psychological principles:</p>

      <h3>1. Assume goodwill until proven otherwise</h3>
      <p>
        Template 1 treats non-payment as an administrative oversight, not a
        character flaw. This disarms the recipient: if someone assumes the best
        about you, your instinct is to live up to that assumption. It also
        preserves the relationship if payment was genuinely an innocent delay.
      </p>

      <h3>2. Use scarcity to create urgency</h3>
      <p>
        Templates 3–5 introduce deadlines, and deadlines work because they
        trigger loss aversion — the psychological bias that makes people more
        motivated to avoid a loss (a collections process, a damaged reputation)
        than to achieve a gain (getting an invoice off their desk). A
        &ldquo;pay by Friday&rdquo; deadline isn&apos;t arbitrary; it&apos;s a
        psychological trigger.
      </p>

      <h3>3. Document everything without sounding litigious</h3>
      <p>
        Templates 4 and 5 list every contact attempt. This serves two purposes:
        it shows the client you&apos;re organized (which signals
        &ldquo;escalation is real, not a bluff&rdquo;) and it creates a paper
        trail you can actually use if things go to collections or court.
      </p>

      <h3>4. Always give them a way out</h3>
      <p>
        Every template includes an escape hatch — &ldquo;let me know if
        anything&apos;s missing,&rdquo; &ldquo;if that timeline doesn&apos;t
        work, tell me,&rdquo; &ldquo;if you believe there&apos;s a legitimate
        reason.&rdquo; This isn&apos;t weakness — it&apos;s fairness. It also
        strengthens your position: if you offered three opportunities to
        explain and the client stayed silent, a judge or mediator sees that
        clearly.
      </p>

      <h2>When to Skip the Templates and Go Straight to a Demand Letter</h2>

      <p>
        These templates work for clients who are <em>disorganized</em>, not
        clients who are <em>refusing</em> to pay. If you&apos;ve reached
        Template 4 and the client hasn&apos;t responded to anything, or if
        they&apos;ve explicitly said they don&apos;t intend to pay, skip
        Template 5 and go directly to a formal demand letter. The escalation
        ladder works as a series of warnings; once those warnings have been
        ignored, the next step is a legal document — not another email.
      </p>

      <p>
        <strong>DemandFlow generates a professional, legally-structured demand
        letter in 5 minutes for $29.</strong> It&apos;s the exact document
        Template 5 is warning about — and it&apos;s far more effective than one
        more follow-up email. When the templates stop working, DemandFlow
        starts.
      </p>
    </ArticleLayout>
  );
}
