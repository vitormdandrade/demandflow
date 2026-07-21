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
  {
    slug: "demand-letter-laws-north-carolina",
    title: "Demand Letter Laws in North Carolina: $10,000 Small Claims, 8% Interest & Unfair Trade Practices Treble Damages",
    description:
      "North Carolina-specific rules for demand letters — the $10,000 small claims limit (N.C.G.S. § 7A-210), 8% statutory interest on judgments (N.C.G.S. § 24-1), a 3-year statute of limitations for written contracts (N.C.G.S. § 1-52), and the powerful Unfair and Deceptive Trade Practices Act (N.C.G.S. § 75-1.1) that can triple your damages plus attorney fees.",
    excerpt:
      "North Carolina has a $10,000 small claims limit, an 8% statutory interest rate, and an Unfair Trade Practices Act that can triple your damages — but only a 3-year statute of limitations. Here's how freelancers in NC write a demand letter that uses every legal tool available before the clock runs out.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-13",
    keywords: [
      "demand letter North Carolina",
      "North Carolina demand letter laws",
      "NC small claims limit",
      "N.C.G.S. 7A-210",
      "North Carolina Unfair Trade Practices Act",
      "N.C.G.S. 75-1.1",
      "N.C.G.S. 24-1 interest",
      "NC treble damages",
      "North Carolina statutory interest 8%",
      "Charlotte freelance demand letter",
    ],
  },
  {
    slug: "demand-letter-laws-virginia",
    title: "Demand Letter Laws in Virginia: $5,000 Small Claims, VCPA Treble Damages & 6% Interest",
    description:
      "Virginia-specific rules for demand letters — the $5,000 small claims limit in General District Court (Va. Code § 16.1-77), 6% statutory interest on judgments (Va. Code § 6.2-302), a 5-year statute of limitations for written contracts (Va. Code § 8.01-246), and the Virginia Consumer Protection Act (Va. Code § 59.1-196) with treble damages and minimum $500 recovery — plus attorney fee recovery if your contract provides for it.",
    excerpt:
      "Virginia gives freelancers a $5,000 small claims track, a powerful Consumer Protection Act with treble damages, and a 5-year statute of limitations — longer than North Carolina but shorter than most. Here's how freelancers in the Old Dominion write a demand letter that uses every legal tool Virginia provides.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-13",
    keywords: [
      "demand letter Virginia",
      "Virginia demand letter laws",
      "VA small claims limit",
      "Virginia Consumer Protection Act",
      "Va. Code 59.1-196",
      "Va. Code 6.2-302 interest",
      "Va. Code 8.01-246 statute of limitations",
      "Virginia treble damages",
      "Virginia General District Court",
      "Richmond freelance demand letter",
    ],
  },
  {
    slug: "demand-letter-laws-arizona",
    title: "Demand Letter Laws in Arizona: $3,500 Small Claims, 6-Year Statute & ACFA Treble Damages",
    description:
      "Arizona-specific rules for demand letters — the $3,500 small claims limit in Justice Court (A.R.S. § 22-503), 6.5% judgment interest (A.R.S. § 44-1201), a 6-year statute of limitations for written contracts (A.R.S. § 12-548), and the powerful Arizona Consumer Fraud Act (A.R.S. § 44-1521) with treble damages plus mandatory attorney fees — plus what every Phoenix and Tucson freelancer needs to know about the ACFA demand-letter formula.",
    excerpt:
      "Arizona gives freelancers a powerful Consumer Fraud Act with treble damages plus mandatory attorney fees, a generous 6-year statute of limitations, and a $3,500 small claims cap. Here's how Arizona freelancers write a demand letter that makes non-paying clients do the math — and reach for the checkbook.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-14",
    keywords: [
      "demand letter Arizona",
      "Arizona demand letter laws",
      "AZ small claims limit",
      "Arizona Consumer Fraud Act",
      "A.R.S. 44-1521",
      "A.R.S. 12-548 statute of limitations",
      "A.R.S. 44-1533 treble damages",
      "Arizona treble damages",
      "Phoenix freelance demand letter",
      "Scottsdale demand letter",
    ],
  },
  {
    slug: "demand-letter-laws-tennessee",
    title: "Demand Letter Laws in Tennessee: $25K Small Claims, 10% Interest & TCPA Treble Damages",
    description:
      "Tennessee-specific rules for demand letters — the $25,000 small claims limit in General Sessions Court (Tenn. Code Ann. § 16-15-501), one of the nation's highest judgment interest rates at 10% per year (Tenn. Code Ann. § 47-14-121), a 6-year statute of limitations for written contracts (Tenn. Code Ann. § 28-3-109), and the Tennessee Consumer Protection Act (Tenn. Code Ann. § 47-18-109) with treble damages — plus what every Nashville, Memphis, and Chattanooga freelancer needs to know before sending a demand letter in the Volunteer State.",
    excerpt:
      "Tennessee has the country's highest small claims limit at $25,000, a punishing 10% judgment interest rate, and a Consumer Protection Act with treble damages. Here's what Tennessee freelancers need to know before they send a demand letter.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-15",
    keywords: [
      "demand letter Tennessee",
      "Tennessee demand letter laws",
      "TN small claims limit",
      "Tennessee Consumer Protection Act",
      "Tenn. Code Ann. 47-18-109",
      "Tenn. Code Ann. 28-3-109 statute of limitations",
      "Tennessee treble damages",
      "Nashville freelance demand letter",
      "Memphis demand letter",
      "Chattanooga demand letter",
    ],
  },
  {
    slug: "demand-letter-laws-colorado",
    title: "Demand Letter Laws in Colorado: $7,500 Small Claims, 8% Interest & CCPA Treble Damages",
    description:
      "Colorado-specific rules for demand letters — the $7,500 small claims limit (C.R.S. § 13-6-403), 8% statutory interest on judgments (C.R.S. § 5-12-102), a 3-6 year statute of limitations depending on contract type, and the powerful Colorado Consumer Protection Act (C.R.S. § 6-1-113) with treble damages plus mandatory attorney fees — plus what every Denver, Boulder, and Colorado Springs freelancer needs to know before sending a demand letter in the Centennial State.",
    excerpt:
      "Colorado gives freelancers a $7,500 small claims track, 8% interest, and a Consumer Protection Act with treble damages plus mandatory attorney fees. Here's how Colorado freelancers write a demand letter that leverages the CCPA, handles different statutes of limitations for written vs. oral contracts, and gets results in Denver, Boulder, and beyond.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-15",
    keywords: [
      "demand letter Colorado",
      "Colorado demand letter laws",
      "CO small claims limit",
      "Colorado Consumer Protection Act",
      "C.R.S. 6-1-113",
      "C.R.S. 5-12-102 interest",
      "C.R.S. 13-6-403",
      "Colorado treble damages",
      "Denver freelance demand letter",
      "Boulder demand letter",
      "Colorado Springs demand letter",
    ],
  },
  {
    slug: "demand-letter-laws-indiana",
    title: "Demand Letter Laws in Indiana: $6,000 Small Claims, 8% Interest & IDCSA Treble Damages",
    description:
      "Indiana-specific rules for demand letters — the $6,000 small claims limit ($8,000 in Indianapolis), 8% statutory interest (IC 24-4.6-1-101), a 6-year statute of limitations for written contracts (IC 34-11-2-9), and the Indiana Deceptive Consumer Sales Act (IC 24-5-0.5-1) that can treble your damages plus attorney fees.",
    excerpt:
      "Indiana gives freelancers a $6,000 small claims limit ($8,000 in Indianapolis), 8% statutory interest, and a Deceptive Consumer Sales Act that can triple damages. Here's how to write an Indiana demand letter that uses every Hoosier State tool available.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-15",
    keywords: [
      "demand letter Indiana",
      "Indiana demand letter laws",
      "Indiana small claims limit",
      "Indiana IDCSA",
      "IC 24-5-0.5-1 treble damages",
      "Indiana statutory interest 8%",
      "Indiana 6-year statute of limitations",
      "Indianapolis small claims limit",
      "Indiana freelance demand letter",
    ],
  },
  {
    slug: "demand-letter-laws-oregon",
    title: "Demand Letter Laws in Oregon: $10,000 Small Claims, 9% Interest & UTPA Treble Damages",
    description:
      "Oregon-specific rules for demand letters — the $10,000 small claims limit (ORS 46.405), 9% statutory interest on judgments (ORS 82.010), a 6-year statute of limitations for written contracts (ORS 12.080), and the Oregon Unlawful Trade Practices Act (ORS 646.608) with treble damages — plus what every Portland, Eugene, and Bend freelancer needs to know before sending a demand letter in the Beaver State.",
    excerpt:
      "Oregon gives freelancers a $10,000 small claims limit, 9% statutory interest — one of the highest rates on the West Coast — and an Unlawful Trade Practices Act that can triple damages. Here's how Oregon freelancers write a demand letter that leverages every tool the Beaver State provides.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-16",
    keywords: [
      "demand letter Oregon",
      "Oregon demand letter laws",
      "OR small claims limit",
      "Oregon Unlawful Trade Practices Act",
      "ORS 646.608",
      "ORS 82.010 interest",
      "ORS 12.080 statute of limitations",
      "Oregon treble damages",
      "Portland freelance demand letter",
      "Oregon 9% statutory interest",
    ],
  },
  {
    slug: "demand-letter-laws-maryland",
    title: "Demand Letter Laws in Maryland: $5,000 Small Claims, 6% Interest & MCPA Treble Damages",
    description:
      "Maryland-specific rules for demand letters — the $5,000 small claims limit (Md. Code, Cts. & Jud. Proc. § 4-405), 6% prejudgment interest (Md. Code, Cts. & Jud. Proc. § 11-106), a tight 3-year statute of limitations for written contracts (Md. Code, Cts. & Jud. Proc. § 5-101), and the Maryland Consumer Protection Act (Md. Code, Comm. Law § 13-301) with treble damages plus attorney fees — plus what every Baltimore, Annapolis, and DC-corridor freelancer needs to know before sending a demand letter in the Free State.",
    excerpt:
      "Maryland gives freelancers a $5,000 small claims track, 6% interest, and the MCPA's treble damages — but only 3 years to act, the tightest statute of limitations on the East Coast. Here's how Maryland freelancers write a demand letter that preserves every legal tool before the clock runs out.",
    category: "Costs & Legal",
    readMins: 8,
    date: "2026-07-16",
    keywords: [
      "demand letter Maryland",
      "Maryland demand letter laws",
      "MD small claims limit",
      "Maryland Consumer Protection Act",
      "Md. Code Comm. Law 13-301",
      "Md. Code Cts. Jud. Proc. 11-106",
      "Maryland treble damages",
      "Maryland 3-year statute of limitations",
      "Baltimore freelance demand letter",
      "MD prejudgment interest 6%",
    ],
  },
  {
    slug: "demand-letter-laws-nevada",
    title: "Demand Letter Laws in Nevada: $10,000 Small Claims, Prime + 2% Interest & NRS 598 Deceptive Trade Practices",
    description:
      "Nevada-specific rules for demand letters — the $10,000 small claims limit in Justice Court (NRS 73.010), post-judgment interest at the prime rate plus 2% (NRS 17.130, NRS 99.040), a 6-year statute of limitations for written contracts (NRS 11.190), and the Nevada Deceptive Trade Practices Act (NRS 598.0903–598.0999) that can award treble damages plus attorney fees — plus what every Las Vegas, Reno, and Henderson freelancer needs to know before sending a demand letter in the Silver State.",
    excerpt:
      "Nevada combines one of the country's highest small claims limits ($10,000) with a powerful Deceptive Trade Practices Act that can triple damages — and Las Vegas alone has over 80,000 independent workers. Here's how Nevada freelancers write a demand letter that gets attention in a state built on high-stakes negotiations.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-17",
    keywords: [
      "demand letter Nevada",
      "Nevada demand letter laws",
      "NV small claims limit",
      "Nevada Deceptive Trade Practices Act",
      "NRS 598",
      "NRS 73.010",
      "Nevada treble damages",
      "Las Vegas freelance demand letter",
      "Reno demand letter",
      "Nevada statutory interest",
    ],
  },
  {
    slug: "demand-letter-laws-connecticut",
    title: "Demand Letter Laws in Connecticut: $5,000 Small Claims, 6%–12% Interest & CUTPA Treble Damages",
    description:
      "Connecticut-specific rules for demand letters — the $5,000 small claims limit in the Superior Court Small Claims Session (C.G.S. § 51-15), 6%–12% statutory interest (C.G.S. § 37-3a), a 6-year statute of limitations for written contracts (C.G.S. § 52-576), and the Connecticut Unfair Trade Practices Act (CUTPA, C.G.S. § 42-110a) that can award treble damages plus attorney fees — plus what every Stamford, Hartford, and New Haven freelancer needs to know before sending a demand letter in the Constitution State.",
    excerpt:
      "Connecticut combines a $5,000 small claims limit with CUTPA — the state's powerful unfair trade practices law that can triple damages — and a freelance economy dense with hedge fund contractors, insurance consultants, and biotech freelancers. Here's how Connecticut freelancers write a demand letter that commands attention in Fairfield County and beyond.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-17",
    keywords: [
      "demand letter Connecticut",
      "Connecticut demand letter laws",
      "CT small claims limit",
      "Connecticut Unfair Trade Practices Act",
      "CUTPA",
      "C.G.S. 42-110a",
      "Connecticut treble damages",
      "Stamford freelance demand letter",
      "Hartford demand letter",
      "Connecticut statutory interest",
      "C.G.S. 52-576",
      "C.G.S. 37-3a",
    ],
  },
  {
    slug: "demand-letter-laws-alabama",
    title: "Demand Letter Laws in Alabama: $6,000 Small Claims, ADTPA Treble Damages & 6% Interest",
    description:
      "Alabama-specific rules for demand letters — the $6,000 small claims limit in District Court (Ala. Code § 12-12-31), 6% statutory interest on judgments (Ala. Code § 8-8-1), a 6-year statute of limitations for written contracts (Ala. Code § 6-2-34), and the Alabama Deceptive Trade Practices Act (ADTPA, Ala. Code § 8-19-1) that can award treble damages plus attorney fees for deceptive business practices — a powerful tool for freelancers dealing with non-paying clients.",
    excerpt:
      "Alabama gives freelancers a $6,000 small claims track, a powerful Deceptive Trade Practices Act with treble damages, and a 6-year statute of limitations — one of the longest in the Southeast. Here's how Alabama freelancers write a demand letter that uses every legal tool the Yellowhammer State provides.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-17",
    keywords: [
      "demand letter Alabama",
      "Alabama demand letter laws",
      "Alabama small claims limit",
      "Alabama District Court",
      "Ala. Code 12-12-31",
      "Alabama Deceptive Trade Practices Act",
      "ADTPA demand letter",
      "Ala. Code 8-19-1",
      "Alabama treble damages",
      "Ala. Code 6-2-34",
      "Alabama statutory interest 6%",
      "Birmingham freelance demand letter",
    ],
  },
  {
    slug: "demand-letter-laws-minnesota",
    title: "Demand Letter Laws in Minnesota: $15,000 Small Claims, Consumer Fraud Act Treble Damages & 6% Interest",
    description:
      "Minnesota-specific rules for demand letters — the $15,000 small claims limit in Conciliation Court (Minn. Stat. § 491A.01), 6% statutory interest on judgments (Minn. Stat. § 549.09), a 6-year statute of limitations for written contracts (Minn. Stat. § 541.05), and the Minnesota Consumer Fraud Act (Minn. Stat. § 325F.69) that can award treble damages plus attorney fees for deceptive trade practices — a powerful combination for freelancers dealing with non-paying clients in the Twin Cities and beyond.",
    excerpt:
      "Minnesota gives freelancers one of the highest small claims limits in the country ($15,000), a robust Consumer Fraud Act with treble damages, and a 6% statutory interest rate — plus a freelance economy anchored by Fortune 500 HQs, healthcare innovation, and a booming tech scene. Here's how Minnesota freelancers write a demand letter that commands attention from Minneapolis to Rochester.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-17",
    keywords: [
      "demand letter Minnesota",
      "Minnesota demand letter laws",
      "Minnesota small claims limit",
      "Minnesota Conciliation Court",
      "Minn. Stat. 491A.01",
      "Minnesota Consumer Fraud Act",
      "Minn. Stat. 325F.69",
      "Minnesota treble damages",
      "Minn. Stat. 549.09",
      "Minn. Stat. 541.05",
      "Minnesota statutory interest 6%",
      "Minneapolis freelance demand letter",
    ],
  },
  {
    slug: "demand-letter-laws-mississippi",
    title: "Demand Letter Laws in Mississippi: $3,500 Small Claims, 8% Interest & Open Account Statute",
    description:
      "Mississippi-specific rules for demand letters — the $3,500 small claims limit in Justice Court (Miss. Code Ann. § 9-11-9), 8% statutory interest on judgments (Miss. Code Ann. § 75-17-7), a 3-year statute of limitations for written contracts and open accounts (Miss. Code Ann. § 15-1-29), and the Mississippi Consumer Protection Act (Miss. Code Ann. § 75-24-1) as leverage — what freelancers in Jackson, Gulfport, and across the Magnolia State need to know to get paid.",
    excerpt:
      "Mississippi freelancers have a unique advantage — the 'open account' statute (Miss. Code Ann. § 15-1-29) that treats ongoing freelance relationships as open credit accounts, giving you stronger legal footing, plus an 8% statutory interest rate and the threat of the Mississippi Consumer Protection Act. Here's how to write a demand letter that gets results from Jackson to the Gulf Coast.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-17",
    keywords: [
      "demand letter Mississippi",
      "Mississippi demand letter laws",
      "Mississippi small claims limit",
      "Mississippi Justice Court",
      "Miss. Code Ann. 9-11-9",
      "Mississippi open account statute",
      "Miss. Code Ann. 15-1-29",
      "Mississippi Consumer Protection Act",
      "Miss. Code Ann. 75-24-1",
      "Mississippi statutory interest 8%",
      "Miss. Code Ann. 75-17-7",
      "Jackson freelance demand letter",
      "Gulfport freelance demand letter",
    ],
  },
  {
    slug: "demand-letter-laws-missouri",
    title: "Demand Letter Laws in Missouri: $5K Small Claims, 9% Interest & MMPA Treble Damages",
    description:
      "Missouri-specific rules for demand letters — the $5,000 small claims limit in Associate Circuit Court (Mo. Rev. Stat. § 482.305), 9% prejudgment interest on qualifying demanded debts (Mo. Rev. Stat. § 408.020), a 10-year statute of limitations for qualifying written contracts (Mo. Rev. Stat. § 516.110), and the Missouri Merchandising Practices Act (Mo. Rev. Stat. § 407.020) with potential treble-damages exposure — plus what St. Louis, Kansas City, and Springfield freelancers should know before demanding payment.",
    excerpt:
      "Missouri gives freelancers a $5,000 small claims track, 9% prejudgment interest on qualifying demanded debts, a 10-year window for qualifying written-payment obligations, and MMPA leverage when a covered consumer transaction involves deception. Here's how to write a demand letter that uses those tools without overclaiming.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-18",
    keywords: [
      "demand letter Missouri",
      "Missouri demand letter laws",
      "Missouri small claims limit",
      "Missouri Associate Circuit Court",
      "Mo. Rev. Stat. 482.305",
      "Missouri Merchandising Practices Act",
      "Mo. Rev. Stat. 407.020",
      "Missouri treble damages",
      "Mo. Rev. Stat. 408.020 prejudgment interest",
      "Mo. Rev. Stat. 516.110 statute of limitations",
      "St. Louis freelance demand letter",
      "Kansas City demand letter",
      "Springfield Missouri freelancer",
    ],
  },
  {
    slug: "demand-letter-laws-wisconsin",
    title: "Demand Letter Laws in Wisconsin: $10K Small Claims, 12% Interest & DTPA Treble Damages",
    description:
      "Wisconsin-specific rules for demand letters — the $10,000 small claims limit (Wis. Stat. § 799.01), 12% statutory interest on liquidated contract claims after demand (Wis. Stat. § 138.04), a 6-year statute of limitations for written contracts (Wis. Stat. § 893.43), and the Wisconsin Deceptive Trade Practices Act (Wis. Stat. § 100.18) with treble damages exposure — plus what Madison, Milwaukee, and Green Bay freelancers need to know before demanding payment.",
    excerpt:
      "Wisconsin gives freelancers a $10,000 small claims limit, one of the highest statutory interest rates in the country at 12%, and one of the oldest and most plaintiff-friendly deceptive trade practices statutes in the U.S. Here's how Wisconsin freelancers write a demand letter that makes non-paying clients do the math — and reach for the checkbook.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-18",
    keywords: [
      "demand letter Wisconsin",
      "Wisconsin demand letter laws",
      "Wisconsin small claims limit",
      "Wisconsin Deceptive Trade Practices Act",
      "Wis. Stat. 100.18",
      "Wis. Stat. 138.04 interest",
      "Wis. Stat. 893.43 statute of limitations",
      "Wisconsin treble damages",
      "Madison freelance demand letter",
      "Milwaukee demand letter",
      "Wisconsin 12% statutory interest",
    ],
  },
  {
    slug: "demand-letter-laws-wyoming",
    title: "Demand Letter Laws in Wyoming: $6,000 Small Claims, 7% Interest & 10-Year Statute of Limitations",
    description:
      "Wyoming-specific rules for demand letters — the $6,000 small claims limit in Circuit Court (Wyo. Stat. § 1-21-201), 7% statutory interest on judgments (Wyo. Stat. § 40-14-106(e)), an exceptional 10-year statute of limitations for written contracts (Wyo. Stat. § 1-3-105), and the Wyoming Consumer Protection Act (Wyo. Stat. § 40-12-101) — plus what every Cheyenne, Jackson Hole, and Casper freelancer needs to know before sending a demand letter in the Cowboy State.",
    excerpt:
      "Wyoming gives freelancers one of the longest statute of limitations in the country (10 years on written contracts), a $6,000 small claims track, and a 7% statutory interest rate. Here's how Wyoming freelancers write a demand letter that uses every legal tool the Cowboy State provides — from Jackson Hole to Cheyenne.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-18",
    keywords: [
      "demand letter Wyoming",
      "Wyoming demand letter laws",
      "Wyoming small claims limit",
      "Wyoming Circuit Court",
      "Wyo. Stat. 1-21-201",
      "Wyoming Consumer Protection Act",
      "Wyo. Stat. 40-12-101",
      "Wyo. Stat. 40-14-106 interest",
      "Wyo. Stat. 1-3-105 statute of limitations",
      "Wyoming statutory interest 7%",
      "Cheyenne freelance demand letter",
      "Jackson Hole demand letter",
      "Casper freelancer",
    ],
  },
  {
    slug: "demand-letter-laws-kentucky",
    title: "Demand Letter Laws in Kentucky: $2,500 Small Claims, 8% Interest & KCPA Treble Damages",
    description:
      "Kentucky-specific rules for demand letters — the $2,500 small claims limit in District Court (KRS 24A.230), 8% statutory interest on judgments (KRS 360.010), an exceptional 15-year statute of limitations for written contracts (KRS 413.090), and the Kentucky Consumer Protection Act (KRS 367.170) with treble damages — plus what every Louisville, Lexington, and Bowling Green freelancer needs to know before sending a demand letter in the Bluegrass State.",
    excerpt:
      "Kentucky gives freelancers one of the longest statutes of limitations in the country (15 years on written contracts), an 8% statutory interest rate, and a Consumer Protection Act with treble damages — but the small claims limit is only $2,500. Here's how Kentucky freelancers write a demand letter that uses every legal tool the Bluegrass State provides.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-19",
    keywords: [
      "demand letter Kentucky",
      "Kentucky demand letter laws",
      "KY small claims limit",
      "Kentucky District Court",
      "KRS 24A.230",
      "Kentucky Consumer Protection Act",
      "KRS 367.170",
      "KRS 360.010 interest",
      "KRS 413.090 statute of limitations",
      "Kentucky treble damages",
      "Louisville freelance demand letter",
      "Lexington demand letter",
      "Bowling Green freelancer",
    ],
  },
  {
    slug: "demand-letter-laws-louisiana",
    title: "Demand Letter Laws in Louisiana: $5K Small Claims, Mise en Demeure & LUTPA Treble Damages",
    description:
      "Louisiana-specific rules for demand letters — the $5,000 small claims limit in City and Justice of the Peace Courts, the 10-year prescriptive period for written contracts (La. Civ. Code art. 3499), the Louisiana Unfair Trade Practices Act (La. R.S. 51:1401) with treble damages, the mise en demeure requirement under La. Civ. Code art. 1989, and attorney fee recovery on open accounts under La. R.S. 9:2781 — plus what every New Orleans, Baton Rouge, and Shreveport freelancer needs to know before sending a demand letter in Louisiana's unique civil law system.",
    excerpt:
      "Louisiana is the only state governed by the Napoleonic Code, not English common law — and that changes the rules for demand letters. Here's what Louisiana freelancers need to know about mise en demeure, the 10-year prescriptive period, and LUTPA treble damages before sending a demand letter.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-20",
    keywords: [
      "demand letter Louisiana",
      "Louisiana demand letter laws",
      "Louisiana small claims limit",
      "Louisiana Unfair Trade Practices Act",
      "La. R.S. 51:1401",
      "mise en demeure Louisiana",
      "La. Civ. Code art. 1989",
      "La. Civ. Code art. 3499",
      "La. R.S. 9:2781 open account",
      "New Orleans freelance demand letter",
      "Baton Rouge demand letter",
      "Louisiana treble damages",
      "Shreveport freelancer",
      "Louisiana civil law demand letter",
    ],
  },
  {
    slug: "demand-letter-laws-vermont",
    title: "Demand Letter Laws in Vermont: $5,000 Small Claims, 12% Interest & VCPA Treble Damages",
    description:
      "Vermont-specific rules for demand letters — the $5,000 small claims limit in Superior Court (12 V.S.A. § 5531), 12% statutory interest on judgments (9 V.S.A. § 41a), a 6-year statute of limitations for written contracts (12 V.S.A. § 511), and the Vermont Consumer Protection Act (9 V.S.A. § 2451) with treble damages plus attorney fees — plus what every Burlington, Montpelier, and Brattleboro freelancer needs to know before sending a demand letter in the Green Mountain State.",
    excerpt:
      "Vermont gives freelancers one of the highest statutory interest rates in the country (12%), a Consumer Protection Act that can triple your damages, and a $5,000 small claims limit. Here's how Vermont freelancers write a demand letter that uses every legal tool the Green Mountain State provides — from Burlington to Brattleboro.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-21",
    keywords: [
      "demand letter Vermont",
      "Vermont demand letter laws",
      "Vermont small claims limit",
      "Vermont Consumer Protection Act",
      "9 V.S.A. 2451",
      "12 V.S.A. 5531",
      "Vermont treble damages",
      "9 V.S.A. 41a interest",
      "Vermont statutory interest 12%",
      "Burlington freelance demand letter",
      "Montpelier demand letter",
      "Brattleboro freelancer",
    ],
  },
  {
    slug: "demand-letter-laws-south-carolina",
    title: "Demand Letter Laws in South Carolina: $7,500 Small Claims, 8.75% Interest & SCUTPA Treble Damages",
    description:
      "South Carolina-specific rules for demand letters — the $7,500 small claims limit in Magistrate's Court, 8.75% statutory interest (S.C. Code Ann. § 34-31-20), a 3-year statute of limitations for written contracts (S.C. Code Ann. § 15-3-530), and the South Carolina Unfair Trade Practices Act that can triple your damages plus attorney fees (S.C. Code Ann. § 39-5-140).",
    excerpt:
      "South Carolina has a $7,500 small claims limit, an 8.75% statutory interest rate, and a powerful Unfair Trade Practices Act that mandates treble damages. But the 3-year statute of limitations means Palmetto State freelancers must act fast.",
    category: "Costs & Legal",
    readMins: 9,
    date: "2026-07-21",
    keywords: [
      "demand letter South Carolina",
      "South Carolina demand letter laws",
      "SC small claims limit",
      "SC Magistrate's Court",
      "S.C. Code Ann. 34-31-20",
      "South Carolina Unfair Trade Practices Act",
      "SCUTPA treble damages",
      "S.C. Code Ann. 39-5-140",
      "S.C. Code Ann. 15-3-530",
      "Charleston freelance demand letter",
      "Columbia freelancer",
      "Greenville demand letter",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
