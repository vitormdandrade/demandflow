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
