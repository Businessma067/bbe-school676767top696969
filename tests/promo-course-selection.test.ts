import { describe, expect, test } from "bun:test";
const store: Record<string, string> = {};
(globalThis as any).window = {
  localStorage: {
    getItem: (k: string) => store[k] ?? null,
    setItem: (k: string, v: string) => (store[k] = v),
  },
  dispatchEvent() {},
};
const {
  saveAppliedPromo,
  saveAccountWidePromo,
  getAppliedPromo,
  syncAccountPromos,
} = await import("../src/lib/applied-promo");

describe("partner promocodes remembered account-wide", () => {
  test("saveAccountWidePromo puts the discount on every paid course", () => {
    saveAccountWidePromo({ code: "VSTUPUNI", discountPct: 10 });
    expect(getAppliedPromo("full-course")).toEqual({ code: "VSTUPUNI", discountPct: 10 });
    expect(getAppliedPromo("wiso-full-course")).toEqual({ code: "VSTUPUNI", discountPct: 10 });
    expect(getAppliedPromo("hybrid-full-course")).toEqual({
      code: "VSTUPUNI",
      discountPct: 10,
    });
  });

  test("account sync keeps STUDYLINE on every course it covers", () => {
    for (const key of Object.keys(store)) delete store[key];
    saveAppliedPromo("full-course", { code: "STUDYLINE", discountPct: 5 });
    syncAccountPromos([
      { code: "STUDYLINE", productSlug: "full-course", discountPct: 5 },
      { code: "STUDYLINE", productSlug: "wiso-full-course", discountPct: 5 },
      { code: "STUDYLINE", productSlug: "hybrid-full-course", discountPct: 5 },
    ]);
    expect(getAppliedPromo("full-course")?.code).toBe("STUDYLINE");
    expect(getAppliedPromo("wiso-full-course")?.code).toBe("STUDYLINE");
    expect(getAppliedPromo("hybrid-full-course")?.code).toBe("STUDYLINE");
  });
});
