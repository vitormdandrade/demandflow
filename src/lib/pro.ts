import { getSupabase } from "./supabase";

/** Returns true if the given email has an active Pro subscription. */
export async function hasActivePro(email: string): Promise<boolean> {
  const supabase = getSupabase();
  if (!supabase) return false;

  const { data } = await supabase
    .from("df_subscriptions")
    .select("id")
    .eq("email", email.toLowerCase().trim())
    .eq("status", "active")
    .maybeSingle();

  return !!data;
}
