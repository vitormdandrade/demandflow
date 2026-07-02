import { NextRequest } from "next/server";
import { createCustomerPortalSession } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const customerId =
    typeof body.customerId === "string" ? body.customerId.trim() : "";
  if (!customerId) {
    return Response.json({ error: "Missing customerId." }, { status: 400 });
  }

  const origin = request.headers.get("origin") ?? request.nextUrl.origin;

  try {
    const session = await createCustomerPortalSession(
      customerId,
      `${origin}/account`,
    );
    return Response.json({ url: session.url });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Couldn't open the billing portal.";
    return Response.json({ error: message }, { status: 500 });
  }
}
