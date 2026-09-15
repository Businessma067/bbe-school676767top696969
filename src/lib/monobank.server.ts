/**
 * Monobank acquiring helpers. Server-only: the merchant token never leaves
 * this module (read from the MONOBANK_TOKEN secret inside each call).
 *
 * Card checkout: POST invoice/create → hosted `pageUrl` (open top-level, not
 * iframe — Apple Pay fails in cross-origin iframes).
 *
 * Native Apple / Google Pay: POST wallet/payment with aToken / gToken from the
 * browser Payment Request / wallet SDKs.
 *
 * Docs:
 *  - POST /api/merchant/invoice/create
 *  - GET  /api/merchant/invoice/status?invoiceId=...
 *  - GET  /api/merchant/details
 *  - POST /api/merchant/wallet/payment
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

export type MonoMerchantDetails = {
  merchantId: string;
  merchantName: string;
};

export type MonoWalletPaymentResult = {
  invoiceId: string;
  status: MonoInvoiceStatus | string;
  tdsUrl?: string;
  failureReason?: string;
};

function monoToken(): string {
  const token = process.env["MONOBANK_TOKEN"]?.trim();
  if (!token) {
    throw new Error("MONOBANK_TOKEN is not configured on the server.");
  }
  return token;
}

export async function fetchMonoMerchantDetails(): Promise<MonoMerchantDetails> {
  const res = await fetch(`${MONO_API}/details`, {
    headers: { "X-Token": monoToken() },
  });
  const text = await res.text();
  if (!res.ok) {
    console.error("monobank merchant/details failed", res.status, text);
    throw new Error("Could not load Monobank merchant details.");
  }
  const json = JSON.parse(text) as { merchantId?: string; merchantName?: string };
  if (!json.merchantId) {
    throw new Error("Monobank merchant details are incomplete.");
  }
  return {
    merchantId: json.merchantId,
    merchantName: json.merchantName?.trim() || "BBE School",
  };
}

/**
 * Google Pay `gatewayMerchantId` for gateway:"monobank". Prefer the explicit
 * secret from the merchant cabinet; fall back to Monobank merchantId.
 */
export async function resolveGoogleGatewayMerchantId(): Promise<{
  gatewayMerchantId: string;
  merchantName: string;
}> {
  const fromEnv = process.env["MONOBANK_GOOGLE_GATEWAY_MERCHANT_ID"]?.trim();
  const details = await fetchMonoMerchantDetails();
  return {
    gatewayMerchantId: fromEnv || details.merchantId,
    merchantName: details.merchantName,
  };
}

/** Charge with an Apple Pay (aToken) or Google Pay (gToken) crypto container. */
export async function createMonoWalletPayment(input: {
  amountMinor: number;
  ccy: number;
  destination: string;
  reference: string;
  redirectUrl: string;
  webHookUrl?: string;
  /** Apple Pay payment token JSON (payment.token or full payment). */
  aToken?: string;
  /** Google Pay tokenizationData.token, JSON-stringified for the API. */
  gToken?: string;
}): Promise<MonoWalletPaymentResult> {
  const hasApple = !!input.aToken?.trim();
  const hasGoogle = !!input.gToken?.trim();
  if (hasApple === hasGoogle) {
    throw new Error("Provide exactly one of aToken or gToken.");
  }

  const body: Record<string, unknown> = {
    amount: input.amountMinor,
    ccy: input.ccy,
    redirectUrl: input.redirectUrl,
    initiationKind: "client",
    paymentType: "debit",
    merchantPaymInfo: {
      reference: input.reference,
      destination: input.destination,
      basketOrder: [
        {
          name: input.destination,
          qty: 1,
          sum: input.amountMinor,
          unit: "шт.",
        },
      ],
    },
    ...(input.webHookUrl ? { webHookUrl: input.webHookUrl } : {}),
  };

  if (hasApple) {
    body.aToken = input.aToken!.trim();
  } else {
    // Monobank expects the Google token as a JSON string (stringified object).
    const raw = input.gToken!.trim();
    body.gToken = jsonStringifyGoogleToken(raw);
  }

  const res = await fetch(`${MONO_API}/wallet/payment`, {
    method: "POST",
    headers: {
      "X-Token": monoToken(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  if (!res.ok) {
    console.error("monobank wallet/payment failed", res.status, text);
    throw new Error("Monobank rejected the wallet payment.");
  }

  const json = JSON.parse(text) as {
    invoiceId?: string;
    status?: string;
    tdsUrl?: string;
    failureReason?: string;
  };
  if (!json.invoiceId) {
    throw new Error("Monobank returned an unexpected wallet response.");
  }
  return {
    invoiceId: json.invoiceId,
    status: json.status ?? "created",
    ...(json.tdsUrl ? { tdsUrl: json.tdsUrl } : {}),
    ...(json.failureReason ? { failureReason: json.failureReason } : {}),
  };
}

/** Ensure gToken is a JSON-encoded string as Monobank’s Google Pay docs require. */
function jsonStringifyGoogleToken(raw: string): string {
  const trimmed = raw.trim();
  try {
    const parsed = JSON.parse(trimmed) as unknown;
    // Already an object → stringify once for the API field.
    if (parsed && typeof parsed === "object") {
      return JSON.stringify(parsed);
    }
    // Already a JSON string of the token object → keep as API string value.
    if (typeof parsed === "string") {
      return JSON.stringify(parsed);
    }
  } catch {
    // Not JSON — wrap as a JSON string.
  }
  return JSON.stringify(trimmed);
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
  const res = await fetch(`${MONO_API}/invoice/create`, {
    method: "POST",
    headers: {
      "X-Token": monoToken(),
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
  const res = await fetch(`${MONO_API}/invoice/status?invoiceId=${encodeURIComponent(invoiceId)}`, {
    headers: { "X-Token": monoToken() },
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
  failureReason?: string;
}> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { PAID_PRODUCTS, isPaidProductSlug } = await import("@/lib/checkout-catalog");

  const { data: payment, error } = await supabaseAdmin
    .from("payments")
    .select("id, user_id, user_email, product_slug, status, promo_code")
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

    const promoCode =
      typeof (payment as { promo_code?: string | null }).promo_code === "string"
        ? (payment as { promo_code: string }).promo_code
        : null;
    if (promoCode) {
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
    ...(mono.failureReason ? { failureReason: mono.failureReason } : {}),
  };
}
