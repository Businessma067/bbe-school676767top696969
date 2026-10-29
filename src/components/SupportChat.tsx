import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { MessageCircle, X } from "lucide-react";
import {
  pullSupportMessages,
  sendSupportMessage,
  supportHasReply,
  type SupportMessage,
} from "@/lib/support-chat";

export function SupportChat() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<SupportMessage[]>([]);
  const [text, setText] = useState("");
  const [unread, setUnread] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (path.startsWith("/admin")) return;
    let stop = false;
    const tick = async () => {
      try {
        if (open) {
          const next = await pullSupportMessages();
          if (!stop) {
            setMessages(next);
            setUnread(false);
            setError(null);
          }
        } else {
          const flag = await supportHasReply();
          if (!stop) setUnread(flag);
        }
      } catch (err) {
        if (open && !stop) {
          const msg = err instanceof Error ? err.message : "";
          if (/SQL Editor|SERVICE_ROLE|not connected|schema cache|support_send/i.test(msg)) {
            setError("Support is being set up. Please try again in a moment.");
          }
        }
      }
    };
    void tick();
    const timer = window.setInterval(tick, open ? 4000 : 12000);
    return () => {
      stop = true;
      window.clearInterval(timer);
    };
  }, [open, path]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
  }, [messages, open]);

  if (path.startsWith("/admin")) return null;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const body = text.trim();
    if (!body || sending) return;
    setSending(true);
    setError(null);
    try {
      await sendSupportMessage(body);
      setText("");
      setMessages(await pullSupportMessages());
    } catch (err) {
      const msg = err instanceof Error ? err.message : "";
      setError(
        /SQL Editor|SERVICE_ROLE|schema cache|support_send/i.test(msg)
          ? "Support is not connected yet. An admin needs to finish setup in /admin/support."
          : "Message was not sent. Try again.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg"
      >
        {open ? <X className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
        Support
        {unread && !open ? <span className="h-2 w-2 rounded-full bg-white" /> : null}
      </button>
      {open ? (
        <div className="fixed bottom-[calc(4.5rem+env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] z-50 flex h-[min(70vh,28rem)] w-[min(92vw,22rem)] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
          <div className="border-b border-border px-4 py-3">
            <p className="font-display text-sm font-semibold">Support</p>
            <p className="text-xs text-muted-foreground">We reply here on the site.</p>
          </div>
          <div ref={scroller} className="flex-1 space-y-2 overflow-y-auto px-3 py-3">
            {messages.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Write a message and we will answer here.
              </p>
            ) : (
              messages.map((m) => (
                <p
                  key={m.id}
                  className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm ${
                    m.sender === "user"
                      ? "ml-auto bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  {m.body}
                </p>
              ))
            )}
          </div>
          <form onSubmit={submit} className="flex gap-2 border-t border-border p-3">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Message"
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
          {error ? <p className="px-3 pb-3 text-xs text-destructive">{error}</p> : null}
        </div>
      ) : null}
    </>
  );
}
