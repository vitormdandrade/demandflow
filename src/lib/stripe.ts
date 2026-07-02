import Stripe from "stripe";

// IMPORTANT (pitfall #53/#60): never instantiate Stripe at module scope.
// Construct it lazily at request time so the secret key is read from the
// environment when the handler actually runs, not when the module is loaded.
export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(key, {
    apiVersion: "2026-06-24.dahlia",
  });
}

// The one-time price for a demand letter, in cents.
export const LETTER_PRICE_CENTS = 2900;

// The Stripe Price ID for the "DemandFlowww Pro" $79/year subscription.
// Created once via `scripts/create-pro-product.mjs` (run manually with
// STRIPE_SECRET_KEY set), then pasted into STRIPE_PRO_PRICE_ID in the
// environment. Not hardcoded because test-mode and live-mode price IDs
// differ, and this constant needs to work in both.
export const PRO_YEARLY_PRICE_ID = process.env.STRIPE_PRO_PRICE_ID || "";

// Creates a Stripe Billing Portal session so a subscriber can manage or
// cancel their plan without a custom UI. `returnUrl` is where Stripe sends
// the customer back to after they leave the portal.
export async function createCustomerPortalSession(
  customerId: string,
  returnUrl: string,
) {
  const stripe = getStripe();
  return stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  });
}
