import { PAID_PRODUCTS, type PaidProductSlug } from "@/lib/checkout-catalog";

export type AppliedPromo = {
  code: string;
  discountPct: number;
};

const STORAGE_KEY = "bbe.applied-promos.v1";
export const APPLIED_PROMO_EVENT = "bbe:applied-promo";

type PromoMap = Partial<Record<PaidProductSlug, AppliedPromo>>;

function isPaidProductSlug(value: string): value is PaidProductSlug {
  return value in PAID_PRODUCTS;
}

function isAppliedPromo(value: unknown): value is AppliedPromo {
  if (!value || typeof value !== "object") return false;
  const row = value as { code?: unknown; discountPct?: unknown };
  return (
    typeof row.code === "string" &&
    row.code.trim().length > 0 &&
    typeof row.discountPct === "number" &&
    Number.isFinite(row.discountPct) &&
    row.discountPct > 0 &&
    row.discountPct < 100
  );
}

function readMap(): PromoMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    const next: PromoMap = {};
    for (const [slug, value] of Object.entries(parsed as Record<string, unknown>)) {
      if (isPaidProductSlug(slug) && isAppliedPromo(value)) {
        next[slug] = { code: value.code.trim().toUpperCase(), discountPct: value.discountPct };
      }
    }
    return next;
  } catch {
    return {};
  }
}

function writeMap(map: PromoMap) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  window.dispatchEvent(new Event(APPLIED_PROMO_EVENT));
}

export function discountedPriceEur(catalogEur: number, discountPct: number): number {
  return Math.round(catalogEur * (1 - discountPct / 100));
}

export function getAppliedPromo(productSlug: PaidProductSlug): AppliedPromo | null {
  return readMap()[productSlug] ?? null;
}

export function getAppliedPromoMap(): PromoMap {
  return readMap();
}

export function saveAppliedPromo(productSlug: PaidProductSlug, promo: AppliedPromo) {
  const map = readMap();
  // A code can stay on several courses at once; each course keeps its discount.
  map[productSlug] = {
    code: promo.code.trim().toUpperCase(),
    discountPct: promo.discountPct,
  };
  writeMap(map);
}

/** Bind a partner discount to every paid course on this device. */
export function saveAccountWidePromo(promo: AppliedPromo) {
  const map = readMap();
  const next = {
    code: promo.code.trim().toUpperCase(),
    discountPct: promo.discountPct,
  };
  for (const slug of Object.keys(PAID_PRODUCTS) as PaidProductSlug[]) {
    map[slug] = next;
  }
  writeMap(map);
}

export function clearAppliedPromo(productSlug: PaidProductSlug) {
  const map = readMap();
  if (!(productSlug in map)) return;
  delete map[productSlug];
  writeMap(map);
}

/** Merge the account's saved course discounts into this device's saved codes. */
export function syncAccountPromos(rows: { code: string; productSlug: string; discountPct: number }[]) {
  const map = readMap();
  for (const r of rows) {
    if (isPaidProductSlug(r.productSlug)) map[r.productSlug] = { code: r.code.toUpperCase(), discountPct: r.discountPct };
  }
  writeMap(map);
}
