import { useState } from "react";
import { Layers, ThumbsDown, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#c8763a";

/** BBE economics flashcards: Opportunity cost flip + Know / Don't know sort. */
export function DemoFlashEcon({ caption }: DemoProps) {
  const [flipped, setFlipped] = useState(false);
  const [rated, setRated] = useState<"none" | "know" | "dont">("none");
  const [idx, setIdx] = useState(0);

  const cards = [
    {
      term: "Opportunity cost",
      meaning:
        "The benefit of the next best alternative given up in order to choose something else.",
    },
    {
      term: "Ceteris paribus",
      meaning: "Holding all other relevant factors constant when analysing a relationship.",
    },
  ];

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(
    async (api) => {
      setFade(true);
      await api.wait(220);
      setFlipped(false);
      setRated("none");
      setIdx(0);
      setFade(false);
      await api.wait(480);

      await api.moveTo('[data-d="card"]');
      await api.click();
      setFlipped(true);
      await api.wait(850);

      await api.moveTo('[data-d="dont"]');
      await api.click();
      setRated("dont");
      await api.wait(550);
      setIdx(1);
      setFlipped(false);
      setRated("none");
      await api.wait(500);

      await api.moveTo('[data-d="card"]');
      await api.click();
      setFlipped(true);
      await api.wait(750);
      await api.moveTo('[data-d="know"]');
      await api.click();
      setRated("know");
      await api.wait(1300);
    },
    [],
  );

  const card = cards[idx]!;

  return (
    <DemoShell url="/flashcards/economics" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "mx-auto flex h-[340px] max-w-md flex-col justify-center transition-opacity duration-500 sm:h-[380px]",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <div className="mb-3 flex items-end justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
                Study tools
              </p>
              <h3 className="font-display text-lg font-bold">Flashcards · Economics</h3>
            </div>
            <span
              className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: ACCENT }}
            >
              Markets · {idx + 1}/40
            </span>
          </div>

          <div data-d="card" className={cn("news-uniq-flip-stage", flipped && "is-flipped")}>
            <div className="news-uniq-flip-inner">
              <div className="news-uniq-flip-face news-uniq-flip-front rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <Layers className="h-3 w-3" /> Term
                </span>
                <p className="mt-8 text-center font-display text-2xl font-bold tracking-tight">
                  {card.term}
                </p>
                <p className="mt-6 text-center text-xs text-muted-foreground">Tap to flip</p>
              </div>
              <div className="news-uniq-flip-face news-uniq-flip-back rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <Layers className="h-3 w-3" /> Meaning
                </span>
                <p className="mt-6 text-center text-base leading-relaxed">{card.meaning}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <span
              data-d="dont"
              className={cn(
                "inline-flex flex-1 items-center justify-center gap-2 rounded-md border px-3 py-2.5 text-sm font-semibold",
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
                "inline-flex flex-1 items-center justify-center gap-2 rounded-md border px-3 py-2.5 text-sm font-semibold",
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
