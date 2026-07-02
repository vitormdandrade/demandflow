import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getFieldKeys } from "@/lib/letter";
import { getTemplate, type TemplateId } from "@/lib/templates";

// Stripe's Node SDK needs the Node.js runtime (it uses Node crypto).
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const templateId = (typeof body.template === "string" ? body.template : "demand-letter") as TemplateId;
  const template = getTemplate(templateId);
  if (!template) {
    return Response.json({ error: `Unknown template: ${templateId}` }, { status: 400 });
  }

  // Collect and trim every field for this template.
  const fieldKeys = getFieldKeys(templateId);
  const fields: Record<string, string> = {};
  for (const key of fieldKeys) {
    const value = body[key];
    if (typeof value === "string") {
      fields[key] = value.trim();
    }
  }

  // Optional brand name for letterhead
  if (typeof body.brandName === "string" && body.brandName.trim()) {
    fields.brandName = (body.brandName as string).trim();
  }

  // All template fields are required. Check for missing.
  const missing = template.fields
    .map((f) => f.name)
    .filter((name) => !fields[name]);
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
            unit_amount: template.priceCents,
            product_data: {
              name: template.productName,
              description: template.productDescription,
            },
          },
        },
      ],
      // Store the template id and all form fields in metadata.
      metadata: {
        template: templateId,
        ...fields,
      },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Checkout failed.";
    return Response.json({ error: message }, { status: 500 });
  }
}
