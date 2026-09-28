import { useLayoutEffect, useRef, useState } from "react";
import { Check, Layers, ThumbsDown, ThumbsUp } from "lucide-react";
import { FlashcardMath } from "@/components/FlashcardMath";
import { countCards, ECONOMICS_FLASHCARD_SECTIONS } from "@/data/flashcards";
import { TUTOR_CORRECT, TUTOR_GREETINGS } from "@/lib/tutor-exam";
import { cn } from "@/lib/utils";
import { useDemoPlayer, type DemoPlayerApi } from "@/components/news/demos/useDemoPlayer";
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

type Side = "left" | "right" | null;

const MATCH_TERMS = ["Labour", "Land", "Entrepreneurship", "Factors of production"] as const;

function pairByTerm(term: string) {
  const card = TYPES.cards.find((item) => item.term === term);
  if (!card) throw new Error(`Missing flashcard: ${term}`);
  return card;
}

const MATCH_PAIRS = MATCH_TERMS.map((term, id) => ({ id, ...pairByTerm(term) }));
/** Right column is a fixed shuffle of the same four bank cards. */
const MATCH_RIGHT = [1, 3, 2, 0];

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
  tutorDefine("Labour", ["Land", "Capital (factor of production)", "Labour", "Entrepreneurship"]),
  tutorIdentify("Land", ["Labour", "Capital (factor of production)", "Land", "Entrepreneurship"]),
];

const GREETING = TUTOR_GREETINGS[1];
const CORRECT_LINE = TUTOR_CORRECT[0];

