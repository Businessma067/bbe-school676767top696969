import { FormEvent, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, fmtDate } from "@/components/admin/AdminLayout";
import {
  adminSupportInbox,
  adminSupportReply,
  adminSupportThread,
  type SupportInboxRow,
  type SupportMessage,
} from "@/lib/support-chat";

export const Route = createFileRoute("/admin/support")({
  component: SupportPage,
  head: () => ({
    meta: [{ title: "Support · Admin" }, { name: "robots", content: "noindex" }],
  }),
});

function SupportPage() {
  const [rows, setRows] = useState<SupportInboxRow[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const [messages, setMessages] = useState<SupportMessage[]>([]);
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);

  const loadInbox = async () => {
    try {
      setRows(await adminSupportInbox());
      setError(null);
    } catch {
      setError("Support chat is not ready yet. Run the support chat SQL in Supabase.");
    }
  };

  const openThread = async (id: string) => {
    setActive(id);
    setMessages(await adminSupportThread(id));
    void loadInbox();
  };

  useEffect(() => {
    void loadInbox();
    const timer = window.setInterval(() => void loadInbox(), 8000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!active) return;
    const timer = window.setInterval(() => {
      void adminSupportThread(active).then(setMessages).catch(() => undefined);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [active]);

  const reply = async (e: FormEvent) => {
    e.preventDefault();
    if (!active || !text.trim()) return;
    await adminSupportReply(active, text.trim());
    setText("");
    setMessages(await adminSupportThread(active));
    void loadInbox();
  };

  return (
    <AdminLayout title="Support" wide>
      {error ? <p className="mb-4 text-sm text-destructive">{error}</p> : null}
      <div className="grid gap-4 lg:grid-cols-[18rem_1fr]">
        <div className="space-y-2">
          {rows.length === 0 ? (
            <p className="text-sm text-muted-foreground">No messages yet.</p>
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
                    m.sender === "admin" ? "ml-auto bg-primary text-primary-foreground" : "bg-secondary"
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
                className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground"
              >
                Send
              </button>
            </form>
          ) : null}
        </div>
      </div>
    </AdminLayout>
  );
}
