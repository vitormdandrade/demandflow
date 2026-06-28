import { NextRequest } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { LETTER_FIELD_KEYS, type LetterFields } from "@/lib/letter";

// Signature verification uses Node crypto and the raw request body.
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

  // The raw body is required for signature verification — read it as text.
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

    // Reconstruct the form fields from metadata. The letter itself is generated
    // on demand by /api/get-letter and shown on the success page, so here we
    // just confirm the data is present and log it. This is the hook point for
    // emailing the PDF (e.g. via SendGrid) in a future iteration.
    const fields: Partial<LetterFields> = {};
    for (const key of LETTER_FIELD_KEYS) {
      if (typeof metadata[key] === "string") {
        fields[key] = metadata[key];
      }
    }

    console.log(
      `[stripe-webhook] checkout.session.completed for ${session.id} ` +
        `(customer: ${fields.yourEmail ?? "unknown"})`,
    );
    // TODO: deliver the letter by email here.
  }

  return new Response("Success", { status: 200 });
}
