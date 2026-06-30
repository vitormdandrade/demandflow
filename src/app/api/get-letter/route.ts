import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";
import {
  getFieldKeys,
  renderTemplateHtml,
} from "@/lib/letter";
import type { TemplateId } from "@/lib/templates";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");
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

  // Only hand over the letter once payment has actually gone through.
  if (session.payment_status !== "paid") {
    return Response.json(
      { error: "Payment not completed for this session." },
      { status: 402 },
    );
  }

  const metadata = session.metadata ?? {};
  const templateId = (metadata.template as TemplateId) || "demand-letter";

  // Collect fields for this template.
  const fieldKeys = getFieldKeys(templateId);
  const fields: Record<string, string> = {};
  for (const key of fieldKeys) {
    if (typeof metadata[key] === "string") {
      fields[key] = metadata[key];
    }
  }

  // Basic validation — require at least name fields.
  if (!fields.yourName) {
    return Response.json(
      { error: "Letter details are missing from this session." },
      { status: 422 },
    );
  }

  const html = renderTemplateHtml(templateId, fields);

  // Return a standalone, printable HTML document. The success page renders it
  // in an iframe; the browser's "Save as PDF" handles the PDF export. The
  // `download` param serves it as an attachment instead.
  const asDownload = request.nextUrl.searchParams.get("download") === "1";

  // Choose a filename based on template.
  const filenames: Record<string, string> = {
    "demand-letter": "demand-letter.html",
    "cease-and-desist": "cease-and-desist-letter.html",
    "contract-termination": "contract-termination-letter.html",
    "late-rent-notice": "late-rent-notice.html",
    "freelance-reminder": "freelance-payment-reminder.html",
  };
  const filename = filenames[templateId] || "letter.html";

  const headers: Record<string, string> = {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store",
  };
  if (asDownload) {
    headers["Content-Disposition"] =
      `attachment; filename="${filename}"`;
  }

  return new Response(html, { status: 200, headers });
}
