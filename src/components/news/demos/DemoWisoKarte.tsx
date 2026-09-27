import { useState } from "react";
import { Layers, ThumbsDown, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#3a5a78";

const CARDS = [
  {
    front: "Opportunitätskosten",
    back: "Der entgangene Nutzen der besten nicht gewählten Alternative.",
  },
  {
    front: "Knappheit",
    back: "Begrenzte Mittel gegenüber unbegrenzten Bedürfnissen.",
  },
];

/**
 * WiSo Karteikarten: a physical stacked deck (peeks behind the top card),
 * German chrome, card flies off the deck when rated.
 */
export function DemoWisoKarte({ caption }: DemoProps) {
  const [deck, setDeck] = useState(0);
  const [left, setLeft] = useState(24);
  const [flipped, setFlipped] = useState(false);
  const [rated, setRated] = useState<"none" | "know" | "dont">("none");
  const [fly, setFly] = useState<"none" | "left" | "right" | "in">("none");

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(240);
    setDeck(0);
    setLeft(24);
    setFlipped(false);
    setRated("none");
    setFly("none");
    setFade(false);
    await api.wait(520);

    await api.moveTo('[data-d="card"]');
    await api.click();
    setFlipped(true);
    await api.wait(780);

    await api.moveTo('[data-d="know"]');
    await api.click();
    setRated("know");
    setFly("right");
    await api.wait(500);
    setDeck(1);
    setLeft(23);
    setFlipped(false);
    setRated("none");
    setFly("in");
    await api.wait(560);

    await api.moveTo('[data-d="card"]');
    await api.click();
    setFlipped(true);
    setFly("none");
    await api.wait(700);

    await api.moveTo('[data-d="dont"]');
    await api.click();
    setRated("dont");
    setFly("left");
    setLeft(22);
    await api.wait(1100);
  }, []);

  const card = CARDS[deck] ?? CARDS[0]!;

  return (
    <DemoShell
      url="/wiso/flashcards/economics"
      caption={caption}
      stageClassName="bg-paper p-3 sm:p-4"
    >
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "mx-auto flex h-[400px] max-w-md flex-col justify-center transition-opacity duration-500 sm:h-[440px]",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <div className="mb-3 flex items-center justify-between gap-3 rounded-xl border border-[#3a5a78]/25 bg-card px-3 py-2">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#3a5a78]">
                WiSo · Karteikasten
              </p>
              <h3 className="font-display text-base font-bold">Karteikarten · Wirtschaft</h3>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Stapel
              </p>
              <p className="font-display text-lg font-bold tabular-nums" style={{ color: ACCENT }}>
                {left}
              </p>
            </div>
          </div>

          <div className="relative px-1 pb-7 pt-2">
            <div className="news-uniq-deck-peek inset-x-8 top-6 bottom-0" />
            <div className="news-uniq-deck-peek inset-x-4 top-3 bottom-3 opacity-95" />
            <div className="overflow-hidden">
              <div
                data-d="card"
                className={cn(
                  "news-uniq-flip-stage relative z-10",
                  flipped && "is-flipped",
                  fly === "left" && "news-uniq-fly-left",
                  fly === "right" && "news-uniq-fly-right",
                  fly === "in" && "news-uniq-fly-in",
                )}
              >
                <div className="news-uniq-flip-inner" style={{ minHeight: 168 }}>
                  <div className="news-uniq-flip-face news-uniq-flip-front rounded-2xl border border-[#3a5a78]/30 bg-card p-5 shadow-md">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3a5a78] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      <Layers className="h-3 w-3" /> Begriff
                    </span>
                    <p className="mt-6 text-center font-display text-2xl font-bold tracking-tight">
                      {card.front}
                    </p>
                    <p className="mt-4 text-center text-xs text-muted-foreground">
                      Tippen zum Umdrehen
                    </p>
                  </div>
                  <div className="news-uniq-flip-face news-uniq-flip-back rounded-2xl border border-[#3a5a78]/30 bg-[#f4f7fa] p-5 shadow-md">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3a5a78] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      <Layers className="h-3 w-3" /> Bedeutung
                    </span>
                    <p className="mt-5 text-center text-sm leading-relaxed sm:text-base">
                      {card.back}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <span
              data-d="dont"
              className={cn(
                "inline-flex flex-1 items-center justify-center gap-2 rounded-md border px-3 py-2.5 text-sm font-semibold transition-colors",
                rated === "dont"
                  ? "border-red-500 bg-red-500 text-white"
                  : "border-red-500/30 bg-red-500/10 text-red-700",
              )}
            >
              <ThumbsDown className="h-4 w-4" /> Weiß nicht
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
              <ThumbsUp className="h-4 w-4" /> Weiß ich
            </span>
          </div>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
