// Google Analytics 4 (gtag.js) helpers. The base gtag snippet lives in the root
// layout; these helpers let client components send GA4 events without each one
// re-implementing the SSR guard.

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "G-XXXXXXXXXX";

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

// Send a GA4 event. No-op on the server or before gtag has loaded.
export function gaEvent(
  name: string,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
