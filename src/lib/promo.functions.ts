import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { requireAdmin } from "@/lib/require-admin.server";
import { COURSE_CATALOG, type CourseSlug } from "@/lib/user-progress";
import {
  DISCOUNT_CODE,
  DISCOUNT_PCT,
  HARDCODED_DISCOUNT_PROMOS,
  isPaidProductSlug,
} from "@/lib/checkout-catalog";

const MAX_ATTEMPTS_PER_IP = 10;
const ATTEMPT_WINDOW_MS = 24 * 60 * 60 * 1000;

const MIGRATION_HINT =
  "Promocode tables missing/outdated in Supabase. Run supabase/migrations/20260908121000_promocodes_bootstrap_30_full.sql in the Supabase/Lovable SQL Editor, then reload.";

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
    blob.includes("user_discount_claims") ||
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
  /** Same user who already claimed a single-use code may keep using their sticky price. */
  userId?: string;
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
      .select("id, code, name, kind, discount_pct, max_uses, expires_at, product_slug, used_at, used_by")
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
        return { ok: false, error: "Unlock promocodes are no longer supported. Use a 15% discount code at checkout." };
      }
      // 15% discount codes are single-use: used_at means another account already claimed it.
      if (data.used_at && data.used_by !== input.userId) {
        return { ok: false, error: "This promocode has already been used." };
      }

      if (isExpired(data.expires_at)) {
        return { ok: false, error: "This promocode has expired." };
      }
      const pct = data.discount_pct ?? DISCOUNT_PCT;
      if (!pct || pct <= 0) {
        return { ok: false, error: "This promocode is invalid." };
      }
      // Single-use by default (max_uses null → 1). Same claiming user is allowed above via used_by.
      const maxUses = data.max_uses == null ? 1 : data.max_uses;
      if (maxUses > 0 && !(data.used_at && data.used_by === input.userId)) {
        const { count, error: countError } = await supabaseAdmin
          .from("promo_usages")
          .select("id", { count: "exact", head: true })
          .eq("promocode_id", data.id);
        if (countError) {
          console.error("lookupDiscountPromo count", countError);
          return { ok: false, error: "Could not verify promocode. Try again." };
        }
        if ((count ?? 0) >= maxUses) {
          return { ok: false, error: "This promocode has already been used." };
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

  // Hardcoded discounts (pre-migration / when DB table is missing).
  const hardcoded = HARDCODED_DISCOUNT_PROMOS.find((p) => normalizeCode(p.code) === code);
  if (hardcoded) {
    if (isExpired(hardcoded.expiresAt)) {
      return { ok: false, error: "This promocode has expired." };
    }
    const applies =
      hardcoded.productSlug === "any-paid" ||
      !input.productSlug ||
      hardcoded.productSlug === input.productSlug;
    if (!applies) {
      return { ok: false, error: "This promocode does not apply to this course." };
    }
    return {
      ok: true,
      code: normalizeCode(hardcoded.code),
      discountPct: hardcoded.discountPct,
      name: hardcoded.name,
      expiresAt: hardcoded.expiresAt,
    };
  }

  // Keep single-code legacy alias (mixed case in older UI copy).
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

// On Apply: bind sticky discount forever on this account and consume the code
// globally (15% codes are single-use). Unlock/full-course free codes are removed.

export type MyDiscountClaimResult =
  | { ok: true; code: string; discountPct: number }
  | { ok: false };

async function resolvePromoRowForClaim(code: string): Promise<{
  id: string | null;
  code: string;
  discountPct: number;
} | null> {
  const normalized = normalizeCode(code);
  const looked = await lookupDiscountPromo({ code: normalized });
  if (!looked.ok) return null;

  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data } = await supabaseAdmin
      .from("promocodes")
      .select("id")
      .eq("code", looked.code)
      .eq("kind", "discount")
      .maybeSingle();
    return { id: data?.id ?? null, code: looked.code, discountPct: looked.discountPct };
  } catch {
    return { id: null, code: looked.code, discountPct: looked.discountPct };
  }
}

