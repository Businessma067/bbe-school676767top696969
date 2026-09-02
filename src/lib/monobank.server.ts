/**
 * Monobank acquiring helpers. Server-only: the merchant token never leaves
 * this module (read from the MONOBANK_TOKEN secret inside each call).
 *
 * Docs:
 *  - POST /api/merchant/invoice/create
 *  - GET  /api/merchant/invoice/status?invoiceId=...
 */

const MONO_API = "https://api.monobank.ua/api/merchant";

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
  reference?: string;
  modifiedDate?: string;
};

function monoToken(): string {
  const token = process.env["MONOBANK_TOKEN"]?.trim();
  if (!token) {
    throw new Error("MONOBANK_TOKEN is not configured on the server.");
  }
  return token;
}

export async function createMonoInvoice(input: {
  amountMinor: number;
  destination: string;
  reference: string;
  redirectUrl: string;
  webHookUrl?: string;
  basketName?: string;
}): Promise<{ invoiceId: string; pageUrl: string }> {
  const res = await fetch(`${MONO_API}/invoice/create`, {
    method: "POST",
    headers: {
      "X-Token": monoToken(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
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
  const res = await fetch(
    `${MONO_API}/invoice/status?invoiceId=${encodeURIComponent(invoiceId)}`,
    { headers: { "X-Token": monoToken() } },
  );
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
  failureReason?: string;
}> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { PAID_PRODUCTS, isPaidProductSlug } = await import("@/lib/checkout-catalog");

  const { data: payment, error } = await supabaseAdmin
    .from("payments")
    .select("id, user_id, user_email, product_slug, status")
    .eq("invoice_id", invoiceId)
    .maybeSingle();

  if (error) console.error("syncInvoice: payment lookup", error);
  if (!payment) return { status: "unknown", productSlug: null, href: null };

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

  if (paid && product) {
    const { error: enrollError } = await supabaseAdmin.from("enrollments").upsert(
      {
        user_id: payment.user_id,
        product_slug: product.slug,
        product_name: product.name,
        tier: product.tier,
      },
      { onConflict: "user_id,product_slug" },
    );
    if (enrollError) console.error("syncInvoice: enrollment upsert", enrollError);
  }

  return {
    status,
    productSlug: slug,
    href: product?.href ?? null,
    ...(mono.failureReason ? { failureReason: mono.failureReason } : {}),
  };
}
