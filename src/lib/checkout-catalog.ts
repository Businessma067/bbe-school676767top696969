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

/** Hardcoded discount fallbacks when Supabase `promocodes` table is missing / empty. */
export type HardcodedDiscountPromo = {
  code: string;
  discountPct: number;
  /** `full-course` | `lite-bbe-course` | `any-paid` */
  productSlug: "full-course" | "lite-bbe-course" | "any-paid";
  name: string;
  expiresAt: string | null;
};

export const HARDCODED_DISCOUNT_PROMOS: HardcodedDiscountPromo[] = [
  {
    code: "BBE-JFKDJT15",
    discountPct: 15,
    productSlug: "any-paid",
    name: "BBE 15% · Legacy",
    expiresAt: null,
  },
  {
    code: "BBE-30-0B49A5",
    discountPct: 30,
    productSlug: "full-course",
    name: "BBE 30% Full · 0B49A5",
    expiresAt: "2026-12-06T23:59:59+00:00",
  },
  {
    code: "BBE-30-04FAFE",
    discountPct: 30,
    productSlug: "full-course",
    name: "BBE 30% Full · 04FAFE",
    expiresAt: "2026-12-06T23:59:59+00:00",
  },
];

export function isPaidProductSlug(value: string): value is PaidProductSlug {
  return value in PAID_PRODUCTS;
}
