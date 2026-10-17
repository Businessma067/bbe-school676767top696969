import { supabase } from "@/integrations/supabase/client";
import { getVisitorCountry } from "@/lib/geo.functions";

/**
 * Best-effort: record the country the user signed up from on their profile.
 * Only fills the value when it is still empty, so a later visit never
 * overwrites the original registration country.
 */
export async function recordSignupCountry(): Promise<void> {
  try {
    const { data } = await supabase.auth.getUser();
    const uid = data?.user?.id;
    if (!uid) return;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const result = await getVisitorCountry({ data: { timezone } }).catch(() => null);
    const country = result?.country ?? null;
    if (!country) return;
    await supabase
      .from("profiles")
      .update({ signup_country: country })
      .eq("user_id", uid)
      .is("signup_country", null);
  } catch {
    /* capture is best-effort; never block signup */
  }
}
