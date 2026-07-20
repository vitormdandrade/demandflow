"use client";

import { useState } from "react";
import { pushDataLayer } from "@/lib/gtm";
import { LEGAL_KIT } from "@/lib/templates";

export default function LegalKitBuyButton() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleBuy(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    pushDataLayer({
      event: "begin_checkout",
      plan: "legal-kit",
      value: LEGAL_KIT.priceCents / 100,
    });
    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bundle: LEGAL_KIT.id,
          yourName: name.trim(),
          yourEmail: email.trim(),
        }),
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
    <form onSubmit={handleBuy} className="flex flex-col gap-3">
      <div>
        <label htmlFor="legal-kit-name" className="sr-only">
          Your full name
        </label>
        <input
          id="legal-kit-name"
          name="legal-kit-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          disabled={loading}
          className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60"
        />
      </div>
      <div>
        <label htmlFor="legal-kit-email" className="sr-only">
          Your email address
        </label>
        <input
          id="legal-kit-email"
          name="legal-kit-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          disabled={loading}
          className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60"
        />
      </div>
      {/* Trust signals */}
      <div className="flex items-center justify-center gap-3 text-xs text-slate-500 mb-1">
        <span className="inline-flex items-center gap-1">
          🔒 SSL Secure
        </span>
        <span className="inline-flex items-center gap-1">
          💳 Stripe
        </span>
        <span className="inline-flex items-center gap-1">
          ✅ Instant Access
        </span>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Redirecting…" : "Get the Legal Kit — $79"}
      </button>
      <p className="text-center text-xs text-slate-400 mt-2">
        🔒 256-bit SSL encrypted · Instant PDF download · 30-day money-back guarantee
      </p>
      {error && <p className="text-center text-sm text-red-600">{error}</p>}
    </form>
  );
}
