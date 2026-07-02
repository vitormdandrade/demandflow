"use client";

import { useState } from "react";
import Link from "next/link";

interface Subscription {
  status: string;
  stripe_customer_id: string | null;
  current_period_end: string | null;
}

export default function AccountPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [portalLoading, setPortalLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  async function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `/api/subscription-status?email=${encodeURIComponent(email.trim())}`,
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Couldn't look up your subscription.");
      }
      setSubscription(data.subscription);
      setChecked(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Couldn't look up your subscription.",
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleManage() {
    if (!subscription?.stripe_customer_id) return;
    setPortalLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/create-portal-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerId: subscription.stripe_customer_id }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Couldn't open the billing portal.");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Couldn't open the billing portal.",
      );
      setPortalLoading(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-[520px] px-5 py-16">
      <h1 className="text-center text-3xl font-bold tracking-tight text-slate-900">
        Your account
      </h1>
      <p className="mt-3 text-center text-slate-600">
        Enter the email you used at checkout to check your Pro subscription
        status.
      </p>

      <form onSubmit={handleCheck} className="mt-8 flex flex-col gap-3">
        <label htmlFor="account-email" className="sr-only">
          Your email address
        </label>
        <input
          id="account-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          disabled={loading}
          className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Checking…" : "Check subscription status"}
        </button>
        {error && <p className="text-center text-sm text-red-600">{error}</p>}
      </form>

      {checked && (
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          {subscription ? (
            <>
              <p className="text-sm font-semibold text-green-700">
                Pro is active
              </p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Status</dt>
                  <dd className="font-semibold capitalize text-slate-900">
                    {subscription.status}
                  </dd>
                </div>
                {subscription.current_period_end && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Renews</dt>
                    <dd className="font-semibold text-slate-900">
                      {new Date(
                        subscription.current_period_end,
                      ).toLocaleDateString()}
                    </dd>
                  </div>
                )}
              </dl>
              <button
                onClick={handleManage}
                disabled={portalLoading || !subscription.stripe_customer_id}
                className="mt-6 flex w-full items-center justify-center rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {portalLoading ? "Opening…" : "Manage subscription"}
              </button>
            </>
          ) : (
            <>
              <p className="text-sm font-semibold text-slate-900">
                No active Pro subscription found for that email.
              </p>
              <Link
                href="/pricing"
                className="mt-4 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                See pricing
              </Link>
            </>
          )}
        </div>
      )}
    </main>
  );
}
