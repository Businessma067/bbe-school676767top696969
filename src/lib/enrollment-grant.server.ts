/**
 * Server-only helpers that write paid enrollments (service role).
 * My Courses on the dashboard lists rows from `enrollments`, so every
 * successful WiSo/BBE payment must land here.
 */

import type { PaidProductSlug } from "@/lib/checkout-catalog";

export async function grantPaidEnrollment(input: {
  userId: string;
  product: { slug: string; name: string; tier: string };
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  // Prefer SECURITY DEFINER RPC (bypasses client-paid trigger via session flag).
  const { error: rpcError } = await supabaseAdmin.rpc("grant_paid_enrollment", {
    p_user_id: input.userId,
    p_product_slug: input.product.slug,
    p_product_name: input.product.name,
    p_tier: input.product.tier,
  });

  if (!rpcError) return { ok: true };

  // Migration not applied yet — fall back to direct upsert (works when the
  // service-role JWT is present and the trigger allows it).
  const missingRpc =
    /grant_paid_enrollment|could not find the function|PGRST202|42883/i.test(
      `${rpcError.code ?? ""} ${rpcError.message ?? ""} ${rpcError.details ?? ""}`,
    );
  if (!missingRpc) {
    console.error("grantPaidEnrollment rpc", input.product.slug, rpcError);
    return { ok: false, error: rpcError.message ?? "Enrollment failed" };
  }

  const { error } = await supabaseAdmin.from("enrollments").upsert(
    {
      user_id: input.userId,
      product_slug: input.product.slug,
      product_name: input.product.name,
      tier: input.product.tier,
    },
    { onConflict: "user_id,product_slug" },
  );
  if (error) {
    console.error("grantPaidEnrollment upsert", input.product.slug, error);
    return { ok: false, error: error.message ?? "Enrollment failed" };
  }
  return { ok: true };
}

/**
 * For every successful payment the user has, ensure a matching enrollment row.
 * Repairs cases where Monobank marked the invoice paid but the upsert failed
 * (so WiSo/BBE never showed under Dashboard → My courses).
 */
export async function ensureEnrollmentsFromSuccessfulPayments(
  userId: string,
): Promise<{ granted: string[] }> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { PAID_PRODUCTS, isPaidProductSlug } = await import("@/lib/checkout-catalog");

  const { data: payments, error } = await supabaseAdmin
    .from("payments")
    .select("product_slug")
    .eq("user_id", userId)
    .eq("status", "success");

  if (error) {
    console.error("ensureEnrollmentsFromSuccessfulPayments: payments", error);
    return { granted: [] };
  }

  const slugs = [
    ...new Set(
      (payments ?? [])
        .map((p) => p.product_slug)
        .filter((slug): slug is PaidProductSlug => typeof slug === "string" && isPaidProductSlug(slug)),
    ),
  ];

  if (slugs.length === 0) return { granted: [] };

  const { data: existing, error: enrollLookupError } = await supabaseAdmin
    .from("enrollments")
    .select("product_slug")
    .eq("user_id", userId)
    .in("product_slug", slugs);

  if (enrollLookupError) {
    console.error("ensureEnrollmentsFromSuccessfulPayments: enrollments", enrollLookupError);
    return { granted: [] };
  }

  const owned = new Set((existing ?? []).map((e) => e.product_slug));
  const granted: string[] = [];

  for (const slug of slugs) {
    if (owned.has(slug)) continue;
    const product = PAID_PRODUCTS[slug];
    const result = await grantPaidEnrollment({ userId, product });
    if (result.ok) granted.push(slug);
  }

  return { granted };
}
