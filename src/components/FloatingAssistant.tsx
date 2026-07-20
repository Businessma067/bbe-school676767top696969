"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Loader2, X, MessageCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

function preprocessMath(src: string): string {
  if (!src) return src;
  let s = src;
  const codeBlocks: string[] = [];
  s = s.replace(/```[\s\S]*?```|`[^`\n]*`/g, (m) => {
    codeBlocks.push(m);
    return `\u0000CODE${codeBlocks.length - 1}\u0000`;
  });
  s = s.replace(/\\\[([\s\S]+?)\\\]/g, (_m, inner) => `$$${inner}$$`);
  s = s.replace(/\\\(([\s\S]+?)\\\)/g, (_m, inner) => `$${inner}$`);
  const parts = s.split(/(\$\$[\s\S]+?\$\$|\$[^\n$]+?\$)/g);
  const cmd = /\\(?:boxed|frac|dfrac|tfrac|sqrt|cdot|times|div|pm|mp|leq|geq|neq|approx|infty|sum|prod|int|lim|log|ln|sin|cos|tan|alpha|beta|gamma|delta|theta|lambda|mu|pi|sigma|phi|omega|mathbb|mathrm|mathbf|text|left|right|to|Rightarrow|Leftrightarrow|forall|exists|in|notin|subset|cup|cap|partial|nabla|binom|overline|underline|hat|bar|vec)\b/;
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 1) continue;
    const seg = parts[i];
    if (!cmd.test(seg)) continue;
    parts[i] = seg.replace(
      /(\\[A-Za-z]+(?:\s*(?:\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}|\[[^\]]*\]))*(?:\s*[\^_]\s*(?:\{[^{}]*\}|[A-Za-z0-9]))*)/g,
      (m) => `$${m}$`,
    );
  }
  s = parts.join("");
  s = s.replace(/\u0000CODE(\d+)\u0000/g, (_m, i) => codeBlocks[Number(i)]);
  return s;
}

type ChatMsg = { id: string; role: "user" | "assistant"; text: string };

export function FloatingAssistant() {
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
            /* ignore */
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
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-foreground text-background shadow-lg ring-1 ring-border transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[70vh] max-h-[600px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <div className="grid h-7 w-7 place-items-center rounded-full bg-foreground text-background">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-sm font-semibold text-foreground">AI Assistant</span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                ASK ANYTHING
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.length === 0 ? (
              <div className="space-y-3">
                <p className="px-1 text-xs leading-relaxed text-muted-foreground">
                  Помогу с навигацией по сайту и разберу задачи по экономике, математике и английскому для BBE-экзамена.
                </p>
                <div className="flex flex-wrap gap-1.5">
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
                    <div className="max-w-[92%] text-sm leading-relaxed text-foreground [&_p]:mb-2 [&_p:last-child]:mb-0 [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1 [&_code]:rounded [&_code]:bg-secondary [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[12px] [&_pre]:my-2 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-secondary [&_pre]:p-2 [&_pre]:text-[12px] [&_strong]:font-semibold [&_a]:underline">
                      {m.text ? (
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm, remarkMath]}
                          rehypePlugins={[[rehypeKatex, { strict: false, trust: true, throwOnError: false, output: "html" }]]}
                        >{preprocessMath(m.text)}</ReactMarkdown>
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
      )}
    </>
  );
}
