// Blog post registry. The /blog index, the sitemap, and each article's metadata
// all read from here so the list of posts stays in one place.

export interface BlogPost {
  slug: string;
  title: string; // <title> / H1
  description: string; // meta description
  excerpt: string; // shown on the /blog index card
  category: string;
  readMins: number;
  date: string; // ISO date, for schema + display
  keywords: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-write-demand-letter-freelancer",
    title: "How to Write a Demand Letter as a Freelancer (Template + Examples)",
    description:
      "A step-by-step guide to writing a demand letter for unpaid freelance work — what to include, the exact structure, tone, and a free template you can copy.",
    excerpt:
      "The exact structure, tone, and language that makes a demand letter work — plus a copy-and-paste template for freelancers chasing an unpaid invoice.",
    category: "Guides",
    readMins: 7,
    date: "2026-06-10",
    keywords: [
      "demand letter for freelancer",
      "how to write demand letter",
      "freelance demand letter template",
    ],
  },
  {
    slug: "unpaid-invoice-what-to-do",
    title: "Client Not Paying an Invoice? Here's Exactly What to Do",
    description:
      "A clear, step-by-step playbook for freelancers with an unpaid invoice — from polite reminders to a formal demand letter and beyond.",
    excerpt:
      "A calm, proven escalation ladder for recovering an unpaid invoice — the exact steps to take (and in what order) when a client goes quiet.",
    category: "Getting Paid",
    readMins: 8,
    date: "2026-06-14",
    keywords: [
      "client not paying invoice",
      "unpaid invoice help",
      "what to do unpaid invoice",
    ],
  },
  {
    slug: "demand-letter-vs-lawyer",
    title: "Demand Letter vs. Lawyer: Do You Really Need an Attorney?",
    description:
      "How much a lawyer charges for a demand letter, when hiring one is worth it, and when a DIY demand letter does the same job for a fraction of the cost.",
    excerpt:
      "What lawyers actually charge for a demand letter, when it's worth it, and when a well-written DIY letter gets the same result for far less.",
    category: "Costs & Legal",
    readMins: 7,
    date: "2026-06-18",
    keywords: [
      "demand letter lawyer cost",
      "do I need lawyer demand letter",
      "lawyer demand letter fee",
    ],
  },
  {
    slug: "get-paid-freelance-fast",
    title: "How to Get Paid as a Freelancer (Fast) — 9 Tactics That Work",
    description:
      "Nine practical tactics to get paid faster as a freelancer — from bulletproof contracts and deposits to invoice terms and firm follow-ups.",
    excerpt:
      "Nine field-tested tactics to get paid faster and prevent late payments before they start — from deposits and clear terms to firm, effective follow-ups.",
    category: "Getting Paid",
    readMins: 8,
    date: "2026-06-22",
    keywords: [
      "how to get paid as freelancer",
      "freelance payment problems",
      "get paid faster freelance",
    ],
  },
  {
    slug: "small-claims-court-alternatives",
    title: "5 Alternatives to Small Claims Court (Try These First)",
    description:
      "Before you sue a client in small claims court, try these five faster, cheaper alternatives to recover the money you're owed.",
    excerpt:
      "Suing is slow, stressful, and often unnecessary. Here are five faster, cheaper ways to recover what you're owed before you set foot in a courtroom.",
    category: "Costs & Legal",
    readMins: 7,
    date: "2026-06-26",
    keywords: [
      "small claims court alternatives",
      "before suing client",
      "alternatives to suing",
    ],
  },
  {
    slug: "psychology-of-getting-paid",
    title: "The Psychology of Getting Paid: Why Clients Ghost and How to Fix It",
    description:
      "Why clients go quiet on invoices — avoidance, cash-flow triage, diffusion of responsibility — and the psychological tactics that actually get you paid.",
    excerpt:
      "Late payment usually isn't about the money. It's about avoidance, triage, and a psychological discount freelancers don't have to accept. Here's the fix.",
    category: "Getting Paid",
    readMins: 7,
    date: "2026-06-29",
    keywords: [
      "why clients don't pay",
      "client ghosting invoice",
      "psychology of unpaid invoices",
    ],
  },
  {
    slug: "freelancer-legal-toolkit",
    title: "The Freelancer's Legal Toolkit: Demand Letter, Contract, Invoice — The Holy Trinity",
    description:
      "How a contract, an invoice, and a demand letter work together as one system to protect freelancers — what each must include and how they reinforce each other.",
    excerpt:
      "Most freelancers treat their contract, invoice, and demand letter as three separate afterthoughts. Used as one system, they're nearly impossible to ignore.",
    category: "Guides",
    readMins: 8,
    date: "2026-07-02",
    keywords: [
      "freelancer contract invoice demand letter",
      "freelance legal documents",
      "protect freelance business legally",
    ],
  },
  {
    slug: "demand-letter-laws-california",
    title: "Demand Letter Laws in California: Requirements, Limits & Liens",
    description:
      "What California law says about demand letters — small claims thresholds ($12,500 for individuals), the 20-day preliminary lien notice, and how to send a compliant letter before you sue.",
    excerpt:
      "California has its own rules for demanding payment — from the $12,500 small claims cap to the 20-day preliminary notice for liens. Here's what freelancers need to know.",
    category: "Costs & Legal",
    readMins: 8,
    date: "2026-07-03",
    keywords: [
      "demand letter california",
      "california small claims limit",
      "california 20-day preliminary notice",
    ],
  },
  {
    slug: "demand-letter-legally-binding",
    title: "Is a Demand Letter Legally Binding? What It Can and Can't Do",
    description:
      "Is a demand letter enforceable in court? What it can legally do — show intent, create a paper trail, trigger payment — and what it absolutely cannot do. A clear guide for freelancers.",
    excerpt:
      "A demand letter isn't a court order. But it is one of the most effective tools for getting paid — if you understand what it can and can't legally do.",
    category: "Costs & Legal",
    readMins: 8,
    date: "2026-07-03",
    keywords: [
      "is a demand letter legally binding",
      "demand letter legal effect",
      "does a demand letter hold up in court",
    ],
  },
  {
    slug: "demand-letter-unpaid-invoice-template",
    title: "Demand Letter for Unpaid Invoice: Free Template + What to Say",
    description:
      "A complete guide to writing a demand letter for an unpaid freelance invoice — with a free template, step-by-step instructions, and exactly what to say to get paid faster.",
    excerpt:
      "The exact structure, language, and template for a demand letter that gets unpaid invoices paid — plus what to say, when to send it, and the one paragraph that makes the difference.",
    category: "Guides",
    readMins: 8,
    date: "2026-07-04",
    keywords: [
      "demand letter unpaid invoice template",
      "demand letter for unpaid invoice",
      "unpaid invoice demand letter sample",
      "how to write demand letter for payment",
    ],
  },
  {
    slug: "50-demand-letters-case-study",
    title: "I Sent 50 Demand Letters. Here's What Happened.",
    description:
      "A breakdown of 50 demand letters and what separated the ones paid in 48 hours from the ones that went nowhere — illustrative data for freelancers.",
    excerpt:
      "What actually moves the needle when you send a demand letter? A look at 50 of them, broken down by deadline, tone, and what happened next.",
    category: "Getting Paid",
    readMins: 8,
    date: "2026-07-06",
    keywords: [
      "demand letter results",
      "does a demand letter work",
      "demand letter success rate",
    ],
  },
  {
    slug: "final-demand-letter-examples",
    title: "How to Write a Final Demand Letter (With Examples)",
    description:
      "Everything you need to write a final demand letter that gets attention — the structure, the exact language to use, three real-world examples, and the one mistake that makes recipients ignore you.",
    excerpt:
      "The final demand letter is your last written move before legal action. Here's the structure, language, and examples that make it impossible to ignore.",
    category: "Guides",
    readMins: 8,
    date: "2026-07-06",
    keywords: [
      "final demand letter",
      "how to write final demand letter",
      "final demand letter template",
      "last demand letter before legal action",
    ],
  },
  {
    slug: "late-payment-interest-by-state",
    title: "How Much Interest Can I Charge on a Late Invoice? (By State)",
    description:
      "A state-by-state guide to late payment interest rates for freelancers — what the law allows, how to calculate it, and how to include interest in a demand letter.",
    excerpt:
      "Most states let you charge interest on late invoices — but the rate, the grace period, and the rules vary. Here's what freelancers can legally add to an overdue bill.",
    category: "Getting Paid",
    readMins: 8,
    date: "2026-07-06",
    keywords: [
      "late payment interest rate by state",
      "charge interest on overdue invoice",
      "late fee freelance invoice",
      "legal interest rate late payment",
    ],
  },
  {
    slug: "freelance-contract-clauses-prevent-non-payment",
    title: "Freelance Contract Clauses That Prevent Non-Payment",
    description:
      "The 7 contract clauses every freelancer should include to prevent late and non-payment — from payment schedules and late fees to kill fees and interest on overdue invoices.",
    excerpt:
      "Most non-payment problems are preventable before the project starts. These seven contract clauses make it nearly impossible for a client to pay late — or not at all.",
    category: "Getting Paid",
    readMins: 9,
    date: "2026-07-07",
    keywords: [
      "freelance contract clauses",
      "prevent non-payment",
      "freelance contract payment terms",
      "late payment clause freelance",
      "kill fee clause",
    ],
  },
  {
    slug: "cease-and-desist-freelancer",
    title: "Cease & Desist Letter: When Freelancers Actually Need One",
    description:
      "When a freelance client crosses a line — harassment, IP theft, non-compete violations — a cease and desist letter is your first legal move. What it is, when to send one, and a free template.",
    excerpt:
      "Most freelancers think cease & desist letters are only for big companies. Here are the five real situations where sending one protects your business — and your sanity.",
    category: "Guides",
    readMins: 8,
    date: "2026-07-08",
    keywords: [
      "cease and desist letter freelancer",
      "cease and desist template",
      "stop harassment letter freelance",
      "freelance legal protection",
    ],
  },
  {
    slug: "late-rent-notice-landlord",
    title: "Late Rent Notice: A Landlord's 3-Step Escalation Guide",
    description:
      "A complete guide for small landlords — from the first late rent notice to the formal demand letter to the eviction filing. What to send, when to send it, and how to document each step so you're ready for court.",
    excerpt:
      "Most landlords either keep texting (which doesn't work) or jump straight to eviction (which is expensive). Here's the three-step escalation that gets rent paid — with the paperwork to prove it.",
    category: "Getting Paid",
    readMins: 9,
    date: "2026-07-08",
    keywords: [
      "late rent notice template",
      "demand letter for unpaid rent",
      "landlord escalation guide",
      "how to collect unpaid rent",
      "rent demand letter",
    ],
  },
  {
    slug: "payment-reminder-email-templates",
    title: "Payment Reminder Email Templates That Actually Get Replies",
    description:
      "Five payment reminder email templates freelancers can copy and paste — from the friendly nudge to the firm final notice. Tested language that gets invoices paid without burning client relationships.",
    excerpt:
      "Most payment reminders either sound like a collections robot or an apologetic pushover. Here are five templates that thread the needle — firm, professional, and surprisingly effective.",
    category: "Getting Paid",
    readMins: 8,
    date: "2026-07-08",
    keywords: [
      "payment reminder email template",
      "overdue invoice email",
      "how to ask client to pay",
      "freelance payment reminder",
      "late payment email template",
    ],
  },
  {
    slug: "demand-letter-laws-texas",
    title: "Demand Letter Laws in Texas: What You Need to Know Before Sending One",
    description:
      "Texas-specific rules for demand letters — statutory notice requirements, Texas Deceptive Trade Practices Act implications, attorney fee recovery, and the exact language that makes a Texas demand letter carry legal weight.",
    excerpt:
      "Texas has specific rules that can make or break a demand letter — from DTPA notice requirements to mandatory pre-suit waiting periods. Here's what freelancers and small businesses in Texas need to know before hitting send.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-09",
    keywords: [
      "demand letter Texas",
      "Texas demand letter laws",
      "DTPA demand letter",
      "Texas pre-suit notice",
      "demand letter requirements Texas",
    ],
  },
  {
    slug: "demand-letter-laws-florida",
    title: "Demand Letter Laws in Florida: Small Claims, Civil Theft & What You Must Include",
    description:
      "Florida-specific rules for demand letters — the $8,000 small claims limit, the civil theft statute (F.S. § 772.11) and its mandatory pre-suit notice, treble damages, and the exact language freelancers need to get paid in Florida.",
    excerpt:
      "Florida has a $8,000 small claims limit, a civil theft statute that can triple your damages, and a mandatory 30-day pre-suit notice requirement. Here's how to write a demand letter that satisfies all of them.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-09",
    keywords: [
      "demand letter Florida",
      "Florida demand letter laws",
      "Florida civil theft statute",
      "F.S. 772.11 demand letter",
      "Florida small claims limit",
    ],
  },
  {
    slug: "demand-letter-laws-new-york",
    title: "Demand Letter Laws in New York: Requirements, Deadlines & What You Must Include",
    description:
      "New York-specific rules for demand letters — the $10,000 small claims limit (NYC), General Business Law § 349 deceptive practices, statutory interest at 9%, and the exact language freelancers need to get paid in New York.",
    excerpt:
      "New York has the highest small claims limit in the country ($10,000 in NYC), a 9% statutory interest rate, and a deceptive practices statute that applies to business disputes. Here's how to write a demand letter that uses all of them.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-09",
    keywords: [
      "demand letter New York",
      "New York demand letter laws",
      "NY demand letter requirements",
      "NY small claims limit",
      "New York statutory interest 9%",
      "GBL 349 deceptive practices",
    ],
  },
  {
    slug: "demand-letter-laws-illinois",
    title: "Demand Letter Laws in Illinois: Small Claims, Consumer Fraud & What You Must Include",
    description:
      "Illinois-specific rules for demand letters — the $10,000 small claims limit (Cook County), the Consumer Fraud Act (815 ILCS 505), 5% statutory interest, and the exact language freelancers need to get paid in Illinois.",
    excerpt:
      "Illinois has a powerful Consumer Fraud Act that can turn a business dispute into a triple-damages claim, a $10,000 small claims cap in Cook County, and a 5% statutory interest rate. Here's how to write a demand letter that uses every available tool.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-09",
    keywords: [
      "demand letter Illinois",
      "Illinois demand letter laws",
      "Illinois Consumer Fraud Act",
      "815 ILCS 505 demand letter",
      "Illinois small claims limit",
      "Illinois statutory interest 5%",
    ],
  },
  {
    slug: "demand-letter-laws-pennsylvania",
    title: "Demand Letter Laws in Pennsylvania: UTPCPL, Small Claims & Statutory Interest",
    description:
      "Pennsylvania-specific rules for demand letters — the $12,000 small claims limit, the UTPCPL (73 P.S. § 201-1) for treble damages, 6% statutory interest, and the exact language freelancers need to get paid in Pennsylvania.",
    excerpt:
      "Pennsylvania has a $12,000 small claims limit (one of the highest in the U.S.), a UTPCPL that can triple your damages, and a 6% statutory interest rate. Here's how to write a demand letter that uses every Keystone State advantage.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-09",
    keywords: [
      "demand letter Pennsylvania",
      "Pennsylvania demand letter laws",
      "Pennsylvania UTPCPL",
      "73 P.S. 201-1 demand letter",
      "Pennsylvania small claims limit",
      "Pennsylvania statutory interest 6%",
      "PA magisterial district court",
    ],
  },
  {
    slug: "demand-letter-laws-georgia",
    title: "Demand Letter Laws in Georgia: Magistrate Court, 7% Interest & Contractual Attorney Fees",
    description:
      "Georgia-specific rules for demand letters — the $15,000 small claims limit in Magistrate Court, 7% statutory interest on liquidated demands (O.C.G.A. § 7-4-2), contractual attorney fee recovery (O.C.G.A. § 13-1-11), and the exact language freelancers need to get paid in Georgia.",
    excerpt:
      "Georgia has a $15,000 small claims limit (one of the highest in the nation), a 7% statutory interest rate, and a unique statute that lets you recover attorney fees if your contract includes the right language. Here's how freelancers in Georgia write a demand letter that uses every legal tool available.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-10",
    keywords: [
      "demand letter Georgia",
      "Georgia demand letter laws",
      "Georgia small claims limit",
      "Georgia Magistrate Court",
      "O.C.G.A. 7-4-2 interest",
      "O.C.G.A. 13-1-11 attorney fees",
      "Georgia statutory interest 7%",
    ],
  },
  {
    slug: "demand-letter-laws-ohio",
    title: "Demand Letter Laws in Ohio: Small Claims, 6% Interest & 8-Year Statute of Limitations",
    description:
      "Ohio-specific rules for demand letters — the $6,000 small claims limit, 6% statutory interest on judgments (O.R.C. § 1343.03), an 8-year statute of limitations on written contracts (O.R.C. § 2305.06), and the exact language freelancers need to get paid in Ohio.",
    excerpt:
      "Ohio gives freelancers one of the longest statute of limitations in the country (8 years on written contracts), a $6,000 small claims cap in municipal courts, and 6% interest on judgments. Here's how to write an Ohio demand letter that uses every tool the Buckeye State provides.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-10",
    keywords: [
      "demand letter Ohio",
      "Ohio demand letter laws",
      "Ohio small claims limit",
      "Ohio municipal court",
      "O.R.C. 1343.03 interest",
      "O.R.C. 2305.06 statute of limitations",
      "Ohio statutory interest 6%",
    ],
  },
  {
    slug: "demand-letter-laws-michigan",
    title: "Demand Letter Laws in Michigan: $7,000 Small Claims, 6-Year Statute & Judgment Interest Under MCL 600.6013",
    description:
      "Michigan-specific rules for demand letters — the $7,000 small claims limit in district courts (MCL 600.8401), automatic judgment interest under MCL 600.6013, a 6-year statute of limitations on written contracts (MCL 600.5807(8)), and what Michigan freelancers need to know about the Michigan Consumer Protection Act (MCL 445.903).",
    excerpt:
      "Michigan gives freelancers a $7,000 small claims limit (recently increased), automatic interest on judgments that varies with the 5-year T-note rate, and a 6-year statute of limitations for written contracts. Here's how to write a Michigan demand letter that uses every legal tool the Great Lakes State provides — including the bounced-check treble damages statute.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-10",
    keywords: [
      "demand letter Michigan",
      "Michigan demand letter laws",
      "Michigan small claims limit",
      "Michigan district court",
      "MCL 600.6013 interest",
      "MCL 600.5807 statute of limitations",
      "Michigan Consumer Protection Act",
      "Michigan bounced check treble damages",
    ],
  },
  {
    slug: "demand-letter-laws-massachusetts",
    title: "Demand Letter Laws in Massachusetts: $7,000 Small Claims, 12% Interest & Chapter 93A Treble Damages",
    description:
      "Massachusetts-specific rules for demand letters — the $7,000 small claims limit (M.G.L. c. 218, § 21), 12% statutory interest on contract claims (M.G.L. c. 231, § 6C), a 6-year statute of limitations for written contracts (M.G.L. c. 260, § 2), and the powerful Chapter 93A consumer protection statute that can triple your damages plus attorney fees.",
    excerpt:
      "Massachusetts has one of the highest statutory interest rates in the country (12%), a powerful consumer protection law that can triple your damages (Chapter 93A), and a $7,000 small claims limit. Here's how freelancers in Massachusetts write a demand letter that uses every legal tool the Bay State provides.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-11",
    keywords: [
      "demand letter Massachusetts",
      "Massachusetts demand letter laws",
      "Massachusetts small claims limit",
      "Massachusetts Chapter 93A",
      "M.G.L. c. 231 6C interest",
      "M.G.L. c. 260 statute of limitations",
      "Massachusetts treble damages",
      "Massachusetts 30-day demand letter",
      "Boston freelance demand letter",
    ],
  },
  {
    slug: "demand-letter-laws-new-jersey",
    title: "Demand Letter Laws in New Jersey: $3,000–$20,000 Limits, Consumer Fraud Act & Prejudgment Interest",
    description:
      "New Jersey-specific rules for demand letters — the $3,000 small claims limit (Special Civil Part), the $20,000 Special Civil Part regular limit, 6-year statute of limitations (N.J.S.A. 2A:14-1), prejudgment interest under Court Rule 4:42-11(b), and the powerful New Jersey Consumer Fraud Act (N.J.S.A. 56:8-1) that can triple your damages plus attorney fees.",
    excerpt:
      "New Jersey gives freelancers two paths: a $3,000 small claims track or a $20,000 Special Civil Part track, a powerful Consumer Fraud Act that can triple damages, and prejudgment interest tied to the prime rate. Here's how freelancers in the Garden State write a demand letter that uses every legal tool available.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-12",
    keywords: [
      "demand letter New Jersey",
      "New Jersey demand letter laws",
      "NJ small claims limit",
      "NJ Special Civil Part",
      "N.J.S.A. 2A:14-1",
      "New Jersey Consumer Fraud Act",
      "N.J.S.A. 56:8-1",
      "NJ Court Rule 4:42-11",
      "New Jersey prejudgment interest",
      "NJ treble damages",
    ],
  },
  {
    slug: "demand-letter-laws-washington",
    title: "Demand Letter Laws in Washington: $10,000 Small Claims, 12% Interest & CPA Treble Damages",
    description:
      "Washington-specific rules for demand letters — the $10,000 small claims limit (RCW 12.40.010), 12% statutory interest on judgments (RCW 19.52.020, RCW 4.56.110), the Washington Consumer Protection Act (RCW 19.86) with treble damages up to $25,000, 6-year statute of limitations for written contracts (RCW 4.16.040), and what freelancers need to know about filing venue in Washington District Court.",
    excerpt:
      "Washington gives freelancers one of the highest statutory interest rates in the country (12%), a powerful Consumer Protection Act that can triple your damages without requiring a pre-suit notice, and a $10,000 small claims limit. Here's how freelancers in the Evergreen State write a demand letter that uses every legal tool Washington provides.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-12",
    keywords: [
      "demand letter Washington",
      "Washington demand letter laws",
      "WA small claims limit",
      "Washington Consumer Protection Act",
      "RCW 19.86",
      "RCW 19.52.020 interest",
      "RCW 4.56.110 prejudgment interest",
      "RCW 4.16.040 statute of limitations",
      "Washington treble damages",
      "Seattle freelance demand letter",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
