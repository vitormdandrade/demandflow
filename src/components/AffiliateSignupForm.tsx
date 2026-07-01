"use client";

import { useState } from "react";

export default function AffiliateSignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [audience, setAudience] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (name.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (url.trim().length < 3) {
      setError("Please share your website or audience URL.");
      return;
    }

    setSubmitting(true);
    try {
      const details = [
        `Name: ${name.trim()}`,
        `URL: ${url.trim()}`,
        audience.trim() ? `Audience: ${audience.trim()}` : null,
      ]
        .filter(Boolean)
        .join(" | ");

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          source: "affiliate-signup",
          template: details,
        }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
          <span aria-hidden>✓</span>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-green-900">
          Application received
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-green-800">
          Thanks — we&apos;ll review your application and email you within 2
          business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-900/5 sm:p-8"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="affiliate-name"
            className="text-sm font-medium text-slate-700"
          >
            Name
          </label>
          <input
            id="affiliate-name"
            name="name"
            type="text"
            value={name}
            placeholder="Jane Creator"
            onChange={(e) => setName(e.target.value)}
            required
            disabled={submitting}
            className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="affiliate-email"
            className="text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
            id="affiliate-email"
            name="email"
            type="email"
            value={email}
            placeholder="you@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={submitting}
            className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="affiliate-url"
            className="text-sm font-medium text-slate-700"
          >
            Website / Audience URL
          </label>
          <input
            id="affiliate-url"
            name="url"
            type="text"
            value={url}
            placeholder="yoursite.com, newsletter, YouTube channel…"
            onChange={(e) => setUrl(e.target.value)}
            required
            disabled={submitting}
            className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="affiliate-audience"
            className="text-sm font-medium text-slate-700"
          >
            Tell us about your audience
          </label>
          <textarea
            id="affiliate-audience"
            name="audience"
            value={audience}
            rows={4}
            placeholder="Who do you reach, how many people, and where? e.g. 12k freelancers on my invoicing newsletter."
            onChange={(e) => setAudience(e.target.value)}
            disabled={submitting}
            className="w-full resize-y rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60"
          />
        </div>
      </div>

      {error && (
        <p className="mt-5 rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-7 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Submitting…" : "Apply to the affiliate program"}
      </button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
        <span aria-hidden>🔒</span>
        No cost to join. We&apos;ll never share your details.
      </p>
    </form>
  );
}
