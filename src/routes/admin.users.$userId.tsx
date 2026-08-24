import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { UserDetailView } from "@/components/admin/UserDetailView";
import { adminExportUsersCsv, adminGetUserDetail } from "@/lib/admin.functions";
import type { AdminUserDetail } from "@/lib/admin-types";
import { ChevronLeft, Download } from "lucide-react";

export const Route = createFileRoute("/admin/users/$userId")({
  component: AdminUserDetailPage,
  head: () => ({
    meta: [
      { title: "User detail · Admin · BBE School" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function AdminUserDetailPage() {
  const { userId } = Route.useParams();
  const [detail, setDetail] = useState<AdminUserDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await adminGetUserDetail({ data: { userId } });
        if (!cancelled) setDetail(res);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load user");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [userId]);

  const handleExport = async () => {
    const { csv } = await adminExportUsersCsv({ data: { userId } });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `user-${userId.slice(0, 8)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AdminLayout wide>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/admin/users"
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          <ChevronLeft className="h-4 w-4" /> All users
        </Link>
        <button
          type="button"
          onClick={() => void handleExport()}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-semibold hover:bg-secondary"
        >
          <Download className="h-4 w-4" /> Export CSV
        </button>
      </div>

      {error ? (
        <p className="rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </p>
      ) : loading ? (
        <p className="text-sm text-muted-foreground">Loading user data…</p>
      ) : detail ? (
        <UserDetailView detail={detail} />
      ) : null}
    </AdminLayout>
  );
}
