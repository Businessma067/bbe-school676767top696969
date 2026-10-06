import { useLayoutEffect, useRef, useState } from "react";
import { Check, Layers, ThumbsDown, ThumbsUp } from "lucide-react";
import { FlashcardMath } from "@/components/FlashcardMath";
import { countCards, ECONOMICS_FLASHCARD_SECTIONS } from "@/data/flashcards";
import { TUTOR_CORRECT, TUTOR_GREETINGS } from "@/lib/tutor-exam";
import { cn } from "@/lib/utils";
import { howItWorksGlide, useDemoPlayer, type DemoPlayerApi } from "@/components/news/demos/useDemoPlayer";
import { CourseFrame } from "./CourseFrame";

const ACCENT = "#c8763a";
const DECK_TOTAL = countCards(ECONOMICS_FLASHCARD_SECTIONS);

function sectionOrThrow(id: string) {
  const section = ECONOMICS_FLASHCARD_SECTIONS.find((item) => item.id === id);
  if (!section) throw new Error(`Economics flashcard section missing: ${id}`);
  return section;
}

const CORE = sectionOrThrow("econ-1");
const TYPES = sectionOrThrow("econ-3");

const FLASH_CARDS = CORE.cards.slice(0, 3);

const MATCH_TERMS = ["Labour", "Land", "Entrepreneurship", "Factors of production"] as const;

function pairByTerm(term: string) {
  const card = TYPES.cards.find((item) => item.term === term);
  if (!card) throw new Error(`Missing flashcard: ${term}`);
  return card;
}

const MATCH_PAIRS = MATCH_TERMS.map((term, id) => ({ id, ...pairByTerm(term) }));
/** Neighbor swaps, so the lines cross instead of running straight across every row. */
const MATCH_RIGHT = [1, 0, 3, 2];

type TutorQ = {
  mode: "define" | "identify";
  prompt: string;
  stem: string;
  choices: string[];
  correct: number;
  revealTerm: string;
  revealExplanation: string;
  sectionTitle: string;
};

function tutorDefine(term: string, choiceTerms: string[]): TutorQ {
  const cards = choiceTerms.map(pairByTerm);
  const stem = pairByTerm(term);
  return {
    mode: "define",
    prompt: "What does this concept mean?",
    stem: stem.term,
    choices: cards.map((card) => card.explanation),
    correct: choiceTerms.indexOf(term),
    revealTerm: stem.term,
    revealExplanation: stem.explanation,
    sectionTitle: TYPES.title,
  };
}

function tutorIdentify(term: string, choiceTerms: string[]): TutorQ {
  const stem = pairByTerm(term);
  return {
    mode: "identify",
    prompt: "Which concept matches this meaning?",
    stem: stem.explanation,
    choices: choiceTerms,
    correct: choiceTerms.indexOf(term),
    revealTerm: stem.term,
    revealExplanation: stem.explanation,
    sectionTitle: TYPES.title,
  };
}

const TUTOR_QUESTIONS: TutorQ[] = [
  tutorDefine("Labour", ["Labour", "Land", "Capital (factor of production)", "Entrepreneurship"]),
  tutorIdentify("Land", ["Labour", "Capital (factor of production)", "Land", "Entrepreneurship"]),
];

export type DemoCard = { term: string; explanation: string };

export type DemoFlashCopy = {
  eyebrow: string;
  title: string;
  known: string;
  dont: string;
  fresh: string;
  term: string;
  explanation: string;
  flip: string;
};

export type DemoMatchCopy = {
  eyebrow: string;
  title: string;
  round: (done: number, total: number) => string;
  concepts: string;
  meanings: string;
  complete: string;
};

export type DemoTutorCopy = {
  eyebrow: string;
  title: string;
  exam: string;
  question: (n: number, total: number) => string;
  score: (score: number, pct: string) => string;
  complete: string;
  resultLine: string;
  correctLine: string;
  greeting: string;
  defineHint: string;
  identifyHint: string;
  next: string;
  results: string;
  pct: (pct: number) => string;
  asking: (n: number) => string;
};

const EN_FLASH: DemoFlashCopy = {
  eyebrow: "Study tools · Economics",
  title: "Flashcards",
  known: "Known",
  dont: "Don't know",
  fresh: "New",
  term: "Term",
  explanation: "Explanation",
  flip: "Flip",
};

