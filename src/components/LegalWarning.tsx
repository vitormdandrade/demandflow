"use client";

import Link from "next/link";

interface LegalWarningProps {
  /** The numeric value to check against the threshold */
  value: number;
  /** Threshold in dollars. Default: 20000 (above small claims in most states, where legal exposure becomes material) */
  threshold?: number;
  /** Human-readable label for the value, e.g. "invoice amount", "payment amount" */
  label?: string;
}

/**
 * Shows a legal warning when a financial value exceeds the threshold.
 * Recommends consulting a lawyer and declares DemandFlowww is not a law firm.
 * Renders nothing when the value is below the threshold.
 *
 * Visual: amber (attention, not alarm) — designed to inform without
 * scaring users away from legitimate self-service document generation.
 */
export default function LegalWarning({
  value,
  threshold = 20000,
  label = "amount",
}: LegalWarningProps) {
  if (value < threshold) return null;

  return (
    <div className="mt-4 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3.5 text-sm text-amber-800">
      <span className="mt-0.5 shrink-0 text-lg leading-none" aria-hidden>
        ⚖️
      </span>
      <div>
        <p className="font-semibold">
          This {label} exceeds ${threshold.toLocaleString()}.
        </p>
        <p className="mt-1.5 leading-relaxed">
          For amounts of this size, we{" "}
          <strong className="font-semibold">recommend</strong>{" "}
          consulting a licensed attorney to review your document before use.
          DemandFlowww provides document <strong>templates</strong> and is{" "}
          <strong>not a law firm</strong> — no attorney–client relationship
          is created.
        </p>
        <p className="mt-2 leading-relaxed">
          By proceeding, you acknowledge that you are not receiving legal
          advice and assume full responsibility. See our{" "}
          <Link
            href="/terms"
            className="font-medium text-amber-900 underline hover:text-amber-950"
          >
            Terms of Service
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
