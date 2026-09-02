/**
 * Monobank acquiring helpers. Server-only: the merchant token never leaves
 * this module (read from the MONOBANK_TOKEN secret inside each call).
 *
 * Payment model: two-step (hold → finalize).
 *  1. create(paymentType: "hold")  → funds are BLOCKED on the card, not taken.
 *  2. webhook status="hold"        → order is verified/prepared.
 *  3. finalize                     → funds are actually CHARGED (status success).
 *  4. no finalize                  → the hold expires automatically (max 9 days).
 *  5. cancel                       → refund, only valid AFTER success.
 *
 * Docs:
 *  - POST /api/merchant/invoice/create
 *  - POST /api/merchant/invoice/finalize
 *  - POST /api/merchant/invoice/cancel
 *  - GET  /api/merchant/invoice/status?invoiceId=...
 */

const MONO_API = "https://api.monobank.ua/api/merchant";

/** Monobank keeps a hold for at most 9 days; finalize before day 8 to be safe. */
export const HOLD_MAX_DAYS = 9;
export const HOLD_SAFE_FINALIZE_DAYS = 8;

export type MonoInvoiceStatus =
  | "created"
  | "processing"
  | "hold"
  | "success"
  | "failure"
  | "reversed"
  | "expired";

export type MonoStatusResponse = {
  invoiceId: string;
  status: MonoInvoiceStatus;
  failureReason?: string;
  amount?: number;
  ccy?: number;
  finalAmount?: number;
  reference?: string;
  createdDate?: string;
  modifiedDate?: string;
};

function monoToken(): string {
  const token = process.env["MONOBANK_TOKEN"]?.trim();
  if (!token) {
    throw new Error("MONOBANK_TOKEN is not configured on the server.");
  }
  return token;
}

