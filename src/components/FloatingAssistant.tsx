"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Send, X, MessageCircle, Database } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import {
  usePracticeCase,
  usePracticeCaseActions,
  type PracticeCasePayload,
} from "@/lib/practice-case-context";
import { answerFromCaseDatabase } from "@/lib/practice-case-kb";

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

function caseBadge(c: PracticeCasePayload): string {
  const left = c.chapterLabel.trim();
  const right = c.title.trim();
  if (left && right && left !== right) return `${left} · ${right}`;
  return left || right || c.taskId;
}

const SITE_FAQ: Array<{ q: string; a: string }> = [
  {
    q: "full course",
    a: "**Full course** is the paid prep track (€349): Math, Economics, and English practice banks, mocks, and study tools. Open it from the hero CTA or **BBE-school products**.",
  },
  {
    q: "demo",
    a: "**Demo-Practice** (`/demo-practice`) unlocks a free slice of Math, Economics, and English tasks so you can try the exam format before buying.",
  },
  {
    q: "parents",
    a: "**Message to Parents** is the PDF on the homepage that explains course value for families.",
  },
];

function answerSiteFaq(query: string): string {
  const q = query.toLowerCase();
  const hit = SITE_FAQ.find((x) => q.includes(x.q) || x.q.split(" ").every((w) => q.includes(w)));
  if (hit) return hit.a;
  return [
    "Open a practice case (Math / English / Economics), then select text and tap **Explain**, or ask about that case.",
    "",
    "Outside a case I only answer from the site guide: Demo-Practice, Full course, Message to Parents, FAQ.",
  ].join("\n");
}

export function FloatingAssistant() {
  const casePayload = usePracticeCase();
  const { registerAssistant } = usePracticeCaseActions();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<ChatMsg[]>([]);
  const caseRef = useRef(casePayload);
  const pendingExplainRef = useRef<string | null>(null);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    caseRef.current = casePayload;
  }, [casePayload]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    setMessages([]);
    setInput("");
  }, [casePayload?.taskId]);

  const replyInstant = useCallback((text: string, mode: "explain" | "ask") => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: ChatMsg = { id: crypto.randomUUID(), role: "user", text: trimmed };
    const caseNow = caseRef.current;
    const answer = caseNow
      ? answerFromCaseDatabase(caseNow, trimmed, mode)
      : answerSiteFaq(trimmed);
    const assistantMsg: ChatMsg = {
      id: crypto.randomUUID(),
      role: "assistant",
      text: answer,
    };
    setMessages([...messagesRef.current, userMsg, assistantMsg]);
    setInput("");
  }, []);

  const openWithExplain = useCallback(
    (selection: string) => {
      setOpen(true);
      pendingExplainRef.current = selection.trim();
    },
    [],
  );

  useEffect(() => {
    registerAssistant({
      openWithExplain,
      openAndFocus: () => setOpen(true),
    });
    return () => registerAssistant(null);
  }, [registerAssistant, openWithExplain]);

  useEffect(() => {
    if (!open || !pendingExplainRef.current) return;
    const selection = pendingExplainRef.current;
    pendingExplainRef.current = null;
    replyInstant(selection, "explain");
  }, [open, replyInstant]);

  function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    replyInstant(input, "ask");
  }

  const suggestions = casePayload
    ? [
        "What is the key idea of this case?",
        "Where do I start from the given conditions?",
        "Why is statement D false?",
      ]
    : ["What is Demo-Practice?", "What is in the Full course?", "Message to Parents"];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close case assistant" : "Open case assistant"}
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-foreground text-background shadow-lg ring-1 ring-border transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[70vh] max-h-[600px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <div className="grid h-7 w-7 place-items-center rounded-full bg-foreground text-background">
              <Database className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex flex-col leading-tight">
              <span className="font-display text-sm font-semibold text-foreground">Case Assistant</span>
              {casePayload ? (
                <span
                  className="truncate text-[10px] font-medium text-muted-foreground"
                  title={caseBadge(casePayload)}
                >
                  DB · {caseBadge(casePayload)}
                </span>
              ) : (
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Case bank · site guide
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
                    ? "Answers come instantly from this case’s authored stem and solution notes (not a free-form AI model). Select text → Explain, or ask about the case."
                    : "Open a practice case to query its explanation bank. Outside a case I only answer site-guide questions."}
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
                    <div className="max-w-[92%] text-sm leading-relaxed text-foreground [&_p]:mb-2 [&_p:last-child]:mb-0 [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1 [&_code]:rounded [&_code]:bg-secondary [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[12px] [&_pre]:my-2 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-secondary [&_pre]:p-2 [&_pre]:text-[12px] [&_strong]:font-semibold [&_a]:underline [&_h3]:mb-1 [&_h3]:mt-2 [&_h3]:text-xs [&_h3]:font-bold [&_h3]:uppercase [&_h3]:tracking-wide [&_h3]:text-muted-foreground">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm, remarkMath]}
                        rehypePlugins={[
                          [rehypeKatex, { strict: false, trust: true, throwOnError: false, output: "html" }],
                        ]}
                      >
                        {preprocessMath(m.text)}
                      </ReactMarkdown>
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
                placeholder={casePayload ? "Ask this case bank…" : "Site guide…"}
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-foreground text-background transition-opacity disabled:opacity-40"
                aria-label="Send"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
