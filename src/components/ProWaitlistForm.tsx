"use client";

import { useState } from "react";

export default function ProWaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          source: "pricing-pro",
          template: "pro",
        }),
      });
      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }
      setDone(true);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-center">
        <p className="flex items-center justify-center gap-1.5 text-sm font-semibold text-green-800">
          <span aria-hidden>✓</span>
          You&apos;re on the list — we&apos;ll email you when Pro launches.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <label htmlFor="pro-email" className="sr-only">
          Your email address
        </label>
        <input
          id="pro-email"
          name="pro-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          disabled={submitting}
          className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Joining…" : "Join the waitlist"}
      </button>
      {error && (
        <p className="text-center text-sm text-red-600">{error}</p>
      )}
      <p className="text-center text-xs text-slate-500">
        No spam. We&apos;ll only email you when Pro is ready.
      </p>
    </form>
  );
}