const EN_MATCH: DemoMatchCopy = {
  eyebrow: "Study tools · Economics",
  title: "Connect concept → meaning",
  round: (done, total) => `Round 1 · ${done}/${total}`,
  concepts: "Concepts",
  meanings: "Meanings",
  complete: "Round complete · 4/4",
};

const GREETING = TUTOR_GREETINGS[1];
const CORRECT_LINE = TUTOR_CORRECT[0];

const EN_TUTOR: DemoTutorCopy = {
  eyebrow: "Study tools · Economics",
  title: "Theory exam with Tutor Bot",
  exam: "Exam 1",
  question: (n, total) => `Question ${n} / ${total}`,
  score: (score, pct) => `Score ${score}${pct}`,
  complete: "Tutor Bot · Exam complete",
  resultLine: "Strong theory pass. Want another random set?",
  correctLine: CORRECT_LINE,
  greeting: GREETING,
  defineHint: "Define the concept. Pick the best meaning.",
  identifyHint: "Read the meaning. Pick the matching concept.",
  next: "Next question →",
  results: "See results →",
  pct: (pct) => `${pct}% correct`,
  asking: (n) => `Tutor Bot · Q${n}`,
};

/** Land on the control, then press. The card must not move until this resolves. */
async function arriveAndClick(api: DemoPlayerApi, selector: string) {
  await api.moveTo(selector, 60);
  if (api.cancelled()) return false;
  api.snapTo(selector);
  await api.flush();
  if (api.cancelled()) return false;
  await api.click();
  return !api.cancelled();
}

type CardSlide = { x: number; rot: number; opacity: number };

const CARD_REST: CardSlide = { x: 0, rot: 0, opacity: 1 };

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
    <div className={cn("rounded-xl border px-2 py-1.5 text-center shadow-sm", cls)}>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="font-display text-base font-bold leading-tight">{value}</p>
    </div>
  );
}

