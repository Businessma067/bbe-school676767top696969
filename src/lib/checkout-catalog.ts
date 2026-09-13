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

/** Unlimited 15% codes (max_uses NULL in DB). */
const BBE_15_UNLIMITED_CODES = [
  "BBE-15U-A7K2M9",
  "BBE-15U-B3N8Q1",
  "BBE-15U-C5P4R6",
  "BBE-15U-D9T2W4",
  "BBE-15U-E1X7Y3",
] as const;

/** Single-use 15% codes (max_uses = 1 in DB). */
const BBE_15_SINGLE_CODES = [
  "BBE-15S-F2H8J4",
  "BBE-15S-G6K1L9",
  "BBE-15S-H3M5N7",
  "BBE-15S-J8P2Q6",
  "BBE-15S-K4R9T1",
  "BBE-15S-L7V3W5",
  "BBE-15S-M1X6Y8",
  "BBE-15S-N9A2B4",
  "BBE-15S-P5C8D3",
  "BBE-15S-Q2E7F9",
  "BBE-15S-R6G1H4",
  "BBE-15S-S3J8K2",
  "BBE-15S-T9L4M7",
  "BBE-15S-V1N5P8",
  "BBE-15S-W4Q6R2",
  "BBE-15S-X8S1T5",
  "BBE-15S-Y2U7V9",
  "BBE-15S-Z5W3X6",
  "BBE-15S-A8Y1B7",
  "BBE-15S-C3D9E2",
] as const;

export const HARDCODED_DISCOUNT_PROMOS: HardcodedDiscountPromo[] = [
  {
    code: "BBE-JFKDJT15",
    discountPct: 15,
    productSlug: "any-paid",
    name: "BBE 15% · Legacy",
    expiresAt: null,
  },
  ...BBE_15_UNLIMITED_CODES.map((code) => ({
    code,
    discountPct: 15,
    productSlug: "any-paid" as const,
    name: `BBE 15% unlimited · ${code.slice(-6)}`,
    expiresAt: DISCOUNT_15_EXPIRES,
  })),
  ...BBE_15_SINGLE_CODES.map((code) => ({
    code,
    discountPct: 15,
    productSlug: "any-paid" as const,
    name: `BBE 15% once · ${code.slice(-6)}`,
    expiresAt: DISCOUNT_15_EXPIRES,
  })),
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
