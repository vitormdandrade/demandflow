import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";
import {
  LETTER_FIELD_KEYS,
  renderLetterHtml,
  type LetterFields,
} from "@/lib/letter";

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
  const fields: Partial<LetterFields> = {};
  for (const key of LETTER_FIELD_KEYS) {
    if (typeof metadata[key] === "string") {
      fields[key] = metadata[key];
    }
  }

  if (!fields.yourName || !fields.clientName || !fields.amount) {
    return Response.json(
      { error: "Letter details are missing from this session." },
      { status: 422 },
    );
  }

  const html = renderLetterHtml(fields as LetterFields);

  // Return a standalone, printable HTML document. The success page renders it
  // in an iframe; the browser's "Save as PDF" handles the PDF export. The
  // `download` param serves it as an attachment instead.
  const asDownload = request.nextUrl.searchParams.get("download") === "1";
  const headers: Record<string, string> = {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store",
  };
  if (asDownload) {
    headers["Content-Disposition"] =
      'attachment; filename="demand-letter.html"';
  }

  return new Response(html, { status: 200, headers });
}