/** Persist sticky discount for this user and mark the code used on this account. */
export async function claimDiscountForUser(input: {
  code: string;
  userId: string;
  userEmail: string | null;
  productSlug?: string;
}): Promise<DiscountValidateResult> {
  const validated = await lookupDiscountPromo({
    code: input.code,
    productSlug: input.productSlug,
    userId: input.userId,
  });
  if (!validated.ok) return validated;

  const row = await resolvePromoRowForClaim(validated.code);
  if (!row) return validated;

  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const usedAt = new Date().toISOString();

    // Consume the code globally (single-use). Same user may re-apply their own claim.
    if (row.id) {
      const { data: consumed, error: consumeError } = await supabaseAdmin
        .from("promocodes")
        .update({
          used_at: usedAt,
          used_by: input.userId,
          used_by_email: input.userEmail,
        })
        .eq("id", row.id)
        .eq("kind", "discount")
        .is("used_at", null)
        .select("id")
        .maybeSingle();

      if (consumeError && !isMissingRelationError(consumeError)) {
        console.error("claimDiscountForUser consume", consumeError);
        return { ok: false, error: "Could not apply promocode. Try again." };
      }

      if (!consumed) {
        const { data: existing } = await supabaseAdmin
          .from("promocodes")
          .select("used_by")
          .eq("id", row.id)
          .maybeSingle();
        if (existing?.used_by && existing.used_by !== input.userId) {
          return { ok: false, error: "This promocode has already been used." };
        }
      }
    }

    // Sticky forever price on this account (one claim per user).
    const { error: claimError } = await supabaseAdmin.from("user_discount_claims").upsert(
      {
        user_id: input.userId,
        promocode_id: row.id,
        code: row.code,
        discount_pct: row.discountPct,
        claimed_at: usedAt,
      },
      { onConflict: "user_id" },
    );
    if (claimError && !isMissingRelationError(claimError)) {
      console.error("claimDiscountForUser claim", claimError);
      return { ok: false, error: "Could not apply promocode. Try again." };
    }

    if (row.id) {
      const { data: existingUsage } = await supabaseAdmin
        .from("promo_usages")
        .select("id, payment_id")
        .eq("user_id", input.userId)
        .eq("code", row.code)
        .maybeSingle();

      if (!existingUsage) {
        const { error: usageError } = await supabaseAdmin.from("promo_usages").insert({
          promocode_id: row.id,
          code: row.code,
          user_id: input.userId,
          user_email: input.userEmail,
          product_slug: input.productSlug ?? "any-paid",
          payment_id: null,
        });
        if (usageError && !/duplicate|unique/i.test(usageError.message ?? "")) {
          console.error("claimDiscountForUser usage", usageError);
        }
      }
    }
  } catch (err) {
    console.error("claimDiscountForUser", err);
  }

  return validated;
}

export async function getUserDiscountClaim(userId: string): Promise<MyDiscountClaimResult> {
  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin
      .from("user_discount_claims")
      .select("code, discount_pct")
      .eq("user_id", userId)
      .maybeSingle();
    if (error) {
      if (!isMissingRelationError(error)) console.error("getUserDiscountClaim", error);
      return { ok: false };
    }
    if (!data?.code || !data.discount_pct) return { ok: false };
    return { ok: true, code: data.code, discountPct: data.discount_pct };
  } catch (err) {
    console.error("getUserDiscountClaim", err);
    return { ok: false };
  }
}

