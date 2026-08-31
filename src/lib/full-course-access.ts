import { fetchEnrollments, highestTier } from "@/lib/user-progress";
import { supabase } from "@/integrations/supabase/client";
import { hasFullSiteAccess } from "@/lib/site-access";

export const FULL_COURSE_HREF = "/products/full-course-subjects" as const;
export const FULL_COURSE_PRODUCT_HREF = "/products/full-course" as const;

/**
 * Full course / paid study tools unlock.
 * During site lockdown, only allowlisted accounts (GeorgeTuring, InfoSprayGo)
 * get access — enrollment alone is not enough for everyone else.
 */
export async function userOwnsFullCourse(): Promise<boolean> {
  const { data } = await supabase.auth.getSession();
  const email = data.session?.user?.email;
  if (hasFullSiteAccess(email)) return true;

  // Non-allowlisted users stay on demo even if an enrollment row exists.
  return false;
}

/** @deprecated Prefer userOwnsFullCourse — enrollment check without lockdown. */
export async function userOwnsFullCourseEnrollment(): Promise<boolean> {
  const enrollments = await fetchEnrollments();
  return highestTier(enrollments) === "full";
}
