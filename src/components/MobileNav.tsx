"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Send, Sparkles, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  { label: "Demo-Practice", href: "/demo-practice", isRoute: true },
  { label: "Full course", href: "#full-course", isRoute: false },
  { label: "BBE-school products", href: "#bbe-products", isRoute: false },
  { label: "Important features", href: "#important-features", isRoute: false },
  { label: "Reviews", href: "#reviews", isRoute: false },
  { label: "FAQ", href: "#faq", isRoute: false },
];

type ChatMsg = { id: string; role: "user" | "assistant"; text: string };

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    const userMsg: ChatMsg = { id: crypto.randomUUID(), role: "user", text };
    const assistantId = crypto.randomUUID();
    const newMessages = [...messages, userMsg];
    setMessages([...newMessages, { id: assistantId, role: "assistant", text: "" }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            id: m.id,
            role: m.role,
            parts: [{ type: "text", text: m.text }],
          })),
        }),
      });
      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let assistantText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (!data || data === "[DONE]") continue;
          try {
            const evt = JSON.parse(data);
            if (evt.type === "text-delta" && typeof evt.delta === "string") {
              assistantText += evt.delta;
              setMessages((prev) =>
                prev.map((m) => (m.id === assistantId ? { ...m, text: assistantText } : m)),
              );
            }
          } catch {
            // ignore non-json lines
          }
        }
      }
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? { ...m, text: "Извините, произошла ошибка. Попробуйте позже." }
            : m,
        ),
      );
    } finally {
      setLoading(false);
    }
  }

  const suggestions = [
    "Объясни эластичность спроса",
    "Как решать задачи на производные?",
    "Что входит в Full course?",
    "Советы по тайм-менеджменту на экзамене",
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground transition-all hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85vw] max-w-sm border-l border-border bg-background p-0">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <SheetTitle className="font-display text-base font-semibold tracking-tight text-foreground">
              Menu
            </SheetTitle>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <SheetDescription className="sr-only">
            Navigation menu and AI assistant for the BBE School website
          </SheetDescription>

          <nav className="border-b border-border px-6 py-4">
            <ul className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <li key={item.label}>
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 font-display text-base font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 font-display text-base font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* AI Assistant */}
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex items-center gap-2 border-b border-border px-6 py-3">
              <div className="grid h-7 w-7 place-items-center rounded-full bg-foreground text-background">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-sm font-semibold text-foreground">AI Assistant</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Ask about the site
                </span>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.length === 0 ? (
                <div className="space-y-3">
                  <p className="px-2 text-xs leading-relaxed text-muted-foreground">
                    Помогу с навигацией по сайту и разберу задачи по экономике, математике и английскому для BBE-экзамена.
                  </p>
                  <div className="flex flex-wrap gap-1.5 px-2">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setInput(s)}
                        className="rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium text-foreground transition-colors hover:bg-secondary"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((m) =>
                  m.role === "user" ? (
                    <div key={m.id} className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2 text-sm text-primary-foreground">
                        {m.text}
                      </div>
                    </div>
                  ) : (
                    <div key={m.id} className="flex justify-start">
                      <div className="max-w-[92%] text-sm leading-relaxed text-foreground [&_p]:mb-2 [&_p:last-child]:mb-0 [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1 [&_code]:rounded [&_code]:bg-secondary [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[12px] [&_pre]:my-2 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-secondary [&_pre]:p-2 [&_pre]:text-[12px] [&_strong]:font-semibold [&_h1]:mt-2 [&_h1]:mb-1 [&_h1]:text-base [&_h1]:font-semibold [&_h2]:mt-2 [&_h2]:mb-1 [&_h2]:text-sm [&_h2]:font-semibold [&_h3]:mt-2 [&_h3]:mb-1 [&_h3]:text-sm [&_h3]:font-semibold [&_a]:underline">
                        {m.text ? (
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.text}</ReactMarkdown>
                        ) : loading ? (
                          <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                        ) : null}
                      </div>
                    </div>
                  ),
                )
              )}
            </div>

            <form onSubmit={sendMessage} className="border-t border-border p-3">
              <div className="flex items-end gap-2 rounded-xl border border-border bg-card px-3 py-2 focus-within:ring-2 focus-within:ring-ring">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Спросите что-нибудь…"
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-foreground text-background transition-opacity disabled:opacity-40"
                  aria-label="Send"
                >
                  {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
