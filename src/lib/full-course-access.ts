import { fetchEnrollments, highestTier } from "@/lib/user-progress";

export const FULL_COURSE_HREF = "/products/full-course-subjects" as const;
export const FULL_COURSE_PRODUCT_HREF = "/products/full-course" as const;

export async function userOwnsFullCourse(): Promise<boolean> {
  const enrollments = await fetchEnrollments();
  return highestTier(enrollments) === "full";
}
