import { NextRequest } from "next/server";
import { getStripe, LETTER_PRICE_CENTS } from "@/lib/stripe";
import { LETTER_FIELD_KEYS, type LetterFields } from "@/lib/letter";

// Stripe's Node SDK needs the Node.js runtime (it uses Node crypto).
export const runtime = "nodejs";

const REQUIRED_FIELDS: (keyof LetterFields)[] = [
  "yourName",
  "yourEmail",
  "clientName",
  "clientAddress",
  "amount",
  "description",
  "dateCompleted",
];

export async function POST(request: NextRequest) {
  let body: Partial<Record<keyof LetterFields, unknown>>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Collect and trim every known field; validate the required ones.
  const fields: Partial<Record<string, string>> = {};
  for (const key of LETTER_FIELD_KEYS) {
    const value = body[key];
    if (typeof value === "string") {
      fields[key] = value.trim();
    }
  }

  const missing = REQUIRED_FIELDS.filter((key) => !fields[key]);
  if (missing.length > 0) {
    return Response.json(
      { error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  const origin =
    request.headers.get("origin") ?? request.nextUrl.origin;

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: fields.yourEmail,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: LETTER_PRICE_CENTS,
            product_data: {
              name: "Demand Letter",
              description: "A legally-formatted demand letter, ready to send.",
            },
          },
        },
      ],
      // The webhook + success page read the form data back from metadata so we
      // don't need a database for the MVP.
      metadata: fields as Record<string, string>,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Checkout failed.";
    return Response.json({ error: message }, { status: 500 });
  }
}
