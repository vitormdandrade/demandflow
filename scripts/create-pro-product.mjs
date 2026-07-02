// One-time setup script — creates the "DemandFlowww Pro" $79/year
// subscription product + price in Stripe.
//
// Usage:
//   STRIPE_SECRET_KEY=sk_test_... node scripts/create-pro-product.mjs
//
// Run it once per Stripe mode/account (test and live are separate). Copy the
// printed price ID into STRIPE_PRO_PRICE_ID in your environment (.env.local
// and/or Vercel project settings).

import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY;
if (!key) {
  console.error("STRIPE_SECRET_KEY is not set.");
  process.exit(1);
}

const stripe = new Stripe(key, { apiVersion: "2026-06-24.dahlia" });

const product = await stripe.products.create({
  name: "DemandFlowww Pro",
  description:
    "Unlimited demand letters and legal notices — send as many as you need.",
});

const price = await stripe.prices.create({
  product: product.id,
  currency: "usd",
  unit_amount: 7900,
  recurring: { interval: "year" },
});

console.log(`Product created: ${product.id}`);
console.log(`Price created:   ${price.id}`);
console.log(`\nSet this in your environment:\nSTRIPE_PRO_PRICE_ID=${price.id}`);
