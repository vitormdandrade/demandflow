import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-[760px] flex-col items-center gap-3 px-5 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-slate-500">
          © 2026 DemandFlow. Demand letters for freelancers.
        </p>
        <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
          <Link href="/privacy" className="transition hover:text-slate-900">
            Privacy Policy
          </Link>
          <span aria-hidden className="text-slate-300">
            |
          </span>
          <Link href="/terms" className="transition hover:text-slate-900">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
