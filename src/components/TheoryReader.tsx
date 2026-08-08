import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BookOpen, Target, AlertTriangle } from "lucide-react";
import { getEconomicsCourseTheory } from "@/data/economics-course-theory";
import { TheoryFigure } from "@/components/theory/TheoryFigure";
import { cn } from "@/lib/utils";

type Props = {
  chapter: number;
  title: string;
  onGoToPractice: () => void;
};

type TocItem = { id: string; label: string; level: 2 | 3 };
type Segment =
  | { kind: "md"; text: string }
  | { kind: "figure"; id: string; caption: string };

const FIGURE_RE = /\[\[FIGURE:([a-z0-9-]+)(?:\|([^\]]*))?\]\]/gi;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s.-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

function extractToc(markdown: string): TocItem[] {
  const items: TocItem[] = [];
  for (const line of markdown.split("\n")) {
    const m = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (!m) continue;
    const label = m[2]!.trim();
    const level = m[1]!.length === 3 ? 3 : 2;
    items.push({ id: slugify(label), label, level });
  }
  return items;
}

function segmentTheory(markdown: string): Segment[] {
  const segments: Segment[] = [];
  let last = 0;
  const re = new RegExp(FIGURE_RE.source, "gi");
  let m: RegExpExecArray | null;
  while ((m = re.exec(markdown))) {
    const before = markdown.slice(last, m.index).trim();
    if (before) segments.push({ kind: "md", text: before });
    segments.push({
      kind: "figure",
      id: m[1]!,
      caption: (m[2] || "").trim(),
    });
    last = m.index + m[0].length;
  }
  const rest = markdown.slice(last).trim();
  if (rest) segments.push({ kind: "md", text: rest });
  return segments;
}

function MdBlock({ text }: { text: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {children}
          </h1>
        ),
        h2: ({ children }) => {
          const label = String(children);
          const id = slugify(label);
          return (
            <h2
              id={id}
              className="mb-3 mt-10 scroll-mt-4 border-b border-border/70 pb-2 font-display text-xl font-bold text-foreground first:mt-0"
            >
              {children}
            </h2>
          );
        },
        h3: ({ children }) => {
          const label = String(children);
          const id = slugify(label);
          return (
            <h3 id={id} className="mb-2 mt-8 scroll-mt-4 text-lg font-bold text-foreground">
              {children}
            </h3>
          );
        },
        p: ({ children }) => (
          <p className="mb-4 text-[15px] leading-7 text-foreground/95 sm:text-base sm:leading-7">{children}</p>
        ),
        strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
        em: ({ children }) => <em className="text-foreground/90">{children}</em>,
        ul: ({ children }) => (
          <ul className="mb-4 list-disc space-y-1.5 pl-5 text-[15px] leading-7 sm:text-base">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-4 list-decimal space-y-1.5 pl-5 text-[15px] leading-7 sm:text-base">{children}</ol>
        ),
        li: ({ children }) => <li className="pl-0.5">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="mb-5 border-l-4 border-primary/70 bg-primary/5 px-4 py-3 text-[15px] leading-7 text-foreground">
            {children}
          </blockquote>
        ),
        table: ({ children }) => (
          <div className="my-5 w-full overflow-x-auto border border-border bg-white">
            <table className="w-full min-w-[20rem] border-collapse text-[13px] sm:text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }) => <thead className="bg-primary text-primary-foreground">{children}</thead>,
        tbody: ({ children }) => <tbody className="bg-white">{children}</tbody>,
        tr: ({ children }) => <tr className="border-b border-border/80 last:border-0">{children}</tr>,
        th: ({ children }) => (
          <th className="whitespace-nowrap px-3 py-2.5 text-left align-bottom font-semibold">{children}</th>
        ),
        td: ({ children }) => {
          const text = String(children ?? "");
          const numeric = /^[\d.,€$%\s×x~≈+\-−–]+$/.test(text.trim()) && text.trim().length > 0;
          const total = /total/i.test(text);
          return (
            <td
              className={cn(
                "border-r border-border/50 px-3 py-2.5 align-top leading-snug text-foreground last:border-r-0",
                numeric && "whitespace-nowrap text-right tabular-nums",
                total && "font-semibold",
              )}
            >
              {children}
            </td>
          );
        },
        hr: () => <hr className="my-8 border-border" />,
      }}
    >
      {text}
    </ReactMarkdown>
  );
}

export function TheoryReader({ chapter, title, onGoToPractice }: Props) {
  const theory = getEconomicsCourseTheory(chapter);
  const markdown = theory?.markdown ?? "";
  const toc = useMemo(() => extractToc(markdown), [markdown]);
  const segments = useMemo(() => segmentTheory(markdown), [markdown]);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo({ top: 0 });
    setProgress(0);
    setActiveId(toc[0]?.id ?? "");
  }, [chapter, toc]);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max > 0 ? Math.min(100, Math.max(0, (el.scrollTop / max) * 100)) : 0);

    const rootTop = el.getBoundingClientRect().top;
    let current = toc[0]?.id ?? "";
    for (const item of toc) {
      const node = el.querySelector<HTMLElement>(`#${CSS.escape(item.id)}`);
      if (!node) continue;
      if (node.getBoundingClientRect().top - rootTop <= 72) current = item.id;
    }
    setActiveId(current);
  };

  const jumpTo = (id: string) => {
    const el = scrollRef.current;
    const node = el?.querySelector<HTMLElement>(`#${CSS.escape(id)}`);
    if (!el || !node) return;
    el.scrollTo({ top: node.offsetTop - 8, behavior: "smooth" });
  };

  let body: ReactNode = null;
  if (!markdown) {
    body = (
      <div className="flex w-full items-start gap-2 border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
        <div className="font-semibold">Theory for this chapter isn&apos;t available yet.</div>
      </div>
    );
  } else {
    body = segments.map((seg, i) =>
      seg.kind === "figure" ? (
        <TheoryFigure key={`f-${seg.id}-${i}`} id={seg.id} caption={seg.caption} />
      ) : (
        <MdBlock key={`m-${i}`} text={seg.text} />
      ),
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm">
      <div className="sticky top-16 z-20 flex flex-col gap-2 rounded-t-2xl border-b border-border bg-card/95 px-4 py-3 backdrop-blur sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
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
        {toc.length > 0 && (
          <div className="flex gap-1.5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {toc.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => jumpTo(item.id)}
                className={cn(
                  "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors",
                  item.level === 3 && "opacity-90",
                  activeId === item.id
                    ? "bg-primary text-primary-foreground"
                    : item.level === 3
                      ? "bg-secondary/70 text-muted-foreground hover:text-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label
                  .replace(/^(\d+\.\d+\.\d+)\s+/, "$1 · ")
                  .replace(/^(\d+\.\d+)\s+/, "$1 · ")}
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="relative max-h-[calc(100vh-11rem)] overflow-y-auto bg-[oklch(0.985_0.005_75)]"
      >
        <article className="mx-auto max-w-3xl px-4 py-8 sm:px-8 sm:py-10">{body}</article>
      </div>
    </div>
  );
}
