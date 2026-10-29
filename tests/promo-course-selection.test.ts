import { describe, expect, test } from "bun:test";
const store: Record<string, string> = {};
(globalThis as any).window = { localStorage: { getItem: (k: string) => store[k] ?? null, setItem: (k: string, v: string) => (store[k] = v) }, dispatchEvent() {} };
const { saveAppliedPromo, getAppliedPromo, syncAccountPromos } = await import("../src/lib/applied-promo");

describe("STUDYLINE remembered courses", () => {
  test("the 5% discount stays on every course it is applied to", () => {
    saveAppliedPromo("full-course", { code: "STUDYLINE", discountPct: 5 });
    saveAppliedPromo("wiso-full-course", { code: "studyline", discountPct: 5 });
    expect(getAppliedPromo("full-course")?.discountPct).toBe(5);
    expect(getAppliedPromo("wiso-full-course")?.discountPct).toBe(5);
  });
  test("account choices merge with the device choices", () => {
    syncAccountPromos([{ code: "STUDYLINE", productSlug: "hybrid-full-course", discountPct: 5 }]);
    expect(getAppliedPromo("full-course")?.code).toBe("STUDYLINE");
    expect(getAppliedPromo("wiso-full-course")?.code).toBe("STUDYLINE");
    expect(getAppliedPromo("hybrid-full-course")?.code).toBe("STUDYLINE");
  });
});
