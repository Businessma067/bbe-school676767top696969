import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BookOpen, Target, AlertTriangle, Lightbulb, FlaskConical, Sigma, MapPin, GraduationCap } from "lucide-react";
import { getEconomicsCourseTheory } from "@/data/economics-course-theory";
import { cn } from "@/lib/utils";

type Props = {
  chapter: number;
  title: string;
  onGoToPractice: () => void;
};

type CalloutKind = "overview" | "section" | "key-ideas" | "formula" | "example" | "default";

function blockText(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(blockText).join("");
  if (children && typeof children === "object" && "props" in children) {
    return blockText((children as { props?: { children?: ReactNode } }).props?.children);
  }
  return String(children ?? "");
}

function calloutKind(text: string): CalloutKind {
  const t = text.trim();
  if (/^\*\*Chapter overview\*\*/i.test(t) || /^\*\*Learning path\*\*/i.test(t)) return "overview";
  if (/^\*\*In this section\*\*/i.test(t)) return "section";
  if (/^\*\*Key ideas\*\*/i.test(t)) return "key-ideas";
  if (/^\*\*Formula/i.test(t) || /^\*\*Important formula/i.test(t)) return "formula";
  if (/^\*\*Example/i.test(t) || /^\*\*Worked example/i.test(t)) return "example";
  return "default";
}

const CALLOUT_STYLES: Record<CalloutKind, { box: string; icon: typeof Lightbulb; label: string }> = {
  overview: { box: "border-primary/30 bg-primary/8", icon: GraduationCap, label: "Overview" },
  section: { box: "border-border bg-card/90", icon: MapPin, label: "Focus" },
  "key-ideas": { box: "border-emerald-500/30 bg-emerald-500/8", icon: Lightbulb, label: "Key ideas" },
  formula: { box: "border-amber-500/35 bg-amber-500/10", icon: Sigma, label: "Formula" },
  example: { box: "border-sky-500/30 bg-sky-500/8", icon: FlaskConical, label: "Example" },
  default: { box: "border-primary/25 bg-primary/5", icon: Lightbulb, label: "" },
};

function TheoryCallout({ children }: { children: ReactNode }) {
  const text = blockText(children);
  const kind = calloutKind(text);
  const style = CALLOUT_STYLES[kind];
  const Icon = style.icon;
  const isDefault = kind === "default";

  return (
    <blockquote
      className={cn(
        "my-5 rounded-xl border px-4 py-3 not-italic",
        style.box,
        isDefault && "italic text-foreground/85",
      )}
    >
      {!isDefault && (
        <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-taupe">
          <Icon className="h-3.5 w-3.5 text-primary" />
          {style.label}
        </div>
      )}
      <div className="text-[15px] leading-relaxed text-foreground/90 [&_p:last-child]:mb-0 [&_p]:mb-2 [&_ul]:mb-0">
        {children}
      </div>
    </blockquote>
  );
}

function headingId(children: ReactNode): string | undefined {
  const text = String(children ?? "");
  const m = /^([\d]+(?:\.[\d]+)*)/.exec(text.trim());
  if (!m) return undefined;
  return m[1]!.replace(/\./g, "-");
}

function TheoryMarkdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-6 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {children}
          </h1>
        ),
        h2: ({ children }) => {
          const id = headingId(children);
          return (
            <h2
              id={id}
              className="mb-4 mt-10 scroll-mt-24 border-b border-border/60 pb-2 font-display text-xl font-bold text-foreground first:mt-0 sm:text-2xl"
            >
              {children}
            </h2>
          );
        },
        h3: ({ children }) => {
          const id = headingId(children);
          return (
            <h3 id={id} className="mb-3 mt-8 scroll-mt-24 font-display text-lg font-semibold text-foreground">
              {children}
            </h3>
          );
        },
        p: ({ children }) => (
          <p className="mb-4 text-[15px] leading-relaxed text-foreground/90">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="mb-4 ml-5 list-disc space-y-1.5 text-[15px] leading-relaxed text-foreground/90">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-4 ml-5 list-decimal space-y-1.5 text-[15px] leading-relaxed text-foreground/90">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="pl-1">{children}</li>,
        strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        blockquote: ({ children }) => <TheoryCallout>{children}</TheoryCallout>,
        table: ({ children }) => (
          <div className="my-5 w-full overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[20rem] border-collapse text-[13px]">{children}</table>
          </div>
        ),
        thead: ({ children }) => <thead className="bg-secondary/70">{children}</thead>,
        th: ({ children }) => (
          <th className="border-b border-border px-3 py-2 text-left font-semibold text-foreground">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border-b border-border/60 px-3 py-2 align-top text-foreground/90">{children}</td>
        ),
        hr: () => <hr className="my-8 border-border/60" />,
        img: ({ src, alt }) => (
          <figure className="my-6 rounded-xl border border-border bg-white p-3 shadow-sm">
            <img
              src={src}
              alt={alt ?? ""}
              className="mx-auto block h-auto max-h-[28rem] w-full object-contain"
              loading="lazy"
            />
            {alt && alt !== "Figure" && (
              <figcaption className="mt-3 text-center text-xs font-medium text-muted-foreground">{alt}</figcaption>
            )}
          </figure>
        ),
        code: ({ children, className }) => {
          const isBlock = className?.includes("language-");
          if (isBlock) {
            return (
              <pre className="my-4 overflow-x-auto rounded-lg border border-border bg-secondary/40 p-4 text-[13px] leading-relaxed">
                <code>{children}</code>
              </pre>
            );
          }
          return (
            <code className="rounded bg-secondary/60 px-1.5 py-0.5 font-mono text-[13px] text-foreground">
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export function TheoryReader({ chapter, title, onGoToPractice }: Props) {
  const theory = useMemo(() => getEconomicsCourseTheory(chapter), [chapter]);
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo({ top: 0 });
    setProgress(0);
  }, [chapter]);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max > 0 ? Math.min(100, Math.max(0, (el.scrollTop / max) * 100)) : 0);
  };

  const sectionLinks = useMemo(() => {
    if (!theory) return [];
    const matches = [...theory.markdown.matchAll(/^## ([\d.]+\s+.+)$/gm)];
    return matches.map((m) => {
      const num = /^([\d.]+)/.exec(m[1]!)?.[1];
      return {
        id: num ? num.replace(/\./g, "-") : m[1]!.toLowerCase(),
        label: m[1]!,
      };
    });
  }, [theory]);

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
      </div>

      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="relative max-h-[calc(100vh-11rem)] overflow-y-auto bg-[oklch(0.98_0.005_85)]"
      >
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-8 sm:py-12">
          {!theory && (
            <div className="flex w-full items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              <div className="font-semibold">Theory for this chapter isn&apos;t available yet.</div>
            </div>
          )}

          {theory && sectionLinks.length > 3 && (
            <nav
              aria-label="Chapter sections"
              className="mb-8 rounded-xl border border-border bg-card/80 p-4 shadow-sm"
            >
              <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-taupe">
                In this chapter
              </div>
              <ul className="flex flex-wrap gap-2">
                {sectionLinks.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="inline-block rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                    >
                      {s.label.split(" ").slice(0, 2).join(" ")}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <article className={cn("theory-reader", theory && "theory-reader--ready")}>
            {theory && <TheoryMarkdown content={theory.markdown} />}
          </article>
        </div>
      </div>
    </div>
  );
}
