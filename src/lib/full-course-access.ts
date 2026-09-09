import { fetchAccessState, tierAtLeast } from "@/lib/entitlements";
import { fetchEnrollments, highestTier } from "@/lib/user-progress";

export const FULL_COURSE_HREF = "/products/full-course-subjects" as const;
export const FULL_COURSE_PRODUCT_HREF = "/products/full-course" as const;

/** True when the account owns any paid course (Lite or Full) or is an admin. */
export async function userOwnsPaidCourse(): Promise<boolean> {
  const state = await fetchAccessState();
  return tierAtLeast(state.tier, "lite");
}

/**
 * @deprecated Prefer userOwnsPaidCourse. Name historically meant "paid access",
 * not Full Course specifically — that ambiguity unlocked Full mocks for Lite buyers.
 */
export async function userOwnsFullCourse(): Promise<boolean> {
  return userOwnsPaidCourse();
}

/** Strict check: Full Course tier only (admins included). */
export async function userOwnsFullTier(): Promise<boolean> {
  const state = await fetchAccessState();
  return state.tier === "full";
}

/** @deprecated Prefer userOwnsFullTier. */
export async function userOwnsFullCourseEnrollment(): Promise<boolean> {
  const enrollments = await fetchEnrollments();
  return highestTier(enrollments) === "full";
}
