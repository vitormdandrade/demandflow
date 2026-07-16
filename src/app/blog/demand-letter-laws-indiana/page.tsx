import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { getPost } from "@/lib/blog";

const post = getPost("demand-letter-laws-indiana")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout slug="demand-letter-laws-indiana">
      <p>
        You're a freelance web developer in Broad Ripple, and an Indianapolis
        marketing agency owes you $5,400 for a custom booking platform you built
        and shipped four months ago. The site is live, it's booking their
        clients, and your invoices now get answered with "our accounting cycle
        is backed up — hang tight." It's time for a demand letter — and if you're
        in Indiana, you operate under a straightforward, freelancer-friendly
        framework: a $6,000 small claims limit statewide ($8,000 in Marion
        County/Indianapolis) under IC 33-29-1-1.5, 8% statutory judgment interest
        (IC 24-4.6-1-101), a generous 6-year statute of limitations for written
        contracts (IC 34-11-2-9), and the Indiana Deceptive Consumer Sales Act
        (IC 24-5-0.5-1 et seq.) that can treble your damages plus award attorney
        fees and costs. Indiana keeps its courts accessible and its rules
        practical — and a demand letter that cites the right Indiana Code
        sections carries real weight. Here's exactly how Hoosier State freelancers
        write a demand letter that leverages every tool available.
      </p>

      <h2>Indiana Small Claims Court: $6,000 Limit ($8,000 in Indianapolis)</h2>

      <p>
        Indiana's small claims system runs through the Small Claims Division of
        the County Court (Circuit and Superior Courts), and in Marion County
        through the dedicated township small claims courts. The statewide
        jurisdictional limit under IC 33-29-1-1.5 is <strong>$6,000</strong>,
        but Marion County (Indianapolis) small claims courts have a higher{" "}
        <strong>$8,000</strong> limit — a meaningful difference for freelancers
        working with the state's largest concentration of businesses. Here's what
        every Indiana freelancer needs to know:
      </p>

      <ul>
        <li>
          <strong>$6,000 cap statewide / $8,000 in Marion County:</strong> Claims
          up to $6,000 (excluding interest and costs) are heard under small claims
          rules in most counties. If your client is based in Indianapolis and you
          file in a Marion County township small claims court, the ceiling rises
          to $8,000. For most freelance disputes — web builds, design retainers,
          content packages — this covers the full invoice. If your claim exceeds
          the cap, you can waive the excess to stay on the faster small claims
          track or file a plenary (regular civil) action.
        </li>
        <li>
          <strong>Lawyers allowed but rarely necessary:</strong> Unlike some
          states, Indiana permits attorneys in small claims court, but the process
          is designed to be navigated without one. The Indiana Small Claims Rules
          keep procedure informal — you tell your story, present your documents,
          and the judge decides. A business defendant that is a corporation or LLC
          may need to appear through counsel or an authorized representative.
        </li>
        <li>
          <strong>Filing fees:</strong> Roughly $50–$95 depending on the county
          and claim amount (Marion County township courts and larger counties
          tend toward the higher end; smaller rural counties toward the lower).
          The fee typically includes a service component. If you win, filing and
          service costs are generally recoverable from the defendant.
        </li>
        <li>
          <strong>Venue:</strong> File in the county where the defendant resides,
          has its principal office, or where the transaction or a substantial part
          of it occurred. For an Indianapolis client, that means a Marion County
          township small claims court (Center, Washington, Lawrence, and the other
          townships each run their own). For a Fort Wayne client, Allen County
          Superior Court's small claims division; for Evansville, Vanderburgh
          County; for Bloomington, Monroe County.
        </li>
        <li>
          <strong>Service of process:</strong> Indiana small claims service is
          usually by certified mail with return receipt requested, handled by the
          clerk when you file. If certified mail fails, you can arrange sheriff
          service or a private process server. Keep the green return-receipt card
          — it's your proof the defendant received notice.
        </li>
      </ul>

      <h2>Indiana Deceptive Consumer Sales Act (IDCSA): Treble Damages</h2>

      <p>
        This is Indiana's heavyweight. The Indiana Deceptive Consumer Sales Act,
        IC 24-5-0.5-1 et seq., prohibits deceptive and unconscionable acts in
        connection with a consumer transaction. Where it applies, a court can move
        well beyond the unpaid invoice. The statute allows recovery of{" "}
        <strong>the greater of actual damages or $500</strong>, and for
        <em> uncured</em> or <em>incurable</em> deceptive acts committed as part
        of a scheme, artifice, or device to defraud, it authorizes treble damages
        (up to three times actual damages, capped at $1,000 in some contexts),
        plus reasonable attorney fees and costs. Here's what an Indiana court can
        award under the IDCSA:
      </p>

      <ul>
        <li>
          <strong>Actual damages:</strong> the unpaid invoice amount plus any
          consequential losses you can document (for example, financing costs you
          incurred while carrying the receivable).
        </li>
        <li>
          <strong>Treble damages:</strong> up to three times your actual damages
          where the deceptive act was knowing, part of a scheme to defraud, or
          left uncured after notice. For a $5,400 unpaid invoice, treble exposure
          reframes the entire negotiation.
        </li>
        <li>
          <strong>Attorney fees and costs:</strong> the IDCSA authorizes recovery
          of reasonable attorney fees to a prevailing consumer — a powerful lever,
          because it shifts the economics of dragging out a dispute onto the
          non-paying party.
        </li>
        <li>
          <strong>The cure mechanism matters:</strong> The IDCSA has a notice-and-cure
          structure. Giving the other side written notice of the specific deceptive
          act and an opportunity to cure is often a prerequisite to the enhanced
          remedies for a "curable" deceptive act — which is exactly what a
          well-drafted demand letter accomplishes. Your letter can serve as that
          notice.
        </li>
      </ul>

      <p>
        <strong>Key demand-letter language:</strong> Where the transaction plausibly
        falls within the IDCSA, cite IC 24-5-0.5-1 et seq. and state: "Under the
        Indiana Deceptive Consumer Sales Act, a court may award treble damages plus
        reasonable attorney fees and costs for deceptive acts in a consumer
        transaction. This letter serves as formal written notice of the deceptive
        act and your opportunity to cure it by remitting payment in full within
        [X] days. Failure to cure exposes you to enhanced statutory remedies." Be
        honest about applicability — the IDCSA centers on "consumer transactions,"
        and a purely commercial B2B dispute may fall outside it (see the final
        section). But when it fits, this paragraph changes the math for the client.
      </p>

      <h2>Statutory Interest: 8% Per Year</h2>

      <p>
        Indiana sets the statutory judgment interest rate at <strong>8% per
        year</strong> under IC 24-4.6-1-101 et seq. This is prejudgment and
        postjudgment interest on money judgments where no other rate is fixed by
        contract, and it runs from the date the money became due — the invoice due
        date or the date of breach — not merely from the date a court enters
        judgment. Here's why that matters for your demand letter:
      </p>

      <ul>
        <li>
          For a $5,400 invoice that's 4 months past due, prejudgment interest at
          8% is roughly $144 and climbing every day it remains unpaid. Over a full
          year, that's about $432 in interest alone — on top of the principal.
        </li>
        <li>
          Postjudgment interest continues at 8% until the judgment is satisfied.
          Indiana money judgments are enforceable for years and can be renewed, so
          the interest clock keeps running on a client who stalls.
        </li>
        <li>
          <strong>Demand letter calculation:</strong> Always show the math:
          "$5,400.00 principal + $144.00 in accrued interest at 8% per year
          (IC 24-4.6-1-101) as of [date] = $5,544.00 total due." Spelling out the
          running interest makes non-payment look like a decision to pay more later.
        </li>
      </ul>

      <p>
        Note that if your contract specifies a lawful interest or late-fee rate,
        that contractual rate can govern instead of the statutory 8% — Indiana
        generally enforces reasonable contractual interest provisions. If your
        agreement includes a late-payment clause, cite it alongside (or instead of)
        the statutory rate.
      </p>

      <h2>Statute of Limitations: A Generous 6 Years — For Both</h2>

      <p>
        Indiana is refreshingly simple here compared to states that split written
        and oral contracts across very different windows. Freelancers get a long
        runway either way:
      </p>

      <ul>
        <li>
          <strong>Written contracts:</strong> 6 years (IC 34-11-2-9). This applies
          to signed service agreements, statements of work, and detailed written
          agreements — including email exchanges that together form a writing. Most
          freelance work lands here.
        </li>
        <li>
          <strong>Oral contracts:</strong> 6 years (IC 34-11-2-7). Indiana gives
          oral employment and contract claims the same 6-year window in many cases,
          though the safest practice is always to have your terms in writing —
          proof, not just the deadline, wins cases. A written record of what was
          agreed and delivered is far easier to enforce than a he-said-she-said.
        </li>
        <li>
          <strong>When the clock starts:</strong> The limitations period generally
          runs from the date the cause of action accrues — typically the invoice
          due date or the date the client breached by failing to pay. For
          multi-invoice projects, each unpaid invoice can start its own clock, so
          don't assume the whole engagement rises or falls on a single date.
        </li>
      </ul>

      <p>
        A 6-year window is comfortable, but it is not a reason to wait. Memories
        fade, businesses dissolve, and defendants become harder to locate. The
        best time to send a demand letter is the moment an invoice is clearly,
        unreasonably overdue.
      </p>

      <h2>Sample Demand Letter: Indiana Freelancer</h2>

      <p>
        Below is a template structured for Indiana law, incorporating the IDCSA
        notice-and-cure language, the 8% statutory interest, and the small claims
        path. Fill in your specifics and send via certified mail with return
        receipt requested to the client's registered agent or principal business
        address (look up the registered agent using the Indiana Secretary of
        State's INBiz business search at https://inbiz.in.gov).
      </p>

      <pre style={{ background: "#f5f5f5", padding: "1.5rem", borderRadius: "0.5rem", fontSize: "0.875rem", overflow: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>
{`[Your Name]
[Your Address]
[Indianapolis/Fort Wayne/Bloomington, IN ZIP]
[Your Email]
[Date]

VIA CERTIFIED MAIL — RETURN RECEIPT REQUESTED

[Client Name / Company Name]
[Registered Agent or Business Address]
[City, IN ZIP]

Re: DEMAND FOR PAYMENT — [Project Description]
     Invoice #[Number] — $[Amount] Past Due

Dear [Client Name]:

I am writing to formally demand payment of $[Principal Amount] for
[describe the work performed], which was delivered on [date] and
accepted by your company. This amount has been past due since
[Invoice Due Date].

As of today, [Date], the total amount owed is:

  Principal (Invoice #[Number]) ................ $[Principal]
  Accrued interest at 8% per year
  (IC 24-4.6-1-101) from [Due Date]
  through [Today's Date] ...................... $[Interest]
                                        --------------
  TOTAL DUE .................................... $[Total]

To the extent this transaction is governed by the Indiana Deceptive
Consumer Sales Act (IC 24-5-0.5-1 et seq.), this letter serves as
formal written notice of a deceptive act — accepting services
rendered without paying for them — and of your opportunity to cure
that act by remitting payment in full. Under the Act, a court may
award treble damages plus reasonable attorney fees and costs for an
uncured deceptive act.

If payment is not received by [Date — give 14 days], I will file
suit in [Marion/Allen/Monroe] County Small Claims Court under
IC 33-29-1-1.5. My claim will include the full principal, accrued
interest measured from the due date, and all filing and service
costs.

You may avoid litigation entirely by remitting payment of $[Total]
to the address above, or via [payment method]. Please direct any
questions to [email/phone].

Sincerely,

[Your Name]
[Your Signature]`}
      </pre>

      <h2>Indiana Small Claims: Step-by-Step Filing</h2>

      <p>If your demand letter doesn't produce payment within the deadline:</p>

      <ol>
        <li>
          <strong>Complete the Notice of Claim.</strong> Each county provides a
          small claims Notice of Claim form (Marion County township courts and the
          Indiana Courts self-service center at https://www.in.gov/courts both make
          these available). State who you are, who the defendant is, the amount
          owed, and a brief, plain description of the basis — an unpaid invoice for
          services delivered and accepted.
        </li>
        <li>
          <strong>File with the clerk of the correct court.</strong> Bring the
          completed Notice of Claim, the filing fee ($50–$95 depending on county
          and amount), and copies of your supporting documents (the contract or
          statement of work, invoices, and the email trail showing delivery,
          acceptance, and non-payment). The clerk stamps the filing and typically
          arranges certified-mail service on the defendant.
        </li>
        <li>
          <strong>Confirm service.</strong> Indiana small claims service is usually
          by certified mail. If the defendant refuses or the mail is returned
          unclaimed, ask the clerk about sheriff service or a private process
          server. Nothing proceeds until the defendant has been properly served.
        </li>
        <li>
          <strong>Prepare for the hearing.</strong> Indiana small claims is
          informal. Bring three organized sets of your evidence — one for you, one
          for the judge, one for the defendant: the signed contract, every invoice,
          the emails showing the work was accepted and unpaid, and your demand
          letter with the certified-mail receipt. Tell the story chronologically:
          what you agreed to do, that you did it, that they accepted it, and that
          they haven't paid.
        </li>
        <li>
          <strong>Collecting the judgment.</strong> An Indiana money judgment
          accrues 8% interest until satisfied. If the defendant doesn't pay
          voluntarily, you can pursue proceedings supplemental (a court hearing to
          identify assets and income), garnish wages, levy bank accounts, or record
          a judgment lien against real property. The judgment gives you the legal
          machinery; the interest keeps the pressure on.
        </li>
      </ol>

      <h2>Key Indiana Statutes for Your Demand Letter</h2>

      <ul>
        <li><strong>IC 33-29-1-1.5:</strong> Small claims jurisdiction — $6,000 limit statewide ($8,000 in Marion County/Indianapolis)</li>
        <li><strong>IC 24-5-0.5-1 et seq.:</strong> Indiana Deceptive Consumer Sales Act — treble damages plus attorney fees and costs for deceptive acts, with a notice-and-cure structure</li>
        <li><strong>IC 24-4.6-1-101 et seq.:</strong> 8% statutory interest, prejudgment and postjudgment, from the date the debt became due</li>
        <li><strong>IC 34-11-2-9:</strong> 6-year statute of limitations for written contracts</li>
        <li><strong>IC 34-11-2-7:</strong> 6-year statute of limitations for oral contracts</li>
      </ul>

      <h2>When the IDCSA Doesn't Apply — And What to Do</h2>

      <p>
        The IDCSA is built around "consumer transactions." Indiana courts read that
        term in light of the statute's purpose, and a purely commercial, business-to-business
        engagement — a marketing agency hiring you to build a tool for its own
        operations, for instance — may fall outside the Act's core reach. Unlike
        Florida or California, Indiana imposes <strong>no mandatory pre-suit notice
        requirement</strong> for most ordinary breach-of-contract claims, so you are
        never barred from suing simply because you skipped a statutory letter. But a
        demand letter is still strong practice — it creates a paper trail, it often
        gets you paid without a filing, and it can serve as IDCSA cure notice when
        the Act does apply. When the IDCSA is a poor fit, build your demand letter on:
      </p>

      <ul>
        <li><strong>Breach of contract</strong> — the cleanest, most direct claim: you had an agreement, you performed, they didn't pay.</li>
        <li><strong>Account stated</strong> — you sent an invoice, they didn't dispute it within a reasonable time, and the amount became a settled debt between you.</li>
        <li><strong>Quantum meruit / unjust enrichment</strong> — you did the work, the client received and used the benefit, and fairness requires payment for its reasonable value.</li>
        <li><strong>Promissory estoppel</strong> — you reasonably relied on their promise to pay and changed your position (for example, turned down other work or extended the engagement).</li>
        <li><strong>Statutory interest</strong> — IC 24-4.6-1-101's 8% still applies to a money judgment, so your claim keeps growing from the due date regardless of the IDCSA.</li>
      </ul>

      <p>
        Even without the IDCSA's treble-damages threat, an Indiana demand letter
        that lays out a clean breach-of-contract claim, an 8% interest calculation
        running from the due date, and a concrete small claims filing path is
        persuasive. Most business clients, once they see a clear legal roadmap to a
        judgment plus accruing interest and recoverable costs, decide that paying
        now is simply cheaper than paying later. That's the whole point of the
        letter: make the math obvious, keep the tone professional, and give the
        client an easy way to do the right thing.
      </p>
    </ArticleLayout>
  );
}
