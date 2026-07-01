import { NextRequest } from "next/server";

export const runtime = "nodejs";

// Captures pre-checkout leads (people who want to see a sample before buying).
// For now this logs to the server console. To persist, wire up Supabase here:
//   const supabase = createClient(url, serviceKey);
//   await supabase.from("leads").insert({ email, source, template });
export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const source = typeof body.source === "string" ? body.source : "unknown";
  const template = typeof body.template === "string" ? body.template : "";

  // Minimal email sanity check.
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  // eslint-disable-next-line no-console
  console.log(
    `[lead] ${new Date().toISOString()} email=${email} source=${source} template=${template}`,
  );

  return Response.json({ ok: true });
}
