import Link from "next/link";
import { NAV_LINKS } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[960px] items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white"
          >
            D
          </span>
          <span className="text-base font-bold tracking-tight text-slate-900">
            DemandFlow
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="rounded-lg bg-blue-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Get your letter
        </Link>
      </div>
    </header>
  );
}
