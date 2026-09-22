import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import {
  MONOBANK_CURRENCY_EUR,
  MONOBANK_TEST_CHARGE,
  PAID_PRODUCTS,
  isPaidProductSlug,
} from "@/lib/checkout-catalog";
import { lookupDiscountPromo } from "@/lib/promo.functions";

export type CheckoutResult =
  | { ok: true; pageUrl: string; invoiceId: string; amountEur: number }
  | { ok: false; error: string };

export type PaymentStatusResult =
  | {
      ok: true;
      status: string;
      paid: boolean;
      productSlug: string | null;
      productName: string | null;
      href: string | null;
      amountEur: number | null;
      enrolled: boolean;
      failureReason?: string;
    }
  | { ok: false; error: string };

export type SyncMyEnrollmentsResult = {
  ok: true;
  granted: string[];
};

const CheckoutInput = z.object({
  productSlug: z.string().min(1).max(64),
  promoCode: z.string().max(64).optional(),
});

const StatusInput = z.object({ invoiceId: z.string().min(1).max(128) });

function stripTrailingSlash(url: string): string {
  return url.replace(/\/$/, "");
}

/** Prefer the browser Origin so post-pay redirect returns to the same host the user is on. */
function browserOrigin(request: Request): string {
  const origin = request.headers.get("origin")?.trim();
  if (origin) return stripTrailingSlash(origin);
  const referer = request.headers.get("referer")?.trim();
  if (referer) {
    try {
      return stripTrailingSlash(new URL(referer).origin);
    } catch {
      // ignore
    }
  }
  return publicSiteOrigin(request);
}

/**
 * Stable public origin for Monobank webhooks (must be reachable from Monobank).
 * Falls back to the browser origin when PUBLIC_SITE_URL is unset.
 */
function publicSiteOrigin(request: Request): string {
  const envOrigin = process.env["PUBLIC_SITE_URL"]?.trim();
  if (envOrigin) return stripTrailingSlash(envOrigin);
  const origin = request.headers.get("origin")?.trim();
  if (origin) return stripTrailingSlash(origin);
  try {
    return stripTrailingSlash(new URL(request.url).origin);
  } catch {
    return "https://bbe-school.com";
  }
}

/** Creates a Monobank invoice and returns the hosted payment page URL. */
export const createCheckout = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => CheckoutInput.parse(d))
  .handler(async ({ context, data }): Promise<CheckoutResult> => {
    try {
      const slug = data.productSlug;
      if (!isPaidProductSlug(slug)) {
        return { ok: false, error: "Unknown product." };
      }
      const product = PAID_PRODUCTS[slug];

      let discountPct = 0;
      let appliedPromoCode: string | null = null;
      const rawPromo = (data.promoCode ?? "").trim();
      if (rawPromo) {
        const promo = await lookupDiscountPromo({
          code: rawPromo,
          productSlug: slug,
          userId: context.userId,
        });
        if (!promo.ok) {
          return { ok: false, error: promo.error };
        }
        discountPct = Math.max(0, Math.min(100, Number(promo.discountPct) || 0));
        appliedPromoCode = promo.code;
      }

      // Charge the catalog EUR price in minor units (cents). Promocode % still applies.
      // MONOBANK_TEST_CHARGE can force a fixed amount for acquiring tests when enabled.
      const baseMinor = Math.round(product.priceEur * 100);
      const discountedMinor = Math.max(1, Math.round(baseMinor * (1 - discountPct / 100)));
      const amountMinor = MONOBANK_TEST_CHARGE.enabled
        ? MONOBANK_TEST_CHARGE.amountMinor
        : discountedMinor;
      const currencyCode = MONOBANK_TEST_CHARGE.enabled
        ? MONOBANK_TEST_CHARGE.ccy
        : MONOBANK_CURRENCY_EUR;

      const { getRequest } = await import("@tanstack/react-start/server");
      const request = getRequest();
      // Return the buyer to the host they paid on; webhooks use a stable public URL.
      const returnOrigin = browserOrigin(request);
      const webhookOrigin = publicSiteOrigin(request);

      const { createMonoInvoice } = await import("@/lib/monobank.server");
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

      const reference = `${slug}:${context.userId}:${Date.now()}`;
      // Square black BBE logo reads cleanly in Monobank's small cart thumbnail
      // (course banners are landscape and get cropped badly there).
      const { invoiceId, pageUrl } = await createMonoInvoice({
        amountMinor,
        ccy: currencyCode,
        destination: product.name,
        reference,
        // Intermediate result page verifies status then sends users to /payment/success.
        redirectUrl: `${returnOrigin}/payment-result`,
        webHookUrl: `${webhookOrigin}/api/public/payment/webhook`,
        basketName: product.name,
        // Prefer the production host so Monobank can fetch the icon even from previews.
        basketIconUrl: "https://bbe-school.com/logo.png",
      });

      const email = typeof context.claims.email === "string" ? context.claims.email : null;
      const { error } = await supabaseAdmin.from("payments").insert({
        user_id: context.userId,
        user_email: email,
        product_slug: product.slug,
        product_name: product.name,
        tier: product.tier,
        invoice_id: invoiceId,
        amount_minor: amountMinor,
        currency_code: currencyCode,
        status: "created",
        page_url: pageUrl,
        ...(appliedPromoCode ? { promo_code: appliedPromoCode } : {}),
      });
      if (error) {
        console.error("createCheckout: payment insert", error);
        return { ok: false, error: "Could not start the payment. Try again." };
      }

      return {
        ok: true,
        pageUrl,
        invoiceId,
        amountEur: MONOBANK_TEST_CHARGE.enabled
          ? MONOBANK_TEST_CHARGE.amountMinor / 100
          : amountMinor / 100,
      };
    } catch (err) {
      console.error("createCheckout", err);
      const message = err instanceof Error ? err.message : "Could not start the payment.";
      return { ok: false, error: message };
    }
  });

