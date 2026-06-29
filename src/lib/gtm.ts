// Lightweight Google Tag Manager helpers. The container itself is loaded in
// the root layout; these helpers let client components push analytics events
// onto the dataLayer without each one re-implementing the SSR guard.

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

type DataLayerEvent = Record<string, unknown> & { event: string };

// Push an event onto GTM's dataLayer. No-op on the server.
export function pushDataLayer(event: DataLayerEvent): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}
