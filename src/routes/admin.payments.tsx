import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { AdminLayout, fmtDate } from "@/components/admin/AdminLayout";
import { cancelPayment, finalizePayment, listHeldPayments } from "@/lib/payments.functions";

export const Route = createFileRoute("/admin/payments")({
  component: AdminPaymentsPage,
  head: () => ({
    meta: [
      { title: "Payments · Admin · BBE School" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

type Row = Awaited<ReturnType<typeof listHeldPayments>>[number];

function AdminPaymentsPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      setRows(await listHeldPayments());
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load payments");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function act(kind: "finalize" | "cancel", invoiceId: string) {
    setBusy(invoiceId);
    setNotice(null);
    setError(null);
    try {
      const fn = kind === "finalize" ? finalizePayment : cancelPayment;
      const res = await fn({ data: { invoiceId } });
      if (res.ok) setNotice(`${invoiceId}: ${res.message}`);
      else setError(res.error);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Action failed");
    } finally {
      setBusy(null);
    }
  }

  return (
    <AdminLayout title="Payments (hold → finalize)" wide>
      <p className="mb-3 text-sm text-muted-foreground">
        Funds are blocked on the card first. Course access is granted only after you finalize
        (money actually charged). Skipping finalize releases the hold automatically within 9 days.
      </p>

      {notice ? (
        <div className="mb-3 rounded-lg border border-primary/40 bg-primary/10 px-3 py-2 text-sm">{notice}</div>
      ) : null}
      {error ? (
        <div className="mb-3 rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      {loading ? (
        <p className="text-sm text-muted-foreground">Loading…</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-muted-foreground">No payments yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-muted/50 text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-3 py-2">Invoice</th>
                <th className="px-3 py-2">User</th>
                <th className="px-3 py-2">Product</th>
                <th className="px-3 py-2">Amount</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Hold expires</th>
                <th className="px-3 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.invoiceId} className="border-t border-border/60">
                  <td className="px-3 py-2 font-mono text-xs">{r.invoiceId}</td>
                  <td className="px-3 py-2">{r.userEmail ?? "—"}</td>
                  <td className="px-3 py-2">{r.productName}</td>
                  <td className="px-3 py-2">{r.amountUah.toFixed(2)} UAH</td>
                  <td className="px-3 py-2">
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs">{r.status}</span>
                    {r.expiringSoon && r.status === "hold" ? (
                      <span className="ml-2 text-xs text-destructive">expiring soon</span>
                    ) : null}
                  </td>
                  <td className="px-3 py-2 text-xs text-muted-foreground">
                    {r.holdExpiresAt ? fmtDate(r.holdExpiresAt) : "—"}
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex gap-2">
                      <button
                        type="button"
                        disabled={!r.canFinalize || busy === r.invoiceId}
                        onClick={() => void act("finalize", r.invoiceId)}
                        className="rounded-md border border-border px-2 py-1 text-xs disabled:opacity-40"
                      >
                        Finalize
                      </button>
                      <button
                        type="button"
                        disabled={!r.canCancel || busy === r.invoiceId}
                        onClick={() => void act("cancel", r.invoiceId)}
                        className="rounded-md border border-destructive/50 px-2 py-1 text-xs text-destructive disabled:opacity-40"
                      >
                        Refund
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}
