import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { BookOpen, Target, AlertTriangle, Download, Maximize2, Minimize2 } from "lucide-react";
import { getEconomicsCourseTheory } from "@/data/economics-course-theory";
import { getMathCourseTheory } from "@/data/math-course-theory";
import { TheoryFigure } from "@/components/theory/TheoryFigure";
import { cn } from "@/lib/utils";

const ECONOMICS_MATERIALS_PDF_URL = "/bbe-economics-textbook.pdf";
const ECONOMICS_MATERIALS_PDF_NAME = "BBE-Economics-Full-Course-Theory.pdf";

type Props = {
  chapter: number;
  title: string;
  onGoToPractice: () => void;
  /** Defaults to economics (existing Full Course behaviour). */
  subject?: "economics" | "math";
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

function MdBlock({
  text,
  dense,
  enableMath = false,
}: {
  text: string;
  dense?: boolean;
  enableMath?: boolean;
}) {
  return (
    <ReactMarkdown
      remarkPlugins={enableMath ? [remarkGfm, remarkMath] : [remarkGfm]}
      rehypePlugins={enableMath ? [rehypeKatex] : undefined}
      components={{
        h1: ({ children }) => (
          <h1
            className={cn(
              "break-words font-display font-bold tracking-tight text-foreground",
              dense ? "mb-3 text-xl leading-snug" : "mb-4 text-2xl sm:text-3xl",
            )}
          >
            {children}
          </h1>
        ),
        h2: ({ children }) => {
          const label = String(children);
          const id = slugify(label);
          return (
            <h2
              id={id}
              className={cn(
                "break-words border-b border-border/70 font-display font-bold tracking-tight text-foreground first:mt-0",
                dense
                  ? "mb-2 mt-6 scroll-mt-3 pb-1.5 text-lg leading-snug"
                  : "mb-3 mt-10 scroll-mt-24 pb-2 text-xl sm:scroll-mt-4",
              )}
            >
              {children}
            </h2>
          );
        },
        h3: ({ children }) => {
          const label = String(children);
          const id = slugify(label);
          return (
            <h3
              id={id}
              className={cn(
                "break-words font-display font-semibold tracking-tight text-foreground",
                dense
                  ? "mb-1.5 mt-5 scroll-mt-3 text-base leading-snug"
                  : "mb-2 mt-8 scroll-mt-24 text-lg sm:scroll-mt-4",
              )}
            >
              {children}
            </h3>
          );
        },
        p: ({ children }) => (
          <p
            className={cn(
              "break-words font-serif text-foreground/95",
              dense
                ? "mb-3 text-[14px] leading-6"
                : "mb-4 text-[15px] leading-7 sm:text-base sm:leading-7",
            )}
          >
            {children}
          </p>
        ),
        strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
        em: ({ children }) => <em className="text-foreground/90">{children}</em>,
        ul: ({ children }) => (
          <ul
            className={cn(
              "mb-4 list-disc space-y-1.5 pl-5 font-serif marker:text-primary",
              dense ? "text-[14px] leading-6" : "text-[15px] leading-7 sm:text-base",
            )}
          >
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol
            className={cn(
              "mb-4 list-decimal space-y-1.5 pl-5 font-serif marker:font-semibold marker:text-primary",
              dense ? "text-[14px] leading-6" : "text-[15px] leading-7 sm:text-base",
            )}
          >
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="break-words pl-0.5">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote
            className={cn(
              "mb-5 rounded-r-xl border-l-4 border-primary/70 bg-primary/5 px-3 font-serif text-foreground shadow-[0_1px_0_rgba(0,0,0,0.03)] sm:px-4 [&_p:last-child]:mb-0",
              dense ? "py-2.5 text-[14px] leading-6" : "py-3 text-[15px] leading-7",
            )}
          >
            {children}
          </blockquote>
        ),
        table: ({ children }) => (
          <div className="my-5 w-full overflow-x-auto rounded-xl border border-border bg-white shadow-sm [-webkit-overflow-scrolling:touch]">
            <table className="w-full min-w-[18rem] border-collapse text-[12px] sm:min-w-[20rem] sm:text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }) => <thead className="bg-primary text-primary-foreground">{children}</thead>,
        tbody: ({ children }) => <tbody className="bg-white">{children}</tbody>,
        tr: ({ children }) => <tr className="border-b border-border/80 last:border-0">{children}</tr>,
        th: ({ children }) => (
          <th className="px-2 py-2 text-left align-bottom font-semibold sm:whitespace-nowrap sm:px-3 sm:py-2.5">
            {children}
          </th>
        ),
        td: ({ children }) => {
          const text = String(children ?? "");
          const numeric = /^[\d.,€$%\s×x~≈+\-−–]+$/.test(text.trim()) && text.trim().length > 0;
          const total = /total/i.test(text);
          return (
            <td
              className={cn(
                "border-r border-border/50 px-2 py-2 align-top leading-snug text-foreground last:border-r-0 sm:px-3 sm:py-2.5",
                numeric && "whitespace-nowrap text-right tabular-nums",
                total && "font-semibold",
              )}
            >
              {children}
            </td>
          );
        },
        pre: ({ children }) => (
          <pre className="my-5 overflow-x-auto rounded-xl border border-border bg-white px-4 py-3.5 font-mono text-[13px] leading-6 text-foreground shadow-sm">
            {children}
          </pre>
        ),
        code: ({ className, children }) => {
          const isBlock = className?.startsWith("language-");
          return (
            <code
              className={cn(
                isBlock
                  ? "font-mono text-[0.95em]"
                  : "rounded-md border border-border/70 bg-secondary/80 px-1.5 py-0.5 font-mono text-[0.88em]",
                className,
              )}
            >
              {children}
            </code>
          );
        },
        hr: () => <hr className={cn("border-border", dense ? "my-5" : "my-8")} />,
      }}
    >
      {text}
    </ReactMarkdown>
  );
}

export function TheoryReader({
  chapter,
  title,
  onGoToPractice,
  subject = "economics",
}: Props) {
  const mathTheory = subject === "math" ? getMathCourseTheory(chapter) : undefined;
  const economicsTheory = subject === "economics" ? getEconomicsCourseTheory(chapter) : undefined;
  const markdown = (subject === "math" ? mathTheory?.markdown : economicsTheory?.markdown) ?? "";
  const materialsPdfUrl =
    subject === "math" ? mathTheory?.materialsPdfUrl : ECONOMICS_MATERIALS_PDF_URL;
  const materialsPdfName =
    subject === "math" ? mathTheory?.materialsPdfName : ECONOMICS_MATERIALS_PDF_NAME;
  const enableMath = subject === "math";
  const toc = useMemo(() => extractToc(markdown), [markdown]);
  const segments = useMemo(() => segmentTheory(markdown), [markdown]);
  const [activeId, setActiveId] = useState<string>("");
  const [readerMode, setReaderMode] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const tocScrollRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const rafRef = useRef<number | null>(null);
  const activeIdRef = useRef(activeId);
  const scrollingByUserRef = useRef(false);
  const scrollIdleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  activeIdRef.current = activeId;

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo({ top: 0 });
    if (progressBarRef.current) progressBarRef.current.style.transform = "scaleX(0)";
    setActiveId(toc[0]?.id ?? "");
    if (tocScrollRef.current) tocScrollRef.current.scrollTo({ left: 0 });
    setReaderMode(false);
  }, [chapter, toc]);

  useEffect(() => {
    if (!readerMode) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setReaderMode(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [readerMode]);

  useEffect(() => {
    if (readerMode) return; // strip hidden in reader mode
    // While the user is dragging the article scroll, don't animate the TOC strip —
    // smooth horizontal scroll there fights the main scroll and feels laggy.
    if (scrollingByUserRef.current) return;
    const container = tocScrollRef.current;
    const chip = chipRefs.current[activeId];
    if (!container || !chip || !activeId) return;

    const pad = 48;
    const chipLeft = chip.offsetLeft;
    const chipRight = chipLeft + chip.offsetWidth;
    const viewLeft = container.scrollLeft;
    const viewRight = viewLeft + container.clientWidth;
    let nextLeft = viewLeft;

    if (chipLeft < viewLeft + pad) {
      nextLeft = Math.max(0, chipLeft - pad);
    } else if (chipRight > viewRight - pad) {
      nextLeft = Math.min(
        container.scrollWidth - container.clientWidth,
        chipRight - container.clientWidth + pad,
      );
    } else {
      return;
    }

    container.scrollTo({ left: nextLeft, behavior: "auto" });
  }, [activeId, readerMode]);

  const onScroll = () => {
    scrollingByUserRef.current = true;
    if (scrollIdleTimerRef.current) clearTimeout(scrollIdleTimerRef.current);
    scrollIdleTimerRef.current = setTimeout(() => {
      scrollingByUserRef.current = false;
    }, 120);

    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const el = scrollRef.current;
      if (!el) return;

      const max = el.scrollHeight - el.clientHeight;
      const pct = max > 0 ? Math.min(100, Math.max(0, (el.scrollTop / max) * 100)) : 0;
      // Update the bar via DOM — avoid React re-renders on every scroll frame.
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${pct / 100})`;
      }

      const rootTop = el.getBoundingClientRect().top;
      let current = toc[0]?.id ?? "";
      for (const item of toc) {
        const node = el.querySelector<HTMLElement>(`#${CSS.escape(item.id)}`);
        if (!node) continue;
        if (node.getBoundingClientRect().top - rootTop <= 56) current = item.id;
      }
      if (current !== activeIdRef.current) setActiveId(current);
    });
  };

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      if (scrollIdleTimerRef.current) clearTimeout(scrollIdleTimerRef.current);
    };
  }, []);

  const jumpTo = (id: string) => {
    const el = scrollRef.current;
    const node = el?.querySelector<HTMLElement>(`#${CSS.escape(id)}`);
    if (!el || !node) return;
    scrollingByUserRef.current = false;
    setActiveId(id);
    el.scrollTo({ top: Math.max(0, node.offsetTop - 8), behavior: "smooth" });
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
        <MdBlock
          key={`m-${i}`}
          text={seg.text}
          dense={readerMode}
          enableMath={enableMath}
        />
      ),
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col border border-border bg-card shadow-sm",
        readerMode ? "fixed inset-0 z-[80] rounded-none border-0" : "rounded-2xl",
      )}
    >
      {/* Full chrome — hidden completely in reader mode so phones get max text space */}
      {!readerMode && (
        <div className="sticky top-14 z-20 flex shrink-0 flex-col gap-2 rounded-t-2xl border-b border-border bg-card/95 px-3 py-2.5 backdrop-blur sm:top-16 sm:gap-2 sm:px-6 sm:py-3">
          <div className="flex items-start justify-between gap-2 sm:items-center sm:gap-3">
            <div className="flex min-w-0 items-center gap-2">
              <BookOpen className="h-4 w-4 shrink-0 text-primary" />
              <div className="min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-widest text-taupe">
                  Chapter {chapter} · Theory
                </div>
                <div className="truncate font-display text-sm font-bold sm:text-base">{title}</div>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap items-center justify-end gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setReaderMode(true)}
                title="Reader mode — theory fullscreen"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-2 text-xs font-bold text-foreground hover:bg-secondary sm:px-3 sm:text-sm"
              >
                <Maximize2 className="h-4 w-4" />
                <span className="hidden xs:inline sm:inline">Reader</span>
              </button>
              {materialsPdfUrl && materialsPdfName && (
                <a
                  href={materialsPdfUrl}
                  download={materialsPdfName}
                  title="Download materials"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-2 text-xs font-bold text-foreground hover:bg-secondary sm:px-3 sm:text-sm"
                >
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Download</span>
                </a>
              )}
              <button
                onClick={onGoToPractice}
                className="inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-2 text-xs font-bold text-primary-foreground hover:bg-primary/90 sm:px-3 sm:text-sm"
              >
                <Target className="h-4 w-4" />
                <span className="hidden sm:inline">Practice</span>
              </button>
            </div>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-secondary">
            <div
              ref={progressBarRef}
              className="h-full w-full origin-left rounded-full bg-primary will-change-transform"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
          {toc.length > 0 && (
            <div
              ref={tocScrollRef}
              className="flex gap-1.5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {toc.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  ref={(node) => {
                    chipRefs.current[item.id] = node;
                  }}
                  onClick={() => jumpTo(item.id)}
                  className={cn(
                    "max-w-[11rem] shrink-0 truncate rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors sm:max-w-none",
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
      )}

      {/* Reader mode: floating exit only — no top menu */}
      {readerMode && (
        <button
          type="button"
          onClick={() => setReaderMode(false)}
          title="Exit reader mode (Esc)"
          className="fixed bottom-4 right-4 z-[90] inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-lg hover:bg-primary/90 sm:bottom-6 sm:right-6 sm:text-sm"
        >
          <Minimize2 className="h-4 w-4" /> Exit
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={onScroll}
        className={cn(
          "relative flex-1 overflow-y-auto overscroll-y-contain bg-[oklch(0.985_0.005_75)] [-webkit-overflow-scrolling:touch]",
          readerMode ? "min-h-0" : "max-h-[calc(100dvh-10rem)] sm:max-h-[calc(100vh-11rem)]",
        )}
      >
        <article
          className={cn(
            "mx-auto max-w-3xl [&>h1+p]:text-foreground/75 [&>h1+p]:sm:text-[17px] [&>h1+p]:sm:leading-8 [&_.katex]:text-[1.03em] [&_.katex-display]:my-5 [&_.katex-display]:overflow-x-auto [&_.katex-display]:overflow-y-hidden [&_.katex-display]:rounded-xl [&_.katex-display]:border [&_.katex-display]:border-border/70 [&_.katex-display]:bg-white [&_.katex-display]:px-3 [&_.katex-display]:py-3 [&_.katex-display]:shadow-sm",
            readerMode ? "px-3 py-4 pb-20 sm:px-8 sm:py-8 sm:pb-10" : "px-3 py-5 sm:px-8 sm:py-10",
          )}
        >
          {body}
        </article>
      </div>
    </div>
  );
}
