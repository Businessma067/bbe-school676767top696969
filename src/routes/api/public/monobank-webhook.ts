import { createFileRoute } from "@tanstack/react-router";

/**
 * Verify Monobank's signature over the raw body before any payment updates.
 * Status is still re-read from Monobank before granting access.
 */
export const Route = createFileRoute("/api/public/monobank-webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const rawBody = await request.text();
          if (rawBody.length > 65536) return new Response("Bad request", { status: 400 });
          const { verifyMonoSignature } = await import("@/lib/monobank-webhook.server");
          if (!(await verifyMonoSignature(rawBody, request.headers.get("x-sign")))) {
            return new Response("Unauthorized", { status: 401 });
          }
          let body: { invoiceId?: unknown };
          try {
            body = JSON.parse(rawBody);
          } catch {
            return new Response("Bad request", { status: 400 });
          }
          if (!body || typeof body !== "object") return new Response("Bad request", { status: 400 });
          const invoiceId = typeof body.invoiceId === "string" ? body.invoiceId : "";
          if (!invoiceId || invoiceId.length > 128) {
            return new Response("Bad request", { status: 400 });
          }
          const { syncInvoiceAndGrantAccess } = await import("@/lib/monobank.server");
          await syncInvoiceAndGrantAccess(invoiceId);
          return new Response("ok");
        } catch (err) {
          console.error("monobank webhook", err);
          return new Response("error", { status: 500 });
        }
      },
      GET: async () => new Response("ok"),
    },
  },
});
