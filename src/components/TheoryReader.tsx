import { useEffect, useRef, useState } from "react";
import { BookOpen, Target, AlertTriangle } from "lucide-react";
import { CHAPTER_PAGES } from "@/data/textbook-pages";

type Props = {
  chapter: number;
  title: string;
  onGoToPractice: () => void;
};

export function TheoryReader({ chapter, title, onGoToPractice }: Props) {
  const pages = CHAPTER_PAGES[chapter] ?? [];
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
        className="relative max-h-[calc(100vh-11rem)] overflow-y-auto bg-[oklch(0.96_0_0)]"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-3 py-8 sm:px-6 sm:py-12">
          {pages.length === 0 && (
            <div className="flex w-full items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              <div className="font-semibold">Theory for this chapter isn't available yet.</div>
            </div>
          )}

          {pages.map((url, i) => (
            <figure
              key={url}
              className="w-full overflow-hidden rounded-lg border border-border bg-white shadow-sm"
            >
              <img
                src={url}
                alt={`Chapter ${chapter} — page ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                className="block h-auto w-full"
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
