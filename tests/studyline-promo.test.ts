import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { promoAppliesToProduct, isPaidProductSlug, HARDCODED_DISCOUNT_PROMOS, DISCOUNT_CODE, DISCOUNT_PCT } from "../src/lib/checkout-catalog";

const source = readFileSync(new URL("../src/lib/promo.functions.ts", import.meta.url), "utf8");
const start = source.indexOf("export async function lookupDiscountPromo(");
const end = source.indexOf("// Discount promocodes are multi-use and are never claimed", start);
const js = new Bun.Transpiler({ loader: "ts" }).transformSync(source.slice(start, end)
  .replace("export async function", "async function")
  .replace('await import("@/integrations/supabase/client.server")', "({ supabaseAdmin: databaseMock })"));

async function lookup(userId: string | undefined, usages = 0, payments = 0, productSlug = "full-course") {
  const filters: Record<string, Record<string, string>> = {};
  const supabaseAdmin = { from(table: string) {
    const query = {
      select() { return query; },
      eq(key: string, value: string) { (filters[table] ??= {})[key] = value; return query; },
      not() { return query; },
      maybeSingle: async () => ({ data: { id: "studyline-id", code: "STUDYLINE", kind: "discount", discount_pct: 5, max_uses: null, expires_at: null, product_slug: "any-paid", name: "Studyline" }, error: null }),
      then(resolve: (value: unknown) => unknown) { return Promise.resolve(resolve({ count: table === "promo_usages" ? usages : payments, error: null })); },
    };
    return query;
  } };
  const run = new Function("databaseMock", "normalizeCode", "isExpired", "isPaidProductSlug", "promoAppliesToProduct", "HARDCODED_DISCOUNT_PROMOS", "DISCOUNT_CODE", "DISCOUNT_PCT", `${js}; return lookupDiscountPromo;`);
  const fn = run(supabaseAdmin, (code: string) => code.trim().toUpperCase(), () => false, isPaidProductSlug, promoAppliesToProduct, HARDCODED_DISCOUNT_PROMOS, DISCOUNT_CODE, DISCOUNT_PCT);
  return { result: await fn({ code: "studyline", userId, productSlug }), filters };
}

describe("STUDYLINE conditions", () => {
  test("gives 5% on every paid course without a global usage count", async () => {
    for (const slug of ["full-course", "wiso-full-course", "hybrid-full-course"]) {
      const { result, filters } = await lookup("new-account", 0, 0, slug);
      expect(result.ok).toBe(true);
      expect(result.discountPct).toBe(5);
      expect(filters.promo_usages?.user_id).toBe("new-account");
      expect(filters.promo_usages?.product_slug).toBe(slug);
      expect(filters.payments?.product_slug).toBe(slug);
    }
  });
  test("allows the same account to use it on another course", async () => {
    // Account already paid for full-course with STUDYLINE; wiso is a different course.
    expect((await lookup("used-account", 0, 0, "wiso-full-course")).result.ok).toBe(true);
  });
  test("rejects a second use by the same account on the same course", async () => {
    expect((await lookup("used-account", 1, 0, "full-course")).result.ok).toBe(false);
  });
  test("blocks another checkout on the same course while a payment is pending or paid", async () => {
    expect((await lookup("pending-account", 0, 1, "full-course")).result.ok).toBe(false);
  });
  test("requires a verified account", async () => {
    expect((await lookup(undefined)).result.ok).toBe(false);
  });
});