import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
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
      links: [{ rel: "canonical", href: `https://bbe-school.com/matching/${params.subject}` }],

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
type Side = "left" | "right";
type Point = { x: number; y: number };
type WrongPair = { leftId: string; rightId: string };
type DragState = {
  fromSide: Side;
  fromId: string;
  start: Point;
  current: Point;
  smoothed: Point;
};

const ROUND_SIZE = 5;
const DRAG_THRESHOLD_PX = 8;
const CLICK_LINE_DELAY_MS = 160;
const DRAG_SMOOTHING = 0.28;

function cardKey(side: Side, id: string) {
  return `${side}:${id}`;
}

function curvePath(a: Point, b: Point) {
  const midX = (a.x + b.x) / 2;
  return `M ${a.x} ${a.y} C ${midX} ${a.y}, ${midX} ${b.y}, ${b.x} ${b.y}`;
}

function lerpPoint(from: Point, to: Point, t: number): Point {
  return {
    x: from.x + (to.x - from.x) * t,
    y: from.y + (to.y - from.y) * t,
  };
}

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
  const [wrongPair, setWrongPair] = useState<WrongPair | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [correctClicks, setCorrectClicks] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [anchors, setAnchors] = useState<Record<string, Point>>({});
  const [hiddenLineIds, setHiddenLineIds] = useState<Set<string>>(() => new Set());
  const [wrongLineReady, setWrongLineReady] = useState(false);

  const boardRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const dragRef = useRef<DragState | null>(null);
  const pointerIdRef = useRef<number | null>(null);
  const didDragRef = useRef(false);
  const dragPathRef = useRef<SVGPathElement>(null);
  const dragDotRef = useRef<SVGCircleElement>(null);
  const rafRef = useRef<number | null>(null);
  const lineDelayTimers = useRef<Map<string, number>>(new Map());
  const wrongLineTimer = useRef<number | null>(null);

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
      setIsDragging(false);
      dragRef.current = null;
      setHiddenLineIds(new Set());
      setWrongLineReady(false);
      for (const t of lineDelayTimers.current.values()) window.clearTimeout(t);
      lineDelayTimers.current.clear();
      if (wrongLineTimer.current != null) {
        window.clearTimeout(wrongLineTimer.current);
        wrongLineTimer.current = null;
      }
      if (nextRound != null) setRound(nextRound);
    },
    [subject.sections],
  );

  useEffect(() => {
    startRound(sectionId, 1);
  }, [sectionId, startRound]);

  const measureAnchors = useCallback(() => {
    const board = boardRef.current;
    if (!board) return;
    const boardRect = board.getBoundingClientRect();
    const next: Record<string, Point> = {};

    for (const [key, el] of cardRefs.current.entries()) {
      const rect = el.getBoundingClientRect();
      const [side] = key.split(":") as [Side, string];
      next[key] = {
        x:
          side === "left"
            ? rect.right - boardRect.left
            : rect.left - boardRect.left,
        y: rect.top + rect.height / 2 - boardRect.top,
      };
    }

    setAnchors(next);
  }, []);

  useLayoutEffect(() => {
    measureAnchors();
  }, [measureAnchors, leftOrder, rightOrder, matched, pairs, wrongPair]);

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;

    const onResize = () => measureAnchors();
    window.addEventListener("resize", onResize);

    const ro = new ResizeObserver(onResize);
    ro.observe(board);

    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, [measureAnchors, pairs.length]);

  const paintDragLine = useCallback((start: Point, end: Point, visible: boolean) => {
    const path = dragPathRef.current;
    const dot = dragDotRef.current;
    if (path) {
      path.setAttribute("d", curvePath(start, end));
      path.style.opacity = visible ? "0.85" : "0";
    }
    if (dot) {
      dot.setAttribute("cx", String(end.x));
      dot.setAttribute("cy", String(end.y));
      dot.style.opacity = visible ? "1" : "0";
    }
  }, []);

  const clearDragVisual = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    paintDragLine({ x: 0, y: 0 }, { x: 0, y: 0 }, false);
    setIsDragging(false);
  }, [paintDragLine]);

  const scheduleLineReveal = useCallback((id: string) => {
    setHiddenLineIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    const existing = lineDelayTimers.current.get(id);
    if (existing != null) window.clearTimeout(existing);
    const timer = window.setTimeout(() => {
      setHiddenLineIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      lineDelayTimers.current.delete(id);
    }, CLICK_LINE_DELAY_MS);
    lineDelayTimers.current.set(id, timer);
  }, []);

  useEffect(() => {
    return () => {
      for (const t of lineDelayTimers.current.values()) window.clearTimeout(t);
      if (wrongLineTimer.current != null) window.clearTimeout(wrongLineTimer.current);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const allDone = pairs.length > 0 && matched.size === pairs.length;

  const tryMatch = useCallback(
    (leftId: string, rightId: string, fromDrag: boolean) => {
      setAttempts((n) => n + 1);
      if (leftId === rightId) {
        setMatched((prev) => new Set(prev).add(leftId));
        setCorrectClicks((n) => n + 1);
        setSelectedLeft(null);
        setSelectedRight(null);
        setWrongPair(null);
        setWrongLineReady(false);
        if (!fromDrag) scheduleLineReveal(leftId);
        return;
      }
      setWrongPair({ leftId, rightId });
      setWrongLineReady(fromDrag);
      if (wrongLineTimer.current != null) {
        window.clearTimeout(wrongLineTimer.current);
        wrongLineTimer.current = null;
      }
      if (!fromDrag) {
        wrongLineTimer.current = window.setTimeout(() => {
          setWrongLineReady(true);
          wrongLineTimer.current = null;
        }, CLICK_LINE_DELAY_MS);
      }
      window.setTimeout(() => {
        setWrongPair(null);
        setWrongLineReady(false);
        setSelectedLeft(null);
        setSelectedRight(null);
      }, fromDrag ? 520 : 520 + CLICK_LINE_DELAY_MS);
    },
    [scheduleLineReveal],
  );

  const onPickLeft = (id: string) => {
    if (matched.has(id) || wrongPair || didDragRef.current) return;
    if (selectedRight) {
      tryMatch(id, selectedRight, false);
      return;
    }
    setSelectedLeft((cur) => (cur === id ? null : id));
    setSelectedRight(null);
  };

  const onPickRight = (id: string) => {
    if (matched.has(id) || wrongPair || didDragRef.current) return;
    if (selectedLeft) {
      tryMatch(selectedLeft, id, false);
      return;
    }
    setSelectedRight((cur) => (cur === id ? null : id));
    setSelectedLeft(null);
  };

  const boardPoint = useCallback((clientX: number, clientY: number): Point => {
    const board = boardRef.current;
    if (!board) return { x: clientX, y: clientY };
    const rect = board.getBoundingClientRect();
    return { x: clientX - rect.left, y: clientY - rect.top };
  }, []);

  const setCardRef = useCallback(
    (side: Side, id: string, el: HTMLButtonElement | null) => {
      const key = cardKey(side, id);
      if (el) cardRefs.current.set(key, el);
      else cardRefs.current.delete(key);
    },
    [],
  );

  const findCardUnderPoint = useCallback(
    (clientX: number, clientY: number, preferSide: Side | null) => {
      const elements = document.elementsFromPoint(clientX, clientY);
      for (const el of elements) {
        if (!(el instanceof HTMLElement)) continue;
        const side = el.dataset.matchSide as Side | undefined;
        const id = el.dataset.matchId;
        if (!side || !id) continue;
        if (preferSide && side !== preferSide) continue;
        return { side, id };
      }
      return null;
    },
    [],
  );

  const endDrag = useCallback(
    (clientX: number, clientY: number) => {
      const current = dragRef.current;
      const wasDragging = didDragRef.current;
      dragRef.current = null;
      pointerIdRef.current = null;
      clearDragVisual();

      if (!current || !wasDragging) return;

      const targetSide: Side = current.fromSide === "left" ? "right" : "left";
      const target = findCardUnderPoint(clientX, clientY, targetSide);
      if (!target || matched.has(target.id) || matched.has(current.fromId)) {
        return;
      }

      if (current.fromSide === "left") {
        tryMatch(current.fromId, target.id, true);
      } else {
        tryMatch(target.id, current.fromId, true);
      }
    },
    [clearDragVisual, findCardUnderPoint, matched, tryMatch],
  );

  const onCardPointerDown = (
    side: Side,
    id: string,
    e: ReactPointerEvent<HTMLButtonElement>,
  ) => {
    if (matched.has(id) || wrongPair || e.button !== 0) return;
    didDragRef.current = false;
    pointerIdRef.current = e.pointerId;
    e.currentTarget.setPointerCapture(e.pointerId);

    const start =
      anchors[cardKey(side, id)] ?? boardPoint(e.clientX, e.clientY);
    const point = boardPoint(e.clientX, e.clientY);
    dragRef.current = {
      fromSide: side,
      fromId: id,
      start,
      current: point,
      smoothed: start,
    };
    // Keep the line hidden until the pointer actually moves — clicks stay clean
    paintDragLine(start, start, false);
  };

  const onCardPointerMove = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (pointerIdRef.current !== e.pointerId || !dragRef.current) return;
    const point = boardPoint(e.clientX, e.clientY);
    const drag = dragRef.current;
    drag.current = point;

    const dist = Math.hypot(point.x - drag.start.x, point.y - drag.start.y);
    if (dist > DRAG_THRESHOLD_PX && !didDragRef.current) {
      didDragRef.current = true;
      setIsDragging(true);
    }

    if (rafRef.current != null) return;

    const tick = () => {
      const live = dragRef.current;
      if (!live) {
        rafRef.current = null;
        return;
      }

      live.smoothed = lerpPoint(live.smoothed, live.current, DRAG_SMOOTHING);
      const lag = Math.hypot(
        live.current.x - live.smoothed.x,
        live.current.y - live.smoothed.y,
      );
      if (lag < 1.25) live.smoothed = live.current;

      paintDragLine(live.start, live.smoothed, didDragRef.current);

      if (didDragRef.current && lag >= 1.25) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  const onCardPointerUp = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (pointerIdRef.current !== e.pointerId) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
    endDrag(e.clientX, e.clientY);
    window.setTimeout(() => {
      didDragRef.current = false;
    }, 0);
  };

  const onCardPointerCancel = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (pointerIdRef.current !== e.pointerId) return;
    dragRef.current = null;
    pointerIdRef.current = null;
    didDragRef.current = false;
    clearDragVisual();
  };

  const accuracy =
    attempts === 0 ? null : Math.round((correctClicks / attempts) * 100);

  const matchedLines = useMemo(() => {
    return [...matched].flatMap((id) => {
      if (hiddenLineIds.has(id)) return [];
      const a = anchors[cardKey("left", id)];
      const b = anchors[cardKey("right", id)];
      if (!a || !b) return [];
      return [{ id, a, b }];
    });
  }, [anchors, matched, hiddenLineIds]);

  const wrongLine = useMemo(() => {
    if (!wrongPair || !wrongLineReady) return null;
    const a = anchors[cardKey("left", wrongPair.leftId)];
    const b = anchors[cardKey("right", wrongPair.rightId)];
    if (!a || !b) return null;
    return { a, b };
  }, [anchors, wrongPair, wrongLineReady]);

  const selectedAnchor =
    !isDragging && selectedLeft && !selectedRight
      ? anchors[cardKey("left", selectedLeft)]
      : !isDragging && selectedRight && !selectedLeft
        ? anchors[cardKey("right", selectedRight)]
        : null;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        compact
        maxWidthClassName="max-w-7xl"
        actions={
          <Link
            to="/matching"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Subjects
          </Link>
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
                Tap or drag from a concept to its meaning — lines connect them
                like on paper. Correct pairs lock in place. {total} cards in
                this subject deck.
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
            <div ref={boardRef} className="relative">
              <svg
                className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
                aria-hidden
              >
                {matchedLines.map((line) => (
                  <path
                    key={`ok-${line.id}`}
                    d={curvePath(line.a, line.b)}
                    fill="none"
                    stroke={subject.accent}
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    opacity={0.85}
                  />
                ))}
                {wrongLine && (
                  <path
                    d={curvePath(wrongLine.a, wrongLine.b)}
                    fill="none"
                    stroke="#f87171"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeDasharray="6 4"
                  />
                )}
                <path
                  ref={dragPathRef}
                  d="M 0 0"
                  fill="none"
                  stroke={subject.accent}
                  strokeWidth={2.25}
                  strokeLinecap="round"
                  style={{ opacity: 0, transition: "opacity 80ms linear" }}
                />
                <circle
                  ref={dragDotRef}
                  cx={0}
                  cy={0}
                  r={4.5}
                  fill={subject.accent}
                  style={{ opacity: 0 }}
                />
                {!isDragging && selectedAnchor && (
                  <circle
                    cx={selectedAnchor.x}
                    cy={selectedAnchor.y}
                    r={4}
                    fill={subject.accent}
                    style={{ opacity: 0.9 }}
                  />
                )}
              </svg>

              <div className="relative z-0 grid gap-3 md:grid-cols-2 md:gap-16">
                <Column
                  title="Concepts"
                  accent={subject.accent}
                  ids={leftOrder}
                  byId={byId}
                  side="left"
                  matched={matched}
                  selectedId={selectedLeft}
                  wrongId={wrongPair?.leftId ?? null}
                  onPick={onPickLeft}
                  setCardRef={setCardRef}
                  onPointerDown={onCardPointerDown}
                  onPointerMove={onCardPointerMove}
                  onPointerUp={onCardPointerUp}
                  onPointerCancel={onCardPointerCancel}
                />
                <Column
                  title="Meanings"
                  accent={subject.accent}
                  ids={rightOrder}
                  byId={byId}
                  side="right"
                  matched={matched}
                  selectedId={selectedRight}
                  wrongId={wrongPair?.rightId ?? null}
                  onPick={onPickRight}
                  setCardRef={setCardRef}
                  onPointerDown={onCardPointerDown}
                  onPointerMove={onCardPointerMove}
                  onPointerUp={onCardPointerUp}
                  onPointerCancel={onCardPointerCancel}
                />
              </div>
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
  wrongId,
  onPick,
  setCardRef,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
}: {
  title: string;
  accent: string;
  ids: string[];
  byId: Map<string, Pair>;
  side: Side;
  matched: Set<string>;
  selectedId: string | null;
  wrongId: string | null;
  onPick: (id: string) => void;
  setCardRef: (side: Side, id: string, el: HTMLButtonElement | null) => void;
  onPointerDown: (
    side: Side,
    id: string,
    e: ReactPointerEvent<HTMLButtonElement>,
  ) => void;
  onPointerMove: (e: ReactPointerEvent<HTMLButtonElement>) => void;
  onPointerUp: (e: ReactPointerEvent<HTMLButtonElement>) => void;
  onPointerCancel: (e: ReactPointerEvent<HTMLButtonElement>) => void;
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
          const isWrong = wrongId === id;
          const text = side === "left" ? card.term : card.explanation;

          return (
            <li key={`${side}-${id}`}>
              <button
                type="button"
                ref={(el) => setCardRef(side, id, el)}
                data-match-side={side}
                data-match-id={id}
                disabled={isMatched}
                onClick={() => onPick(id)}
                onPointerDown={(e) => onPointerDown(side, id, e)}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerCancel}
                className={
                  "group relative w-full touch-none rounded-xl border px-3.5 py-3 text-left text-sm " +
                  (isMatched
                    ? "border-emerald-300 bg-emerald-50/90 text-foreground dark:border-emerald-800 dark:bg-emerald-950/50"
                    : isWrong
                      ? "animate-[shake_0.45s_ease] border-red-400 bg-red-50 dark:border-red-700 dark:bg-red-950/40"
                      : isSelected
                        ? "border-transparent text-foreground shadow-md"
                        : "border-border bg-card transition-colors hover:border-caramel/40 hover:bg-secondary/60")
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
                      (side === "left" ? "font-semibold" : "text-[13px]")
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
