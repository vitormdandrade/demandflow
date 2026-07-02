import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Supabase is optional — the project may not have an instance provisioned
// yet. Callers should always go through `getSupabase()` and handle a null
// return (skip persistence, log, etc.) rather than importing a client
// directly, so subscription storage degrades gracefully when unset.
export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    return null;
  }
  return createClient(url, anonKey);
}
