import { fetchAccessState, tierAtLeast } from "@/lib/entitlements";
import { fetchEnrollments, highestTier } from "@/lib/user-progress";

export const FULL_COURSE_HREF = "/products/full-course-subjects" as const;
export const FULL_COURSE_PRODUCT_HREF = "/products/full-course" as const;

/** True when the account owns a paid course (Lite or Full) or is an admin. */
export async function userOwnsFullCourse(): Promise<boolean> {
  const state = await fetchAccessState();
  return tierAtLeast(state.tier, "lite");
}

/** Strict check: Full Course tier only (admins included). */
export async function userOwnsFullTier(): Promise<boolean> {
  const state = await fetchAccessState();
  return state.tier === "full";
}

/** @deprecated Prefer userOwnsFullCourse. */
export async function userOwnsFullCourseEnrollment(): Promise<boolean> {
  const enrollments = await fetchEnrollments();
  return highestTier(enrollments) === "full";
}
