import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { requireAdmin } from "@/lib/require-admin.server";
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
        // Two-step payment: block the funds first, charge them on finalize.
        paymentType: "hold",
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
        payment_type: "hold",
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

/* ---------------------------------------------------------------------------
 * Two-step (hold) administration: finalize = charge, cancel = refund.
 * ------------------------------------------------------------------------- */

const InvoiceActionInput = z.object({
  invoiceId: z.string().min(1).max(128),
  /** Optional partial amount in UAH (must be <= the held/charged amount). */
  amountUah: z.number().positive().max(1_000_000).optional(),
});

export type InvoiceActionResult =
  | { ok: true; status: string; message: string }
  | { ok: false; error: string };

/** Lists invoices that currently hold funds, so an admin can finalize them. */
export const listHeldPayments = createServerFn({ method: "GET" })
  .middleware([requireAdmin])
  .handler(async ({ context }) => {
    const { data } = await context.supabaseAdmin
      .from("payments")
      .select(
        "invoice_id, user_email, product_name, amount_minor, status, payment_type, held_at, hold_expires_at, finalized_at, cancelled_at, created_at",
      )
      .in("status", ["created", "processing", "hold", "success"])
      .order("created_at", { ascending: false })
      .limit(100);

    const { HOLD_SAFE_FINALIZE_DAYS } = await import("@/lib/monobank.server");
    return (data ?? []).map((p) => {
      const heldAt = p.held_at ? new Date(p.held_at) : null;
      const daysHeld = heldAt ? (Date.now() - heldAt.getTime()) / 86_400_000 : null;
      return {
        invoiceId: p.invoice_id,
        userEmail: p.user_email,
        productName: p.product_name,
        amountUah: p.amount_minor / 100,
        status: p.status,
        paymentType: p.payment_type,
        heldAt: p.held_at,
        holdExpiresAt: p.hold_expires_at,
        finalizedAt: p.finalized_at,
        cancelledAt: p.cancelled_at,
        createdAt: p.created_at,
        canFinalize: p.status === "hold" && (daysHeld === null || daysHeld < HOLD_SAFE_FINALIZE_DAYS),
        canCancel: p.status === "success",
        expiringSoon: daysHeld !== null && daysHeld >= HOLD_SAFE_FINALIZE_DAYS - 1,
      };
    });
  });

/**
 * Scenario A: order verified & delivered → charge the blocked funds.
 * Refuses when the invoice is not on hold or the hold is about to expire.
 */
export const finalizePayment = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => InvoiceActionInput.parse(d))
  .handler(async ({ context, data }): Promise<InvoiceActionResult> => {
    try {
      const { data: row } = await context.supabaseAdmin
        .from("payments")
        .select("id, amount_minor, status, held_at")
        .eq("invoice_id", data.invoiceId)
        .maybeSingle();
      if (!row) return { ok: false, error: "Payment not found." };

      const {
        fetchMonoInvoiceStatus,
        finalizeMonoInvoice,
        syncInvoiceAndGrantAccess,
        HOLD_SAFE_FINALIZE_DAYS,
      } = await import("@/lib/monobank.server");

      const mono = await fetchMonoInvoiceStatus(data.invoiceId);
      if (mono.status === "success") {
        return { ok: true, status: "success", message: "Already finalized — funds are charged." };
      }
      if (mono.status !== "hold") {
        return { ok: false, error: `Cannot finalize an invoice with status "${mono.status}". Finalize only works on a hold.` };
      }

      const heldAt = row.held_at ? new Date(row.held_at) : null;
      if (heldAt && (Date.now() - heldAt.getTime()) / 86_400_000 >= HOLD_SAFE_FINALIZE_DAYS) {
        return {
          ok: false,
          error: "This hold is 8+ days old and may already be released by the bank. Ask the customer to pay again.",
        };
      }

      const amountMinor = data.amountUah ? Math.round(data.amountUah * 100) : undefined;
      if (amountMinor && amountMinor > row.amount_minor) {
        return { ok: false, error: "You can only finalize the held amount or less." };
      }

      const result = await finalizeMonoInvoice(data.invoiceId, amountMinor);
      console.log("[mono] finalize", { invoiceId: data.invoiceId, amountMinor, result });

      // Re-read the authoritative status; this also grants course access.
      const synced = await syncInvoiceAndGrantAccess(data.invoiceId);
      return {
        ok: true,
        status: synced.status,
        message: amountMinor
          ? `Charged ${(amountMinor / 100).toFixed(2)} UAH of the hold.`
          : "Full hold amount charged.",
      };
    } catch (err) {
      console.error("finalizePayment", err);
      return { ok: false, error: err instanceof Error ? err.message : "Finalize failed." };
    }
  });

/**
 * Scenario C: money already charged (status "success") and the customer wants
 * a refund → cancel. Never call this for a hold: a hold simply expires.
 */
export const cancelPayment = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator((d: unknown) => InvoiceActionInput.parse(d))
  .handler(async ({ context, data }): Promise<InvoiceActionResult> => {
    try {
      const { data: row } = await context.supabaseAdmin
        .from("payments")
        .select("id, amount_minor, finalized_amount_minor, status")
        .eq("invoice_id", data.invoiceId)
        .maybeSingle();
      if (!row) return { ok: false, error: "Payment not found." };

      const { fetchMonoInvoiceStatus, cancelMonoInvoice, syncInvoiceAndGrantAccess } = await import(
        "@/lib/monobank.server"
      );

      const mono = await fetchMonoInvoiceStatus(data.invoiceId);
      if (mono.status === "hold") {
        return {
          ok: false,
          error: "This invoice is only on hold — do not cancel it. Simply skip finalize and the bank releases the funds automatically.",
        };
      }
      if (mono.status === "reversed") {
        return { ok: true, status: "reversed", message: "Already refunded." };
      }
      if (mono.status !== "success") {
        return { ok: false, error: `Cannot refund an invoice with status "${mono.status}".` };
      }

      const charged = row.finalized_amount_minor ?? row.amount_minor;
      const amountMinor = data.amountUah ? Math.round(data.amountUah * 100) : undefined;
      if (amountMinor && amountMinor > charged) {
        return { ok: false, error: "Refund cannot exceed the charged amount." };
      }

      const result = await cancelMonoInvoice(data.invoiceId, amountMinor);
      console.log("[mono] cancel", { invoiceId: data.invoiceId, amountMinor, result });

      const synced = await syncInvoiceAndGrantAccess(data.invoiceId);
      return { ok: true, status: synced.status, message: "Refund requested." };
    } catch (err) {
      console.error("cancelPayment", err);
      return { ok: false, error: err instanceof Error ? err.message : "Refund failed." };
    }
  });
