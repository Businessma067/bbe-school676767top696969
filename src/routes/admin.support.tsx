import { FormEvent, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, fmtDate } from "@/components/admin/AdminLayout";
import {
  adminApplySupportSchema,
  adminSupportInbox,
  adminSupportReply,
  adminSupportStatus,
  adminSupportThread,
  type SupportInboxRow,
  type SupportMessage,
} from "@/lib/support-chat";
import { SUPPORT_CHAT_SQL } from "@/lib/support-chat-sql";

export const Route = createFileRoute("/admin/support")({
  component: SupportPage,
  head: () => ({
    meta: [{ title: "Support · Admin" }, { name: "robots", content: "noindex" }],
  }),
});

const SQL_PATH = "supabase/migrations/20261026120000_support_chat.sql";

function SupportPage() {
  const [rows, setRows] = useState<SupportInboxRow[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const [messages, setMessages] = useState<SupportMessage[]>([]);
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState<boolean | null>(null);
  const [mode, setMode] = useState<"postgres" | "tables" | "rpc" | "file" | "none" | null>(null);
  const [copied, setCopied] = useState(false);
  const [replyError, setReplyError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [applying, setApplying] = useState(false);
  const [applyMsg, setApplyMsg] = useState<string | null>(null);
  const sqlText = SUPPORT_CHAT_SQL;

  const refreshStatus = async () => {
    try {
      const status = await adminSupportStatus();
      setReady(status.ready);
      setMode(status.mode);
      if (!status.ready) setError(status.hint);
      else setError(null);
    } catch (err) {
      setReady(false);
      setMode("none");
      setError(err instanceof Error ? err.message : "Support backend unavailable.");
    }
  };

  const loadInbox = async () => {
    try {
      setRows(await adminSupportInbox());
      setError(null);
      setReady(true);
    } catch (err) {
      setReady(false);
      setError(
        err instanceof Error
          ? err.message
          : "Support chat is not ready. Run the support chat SQL in Supabase.",
      );
    }
  };

  const openThread = async (id: string) => {
    setActive(id);
    setReplyError(null);
    try {
      setMessages(await adminSupportThread(id));
      void loadInbox();
    } catch (err) {
      setReplyError(err instanceof Error ? err.message : "Could not open conversation.");
    }
  };

  useEffect(() => {
    void refreshStatus();
    void loadInbox();
    const timer = window.setInterval(() => void loadInbox(), 8000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!active) return;
    const timer = window.setInterval(() => {
      void adminSupportThread(active)
        .then(setMessages)
        .catch(() => undefined);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [active]);

  const copySql = async () => {
    try {
      await navigator.clipboard.writeText(sqlText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const applySchema = async () => {
    setApplying(true);
    setApplyMsg(null);
    try {
      const res = await adminApplySupportSchema();
      if (res.ok) {
        setApplyMsg("Schema applied. Reloading…");
        await refreshStatus();
        await loadInbox();
      } else {
        setApplyMsg(res.error);
      }
    } catch (err) {
      setApplyMsg(err instanceof Error ? err.message : "Could not apply schema.");
    } finally {
      setApplying(false);
    }
  };

  const reply = async (e: FormEvent) => {
    e.preventDefault();
    if (!active || !text.trim() || sending) return;
    setSending(true);
    setReplyError(null);
    try {
      await adminSupportReply(active, text.trim());
      setText("");
      setMessages(await adminSupportThread(active));
      void loadInbox();
    } catch (err) {
      setReplyError(err instanceof Error ? err.message : "Reply was not sent.");
    } finally {
      setSending(false);
    }
  };

  return (
    <AdminLayout title="Support" wide>
      {ready === false ? (
        <div className="mb-4 space-y-3 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          <p className="font-semibold">Support backend is not connected yet</p>
          <p className="text-destructive/90">
            {error ??
              "Messages from the site chat cannot be stored until the support tables (or service role) are available."}
          </p>
          <ol className="list-decimal space-y-1 pl-5 text-destructive/90">
            <li>
              Open <strong>Supabase → SQL Editor → New query</strong>
            </li>
            <li>
              Paste the full file <code className="rounded bg-destructive/10 px-1">{SQL_PATH}</code>{" "}
              (or use Copy SQL below)
            </li>
            <li>Click Run, then refresh this page</li>
          </ol>
          <p className="text-xs text-destructive/80">
            Alternative: add{" "}
            <code className="rounded bg-destructive/10 px-1">SUPABASE_SERVICE_ROLE_KEY</code> in
            Lovable Cloud → Secrets so chat can use Storage without SQL.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => void applySchema()}
              disabled={applying}
              className="rounded-md bg-destructive px-3 py-2 text-xs font-semibold text-destructive-foreground disabled:opacity-60"
            >
              {applying ? "Applying…" : "Apply schema (needs DATABASE_URL)"}
            </button>
            <button
              type="button"
              onClick={() => void copySql()}
              className="rounded-md border border-destructive/40 bg-background px-3 py-2 text-xs font-semibold text-destructive"
            >
              {copied ? "Copied" : "Copy SQL"}
            </button>
            <button
              type="button"
              onClick={() => {
                void refreshStatus();
                void loadInbox();
              }}
              className="rounded-md border border-destructive/40 bg-background px-3 py-2 text-xs font-semibold text-destructive"
            >
              Check again
            </button>
          </div>
          {applyMsg ? <p className="text-xs text-destructive/90">{applyMsg}</p> : null}
          <pre className="max-h-48 overflow-auto rounded-lg bg-background/80 p-3 text-[11px] text-foreground">
            {sqlText}
          </pre>
        </div>
      ) : null}

      {ready && mode ? (
        <p className="mb-3 text-xs text-muted-foreground">
          Backend:{" "}
          {mode === "postgres"
            ? "Lovable / Postgres"
            : mode === "tables"
              ? "Supabase tables"
              : mode === "rpc"
                ? "Supabase RPCs"
                : mode === "file"
                  ? "Temporary server store (waiting for Lovable drizzle 0004_support_chat)"
                  : mode}
          {rows.some((r) => r.admin_unread) ? " · new messages waiting" : ""}
        </p>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-[18rem_1fr]">
        <div className="space-y-2">
          {rows.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No messages yet. When someone writes via the Support button on the site, the
              conversation appears here for every admin.
            </p>
          ) : (
            rows.map((row) => (
              <button
                key={row.id}
                type="button"
                onClick={() => void openThread(row.id)}
                className={`w-full rounded-xl border px-3 py-2 text-left ${
                  active === row.id ? "border-primary bg-primary/10" : "border-border bg-card"
                }`}
              >
                <p className="truncate text-sm font-semibold">
                  {row.user_email || "Visitor"}
                  {row.admin_unread ? " · new" : ""}
                </p>
                <p className="truncate text-xs text-muted-foreground">{row.last_body}</p>
                <p className="text-[11px] text-muted-foreground">{fmtDate(row.updated_at)}</p>
              </button>
            ))
          )}
        </div>
        <div className="flex min-h-[24rem] flex-col rounded-2xl border border-border bg-card">
          <div className="flex-1 space-y-2 overflow-y-auto p-4">
            {active == null ? (
              <p className="text-sm text-muted-foreground">Choose a conversation.</p>
            ) : (
              messages.map((m) => (
                <p
                  key={m.id}
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                    m.sender === "admin"
                      ? "ml-auto bg-primary text-primary-foreground"
                      : "bg-secondary"
                  }`}
                >
                  {m.body}
                </p>
              ))
            )}
          </div>
          {active ? (
            <form onSubmit={reply} className="flex gap-2 border-t border-border p-3">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Reply"
                className="min-w-0 flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                disabled={sending}
                className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-60"
              >
                Send
              </button>
            </form>
          ) : null}
          {replyError ? <p className="px-3 pb-3 text-xs text-destructive">{replyError}</p> : null}
        </div>
      </div>
    </AdminLayout>
  );
}
