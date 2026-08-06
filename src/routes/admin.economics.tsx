import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import { AuthNav } from "@/components/AuthNav";
import { Loader2, ChevronLeft, Check } from "lucide-react";

export const Route = createFileRoute("/admin/economics")({
  head: () => ({ meta: [{ title: "Admin · Economics Cases" }, { name: "robots", content: "noindex" }] }),
  component: AdminEconomics,
});

function AdminEconomics() {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setUser(s?.user ?? null));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) { setIsAdmin(user === null ? false : null); return; }
    (async () => {
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();
      setIsAdmin(!error && !!data);
    })();
  }, [user]);

  if (user === undefined || (user && isAdmin === null)) {
    return <Shell><div className="flex items-center gap-2 text-sm text-muted-foreground"><Loader2 className="h-4 w-4 animate-spin" /> Checking access…</div></Shell>;
  }
  if (!user) {
    return (
      <Shell>
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <p className="text-sm text-muted-foreground">You must be signed in as an admin.</p>
          <button onClick={() => navigate({ to: "/login" })} className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Sign in</button>
        </div>
      </Shell>
    );
  }
  if (!isAdmin) {
    return (
      <Shell>
        <div className="rounded-2xl border border-destructive/40 bg-destructive/10 p-6">
          <p className="text-sm font-semibold text-destructive">Not authorized</p>
          <p className="mt-2 text-xs text-destructive/80">
            Your account (<code>{user.email}</code>) is not an admin. Ask an existing admin to grant you the
            <code className="mx-1">admin</code> role in <code>user_roles</code>.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Your user id: <code className="select-all font-mono">{user.id}</code>
          </p>
        </div>
      </Shell>
    );
  }

  return <Shell><AdminForm /></Shell>;
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold hover:text-primary">
            <ChevronLeft className="h-4 w-4" /> Home
          </Link>
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-bold tracking-tight">Admin · Economics</span>
            <AuthNav />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-10 lg:px-8">{children}</main>
    </div>
  );
}

const EMPTY = { caseId: "", title: "", context: "", subsection: "2", difficulty: "3/5", sortOrder: 100 };

function AdminForm() {
  const [meta, setMeta] = useState(EMPTY);
  const [statements, setStatements] = useState<string[]>(["", "", "", "", ""]);
  const [answers, setAnswers] = useState<boolean[]>([false, false, false, false, false]);
  const [explanations, setExplanations] = useState<string[]>(["", "", "", "", ""]);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);

  const reset = () => {
    setMeta(EMPTY);
    setStatements(["", "", "", "", ""]);
    setAnswers([false, false, false, false, false]);
    setExplanations(["", "", "", "", ""]);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true); setMsg(null);
    const { error } = await supabase.from("economics_cases").insert({
      case_id: meta.caseId.trim(),
      title: meta.title.trim(),
      context: meta.context.trim(),
      subsection: meta.subsection.trim() || "misc",
      difficulty_level: meta.difficulty,
      sort_order: Number(meta.sortOrder) || 0,
      statements,
      answer_key: answers,
      tactical_explanations: explanations,
    });
    setSaving(false);
    if (error) setMsg({ kind: "err", text: error.message });
    else { setMsg({ kind: "ok", text: `Case "${meta.caseId}" deployed.` }); reset(); }
  };

  return (
    <form onSubmit={submit} className="space-y-6">
      <div className="grid gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-2">
        <Field label="Case ID" value={meta.caseId} onChange={(v) => setMeta({ ...meta, caseId: v })} placeholder="CASE 4.3.36" required />
        <Field label="Subsection" value={meta.subsection} onChange={(v) => setMeta({ ...meta, subsection: v })} placeholder="2" required />
        <Field label="Title" value={meta.title} onChange={(v) => setMeta({ ...meta, title: v })} className="sm:col-span-2" required />
        <Field label="Difficulty" value={meta.difficulty} onChange={(v) => setMeta({ ...meta, difficulty: v })} placeholder="3/5" />
        <Field label="Sort order" value={String(meta.sortOrder)} onChange={(v) => setMeta({ ...meta, sortOrder: Number(v) || 0 })} />
        <label className="sm:col-span-2 flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-taupe">Context</span>
          <textarea
            value={meta.context}
            onChange={(e) => setMeta({ ...meta, context: e.target.value })}
            rows={4}
            required
            className="rounded-md border border-border bg-background px-3 py-2 text-sm"
          />
        </label>
      </div>

      <div className="space-y-3 rounded-2xl border border-border bg-card p-6">
        <h3 className="font-display text-sm font-bold uppercase tracking-widest">Statements, answers & explanations</h3>
        {statements.map((_, i) => (
          <div key={i} className="rounded-xl border border-border bg-background p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold text-muted-foreground">Statement {i + 1}</span>
              <label className="flex items-center gap-2 text-xs font-semibold">
                <input
                  type="checkbox"
                  checked={answers[i]}
                  onChange={(e) => setAnswers(answers.map((a, idx) => (idx === i ? e.target.checked : a)))}
                  className="h-4 w-4 rounded border-border"
                />
                Answer key: <span className={cn("rounded px-2 py-0.5 font-bold", answers[i] ? "bg-emerald-500/15 text-emerald-700" : "bg-destructive/15 text-destructive")}>{answers[i] ? "TRUE" : "FALSE"}</span>
              </label>
            </div>
            <textarea
              value={statements[i]}
              onChange={(e) => setStatements(statements.map((s, idx) => (idx === i ? e.target.value : s)))}
              rows={2}
              required
              placeholder={`Statement ${i + 1} text…`}
              className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm"
            />
            <textarea
              value={explanations[i]}
              onChange={(e) => setExplanations(explanations.map((s, idx) => (idx === i ? e.target.value : s)))}
              rows={2}
              required
              placeholder={`Tactical explanation ${i + 1}…`}
              className="mt-2 w-full rounded-md border border-border bg-card px-3 py-2 text-sm"
            />
          </div>
        ))}
      </div>

      {msg && (
        <div className={cn(
          "rounded-md border p-3 text-sm",
          msg.kind === "ok" ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200"
                            : "border-destructive/40 bg-destructive/10 text-destructive",
        )}>
          {msg.kind === "ok" && <Check className="mr-1 inline h-4 w-4" />}{msg.text}
        </div>
      )}

      <div className="flex justify-end">
        <button type="submit" disabled={saving} className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 disabled:opacity-60">
          {saving && <Loader2 className="h-4 w-4 animate-spin" />} Deploy case
        </button>
      </div>
    </form>
  );
}

function Field({ label, value, onChange, placeholder, className, required }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; className?: string; required?: boolean;
}) {
  return (
    <label className={cn("flex flex-col gap-1", className)}>
      <span className="text-xs font-semibold uppercase tracking-widest text-taupe">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="rounded-md border border-border bg-background px-3 py-2 text-sm"
      />
    </label>
  );
}
