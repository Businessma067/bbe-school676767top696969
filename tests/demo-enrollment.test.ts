import { test, expect, mock } from "bun:test";
import { demoEnrollmentInsert, usersMissingDemoEnrollment } from "../src/lib/demo-enrollment";

const writes: { userId: string; slug: string; ignoreDuplicates: boolean }[] = [];

mock.module("@/integrations/supabase/client", () => ({
  supabase: {
    auth: {
      getUser: async () => ({
        data: { user: { id: "new-user", created_at: "2026-10-21T10:00:00.000Z" } },
      }),
    },
    from: () => ({
      upsert: async (
        row: { user_id: string; product_slug: string },
        options: { ignoreDuplicates?: boolean },
      ) => {
        writes.push({
          userId: row.user_id,
          slug: row.product_slug,
          ignoreDuplicates: options.ignoreDuplicates === true,
        });
        return { error: null };
      },
    }),
  },
}));

const { ensureOwnDemoEnrollment } = await import("../src/lib/ensure-own-demo-enrollment");

test("signup writes the demo package once and does not overwrite an existing row", async () => {
  await ensureOwnDemoEnrollment();
  expect(writes).toEqual([
    { userId: "new-user", slug: "demo-practice", ignoreDuplicates: true },
  ]);
  expect(demoEnrollmentInsert("new-user", "2026-10-21T10:00:00.000Z")).toMatchObject({
    user_id: "new-user",
    product_slug: "demo-practice",
    product_name: "Demo Practice Package",
    tier: "demo",
    created_at: "2026-10-21T10:00:00.000Z",
  });
});

test("accounts that already have the demo package are left alone", () => {
  const users = [
    { userId: "has-demo", createdAt: "2026-10-01" },
    { userId: "missing", createdAt: "2026-10-21" },
  ];
  expect(usersMissingDemoEnrollment(users, ["has-demo"]).map((user) => user.userId)).toEqual([
    "missing",
  ]);
});
