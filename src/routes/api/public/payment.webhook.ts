import { createFileRoute } from "@tanstack/react-router";

/**
 * Monobank acquiring webhook: POST /api/public/payment/webhook
 *
 * Flow:
 *  1. Read the RAW body (needed byte-for-byte for signature verification).
 *  2. Verify the `x-sign` ECDSA signature against Monobank's public key.
 *  3. Log the request (always, valid or not) into payment_webhook_logs.
 *  4. Re-read the authoritative invoice status from Monobank's API and
 *     persist it / grant course access when the payment succeeded.
 */

const KNOWN_STATUSES = new Set([
  "created",
  "processing",
  "hold",
  "success",
  "failure",
  "reversed",
  "expired",
]);

export const Route = createFileRoute("/api/public/payment/webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const rawBody = await request.text();
        const headers: Record<string, string> = {};
        request.headers.forEach((value, key) => {
          if (key.toLowerCase() === "authorization" || key.toLowerCase() === "cookie") return;
          headers[key] = value;
        });

        const { verifyMonoSignature, logWebhook } = await import("@/lib/monobank-webhook.server");

        let payload: Record<string, unknown> | null = null;
        try {
          payload = JSON.parse(rawBody) as Record<string, unknown>;
        } catch {
          payload = null;
        }

        const invoiceId = typeof payload?.["invoiceId"] === "string" ? (payload["invoiceId"] as string) : null;
        const status = typeof payload?.["status"] === "string" ? (payload["status"] as string) : null;
        const amountMinor = typeof payload?.["amount"] === "number" ? (payload["amount"] as number) : null;
        const currencyCode = typeof payload?.["ccy"] === "number" ? (payload["ccy"] as number) : null;

        const signatureValid = await verifyMonoSignature(rawBody, request.headers.get("x-sign"));

        console.log("[mono-webhook] received", {
          invoiceId,
          status,
          amountMinor,
          currencyCode,
          signatureValid,
        });

        if (!signatureValid) {
          await logWebhook({
            invoiceId,
            status,
            amountMinor,
            currencyCode,
            signatureValid: false,
            headers,
            payload,
            rawBody,
            error: "Invalid or missing x-sign signature",
          });
          console.warn("[mono-webhook] rejected: invalid signature", invoiceId);
          return new Response("Invalid signature", { status: 401 });
        }

        if (!invoiceId || invoiceId.length > 128) {
          await logWebhook({
            invoiceId,
            status,
            amountMinor,
            currencyCode,
            signatureValid: true,
            headers,
            payload,
            rawBody,
            error: "Missing invoiceId",
          });
          return new Response("Bad request", { status: 400 });
        }

        let error: string | undefined;
        try {
          const { syncInvoiceAndGrantAccess } = await import("@/lib/monobank.server");
          const result = await syncInvoiceAndGrantAccess(invoiceId);
          console.log("[mono-webhook] synced", {
            invoiceId,
            reported: status,
            verified: result.status,
            granted: result.status === "success",
            known: status ? KNOWN_STATUSES.has(status) : false,
          });
        } catch (err) {
          error = err instanceof Error ? err.message : String(err);
          console.error("[mono-webhook] sync failed", invoiceId, err);
        }

        await logWebhook({
          invoiceId,
          status,
          amountMinor,
          currencyCode,
          signatureValid: true,
          headers,
          payload,
          rawBody,
          ...(error ? { error } : {}),
        });

        // Always 200 on a verified webhook so Monobank stops retrying.
        return new Response("ok");
      },
      GET: async () => new Response("ok"),
    },
  },
});
