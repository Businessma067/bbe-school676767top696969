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

/** 15% single-use codes (also seeded in supabase/migrations/20260907180000_discount_promocodes.sql). */
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
  }))
];

export function isPaidProductSlug(value: string): value is PaidProductSlug {
  return value in PAID_PRODUCTS;
}

/** Catalog price → minor units (cents). */
export function priceEurToMinor(priceEur: number): number {
  return Math.round(priceEur * 100);
}

/**
 * Apply a percent discount to a catalog EUR price.
 * Matches the Monobank invoice amount (minor units / cents).
 * Example: €449 at 15% → 38165 (€381.65).
 */
export function discountedAmountMinor(priceEur: number, discountPct: number): number {
  const pct = Math.max(0, Math.min(100, Number(discountPct) || 0));
  const baseMinor = priceEurToMinor(priceEur);
  if (pct <= 0) return Math.max(1, baseMinor);
  return Math.max(1, Math.round(baseMinor * (1 - pct / 100)));
}

export function minorToEur(amountMinor: number): number {
  return amountMinor / 100;
}

/** Display helper: whole euros without decimals, otherwise two decimal places. */
export function formatEurAmount(amountEur: number): string {
  const rounded = Math.round(amountEur * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2);
}
