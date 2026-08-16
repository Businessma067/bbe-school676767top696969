"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Send, Sparkles, Loader2, X, MessageCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { supabase } from "@/integrations/supabase/client";
import {
  usePracticeCase,
  usePracticeCaseActions,
  type PracticeCasePayload,
} from "@/lib/practice-case-context";

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
  const cmd =
    /\\(?:boxed|frac|dfrac|tfrac|sqrt|cdot|times|div|pm|mp|leq|geq|neq|approx|infty|sum|prod|int|lim|log|ln|sin|cos|tan|alpha|beta|gamma|delta|theta|lambda|mu|pi|sigma|phi|omega|mathbb|mathrm|mathbf|text|left|right|to|Rightarrow|Leftrightarrow|forall|exists|in|notin|subset|cup|cap|partial|nabla|binom|overline|underline|hat|bar|vec)\b/;
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

function buildExplainPrompt(selection: string): string {
  return [
    `Explain this excerpt from the current case: «${selection.trim()}».`,
    "Cover briefly: (1) what it means, (2) where it comes from in the given data/rules/passage, (3) how it is used in this case.",
  ].join(" ");
}

function caseBadge(c: PracticeCasePayload): string {
  const left = c.chapterLabel.trim();
  const right = c.title.trim();
  if (left && right && left !== right) return `${left} · ${right}`;
  return left || right || c.taskId;
}

export function FloatingAssistant() {
  const casePayload = usePracticeCase();
  const { registerAssistant } = usePracticeCaseActions();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<ChatMsg[]>([]);
  const loadingRef = useRef(false);
  const caseRef = useRef(casePayload);
  const pendingExplainRef = useRef<string | null>(null);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);

  useEffect(() => {
    caseRef.current = casePayload;
  }, [casePayload]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  // Clear thread when the active case changes.
  useEffect(() => {
    setMessages([]);
    setInput("");
  }, [casePayload?.taskId]);

  const streamReply = useCallback(async (history: ChatMsg[], assistantId: string) => {
    const { data: sessionData } = await supabase.auth.getSession();
    const accessToken = sessionData.session?.access_token;
    if (!accessToken) throw new Error("Please sign in to use the assistant.");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        messages: history.map((m) => ({
          id: m.id,
          role: m.role,
          parts: [{ type: "text", text: m.text }],
        })),
        caseContext: caseRef.current ?? undefined,
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
  }, []);

  const sendText = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loadingRef.current) return;
      const userMsg: ChatMsg = { id: crypto.randomUUID(), role: "user", text: trimmed };
      const assistantId = crypto.randomUUID();
      const newMessages = [...messagesRef.current, userMsg];
      setMessages([...newMessages, { id: assistantId, role: "assistant", text: "" }]);
      setInput("");
      setLoading(true);
      try {
        await streamReply(newMessages, assistantId);
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
    },
    [streamReply],
  );

  const openWithExplain = useCallback(
    (selection: string) => {
      setOpen(true);
      const prompt = buildExplainPrompt(selection);
      if (loadingRef.current) {
        pendingExplainRef.current = prompt;
        return;
      }
      void sendText(prompt);
    },
    [sendText],
  );

  useEffect(() => {
    registerAssistant({
      openWithExplain,
      openAndFocus: () => setOpen(true),
    });
    return () => registerAssistant(null);
  }, [registerAssistant, openWithExplain]);

  useEffect(() => {
    if (!open || loading || !pendingExplainRef.current) return;
    const prompt = pendingExplainRef.current;
    pendingExplainRef.current = null;
    void sendText(prompt);
  }, [open, loading, sendText]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    await sendText(input);
  }

  const suggestions = casePayload
    ? [
        "What is the key idea of this case?",
        "Where do I start from the given conditions?",
        "Which statement is the usual trap?",
      ]
    : [
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
            <div className="min-w-0 flex flex-col leading-tight">
              <span className="font-display text-sm font-semibold text-foreground">AI Assistant</span>
              {casePayload ? (
                <span className="truncate text-[10px] font-medium text-muted-foreground" title={caseBadge(casePayload)}>
                  Case: {caseBadge(casePayload)}
                </span>
              ) : (
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  ASK ANYTHING
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="ml-auto inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.length === 0 ? (
              <div className="space-y-3">
                <p className="px-1 text-xs leading-relaxed text-muted-foreground">
                  {casePayload
                    ? "Select text in the case (or in the explanation) and tap Explain — or ask any question about this case."
                    : "Помогу с навигацией по сайту и разберу задачи по экономике, математике и английскому для BBE-экзамена."}
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
                          rehypePlugins={[
                            [rehypeKatex, { strict: false, trust: true, throwOnError: false, output: "html" }],
                          ]}
                        >
                          {preprocessMath(m.text)}
                        </ReactMarkdown>
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
                placeholder={casePayload ? "Ask about this case…" : "Спросите что-нибудь…"}
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
