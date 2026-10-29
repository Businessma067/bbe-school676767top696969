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
  ACCOUNT_LIMITED_DISCOUNT_CODE_LIST,
  ACCOUNT_LIMITED_DISCOUNT_CODES,
  accountLimitedDiscountMeta,
  isAccountLimitedDiscountCode,
} from "../src/lib/account-limited-promos";

const source = readFileSync(new URL("../src/lib/promo.functions.ts", import.meta.url), "utf8");
const start = source.indexOf("/** Which partner discount (if any) this account already activated. */");
const end = source.indexOf("// Discount promocodes are multi-use and are never claimed", start);
const js = new Bun.Transpiler({ loader: "ts" }).transformSync(
  source
    .slice(start, end)
    .replace(/export async function/g, "async function")
    .replace(
      /await import\("@\/integrations\/supabase\/client\.server"\)/g,
      "({ supabaseAdmin: databaseMock })",
    ),
);

type BoundState = {
  binding: string | null;
  selections: string[];
  usages: string[];
  payments: string[];
};

function emptyState(overrides: Partial<BoundState> = {}): BoundState {
  return {
    binding: null,
    selections: [],
    usages: [],
    payments: [],
    ...overrides,
  };
}

async function lookup(
  code: string,
  userId: string | undefined,
  productSlug = "full-course",
  state: BoundState = emptyState(),
) {
  const touched: string[] = [];
  const supabaseAdmin = {
    from(table: string) {
      touched.push(table);
      const query: Record<string, unknown> = {
        select() {
          return query;
        },
        eq() {
          return query;
        },
        in() {
          return query;
        },
        not() {
          return query;
        },
        limit() {
          return query;
        },
        insert: async (row: { code?: string }) => {
          if (table === "account_partner_bindings" && row.code) {
            state.binding = row.code;
          }
          return { data: null, error: null };
        },
        maybeSingle: async () => {
          if (table === "account_partner_bindings") {
            return {
              data: state.binding ? { code: state.binding } : null,
              error: null,
            };
          }
          return { data: null, error: null };
        },
        then(resolve: (value: unknown) => unknown) {
          let rows: { code?: string; promo_code?: string }[] = [];
          if (table === "promo_course_selections") {
            rows = state.selections.map((c) => ({ code: c }));
          } else if (table === "promo_usages") {
            rows = state.usages.map((c) => ({ code: c }));
          } else if (table === "payments") {
            rows = state.payments.map((c) => ({ promo_code: c }));
          }
          return Promise.resolve(resolve({ data: rows, error: null }));
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
    "ACCOUNT_LIMITED_DISCOUNT_CODE_LIST",
    "accountLimitedDiscountMeta",
    "isAccountLimitedDiscountCode",
    "isMissingRelationError",
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
    ACCOUNT_LIMITED_DISCOUNT_CODE_LIST,
    accountLimitedDiscountMeta,
    isAccountLimitedDiscountCode,
    () => false,
  );
  return {
    result: await fn({ code, userId, productSlug }),
    touched,
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
      const { result } = await lookup("vstupuni", "new-account", slug);
      expect(result.ok).toBe(true);
      if (result.ok) expect(result.discountPct).toBe(10);
    }
  });

  test("keeps working forever on another course after the account already used it", async () => {
    const { result } = await lookup(
      "VSTUPUNI",
      "used-account",
      "wiso-full-course",
      emptyState({ binding: "VSTUPUNI", usages: ["VSTUPUNI"] }),
    );
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.discountPct).toBe(10);
  });

  test("rejects a different partner code once the account is bound", async () => {
    const { result } = await lookup(
      "STUDYLINE",
      "bound-account",
      "full-course",
      emptyState({ binding: "VSTUPUNI" }),
    );
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.error).toMatch(/already uses VSTUPUNI/i);
  });

  test("requires a verified account", async () => {
    expect((await lookup("VSTUPUNI", undefined)).result.ok).toBe(false);
  });
});

describe("STUDYLINE still account-wide partner", () => {
  test("keeps 5% and blocks switching to VSTUPUNI", async () => {
    const { result } = await lookup("STUDYLINE", "new-account", "full-course");
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.discountPct).toBe(5);

    const blocked = await lookup(
      "VSTUPUNI",
      "studyline-account",
      "full-course",
      emptyState({ binding: "STUDYLINE" }),
    );
    expect(blocked.result.ok).toBe(false);
  });
});
