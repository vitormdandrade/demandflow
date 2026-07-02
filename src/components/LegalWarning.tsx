"use client";

import Link from "next/link";

interface LegalWarningProps {
  /** The numeric value to check against the threshold */
  value: number;
  /** Threshold in dollars. Default: 5000 (above small claims court limits in most states) */
  threshold?: number;
  /** Human-readable label for the value, e.g. "invoice amount", "payment amount" */
  label?: string;
}

/**
 * Shows a prominent legal warning when a financial value exceeds the threshold.
 * Warns the user to consult a lawyer and declares DemandFlowww is not a law firm.
 * Renders nothing when the value is below the threshold.
 */
export default function LegalWarning({
  value,
  threshold = 5000,
  label = "amount",
}: LegalWarningProps) {
  if (value < threshold) return null;

  return (
    <div className="mt-4 flex items-start gap-3 rounded-lg border-2 border-red-200 bg-red-50 px-4 py-4 text-sm text-red-800">
      <span className="mt-0.5 shrink-0 text-lg leading-none" aria-hidden>
        ⚖️
      </span>
      <div>
        <p className="font-semibold">
          This {label} exceeds ${threshold.toLocaleString()}.
        </p>
        <p className="mt-1.5 leading-relaxed">
          For amounts of this size, we{" "}
          <strong className="font-semibold">strongly recommend</strong>{" "}
          consulting a licensed attorney before relying on a self-service
          document. DemandFlowww provides document <strong>templates</strong>{" "}
          and is <strong>not a law firm</strong> — no attorney–client
          relationship is created.
        </p>
        <p className="mt-2 leading-relaxed">
          By proceeding, you acknowledge that you are not receiving legal
          advice and assume full responsibility for the use of this document.
          See our{" "}
          <Link
            href="/terms"
            className="font-medium text-red-700 underline hover:text-red-900"
          >
            Terms of Service
          </Link>{" "}
          for details.
        </p>
      </div>
    </div>
  );
}
