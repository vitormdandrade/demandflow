import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

// Returns a minimal, safe-to-display summary of a Checkout Session — used by
// the success page to confirm what was purchased without re-exposing the
// full Stripe session object.
export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");
  if (!sessionId) {
    return Response.json({ error: "Missing session_id." }, { status: 400 });
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return Response.json({
      mode: session.mode,
      status: session.status,
      payment_status: session.payment_status,
      customer_email:
        session.customer_details?.email ?? session.customer_email ?? null,
      subscription_id:
        typeof session.subscription === "string"
          ? session.subscription
          : (session.subscription?.id ?? null),
      amount_total: session.amount_total,
      currency: session.currency,
    });
  } catch {
    return Response.json({ error: "Session not found." }, { status: 404 });
  }
}