export async function recordPromoUsage(input: {
  code: string;
  userId: string;
  userEmail: string | null;
  productSlug: string;
  paymentId: string;
}): Promise<void> {
  // Attach payment_id to the Apply-time usage row, or insert if missing.
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

    const { data: byPayment } = await supabaseAdmin
      .from("promo_usages")
      .select("id")
      .eq("payment_id", input.paymentId)
      .maybeSingle();
    if (byPayment) return;

    const { data: byUser } = await supabaseAdmin
      .from("promo_usages")
      .select("id, payment_id")
      .eq("user_id", input.userId)
      .eq("code", code)
      .maybeSingle();

    if (byUser && !byUser.payment_id) {
      const { error } = await supabaseAdmin
        .from("promo_usages")
        .update({ payment_id: input.paymentId, product_slug: input.productSlug })
        .eq("id", byUser.id);
      if (error) console.error("recordPromoUsage update", error);
      return;
    }

    if (byUser?.payment_id) return;

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
  .handler(async ({ context, data }): Promise<DiscountValidateResult> => {
    // Apply = sticky new price on this account forever + mark used for this user.
    const email =
      typeof context.claims.email === "string" ? context.claims.email : null;
    return await claimDiscountForUser({
      code: data.code,
      userId: context.userId,
      userEmail: email,
      productSlug: data.productSlug,
    });
  });

export const getMyDiscountClaim = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<MyDiscountClaimResult> => {
    return await getUserDiscountClaim(context.userId);
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

    // Unlock / free full-course codes are removed. Only 15% checkout discounts remain.
    const discount = await lookupDiscountPromo({ code, userId });
    if (discount.ok) {
      return {
        ok: false,
        error: `This code gives ${discount.discountPct}% off — apply it in the Card tab before paying.`,
      };
    }

    return {
      ok: false,
      error: "Unlock promocodes are no longer available. Use a 15% discount code at checkout.",
    };
  });

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

    const hardcodedRows = (): AdminPromocodeRow[] =>
      HARDCODED_DISCOUNT_PROMOS.map((p) => ({
        id: `hardcoded-${normalizeCode(p.code)}`,
        code: normalizeCode(p.code),
        name: p.name,
        kind: "discount" as const,
        productSlug: p.productSlug,
        discountPct: p.discountPct,
        maxUses: null,
        expiresAt: p.expiresAt,
        usedAt: null,
        usedBy: null,
        usedByEmail: null,
        createdAt: new Date(0).toISOString(),
        useCount: 0,
        usages: [],
        status: isExpired(p.expiresAt) ? ("expired" as const) : ("active" as const),
      }));

    if (error) {
      console.error("adminListPromocodes", error);
      if (isMissingRelationError(error)) {
        // Table missing: still surface hardcoded active discount codes so admin isn't empty.
        const codes = hardcodedRows();
        return {
          ok: true,
          codes,
          available: 0,
          used: 0,
          activeDiscounts: codes.filter((c) => c.status === "active").length,
        };
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
        // 15% codes are single-use: used_at or usage count marks them used.
        const maxUses = row.max_uses == null ? 1 : row.max_uses;
        if (row.used_at || usages.length >= maxUses) status = "used";
        else if (isExpired(row.expires_at)) status = "expired";
        else status = "active";
      } else {
        status = row.used_at ? "used" : "available";
      }

      // Surface one-time unlock redeemers in the usages shape.
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

    // Merge hardcoded discounts that are not yet present in DB.
    const existing = new Set(codes.map((c) => normalizeCode(c.code)));
    for (const row of hardcodedRows()) {
      if (!existing.has(normalizeCode(row.code))) {
        codes.push(row);
      }
    }
    codes.sort((a, b) => {
      if (a.kind !== b.kind) return a.kind < b.kind ? -1 : 1;
      return a.code.localeCompare(b.code);
    });

    // Unlock/full-course free codes are retired — only show discount codes.
    const discountCodes = codes.filter((c) => c.kind === "discount");
    const used = discountCodes.filter((c) => c.status === "used").length;
    const available = discountCodes.filter((c) => c.status === "active").length;
    const activeDiscounts = available;
    return { ok: true, codes: discountCodes, available, used, activeDiscounts };
  });
