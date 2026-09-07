import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { requireAdmin } from "@/lib/require-admin.server";
import { COURSE_CATALOG, type CourseSlug } from "@/lib/user-progress";
import { DISCOUNT_CODE, DISCOUNT_PCT, isPaidProductSlug } from "@/lib/checkout-catalog";

const MAX_ATTEMPTS_PER_IP = 10;
const ATTEMPT_WINDOW_MS = 24 * 60 * 60 * 1000;

const MIGRATION_HINT =
  "Promocode tables are missing in Supabase. Run supabase/migrations/20260829210000_promocodes.sql and supabase/migrations/20260907180000_discount_promocodes.sql in the Supabase SQL Editor, then reload.";

const RedeemInput = z.object({
  code: z.string().min(1).max(64),
});

const DiscountInput = z.object({
  code: z.string().min(1).max(64),
  productSlug: z.string().min(1).max(64).optional(),
});

export type PromoRedeemResult =
  | { ok: true; href: string }
  | { ok: false; error: string; rateLimited?: boolean };

export type DiscountValidateResult =
  | { ok: true; code: string; discountPct: number; name: string | null; expiresAt: string | null }
  | { ok: false; error: string };

export type AdminPromoUsage = {
  userId: string | null;
  userEmail: string | null;
  productSlug: string;
  createdAt: string;
};

export type AdminPromocodeRow = {
  id: string;
  code: string;
  name: string | null;
  kind: "unlock" | "discount";
  productSlug: string;
  discountPct: number | null;
  maxUses: number | null;
  expiresAt: string | null;
  usedAt: string | null;
  usedBy: string | null;
  usedByEmail: string | null;
  createdAt: string;
  useCount: number;
  usages: AdminPromoUsage[];
  status: "available" | "used" | "active" | "expired";
};

export type AdminPromocodesResult =
  | {
      ok: true;
      codes: AdminPromocodeRow[];
      available: number;
      used: number;
      activeDiscounts: number;
    }
  | { ok: false; error: string };

function normalizeCode(raw: string): string {
  return raw.trim().toUpperCase().replace(/\s+/g, "");
}

function clientIpFromHeaders(headers: Headers): string {
  const xf = headers.get("x-forwarded-for");
  if (xf) {
    const first = xf.split(",")[0]?.trim();
    if (first) return first.slice(0, 128);
  }
  for (const key of ["cf-connecting-ip", "x-real-ip", "x-vercel-forwarded-for"] as const) {
    const v = headers.get(key)?.trim();
    if (v) return v.slice(0, 128);
  }
  return "unknown";
}

function resolveCatalog(slug: string): { slug: CourseSlug; meta: (typeof COURSE_CATALOG)[CourseSlug] } {
  if (slug in COURSE_CATALOG) {
    const courseSlug = slug as CourseSlug;
    return { slug: courseSlug, meta: COURSE_CATALOG[courseSlug] };
  }
  return { slug: "full-course", meta: COURSE_CATALOG["full-course"] };
}

function isMissingRelationError(error: { message?: string; code?: string; details?: string } | null) {
  if (!error) return false;
  const blob = `${error.code ?? ""} ${error.message ?? ""} ${error.details ?? ""}`.toLowerCase();
  return (
    blob.includes("promocodes") ||
    blob.includes("promo_redeem_attempts") ||
    blob.includes("promo_usages") ||
    blob.includes("pgrst205") ||
    blob.includes("does not exist") ||
    blob.includes("schema cache")
  );
}

function errorMessage(error: unknown, fallback: string): string {
  if (!error) return fallback;
  if (typeof error === "string") return error;
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "object" && error !== null && "message" in error) {
    const msg = (error as { message?: unknown }).message;
    if (typeof msg === "string" && msg.trim()) return msg;
  }
  return fallback;
}

function isExpired(expiresAt: string | null | undefined): boolean {
  if (!expiresAt) return false;
  return new Date(expiresAt).getTime() < Date.now();
}

