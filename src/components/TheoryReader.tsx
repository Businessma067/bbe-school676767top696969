import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BookOpen, Target, List, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import chaptersData from "@/data/textbook-chapters.json";

type Props = {
  chapter: number;
  title: string;
  onGoToPractice: () => void;
};

type Heading = { id: string; text: string; level: number };

const CHAPTERS = chaptersData as Record<string, { title: string; markdown: string }>;

function slugify(text: string, seen: Map<string, number>): string {
  const base =
    text
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, "")
      .trim()
      .replace(/\s+/g, "-")
      .slice(0, 80) || "section";
  const n = (seen.get(base) ?? 0) + 1;
  seen.set(base, n);
  return n === 1 ? base : `${base}-${n}`;
}

function extractHeadings(md: string): Heading[] {
  const out: Heading[] = [];
  const seen = new Map<string, number>();
  for (const line of md.split("\n")) {
    const m = /^(#{2,4})\s+(.+?)\s*$/.exec(line);
    if (!m) continue;
    const level = m[1].length;
    const text = m[2].replace(/[#*_`]/g, "").trim();
    if (!text) continue;
    out.push({ id: slugify(text, seen), text, level });
  }
  return out;
}

export function TheoryReader({ chapter, title, onGoToPractice }: Props) {
  const entry = CHAPTERS[String(chapter)];
  const markdown = entry?.markdown ?? "";
  const [progress, setProgress] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo({ top: 0 });
    setProgress(0);
  }, [chapter]);

  const headings = useMemo(() => extractHeadings(markdown), [markdown]);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max > 0 ? Math.min(100, Math.max(0, (el.scrollTop / max) * 100)) : 0);
  };

  const jumpTo = (id: string) => {
    const el = scrollRef.current?.querySelector(`#${CSS.escape(id)}`) as HTMLElement | null;
    if (el && scrollRef.current) {
      scrollRef.current.scrollTo({ top: el.offsetTop - 12, behavior: "smooth" });
    }
    setTocOpen(false);
  };

  const headingCounters = useRef(new Map<string, number>());
  headingCounters.current = new Map();
  const renderHeading =
    (level: 2 | 3 | 4) => (props: React.HTMLAttributes<HTMLHeadingElement>) => {
      const text = String(
        Array.isArray(props.children)
          ? props.children.map((c) => (typeof c === "string" ? c : "")).join("")
          : props.children,
      );
      const id = slugify(text, headingCounters.current);
      const cls =
        level === 2
          ? "mt-8 mb-3 font-display text-xl font-bold tracking-tight text-foreground"
          : level === 3
            ? "mt-6 mb-2 font-display text-base font-bold tracking-tight text-foreground"
            : "mt-4 mb-2 font-display text-sm font-semibold tracking-tight text-foreground/90";
      return React.createElement(`h${level}`, { id, className: cls, ...props });
    };

  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm">
      <div className="sticky top-16 z-20 flex flex-col gap-2 rounded-t-2xl border-b border-border bg-card/95 px-4 py-3 backdrop-blur sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <button
              onClick={() => setTocOpen((v) => !v)}
              className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-border text-muted-foreground hover:bg-secondary lg:hidden"
              aria-label="Table of contents"
            >
              <List className="h-4 w-4" />
            </button>
            <BookOpen className="h-4 w-4 shrink-0 text-primary" />
            <div className="min-w-0">
              <div className="text-[10px] font-bold uppercase tracking-widest text-taupe">
                Chapter {chapter} · Theory
              </div>
              <div className="truncate font-display text-sm font-bold sm:text-base">{title}</div>
            </div>
          </div>
          <button
            onClick={onGoToPractice}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-bold text-primary-foreground hover:bg-primary/90 sm:text-sm"
          >
            <Target className="h-4 w-4" /> Go to Practice
          </button>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex">
        <nav className="hidden w-56 shrink-0 border-r border-border/60 lg:block">
          <div className="sticky top-[9.5rem] max-h-[calc(100vh-11rem)] overflow-y-auto p-4">
            <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              On this page
            </div>
            <TocList headings={headings} onJump={jumpTo} />
          </div>
        </nav>

        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="relative max-h-[calc(100vh-11rem)] min-w-0 flex-1 overflow-y-auto"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 20%, oklch(0.98 0 0) 0%, oklch(0.96 0 0) 100%)",
          }}
        >
          <article
            className="mx-auto max-w-3xl px-5 py-8 sm:px-10 sm:py-12"
            style={{ fontFamily: "'Georgia','Cambria','Times New Roman',serif" }}
          >
            {!markdown && (
              <div className="flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                <div className="font-semibold">Theory for this chapter isn't available yet.</div>
              </div>
            )}

            {markdown && (
              <div className="prose-reader text-[15px] leading-[1.75] text-foreground/90">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ node: _node, ...p }) => (
                      <h1
                        className="mb-6 font-display text-3xl font-bold tracking-tight text-foreground"
                        {...p}
                      />
                    ),
                    h2: renderHeading(2),
                    h3: renderHeading(3),
                    h4: renderHeading(4),
                    p: ({ node: _node, ...p }) => <p className="my-4" {...p} />,
                    ul: ({ node: _node, ...p }) => (
                      <ul className="my-4 list-disc space-y-1.5 pl-6" {...p} />
                    ),
                    ol: ({ node: _node, ...p }) => (
                      <ol className="my-4 list-decimal space-y-1.5 pl-6" {...p} />
                    ),
                    blockquote: ({ node: _node, ...p }) => (
                      <blockquote
                        className="my-5 rounded-r-md border-l-4 border-primary/50 bg-primary/5 py-3 pl-4 pr-3 not-italic text-foreground/90"
                        {...p}
                      />
                    ),
                    strong: ({ node: _node, ...p }) => (
                      <strong className="font-bold text-foreground" {...p} />
                    ),
                    em: ({ node: _node, ...p }) => (
                      <em className="text-foreground/80" {...p} />
                    ),
                    code: ({ node: _node, ...p }) => (
                      <code
                        className="rounded bg-secondary px-1 py-0.5 font-mono text-[0.85em]"
                        {...p}
                      />
                    ),
                    hr: () => <hr className="my-8 border-border" />,
                    img: ({ node: _node, ...p }) => (
                      <img
                        className="my-6 mx-auto rounded-lg border border-border shadow-sm max-w-full h-auto"
                        loading="lazy"
                        {...p}
                      />
                    ),
                  }}
                >
                  {markdown}
                </ReactMarkdown>
              </div>
            )}
          </article>
        </div>
      </div>

      {tocOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setTocOpen(false)}
        >
          <div
            className="absolute inset-x-0 bottom-0 max-h-[70vh] overflow-y-auto rounded-t-2xl border-t border-border bg-card p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              On this page
            </div>
            <TocList headings={headings} onJump={jumpTo} />
          </div>
        </div>
      )}
    </div>
  );
}

function TocList({ headings, onJump }: { headings: Heading[]; onJump: (id: string) => void }) {
  if (headings.length === 0) {
    return <div className="text-xs text-muted-foreground">No sections.</div>;
  }
  return (
    <ul className="space-y-1">
      {headings.map((h) => (
        <li key={h.id}>
          <button
            onClick={() => onJump(h.id)}
            className={cn(
              "block w-full truncate rounded px-2 py-1 text-left text-xs text-muted-foreground hover:bg-secondary hover:text-foreground",
              h.level === 2 && "font-semibold text-foreground/90",
              h.level === 3 && "pl-4",
              h.level === 4 && "pl-6 text-[11px]",
            )}
            title={h.text}
          >
            {h.text}
          </button>
        </li>
      ))}
    </ul>
  );
}
