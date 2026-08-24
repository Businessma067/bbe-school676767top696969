import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { getCurrentAuthState, type AuthState } from "@/lib/auth-ui";

type Props = {
  children: ReactNode;
  title?: string;
  wide?: boolean;
};

export function useAdminGate() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState<AuthState | null | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const next = await getCurrentAuthState();
      if (cancelled) return;
      if (!next) {
        navigate({ to: "/login" });
        return;
      }
      setAuth(next);
    })();
    return () => {
      cancelled = true;
    };
  }, [navigate]);

  return auth;
}

export function AdminLayout({ children, title, wide }: Props) {
  const auth = useAdminGate();
  const maxW = wide ? "max-w-7xl" : "max-w-6xl";

  if (auth === undefined) {
    return (
      <Shell maxW={maxW}>
        <p className="text-sm text-muted-foreground">Checking access…</p>
      </Shell>
    );
  }

  if (auth === null) {
    return (
      <Shell maxW={maxW}>
        <p className="text-sm text-muted-foreground">Redirecting…</p>
      </Shell>
    );
  }

  if (auth.role !== "admin") {
    return (
      <Shell maxW={maxW}>
        <section className="rounded-2xl border border-destructive/40 bg-destructive/10 p-6">
          <h1 className="font-display text-xl font-bold tracking-tight text-destructive">
            Not authorized
          </h1>
          <p className="mt-2 text-sm text-destructive/80">
            Your account does not have admin access.
          </p>
        </section>
      </Shell>
    );
  }

  return (
    <Shell maxW={maxW}>
      <div className="flex flex-col gap-6 lg:flex-row">
        <aside className="lg:w-52 lg:shrink-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">Admin</p>
          <nav className="mt-3 flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1">
            <AdminNavLink to="/admin">Accounts</AdminNavLink>
            <AdminNavLink to="/admin/users">Users</AdminNavLink>
          </nav>
        </aside>
        <div className="min-w-0 flex-1">
          {title ? (
            <h1 className="mb-4 font-display text-2xl font-bold tracking-tight">{title}</h1>
          ) : null}
          {children}
        </div>
      </div>
    </Shell>
  );
}

function AdminNavLink({
  to,
  children,
}: {
  to: "/admin" | "/admin/users";
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground hover:bg-secondary [&.active]:border-primary [&.active]:bg-primary/10 [&.active]:text-primary"
      activeOptions={{ exact: to === "/admin" }}
    >
      {children}
    </Link>
  );
}

function Shell({ children, maxW }: { children: ReactNode; maxW: string }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader compact maxWidthClassName={maxW} />
      <main className={`mx-auto ${maxW} px-6 py-10`}>{children}</main>
    </div>
  );
}

export function StatCard({ label, value, hint }: { label: string; value: string | number; hint?: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold">{value}</p>
      {hint ? <p className="mt-1 text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

export function DataTable({
  columns,
  rows,
  empty,
}: {
  columns: { key: string; label: string; className?: string }[];
  rows: Record<string, ReactNode>[];
  empty?: string;
}) {
  if (rows.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
        {empty ?? "No data yet."}
      </p>
    );
  }
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-border bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className={`px-3 py-2 font-semibold ${c.className ?? ""}`}>
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-card">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-secondary/30">
              {columns.map((c) => (
                <td key={c.key} className={`px-3 py-2 align-top ${c.className ?? ""}`}>
                  {row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function fmtDate(iso: string | null | undefined): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleString();
}

export function fmtDuration(seconds: number | null | undefined): string {
  if (seconds == null || seconds <= 0) return "—";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}
