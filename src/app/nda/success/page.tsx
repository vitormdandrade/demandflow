"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function NdaSuccessInner() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return (
      <div className="mt-8 rounded-lg bg-red-50 px-4 py-3 text-center text-sm text-red-700">
        No checkout session found.{" "}
        <Link href="/nda" className="font-semibold underline">
          Start over
        </Link>
      </div>
    );
  }

  const downloadUrl = `/api/nda/download?session_id=${encodeURIComponent(sessionId)}`;

  return (
    <main className="mx-auto w-full max-w-[520px] px-5 py-16 text-center">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-3xl">
        ✓
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Your contract is ready!
      </h1>
      <p className="mt-3 text-slate-600">
        Your professionally formatted PDF has been generated. Download it below,
        then share it with the other party for signatures.
      </p>

      <a
        href={downloadUrl}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:w-auto sm:min-w-[220px]"
      >
        <span aria-hidden>⬇</span> Download PDF
      </a>

      <p className="mt-4 text-xs text-slate-500">
        The download link is permanent — you can bookmark this page to re-download
        later.
      </p>

      <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
        <h2 className="font-semibold text-slate-900">What to do next</h2>
        <ol className="mt-3 space-y-2 text-sm text-slate-600">
          <li>
            <span className="font-medium text-slate-800">1.</span> Download the
            PDF and review it carefully.
          </li>
          <li>
            <span className="font-medium text-slate-800">2.</span> Share it with
            the other party and agree on the terms.
          </li>
          <li>
            <span className="font-medium text-slate-800">3.</span> Both parties
            sign the document (digitally or in print).
          </li>
          <li>
            <span className="font-medium text-slate-800">4.</span> Each party
            keeps a signed copy for their records.
          </li>
        </ol>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/nda"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Create another contract
        </Link>
        <Link
          href="/"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Send a demand letter
        </Link>
      </div>
    </main>
  );
}

export default function NdaSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-[520px] px-5 py-16 text-center text-slate-500">
          Loading…
        </main>
      }
    >
      <NdaSuccessInner />
    </Suspense>
  );
}
