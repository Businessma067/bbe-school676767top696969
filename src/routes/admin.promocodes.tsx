import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AdminLayout, DataTable, StatCard, fmtDate } from "@/components/admin/AdminLayout";
import { adminListPromocodes, type AdminPromocodeRow } from "@/lib/promo.functions";

export const Route = createFileRoute("/admin/promocodes")({
  component: AdminPromocodesPage,
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/admin/promocodes" }],
    meta: [
      { title: "Promocodes · Admin · BBE School" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function courseLabel(slug: string): string {
  if (slug === "any-paid") return "Lite + Full";
  if (slug === "full-course") return "Full Course";
  if (slug === "lite-bbe-course") return "Lite Course";
  return slug;
}

function AdminPromocodesPage() {
  const [codes, setCodes] = useState<AdminPromocodeRow[]>([]);
  const [available, setAvailable] = useState(0);
  const [used, setUsed] = useState(0);
  const [activeDiscounts, setActiveDiscounts] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await adminListPromocodes();
        if (cancelled) return;
        if (!res.ok) {
          setError(res.error);
          return;
        }
        setCodes(res.codes);
        setAvailable(res.available);
        setUsed(res.used);
        setActiveDiscounts(res.activeDiscounts);
      } catch (e) {
        if (!cancelled) {
          const message =
            e instanceof Error
              ? e.message
              : typeof e === "object" && e && "message" in e && typeof (e as { message: unknown }).message === "string"
                ? (e as { message: string }).message
                : "Failed to load promocodes";
          setError(message);
        }
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
        <div className="mb-3 space-y-2 rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-3 text-sm text-destructive">
          <p className="font-semibold">Could not load promocodes</p>
          <p className="whitespace-pre-wrap text-destructive/90">{error}</p>
          <p className="text-xs text-destructive/80">
            In Lovable, ask chat to apply{" "}
            <code className="rounded bg-destructive/10 px-1">
              supabase/migrations/20260907180000_discount_promocodes.sql
            </code>
            , or paste it into More → Cloud → SQL editor, then refresh this page.
          </p>
        </div>
      ) : null}

      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total codes" value={codes.length || "—"} />
        <StatCard label="Unlock available" value={loading ? "…" : available} hint="One-time free unlocks" />
        <StatCard label="Unlock used" value={loading ? "…" : used} hint="Already claimed" />
        <StatCard
          label="Active discounts"
          value={loading ? "…" : activeDiscounts}
          hint="15% multi-use codes"
        />
      </div>

      {loading ? (
        <p className="text-sm text-muted-foreground">Loading promocodes…</p>
      ) : (
        <DataTable
          empty="No promocodes found. Run the promocodes migration."
          columns={[
            { key: "name", label: "Name" },
            { key: "code", label: "Code" },
            { key: "kind", label: "Type" },
            { key: "status", label: "Status" },
            { key: "uses", label: "Uses" },
            { key: "usedBy", label: "Used by" },
            { key: "courses", label: "Course" },
            { key: "expires", label: "Expires" },
          ]}
          rows={codes.map((c) => ({
            name: <span className="text-sm font-semibold">{c.name ?? c.code}</span>,
            code: <span className="font-mono text-xs font-semibold tracking-wide">{c.code}</span>,
            kind:
              c.kind === "discount" ? (
                <span className="text-xs font-semibold">
                  {c.discountPct ?? 15}% off · {courseLabel(c.productSlug)}
                </span>
              ) : (
                <span className="text-xs font-semibold">Unlock · {courseLabel(c.productSlug)}</span>
              ),
            status: <StatusBadge status={c.status} />,
            uses:
              c.kind === "discount" ? (
                <span className="text-sm">
                  {c.useCount}
                  {c.maxUses == null ? " / ∞" : ` / ${c.maxUses}`}
                </span>
              ) : (
                <span className="text-sm">{c.useCount}/1</span>
              ),
            usedBy: <UsersCell code={c} />,
            courses: <CoursesCell code={c} />,
            expires: c.expiresAt ? fmtDate(c.expiresAt) : c.kind === "discount" ? "Never" : "—",
          }))}
        />
      )}
    </AdminLayout>
  );
}

function StatusBadge({ status }: { status: AdminPromocodeRow["status"] }) {
  const styles: Record<AdminPromocodeRow["status"], string> = {
    available: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
    active: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
    used: "bg-muted text-muted-foreground",
    expired: "bg-amber-500/15 text-amber-800 dark:text-amber-200",
  };
  const labels: Record<AdminPromocodeRow["status"], string> = {
    available: "Available",
    active: "Active",
    used: "Used",
    expired: "Expired",
  };
  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

function UsersCell({ code }: { code: AdminPromocodeRow }) {
  if (code.usages.length === 0) return <span className="text-muted-foreground">—</span>;
  return (
    <ul className="max-w-[220px] space-y-1">
      {code.usages.map((u, i) => (
        <li key={`${u.userId ?? u.userEmail ?? "anon"}-${i}`} className="text-xs">
          {u.userEmail && u.userId ? (
            <Link
              to="/admin/users/$userId"
              params={{ userId: u.userId }}
              className="text-primary hover:underline"
            >
              {u.userEmail}
            </Link>
          ) : (
            (u.userEmail ?? "—")
          )}
        </li>
      ))}
    </ul>
  );
}

function CoursesCell({ code }: { code: AdminPromocodeRow }) {
  if (code.usages.length === 0) {
    return <span className="text-xs text-muted-foreground">{courseLabel(code.productSlug)}</span>;
  }
  return (
    <ul className="space-y-1">
      {code.usages.map((u, i) => (
        <li key={`${u.productSlug}-${i}`} className="text-xs">
          {courseLabel(u.productSlug)}
        </li>
      ))}
    </ul>
  );
}