/** Resolve a live discount promocode (DB first, legacy hardcoded fallback). */
export async function lookupDiscountPromo(input: {
  code: string;
  productSlug?: string;
}): Promise<DiscountValidateResult> {
  const code = normalizeCode(input.code);
  if (!code) return { ok: false, error: "Enter a promocode." };

  if (input.productSlug && !isPaidProductSlug(input.productSlug) && input.productSlug !== "any-paid") {
    return { ok: false, error: "This promocode does not apply to this course." };
  }

  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin
      .from("promocodes")
      .select("id, code, name, kind, discount_pct, max_uses, expires_at, product_slug")
      .eq("code", code)
      .maybeSingle();

    if (error) {
      if (isMissingRelationError(error)) {
        // Migration not applied yet — fall through to legacy hardcoded code.
      } else {
        console.error("lookupDiscountPromo", error);
        return { ok: false, error: "Could not verify promocode. Try again." };
      }
    } else if (data) {
      if (data.kind !== "discount") {
        return { ok: false, error: "This promocode unlocks access — redeem it in the Promo tab." };
      }
      if (isExpired(data.expires_at)) {
        return { ok: false, error: "This promocode has expired." };
      }
      const pct = data.discount_pct ?? DISCOUNT_PCT;
      if (!pct || pct <= 0) {
        return { ok: false, error: "This promocode is invalid." };
      }
      if (data.max_uses != null) {
        const { count, error: countError } = await supabaseAdmin
          .from("promo_usages")
          .select("id", { count: "exact", head: true })
          .eq("promocode_id", data.id);
        if (countError) {
          console.error("lookupDiscountPromo count", countError);
          return { ok: false, error: "Could not verify promocode. Try again." };
        }
        if ((count ?? 0) >= data.max_uses) {
          return { ok: false, error: "This promocode has reached its use limit." };
        }
      }
      const applies =
        !data.product_slug ||
        data.product_slug === "any-paid" ||
        !input.productSlug ||
        data.product_slug === input.productSlug;
      if (!applies) {
        return { ok: false, error: "This promocode does not apply to this course." };
      }
      return {
        ok: true,
        code: data.code,
        discountPct: pct,
        name: data.name,
        expiresAt: data.expires_at,
      };
    }
  } catch (err) {
    console.error("lookupDiscountPromo", err);
  }

  // Legacy hardcoded discount (pre-migration / backwards compatible).
  if (code === normalizeCode(DISCOUNT_CODE)) {
    return {
      ok: true,
      code: normalizeCode(DISCOUNT_CODE),
      discountPct: DISCOUNT_PCT,
      name: "BBE 15% · Legacy",
      expiresAt: null,
    };
  }

  return { ok: false, error: "This promocode is invalid or has already been used." };
}

export async function recordPromoUsage(input: {
  code: string;
  userId: string;
  userEmail: string | null;
  productSlug: string;
  paymentId: string;
}): Promise<void> {
  const code = normalizeCode(input.code);
  if (!code) return;

  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: promo } = await supabaseAdmin
      .from("promocodes")
      .select("id, kind")
      .eq("code", code)
      .maybeSingle();

    if (!promo || promo.kind !== "discount") return;

    const { data: existing } = await supabaseAdmin
      .from("promo_usages")
      .select("id")
      .eq("payment_id", input.paymentId)
      .maybeSingle();
    if (existing) return;

    const { error } = await supabaseAdmin.from("promo_usages").insert({
      promocode_id: promo.id,
      code,
      user_id: input.userId,
      user_email: input.userEmail,
      product_slug: input.productSlug,
      payment_id: input.paymentId,
    });
    if (error && !/duplicate|unique/i.test(error.message ?? "")) {
      console.error("recordPromoUsage", error);
    }
  } catch (err) {
    console.error("recordPromoUsage", err);
  }
}

export const validateDiscountCode = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => DiscountInput.parse(d))
  .handler(async ({ data }): Promise<DiscountValidateResult> => {
    return lookupDiscountPromo({
      code: data.code,
      productSlug: data.productSlug,
    });
  });

