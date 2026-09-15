import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import {
  MONOBANK_CURRENCY_EUR,
  MONOBANK_CURRENCY_UAH,
  MONOBANK_TEST_CHARGE,
  PAID_PRODUCTS,
  isPaidProductSlug,
} from "@/lib/checkout-catalog";
import { lookupDiscountPromo } from "@/lib/promo.functions";

export type CheckoutResult =
  | { ok: true; pageUrl: string; invoiceId: string; amountEur: number }
  | { ok: false; error: string };

export type WalletPayConfigResult =
  | {
      ok: true;
      amountMinor: number;
      /** Decimal string for Google/Apple Pay, e.g. "100.00". */
      totalPrice: string;
      currencyCode: "UAH" | "EUR";
      ccy: number;
      countryCode: string;
      merchantName: string;
      googleGatewayMerchantId: string;
      appleMerchantId: string | null;
      applePayReady: boolean;
      label: string;
    }
  | { ok: false; error: string };

export type WalletPayResult =
  | {
      ok: true;
      invoiceId: string;
      status: string;
      paid: boolean;
      tdsUrl?: string;
      href?: string | null;
    }
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
      failureReason?: string;
    }
  | { ok: false; error: string };

const CheckoutInput = z.object({
  productSlug: z.string().min(1).max(64),
  promoCode: z.string().max(64).optional(),
});

const WalletConfigInput = z.object({
  productSlug: z.string().min(1).max(64),
  promoCode: z.string().max(64).optional(),
});

const WalletPayInput = z.object({
  productSlug: z.string().min(1).max(64),
  promoCode: z.string().max(64).optional(),
  wallet: z.enum(["apple", "google"]),
  /** Raw wallet token JSON from Apple Pay or Google Pay. */
  token: z.string().min(8).max(200_000),
});

const AppleValidateInput = z.object({
  validationURL: z.string().url().max(2048),
});

const StatusInput = z.object({ invoiceId: z.string().min(1).max(128) });

function siteOrigin(request: Request): string {
  const envOrigin = process.env["PUBLIC_SITE_URL"]?.trim();
  if (envOrigin) return envOrigin.replace(/\/$/, "");
  const origin = request.headers.get("origin");
  if (origin) return origin.replace(/\/$/, "");
  try {
    return new URL(request.url).origin;
  } catch {
    return "https://bbe-school.com";
  }
}

function formatTotalPrice(amountMinor: number): string {
  return (amountMinor / 100).toFixed(2);
}

async function resolveChargeAmount(input: {
  productSlug: string;
  promoCode?: string;
  userId: string;
}): Promise<
  | {
      ok: true;
      product: (typeof PAID_PRODUCTS)[keyof typeof PAID_PRODUCTS];
      amountMinor: number;
      currencyCode: number;
      appliedPromoCode: string | null;
    }
  | { ok: false; error: string }
> {
  const slug = input.productSlug;
  if (!isPaidProductSlug(slug)) {
    return { ok: false, error: "Unknown product." };
  }
  const product = PAID_PRODUCTS[slug];

  let discountPct = 0;
  let appliedPromoCode: string | null = null;
  const rawPromo = (input.promoCode ?? "").trim();
  if (rawPromo) {
    const promo = await lookupDiscountPromo({
      code: rawPromo,
      productSlug: slug,
      userId: input.userId,
    });
    if (!promo.ok) {
      return { ok: false, error: promo.error };
    }
    discountPct = Math.max(0, Math.min(100, Number(promo.discountPct) || 0));
    appliedPromoCode = promo.code;
  }

  const baseMinor = Math.round(product.priceEur * 100);
  const discountedMinor = Math.max(1, Math.round(baseMinor * (1 - discountPct / 100)));
  const amountMinor = MONOBANK_TEST_CHARGE.enabled
    ? MONOBANK_TEST_CHARGE.amountMinor
    : discountedMinor;
  const currencyCode = MONOBANK_TEST_CHARGE.enabled
    ? MONOBANK_TEST_CHARGE.ccy
    : MONOBANK_CURRENCY_EUR;

  return { ok: true, product, amountMinor, currencyCode, appliedPromoCode };
}

