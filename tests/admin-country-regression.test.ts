import { describe, test, expect, mock } from "bun:test";
import { readFileSync } from "node:fs";

// Exercise the actual export expressions without importing privileged server modules.
const adminSource = readFileSync(new URL("../src/lib/admin.functions.ts", import.meta.url), "utf8");
const rowExpression = adminSource.match(/lines\.push\(\s*(\[[\s\S]*?\]\.join\(","\))/)?.[1];
const header = adminSource.match(/const header =\s*"([^"]+)"/)?.[1];
const escapeSource = adminSource.slice(adminSource.indexOf("function csvEscape(value:"))
  .replace("value: string", "value").replace("): string", ")");

describe("user CSV country alignment", () => {
  test("country is fifth and dates and accuracy retain their headings", () => {
    if (!rowExpression || !header) throw new Error("CSV implementation not found");
    const u = { userId: "id", email: "a@example.com", displayName: "Test", tier: "full", country: "Austria", registeredAt: "2026-10-20", lastSeenAt: "2026-10-21", tasksPassed: 2, tasksAttempted: 3, mockBestPct: 75, mockAttempts: 1, currentStreak: 4, averageAccuracy: 80 };
    const row = new Function("u", `${escapeSource}; return ${rowExpression};`)(u);
    const fields = Object.fromEntries(header.split(",").map((key, i) => [key, row.split(",")[i]]));
    expect(fields.country).toBe("Austria");
    expect(fields.registered).toBe("2026-10-20");
    expect(fields.last_seen).toBe("2026-10-21");
    expect(fields.accuracy).toBe("80");
    expect(row.split(",")).toHaveLength(header.split(",").length);
  });
});

describe("verified signup country capture", () => {
  const source = readFileSync(new URL("../src/routes/signup-complete.tsx", import.meta.url), "utf8");
  const body = source.match(/\(async \(\) => \{([\s\S]*?)\}\)\(\);/)?.[1];
  async function run(auth: boolean, signup: boolean) {
    if (!body) throw new Error("Signup completion flow not found");
    const record = mock(async () => undefined);
    const allowed = mock(() => undefined);
    const continueTo = mock(() => undefined);
    const execute = new Function(
      "getCurrentAuthState",
      "cancelled",
      "supabase",
      "navigate",
      "hasSignupComplete",
      "consumeSignupComplete",
      "recordSignupCountry",
      "ensureOwnDemoEnrollment",
      "consumePostSignupContinue",
      "setContinueTo",
      "localizePath",
      "DEMO_AFTER_SIGNUP",
      "lang",
      "setAllowed",
      `return (async () => {${body}})();`,
    );
    await execute(
      async () => auth,
      false,
      { auth: { getUser: async () => ({ data: { user: null } }) } },
      () => {},
      () => signup,
      () => signup,
      record,
      async () => undefined,
      () => {},
      continueTo,
      (p: string) => p,
      "/demo-practice",
      "en",
      allowed,
    );
    return { record, allowed, continueTo };
  }
  test("successful signup records country before continuation is enabled", async () => {
    const { record, allowed, continueTo } = await run(true, true);
    expect(record).toHaveBeenCalledTimes(1);
    expect(record.mock.invocationCallOrder[0]).toBeLessThan(allowed.mock.invocationCallOrder[0] ?? 0);
    expect(continueTo).toHaveBeenCalledWith("/demo-practice");
  });
  test("regular signed-in visits do not capture registration country", async () => {
    const { record } = await run(true, false);
    expect(record).toHaveBeenCalledTimes(0);
  });
  test("signed-out visits do not capture country", async () => {
    const { record } = await run(false, true);
    expect(record).toHaveBeenCalledTimes(0);
  });
});