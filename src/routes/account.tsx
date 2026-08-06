import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";
import { SiteHeader } from "@/components/SiteHeader";
import { friendlyAuthError } from "@/lib/auth-ui";

export const Route = createFileRoute("/account")({
  component: AccountPage,
  head: () => ({
    meta: [
      { title: "My account · BBE School" },
      { name: "description", content: "Your BBE School profile, progress and recent activity." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

type Profile = { display_name: string | null; created_at: string };

function AccountPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [editingName, setEditingName] = useState(false);
  const [nameDraft, setNameDraft] = useState("");
  const [savingName, setSavingName] = useState(false);
  const [nameMsg, setNameMsg] = useState<string | null>(null);
  const [resetMsg, setResetMsg] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data: s, error: userError } = await supabase.auth.getUser();
      const u = userError ? null : s.user;
      if (!u) {
        navigate({ to: "/login" });
        return;
      }
      if (cancelled) return;
      setUser(u);

      const [pRes, rRes] = await Promise.all([
        supabase
          .from("profiles")
          .select("display_name, created_at")
          .eq("user_id", u.id)
          .maybeSingle(),
        supabase.from("user_roles").select("role").eq("user_id", u.id),
      ]);
      if (cancelled) return;

      setProfile(pRes.data ?? { display_name: null, created_at: u.created_at });
      setNameDraft(pRes.data?.display_name ?? "");
      setRole(rRes.data?.[0]?.role ?? "student");
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [navigate]);

  const handleSaveName = async () => {
    if (!user) return;
    setSavingName(true);
    setNameMsg(null);
    const { error } = await supabase
      .from("profiles")
      .upsert(
        { user_id: user.id, display_name: nameDraft.trim() || null },
        { onConflict: "user_id" },
      );
    setSavingName(false);
    if (error) setNameMsg(friendlyAuthError(error, "Could not save your name."));
    else {
      setProfile((p) => (p ? { ...p, display_name: nameDraft.trim() || null } : p));
      setEditingName(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!user?.email) return;
    setResetMsg(null);
    const { error } = await supabase.auth.resetPasswordForEmail(user.email, {
      redirectTo: window.location.origin + "/reset-password",
    });
    setResetMsg(
      error
        ? friendlyAuthError(error, "Could not send reset email.")
        : "Password reset link sent to your email.",
    );
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/" });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <PageHeader />
        <main className="mx-auto max-w-5xl px-6 py-10">
          <p className="text-muted-foreground">Loading…</p>
        </main>
      </div>
    );
  }

  const memberSince = profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : "—";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHeader />
      <main className="mx-auto max-w-5xl space-y-6 px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-display text-3xl font-bold tracking-tight">My account</h1>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            Log out
          </button>
        </div>

        {/* PROFILE */}
        <Card title="Profile">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Name</dt>
              <dd className="mt-1 flex items-center gap-2">
                {editingName ? (
                  <>
                    <input
                      value={nameDraft}
                      onChange={(e) => setNameDraft(e.target.value)}
                      className="flex-1 rounded-md border border-border bg-background px-2 py-1 text-sm"
                    />
                    <button
                      onClick={handleSaveName}
                      disabled={savingName}
                      className="rounded-md bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground disabled:opacity-60"
                    >
                      {savingName ? "Saving…" : "Save"}
                    </button>
                    <button
                      onClick={() => {
                        setEditingName(false);
                        setNameDraft(profile?.display_name ?? "");
                      }}
                      className="rounded-md border border-border px-3 py-1 text-xs"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <span className="font-medium">{profile?.display_name || "—"}</span>
                    <button
                      onClick={() => setEditingName(true)}
                      className="text-xs text-primary hover:underline"
                    >
                      Edit
                    </button>
                  </>
                )}
              </dd>
              {nameMsg && <p className="mt-1 text-xs text-destructive">{nameMsg}</p>}
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Email</dt>
              <dd className="mt-1 font-medium">{user?.email}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                Member since
              </dt>
              <dd className="mt-1 font-medium">{memberSince}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Role</dt>
              <dd className="mt-1">
                <span className="inline-flex rounded-full bg-secondary px-2 py-0.5 text-xs font-semibold capitalize">
                  {role}
                </span>
              </dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={handlePasswordReset}
              className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary"
            >
              Change password
            </button>
          </div>
          {resetMsg && <p className="mt-2 text-xs text-muted-foreground">{resetMsg}</p>}
        </Card>

        {/* MY COURSE */}
        <Card title="My course">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Access</p>
              <p className="mt-1 text-lg font-semibold">Demo</p>
              <p className="text-xs text-muted-foreground">
                Your progress and statistics live in the demo practice section.
              </p>
            </div>
            <Link
              to="/demo-practice"
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Go to demo practice →
            </Link>
          </div>
        </Card>
      </main>
    </div>
  );
}

function PageHeader() {
  return (
    <SiteHeader
      sticky={false}
      compact
      maxWidthClassName="max-w-5xl"
      actions={
        <Link to="/practice" className="text-sm font-semibold text-primary hover:underline">
          Practice →
        </Link>
      }
    />
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="mb-4 font-display text-lg font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-lg border border-border bg-secondary/40 p-3">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
  );
}

function EmptyState({ msg, ctaTo, ctaLabel }: { msg: string; ctaTo: string; ctaLabel: string }) {
  return (
    <div className="rounded-md border border-dashed border-border p-6 text-center">
      <p className="text-sm text-muted-foreground">{msg}</p>
      <Link
        to={ctaTo}
        className="mt-3 inline-block rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
