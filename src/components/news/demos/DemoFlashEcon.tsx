import { useState } from "react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoFlashCard, DemoSortButtons, type CardSide } from "./DemoFlashDeck";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer, type DemoPlayerApi } from "./useDemoPlayer";

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
  {
    term: "Scarcity",
    meaning: "Limited resources relative to unlimited wants.",
    topic: "Markets",
  },
];

/** Same exit/enter timing as FlashcardSubjectView.rateCard (260ms out, 320ms in). */
async function swipeCard(
  api: DemoPlayerApi,
  dir: "left" | "right",
  setExit: (v: CardSide) => void,
  setEnter: (v: CardSide) => void,
  swap: () => void,
) {
  setExit(dir);
  setEnter(null);
  await api.wait(300);
  swap();
  setExit(null);
  setEnter(dir === "right" ? "left" : "right");
  await api.flush();
  await api.wait(360);
  setEnter(null);
}

/** BBE economics flashcards — site card, flip on click, swipe on Know / Don't know. */
export function DemoFlashEcon({ caption }: DemoProps) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [rated, setRated] = useState<"none" | "know" | "dont">("none");
  const [exitDir, setExitDir] = useState<CardSide>(null);
  const [enterFrom, setEnterFrom] = useState<CardSide>(null);
  const [stats, setStats] = useState({ known: 0, unknown: 0, fresh: 40 });

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(240);
    setIdx(0);
    setFlipped(false);
    setRated("none");
    setExitDir(null);
    setEnterFrom(null);
    setStats({ known: 0, unknown: 0, fresh: 40 });
    setFade(false);
    await api.wait(480);

    await api.moveTo('[data-d="card"]');
    await api.click();
    setFlipped(true);
    await api.wait(560);

    await api.moveTo('[data-d="dont"]');
    await api.click();
    setRated("dont");
    setStats({ known: 0, unknown: 1, fresh: 39 });
    await swipeCard(api, "left", setExitDir, setEnterFrom, () => {
      setIdx(1);
      setFlipped(false);
      setRated("none");
    });

    await api.moveTo('[data-d="flip"]');
    await api.click();
    setFlipped(true);
    await api.wait(560);

    await api.moveTo('[data-d="know"]');
    await api.click();
    setRated("know");
    setStats({ known: 1, unknown: 1, fresh: 38 });
    await swipeCard(api, "right", setExitDir, setEnterFrom, () => {
      setIdx(2);
      setFlipped(false);
      setRated("none");
    });
    await api.wait(900);
  }, []);

  const card = CARDS[idx] ?? CARDS[0]!;

  return (
    <DemoShell url="/flashcards/economics" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "mx-auto flex max-w-xl flex-col transition-opacity duration-500",
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
            <Chip label="Known" value={stats.known} tone="known" />
            <Chip label="Don't know" value={stats.unknown} tone="unknown" />
            <Chip label="New" value={stats.fresh} tone="new" />
          </div>

          <DemoFlashCard
            flipped={flipped}
            exitDir={exitDir}
            enterFrom={enterFrom}
            frontLabel="Term"
            backLabel="Meaning"
            term={card.term}
            meaning={card.meaning}
            hintFront="Tap to flip · swipe to sort"
            hintBack="Tap to flip · press-and-drag to sort"
          />

          <DemoSortButtons
            accent={ACCENT}
            rated={rated}
            dontLabel="Don't know"
            flipLabel="Flip"
            knowLabel="Know"
          />
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
}: {
  label: string;
  value: number;
  tone: "known" | "unknown" | "new";
}) {
  const cls =
    tone === "known"
      ? "border-emerald-500/25 bg-emerald-500/10"
      : tone === "unknown"
        ? "border-red-500/25 bg-red-500/10"
        : "border-border bg-card";
  return (
    <div className={cn("rounded-xl border px-2 py-2 text-center shadow-sm", cls)}>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="font-display text-lg font-bold tabular-nums">{value}</p>
    </div>
  );
}
