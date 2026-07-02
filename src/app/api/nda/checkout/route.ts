import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getNdaDoc, getNdaFieldKeys, type NdaDocType } from "@/lib/nda";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const docType = (
    typeof body.type === "string" ? body.type : ""
  ) as NdaDocType;
  const doc = getNdaDoc(docType);
  if (!doc) {
    return Response.json({ error: `Unknown document type: ${docType}` }, { status: 400 });
  }

  const fieldKeys = getNdaFieldKeys(docType);
  const fields: Record<string, string> = {};
  for (const key of fieldKeys) {
    const value = body[key];
    if (typeof value === "string") {
      fields[key] = value.trim().slice(0, 500);
    }
  }

  const missing = fieldKeys.filter((key) => !fields[key]);
  if (missing.length > 0) {
    return Response.json(
      { error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  const origin = request.headers.get("origin") ?? request.nextUrl.origin;

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: fields.party1Email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: doc.priceCents,
            product_data: {
              name: doc.productName,
              description: doc.productDescription,
            },
          },
        },
      ],
      metadata: {
        docType,
        ...fields,
      },
      success_url: `${origin}/nda/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/nda/${docType}`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Checkout failed.";
    return Response.json({ error: message }, { status: 500 });
  }
}
