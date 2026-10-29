import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import {
  promoAppliesToProduct,
  isPaidProductSlug,
  HARDCODED_DISCOUNT_PROMOS,
  DISCOUNT_CODE,
  DISCOUNT_PCT,
} from "../src/lib/checkout-catalog";
import {
  ACCOUNT_LIMITED_DISCOUNT_CODES,
  accountLimitedDiscountMeta,
  isAccountLimitedDiscountCode,
} from "../src/lib/account-limited-promos";

const source = readFileSync(new URL("../src/lib/promo.functions.ts", import.meta.url), "utf8");
const start = source.indexOf("export async function lookupDiscountPromo(");
const end = source.indexOf("// Discount promocodes are multi-use and are never claimed", start);
const js = new Bun.Transpiler({ loader: "ts" }).transformSync(
  source
    .slice(start, end)
    .replace("export async function", "async function")
    .replace(
      'await import("@/integrations/supabase/client.server")',
      "({ supabaseAdmin: databaseMock })",
    ),
);

async function lookup(
  code: string,
  userId: string | undefined,
  usages = 0,
  payments = 0,
  productSlug = "full-course",
  row?: Record<string, unknown> | null,
) {
  const filters: Record<string, Record<string, string>> = {};
  const defaultRow = {
    id: `${code.toLowerCase()}-id`,
    code: code.toUpperCase(),
    kind: "discount",
    discount_pct:
      ACCOUNT_LIMITED_DISCOUNT_CODES[code.toUpperCase() as "VSTUPUNI"]?.discountPct ?? 10,
    max_uses: null,
    expires_at: null,
    product_slug: "any-paid",
    name: ACCOUNT_LIMITED_DISCOUNT_CODES[code.toUpperCase() as "VSTUPUNI"]?.name ?? code,
  };
  const supabaseAdmin = {
    from(table: string) {
      const query = {
        select() {
          return query;
        },
        eq(key: string, value: string) {
          (filters[table] ??= {})[key] = value;
          return query;
        },
        not() {
          return query;
        },
        maybeSingle: async () => ({
          data: row === undefined ? defaultRow : row,
          error: null,
        }),
        then(resolve: (value: unknown) => unknown) {
          return Promise.resolve(
            resolve({ count: table === "promo_usages" ? usages : payments, error: null }),
          );
        },
      };
      return query;
    },
  };
  const run = new Function(
    "databaseMock",
    "normalizeCode",
    "isExpired",
    "isPaidProductSlug",
    "promoAppliesToProduct",
    "HARDCODED_DISCOUNT_PROMOS",
    "DISCOUNT_CODE",
    "DISCOUNT_PCT",
    "ACCOUNT_LIMITED_DISCOUNT_CODES",
    "accountLimitedDiscountMeta",
    "isAccountLimitedDiscountCode",
    `${js}; return lookupDiscountPromo;`,
  );
  const fn = run(
    supabaseAdmin,
    (value: string) => value.trim().toUpperCase(),
    () => false,
    isPaidProductSlug,
    promoAppliesToProduct,
    HARDCODED_DISCOUNT_PROMOS,
    DISCOUNT_CODE,
    DISCOUNT_PCT,
    ACCOUNT_LIMITED_DISCOUNT_CODES,
    accountLimitedDiscountMeta,
    isAccountLimitedDiscountCode,
  );
  return {
    result: await fn({ code, userId, productSlug }),
    filters,
  };
}

describe("VSTUPUNI conditions", () => {
  test("is registered as a 10% account-limited partner code", () => {
    expect(isAccountLimitedDiscountCode("vstupuni")).toBe(true);
    expect(accountLimitedDiscountMeta("VSTUPUNI")).toEqual({
      code: "VSTUPUNI",
      discountPct: 10,
      name: "Vstup Uni",
    });
  });

  test("gives 10% on every paid course", async () => {
    for (const slug of ["full-course", "wiso-full-course", "hybrid-full-course"]) {
      const { result, filters } = await lookup("vstupuni", "new-account", 0, 0, slug);
      expect(result.ok).toBe(true);
      if (result.ok) expect(result.discountPct).toBe(10);
      expect(filters.promo_usages?.user_id).toBe("new-account");
      expect(filters.promo_usages?.product_slug).toBe(slug);
      expect(filters.payments?.product_slug).toBe(slug);
    }
  });

  test("allows the same account to use it on another course", async () => {
    expect((await lookup("VSTUPUNI", "used-account", 0, 0, "wiso-full-course")).result.ok).toBe(
      true,
    );
  });

  test("rejects a second use by the same account on the same course", async () => {
    expect((await lookup("VSTUPUNI", "used-account", 1, 0, "full-course")).result.ok).toBe(false);
  });

  test("blocks another checkout on the same course while a payment is pending or paid", async () => {
    expect((await lookup("VSTUPUNI", "pending-account", 0, 1, "full-course")).result.ok).toBe(
      false,
    );
  });

  test("requires a verified account", async () => {
    expect((await lookup("VSTUPUNI", undefined)).result.ok).toBe(false);
  });
});

describe("STUDYLINE still account-limited", () => {
  test("keeps 5% and the same per-course limit", async () => {
    const { result } = await lookup("STUDYLINE", "new-account", 0, 0, "full-course", {
      id: "studyline-id",
      code: "STUDYLINE",
      kind: "discount",
      discount_pct: 5,
      max_uses: null,
      expires_at: null,
      product_slug: "any-paid",
      name: "Studyline",
    });
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.discountPct).toBe(5);
    expect(
      (
        await lookup("STUDYLINE", "used-account", 1, 0, "full-course", {
          id: "studyline-id",
          code: "STUDYLINE",
          kind: "discount",
          discount_pct: 5,
          max_uses: null,
          expires_at: null,
          product_slug: "any-paid",
          name: "Studyline",
        })
      ).result.ok,
    ).toBe(false);
  });
});
