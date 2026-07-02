import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("get-paid-freelance-fast")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="get-paid-freelance-fast">
      <p>
        Freelance payment problems almost never come down to a single deadbeat
        client. They come down to a system — the terms you set, the way you invoice,
        and how you follow up — that quietly lets clients pay late without
        consequence. Fix the system and most late payments simply stop happening.
        Here are nine concrete tactics to get paid faster as a freelancer, from
        preventing the problem before it starts to collecting when a client goes
        quiet.
      </p>

      <h2>1. Require a deposit before you start</h2>
      <p>
        The single most effective change you can make: take 30–50% up front, before
        any work begins. A deposit does two jobs. It filters out clients who were
        never going to pay, and it means you&apos;re never fully exposed if things go
        sideways. A client who won&apos;t put money down before you start is telling
        you something important — believe them.
      </p>

      <h2>2. Put everything in a signed contract</h2>
      <p>
        A contract isn&apos;t about distrust; it&apos;s about clarity. Spell out the
        scope, the total fee, the payment schedule, the due dates, and what happens
        if payment is late. When expectations are written down and signed, &quot;I
        thought it was cheaper&quot; and &quot;I never agreed to that&quot; disappear
        as excuses. It&apos;s also the document a judge or a demand letter leans on
        if you ever need to escalate.
      </p>

      <h2>3. Set short, explicit payment terms</h2>
      <p>
        &quot;Net 30&quot; is a habit, not a law. Consider Net 14, Net 7, or &quot;due
        on receipt&quot; for smaller jobs. Every day you extend is a day of your money
        sitting in someone else&apos;s account. State the exact due date on the
        invoice — a real calendar date, not just &quot;30 days&quot; — so there&apos;s
        no ambiguity about when late begins.
      </p>

      <h2>4. Invoice immediately and make it effortless to pay</h2>
      <p>
        Send the invoice the moment the milestone is hit, not at the end of the
        month when your motivation has cooled. Then remove every ounce of friction:
        a clickable pay button, multiple payment methods, correct details, and a
        clear amount. The harder you make it to pay you, the longer clients take. The
        easier you make it, the more often they just do it now. A vague invoice sent
        late with no obvious way to pay is practically an invitation to be
        deprioritized behind everyone who made themselves easy to pay.
      </p>

      <h2>5. Bill in milestones, not one lump sum at the end</h2>
      <p>
        For anything bigger than a quick job, break the fee into stages tied to
        deliverables — deposit, midpoint, and completion. Milestone billing keeps
        cash flowing throughout the project and caps your risk. If a client stops
        paying at the midpoint, you stop working, and you&apos;re only ever owed for
        one stage instead of the whole engagement.
      </p>

      <h2>6. Add late fees — and actually enforce them</h2>
      <p>
        State a late fee or interest term in your contract and invoice, then invoke
        it the moment payment is overdue. A late fee changes the incentive: instead
        of paying you costing nothing to delay, waiting now costs the client money.
        The key word is <em>enforce</em> — a late fee you never charge is just a
        suggestion. Add it automatically once the due date passes and mention it in
        your reminder, so the client sees the number climbing rather than just a
        polite nudge they can keep ignoring.
      </p>

      <h2>7. Follow up on a fixed schedule</h2>
      <p>
        Don&apos;t follow up when you happen to remember and feel annoyed. Build a
        routine: a friendly reminder on the due date, a firmer one a few days later,
        and a phone call after that. Consistency signals that you track your
        receivables closely and that late invoices don&apos;t slip your mind. Clients
        pay attention to freelancers who pay attention. For the full sequence, see
        our playbook on{" "}
        <a href="/blog/unpaid-invoice-what-to-do">what to do when a client
        isn&apos;t paying</a>.
      </p>

      <h2>8. Keep your tone calm and businesslike</h2>
      <p>
        When money is late, it&apos;s tempting to get emotional. Resist it. The most
        effective follow-ups are short, factual, and neutral — invoice number,
        amount, due date, and a direct request for a payment date. Neutral persistence
        gets you paid; anger just gives the client a reason to disengage.
      </p>
      <blockquote>
        You are not asking for a favor. You are collecting money you earned for work
        you delivered. Let your tone reflect that quiet certainty.
      </blockquote>

      <h2>9. Escalate to a demand letter without hesitating</h2>
      <p>
        When reminders and a phone call haven&apos;t worked, don&apos;t let the
        invoice drift for months hoping it resolves itself. Move to a formal demand
        letter — a document that states what&apos;s owed, sets a hard deadline, and
        makes clear what happens next. It&apos;s the step that recovers money most
        often without the cost or stress of court, and it flips your posture from
        &quot;chasing&quot; to &quot;collecting.&quot;
      </p>
      <p>
        This is exactly where <a href="/">DemandFlowww</a> earns its keep. Instead of
        agonizing over the wording, you answer a few questions and get a professional,
        properly-formatted demand letter in about 60 seconds — for $29, with a 100%
        money-back guarantee. No lawyer, no subscription, no blank page. If you want
        to compare that against hiring an attorney, read{" "}
        <a href="/blog/demand-letter-vs-lawyer">demand letter vs. lawyer</a>, or see
        the full range of <a href="/templates">templates</a> we offer.
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
                name: "How can I get paid faster as a freelancer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Require a deposit up front, use a signed contract, set short and explicit payment terms with a specific due date, invoice immediately, make paying frictionless, bill in milestones, enforce late fees, and follow up on a fixed schedule. When those fail, escalate promptly to a demand letter.",
                },
              },
              {
                "@type": "Question",
                name: "How much deposit should a freelancer ask for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A deposit of 30% to 50% before starting work is standard. It filters out clients who were never going to pay and ensures you're never fully exposed if a project goes wrong.",
                },
              },
              {
                "@type": "Question",
                name: "What is the best way to prevent freelance payment problems?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Prevention beats collection. A signed contract, an upfront deposit, short payment terms, milestone billing, and consistent follow-up stop most late payments before they start. A clear system removes the ambiguity that lets clients pay late without consequence.",
                },
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}
