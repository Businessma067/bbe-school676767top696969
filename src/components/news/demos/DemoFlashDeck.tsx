import { Layers, ThumbsDown, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

export type CardSide = "left" | "right" | null;

/**
 * Same flashcard stage as FlashcardSubjectView: fixed-height faces,
 * 520ms flip, then a 260ms swipe (right = know, left = don't know)
 * and the next card enters from the opposite side.
 */
export function DemoFlashCard({
  flipped,
  exitDir,
  enterFrom,
  frontLabel,
  backLabel,
  term,
  meaning,
  hintFront,
  hintBack,
  faceClassName,
}: {
  flipped: boolean;
  exitDir: CardSide;
  enterFrom: CardSide;
  frontLabel: string;
  backLabel: string;
  term: string;
  meaning: string;
  hintFront: string;
  hintBack: string;
  faceClassName?: string;
}) {
  const transform = exitDir
    ? `translateX(${exitDir === "right" ? "118%" : "-118%"}) rotate(${exitDir === "right" ? 16 : -16}deg)`
    : undefined;

  return (
    <div className="flashcard-viewport relative overflow-x-clip overflow-y-visible py-1">
      <div
        data-d="card"
        className={cn(
          "flashcard-stage relative w-full",
          exitDir
            ? "flashcard-exiting"
            : enterFrom === "left"
              ? "flashcard-entering-left"
              : enterFrom === "right"
                ? "flashcard-entering-right"
                : "",
        )}
        style={transform ? { transform } : undefined}
      >
        <div className="flashcard-flip w-full">
          <div className={cn("flashcard-inner", flipped && "is-flipped")}>
            <div
              className={cn(
                "flashcard-face flashcard-front rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8",
                faceClassName,
              )}
            >
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                <Layers className="h-3 w-3" />
                {frontLabel}
              </div>
              <div className="flex min-h-[180px] flex-col items-center justify-center px-2 pt-6 text-center sm:min-h-[200px]">
                <p className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {term}
                </p>
              </div>
              <p className="mt-2 text-center text-xs text-muted-foreground">{hintFront}</p>
            </div>
            <div
              className={cn(
                "flashcard-face flashcard-back rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8",
                faceClassName,
              )}
            >
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                <Layers className="h-3 w-3" />
                {backLabel}
              </div>
              <div className="flex min-h-[180px] flex-col items-center justify-center px-2 pt-6 text-center sm:min-h-[200px]">
                <p className="text-base leading-relaxed text-foreground sm:text-lg">{meaning}</p>
              </div>
              <p className="mt-2 text-center text-xs text-muted-foreground">{hintBack}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DemoSortButtons({
  accent,
  rated,
  dontLabel,
  flipLabel,
  knowLabel,
}: {
  accent: string;
  rated: "none" | "know" | "dont";
  dontLabel: string;
  flipLabel: string;
  knowLabel: string;
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
      <span
        data-d="dont"
        className={cn(
          "inline-flex flex-1 items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-semibold sm:flex-none",
          rated === "dont"
            ? "border-red-500 bg-red-500 text-white"
            : "border-red-500/30 bg-red-500/10 text-red-700",
        )}
      >
        <ThumbsDown className="h-4 w-4" />
        {dontLabel}
      </span>
      <span
        data-d="flip"
        className="rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
        style={{ backgroundColor: accent }}
      >
        {flipLabel}
      </span>
      <span
        data-d="know"
        className={cn(
          "inline-flex flex-1 items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-semibold sm:flex-none",
          rated === "know"
            ? "border-emerald-600 bg-emerald-500 text-white"
            : "border-emerald-500/30 bg-emerald-500/10 text-emerald-700",
        )}
      >
        <ThumbsUp className="h-4 w-4" />
        {knowLabel}
      </span>
    </div>
  );
}