/** Re-checks an invoice with Monobank and unlocks the course when it is paid. */
export const getPaymentStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => StatusInput.parse(d))
  .handler(async ({ context, data }): Promise<PaymentStatusResult> => {
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { data: row, error } = await supabaseAdmin
        .from("payments")
        .select("user_id, product_slug, product_name, amount_minor")
        .eq("invoice_id", data.invoiceId)
        .maybeSingle();

      if (error) console.error("getPaymentStatus lookup", error);
      if (!row || row.user_id !== context.userId) {
        return { ok: false, error: "Payment not found." };
      }

      const { syncInvoiceAndGrantAccess } = await import("@/lib/monobank.server");
      const result = await syncInvoiceAndGrantAccess(data.invoiceId);

      // Paid + enrolled is what unlocks Dashboard → My courses.
      const paid = result.status === "success" && result.enrolled;

      return {
        ok: true,
        status: result.status,
        paid,
        productSlug: row.product_slug,
        productName: row.product_name,
        href: result.href,
        amountEur: row.amount_minor / 100,
        enrolled: result.enrolled,
        ...(result.failureReason
          ? { failureReason: result.failureReason }
          : result.status === "success" && !result.enrolled
            ? { failureReason: "Payment succeeded but course access could not be unlocked. Contact support." }
            : {}),
      };
    } catch (err) {
      console.error("getPaymentStatus", err);
      return { ok: false, error: "Could not check the payment status." };
    }
  });

/**
 * Backfill enrollments from successful Monobank payments.
 * Dashboard calls this so purchased WiSo/BBE courses always appear under My courses.
 */
export const syncMyPaidEnrollments = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<SyncMyEnrollmentsResult> => {
    const { ensureEnrollmentsFromSuccessfulPayments } = await import(
      "@/lib/enrollment-grant.server"
    );
    const { granted } = await ensureEnrollmentsFromSuccessfulPayments(context.userId);
    return { ok: true, granted };
  });

/** Latest payments of the signed-in user (for the account/result screens). */
export const listMyPayments = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data } = await supabaseAdmin
      .from("payments")
      .select("invoice_id, product_name, amount_minor, status, created_at")
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false })
      .limit(10);
    return (data ?? []).map((p) => ({
      invoiceId: p.invoice_id,
      productName: p.product_name,
      amountEur: p.amount_minor / 100,
      status: p.status,
      createdAt: p.created_at,
    }));
  });