export const redeemPromocode = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => RedeemInput.parse(d))
  .handler(async ({ context, data }): Promise<PromoRedeemResult> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    // Dynamic import keeps this module safe to import from client components.
    const { getRequest } = await import("@tanstack/react-start/server");
    const request = getRequest();
    const ip = clientIpFromHeaders(request.headers);
    const code = normalizeCode(data.code);
    const userId = context.userId;
    const email =
      typeof context.claims.email === "string" ? context.claims.email : null;

    const since = new Date(Date.now() - ATTEMPT_WINDOW_MS).toISOString();
    const { count, error: countError } = await supabaseAdmin
      .from("promo_redeem_attempts")
      .select("id", { count: "exact", head: true })
      .eq("ip_address", ip)
      .gte("created_at", since);

    if (countError) {
      console.error("promo rate count", countError);
      if (isMissingRelationError(countError)) {
        return { ok: false, error: MIGRATION_HINT };
      }
      return { ok: false, error: "Could not verify promocode. Try again." };
    }

    if ((count ?? 0) >= MAX_ATTEMPTS_PER_IP) {
      return {
        ok: false,
        error: "Too many promocode attempts from this network. Try again in 24 hours.",
        rateLimited: true,
      };
    }

    const { data: attemptRow, error: attemptError } = await supabaseAdmin
      .from("promo_redeem_attempts")
      .insert({
        ip_address: ip,
        code_attempted: code.slice(0, 64),
        success: false,
        user_id: userId,
      })
      .select("id")
      .single();

    if (attemptError || !attemptRow) {
      console.error("promo attempt insert", attemptError);
      if (isMissingRelationError(attemptError)) {
        return { ok: false, error: MIGRATION_HINT };
      }
      return { ok: false, error: "Could not verify promocode. Try again." };
    }

    if (!code) {
      return { ok: false, error: "Enter a promocode." };
    }

    // Discount codes are applied at checkout, not as free unlocks.
    const discount = await lookupDiscountPromo({ code });
    if (discount.ok) {
      return {
        ok: false,
        error: `This code gives ${discount.discountPct}% off — apply it in the Card tab before paying.`,
      };
    }

    const usedAt = new Date().toISOString();
    const { data: claimed, error: claimError } = await supabaseAdmin
      .from("promocodes")
      .update({
        used_at: usedAt,
        used_by: userId,
        used_by_email: email,
      })
      .eq("code", code)
      .eq("kind", "unlock")
      .is("used_at", null)
      .select("id, code, product_slug")
      .maybeSingle();

    if (claimError) {
      console.error("promo claim", claimError);
      if (isMissingRelationError(claimError)) {
        return { ok: false, error: MIGRATION_HINT };
      }
      // Pre-migration schemas have no `kind` column — retry without kind filter.
      const { data: claimedLegacy, error: legacyError } = await supabaseAdmin
        .from("promocodes")
        .update({
          used_at: usedAt,
          used_by: userId,
          used_by_email: email,
        })
        .eq("code", code)
        .is("used_at", null)
        .select("id, code, product_slug")
        .maybeSingle();
      if (legacyError) {
        return { ok: false, error: "Could not verify promocode. Try again." };
      }
      if (!claimedLegacy) {
        return {
          ok: false,
          error: "This promocode is invalid or has already been used.",
        };
      }
      return await enrollFromClaim(supabaseAdmin, claimedLegacy, userId, attemptRow.id);
    }

    if (!claimed) {
      return {
        ok: false,
        error: "This promocode is invalid or has already been used.",
      };
    }

    return await enrollFromClaim(supabaseAdmin, claimed, userId, attemptRow.id);
  });

