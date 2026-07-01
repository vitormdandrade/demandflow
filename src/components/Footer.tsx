import Link from "next/link";

const FOOTER_COLUMNS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Product",
    links: [
      { href: "/", label: "Create a Letter" },
      { href: "/templates", label: "Letter Templates" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/blog/how-to-write-demand-letter-freelancer", label: "How to Write a Demand Letter" },
      { href: "/blog/unpaid-invoice-what-to-do", label: "Client Not Paying?" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/affiliates", label: "Affiliate Program" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-[960px] px-5 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white"
              >
                D
              </span>
              <span className="text-base font-bold tracking-tight text-slate-900">
                DemandFlow
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-slate-500">
              Professional demand letters that help freelancers get paid — in 60
              seconds, no lawyer needed.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {col.heading}
              </h2>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 transition hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-slate-100 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-slate-500">
            © 2026 DemandFlow. Demand letters for freelancers.
          </p>
          <p className="text-xs text-slate-400">
            DemandFlow provides self-help document templates and is not a law
            firm or a substitute for an attorney.
          </p>
        </div>
      </div>
    </footer>
  );
}
