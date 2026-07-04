import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getFieldKeys, renderTemplateHtml } from "@/lib/letter";
import { getTemplate, LEGAL_KIT } from "@/lib/templates";

// Stripe's Node SDK needs the Node.js runtime (it uses Node crypto).
export const runtime = "nodejs";

// Generates a letter for a Freelancer Legal Kit purchase. The bundle checkout
// stores no letter fields in metadata — the buyer fills them in on the success
// page and can regenerate any of the six templates as often as they need.
export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const sessionId = typeof body.session_id === "string" ? body.session_id : "";
  if (!sessionId) {
    return Response.json({ error: "Missing session_id." }, { status: 400 });
  }

  let session;
  try {
    const stripe = getStripe();
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return Response.json({ error: "Session not found." }, { status: 404 });
  }

  // Only hand over letters once payment has actually gone through…
  if (session.payment_status !== "paid") {
    return Response.json(
      { error: "Payment not completed for this session." },
      { status: 402 },
    );
  }

  // …and only for sessions that actually bought the Legal Kit bundle.
  if (session.metadata?.bundle !== LEGAL_KIT.id) {
    return Response.json(
      { error: "This session is not a Legal Kit purchase." },
      { status: 403 },
    );
  }

  const template = getTemplate(typeof body.template === "string" ? body.template : "");
  if (!template) {
    return Response.json({ error: "Unknown template." }, { status: 400 });
  }

  // Collect and trim every field for this template.
  const rawFields =
    body.fields && typeof body.fields === "object"
      ? (body.fields as Record<string, unknown>)
      : {};
  const fieldKeys = getFieldKeys(template.id);
  const fields: Record<string, string> = {};
  for (const key of fieldKeys) {
    const value = rawFields[key];
    if (typeof value === "string") {
      fields[key] = value.trim();
    }
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

  try {
    // Bundle buyers paid — no watermark.
    const html = renderTemplateHtml(template.id, fields, { watermark: false });
    return Response.json({ html });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Letter generation failed.";
    return Response.json({ error: message }, { status: 500 });
  }
}