function TutorFace({ mood }: { mood: "idle" | "happy" | "sad" }) {
  return (
    <div
      className={cn(
        "relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border shadow-sm",
        mood === "happy"
          ? "border-emerald-300 bg-emerald-50"
          : mood === "sad"
            ? "border-red-300 bg-red-50"
            : "border-border bg-card",
      )}
      aria-hidden
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 text-foreground/80">
        <rect x="5" y="9" width="22" height="16" rx="5" fill="currentColor" opacity="0.12" />
        <rect
          x="5"
          y="9"
          width="22"
          height="16"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="12" cy="16" r="1.6" fill="currentColor" />
        <circle cx="20" cy="16" r="1.6" fill="currentColor" />
        {mood === "happy" ? (
          <path
            d="M12.5 21.5c1.2 1.4 5.8 1.4 7 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        ) : mood === "sad" ? (
          <path
            d="M12.5 22.5c1.2-1.2 5.8-1.2 7 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M13 21.5h6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        )}
        <circle cx="16" cy="5.5" r="1.4" fill="currentColor" opacity="0.75" />
        <line x1="16" y1="7" x2="16" y2="9" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    </div>
  );
}

/** Study tools · Flashcards: the opening economics cards, flip, then Know / Don't know. */
export function CourseFlashDemo({
  cards = FLASH_CARDS,
  deckTotal = DECK_TOTAL,
  topic = CORE.title,
  copy = EN_FLASH,
  rest = 1,
  lockCopy = false,
}: {
  cards?: DemoCard[];
  deckTotal?: number;
  topic?: string;
  copy?: DemoFlashCopy;
  rest?: number;
  lockCopy?: boolean;
} = {}) {
  const [idx, setIdx] = useState(0);
  const [turn, setTurn] = useState(0);
  const [slide, setSlide] = useState<CardSlide>(CARD_REST);
  const [known, setKnown] = useState(0);
  const [unknown, setUnknown] = useState(0);
  const cardMotion = useRef<HTMLDivElement | null>(null);
  const innerMotion = useRef<HTMLDivElement | null>(null);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(
    async (api) => {
      const paintCard = (next: CardSlide) => {
        const card = cardMotion.current;
        if (!card) return;
        card.style.transform = `translate3d(${next.x}%, 0, 0) rotate(${next.rot}deg)`;
        card.style.opacity = String(next.opacity);
      };
      const paintTurn = (next: number) => {
        const inner = innerMotion.current;
        if (inner) inner.style.transform = `rotateY(${(180 * next).toFixed(2)}deg)`;
      };
      const flipAfterClick = async () => {
        await api.tween(460, (eased) => paintTurn(eased));
        setTurn(1);
      };
      const swipeAfterClick = async (dir: "left" | "right", swap: () => void) => {
        const sign = dir === "right" ? 1 : -1;
        await api.tween(400, (eased) => {
          paintCard({
            x: sign * 112 * eased,
            rot: sign * 12 * eased,
            opacity: 1 - 0.75 * eased,
          });
        });
        if (api.cancelled()) return;
        paintTurn(0);
        setTurn(0);
        swap();
        const entered = { x: -sign * 46, rot: 0, opacity: 0 };
        paintCard(entered);
        setSlide(entered);
        await api.flush();
        await api.tween(340, (eased) => {
          const remain = 1 - eased;
          paintCard({ x: -sign * 46 * remain, rot: 0, opacity: eased });
        });
        paintCard(CARD_REST);
        setSlide(CARD_REST);
      };

      setFade(true);
      await api.wait(80);
      setIdx(0);
      setTurn(0);
      setSlide(CARD_REST);
      setKnown(0);
      setUnknown(0);
      if (api.scroll()) api.scroll()!.scrollTop = 0;
      setFade(false);
      await api.wait(80);

      if (!(await arriveAndClick(api, '[data-d="term"]'))) return;
      await flipAfterClick();
      await api.wait(80);

      if (!(await arriveAndClick(api, '[data-d="dont"]'))) return;
      setUnknown(1);
      await swipeAfterClick("left", () => setIdx(1));

      if (!(await arriveAndClick(api, '[data-d="flip"]'))) return;
      await flipAfterClick();
      await api.wait(80);

      if (!(await arriveAndClick(api, '[data-d="know"]'))) return;
      setKnown(1);
      await swipeAfterClick("right", () => setIdx(2));
      await api.wait(140);
    },
    [rest],
    { flow: true, rest, glideScale: howItWorksGlide(rest) },
  );

  const card = cards[idx] ?? cards[0];
  const fresh = deckTotal - known - unknown;

  return (
    <CourseFrame
      stageRef={stageRef}
      scrollRef={scrollRef}
      cursorRef={cursorRef}
      clicking={clicking}
      fade={fade}
      lockCopy={lockCopy}
    >
      <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
        {copy.eyebrow}
      </p>
      <h3 className="font-display text-lg font-bold tracking-tight">{copy.title}</h3>
      <div className="mt-2 grid grid-cols-3 gap-2">
        <StatChip label={copy.known} value={known} tone="known" />
        <StatChip label={copy.dont} value={unknown} tone="unknown" />
        <StatChip label={copy.fresh} value={fresh} tone="new" />
      </div>
      <p className="mb-2 mt-3 text-center text-[11px] font-semibold text-muted-foreground">
        {topic}
      </p>
      <div className="hiw-study-flash flashcard-viewport relative overflow-x-clip py-1">
        <div
          ref={cardMotion}
          data-d="card"
          className="flashcard-stage relative w-full"
          style={{
            transform: `translate3d(${slide.x}%, 0, 0) rotate(${slide.rot}deg)`,
            opacity: slide.opacity,
            transition: "none",
          }}
        >
          <div className="flashcard-flip w-full">
            <div
              ref={innerMotion}
              className="flashcard-inner"
              style={{ transform: `rotateY(${turn * 180}deg)`, transition: "none" }}
            >
              <div className="flashcard-face flashcard-front rounded-2xl border border-border bg-card p-4 shadow-sm">
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <Layers className="h-3 w-3" />
                  {copy.term}
                </div>
                <div
                  data-d="term"
                  className="flex h-full items-center justify-center px-3 text-center"
                >
                  <FlashcardMath
                    text={card.term}
                    className="font-display text-xl font-bold tracking-tight sm:text-2xl"
                  />
                </div>
              </div>
              <div className="flashcard-face flashcard-back rounded-2xl border border-border bg-card p-4 shadow-sm">
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <Layers className="h-3 w-3" />
                  {copy.explanation}
                </div>
                <div className="flex h-full items-center justify-center px-3 text-center">
                  <FlashcardMath text={card.explanation} className="text-[13px] leading-snug" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span
          data-d="dont"
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-700"
        >
          <ThumbsDown className="h-3.5 w-3.5" />
          {copy.dont}
        </span>
        <span
          data-d="flip"
          className="rounded-md px-4 py-2 text-xs font-semibold text-white shadow-sm"
          style={{ backgroundColor: ACCENT }}
        >
          {copy.flip}
        </span>
        <span
          data-d="know"
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-700"
        >
          <ThumbsUp className="h-3.5 w-3.5" />
          {copy.known}
        </span>
      </div>
    </CourseFrame>
  );
}

function curve(x1: number, y1: number, x2: number, y2: number) {
  const mid = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}`;
}

/** Card edge in the board's own pixels. The frame is CSS-scaled, so viewport boxes are not SVG units. */
function boardEdge(board: HTMLElement, el: HTMLElement, edge: "left" | "right") {
  const boardRect = board.getBoundingClientRect();
  const rect = el.getBoundingClientRect();
  const scaleX = boardRect.width / Math.max(board.offsetWidth, 1);
  const scaleY = boardRect.height / Math.max(board.offsetHeight, 1);
  const x = (edge === "left" ? rect.right : rect.left) - boardRect.left;
  const y = rect.top + rect.height / 2 - boardRect.top;
  return { x: x / scaleX, y: y / scaleY };
}

/** Study tools · Matching: four real economics pairs, locked in with a line. */
export function CourseMatchDemo({
  pairs = MATCH_PAIRS,
  rightOrder = MATCH_RIGHT,
  topic = TYPES.title,
  copy = EN_MATCH,
  rest = 1,
  lockCopy = false,
}: {
  pairs?: { id: number; term: string; explanation: string }[];
  rightOrder?: number[];
  topic?: string;
  copy?: DemoMatchCopy;
  rest?: number;
  lockCopy?: boolean;
} = {}) {
  const boardRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [lines, setLines] = useState<{ id: number; d: string }[]>([]);
  const matchedKey = matched.join("|");

  useLayoutEffect(() => {
    let cancelled = false;
    const measure = () => {
      if (cancelled) return;
      const board = boardRef.current;
      if (!board) return;
      const next: { id: number; d: string }[] = [];
      for (const id of matched) {
        const left = board.querySelector<HTMLElement>(
          `[data-match-side="left"][data-match-id="${id}"]`,
        );
        const right = board.querySelector<HTMLElement>(
          `[data-match-side="right"][data-match-id="${id}"]`,
        );
        if (!left || !right) continue;
        const a = boardEdge(board, left, "left");
        const b = boardEdge(board, right, "right");
        next.push({ id, d: curve(a.x, a.y, b.x, b.y) });
      }
      setLines(next);
    };
    measure();
    // The frame scale settles a frame later. Measure again so the line stays on the cards.
    const frame = requestAnimationFrame(() => requestAnimationFrame(measure));
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [matchedKey, matched]);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(
    async (api) => {
      setFade(true);
      await api.wait(80);
      setSelected(null);
      setMatched([]);
      setLines([]);
      if (api.scroll()) api.scroll()!.scrollTop = 0;
      setFade(false);
      await api.wait(80);

      for (const id of pairs.map((pair) => pair.id)) {
        if (api.cancelled()) return;
        if (!(await arriveAndClick(api, `[data-d="L${id}"]`))) return;
        setSelected(id);
        await api.wait(40);
        if (api.cancelled()) return;
        if (!(await arriveAndClick(api, `[data-d="R${id}"]`))) return;
        setMatched((current) => (current.includes(id) ? current : [...current, id]));
        setSelected(null);
        await api.wait(50);
      }
      if (api.cancelled()) return;
      await api.wait(140);
    },
    [rest],
    { flow: true, rest, glideScale: howItWorksGlide(rest) },
  );

  return (
    <CourseFrame
      stageRef={stageRef}
      scrollRef={scrollRef}
      cursorRef={cursorRef}
      clicking={clicking}
      fade={fade}
      lockCopy={lockCopy}
      fill={false}
    >
      <div className="mb-2 flex items-end justify-between gap-2">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
            {copy.eyebrow}
          </p>
          <h3 className="font-display text-lg font-bold tracking-tight">{copy.title}</h3>
        </div>
        <span className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-semibold">
          {copy.round(matched.length, pairs.length)}
        </span>
      </div>
      <p className="mb-2 text-[11px] font-semibold text-muted-foreground">{topic}</p>
      <div className="mb-1.5 grid grid-cols-2 gap-x-8 sm:gap-x-14">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">{copy.concepts}</p>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">{copy.meanings}</p>
      </div>
      <div ref={boardRef} className="relative">
        <svg
          className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
          aria-hidden
        >
          {lines.map((line) => (
            <path
              key={line.id}
              d={line.d}
              fill="none"
              stroke={ACCENT}
              strokeWidth={2.5}
              strokeLinecap="round"
              opacity={0.85}
            />
          ))}
        </svg>
        <div className="relative z-0 grid grid-cols-2 items-stretch gap-x-8 gap-y-2 sm:gap-x-14">
          {pairs.map((pair, index) => (
            <MatchRow
              key={pair.id}
              left={pair}
              right={pairs[rightOrder[index]] ?? pair}
              selected={selected === pair.id}
              matched={matched}
            />
          ))}
        </div>
      </div>
      {matched.length === pairs.length ? (
        <p className="mt-3 text-center text-sm font-semibold text-emerald-800">{copy.complete}</p>
      ) : null}
    </CourseFrame>
  );
}

function MatchCard({
  side,
  pairId,
  text,
  selected,
  matched,
  marker,
}: {
  side: "left" | "right";
  pairId: number;
  text: string;
  selected: boolean;
  matched: boolean;
  marker: string;
}) {
  return (
    <div
      data-d={marker}
      data-match-side={side}
      data-match-id={pairId}
      className={cn(
        "flex h-full min-h-12 items-center gap-2 rounded-xl border px-2.5 py-2 text-left text-[12px] leading-snug sm:text-[13px]",
        matched
          ? "border-emerald-300 bg-emerald-50/90"
          : selected
            ? "border-transparent shadow-md"
            : "border-border bg-card",
        side === "left" && "font-semibold",
      )}
      style={
        selected && !matched
          ? { backgroundColor: `${ACCENT}14`, boxShadow: `0 0 0 2px ${ACCENT}` }
          : undefined
      }
    >
      <span
        className={cn(
          "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[10px]",
          matched
            ? "border-emerald-500 bg-emerald-500 text-white"
            : "border-border bg-background text-muted-foreground",
        )}
      >
        {matched ? <Check className="h-3 w-3" /> : "·"}
      </span>
      <FlashcardMath text={text} className="min-w-0 flex-1" />
    </div>
  );
}

function MatchRow({
  left,
  right,
  selected,
  matched,
}: {
  left: { id: number; term: string; explanation: string };
  right: { id: number; term: string; explanation: string };
  selected: boolean;
  matched: number[];
}) {
  return (
    <>
      <MatchCard
        side="left"
        pairId={left.id}
        text={left.term}
        selected={selected}
        matched={matched.includes(left.id)}
        marker={`L${left.id}`}
      />
      <MatchCard
        side="right"
        pairId={right.id}
        text={right.explanation}
        selected={false}
        matched={matched.includes(right.id)}
        marker={`R${right.id}`}
      />
    </>
  );
}

/** Study tools · Tutor Exam: two bank questions, correct picks, then the results card. */
export function CourseTutorDemo({
  questions = TUTOR_QUESTIONS,
  copy = EN_TUTOR,
  rest = 1,
  lockCopy = false,
}: {
  questions?: TutorQ[];
  copy?: DemoTutorCopy;
  rest?: number;
  lockCopy?: boolean;
} = {}) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(
    async (api) => {
      setFade(true);
      await api.wait(80);
      if (api.cancelled()) return;
      setFinished(false);
      setIndex(0);
      setPicked(null);
      setScore(0);
      if (api.scroll()) api.scroll()!.scrollTop = 0;
      setFade(false);
      await api.wait(80);

      for (let q = 0; q < questions.length; q++) {
        if (api.cancelled()) return;
        const question = questions[q];
        const last = q === questions.length - 1;
        if (!(await arriveAndClick(api, `[data-d="c${question.correct}"]`))) return;
        setPicked(question.correct);
        setScore(q + 1);
        await api.flush();
        await api.wait(50);
        if (api.cancelled()) return;
        if (!(await arriveAndClick(api, '[data-d="next"]'))) return;
        if (last) setFinished(true);
        else {
          setIndex(q + 1);
          setPicked(null);
        }
        await api.flush();
        if (!last) await api.wait(40);
      }
      if (api.cancelled()) return;
      await api.moveTo('[data-d="result"]', 60);
      await api.wait(160);
    },
    [rest],
    { flow: true, rest, glideScale: howItWorksGlide(rest) },
  );

  const question = questions[index] ?? questions[0];
  const mood = picked == null ? "idle" : "happy";
  const bubble =
    picked != null
      ? copy.correctLine
      : index === 0
        ? copy.greeting
        : question.mode === "define"
          ? copy.defineHint
          : copy.identifyHint;
  const pct = questions.length === 0 ? 0 : Math.round((score / questions.length) * 100);

  return (
    <CourseFrame
      stageRef={stageRef}
      scrollRef={scrollRef}
      cursorRef={cursorRef}
      clicking={clicking}
      fade={fade}
      lockCopy={lockCopy}
      fill={false}
    >
      <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
        {copy.eyebrow}
      </p>
      <h3 className="font-display text-lg font-bold tracking-tight">{copy.title}</h3>
      <div className="mb-2 mt-2 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
        <span className="rounded-full border border-border bg-card px-2 py-0.5 font-semibold text-foreground">
          {copy.exam}
        </span>
        <span>{copy.question(finished ? questions.length : index + 1, questions.length)}</span>
        <span>{copy.score(score, picked != null || finished ? ` · ${pct}%` : "")}</span>
      </div>
      {finished ? (
        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
          <div className="flex gap-3">
            <TutorFace mood="happy" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
                {copy.complete}
              </p>
              <div className="mt-1.5 rounded-2xl rounded-tl-md border border-border bg-secondary/50 px-3 py-2 text-sm">
                {copy.resultLine}
              </div>
            </div>
          </div>
          <div data-d="result" className="mx-auto mt-4 w-fit px-6 py-1 text-center">
            <p className="font-display text-3xl font-bold leading-none">
              {score}/{questions.length}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{copy.pct(pct)}</p>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="relative h-1.5 w-full bg-border/60">
            <div
              className="absolute inset-y-0 left-0 transition-all duration-300"
              style={{
                width: `${((index + 1) / questions.length) * 100}%`,
                backgroundColor: ACCENT,
              }}
            />
          </div>
          <div className="flex gap-3 border-b border-border p-3">
            <TutorFace mood={mood} />
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
                {copy.asking(index + 1)}
              </p>
              <div className="mt-1.5 rounded-2xl rounded-tl-md border border-border bg-secondary/50 px-3 py-2 text-sm leading-snug">
                {bubble}
              </div>
            </div>
          </div>
          <div className="space-y-2 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
              {question.prompt}
            </p>
            <div className="rounded-xl border border-dashed border-border bg-background/80 px-3 py-2">
              <FlashcardMath
                text={question.stem}
                className={cn(
                  "text-sm leading-snug",
                  question.mode === "define" && "font-semibold",
                )}
              />
            </div>
            <p className="text-[11px] text-muted-foreground">{question.sectionTitle}</p>
            <ul className="space-y-1.5">
              {question.choices.map((choice, choiceIndex) => {
                const letter = String.fromCharCode(65 + choiceIndex);
                const isCorrect = choiceIndex === question.correct;
                const showCorrect = picked != null && isCorrect;
                return (
                  <li key={choice}>
                    <div
                      data-d={`c${choiceIndex}`}
                      className={cn(
                        "flex min-h-11 items-center gap-2 rounded-xl border px-2.5 py-2 text-left text-[13px] leading-snug",
                        showCorrect
                          ? "border-emerald-300 bg-emerald-50/90"
                          : picked != null
                            ? "border-border bg-card opacity-60"
                            : "border-border bg-card",
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold",
                          showCorrect
                            ? "border-emerald-500 bg-emerald-500 text-white"
                            : "border-border bg-background text-muted-foreground",
                        )}
                      >
                        {showCorrect ? <Check className="h-3 w-3" /> : letter}
                      </span>
                      <FlashcardMath text={choice} className="min-w-0 flex-1" />
                    </div>
                  </li>
                );
              })}
            </ul>
            {picked != null ? (
              <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/70 px-3 py-2">
                <span
                  data-d="next"
                  className="inline-flex shrink-0 rounded-md px-4 py-2 text-xs font-semibold text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  {index + 1 >= questions.length ? copy.results : copy.next}
                </span>
                <p className="min-w-0 text-sm font-semibold">{question.revealTerm}</p>
              </div>
            ) : null}
          </div>
        </div>
      )}
      {/* Room to lift the next button above the zoom control on a short frame. */}
      <div className="h-8" aria-hidden />
    </CourseFrame>
  );
}