/** Creates a Monobank invoice and returns the hosted payment page URL. */
export const createCheckout = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => CheckoutInput.parse(d))
  .handler(async ({ context, data }): Promise<CheckoutResult> => {
    try {
      const charge = await resolveChargeAmount({
        productSlug: data.productSlug,
        promoCode: data.promoCode,
        userId: context.userId,
      });
      if (!charge.ok) return charge;
      const { product, amountMinor, currencyCode, appliedPromoCode } = charge;

      const { getRequest } = await import("@tanstack/react-start/server");
      const request = getRequest();
      const origin = siteOrigin(request);

      const { createMonoInvoice } = await import("@/lib/monobank.server");
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

      const reference = `${product.slug}:${context.userId}:${Date.now()}`;
      // Square black BBE logo reads cleanly in Monobank's small cart thumbnail
      // (course banners are landscape and get cropped badly there).
      const { invoiceId, pageUrl } = await createMonoInvoice({
        amountMinor,
        ccy: currencyCode,
        destination: product.name,
        reference,
        redirectUrl: `${origin}/payment-result`,
        webHookUrl: `${origin}/api/public/payment/webhook`,
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

/** Public wallet button config (amount, Google gateway id, Apple merchant id). */
export const getWalletPayConfig = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => WalletConfigInput.parse(d))
  .handler(async ({ context, data }): Promise<WalletPayConfigResult> => {
    try {
      const charge = await resolveChargeAmount({
        productSlug: data.productSlug,
        promoCode: data.promoCode,
        userId: context.userId,
      });
      if (!charge.ok) return charge;

      const { resolveGoogleGatewayMerchantId } = await import("@/lib/monobank.server");
      const { applePayConfigured, applePayMerchantId } = await import("@/lib/apple-pay.server");
      const google = await resolveGoogleGatewayMerchantId();

      const isUah = charge.currencyCode === MONOBANK_CURRENCY_UAH;
      return {
        ok: true,
        amountMinor: charge.amountMinor,
        totalPrice: formatTotalPrice(charge.amountMinor),
        currencyCode: isUah ? "UAH" : "EUR",
        ccy: charge.currencyCode,
        countryCode: isUah ? "UA" : "AT",
        merchantName: google.merchantName || "BBE School",
        googleGatewayMerchantId: google.gatewayMerchantId,
        appleMerchantId: applePayMerchantId(),
        applePayReady: applePayConfigured(),
        label: MONOBANK_TEST_CHARGE.enabled
          ? MONOBANK_TEST_CHARGE.label
          : `€${formatTotalPrice(charge.amountMinor)}`,
      };
    } catch (err) {
      console.error("getWalletPayConfig", err);
      const message = err instanceof Error ? err.message : "Could not load wallet payment.";
      return { ok: false, error: message };
    }
  });

/** Completes a native Apple Pay / Google Pay charge via Monobank wallet/payment. */
export const completeWalletPayment = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => WalletPayInput.parse(d))
  .handler(async ({ context, data }): Promise<WalletPayResult> => {
    try {
      const charge = await resolveChargeAmount({
        productSlug: data.productSlug,
        promoCode: data.promoCode,
        userId: context.userId,
      });
      if (!charge.ok) return charge;
      const { product, amountMinor, currencyCode, appliedPromoCode } = charge;

      const { getRequest } = await import("@tanstack/react-start/server");
      const request = getRequest();
      const origin = siteOrigin(request);

      const { createMonoWalletPayment } = await import("@/lib/monobank.server");
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

      const reference = `${product.slug}:${context.userId}:${Date.now()}`;
      const walletResult = await createMonoWalletPayment({
        amountMinor,
        ccy: currencyCode,
        destination: product.name,
        reference,
        redirectUrl: `${origin}/payment-result`,
        webHookUrl: `${origin}/api/public/payment/webhook`,
        ...(data.wallet === "apple"
          ? { aToken: data.token }
          : { gToken: data.token }),
      });

      if (walletResult.failureReason && walletResult.status === "failure") {
        return { ok: false, error: walletResult.failureReason };
      }

      const email = typeof context.claims.email === "string" ? context.claims.email : null;
      const { error } = await supabaseAdmin.from("payments").insert({
        user_id: context.userId,
        user_email: email,
        product_slug: product.slug,
        product_name: product.name,
        tier: product.tier,
        invoice_id: walletResult.invoiceId,
        amount_minor: amountMinor,
        currency_code: currencyCode,
        status: walletResult.status,
        page_url: walletResult.tdsUrl ?? null,
        ...(appliedPromoCode ? { promo_code: appliedPromoCode } : {}),
      });
      if (error) {
        console.error("completeWalletPayment: payment insert", error);
        return { ok: false, error: "Could not record the payment. Try again." };
      }

      if (walletResult.status === "success") {
        const { syncInvoiceAndGrantAccess } = await import("@/lib/monobank.server");
        const synced = await syncInvoiceAndGrantAccess(walletResult.invoiceId);
        return {
          ok: true,
          invoiceId: walletResult.invoiceId,
          status: synced.status,
          paid: synced.status === "success",
          href: synced.href,
        };
      }

      return {
        ok: true,
        invoiceId: walletResult.invoiceId,
        status: walletResult.status,
        paid: false,
        ...(walletResult.tdsUrl ? { tdsUrl: walletResult.tdsUrl } : {}),
        href: product.href,
      };
    } catch (err) {
      console.error("completeWalletPayment", err);
      const message = err instanceof Error ? err.message : "Could not complete the wallet payment.";
      return { ok: false, error: message };
    }
  });

/** Apple Pay onvalidatemerchant → Apple merchant session. */
export const validateApplePayMerchantSession = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => AppleValidateInput.parse(d))
  .handler(async ({ data }): Promise<
    { ok: true; sessionJson: string } | { ok: false; error: string }
  > => {
    try {
      const { getRequest } = await import("@tanstack/react-start/server");
      const request = getRequest();
      const origin = siteOrigin(request);
      const { validateApplePayMerchant } = await import("@/lib/apple-pay.server");
      const session = await validateApplePayMerchant({
        validationURL: data.validationURL,
        displayName: "BBE School",
        initiativeContext: origin,
      });
      return { ok: true, sessionJson: JSON.stringify(session) };
    } catch (err) {
      console.error("validateApplePayMerchantSession", err);
      const message =
        err instanceof Error ? err.message : "Apple Pay merchant validation failed.";
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

      return {
        ok: true,
        status: result.status,
        paid: result.status === "success",
        productSlug: row.product_slug,
        productName: row.product_name,
        href: result.href,
        amountEur: row.amount_minor / 100,
        ...(result.failureReason ? { failureReason: result.failureReason } : {}),
      };
    } catch (err) {
      console.error("getPaymentStatus", err);
      return { ok: false, error: "Could not check the payment status." };
    }
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