async function enrollFromClaim(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabaseAdmin: any,
  claimed: { id: string; code: string; product_slug: string },
  userId: string,
  attemptId: string,
): Promise<PromoRedeemResult> {
  const { slug, meta } = resolveCatalog(claimed.product_slug);

  const { error: enrollError } = await supabaseAdmin.from("enrollments").upsert(
    {
      user_id: userId,
      product_slug: slug,
      product_name: meta.name,
      tier: meta.tier,
    },
    { onConflict: "user_id,product_slug" },
  );

  if (enrollError) {
    console.error("promo enroll", enrollError);
    await supabaseAdmin
      .from("promocodes")
      .update({ used_at: null, used_by: null, used_by_email: null })
      .eq("id", claimed.id);
    return { ok: false, error: "Could not unlock access. Try again." };
  }

  await supabaseAdmin
    .from("promo_redeem_attempts")
    .update({ success: true })
    .eq("id", attemptId);

  return { ok: true, href: meta.href };
}

export const adminListPromocodes = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async ({ context }): Promise<AdminPromocodesResult> => {
    const db = context.supabaseAdmin;
    const { data, error } = await db
      .from("promocodes")
      .select(
        "id, code, name, kind, discount_pct, max_uses, expires_at, product_slug, used_at, used_by, used_by_email, created_at",
      )
      .order("kind", { ascending: true })
      .order("code", { ascending: true });

    if (error) {
      console.error("adminListPromocodes", error);
      if (isMissingRelationError(error)) {
        return { ok: false, error: MIGRATION_HINT };
      }
      return { ok: false, error: errorMessage(error, "Failed to load promocodes") };
    }

    const ids = (data ?? []).map((r) => r.id);
    const usagesByPromo = new Map<string, AdminPromoUsage[]>();

    if (ids.length > 0) {
      const { data: usageRows, error: usageError } = await db
        .from("promo_usages")
        .select("promocode_id, user_id, user_email, product_slug, created_at")
        .in("promocode_id", ids)
        .order("created_at", { ascending: false });

      if (usageError && !isMissingRelationError(usageError)) {
        console.error("adminListPromocodes usages", usageError);
      }

      for (const row of usageRows ?? []) {
        const list = usagesByPromo.get(row.promocode_id) ?? [];
        list.push({
          userId: row.user_id,
          userEmail: row.user_email,
          productSlug: row.product_slug,
          createdAt: row.created_at,
        });
        usagesByPromo.set(row.promocode_id, list);
      }
    }

    const codes: AdminPromocodeRow[] = (data ?? []).map((row) => {
      const kind = row.kind === "discount" ? "discount" : "unlock";
      const usages = usagesByPromo.get(row.id) ?? [];
      const useCount =
        kind === "discount"
          ? usages.length
          : row.used_at
            ? 1
            : 0;

      let status: AdminPromocodeRow["status"];
      if (kind === "discount") {
        status = isExpired(row.expires_at) ? "expired" : "active";
      } else {
        status = row.used_at ? "used" : "available";
      }

      // Surface one-time unlock redeemers in the same usages shape for the admin table.
      if (kind === "unlock" && row.used_at) {
        usages.push({
          userId: row.used_by,
          userEmail: row.used_by_email,
          productSlug: row.product_slug,
          createdAt: row.used_at,
        });
      }

      return {
        id: row.id,
        code: row.code,
        name: row.name ?? row.code,
        kind,
        productSlug: row.product_slug,
        discountPct: row.discount_pct,
        maxUses: row.max_uses,
        expiresAt: row.expires_at,
        usedAt: row.used_at,
        usedBy: row.used_by,
        usedByEmail: row.used_by_email,
        createdAt: row.created_at,
        useCount: kind === "unlock" ? (row.used_at ? 1 : 0) : useCount,
        usages,
        status,
      };
    });

    const used = codes.filter((c) => c.kind === "unlock" && c.status === "used").length;
    const available = codes.filter((c) => c.kind === "unlock" && c.status === "available").length;
    const activeDiscounts = codes.filter((c) => c.kind === "discount" && c.status === "active").length;
    return { ok: true, codes, available, used, activeDiscounts };
  });
