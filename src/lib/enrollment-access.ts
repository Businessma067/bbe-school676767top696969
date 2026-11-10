/** Only the free demo SKU may convey access without a server-granted paid tier. */
export function enrollmentConveysAccess(enrollment: { product_slug: string; tier: string }): boolean {
  if (enrollment.product_slug === "demo-practice") return enrollment.tier === "demo";
  return enrollment.tier === "full" || enrollment.tier === "lite";
}