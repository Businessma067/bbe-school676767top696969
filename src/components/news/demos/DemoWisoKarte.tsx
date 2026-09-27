import { useState } from "react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoFlashCard, DemoSortButtons, type CardSide } from "./DemoFlashDeck";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer, type DemoPlayerApi } from "./useDemoPlayer";

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
  {
    front: "Angebot",
    back: "Die Menge, die Anbieter zu einem bestimmten Preis verkaufen wollen.",
  },
];

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

/** WiSo Karteikarten — same card geometry and swipe timing as the live deck. */
export function DemoWisoKarte({ caption }: DemoProps) {
  const [deck, setDeck] = useState(0);
  const [left, setLeft] = useState(24);
  const [flipped, setFlipped] = useState(false);
  const [rated, setRated] = useState<"none" | "know" | "dont">("none");
  const [exitDir, setExitDir] = useState<CardSide>(null);
  const [enterFrom, setEnterFrom] = useState<CardSide>(null);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(240);
    setDeck(0);
    setLeft(24);
    setFlipped(false);
    setRated("none");
    setExitDir(null);
    setEnterFrom(null);
    setFade(false);
    await api.wait(480);

    await api.moveTo('[data-d="card"]');
    await api.click();
    setFlipped(true);
    await api.wait(560);

    await api.moveTo('[data-d="know"]');
    await api.click();
    setRated("know");
    await swipeCard(api, "right", setExitDir, setEnterFrom, () => {
      setDeck(1);
      setLeft(23);
      setFlipped(false);
      setRated("none");
    });

    await api.moveTo('[data-d="flip"]');
    await api.click();
    setFlipped(true);
    await api.wait(560);

    await api.moveTo('[data-d="dont"]');
    await api.click();
    setRated("dont");
    await swipeCard(api, "left", setExitDir, setEnterFrom, () => {
      setDeck(2);
      setLeft(22);
      setFlipped(false);
      setRated("none");
    });
    await api.wait(900);
  }, []);

  const card = CARDS[deck] ?? CARDS[0]!;

  return (
    <DemoShell url="/wiso/flashcards/economics" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "mx-auto flex max-w-xl flex-col transition-opacity duration-500",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <div className="mb-3 flex items-center justify-between gap-3">
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

          <DemoFlashCard
            flipped={flipped}
            exitDir={exitDir}
            enterFrom={enterFrom}
            frontLabel="Begriff"
            backLabel="Bedeutung"
            term={card.front}
            meaning={card.back}
            hintFront="Tippen zum Umdrehen"
            hintBack="Tippen zum Umdrehen · wischen zum Sortieren"
          />

          <DemoSortButtons
            accent={ACCENT}
            rated={rated}
            dontLabel="Weiß nicht"
            flipLabel="Umdrehen"
            knowLabel="Weiß ich"
          />
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
