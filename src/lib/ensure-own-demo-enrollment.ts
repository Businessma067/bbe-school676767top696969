import { supabase } from "@/integrations/supabase/client";
import { demoEnrollmentInsert } from "@/lib/demo-enrollment";

/**
 * Give the signed-in account the free Demo Practice Package.
 * Signup used to rely only on the database trigger, which stopped inserting
 * this row, so new accounts stayed on "No enrollment."
 */
export async function ensureOwnDemoEnrollment(): Promise<void> {
  try {
    const { data } = await supabase.auth.getUser();
    const user = data?.user;
    if (!user) return;
    await supabase.from("enrollments").upsert(demoEnrollmentInsert(user.id, user.created_at), {
      onConflict: "user_id,product_slug",
      ignoreDuplicates: true,
    });
  } catch {
    /* best-effort; signup still continues */
  }
}
