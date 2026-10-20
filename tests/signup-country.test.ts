import { test, expect, mock } from "bun:test";

const writes: { country: string; user: string; emptyOnly: boolean }[] = [];
mock.module("@/integrations/supabase/client", () => ({
  supabase: {
    auth: { getUser: async () => ({ data: { user: { id: "new-user" } } }) },
    from: () => ({
      update: (values: { signup_country: string }) => ({
        eq: (_key: string, user: string) => ({
          is: async (key: string, value: null) => {
            writes.push({ country: values.signup_country, user, emptyOnly: key === "signup_country" && value === null });
          },
        }),
      }),
    }),
  },
}));
mock.module("@/lib/geo.functions", () => ({ getVisitorCountry: async () => ({ country: "AT" }) }));
const { recordSignupCountry } = await import("../src/lib/signup-country");

test("records detected country on the authenticated profile only when empty", async () => {
  await recordSignupCountry();
  expect(writes).toEqual([{ country: "AT", user: "new-user", emptyOnly: true }]);
});