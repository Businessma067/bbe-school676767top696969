import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AdminLayout, DataTable, StatCard, fmtDate } from "@/components/admin/AdminLayout";
import { adminListPromocodes, type AdminPromocodeRow } from "@/lib/promo.functions";

export const Route = createFileRoute("/admin/promocodes")({
  component: AdminPromocodesPage,
  head: () => ({
    meta: [
      { title: "Promocodes · Admin · BBE School" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function AdminPromocodesPage() {
  const [codes, setCodes] = useState<AdminPromocodeRow[]>([]);
  const [available, setAvailable] = useState(0);
  const [used, setUsed] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await adminListPromocodes();
        if (cancelled) return;
        setCodes(res.codes);
        setAvailable(res.available);
        setUsed(res.used);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load promocodes");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <AdminLayout title="Promocodes" wide>
      {error ? (
        <p className="mb-3 rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        <StatCard label="Total codes" value={codes.length || "—"} />
        <StatCard label="Available" value={loading ? "…" : available} hint="Ready to redeem" />
        <StatCard label="Used" value={loading ? "…" : used} hint="One-time, already claimed" />
      </div>

      {loading ? (
        <p className="text-sm text-muted-foreground">Loading promocodes…</p>
      ) : (
        <DataTable
          empty="No promocodes found. Run the promocodes migration."
          columns={[
            { key: "code", label: "Code" },
            { key: "status", label: "Status" },
            { key: "usedBy", label: "Redeemed by" },
            { key: "usedAt", label: "Redeemed at" },
            { key: "product", label: "Product" },
          ]}
          rows={codes.map((c) => ({
            code: <span className="font-mono text-xs font-semibold tracking-wide">{c.code}</span>,
            status: (
              <span
                className={
                  c.status === "available"
                    ? "inline-flex rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300"
                    : "inline-flex rounded-full bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground"
                }
              >
                {c.status === "available" ? "Available" : "Used"}
              </span>
            ),
            usedBy: c.usedByEmail ? (
              c.usedBy ? (
                <Link
                  to="/admin/users/$userId"
                  params={{ userId: c.usedBy }}
                  className="text-sm text-primary hover:underline"
                >
                  {c.usedByEmail}
                </Link>
              ) : (
                c.usedByEmail
              )
            ) : (
              "—"
            ),
            usedAt: fmtDate(c.usedAt),
            product: c.productSlug,
          }))}
        />
      )}
    </AdminLayout>
  );
}