async function swipeCard(
  api: DemoPlayerApi,
  dir: "left" | "right",
  setExit: (value: Side) => void,
  setEnter: (value: Side) => void,
  swap: () => void,
) {
  setExit(dir);
  setEnter(null);
  await api.wait(270);
  swap();
  setExit(null);
  setEnter(dir === "right" ? "left" : "right");
  await api.flush();
  await api.wait(340);
  setEnter(null);
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
    <div className={cn("rounded-xl border px-2 py-1.5 text-center shadow-sm", cls)}>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
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
        <rect x="5" y="9" width="22" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="16" r="1.6" fill="currentColor" />
        <circle cx="20" cy="16" r="1.6" fill="currentColor" />
        {mood === "happy" ? (
          <path d="M12.5 21.5c1.2 1.4 5.8 1.4 7 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        ) : mood === "sad" ? (
          <path d="M12.5 22.5c1.2-1.2 5.8-1.2 7 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        ) : (
          <path d="M13 21.5h6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        )}
        <circle cx="16" cy="5.5" r="1.4" fill="currentColor" opacity="0.75" />
        <line x1="16" y1="7" x2="16" y2="9" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    </div>
  );
}

/** Study tools · Flashcards: the opening economics cards, flip, then Know / Don't know. */
export function CourseFlashDemo() {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [exitDir, setExitDir] = useState<Side>(null);
  const [enterFrom, setEnterFrom] = useState<Side>(null);
  const [known, setKnown] = useState(0);
  const [unknown, setUnknown] = useState(0);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(160);
    setIdx(0);
    setFlipped(false);
    setExitDir(null);
    setEnterFrom(null);
    setKnown(0);
    setUnknown(0);
    if (api.scroll()) api.scroll()!.scrollTop = 0;
    setFade(false);
    await api.wait(280);

    await api.moveTo('[data-d="term"]', 200);
    await api.click(() => setFlipped(true));
    await api.wait(540);

    await api.moveTo('[data-d="dont"]', 160);
    await api.click(() => setUnknown(1));
    await swipeCard(api, "left", setExitDir, setEnterFrom, () => {
      setIdx(1);
      setFlipped(false);
    });

    await api.moveTo('[data-d="flip"]', 160);
    await api.click(() => setFlipped(true));
    await api.wait(540);

    await api.moveTo('[data-d="know"]', 160);
    await api.click(() => setKnown(1));
    await swipeCard(api, "right", setExitDir, setEnterFrom, () => {
      setIdx(2);
      setFlipped(false);
    });
    await api.wait(640);
  }, []);

  const card = FLASH_CARDS[idx] ?? FLASH_CARDS[0];
  const fresh = DECK_TOTAL - known - unknown;
  const transform = exitDir
    ? `translateX(${exitDir === "right" ? "118%" : "-118%"}) rotate(${exitDir === "right" ? 16 : -16}deg)`
    : undefined;

  return (
    <CourseFrame stageRef={stageRef} scrollRef={scrollRef} cursorRef={cursorRef} clicking={clicking} fade={fade}>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">Study tools · Economics</p>
      <h3 className="font-display text-lg font-bold tracking-tight">Flashcards</h3>
      <div className="mt-2 grid grid-cols-3 gap-2">
        <StatChip label="Known" value={known} tone="known" />
        <StatChip label="Don't know" value={unknown} tone="unknown" />
        <StatChip label="New" value={fresh} tone="new" />
      </div>
      <p className="mb-2 mt-3 text-center text-[11px] font-semibold text-muted-foreground">{CORE.title}</p>
      <div className="hiw-study-flash flashcard-viewport relative overflow-x-clip py-1">
        <div
          data-d="card"
          className={cn(
            "flashcard-stage relative w-full",
            exitDir
              ? "flashcard-exiting"
              : enterFrom === "left"
                ? "flashcard-entering-left"
                : enterFrom === "right"
                  ? "flashcard-entering-right"
                  : "",
          )}
          style={transform ? { transform } : undefined}
        >
          <div className="flashcard-flip w-full">
            <div className={cn("flashcard-inner", flipped && "is-flipped")}>
              <div className="flashcard-face flashcard-front rounded-2xl border border-border bg-card p-4 shadow-sm">
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <Layers className="h-3 w-3" />
                  Term
                </div>
                <div data-d="term" className="flex h-full items-center justify-center px-3 text-center">
                  <FlashcardMath text={card.term} className="font-display text-xl font-bold tracking-tight sm:text-2xl" />
                </div>
              </div>
              <div className="flashcard-face flashcard-back rounded-2xl border border-border bg-card p-4 shadow-sm">
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <Layers className="h-3 w-3" />
                  Explanation
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
          Don't know
        </span>
        <span
          data-d="flip"
          className="rounded-md px-4 py-2 text-xs font-semibold text-white shadow-sm"
          style={{ backgroundColor: ACCENT }}
        >
          Flip
        </span>
        <span
          data-d="know"
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-700"
        >
          <ThumbsUp className="h-3.5 w-3.5" />
          Know
        </span>
      </div>
    </CourseFrame>
  );
}

