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
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
