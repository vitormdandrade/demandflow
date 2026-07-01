import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "The DemandFlow Blog — Get Paid for Your Freelance Work",
  description:
    "Practical guides for freelancers on demand letters, unpaid invoices, getting paid faster, and recovering money from clients who won't pay.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <main className="mx-auto w-full max-w-[960px] px-5 py-12 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Get-paid guides for freelancers
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          No-nonsense advice on demand letters, unpaid invoices, and getting the
          money you&apos;re owed — written for freelancers, not lawyers.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              {post.category}
            </span>
            <h2 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-blue-700">
              {post.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
              {post.excerpt}
            </p>
            <span className="mt-4 text-xs font-medium text-slate-400">
              {post.readMins} min read
            </span>
          </Link>
        ))}
      </div>

      <section className="mt-14 rounded-2xl border-2 border-blue-200 bg-blue-50/50 p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          Done reading? Get your letter.
        </h2>
        <p className="mx-auto mt-2 max-w-md text-slate-600">
          A professional demand letter in 60 seconds — for $29, backed by a 100%
          money-back guarantee.
        </p>
        <Link
          href="/"
          className="mt-5 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Create My Demand Letter — $29
        </Link>
      </section>
    </main>
  );
}
