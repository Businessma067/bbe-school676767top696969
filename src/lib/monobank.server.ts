/**
 * Monobank acquiring helpers. Server-only: the merchant token never leaves
 * this module (read from the MONOBANK_TOKEN secret inside each call).
 *
 * Returns a hosted `pageUrl` (pay.mbnk.biz / pay.monobank.ua). Open it as a
 * top-level navigation — not in an iframe. Apple Pay fails inside a
 * cross-origin iframe because the site origin is not the Apple Pay merchant
 * domain; full-page checkout also scrolls normally on mobile and shows
 * card, Apple Pay, and Google Pay.
 *
 * Docs:
 *  - POST /api/merchant/invoice/create
 *  - GET  /api/merchant/invoice/status?invoiceId=...
 */

const MONO_API = "https://api.monobank.ua/api/merchant";

export type MonoInvoiceStatus =
  "created" | "processing" | "hold" | "success" | "failure" | "reversed" | "expired";

export type MonoStatusResponse = {
  invoiceId: string;
  status: MonoInvoiceStatus;
  failureReason?: string;
  amount?: number;
  ccy?: number;
  reference?: string;
  modifiedDate?: string;
};

function monoTokenSyncFallback(): string | undefined {
  return process.env["MONOBANK_TOKEN"]?.trim() || undefined;
}

async function monoToken(): Promise<string> {
  const { getServerSecret } = await import("@/lib/server-secret.server");
  const token = (await getServerSecret("MONOBANK_TOKEN")) ?? monoTokenSyncFallback();
  if (!token) {
    throw new Error(
      "MONOBANK_TOKEN is not configured on the server. Add a Cloud secret named exactly MONOBANK_TOKEN in Lovable (More → Cloud → Secrets), then republish/update the preview. This is required for Monobank checkout.",
    );
  }
  return token;
}

export async function createMonoInvoice(input: {
  amountMinor: number;
  /** ISO 4217 numeric currency code. Defaults to EUR (978). */
  ccy?: number;
  destination: string;
  reference: string;
  redirectUrl: string;
  webHookUrl?: string;
  basketName?: string;
  /** Public HTTPS URL for the cart-item thumbnail on pay.monobank.ua. */
  basketIconUrl?: string;
}): Promise<{ invoiceId: string; pageUrl: string }> {
  const ccy = input.ccy ?? 978;
  const token = await monoToken();
  const res = await fetch(`${MONO_API}/invoice/create`, {
    method: "POST",
    headers: {
      "X-Token": token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: input.amountMinor,
      ccy,
      merchantPaymInfo: {
        reference: input.reference,
        destination: input.destination,
        basketOrder: [
          {
            name: input.basketName ?? input.destination,
            qty: 1,
            sum: input.amountMinor,
            unit: "шт.",
            ...(input.basketIconUrl ? { icon: input.basketIconUrl } : {}),
          },
        ],
      },
      redirectUrl: input.redirectUrl,
      ...(input.webHookUrl ? { webHookUrl: input.webHookUrl } : {}),
      validity: 3600,
      paymentType: "debit",
    }),
  });

  const text = await res.text();
  if (!res.ok) {
    console.error("monobank invoice/create failed", res.status, text);
    throw new Error("Monobank rejected the payment request.");
  }

  const json = JSON.parse(text) as { invoiceId?: string; pageUrl?: string };
  if (!json.invoiceId || !json.pageUrl) {
    throw new Error("Monobank returned an unexpected response.");
  }
  return { invoiceId: json.invoiceId, pageUrl: json.pageUrl };
}

export async function fetchMonoInvoiceStatus(invoiceId: string): Promise<MonoStatusResponse> {
  const token = await monoToken();
  const res = await fetch(`${MONO_API}/invoice/status?invoiceId=${encodeURIComponent(invoiceId)}`, {
    headers: { "X-Token": token },
  });
  const text = await res.text();
  if (!res.ok) {
    console.error("monobank invoice/status failed", res.status, text);
    throw new Error("Could not read the payment status from Monobank.");
  }
  return JSON.parse(text) as MonoStatusResponse;
}

/**
 * Re-reads the invoice from Monobank (never trusts client/webhook payloads),
 * stores the status and unlocks the course on a successful payment.
 */
export async function syncInvoiceAndGrantAccess(invoiceId: string): Promise<{
  status: MonoInvoiceStatus | "unknown";
  productSlug: string | null;
  href: string | null;
  /** True only when Monobank reports success AND the enrollment row was written. */
  enrolled: boolean;
  failureReason?: string;
}> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { PAID_PRODUCTS, isPaidProductSlug } = await import("@/lib/checkout-catalog");
  const { grantPaidEnrollment } = await import("@/lib/enrollment-grant.server");

  const { data: payment, error } = await supabaseAdmin
    .from("payments")
    .select("id, user_id, user_email, product_slug, status, promo_code")
    .eq("invoice_id", invoiceId)
    .maybeSingle();

  if (error) console.error("syncInvoice: payment lookup", error);
  if (!payment) {
    return { status: "unknown", productSlug: null, href: null, enrolled: false };
  }

  const mono = await fetchMonoInvoiceStatus(invoiceId);
  const status = mono.status;
  const paid = status === "success";

  await supabaseAdmin
    .from("payments")
    .update({
      status,
      failure_reason: mono.failureReason ?? null,
      paid_at: paid ? new Date().toISOString() : null,
    })
    .eq("id", payment.id);

  const slug = payment.product_slug;
  const product = isPaidProductSlug(slug) ? PAID_PRODUCTS[slug] : null;
  let enrolled = false;

  if (paid && product) {
    const grant = await grantPaidEnrollment({
      userId: payment.user_id,
      product,
    });
    enrolled = grant.ok;
    if (!grant.ok) {
      console.error("syncInvoice: enrollment upsert failed", slug, grant.error);
    }

    const promoCode =
      typeof (payment as { promo_code?: string | null }).promo_code === "string"
        ? (payment as { promo_code: string }).promo_code
        : null;
    if (promoCode && enrolled) {
      const { recordPromoUsage } = await import("@/lib/promo.functions");
      await recordPromoUsage({
        code: promoCode,
        userId: payment.user_id,
        userEmail: payment.user_email,
        productSlug: product.slug,
        paymentId: payment.id,
      });
    }
  }

  return {
    status,
    productSlug: slug,
    href: product?.href ?? null,
    enrolled,
    ...(mono.failureReason ? { failureReason: mono.failureReason } : {}),
  };
}
