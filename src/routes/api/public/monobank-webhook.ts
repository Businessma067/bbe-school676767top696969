import { createFileRoute } from "@tanstack/react-router";

/**
 * Monobank acquiring webhook. The payload is never trusted: we only take the
 * invoiceId from it and re-read the authoritative status from Monobank's API
 * with the server-side merchant token before granting any access.
 */
export const Route = createFileRoute("/api/public/monobank-webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as { invoiceId?: unknown };
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
