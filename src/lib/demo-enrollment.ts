/** Free package every account receives at signup. */
export const DEMO_PRACTICE_ENROLLMENT = {
  product_slug: "demo-practice",
  product_name: "Demo Practice Package",
  tier: "demo",
} as const;

export function demoEnrollmentInsert(userId: string, createdAt?: string | null) {
  return {
    user_id: userId,
    product_slug: DEMO_PRACTICE_ENROLLMENT.product_slug,
    product_name: DEMO_PRACTICE_ENROLLMENT.product_name,
    tier: DEMO_PRACTICE_ENROLLMENT.tier,
    ...(createdAt ? { created_at: createdAt } : {}),
  };
}

/** Accounts that still have no Demo Practice Package row. */
export function usersMissingDemoEnrollment<T extends { userId: string }>(
  users: T[],
  enrolledUserIds: Iterable<string>,
): T[] {
  const enrolled = new Set(enrolledUserIds);
  return users.filter((user) => !enrolled.has(user.userId));
}
