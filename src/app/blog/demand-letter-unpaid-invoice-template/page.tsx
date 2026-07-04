import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-unpaid-invoice-template")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-unpaid-invoice-template">
      <p>
        You finished the work. You sent the invoice. Thirty days came and went.
        You sent a polite follow-up. Then another. Now it&apos;s been sixty days
        and your client has gone quiet. You&apos;re frustrated, you&apos;re out
        the money, and you&apos;re wondering what actually works when a polite
        email doesn&apos;t.
      </p>

      <p>
        This is exactly where a demand letter belongs. Not a threatening rant.
        Not a legal-sounding email you dash off at 11 PM. A genuine, structured
        demand letter — the kind that signals to a client that the grace period
        is over and you are prepared to escalate. This guide walks you through
        exactly what to write, when to send it, and includes a free template you
        can adapt in five minutes.
      </p>

      <h2>When to send a demand letter (and when to wait)</h2>
      <p>
        A demand letter is not step one. It is step four or five on the
        escalation ladder. If you send one the day after an invoice is due, you
        risk alienating a good client who simply forgot or had a processing
        delay. If you wait six months, you risk the client assuming you&apos;ve
        given up. The sweet spot is after you&apos;ve sent two or three polite
        reminders and the invoice is at least 30 days past due. At that point,
        the client has had every opportunity to pay voluntarily, and the demand
        letter is proportionate to the situation.
      </p>

      <h2>The anatomy of a demand letter that works</h2>
      <p>
        The most effective demand letters follow a structure that has been tested
        in thousands of freelance payment disputes. Here is the exact framework:
      </p>

      <h3>1. Your contact information and the date</h3>
      <p>
        A demand letter is a formal document, and formal documents have headers.
        Include your full name, business name (if applicable), mailing address,
        phone number, and email. The date the letter is sent matters — it
        starts the clock on any deadline you set and becomes part of the legal
        record if the dispute escalates.
      </p>

      <h3>2. The recipient&apos;s information</h3>
      <p>
        Include the client&apos;s full name (or company name), the name of the
        person responsible for payments if you know it, and their mailing
        address. Sending the letter by both email and certified mail to a
        physical address strengthens your position — it proves they received
        it.
      </p>

      <h3>3. A clear subject line</h3>
      <p>
        &ldquo;Demand for Payment — Invoice #1042, Past Due&rdquo; leaves no
        ambiguity. The recipient knows what this is before they read a word.
        Vague subject lines like &ldquo;Checking in&rdquo; undermine the
        seriousness of the letter before it begins.
      </p>

      <h3>4. The facts — specific amounts, dates, and the work performed</h3>
      <p>
        This is the most important paragraph in the letter. State exactly what
        work you performed, when you completed it, the invoice number and date,
        the amount owed, and when it was due. Use specific numbers and dates. Do
        not editorialize. The facts alone, stated clearly, are more persuasive
        than any argument you could add.
      </p>

      <p>
        <em>Example:</em> &ldquo;On May 12, 2026, I completed the website
        redesign for [Client Name] per our contract dated April 1, 2026. On May
        12, I issued Invoice #1042 in the amount of $4,200.00 with payment due
        by May 26, 2026. As of today, July 4, 2026, payment has not been
        received. The invoice is now 39 days past due.&rdquo;
      </p>

      <h3>5. The payment demand and a specific deadline</h3>
      <p>
        State exactly what you want and give a specific calendar date for
        payment. &ldquo;Payment in full of $4,200.00 must be received by July
        18, 2026.&rdquo; Ten to fourteen days from the date of the letter is
        standard — it is urgent enough to motivate action but reasonable enough
        that a judge will not think you are being unfair. Avoid vague deadlines
        like &ldquo;as soon as possible&rdquo; or &ldquo;within a reasonable
        time.&rdquo; They invite the client to define &ldquo;reasonable&rdquo; in
        their own favor.
      </p>

      <h3>6. The consequence of non-payment</h3>
      <p>
        State what you will do if the deadline passes without payment, and be
        specific. &ldquo;If payment is not received by July 18, 2026, I will
        pursue all available legal remedies, which may include filing a claim in
        small claims court, engaging a collections agency, and/or recording a
        mechanic&apos;s lien where applicable.&rdquo; This is not a threat. It
        is a factual statement of your next step, and clients who understand
        that you have a plan after the letter are more likely to pay before the
        deadline.
      </p>

      <h3>7. A professional closing</h3>
      <p>
        Close the letter with &ldquo;Sincerely,&rdquo; your name, and your
        signature. A demand letter is a business document, not a personal
        grievance. Stay calm, stay factual, and stay professional. The
        professionalism itself is a signal: you are not emotional, you are not
        venting, and you are not going away.
      </p>

      <h2>Free demand letter template</h2>
      <p>
        Here is a template you can copy, paste, and customize for your
        situation. Replace the bracketed text with your information and send it
        by email and certified mail.
      </p>

      <div
        style={{
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "12px",
          padding: "28px 32px",
          margin: "24px 0",
          fontFamily: "Georgia, serif",
          fontSize: "0.95rem",
          lineHeight: 1.8,
          color: "#1e293b",
        }}
      >
        <p style={{ marginTop: 0 }}>
          <strong>[Your Name / Business Name]</strong>
          <br />
          [Your Mailing Address]
          <br />
          [Your Phone Number]
          <br />
          [Your Email Address]
        </p>

        <p>
          <strong>Date:</strong> [Today&apos;s Date]
        </p>

        <p>
          <strong>To:</strong> [Client Name / Company Name]
          <br />
          [Client Mailing Address]
        </p>

        <p>
          <strong>Re: Demand for Payment — Invoice #[Number], Past Due</strong>
        </p>

        <p>Dear [Client Name],</p>

        <p>
          This letter is a formal demand for payment of the outstanding invoice
          described below.
        </p>

        <p>
          On [Date], I completed [describe the work performed] for [Client Name]
          pursuant to our [contract / agreement] dated [Date]. On [Date], I
          issued Invoice #[Number] in the amount of $[Amount]. Payment was due
          by [Due Date]. As of the date of this letter, payment has not been
          received. The invoice is now [X] days past due.
        </p>

        <p>
          Enclosed is a copy of the invoice for your reference. Also enclosed is
          a copy of the relevant sections of our agreement confirming the scope
          of work and payment terms.
        </p>

        <p>
          Payment in full of $[Amount] must be received by [Date — 14 days from
          today]. Payment may be made by [check / wire transfer / ACH / online
          payment] to the following:
        </p>

        <p>
          [Payment Instructions]
        </p>

        <p>
          If payment is not received by [Date], I will pursue all available
          legal remedies. These may include filing a claim in small claims
          court, engaging a collections agency, and/or recording a
          mechanic&apos;s lien where applicable. I would strongly prefer to
          resolve this matter without litigation, but I will not hesitate to
          protect my rights if necessary.
        </p>

        <p>
          I value our professional relationship and hope we can resolve this
          matter promptly. If you have any questions or wish to discuss payment
          arrangements, please contact me at [phone number] or [email address].
        </p>

        <p>
          Sincerely,
          <br />
          <br />
          [Your Signature]
          <br />
          [Your Printed Name]
        </p>
      </div>

      <h2>The one paragraph that makes the difference</h2>
      <p>
        Most freelancers write long, emotional explanations of why they deserve
        to be paid. They describe how hard they worked, how unfair the situation
        is, and how disappointed they are. These letters feel cathartic to write
        but read as weakness to a client who is already avoiding payment. The
        client sees emotion and correctly guesses that you do not have a plan
        beyond expressing that emotion.
      </p>

      <p>
        The single most effective paragraph in any demand letter is the
        consequence paragraph — the one where you say, calmly and factually,
        what happens if the deadline passes. It does not need to be aggressive.
        It does not need to threaten. It needs to be specific and credible.
        &ldquo;I will file in small claims court&rdquo; is specific and
        credible if the amount is within the small claims limit.
        &ldquo;I will engage a collections agency&rdquo; is specific and
        credible if you have researched agencies and know their fees.
        &ldquo;I will record a lien&rdquo; is specific and credible if you are
        in an industry where lien rights apply. A client who believes you have a
        plan is a client who pays.
      </p>

      <h2>How to send the letter for maximum impact</h2>

      <h3>Email + certified mail, every time</h3>
      <p>
        Send the letter by email for speed and by certified mail with return
        receipt for proof of delivery. The email gets their attention
        immediately. The certified mail creates a paper trail that you can
        present in court. If you only send email, the client can claim they
        never saw it. If you only send certified mail, the letter may sit
        unopened for days. Together, they cover both bases.
      </p>

      <h3>Attach supporting documents</h3>
      <p>
        Attach the invoice, a copy of the relevant sections of your contract (if
        you had one), and any prior email correspondence about payment.
        Attachments make your letter look like a case file, and case files are
        harder to ignore. They also save you from having to repeat facts that
        the client already knows — the documents speak for themselves.
      </p>

      <h3>Keep a copy for yourself</h3>
      <p>
        Save a dated copy of the letter, the certified mail receipt, and any
        response you receive. If the dispute escalates to court, this is your
        Exhibit A. If the client calls you to negotiate, you have a record of
        exactly what you demanded and when. This is not paranoia — it is the
        minimum standard of documentation for anyone who intends to enforce
        their rights.
      </p>

      <h2>What to expect after sending</h2>
      <p>
        In most cases — based on thousands of demand letters sent by
        freelancers — one of three things happens:
      </p>

      <ol>
        <li>
          <strong>Payment within 48 hours.</strong> The client was hoping you
          would give up. The demand letter tells them you will not, and the
          path of least resistance is to pay. This is the most common outcome
          for invoices under $5,000.
        </li>
        <li>
          <strong>A negotiation.</strong> The client contacts you with a
          counter-offer — partial payment, a payment plan, or a dispute over
          the amount. This is progress. Negotiate in good faith, but do not
          agree to anything that leaves you substantially worse off than if you
          had filed in small claims court.
        </li>
        <li>
          <strong>Silence.</strong> If the deadline passes with no response and
          no payment, you follow through on the consequence you stated. File in
          small claims court, engage a collections agency, or record a lien. A
          demand letter that is not followed up on is worse than no demand
          letter at all — it teaches the client that your threats are empty.
          If you say you will escalate, you must escalate.
        </li>
      </ol>

      <h2>When a demand letter is not enough</h2>
      <p>
        A demand letter works best when the client has the ability to pay but
        has chosen not to. If the client is genuinely unable to pay — the
        business has closed, they have filed for bankruptcy, or they are
        judgment-proof — a demand letter cannot create money that does not
        exist. In those cases, your best option may be to write off the loss and
        move on, or to consult with an attorney about whether there are assets
        worth pursuing.
      </p>

      <p>
        Similarly, if the client has a legitimate dispute about the quality of
        the work or the amount owed, a demand letter may not end the dispute. It
        may start a negotiation. Be prepared for that possibility and know where
        your bottom line is before you send the letter.
      </p>

      <h2>Generate your demand letter in 60 seconds</h2>
      <p>
        Writing a demand letter from scratch takes time and attention to detail.
        DemandFlow generates a professional, legally-structured demand letter
        for your unpaid invoice in under a minute. Fill in your details, preview
        the letter, pay $29, and download a ready-to-send PDF. No lawyer
        required, no templates to wrestle with, and no risk — all letters are
        backed by a money-back guarantee.
      </p>

      <div
        style={{
          background: "linear-gradient(135deg, #1e3a5f, #2563eb)",
          borderRadius: "16px",
          padding: "28px 32px",
          marginTop: "32px",
          color: "#ffffff",
        }}
      >
        <h2 style={{ color: "#ffffff", marginTop: 0, fontSize: "1.35rem" }}>
          Get your demand letter now
        </h2>
        <p style={{ color: "#cbd5e1", lineHeight: 1.7, marginBottom: "20px" }}>
          Stop waiting for a client who is not going to pay on their own. Generate
          a professional demand letter in 60 seconds, download it as a PDF, and
          send it today. $29, one-time — no subscription, no account required.
        </p>
        <a
          href="/templates"
          style={{
            display: "inline-block",
            background: "#ffffff",
            color: "#1e3a5f",
            fontWeight: 700,
            padding: "12px 28px",
            borderRadius: "12px",
            textDecoration: "none",
            fontSize: "1rem",
          }}
        >
          Generate your demand letter →
        </a>
      </div>
    </ArticleLayout>
  );
}
