import { memo, useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
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
import { trackEvent, upsertTheoryProgress } from "@/lib/activity-tracker";

const ECONOMICS_MATERIALS_PDF_URL = "/bbe-economics-textbook.pdf";
const ECONOMICS_MATERIALS_PDF_NAME = "BBE-Economics-Full-Course-Theory.pdf";

/** First paint: only this many segments; rest stream in so open stays clickable. */
const THEORY_EAGER_SEGMENTS = 1;

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
  | { kind: "figure"; id: string; caption: string }
  | { kind: "note"; title: string; body: string };

const EMBED_RE = /\[\[(?:FIGURE:([a-z0-9-]+)(?:\|([^\]]*))?|NOTE:([^|\]]+)\|([^\]]+))\]\]/gi;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s.-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

/** Flatten ReactMarkdown heading children so TOC ids match the rendered headings. */
function headingPlainText(children: ReactNode): string {
  if (children == null || typeof children === "boolean") return "";
  if (typeof children === "string" || typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(headingPlainText).join("");
  if (typeof children === "object" && "props" in children) {
    return headingPlainText((children as { props?: { children?: ReactNode } }).props?.children);
  }
  return "";
}

function extractToc(markdown: string): TocItem[] {
  const items: TocItem[] = [];
  for (const line of markdown.split("\n")) {
    // Main numbered sections only (e.g. "13.1 Definition") — skip Learning
    // objectives / recap and all ### subsections (Mean, Variance, …).
    const m = /^##\s+((\d+\.\d+)\b.*)$/.exec(line.trim());
    if (!m) continue;
    const label = m[1]!.trim();
    items.push({ id: slugify(label), label, level: 2 });
  }
  return items;
}

/** Break long prose into ## chunks so eager KaTeX work stays small. */
function pushMarkdownChunks(segments: Segment[], text: string) {
  const trimmed = text.trim();
  if (!trimmed) return;
  const parts = trimmed.split(/(?=^##\s+)/m).map((p) => p.trim()).filter(Boolean);
  if (parts.length <= 1) {
    segments.push({ kind: "md", text: trimmed });
    return;
  }
  for (const part of parts) segments.push({ kind: "md", text: part });
}

function segmentTheory(markdown: string): Segment[] {
  const segments: Segment[] = [];
  let last = 0;
  const re = new RegExp(EMBED_RE.source, "gi");
  let m: RegExpExecArray | null;
  while ((m = re.exec(markdown))) {
    pushMarkdownChunks(segments, markdown.slice(last, m.index));
    if (m[1]) {
      segments.push({
        kind: "figure",
        id: m[1],
        caption: (m[2] || "").trim(),
      });
    } else {
      segments.push({
        kind: "note",
        title: (m[3] || "").trim(),
        body: (m[4] || "").trim(),
      });
    }
    last = m.index + m[0].length;
  }
  pushMarkdownChunks(segments, markdown.slice(last));
  return segments;
}

const MdBlock = memo(function MdBlock({
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
          const label = headingPlainText(children);
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
          const label = headingPlainText(children);
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
              "break-words text-foreground/95",
              dense
                ? "mb-3 text-[14px] leading-6"
                : "mb-4 text-[15px] leading-7 sm:text-[17px] sm:leading-8",
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
              "mb-4 list-outside list-disc space-y-1.5 pl-8 marker:text-primary sm:pl-9",
              dense ? "text-[14px] leading-6" : "text-[15px] leading-7 sm:text-[17px] sm:leading-8",
            )}
          >
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol
            className={cn(
              // Keep markers fully inside the article: bold decimals need more room than pl-5.
              "mb-4 ml-1 list-outside list-decimal space-y-1.5 pl-10 marker:font-semibold marker:text-primary sm:ml-2 sm:pl-12",
              dense ? "text-[14px] leading-6" : "text-[15px] leading-7 sm:text-[17px] sm:leading-8",
            )}
          >
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="break-words pl-1.5">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote
            className={cn(
              "mb-5 rounded-r-xl border-l-4 border-primary/70 bg-secondary/60 px-3 text-foreground sm:px-4 [&_p:last-child]:mb-0",
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
});
MdBlock.displayName = "MdBlock";

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
  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(THEORY_EAGER_SEGMENTS, Math.max(segments.length, 0)),
  );
  const [activeId, setActiveId] = useState<string>("");
  const [readerMode, setReaderMode] = useState(false);
  /** Full layout so TOC jumps measure real heading offsets, not collapsed placeholders. */
  const [lockLayout, setLockLayout] = useState(false);
  const [jumpNonce, setJumpNonce] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const tocScrollRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const rafRef = useRef<number | null>(null);
  const activeIdRef = useRef(activeId);
  const pendingJumpRef = useRef<string | null>(null);
  const stopStreamRef = useRef<(() => void) | null>(null);
  const ignoreScrollSpyUntilRef = useRef(0);
  const theoryStartedRef = useRef(Date.now());
  const maxScrollRef = useRef(0);
  activeIdRef.current = activeId;

  useEffect(() => {
    theoryStartedRef.current = Date.now();
    maxScrollRef.current = 0;
    void trackEvent({
      eventType: "theory_open",
      subject,
      entityType: "chapter",
      entityId: String(chapter),
    });
  }, [chapter, subject]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const max = el.scrollHeight - el.clientHeight;
      const pct = max > 0 ? (el.scrollTop / max) * 100 : 0;
      maxScrollRef.current = Math.max(maxScrollRef.current, pct);
      const seconds = Math.round((Date.now() - theoryStartedRef.current) / 1000);
      void upsertTheoryProgress({
        subject,
        chapterId: String(chapter),
        sectionId: activeIdRef.current,
        timeSeconds: seconds,
        scrollPct: maxScrollRef.current,
        completed: maxScrollRef.current >= 95,
      });
    }, 30_000);
    return () => {
      window.clearInterval(interval);
      const seconds = Math.round((Date.now() - theoryStartedRef.current) / 1000);
      void upsertTheoryProgress({
        subject,
        chapterId: String(chapter),
        sectionId: activeIdRef.current,
        timeSeconds: seconds,
        scrollPct: maxScrollRef.current,
        completed: maxScrollRef.current >= 95,
      });
      if (maxScrollRef.current >= 95) {
        void trackEvent({
          eventType: "theory_complete",
          subject,
          entityType: "chapter",
          entityId: String(chapter),
        });
      }
    };
  }, [chapter, subject]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo({ top: 0 });
    if (progressBarRef.current) progressBarRef.current.style.transform = "scaleX(0)";
    setActiveId(toc[0]?.id ?? "");
    if (tocScrollRef.current) tocScrollRef.current.scrollTo({ left: 0 });
    setReaderMode(false);
  }, [chapter, toc]);

  useEffect(() => {
    const eager = Math.min(THEORY_EAGER_SEGMENTS, segments.length);
    setVisibleCount(eager);
    setLockLayout(false);
    pendingJumpRef.current = null;
    stopStreamRef.current = null;
    if (eager >= segments.length) return;

    let cancelled = false;
    let shown = eager;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const stop = () => {
      cancelled = true;
      if (timer !== undefined) clearTimeout(timer);
    };
    stopStreamRef.current = stop;

    const pump = () => {
      if (cancelled) return;
      shown = Math.min(shown + 2, segments.length);
      setVisibleCount(shown);
      if (shown >= segments.length) return;
      // Yield between chunks so theory open stays click-responsive.
      timer = setTimeout(pump, 0);
    };

    timer = setTimeout(pump, 0);

    return () => {
      stop();
      stopStreamRef.current = null;
    };
  }, [chapter, subject, segments]);

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

  const ensureTocChipVisible = (id: string) => {
    if (readerMode) return;
    const container = tocScrollRef.current;
    const chip = chipRefs.current[id];
    if (!container || !chip || !id) return;

    const pad = 40;
    const chipLeft = chip.offsetLeft;
    const chipRight = chipLeft + chip.offsetWidth;
    const viewLeft = container.scrollLeft;
    const viewRight = viewLeft + container.clientWidth;
    let nextLeft = viewLeft;

    if (chipLeft < viewLeft + pad) {
      nextLeft = Math.max(0, chipLeft - pad);
    } else if (chipRight > viewRight - pad) {
      nextLeft = Math.min(
        Math.max(0, container.scrollWidth - container.clientWidth),
        chipRight - container.clientWidth + pad,
      );
    } else {
      return;
    }

    if (Math.abs(nextLeft - viewLeft) < 1) return;
    container.scrollLeft = nextLeft;
  };

  useEffect(() => {
    ensureTocChipVisible(activeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- readerMode gates visibility; activeId drives the chip
  }, [activeId, readerMode]);

  const onScroll = () => {
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

      if (performance.now() < ignoreScrollSpyUntilRef.current) return;

      const rootTop = el.getBoundingClientRect().top;
      let current = toc[0]?.id ?? "";
      for (const item of toc) {
        const node = el.querySelector<HTMLElement>(`#${CSS.escape(item.id)}`);
        if (!node) continue;
        if (node.getBoundingClientRect().top - rootTop <= 56) current = item.id;
      }
      if (current !== activeIdRef.current) {
        activeIdRef.current = current;
        setActiveId(current);
        // Keep the active subtopic chip on-screen while scrolling the article.
        ensureTocChipVisible(current);
      }
    });
  };

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToHeading = (id: string) => {
    const scroller = scrollRef.current;
    const node = scroller?.querySelector<HTMLElement>(`#${CSS.escape(id)}`);
    if (!scroller || !node) return false;
    const nextTop =
      node.getBoundingClientRect().top -
      scroller.getBoundingClientRect().top +
      scroller.scrollTop -
      8;
    scroller.scrollTop = Math.max(0, nextTop);
    return true;
  };

  const jumpTo = (id: string) => {
    pendingJumpRef.current = id;
    activeIdRef.current = id;
    setActiveId(id);
    ensureTocChipVisible(id);
    ignoreScrollSpyUntilRef.current = performance.now() + 250;
    stopStreamRef.current?.();
    setLockLayout(true);
    setVisibleCount(segments.length);
    setJumpNonce((n) => n + 1);
  };

  useLayoutEffect(() => {
    const id = pendingJumpRef.current;
    if (!id) return;
    const tryScroll = () => {
      if (pendingJumpRef.current !== id) return;
      if (scrollToHeading(id)) pendingJumpRef.current = null;
    };
    tryScroll();
    const raf = requestAnimationFrame(tryScroll);
    const retry = window.setTimeout(tryScroll, 50);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(retry);
    };
  }, [visibleCount, lockLayout, jumpNonce]);

  let body: ReactNode = null;
  if (!markdown) {
    body = (
      <div className="flex w-full items-start gap-2 border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
        <div className="font-semibold">Theory for this chapter isn&apos;t available yet.</div>
      </div>
    );
  } else {
    body = segments.slice(0, visibleCount).map((seg, i) => {
      const wrap = (node: ReactNode) => (
        <div
          key={seg.kind === "figure" ? `f-${seg.id}-${i}` : `${seg.kind}-${i}`}
          style={
            lockLayout
              ? undefined
              : { contentVisibility: "auto", containIntrinsicSize: "auto 320px" }
          }
        >
          {node}
        </div>
      );
      if (seg.kind === "figure") {
        return wrap(<TheoryFigure id={seg.id} caption={seg.caption} />);
      }
      if (seg.kind === "note") {
        return wrap(
          <aside
            className={cn(
              "my-5 rounded-xl border border-zinc-300/80 bg-zinc-100 px-4 text-zinc-800",
              "shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]",
              readerMode ? "py-3 text-[14px] leading-6" : "py-3.5 text-[15px] leading-7 sm:px-5",
            )}
          >
            <p className="m-0">
              <span className="font-semibold text-zinc-900">{seg.title}.</span>{" "}
              {seg.body}
            </p>
          </aside>,
        );
      }
      return wrap(
        <MdBlock text={seg.text} dense={readerMode} enableMath={enableMath} />,
      );
    });
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
                    "max-w-[14rem] shrink-0 truncate rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors sm:max-w-none",
                    activeId === item.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground",
                  )}
                  title={item.label}
                >
                  {item.label.replace(/^(\d+\.\d+)\s+/, "$1 · ")}
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
          "relative flex-1 overflow-y-auto overscroll-y-contain bg-white [-webkit-overflow-scrolling:touch]",
          readerMode ? "min-h-0" : "max-h-[calc(100dvh-10rem)] sm:max-h-[calc(100vh-11rem)]",
        )}
      >
        <article
          className={cn(
            "mx-auto w-full max-w-[78rem] overflow-visible [&>h1+p]:text-foreground/75 [&_.katex]:text-[1.03em] [&_.katex-display]:my-5 [&_.katex-display]:overflow-x-auto [&_.katex-display]:overflow-y-hidden [&_ol]:overflow-visible [&_ul]:overflow-visible",
            readerMode
              ? "px-5 py-4 pb-20 sm:px-6 sm:py-8 sm:pb-10 md:px-8 lg:px-12 xl:px-14"
              : "px-5 py-5 sm:px-6 sm:py-8 md:px-8 lg:px-12 xl:px-14",
          )}
        >
          {body}
        </article>
      </div>
    </div>
  );
}
