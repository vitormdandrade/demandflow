// Central site configuration. Every page, sitemap, and metadata block reads the
// canonical URL from here so there is a single source of truth. Set
// NEXT_PUBLIC_APP_URL in the environment to override (e.g. preview deploys).

export const SITE_URL = (
  process.env.NEXT_PUBLIC_APP_URL || "https://demandflowww.com"
).replace(/\/$/, "");

export const SITE_NAME = "DemandFlowww";

export const SITE_DESCRIPTION =
  "DemandFlowww helps freelancers get paid. Generate a professional, legally-formatted demand letter for an unpaid invoice in 60 seconds — no lawyer needed. One-time $29.";

// A small, human-friendly "letters sent" figure used for social proof. Kept as a
// constant so server and client render the exact same value (no hydration drift).
export const LETTERS_SENT_THIS_MONTH = 1863;

// Primary navigation shared by the header and footer.
export const NAV_LINKS: { href: string; label: string }[] = [
  { href: "/templates", label: "Templates" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/affiliates", label: "Affiliates" },
  { href: "/account", label: "Account" },
];

// All content/blog routes, in one place, so the sitemap stays in sync with the
// pages that actually exist.
export const BLOG_SLUGS: string[] = [
  "how-to-write-demand-letter-freelancer",
  "unpaid-invoice-what-to-do",
  "demand-letter-vs-lawyer",
  "get-paid-freelance-fast",
  "small-claims-court-alternatives",
  "psychology-of-getting-paid",
  "freelancer-legal-toolkit",
  "50-demand-letters-case-study",
  "demand-letter-laws-california",
];

export const STATIC_ROUTES: string[] = [
  "/",
  "/templates",
  "/pricing",
  "/affiliates",
  "/blog",
  "/privacy",
  "/terms",
  "/invoice-guard",
  "/retirement",
];
