import { NextRequest } from "next/server";
import { getStripe, PRO_YEARLY_PRICE_ID } from "@/lib/stripe";

// Stripe's Node SDK needs the Node.js runtime (it uses Node crypto).
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!PRO_YEARLY_PRICE_ID) {
    return Response.json(
      { error: "Pro subscriptions are not configured yet." },
      { status: 500 },
    );
  }

  const origin = request.headers.get("origin") ?? request.nextUrl.origin;

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer_email: email,
      line_items: [{ price: PRO_YEARLY_PRICE_ID, quantity: 1 }],
      metadata: { plan: "pro" },
      success_url: `${origin}/success?subscription=1&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Checkout failed.";
    return Response.json({ error: message }, { status: 500 });
  }
}
