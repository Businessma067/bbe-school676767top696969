/** Client-safe catalog of paid products and their prices. */

export type PaidProductSlug = "full-course" | "lite-bbe-course";

/** ISO 4217 numeric code for EUR (Monobank `ccy`). */
export const MONOBANK_CURRENCY_EUR = 978;

export type PaidProduct = {
  slug: PaidProductSlug;
  name: string;
  tier: "lite" | "full";
  /** Charged amount in euros (Monobank invoice uses EUR minor units). */
  priceEur: number;
  href: string;
};

export const PAID_PRODUCTS: Record<PaidProductSlug, PaidProduct> = {
  "full-course": {
    slug: "full-course",
    name: "Full BBE Course",
    tier: "full",
    priceEur: 449,
    href: "/products/full-course-subjects",
  },
  "lite-bbe-course": {
    slug: "lite-bbe-course",
    name: "Lite BBE Course",
    tier: "lite",
    priceEur: 279,
    href: "/products/lite-bbe-course-subjects",
  },
};

/** Promocode that takes 15% off the checkout price (validated server-side too). */
export const DISCOUNT_CODE = "BBE-JfkDjt15";
export const DISCOUNT_PCT = 15;

/** Hardcoded discount fallbacks when Supabase `promocodes` table is missing / empty. (Lovable sync) */
export type HardcodedDiscountPromo = {
  code: string;
  discountPct: number;
  /** `full-course` | `lite-bbe-course` | `any-paid` */
  productSlug: "full-course" | "lite-bbe-course" | "any-paid";
  name: string;
  expiresAt: string | null;
};

const DISCOUNT_15_EXPIRES = "2026-12-06T23:59:59+00:00";

/** 15% multi-use codes (also seeded in supabase/migrations/20260907180000_discount_promocodes.sql). */
const BBE_15_CODES = [
  "BBE-15-7A3DCE",
  "BBE-15-D4ED00",
  "BBE-15-BDFD7A",
  "BBE-15-365CF4",
  "BBE-15-C0D548",
  "BBE-15-CA5B41",
  "BBE-15-A3466D",
  "BBE-15-0D260B",
  "BBE-15-10C6E9",
  "BBE-15-CA3022",
] as const;

export const HARDCODED_DISCOUNT_PROMOS: HardcodedDiscountPromo[] = [
  {
    code: "BBE-JFKDJT15",
    discountPct: 15,
    productSlug: "any-paid",
    name: "BBE 15% · Legacy",
    expiresAt: null,
  },
  ...BBE_15_CODES.map((code) => ({
    code,
    discountPct: 15,
    productSlug: "any-paid" as const,
    name: `BBE 15% · ${code.slice(-6)}`,
    expiresAt: DISCOUNT_15_EXPIRES,
  })),
  {
    code: "BBE-30-0B49A5",
    discountPct: 30,
    productSlug: "full-course",
    name: "BBE 30% Full · 0B49A5",
    expiresAt: DISCOUNT_15_EXPIRES,
  },
  {
    code: "BBE-30-04FAFE",
    discountPct: 30,
    productSlug: "full-course",
    name: "BBE 30% Full · 04FAFE",
    expiresAt: DISCOUNT_15_EXPIRES,
  },
];

export function isPaidProductSlug(value: string): value is PaidProductSlug {
  return value in PAID_PRODUCTS;
}
