import { NextRequest } from "next/server";
import { getSupabase } from "@/lib/supabase";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email")?.trim();
  if (!email) {
    return Response.json({ error: "Missing email." }, { status: 400 });
  }

  const supabase = getSupabase();
  if (!supabase) {
    return Response.json({ active: false, subscription: null });
  }

  const { data, error } = await supabase
    .from("df_subscriptions")
    .select("*")
    .eq("email", email)
    .eq("status", "active")
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    return Response.json({ error: "Lookup failed." }, { status: 500 });
  }

  return Response.json({ active: !!data, subscription: data ?? null });
}
