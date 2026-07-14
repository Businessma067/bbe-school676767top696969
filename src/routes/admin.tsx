import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AuthNav } from "@/components/AuthNav";
import { getCurrentAuthState, type AuthState } from "@/lib/auth-ui";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
  head: () => ({
    meta: [
      { title: "Admin panel · BBE School" },
      { name: "description", content: "Admin tools for BBE School." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function AdminPage() {
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

  if (auth === undefined) {
    return <Shell><p className="text-sm text-muted-foreground">Checking access…</p></Shell>;
  }

  if (auth === null) {
    return <Shell><p className="text-sm text-muted-foreground">Redirecting…</p></Shell>;
  }

  if (auth.role !== "admin") {
    return (
      <Shell>
        <section className="rounded-2xl border border-destructive/40 bg-destructive/10 p-6">
          <h1 className="font-display text-xl font-bold tracking-tight text-destructive">Not authorized</h1>
          <p className="mt-2 text-sm text-destructive/80">Your account does not have admin access.</p>
        </section>
      </Shell>
    );
  }

  return (
    <Shell>
      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">Admin panel</p>
        <h1 className="mt-2 font-display text-2xl font-bold tracking-tight">Admin tools</h1>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link to="/admin/economics" className="rounded-xl border border-border bg-background p-4 hover:bg-secondary">
            <span className="font-semibold">Economics cases</span>
            <span className="mt-1 block text-sm text-muted-foreground">Create and manage economics practice cases.</span>
          </Link>
        </div>
      </section>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-md ring-1 ring-primary/30">
              <span className="font-display text-xs font-bold leading-none text-primary-foreground tracking-tight">BBE</span>
            </div>
            <span className="font-display text-sm font-bold tracking-tight">BBE School</span>
          </Link>
          <AuthNav />
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  );
}
