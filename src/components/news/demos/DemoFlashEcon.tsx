import { useState } from "react";
import { Layers, ThumbsDown, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#c8763a";

const CARDS = [
  {
    term: "Opportunity cost",
    meaning: "The benefit of the next best alternative given up in order to choose something else.",
    topic: "Markets",
  },
  {
    term: "Ceteris paribus",
    meaning: "Holding all other relevant factors constant when analysing a relationship.",
    topic: "Markets",
  },
];

/**
 * BBE economics flashcards: English stat chips (Known / Don't know / New),
 * one card at a time. Don't know sorts left, Know sorts the next card.
 */
export function DemoFlashEcon({ caption }: DemoProps) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [rated, setRated] = useState<"none" | "know" | "dont">("none");
  const [fly, setFly] = useState<"none" | "left" | "right" | "in">("none");
  const [stats, setStats] = useState({ known: 0, unknown: 0, fresh: 40 });

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(240);
    setIdx(0);
    setFlipped(false);
    setRated("none");
    setFly("none");
    setStats({ known: 0, unknown: 0, fresh: 40 });
    setFade(false);
    await api.wait(480);

    await api.moveTo('[data-d="card"]');
    await api.click();
    setFlipped(true);
    await api.wait(720);

    await api.moveTo('[data-d="dont"]');
    await api.click();
    setRated("dont");
    setStats({ known: 0, unknown: 1, fresh: 39 });
    setFly("left");
    await api.wait(500);
    setIdx(1);
    setFlipped(false);
    setRated("none");
    setFly("in");
    await api.wait(520);

    await api.moveTo('[data-d="card"]');
    await api.click();
    setFlipped(true);
    setFly("none");
    await api.wait(680);

    await api.moveTo('[data-d="know"]');
    await api.click();
    setRated("know");
    setStats({ known: 1, unknown: 1, fresh: 38 });
    await api.wait(1200);
  }, []);

  const card = CARDS[idx]!;

  return (
    <DemoShell url="/flashcards/economics" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "mx-auto flex h-[400px] max-w-md flex-col justify-center transition-opacity duration-500 sm:h-[440px]",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <div className="mb-3 flex items-end justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
                Study tools · Economics
              </p>
              <h3 className="font-display text-lg font-bold">Flashcards · Economics</h3>
            </div>
            <span
              className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: ACCENT }}
            >
              {card.topic} · {idx + 1}/40
            </span>
          </div>

          <div className="mb-3 grid grid-cols-3 gap-2">
            <Chip label="Known" value={stats.known} tone="known" hot={rated === "know"} />
            <Chip label="Don't know" value={stats.unknown} tone="unknown" hot={rated === "dont"} />
            <Chip label="New" value={stats.fresh} tone="new" hot={false} />
          </div>

          <div className="overflow-hidden">
            <div
              data-d="card"
              className={cn(
                "news-uniq-flip-stage",
                flipped && "is-flipped",
                fly === "left" && "news-uniq-fly-left",
                fly === "right" && "news-uniq-fly-right",
                fly === "in" && "news-uniq-fly-in",
              )}
            >
              <div className="news-uniq-flip-inner">
                <div className="news-uniq-flip-face news-uniq-flip-front rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    <Layers className="h-3 w-3" /> Term
                  </span>
                  <p className="mt-6 text-center font-display text-2xl font-bold tracking-tight">
                    {card.term}
                  </p>
                  <p className="mt-5 text-center text-xs text-muted-foreground">
                    Tap to flip · sort below
                  </p>
                </div>
                <div className="news-uniq-flip-face news-uniq-flip-back rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    <Layers className="h-3 w-3" /> Meaning
                  </span>
                  <p className="mt-5 text-center text-sm leading-relaxed sm:text-base">
                    {card.meaning}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 flex gap-2">
            <span
              data-d="dont"
              className={cn(
                "inline-flex flex-1 items-center justify-center gap-2 rounded-md border px-3 py-2.5 text-sm font-semibold transition-colors",
                rated === "dont"
                  ? "border-red-500 bg-red-500 text-white"
                  : "border-red-500/30 bg-red-500/10 text-red-700",
              )}
            >
              <ThumbsDown className="h-4 w-4" /> Don&apos;t know
            </span>
            <span
              data-d="know"
              className={cn(
                "inline-flex flex-1 items-center justify-center gap-2 rounded-md border px-3 py-2.5 text-sm font-semibold transition-colors",
                rated === "know"
                  ? "border-emerald-600 bg-emerald-500 text-white"
                  : "border-emerald-500/30 bg-emerald-500/10 text-emerald-700",
              )}
            >
              <ThumbsUp className="h-4 w-4" /> Know
            </span>
          </div>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}

function Chip({
  label,
  value,
  tone,
  hot,
}: {
  label: string;
  value: number;
  tone: "known" | "unknown" | "new";
  hot: boolean;
}) {
  const cls =
    tone === "known"
      ? "border-emerald-500/25 bg-emerald-500/10"
      : tone === "unknown"
        ? "border-red-500/25 bg-red-500/10"
        : "border-border bg-card";
  return (
    <div
      className={cn(
        "rounded-xl border px-2 py-2 text-center shadow-sm transition-transform duration-500",
        cls,
        hot && "scale-[1.04]",
      )}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="font-display text-lg font-bold tabular-nums">{value}</p>
    </div>
  );
}
