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

// Pro subscription pricing — $19/month.
// Uses inline price_data in the Checkout Session so no pre-created Stripe
// Price ID is needed. Changing the price here updates both test and live
// mode without touching the Stripe dashboard.
export const PRO_MONTHLY_PRICE_CENTS = 1900;
export const PRO_MONTHLY_PRICE_LABEL = "$19/mo";

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
