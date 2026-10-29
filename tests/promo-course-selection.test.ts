import { describe, expect, test } from "bun:test";
const store: Record<string, string> = {};
(globalThis as any).window = { localStorage: { getItem: (k: string) => store[k] ?? null, setItem: (k: string, v: string) => (store[k] = v) }, dispatchEvent() {} };
const { saveAppliedPromo, getAppliedPromo, syncAccountPromos } = await import("../src/lib/applied-promo");

describe("STUDYLINE remembered course", () => {
  test("applying to another course moves the 5% discount there", () => {
    saveAppliedPromo("full-course", { code: "STUDYLINE", discountPct: 5 });
    saveAppliedPromo("wiso-full-course", { code: "studyline", discountPct: 5 });
    expect(getAppliedPromo("full-course")).toBeNull();
    expect(getAppliedPromo("wiso-full-course")?.discountPct).toBe(5);
  });
  test("account choice replaces the device choice", () => {
    syncAccountPromos([{ code: "STUDYLINE", productSlug: "hybrid-full-course", discountPct: 5 }]);
    expect(getAppliedPromo("wiso-full-course")).toBeNull();
    expect(getAppliedPromo("hybrid-full-course")?.code).toBe("STUDYLINE");
  });
});
