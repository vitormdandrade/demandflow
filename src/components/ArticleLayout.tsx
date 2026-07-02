import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { getPost } from "@/lib/blog";

// Shared shell for every blog article. Pass the post's `slug` and it pulls the
// title/date/category from the blog registry, renders a consistent header,
// breadcrumb, byline, CTA, and Article structured data. Article body goes in
// `children` wrapped in the `.article` prose styles.
export default function ArticleLayout({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const post = getPost(slug);
  if (!post) return <>{children}</>;

  const displayDate = new Date(post.date + "T00:00:00").toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );

  return (
    <main className="mx-auto w-full max-w-[720px] px-5 py-10 sm:py-14">
      <nav className="text-sm text-slate-500">
        <Link href="/blog" className="font-medium text-blue-600 hover:text-blue-700">
          ← All articles
        </Link>
      </nav>

      <header className="mt-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
          {post.category}
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          {displayDate} · {post.readMins} min read
        </p>
      </header>

      <article className="article mt-8">{children}</article>

      {/* Inline conversion CTA */}
      <aside className="mt-12 rounded-2xl border-2 border-blue-200 bg-blue-50/50 p-6 text-center sm:p-8">
        <h2 className="text-xl font-bold text-slate-900">
          Skip the blank page — generate your letter in 60 seconds
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
          DemandFlowww turns your details into a professional, legally-formatted
          demand letter for just $29. No lawyer, no subscription, and a 100%
          money-back guarantee.
        </p>
        <Link
          href="/"
          className="mt-5 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Create My Demand Letter — $29
        </Link>
      </aside>

      <div className="mt-10 border-t border-slate-200 pt-6">
        <p className="text-sm font-semibold text-slate-500">Keep reading</p>
        <div className="mt-3 flex flex-col gap-2">
          <Link
            href="/blog"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Browse all DemandFlowww guides →
          </Link>
          <Link
            href="/templates"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            See every letter template we offer →
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            author: { "@type": "Organization", name: "DemandFlowww" },
            publisher: { "@type": "Organization", name: "DemandFlowww" },
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
          }),
        }}
      />
      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${SITE_URL}/blog`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
              },
            ],
          }),
        }}
      />
    </main>
  );
}
