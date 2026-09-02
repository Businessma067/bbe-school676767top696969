import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import {
  DISCOUNT_CODE,
  DISCOUNT_PCT,
  PAID_PRODUCTS,
  isPaidProductSlug,
} from "@/lib/checkout-catalog";

export type CheckoutResult =
  | { ok: true; pageUrl: string; invoiceId: string; amountUah: number }
  | { ok: false; error: string };

export type PaymentStatusResult =
  | {
      ok: true;
      status: string;
      paid: boolean;
      productSlug: string | null;
      productName: string | null;
      href: string | null;
      amountUah: number | null;
      failureReason?: string;
    }
  | { ok: false; error: string };

const CheckoutInput = z.object({
  productSlug: z.string().min(1).max(64),
  promoCode: z.string().max(64).optional(),
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

      const discount =
        (data.promoCode ?? "").trim().toLowerCase() === DISCOUNT_CODE.toLowerCase()
          ? DISCOUNT_PCT
          : 0;

      // Optional test override, e.g. MONOBANK_TEST_AMOUNT_MINOR=10000 (100 UAH).
      const testAmount = Number(process.env["MONOBANK_TEST_AMOUNT_MINOR"] ?? "");
      const amountMinor =
        Number.isFinite(testAmount) && testAmount > 0
          ? Math.round(testAmount)
          : Math.round(product.priceUah * 100 * (1 - discount / 100));

      const { getRequest } = await import("@tanstack/react-start/server");
      const request = getRequest();
      const origin = siteOrigin(request);

      const { createMonoInvoice } = await import("@/lib/monobank.server");
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

      const reference = `${slug}:${context.userId}:${Date.now()}`;
      const { invoiceId, pageUrl } = await createMonoInvoice({
        amountMinor,
        destination: product.name,
        reference,
        redirectUrl: `${origin}/payment-result`,
        webHookUrl: `${origin}/api/public/payment/webhook`,
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
        currency_code: 980,
        status: "created",
        page_url: pageUrl,
      });
      if (error) {
        console.error("createCheckout: payment insert", error);
        return { ok: false, error: "Could not start the payment. Try again." };
      }

      return { ok: true, pageUrl, invoiceId, amountUah: amountMinor / 100 };
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

      return {
        ok: true,
        status: result.status,
        paid: result.status === "success",
        productSlug: row.product_slug,
        productName: row.product_name,
        href: result.href,
        amountUah: row.amount_minor / 100,
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
      amountUah: p.amount_minor / 100,
      status: p.status,
      createdAt: p.created_at,
    }));
  });
