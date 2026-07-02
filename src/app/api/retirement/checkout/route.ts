import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

const FIELD_KEYS = [
  "currentAge",
  "currentIncome",
  "currentSavings",
  "monthlyContribution",
  "retirementAge",
  "expectedReturn",
  "email",
] as const;

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fields: Record<string, string> = {};
  for (const key of FIELD_KEYS) {
    const value = body[key];
    if (typeof value === "string") {
      fields[key] = value.trim().slice(0, 500);
    }
  }

  if (!fields.email || !fields.currentAge || !fields.retirementAge) {
    return Response.json(
      { error: "Missing required fields: email, currentAge, retirementAge." },
      { status: 400 },
    );
  }

  const origin = request.headers.get("origin") ?? request.nextUrl.origin;

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: fields.email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: 900,
            product_data: {
              name: "Retirement Projections Report — Full PDF",
              description:
                "Personalized retirement projections: 401(k) growth, Social Security estimates, monthly income breakdown, and year-by-year savings summary.",
            },
          },
        },
      ],
      metadata: fields,
      success_url: `${origin}/retirement/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/retirement`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Checkout failed.";
    return Response.json({ error: message }, { status: 500 });
  }
}