function curve(x1: number, y1: number, x2: number, y2: number) {
  const mid = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}`;
}

/** Study tools · Matching: four real economics pairs, locked in with a line. */
export function CourseMatchDemo() {
  const boardRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [lines, setLines] = useState<{ id: number; d: string }[]>([]);
  const matchedKey = matched.join("|");

  useLayoutEffect(() => {
    const board = boardRef.current;
    if (!board) return;
    const box = board.getBoundingClientRect();
    const next: { id: number; d: string }[] = [];
    for (const id of matched) {
      const left = board.querySelector<HTMLElement>(`[data-match-side="left"][data-match-id="${id}"]`);
      const right = board.querySelector<HTMLElement>(`[data-match-side="right"][data-match-id="${id}"]`);
      if (!left || !right) continue;
      const a = left.getBoundingClientRect();
      const b = right.getBoundingClientRect();
      next.push({
        id,
        d: curve(a.right - box.left, a.top + a.height / 2 - box.top, b.left - box.left, b.top + b.height / 2 - box.top),
      });
    }
    setLines(next);
  }, [matchedKey, matched]);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(160);
    setSelected(null);
    setMatched([]);
    setLines([]);
    if (api.scroll()) api.scroll()!.scrollTop = 0;
    setFade(false);
    await api.wait(280);

    for (const id of MATCH_PAIRS.map((pair) => pair.id)) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="L${id}"]`, 170);
      await api.click(() => setSelected(id));
      await api.wait(120);
      const right = MATCH_RIGHT.indexOf(id);
      await api.moveTo(`[data-d="R${right}"]`, 150);
      await api.click(() => {
        setMatched((current) => (current.includes(id) ? current : [...current, id]));
        setSelected(null);
      });
      await api.wait(200);
    }
    await api.wait(700);
  }, []);

  return (
    <CourseFrame stageRef={stageRef} scrollRef={scrollRef} cursorRef={cursorRef} clicking={clicking} fade={fade}>
      <div className="mb-2 flex items-end justify-between gap-2">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">Study tools · Economics</p>
          <h3 className="font-display text-lg font-bold tracking-tight">Connect concept → meaning</h3>
        </div>
        <span className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-semibold">
          Round 1 · {matched.length}/{MATCH_PAIRS.length}
        </span>
      </div>
      <p className="mb-2 text-[11px] font-semibold text-muted-foreground">{TYPES.title}</p>
      <div ref={boardRef} className="relative">
        <svg className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible" aria-hidden>
          {lines.map((line) => (
            <path key={line.id} d={line.d} fill="none" stroke={ACCENT} strokeWidth={2.5} strokeLinecap="round" opacity={0.85} />
          ))}
        </svg>
        <div className="relative z-0 grid grid-cols-2 items-start gap-x-8 gap-y-2 sm:gap-x-14">
          <div>
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-taupe">Concepts</p>
            <ul className="space-y-2">
              {MATCH_PAIRS.map((pair) => (
                <MatchCard
                  key={`L${pair.id}`}
                  side="left"
                  pairId={pair.id}
                  text={pair.term}
                  selected={selected === pair.id}
                  matched={matched.includes(pair.id)}
                  marker={`L${pair.id}`}
                />
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-taupe">Meanings</p>
            <ul className="space-y-2">
              {MATCH_RIGHT.map((id, index) => {
                const pair = MATCH_PAIRS[id];
                return (
                  <MatchCard
                    key={`R${index}`}
                    side="right"
                    pairId={id}
                    text={pair.explanation}
                    selected={false}
                    matched={matched.includes(id)}
                    marker={`R${index}`}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {matched.length === MATCH_PAIRS.length ? (
        <p className="mt-3 text-center text-sm font-semibold text-emerald-800">Round complete · 4/4</p>
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
    <li>
      <div
        data-d={marker}
        data-match-side={side}
        data-match-id={pairId}
        className={cn(
          "flex h-12 items-center gap-2 rounded-xl border px-2.5 text-left text-[12px] leading-snug sm:text-[13px]",
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
            "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[10px]",
            matched ? "border-emerald-500 bg-emerald-500 text-white" : "border-border bg-background text-muted-foreground",
          )}
        >
          {matched ? <Check className="h-3 w-3" /> : "·"}
        </span>
        <FlashcardMath text={text} className="line-clamp-2 min-w-0 flex-1" />
      </div>
    </li>
  );
}

/** Study tools · Tutor Exam: two bank questions, correct picks, then the results card. */
export function CourseTutorDemo() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(160);
    setIndex(0);
    setPicked(null);
    setScore(0);
    setFinished(false);
    if (api.scroll()) api.scroll()!.scrollTop = 0;
    setFade(false);
    await api.wait(280);

    await api.moveTo(`[data-d="c${TUTOR_QUESTIONS[0].correct}"]`, 180);
    await api.click(() => {
      setPicked(TUTOR_QUESTIONS[0].correct);
      setScore(1);
    });
    await api.wait(420);
    await api.moveTo('[data-d="next"]', 150);
    await api.click(() => {
      setIndex(1);
      setPicked(null);
    });
    await api.wait(180);

    await api.moveTo(`[data-d="c${TUTOR_QUESTIONS[1].correct}"]`, 180);
    await api.click(() => {
      setPicked(TUTOR_QUESTIONS[1].correct);
      setScore(2);
    });
    await api.wait(420);
    await api.moveTo('[data-d="next"]', 150);
    await api.click();
    setFinished(true);
    await api.flush();
    await api.moveTo('[data-d="result"]', 80);
    await api.wait(700);
  }, []);

  const question = TUTOR_QUESTIONS[index] ?? TUTOR_QUESTIONS[0];
  const mood = picked == null ? "idle" : "happy";
  const bubble =
    picked != null
      ? CORRECT_LINE
      : index === 0
        ? GREETING
        : question.mode === "define"
          ? "Define the concept. Pick the best meaning."
          : "Read the meaning. Pick the matching concept.";
  const pct = TUTOR_QUESTIONS.length === 0 ? 0 : Math.round((score / TUTOR_QUESTIONS.length) * 100);

  return (
    <CourseFrame stageRef={stageRef} scrollRef={scrollRef} cursorRef={cursorRef} clicking={clicking} fade={fade}>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">Study tools · Economics</p>
      <h3 className="font-display text-lg font-bold tracking-tight">Theory exam with Tutor Bot</h3>
      <div className="mb-2 mt-2 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
        <span className="rounded-full border border-border bg-card px-2 py-0.5 font-semibold text-foreground">Exam 1</span>
        <span>
          Question {finished ? TUTOR_QUESTIONS.length : index + 1} / {TUTOR_QUESTIONS.length}
        </span>
        <span>
          Score {score}
          {picked != null || finished ? ` · ${pct}%` : ""}
        </span>
      </div>
      {finished ? (
        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
          <div className="flex gap-3">
            <TutorFace mood="happy" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">Tutor Bot · Exam complete</p>
              <div className="mt-1.5 rounded-2xl rounded-tl-md border border-border bg-secondary/50 px-3 py-2 text-sm">
                Strong theory pass. Want another random set?
              </div>
            </div>
          </div>
          <p data-d="result" className="mt-4 text-center font-display text-3xl font-bold">
            {score}/{TUTOR_QUESTIONS.length}
          </p>
          <p className="text-center text-sm text-muted-foreground">{pct}% correct</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="relative h-1.5 w-full bg-border/60">
            <div
              className="absolute inset-y-0 left-0 transition-all duration-300"
              style={{ width: `${((index + 1) / TUTOR_QUESTIONS.length) * 100}%`, backgroundColor: ACCENT }}
            />
          </div>
          <div className="flex gap-3 border-b border-border p-3">
            <TutorFace mood={mood} />
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">Tutor Bot · Q{index + 1}</p>
              <div className="mt-1.5 rounded-2xl rounded-tl-md border border-border bg-secondary/50 px-3 py-2 text-sm leading-snug">
                {bubble}
              </div>
            </div>
          </div>
          <div className="space-y-2 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">{question.prompt}</p>
            <div className="rounded-xl border border-dashed border-border bg-background/80 px-3 py-2">
              <FlashcardMath
                text={question.stem}
                className={cn("text-sm leading-snug", question.mode === "define" && "font-semibold")}
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
                      <FlashcardMath text={choice} className="line-clamp-2 min-w-0 flex-1" />
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center justify-between gap-2 pt-1">
              <p className="min-h-4 text-[12px] font-semibold text-foreground">
                {picked != null ? question.revealTerm : "\u00a0"}
              </p>
              <span
                data-d="next"
                className={cn(
                  "inline-flex shrink-0 rounded-md px-3 py-1.5 text-xs font-semibold text-white",
                  picked == null && "opacity-40",
                )}
                style={{ backgroundColor: ACCENT }}
              >
                {index + 1 >= TUTOR_QUESTIONS.length ? "See results →" : "Next question →"}
              </span>
            </div>
          </div>
        </div>
      )}
    </CourseFrame>
  );
}
