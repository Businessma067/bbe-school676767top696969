import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { SiteHeader } from "@/components/SiteHeader";
import {
  countCards,
  getFlashcardSubject,
  type Flashcard,
  type FlashcardSection,
} from "@/data/flashcards";
import {
  cardKey,
  clearProgress,
  loadProgress,
  pickWeightedIndex,
  saveProgress,
  summarizeProgress,
  type CardKnowledge,
  type FlashcardProgressMap,
} from "@/lib/flashcard-progress";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Layers,
  RotateCcw,
  Shuffle,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

export const Route = createFileRoute("/flashcards/$subject")({
  beforeLoad: ({ params }) => {
    const subject = getFlashcardSubject(params.subject);
    if (!subject || subject.comingSoon) {
      throw redirect({ to: "/flashcards" });
    }
  },
  head: ({ params }) => {
    const subject = getFlashcardSubject(params.subject);
    const title = subject ? `${subject.title} Flashcards — BBE School` : "Flashcards — BBE School";
    return {
      meta: [
        { title },
        {
          name: "description",
          content: subject?.description ?? "BBE flashcards for the WU entrance exam.",
        },
      ],
    };
  },
  component: FlashcardSubjectPage,
});

type DeckCard = Flashcard & { sectionId: string; sectionTitle: string; key: string };

const SWIPE_THRESHOLD = 88;
const EXIT_MS = 300;

function buildDeck(
  subjectId: string,
  sections: FlashcardSection[],
  sectionId: string | "all",
): DeckCard[] {
  const filtered =
    sectionId === "all" ? sections : sections.filter((s) => s.id === sectionId);
  return filtered.flatMap((s) =>
    s.cards.map((c) => ({
      ...c,
      sectionId: s.id,
      sectionTitle: s.title,
      key: cardKey(subjectId, s.id, c.term),
    })),
  );
}

