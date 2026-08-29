import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { requireAdmin } from "@/lib/require-admin.server";
import { COURSE_CATALOG, type CourseSlug } from "@/lib/user-progress";

const MAX_ATTEMPTS_PER_IP = 10;
const ATTEMPT_WINDOW_MS = 24 * 60 * 60 * 1000;

const RedeemInput = z.object({
  code: z.string().min(1).max(64),
});

export type PromoRedeemResult =
  | { ok: true; href: string }
  | { ok: false; error: string; rateLimited?: boolean };

export type AdminPromocodeRow = {
  id: string;
  code: string;
  productSlug: string;
  usedAt: string | null;
  usedBy: string | null;
  usedByEmail: string | null;
  createdAt: string;
  status: "available" | "used";
};

function normalizeCode(raw: string): string {
  return raw.trim().toUpperCase().replace(/\s+/g, "");
}

function clientIp(request: Request): string {
  const xf = request.headers.get("x-forwarded-for");
  if (xf) {
    const first = xf.split(",")[0]?.trim();
    if (first) return first.slice(0, 128);
  }
  for (const key of ["cf-connecting-ip", "x-real-ip", "x-vercel-forwarded-for"] as const) {
    const v = request.headers.get(key)?.trim();
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

export const redeemPromocode = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => RedeemInput.parse(d))
  .handler(async ({ context, data }): Promise<PromoRedeemResult> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const request = getRequest();
    const ip = clientIp(request);
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
      return { ok: false, error: "Could not verify promocode. Try again." };
    }

    if (!code) {
      return { ok: false, error: "Enter a promocode." };
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
      .is("used_at", null)
      .select("id, code, product_slug")
      .maybeSingle();

    if (claimError) {
      console.error("promo claim", claimError);
      return { ok: false, error: "Could not verify promocode. Try again." };
    }

    if (!claimed) {
      return {
        ok: false,
        error: "This promocode is invalid or has already been used.",
      };
    }

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
      .eq("id", attemptRow.id);

    return { ok: true, href: meta.href };
  });

export const adminListPromocodes = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async ({ context }): Promise<{
    codes: AdminPromocodeRow[];
    available: number;
    used: number;
  }> => {
    const db = context.supabaseAdmin;
    const { data, error } = await db
      .from("promocodes")
      .select("id, code, product_slug, used_at, used_by, used_by_email, created_at")
      .order("code", { ascending: true });

    if (error) throw error;

    const codes: AdminPromocodeRow[] = (data ?? []).map((row) => ({
      id: row.id,
      code: row.code,
      productSlug: row.product_slug,
      usedAt: row.used_at,
      usedBy: row.used_by,
      usedByEmail: row.used_by_email,
      createdAt: row.created_at,
      status: row.used_at ? "used" : "available",
    }));

    const used = codes.filter((c) => c.status === "used").length;
    return { codes, available: codes.length - used, used };
  });
