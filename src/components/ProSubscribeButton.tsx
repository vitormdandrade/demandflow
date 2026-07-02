"use client";

import { useState } from "react";
import { pushDataLayer } from "@/lib/gtm";

export default function ProSubscribeButton() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    pushDataLayer({ event: "begin_checkout", plan: "pro", value: 79 });
    try {
      const res = await fetch("/api/create-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      window.location.href = data.url;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      pushDataLayer({ event: "checkout_error", error_message: message });
      setError(message);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
      <div>
        <label htmlFor="pro-subscribe-email" className="sr-only">
          Your email address
        </label>
        <input
          id="pro-subscribe-email"
          name="pro-subscribe-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          disabled={loading}
          className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Redirecting…" : "Subscribe — $79/year"}
      </button>
      {error && (
        <p className="text-center text-sm text-red-600">{error}</p>
      )}
    </form>
  );
}
