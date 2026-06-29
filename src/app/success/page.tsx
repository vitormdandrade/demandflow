"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { pushDataLayer } from "@/lib/gtm";

function SuccessInner() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [html, setHtml] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!sessionId) {
      setError("No checkout session was found in the URL.");
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `/api/get-letter?session_id=${encodeURIComponent(sessionId)}`,
        );
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || "We couldn't load your letter.");
        }
        const text = await res.text();
        if (!cancelled) {
          setHtml(text);
          // Payment is confirmed server-side before the letter is returned, so
          // this is the right moment to record the conversion.
          pushDataLayer({
            event: "purchase",
            currency: "USD",
            value: 29.0,
            transaction_id: sessionId,
          });
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "We couldn't load your letter.",
          );
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  function handlePrint() {
    const win = iframeRef.current?.contentWindow;
    if (win) {
      win.focus();
      win.print();
    }
  }

  return (
    <main className="mx-auto w-full max-w-[760px] px-5 py-12 sm:py-16">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
          ✓
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Your demand letter is ready!
        </h1>
        <p className="mt-3 text-slate-600">
          Review it below, then download or print it as a PDF to send to your
          client.
        </p>
      </div>

      {error && (
        <div className="mt-8 rounded-lg bg-red-50 px-4 py-3 text-center text-sm text-red-700">
          {error}{" "}
          <Link href="/" className="font-semibold underline">
            Start over
          </Link>
        </div>
      )}

      {!error && !html && (
        <p className="mt-8 text-center text-slate-500">Loading your letter…</p>
      )}

      {html && (
        <>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={handlePrint}
              className="w-full rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
            >
              Download / Print as PDF
            </button>
            <a
              href={`/api/get-letter?session_id=${encodeURIComponent(
                sessionId ?? "",
              )}&download=1`}
              className="w-full rounded-lg border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
            >
              Download HTML
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <iframe
              ref={iframeRef}
              title="Your demand letter"
              srcDoc={html}
              className="h-[800px] w-full border-0"
            />
          </div>
        </>
      )}

      <p className="mt-10 text-center text-sm text-slate-500">
        <Link href="/" className="underline">
          Create another letter
        </Link>
      </p>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-[760px] px-5 py-16 text-center text-slate-500">
          Loading…
        </main>
      }
    >
      <SuccessInner />
    </Suspense>
  );
}
