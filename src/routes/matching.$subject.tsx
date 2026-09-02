import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { FlashcardMath } from "@/components/FlashcardMath";
import {
  countCards,
  getFlashcardSubject,
  type Flashcard,
  type FlashcardSection,
} from "@/data/flashcards";
import { Check, Link2, RotateCcw, Shuffle, X } from "lucide-react";

export const Route = createFileRoute("/matching/$subject")({
  beforeLoad: ({ params }) => {
    const subject = getFlashcardSubject(params.subject);
    if (!subject || subject.comingSoon) {
      throw redirect({ to: "/matching" });
    }
  },
  head: ({ params }) => {
    const subject = getFlashcardSubject(params.subject);
    const title = subject
      ? `${subject.title} Matching — BBE School`
      : "Matching — BBE School";
    return {
      meta: [
        { title },
        {
          name: "description",
          content:
            subject?.description ??
            "Connect BBE concepts to their meanings for the WU entrance exam.",
        },
      ],
    };
  },
  component: MatchingSubjectPage,
});

type Pair = Flashcard & { id: string; sectionTitle: string };

const ROUND_SIZE = 5;

function shuffleCopy<T>(arr: T[]): T[] {
  const next = [...arr];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function poolFromSections(
  sections: FlashcardSection[],
  sectionId: string | "all",
): Pair[] {
  const filtered =
    sectionId === "all" ? sections : sections.filter((s) => s.id === sectionId);
  return filtered.flatMap((s) =>
    s.cards.map((c, i) => ({
    links: [{ rel: "canonical", href: `https://bbe-school.com/matching/${params.subject}` }],
      ...c,
      id: `${s.id}::${i}::${c.term}`,
      sectionTitle: s.title,
    })),
  );
}

function pickRound(pool: Pair[], size: number): Pair[] {
  if (pool.length === 0) return [];
  return shuffleCopy(pool).slice(0, Math.min(size, pool.length));
}

function MatchingSubjectPage() {
  const { subject: subjectId } = Route.useParams();
  const subject = getFlashcardSubject(subjectId)!;
  const total = countCards(subject.sections);

  const [sectionId, setSectionId] = useState<string | "all">(() =>
    subjectId === "english" ? (subject.sections[0]?.id ?? "all") : "all",
  );
  const [round, setRound] = useState(1);
  const [pairs, setPairs] = useState<Pair[]>(() =>
    pickRound(poolFromSections(subject.sections, sectionId), ROUND_SIZE),
  );
  const [leftOrder, setLeftOrder] = useState<string[]>([]);
  const [rightOrder, setRightOrder] = useState<string[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(() => new Set());
  const [wrongPair, setWrongPair] = useState<[string, string] | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [correctClicks, setCorrectClicks] = useState(0);

  const byId = useMemo(() => {
    const map = new Map<string, Pair>();
    for (const p of pairs) map.set(p.id, p);
    return map;
  }, [pairs]);

  const startRound = useCallback(
    (nextSection: string | "all", nextRound?: number) => {
      const pool = poolFromSections(subject.sections, nextSection);
      const picked = pickRound(pool, ROUND_SIZE);
      const ids = picked.map((p) => p.id);
      setPairs(picked);
      setLeftOrder(shuffleCopy(ids));
      setRightOrder(shuffleCopy(ids));
      setSelectedLeft(null);
      setSelectedRight(null);
      setMatched(new Set());
      setWrongPair(null);
      setAttempts(0);
      setCorrectClicks(0);
      if (nextRound != null) setRound(nextRound);
    },
    [subject.sections],
  );

  useEffect(() => {
    startRound(sectionId, 1);
  }, [sectionId, startRound]);

  const allDone = pairs.length > 0 && matched.size === pairs.length;

  const tryMatch = useCallback(
    (leftId: string, rightId: string) => {
      setAttempts((n) => n + 1);
      if (leftId === rightId) {
        setMatched((prev) => new Set(prev).add(leftId));
        setCorrectClicks((n) => n + 1);
        setSelectedLeft(null);
        setSelectedRight(null);
        setWrongPair(null);
        return;
      }
      setWrongPair([leftId, rightId]);
      window.setTimeout(() => {
        setWrongPair(null);
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 520);
    },
    [],
  );

  const onPickLeft = (id: string) => {
    if (matched.has(id) || wrongPair) return;
    if (selectedRight) {
      tryMatch(id, selectedRight);
      return;
    }
    setSelectedLeft((cur) => (cur === id ? null : id));
  };

  const onPickRight = (id: string) => {
    if (matched.has(id) || wrongPair) return;
    if (selectedLeft) {
      tryMatch(selectedLeft, id);
      return;
    }
    setSelectedRight((cur) => (cur === id ? null : id));
  };

  const accuracy =
    attempts === 0 ? null : Math.round((correctClicks / attempts) * 100);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-7xl"
        actions={
          <div className="flex items-center gap-2">
            <Link
              to="/matching"
              className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
            >
              ← Subjects
            </Link>
            <Link
              to="/dashboard"
              className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
            >
              Dashboard
            </Link>
          </div>
        }
      />

      <main className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-taupe">
                <Link2 className="h-3.5 w-3.5 text-caramel-deep" />
                Matching · {subject.title}
              </div>
              <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
                Connect concept → meaning
              </h1>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                Tap a term on the left, then its definition on the right. Correct
                pairs lock in place. {total} cards in this subject deck.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => startRound(sectionId, round)}
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold hover:bg-secondary"
              >
                <Shuffle className="h-3.5 w-3.5" />
                Reshuffle
              </button>
              <button
                type="button"
                onClick={() => startRound(sectionId, round + 1)}
                className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-semibold text-white"
                style={{ backgroundColor: subject.accent }}
              >
                <RotateCcw className="h-3.5 w-3.5" />
                New round
              </button>
            </div>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            <SectionChip
              active={sectionId === "all"}
              label="All topics"
              accent={subject.accent}
              onClick={() => setSectionId("all")}
            />
            {subject.sections.map((s) => (
              <SectionChip
                key={s.id}
                active={sectionId === s.id}
                label={s.title}
                accent={subject.accent}
                onClick={() => setSectionId(s.id)}
              />
            ))}
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full border border-border bg-card px-2.5 py-1 font-semibold text-foreground">
              Round {round}
            </span>
            <span>
              Matched {matched.size}/{pairs.length}
            </span>
            <span>Attempts {attempts}</span>
            {accuracy != null && <span>Accuracy {accuracy}%</span>}
          </div>

          {pairs.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-10 text-center text-sm text-muted-foreground">
              No cards in this topic yet.
            </div>
          ) : (
            <div className="grid gap-3 md:grid-cols-2 md:gap-5">
              <Column
                title="Concepts"
                accent={subject.accent}
                ids={leftOrder}
                byId={byId}
                side="term"
                matched={matched}
                selectedId={selectedLeft}
                wrongPair={wrongPair}
                onPick={onPickLeft}
              />
              <Column
                title="Meanings"
                accent={subject.accent}
                ids={rightOrder}
                byId={byId}
                side="explanation"
                matched={matched}
                selectedId={selectedRight}
                wrongPair={wrongPair}
                onPick={onPickRight}
              />
            </div>
          )}

          {allDone && (
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 text-center dark:border-emerald-900 dark:bg-emerald-950/40">
              <p className="font-display text-lg font-bold text-foreground">
                Round complete
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {correctClicks} correct match
                {correctClicks === 1 ? "" : "es"} in {attempts} attempt
                {attempts === 1 ? "" : "s"}
                {accuracy != null ? ` · ${accuracy}% accuracy` : ""}.
              </p>
              <button
                type="button"
                onClick={() => startRound(sectionId, round + 1)}
                className="mt-4 inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 text-sm font-semibold text-white"
                style={{ backgroundColor: subject.accent }}
              >
                Play another round →
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function SectionChip({
  active,
  label,
  accent,
  onClick,
}: {
  active: boolean;
  label: string;
  accent: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "rounded-full border px-3 py-1.5 text-left text-[11px] font-semibold transition-colors " +
        (active
          ? "border-transparent text-white"
          : "border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground")
      }
      style={active ? { backgroundColor: accent } : undefined}
    >
      {label}
    </button>
  );
}

function Column({
  title,
  accent,
  ids,
  byId,
  side,
  matched,
  selectedId,
  wrongPair,
  onPick,
}: {
  title: string;
  accent: string;
  ids: string[];
  byId: Map<string, Pair>;
  side: "term" | "explanation";
  matched: Set<string>;
  selectedId: string | null;
  wrongPair: [string, string] | null;
  onPick: (id: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-taupe">
        {title}
      </p>
      <ul className="space-y-2.5">
        {ids.map((id) => {
          const card = byId.get(id);
          if (!card) return null;
          const isMatched = matched.has(id);
          const isSelected = selectedId === id;
          const isWrong = wrongPair?.includes(id) ?? false;
          const text = side === "term" ? card.term : card.explanation;

          return (
            <li key={`${side}-${id}`}>
              <button
                type="button"
                disabled={isMatched}
                onClick={() => onPick(id)}
                className={
                  "group relative w-full rounded-xl border px-3.5 py-3 text-left text-sm transition-all " +
                  (isMatched
                    ? "border-emerald-300 bg-emerald-50/90 text-foreground dark:border-emerald-800 dark:bg-emerald-950/50"
                    : isWrong
                      ? "animate-[shake_0.45s_ease] border-red-400 bg-red-50 dark:border-red-700 dark:bg-red-950/40"
                      : isSelected
                        ? "border-transparent text-foreground shadow-md"
                        : "border-border bg-card hover:border-caramel/40 hover:bg-secondary/60")
                }
                style={
                  isSelected && !isMatched && !isWrong
                    ? {
                        backgroundColor: `${accent}14`,
                        boxShadow: `0 0 0 2px ${accent}`,
                      }
                    : undefined
                }
              >
                <span className="flex items-start gap-2">
                  <span
                    className={
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] " +
                      (isMatched
                        ? "border-emerald-500 bg-emerald-500 text-white"
                        : isWrong
                          ? "border-red-400 bg-red-500 text-white"
                          : "border-border bg-background text-muted-foreground")
                    }
                  >
                    {isMatched ? (
                      <Check className="h-3 w-3" />
                    ) : isWrong ? (
                      <X className="h-3 w-3" />
                    ) : (
                      "·"
                    )}
                  </span>
                  <FlashcardMath
                    text={text}
                    className={
                      "min-w-0 flex-1 leading-snug " +
                      (side === "term" ? "font-semibold" : "text-[13px]")
                    }
                  />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
