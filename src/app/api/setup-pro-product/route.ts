// One-time setup endpoint — call once to create the Pro subscription product in Stripe.
// GET /api/setup-pro-product — only works if STRIPE_PRO_PRICE_ID is not already set.
// After running, copy the output price ID to STRIPE_PRO_PRICE_ID in Vercel.

import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

export async function GET(_request: NextRequest) {
  // Don't run if already configured
  if (process.env.STRIPE_PRO_PRICE_ID) {
    return Response.json({
      already_configured: true,
      price_id: process.env.STRIPE_PRO_PRICE_ID,
    });
  }

  try {
    const stripe = getStripe();

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

    return Response.json({
      created: true,
      product_id: product.id,
      price_id: price.id,
      env_var: `STRIPE_PRO_PRICE_ID=${price.id}`,
      instruction:
        "Copy the price_id above and run: vercel env add STRIPE_PRO_PRICE_ID production",
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ error: message }, { status: 500 });
  }
}
