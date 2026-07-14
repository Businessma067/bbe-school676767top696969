import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AuthNav } from "@/components/AuthNav";
import { getCurrentAuthState, type AuthState } from "@/lib/auth-ui";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "Dashboard · BBE School" },
      { name: "description", content: "Your BBE School practice dashboard." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function DashboardPage() {
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
    return (
      <Shell>
        <p className="text-sm text-muted-foreground">Loading…</p>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">Dashboard</p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight">Welcome back, {auth.name}</h1>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-display text-lg font-semibold tracking-tight">Practice</h2>
            <p className="mt-2 text-sm text-muted-foreground">Continue with true/false exam-style questions.</p>
            <Link
              to="/practice"
              className="mt-5 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Start practice
            </Link>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-display text-lg font-semibold tracking-tight">Account</h2>
            <p className="mt-2 text-sm text-muted-foreground">Review your profile, role, and progress overview.</p>
            <Link
              to="/account"
              className="mt-5 inline-flex rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary"
            >
              Open account
            </Link>
          </section>
        </div>
      </div>
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