function shuffleInPlaceCopy<T>(arr: T[]): T[] {
  const next = [...arr];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function FlashcardSubjectPage() {
  const { subject: subjectId } = Route.useParams();
  const subject = getFlashcardSubject(subjectId)!;
  const total = countCards(subject.sections);

  const [sectionId, setSectionId] = useState<string | "all">("all");
  const [deck, setDeck] = useState<DeckCard[]>(() =>
    buildDeck(subjectId, subject.sections, "all"),
  );
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [progress, setProgress] = useState<FlashcardProgressMap>({});
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [exitDir, setExitDir] = useState<"left" | "right" | null>(null);
  const [seen, setSeen] = useState(0);

  const exitLockRef = useRef(false);
  const dragActiveRef = useRef(false);
  const startXRef = useRef(0);
  const dragXRef = useRef(0);
  const movedRef = useRef(false);
  const deckRef = useRef(deck);
  const progressRef = useRef(progress);
  const cardRef = useRef<DeckCard | undefined>(undefined);

  deckRef.current = deck;
  progressRef.current = progress;

  useEffect(() => {
    setProgress(loadProgress(subjectId));
  }, [subjectId]);

  useEffect(() => {
    const next = buildDeck(subjectId, subject.sections, sectionId);
    setDeck(next);
    setIndex(0);
    setFlipped(false);
    setDragX(0);
    setExitDir(null);
    exitLockRef.current = false;
    setSeen(0);
  }, [sectionId, subject.sections, subjectId]);

  const card = deck[index];
  cardRef.current = card;

  const allKeys = useMemo(
    () => buildDeck(subjectId, subject.sections, "all").map((c) => c.key),
    [subject.sections, subjectId],
  );
  const stats = useMemo(() => summarizeProgress(allKeys, progress), [allKeys, progress]);

  const sectionOptions = useMemo(
    () => [
      { id: "all" as const, label: `All topics (${total})` },
      ...subject.sections.map((s) => ({
        id: s.id,
        label: `${s.title} (${s.cards.length})`,
      })),
    ],
    [subject.sections, total],
  );

  const knowledge: CardKnowledge | undefined = card ? progress[card.key] : undefined;

  const rateCard = useCallback(
    (status: CardKnowledge) => {
      const current = cardRef.current;
      if (!current || exitLockRef.current) return;
      exitLockRef.current = true;

      const key = current.key;
      const nextProgress = { ...progressRef.current, [key]: status };
      progressRef.current = nextProgress;
      setProgress(nextProgress);
      saveProgress(subjectId, nextProgress);

      setExitDir(status === "known" ? "right" : "left");
      window.setTimeout(() => {
        setFlipped(false);
        setDragX(0);
        dragXRef.current = 0;
        setExitDir(null);
        exitLockRef.current = false;
        setIndex(() => pickWeightedIndex(deckRef.current, nextProgress, key));
        setSeen((n) => n + 1);
      }, EXIT_MS);
    },
    [subjectId],
  );

  const goRelative = (delta: number) => {
    if (!deck.length || exitLockRef.current) return;
    setFlipped(false);
    setDragX(0);
    setIndex((i) => {
      const next = i + delta;
      if (next < 0) return deck.length - 1;
      if (next >= deck.length) return 0;
      return next;
    });
  };

  const advanceWeighted = () => {
    if (!deck.length || exitLockRef.current) return;
    const exclude = cardRef.current?.key;
    setFlipped(false);
    setDragX(0);
    setIndex(() => pickWeightedIndex(deckRef.current, progressRef.current, exclude));
    setSeen((n) => n + 1);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === " " || e.key === "f" || e.key === "F") {
        e.preventDefault();
        if (!exitLockRef.current) setFlipped((f) => !f);
      } else if (e.key === "ArrowRight" || e.key === "k" || e.key === "K") {
        e.preventDefault();
        rateCard("known");
      } else if (e.key === "ArrowLeft" || e.key === "d" || e.key === "D") {
        e.preventDefault();
        rateCard("unknown");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [rateCard]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (exitLockRef.current || e.button !== 0) return;
    dragActiveRef.current = true;
    movedRef.current = false;
    startXRef.current = e.clientX;
    dragXRef.current = 0;
    setDragging(true);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragActiveRef.current) return;
    const dx = e.clientX - startXRef.current;
    dragXRef.current = dx;
    if (Math.abs(dx) > 10) movedRef.current = true;
    setDragX(dx);
  };

  const finishPointer = () => {
    if (!dragActiveRef.current) return;
    dragActiveRef.current = false;
    setDragging(false);
    const dx = dragXRef.current;
    if (dx >= SWIPE_THRESHOLD) {
      rateCard("known");
      return;
    }
    if (dx <= -SWIPE_THRESHOLD) {
      rateCard("unknown");
      return;
    }
    if (!movedRef.current) {
      setFlipped((f) => !f);
    }
    setDragX(0);
    dragXRef.current = 0;
  };

  const swipeHint =
    dragX > 24 ? "Know →" : dragX < -24 ? "← Don't know" : "Swipe right = know · left = don't know";

  const transform = exitDir
    ? `translateX(${exitDir === "right" ? "130%" : "-130%"}) rotate(${exitDir === "right" ? 14 : -14}deg)`
    : `translateX(${dragX}px) rotate(${dragX * 0.045}deg)`;

  const overlayOpacity = Math.min(0.5, Math.abs(dragX) / 160);
  const busy = !!exitDir;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-7xl"
        actions={
          <Link
            to="/flashcards"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Subjects
          </Link>
        }
      />

      <main className="px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">
                Flashcards
              </p>
              <h1 className="mt-1 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {subject.title}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">{subject.description}</p>
            </div>
            {subject.downloadHref && (
              <a
                href={subject.downloadHref}
                download
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold transition-all hover:bg-secondary"
              >
                <Download className="h-3.5 w-3.5" />
                {subject.downloadLabel ?? "Download .docx"}
              </a>
            )}
          </div>

          <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
            <StatChip label="Known" value={stats.known} tone="known" />
            <StatChip label="Don't know" value={stats.unknown} tone="unknown" />
            <StatChip label="New" value={stats.unset} tone="new" />
          </div>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Topic
            </label>
            <select
              value={sectionId}
              onChange={(e) => setSectionId(e.target.value)}
              className="min-w-[220px] flex-1 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/30"
            >
              {sectionOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => {
                setDeck((prev) => shuffleInPlaceCopy(prev));
                setIndex(0);
                setFlipped(false);
              }}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold hover:bg-secondary"
            >
              <Shuffle className="h-3.5 w-3.5" />
              Shuffle
            </button>
            <button
              type="button"
              onClick={() => {
                clearProgress(subjectId);
                setProgress({});
                progressRef.current = {};
                setDeck(buildDeck(subjectId, subject.sections, sectionId));
                setIndex(0);
                setFlipped(false);
                setSeen(0);
              }}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold hover:bg-secondary"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset progress
            </button>
          </div>

          <p className="mb-3 text-center text-xs font-semibold text-muted-foreground">
            {card ? card.sectionTitle : "—"}
            {knowledge === "known"
              ? " · marked known (rare)"
              : knowledge === "unknown"
                ? " · marked don't know (frequent)"
                : ""}
            {seen > 0 ? ` · ${seen} reviewed` : ""}
          </p>

          {card ? (
            <div
              className={
                "flashcard-stage relative w-full touch-none " +
                (busy ? "flashcard-exiting" : dragging ? "" : "flashcard-drag-settle")
              }
              style={{ transform }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={finishPointer}
              onPointerCancel={finishPointer}
              role="button"
              tabIndex={0}
              aria-label={flipped ? "Flashcard explanation — tap to flip" : "Flashcard term — tap to flip"}
            >
              <div
                className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center rounded-2xl"
                style={{
                  background:
                    dragX > 20
                      ? `rgba(16, 185, 129, ${overlayOpacity})`
                      : dragX < -20
                        ? `rgba(239, 68, 68, ${overlayOpacity})`
                        : "transparent",
                }}
                aria-hidden
              >
                {Math.abs(dragX) > 24 && (
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground shadow-sm">
                    {swipeHint}
                  </span>
                )}
              </div>

              <div className="flashcard-flip w-full">
                <div className={"flashcard-inner " + (flipped ? "is-flipped" : "")}>
                  <div className="flashcard-face flashcard-front rounded-2xl border border-border bg-card p-8 shadow-sm">
                    <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      <Layers className="h-3 w-3" />
                      Term / Formula
                    </div>
                    <div className="flex min-h-[220px] flex-col items-center justify-center px-2 pt-6 text-center sm:min-h-[260px]">
                      <p className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        {card.term}
                      </p>
                    </div>
                    <p className="mt-2 text-center text-xs text-muted-foreground">
                      Tap to flip · swipe to sort · ← don't know · → know
                    </p>
                  </div>
                  <div className="flashcard-face flashcard-back rounded-2xl border border-border bg-card p-8 shadow-sm">
                    <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      <Layers className="h-3 w-3" />
                      Explanation
                    </div>
                    <div className="flex min-h-[220px] flex-col items-center justify-center px-2 pt-6 text-center sm:min-h-[260px]">
                      <p className="text-base leading-relaxed text-foreground sm:text-lg">
                        {card.explanation}
                      </p>
                    </div>
                    <p className="mt-2 text-center text-xs text-muted-foreground">
                      Tap to flip · swipe to sort · ← don't know · → know
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center text-sm text-muted-foreground">
              No cards in this topic.
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => rateCard("unknown")}
              disabled={!deck.length || busy}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-500/15 disabled:opacity-40 sm:flex-none"
            >
              <ThumbsDown className="h-4 w-4" />
              Don't know
            </button>
            <button
              type="button"
              onClick={() => {
                if (!exitLockRef.current) setFlipped((f) => !f);
              }}
              disabled={!deck.length || busy}
              className="rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-110 disabled:opacity-40"
              style={{ backgroundColor: subject.accent }}
            >
              Flip
            </button>
            <button
              type="button"
              onClick={() => rateCard("known")}
              disabled={!deck.length || busy}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-500/15 disabled:opacity-40 sm:flex-none"
            >
              <ThumbsUp className="h-4 w-4" />
              Know
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => goRelative(-1)}
              disabled={!deck.length || busy}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold hover:bg-secondary disabled:opacity-40"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              Prev
            </button>
            <button
              type="button"
              onClick={advanceWeighted}
              disabled={!deck.length || busy}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold hover:bg-secondary disabled:opacity-40"
            >
              Skip / next (weighted)
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatChip({
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
    <div className={"rounded-xl border px-3 py-2 text-center shadow-sm " + cls}>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="font-display text-lg font-bold">{value}</p>
    </div>
  );
}
