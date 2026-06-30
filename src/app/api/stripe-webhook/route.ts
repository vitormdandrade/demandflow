import { NextRequest } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { getFieldKeys } from "@/lib/letter";
import type { TemplateId } from "@/lib/templates";

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

    const templateId = (metadata.template as TemplateId) || "demand-letter";
    const fieldKeys = getFieldKeys(templateId);

    // Reconstruct the form fields from metadata.
    const fields: Record<string, string> = {};
    for (const key of fieldKeys) {
      if (typeof metadata[key] === "string") {
        fields[key] = metadata[key];
      }
    }

    console.log(
      `[stripe-webhook] checkout.session.completed for ${session.id} ` +
        `(template: ${templateId}, customer: ${fields.yourEmail ?? "unknown"})`,
    );
    // TODO: deliver the letter by email here.
  }

  return new Response("Success", { status: 200 });
}
