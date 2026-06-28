"use client";

import { useState } from "react";

interface Field {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

const FIELDS: Field[] = [
  { name: "yourName", label: "Your Full Name", placeholder: "Jane Freelancer" },
  {
    name: "yourEmail",
    label: "Your Email",
    type: "email",
    placeholder: "jane@example.com",
  },
  {
    name: "clientName",
    label: "Client / Business Name",
    placeholder: "Acme Corp",
  },
  {
    name: "clientAddress",
    label: "Client Address",
    placeholder: "123 Market St, San Francisco, CA 94103",
  },
  { name: "amount", label: "Amount Owed ($)", placeholder: "2500.00" },
  {
    name: "description",
    label: "Brief Description of Work Done",
    placeholder: "Website redesign and development",
  },
  {
    name: "dateCompleted",
    label: "Date Work Was Completed",
    placeholder: "March 15, 2026",
  },
];

const EMPTY = Object.fromEntries(FIELDS.map((f) => [f.name, ""])) as Record<
  string,
  string
>;

export default function Home() {
  const [values, setValues] = useState<Record<string, string>>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-[600px] px-5 py-12 sm:py-16">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Send a Demand Letter When a Client Doesn&apos;t Pay
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          A legally-formatted demand letter in 60 seconds. No lawyer needed.{" "}
          <span className="font-semibold text-slate-900">$29.</span>
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="flex flex-col gap-5">
          {FIELDS.map((field) => (
            <div key={field.name} className="flex flex-col gap-1.5">
              <label
                htmlFor={field.name}
                className="text-sm font-medium text-slate-700"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type ?? "text"}
                value={values[field.name]}
                placeholder={field.placeholder}
                onChange={(e) => update(field.name, e.target.value)}
                required
                disabled={loading}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 disabled:opacity-60"
              />
            </div>
          ))}
        </div>

        {error && (
          <p className="mt-5 rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-7 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-base font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Redirecting to checkout…" : "Send Demand Letter — $29"}
        </button>

        <p className="mt-4 text-center text-xs text-slate-500">
          Secure payment via Stripe. Your letter is generated instantly after
          checkout.
        </p>
      </form>
    </main>
  );
}
