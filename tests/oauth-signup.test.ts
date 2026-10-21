import { test, expect, mock } from "bun:test";

mock.module("@/integrations/supabase/client", () => ({
  supabase: { auth: { getUser: async () => ({ data: { user: null } }) } },
}));
mock.module("@/lib/google-auth", () => ({
  signInWithGoogle: async () => ({ error: null, redirected: false }),
}));
mock.module("@/lib/signup-complete", () => ({
  markSignupComplete: () => undefined,
  openSignupComplete: () => undefined,
  SIGNUP_COMPLETE_PATH: "/signup-complete",
}));

const { isNewOAuthSignup } = await import("../src/lib/oauth-signup");

const now = Date.parse("2026-10-21T12:00:00.000Z");

test("a google account created during this attempt is a signup", () => {
  expect(isNewOAuthSignup("2026-10-21T11:59:50.000Z", now - 20_000, now)).toBe(true);
});

test("an older google account is a sign-in and skips the signup gate", () => {
  expect(isNewOAuthSignup("2026-10-20T11:59:50.000Z", now - 20_000, now)).toBe(false);
});
