import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../src/components/PaymentModal.tsx", import.meta.url), "utf8");
const start = source.indexOf("  const applyDiscountCode =");
const end = source.indexOf("  const handleApplyDiscountOnCard =", start);
const js = new Bun.Transpiler({ loader: "ts" }).transformSync(source.slice(start, end));
const unlockError = "This promocode unlocks access: redeem it in the Promo tab.";

async function apply(error: string, method = "promo") {
  const errors: string[] = [];
  const run = new Function("validateDiscountCode", "productSlug", "method", "setError", `${js}; return applyDiscountCode('ONE-TIME-CODE');`);
  const handled = await run(async () => ({ ok: false, error }), "full-course", method, (value: string) => errors.push(value));
  return { handled, errors };
}

test("unlock-kind code falls through to redemption in the Promo tab", async () => {
  expect(await apply(unlockError)).toEqual({ handled: false, errors: [] });
});

test("Card tab retains the instruction to redeem unlock codes in Promo", async () => {
  expect(await apply(unlockError, "card")).toEqual({ handled: true, errors: [unlockError] });
});

test("a rejected discount does not fall through to free-access redemption", async () => {
  const error = "This promocode has reached its use limit.";
  expect(await apply(error)).toEqual({ handled: true, errors: [error] });
});

test("Promo submission reaches unlock redemption and the success state", async () => {
  const handlerStart = source.indexOf("  const handlePromoRedeem =");
  const handlerEnd = source.indexOf("  void priceEuros;", handlerStart);
  const handlerJs = new Bun.Transpiler({ loader: "ts" }).transformSync(
    source.slice(handlerStart, handlerEnd).replace('await import("@/lib/entitlements")', '({ clearAccessStateCache: () => {} })'),
  );
  const redeemed: unknown[] = [];
  const unlocked: boolean[] = [];
  const run = new Function("supabase", "promoCode", "productSlug", "setError", "setAuthOpen", "setLoading", "applyDiscountCode", "setAppliedPromoCode", "setDiscountPct", "redeemPromocode", "setPromoUnlocked", "setTimeout", `${handlerJs}; return handlePromoRedeem({ preventDefault() {} });`);
  await run(
    { auth: { getSession: async () => ({ data: { session: {} } }) } },
    "ONE-TIME-CODE", "full-course", () => {}, () => {}, () => {},
    async () => (await apply(unlockError)).handled,
    () => {}, () => {},
    async (input: unknown) => { redeemed.push(input); return { ok: true, productSlug: "full-course", href: "/dashboard" }; },
    (value: boolean) => unlocked.push(value), () => {},
  );
  expect(redeemed).toEqual([{ data: { code: "ONE-TIME-CODE", productSlug: "full-course" } }]);
  expect(unlocked).toEqual([true]);
});