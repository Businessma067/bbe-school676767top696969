import { useState } from "react";
import { Layers, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const MATH = "#10b981";

const CARDS = [
  {
    term: "Discriminant Δ",
    meaning: "Δ = b² − 4ac. Δ < 0 → no real roots; Δ = 0 → one; Δ > 0 → two.",
  },
  {
    term: "Vertex form",
    meaning: "y = a(x − h)² + k with vertex at (h, k).",
  },
];

/** Math formula flashcards with emerald accent. */
export function DemoMathDelta({ caption }: DemoProps) {
  const [flipped, setFlipped] = useState(false);
  const [idx, setIdx] = useState(0);
  const [know, setKnow] = useState(false);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(
    async (api) => {
      setFade(true);
      await api.wait(200);
      setFlipped(false);
      setIdx(0);
      setKnow(false);
      setFade(false);
      await api.wait(450);

      await api.moveTo('[data-d="card"]');
      await api.click();
      setFlipped(true);
      await api.wait(1000);
      await api.moveTo('[data-d="know"]');
      await api.click();
      setKnow(true);
      await api.wait(500);
      setIdx(1);
      setFlipped(false);
      setKnow(false);
      await api.wait(500);
      await api.moveTo('[data-d="card"]');
      await api.click();
      setFlipped(true);
      await api.wait(1200);
    },
    [],
  );

  const card = CARDS[idx]!;

  return (
    <DemoShell url="/flashcards/mathematics" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
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
                Subject room
              </p>
              <h3 className="font-display text-lg font-bold">Flashcards · Mathematics</h3>
            </div>
            <span
              className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: MATH }}
            >
              Algebra · {idx + 1}/32
            </span>
          </div>

          <div data-d="card" className={cn("news-uniq-flip-stage", flipped && "is-flipped")}>
            <div className="news-uniq-flip-inner">
              <div className="news-uniq-flip-face news-uniq-flip-front rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <Layers className="h-3 w-3" /> Formula
                </span>
                <p className="mt-8 text-center font-display text-2xl font-bold tracking-tight">
                  {card.term}
                </p>
              </div>
              <div className="news-uniq-flip-face news-uniq-flip-back rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <Layers className="h-3 w-3" /> Meaning
                </span>
                <p className="mt-6 text-center text-base leading-relaxed">{card.meaning}</p>
              </div>
            </div>
          </div>

          <span
            data-d="know"
            className={cn(
              "mt-4 inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-semibold",
              know
                ? "border-emerald-600 bg-emerald-500 text-white"
                : "border-emerald-500/30 bg-emerald-500/10 text-emerald-700",
            )}
          >
            <ThumbsUp className="h-4 w-4" /> Know · next
          </span>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
