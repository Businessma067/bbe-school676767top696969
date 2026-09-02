/** Client-safe catalog of paid products and their prices. */

export type PaidProductSlug = "full-course" | "lite-bbe-course";

export type PaidProduct = {
  slug: PaidProductSlug;
  name: string;
  tier: "lite" | "full";
  priceEur: number;
  /** Charged amount in UAH (Monobank settles in hryvnia). */
  priceUah: number;
  href: string;
};

export const PAID_PRODUCTS: Record<PaidProductSlug, PaidProduct> = {
  "full-course": {
    slug: "full-course",
    name: "Full BBE Course",
    tier: "full",
    priceEur: 479,
    priceUah: 21500,
    href: "/products/full-course-subjects",
  },
  "lite-bbe-course": {
    slug: "lite-bbe-course",
    name: "Lite BBE Course",
    tier: "lite",
    priceEur: 279,
    priceUah: 12500,
    href: "/products/lite-bbe-course-subjects",
  },
};

/** Promocode that takes 15% off the checkout price (validated server-side too). */
export const DISCOUNT_CODE = "BBE-JfkDjt15";
export const DISCOUNT_PCT = 15;

export function isPaidProductSlug(value: string): value is PaidProductSlug {
  return value in PAID_PRODUCTS;
}
