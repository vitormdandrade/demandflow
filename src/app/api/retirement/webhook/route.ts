import { NextRequest } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { getSupabase } from "@/lib/supabase";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return new Response("STRIPE_WEBHOOK_SECRET is not set", { status: 500 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return new Response("Missing stripe-signature header", { status: 400 });
  }

  const payload = await request.text();

  let event: Stripe.Event;
  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(payload, signature, secret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid signature";
    return new Response(`Webhook error: ${message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata ?? {};

    console.log(
      `[retirement-webhook] checkout.session.completed for ${session.id} ` +
        `(customer: ${metadata.email ?? "unknown"}, age: ${metadata.currentAge ?? "?"}, retire: ${metadata.retirementAge ?? "?"})`,
    );

    const supabase = getSupabase();
    if (supabase) {
      await supabase.from("df_retirement_purchases").upsert({
        session_id: session.id,
        email: metadata.email ?? null,
        current_age: metadata.currentAge ?? null,
        retirement_age: metadata.retirementAge ?? null,
        current_income: metadata.currentIncome ?? null,
        current_savings: metadata.currentSavings ?? null,
        monthly_contribution: metadata.monthlyContribution ?? null,
        expected_return: metadata.expectedReturn ?? null,
        paid_at: new Date().toISOString(),
      });
    }
    // PDF is generated on-demand in /api/retirement/download — no storage required.
  }

  return new Response("Success", { status: 200 });
}
