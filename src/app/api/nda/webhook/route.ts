import { NextRequest } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { getNdaFieldKeys, type NdaDocType } from "@/lib/nda";

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
    const docType = (metadata.docType as NdaDocType) || "nda";
    const fieldKeys = getNdaFieldKeys(docType);

    const fields: Record<string, string> = {};
    for (const key of fieldKeys) {
      if (typeof metadata[key] === "string") {
        fields[key] = metadata[key];
      }
    }

    console.log(
      `[nda-webhook] checkout.session.completed for ${session.id} ` +
        `(docType: ${docType}, customer: ${fields.party1Email ?? "unknown"})`,
    );
    // PDF is generated on-demand in /api/nda/download — no storage required.
  }

  return new Response("Success", { status: 200 });
}