async function monoPost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${MONO_API}${path}`, {
    method: "POST",
    headers: { "X-Token": monoToken(), "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) {
    console.error(`[mono] POST ${path} failed`, res.status, text);
    let message = "Monobank rejected the request.";
    try {
      const parsed = JSON.parse(text) as { errText?: string; errorDescription?: string };
      message = parsed.errText ?? parsed.errorDescription ?? message;
    } catch {
      /* keep default */
    }
    throw new Error(message);
  }
  return (text ? JSON.parse(text) : {}) as T;
}

export async function createMonoInvoice(input: {
  amountMinor: number;
  destination: string;
  reference: string;
  redirectUrl: string;
  webHookUrl?: string;
  basketName?: string;
  /** "hold" blocks funds without charging; "debit" charges immediately. */
  paymentType?: "hold" | "debit";
}): Promise<{ invoiceId: string; pageUrl: string }> {
  const json = await monoPost<{ invoiceId?: string; pageUrl?: string }>("/invoice/create", {
    amount: input.amountMinor,
    ccy: 980,
    merchantPaymInfo: {
      reference: input.reference,
      destination: input.destination,
      basketOrder: [
        {
          name: input.basketName ?? input.destination,
          qty: 1,
          sum: input.amountMinor,
          unit: "шт.",
        },
      ],
    },
    redirectUrl: input.redirectUrl,
    ...(input.webHookUrl ? { webHookUrl: input.webHookUrl } : {}),
    validity: 3600,
    paymentType: input.paymentType ?? "hold",
  });

  if (!json.invoiceId || !json.pageUrl) {
    throw new Error("Monobank returned an unexpected response.");
  }
  return { invoiceId: json.invoiceId, pageUrl: json.pageUrl };
}

export async function fetchMonoInvoiceStatus(invoiceId: string): Promise<MonoStatusResponse> {
  const res = await fetch(
    `${MONO_API}/invoice/status?invoiceId=${encodeURIComponent(invoiceId)}`,
    { headers: { "X-Token": monoToken() } },
  );
  const text = await res.text();
  if (!res.ok) {
    console.error("[mono] invoice/status failed", res.status, text);
    throw new Error("Could not read the payment status from Monobank.");
  }
  return JSON.parse(text) as MonoStatusResponse;
}

/**
 * Charges a previously held invoice. `amountMinor` may be LOWER than the held
 * amount (partial finalization); omit it to charge the full hold.
 */
export async function finalizeMonoInvoice(
  invoiceId: string,
  amountMinor?: number,
): Promise<{ status: string }> {
  return monoPost<{ status: string }>("/invoice/finalize", {
    invoiceId,
    ...(amountMinor ? { amount: Math.round(amountMinor) } : {}),
  });
}

/** Refunds an ALREADY CHARGED invoice (status must be "success"). */
export async function cancelMonoInvoice(
  invoiceId: string,
  amountMinor?: number,
): Promise<{ status: string }> {
  return monoPost<{ status: string }>("/invoice/cancel", {
    invoiceId,
    ...(amountMinor ? { amount: Math.round(amountMinor) } : {}),
  });
}

async function grantAccess(userId: string, slug: string) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { PAID_PRODUCTS, isPaidProductSlug } = await import("@/lib/checkout-catalog");
  if (!isPaidProductSlug(slug)) return null;
  const product = PAID_PRODUCTS[slug];
  const { error } = await supabaseAdmin.from("enrollments").upsert(
    {
      user_id: userId,
      product_slug: product.slug,
      product_name: product.name,
      tier: product.tier,
    },
    { onConflict: "user_id,product_slug" },
  );
  if (error) console.error("[mono] enrollment upsert", error);
  return product;
}

async function revokeAccess(userId: string, slug: string) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { error } = await supabaseAdmin
    .from("enrollments")
    .delete()
    .eq("user_id", userId)
    .eq("product_slug", slug);
  if (error) console.error("[mono] enrollment revoke", error);
}

/**
 * Re-reads the invoice from Monobank (never trusts client/webhook payloads),
 * stores the status and unlocks the course ONLY when the money was actually
 * charged (status "success"). A "hold" blocks funds but grants nothing yet;
 * "reversed" (refund) removes the access again.
 *
 * Idempotent: repeated webhooks for the same state are safe.
 */
export async function syncInvoiceAndGrantAccess(invoiceId: string): Promise<{
  status: MonoInvoiceStatus | "unknown";
  productSlug: string | null;
  href: string | null;
  failureReason?: string;
}> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { PAID_PRODUCTS, isPaidProductSlug } = await import("@/lib/checkout-catalog");

  const { data: payment, error } = await supabaseAdmin
    .from("payments")
    .select("id, user_id, user_email, product_slug, status, created_at, last_status_modified_at")
    .eq("invoice_id", invoiceId)
    .maybeSingle();

  if (error) console.error("syncInvoice: payment lookup", error);
  if (!payment) return { status: "unknown", productSlug: null, href: null };

  const mono = await fetchMonoInvoiceStatus(invoiceId);
  const status = mono.status;
  const modified = mono.modifiedDate ?? null;

  // Idempotency: ignore duplicate/out-of-order webhooks for a state we stored.
  const alreadyApplied =
    payment.status === status &&
    (!modified ||
      (payment.last_status_modified_at &&
        new Date(modified) <= new Date(payment.last_status_modified_at)));

  const slug = payment.product_slug;
  const product = isPaidProductSlug(slug) ? PAID_PRODUCTS[slug] : null;

  if (!alreadyApplied) {
    const now = new Date().toISOString();
    await supabaseAdmin
      .from("payments")
      .update({
        status,
        failure_reason: mono.failureReason ?? null,
        last_status_modified_at: modified ?? now,
        ...(status === "hold"
          ? {
              held_at: now,
              hold_expires_at: new Date(
                Date.now() + HOLD_MAX_DAYS * 24 * 60 * 60 * 1000,
              ).toISOString(),
            }
          : {}),
        ...(status === "success"
          ? {
              paid_at: now,
              finalized_at: now,
              finalized_amount_minor: mono.finalAmount ?? mono.amount ?? null,
            }
          : {}),
        ...(status === "reversed" ? { cancelled_at: now } : {}),
      })
      .eq("id", payment.id);

    // Access follows the money, not the hold.
    if (status === "success" && product) {
      await grantAccess(payment.user_id, product.slug);
      console.log("[mono] access granted", { invoiceId, slug: product.slug });
    }
    if ((status === "reversed" || status === "failure" || status === "expired") && product) {
      await revokeAccess(payment.user_id, product.slug);
      console.log("[mono] access revoked", { invoiceId, status });
    }
  }

  return {
    status,
    productSlug: slug,
    href: status === "success" ? (product?.href ?? null) : null,
    ...(mono.failureReason ? { failureReason: mono.failureReason } : {}),
  };
}
