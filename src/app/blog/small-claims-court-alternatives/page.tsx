import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("small-claims-court-alternatives")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="small-claims-court-alternatives">
      <p>
        Small claims court sounds satisfying — a judge, a verdict, the client
        finally forced to pay. In reality it&apos;s slow, it eats your time, and even
        when you win you still have to <em>collect</em>, which can be a second battle
        entirely. The good news: before you sue a client, there are faster and
        cheaper ways to get your money that resolve most cases without ever filing.
        Here are five alternatives to small claims court, roughly in the order you
        should try them.
      </p>

      <h2>Why to try these before suing</h2>
      <p>
        Filing a small claims case means fees, forms, a court date that could be
        weeks or months out, and time off from paid work to show up. Judgments also
        cap out at a state-set limit, and a piece of paper saying you won
        doesn&apos;t deposit itself in your bank account. Litigation is a real option
        — but it should be your last one, not your first. Everything below is faster,
        cheaper, and leaves the relationship (and your calendar) more intact.
      </p>

      <h2>1. A formal demand letter</h2>
      <p>
        This is the alternative that ends the most disputes, and it should almost
        always be your first serious move. A demand letter is a formal, written
        request for payment that states what&apos;s owed, sets a firm deadline, and
        makes clear what happens if the deadline passes. It works because most
        non-payment is a client betting you&apos;ll give up — and a demand letter
        tells them the bet is off.
      </p>
      <p>
        A letter also strengthens every step that might follow. Courts, mediators,
        and collections agencies all want to see that you asked for the money in
        writing first, so a demand letter does double duty: it often gets you paid
        outright, and if it doesn&apos;t, it lays the groundwork for whatever&apos;s
        next. You can write one using our{" "}
        <a href="/blog/how-to-write-demand-letter-freelancer">step-by-step guide</a>,
        or generate a professional one below.
      </p>

      <h2>2. Mediation</h2>
      <p>
        If there&apos;s a genuine dispute — the client claims the work was late, off
        scope, or not what they wanted — mediation can settle it far faster than a
        courtroom. A neutral third party helps both sides reach an agreement, often
        in a single session, and community mediation services are frequently low-cost
        or free. It works best when the relationship is worth preserving or when the
        disagreement is real rather than the client simply stalling.
      </p>

      <h2>3. A collections agency</h2>
      <p>
        When a client has gone fully silent and the debt is clear, a collections
        agency can take it off your plate. They typically work on contingency —
        keeping a percentage of what they recover — so there&apos;s little upfront
        cost, and their outreach carries a weight your own emails don&apos;t. You give
        up a slice of the money, but a slice of something usually beats all of
        nothing. This route suits debts you&apos;ve mostly given up chasing yourself.
      </p>

      <h2>4. Chargebacks and platform dispute resolution</h2>
      <p>
        Where you got paid — or were supposed to — can be your leverage. If you
        invoiced through a platform like Upwork or PayPal, use its built-in dispute
        or resolution process; many hold funds or arbitrate directly. If a client
        paid a deposit by card and then reversed it, or you have recourse through a
        payment processor, that channel can recover funds without any legal filing at
        all. Always check the terms of the platform that sits between you and the
        money.
      </p>

      <h2>5. A settlement or payment plan</h2>
      <p>
        Sometimes a client genuinely can&apos;t pay the full amount right now.
        Rather than forcing an all-or-nothing showdown, offer a structured payment
        plan or a modest settlement for prompt payment. Getting 85% next week can
        beat chasing 100% for six months through the courts. Put any agreement in
        writing, with dates and amounts, so it&apos;s enforceable if they slip.
      </p>
      <blockquote>
        The best outcome is rarely the most dramatic one. Money in your account this
        month beats a moral victory in court next quarter.
      </blockquote>

      <h2>How these fit together</h2>
      <p>
        Think of these as an escalation ladder, not a menu. Start with the demand
        letter — it resolves the largest share of cases on its own. If there&apos;s a
        real disagreement, try mediation. If the client has vanished, hand it to
        collections or lean on the payment platform. If they&apos;re willing but
        strapped, take the settlement. Only when every one of these has failed does
        small claims court become the sensible move — and by then you&apos;ll have a
        clean paper trail that makes your case far stronger. For the full sequence of
        escalation, see our guide on{" "}
        <a href="/blog/unpaid-invoice-what-to-do">what to do about an unpaid
        invoice</a>.
      </p>

      <h2>Start with the letter</h2>
      <p>
        Because the demand letter is both the most effective first step and the
        foundation for everything after it, it&apos;s where to begin.{" "}
        <a href="/">DemandFlowww</a> generates a professional, properly-formatted demand
        letter in about 60 seconds for $29, backed by a 100% money-back guarantee —
        no lawyer, no filing fees, no blank page. In most cases, it&apos;s the only
        step you&apos;ll need. Curious how it stacks up against hiring an attorney?
        Read <a href="/blog/demand-letter-vs-lawyer">demand letter vs. lawyer</a>.
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
                name: "What are the alternatives to small claims court for an unpaid invoice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The main alternatives are a formal demand letter, mediation, a collections agency, chargebacks or platform dispute resolution, and negotiating a settlement or payment plan. A demand letter resolves the most cases and should usually be your first serious step.",
                },
              },
              {
                "@type": "Question",
                name: "Should I send a demand letter before suing a client?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. A demand letter often gets you paid without any filing, and courts, mediators, and collections agencies all want to see that you requested payment in writing first. It resolves most disputes on its own and strengthens your position if you do escalate.",
                },
              },
              {
                "@type": "Question",
                name: "Is small claims court worth it for freelancers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It can be, but it should be a last resort. Court is slow, involves fees and time off work, caps judgments at a state limit, and winning still leaves you to collect. Faster, cheaper alternatives like a demand letter, mediation, or a payment plan resolve most cases first.",
                },
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}
