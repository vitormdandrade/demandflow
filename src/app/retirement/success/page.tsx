"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function RetirementSuccessInner() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return (
      <div className="mt-8 rounded-lg bg-red-50 px-4 py-3 text-center text-sm text-red-700">
        No checkout session found.{" "}
        <Link href="/retirement" className="font-semibold underline">
          Start over
        </Link>
      </div>
    );
  }

  const downloadUrl = `/api/retirement/download?session_id=${encodeURIComponent(sessionId)}`;

  return (
    <main className="mx-auto w-full max-w-[520px] px-5 py-16 text-center">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-3xl">
        ✓
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Your report is ready!
      </h1>
      <p className="mt-3 text-slate-600">
        Your personalized retirement projections PDF is ready to download. Review
        it and share it with your financial planner.
      </p>

      <a
        href={downloadUrl}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:w-auto sm:min-w-[240px]"
      >
        <span aria-hidden>⬇</span> Download PDF Report
      </a>

      <p className="mt-4 text-xs text-slate-500">
        The download link is permanent — bookmark this page to re-download later.
      </p>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
        <h2 className="font-semibold text-slate-900">What to do next</h2>
        <ol className="mt-3 space-y-2 text-sm text-slate-600">
          <li>
            <span className="font-medium text-slate-800">1.</span> Download and
            review your retirement projections report.
          </li>
          <li>
            <span className="font-medium text-slate-800">2.</span> Share it with
            a certified financial planner or fiduciary to get personalized advice.
          </li>
          <li>
            <span className="font-medium text-slate-800">3.</span> Review your
            contribution strategy and adjust as your income or goals change.
          </li>
          <li>
            <span className="font-medium text-slate-800">4.</span> Remember:
            these are estimates — actual results depend on market performance,
            taxes, and inflation.
          </li>
        </ol>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/retirement"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Run another calculation
        </Link>
        <Link
          href="/"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Back to DemandFlowww
        </Link>
      </div>

      <p className="mt-8 text-xs text-slate-400">
        This report is for educational purposes only and does not constitute
        financial advice.
      </p>
    </main>
  );
}

export default function RetirementSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-[520px] px-5 py-16 text-center text-slate-500">
          Loading…
        </main>
      }
    >
      <RetirementSuccessInner />
    </Suspense>
  );
}
