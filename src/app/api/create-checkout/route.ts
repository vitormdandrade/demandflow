import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getFieldKeys, renderTemplateHtml } from "@/lib/letter";
import { getTemplate, LEGAL_KIT, type TemplateId } from "@/lib/templates";
import { hasActivePro } from "@/lib/pro";

// Stripe's Node SDK needs the Node.js runtime (it uses Node crypto).
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // ── Invoice Guard Full Report ($9) ──
  if (body.product === "invoice-guard-report") {
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const invoiceAmount = typeof body.invoiceAmount === "string" ? body.invoiceAmount.trim() : "";
    const dueDate = typeof body.dueDate === "string" ? body.dueDate.trim() : "";
    const paymentDate = typeof body.paymentDate === "string" ? body.paymentDate.trim() : "";
    const stateCode = typeof body.stateCode === "string" ? body.stateCode.trim() : "";

    if (!email || !invoiceAmount || !dueDate || !paymentDate || !stateCode) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    const origin = request.headers.get("origin") ?? request.nextUrl.origin;
    try {
      const stripe = getStripe();
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        customer_email: email,
        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: "usd",
              unit_amount: 900,
              product_data: {
                name: "Invoice Guard — Full Late Fee Report",
                description:
                  "All 50 states comparison, payment timeline, and demand letter template — delivered as a PDF.",
              },
            },
          },
        ],
        metadata: {
          product: "invoice-guard-report",
          email,
          invoiceAmount,
          dueDate,
          paymentDate,
          stateCode,
        },
        success_url: `${origin}/invoice-guard?paid=1&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/invoice-guard`,
      });
      return Response.json({ url: session.url });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Checkout failed.";
      return Response.json({ error: message }, { status: 500 });
    }
  }

  // ── Freelancer Legal Kit bundle checkout ──
  // No letter fields at purchase time — the buyer fills them in on the
  // success page and generates each of the six templates there.
  if (body.bundle === LEGAL_KIT.id) {
    const yourName = typeof body.yourName === "string" ? body.yourName.trim() : "";
    const yourEmail = typeof body.yourEmail === "string" ? body.yourEmail.trim() : "";
    const missingKitFields = [
      !yourName && "yourName",
      !yourEmail && "yourEmail",
    ].filter(Boolean);
    if (missingKitFields.length > 0) {
      return Response.json(
        { error: `Missing required fields: ${missingKitFields.join(", ")}` },
        { status: 400 },
      );
    }

    const origin = request.headers.get("origin") ?? request.nextUrl.origin;

    try {
      const stripe = getStripe();
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        customer_email: yourEmail,
        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: "usd",
              unit_amount: LEGAL_KIT.priceCents,
              product_data: {
                name: LEGAL_KIT.productName,
                description: LEGAL_KIT.productDescription,
              },
            },
          },
        ],
        metadata: {
          bundle: LEGAL_KIT.id,
          yourName,
          yourEmail,
        },
        success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}&bundle=1`,
        cancel_url: `${origin}/pricing`,
      });

      return Response.json({ url: session.url });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Checkout failed.";
      return Response.json({ error: message }, { status: 500 });
    }
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

  // ── Pro subscriber? Generate the letter instantly, no payment, no watermark ──
  if (fields.yourEmail && (await hasActivePro(fields.yourEmail))) {
    try {
      const html = renderTemplateHtml(templateId, fields);
      return Response.json({ pro: true, html });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Letter generation failed.";
      return Response.json({ error: message }, { status: 500 });
    }
  }

  // ── Non-Pro: Stripe checkout as usual ──
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
