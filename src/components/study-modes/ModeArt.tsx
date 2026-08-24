import type { ReactNode } from "react";
import type { FlashcardSubjectId } from "@/data/flashcards";

const SUBJECT_BG: Record<FlashcardSubjectId, string> = {
  economics: "#f3e6d4",
  math: "#dceee6",
  english: "#d9e8f2",
};

type Pair = [string, string];

const FLASHCARD_PREVIEW: Record<FlashcardSubjectId, string> = {
  economics: "Opportunity cost",
  math: "Quadratic formula",
  english: "Ubiquitous",
};

const MATCHING_PAIRS: Record<FlashcardSubjectId, Pair[]> = {
  economics: [
    ["Supply", "Qty offered"],
    ["Demand", "Qty bought"],
  ],
  math: [
    ["f(x)", "Function"],
    ["x²", "Quadratic"],
  ],
  english: [
    ["Ubiquitous", "Everywhere"],
    ["Ephemeral", "Brief"],
  ],
};

const TUTOR_PREVIEW: Record<
  FlashcardSubjectId,
  { question: string; options: [string, string]; correct: 0 | 1 }
> = {
  economics: {
    question: "Opportunity cost?",
    options: ["Next best alternative", "Total revenue"],
    correct: 0,
  },
  math: {
    question: "∫ f(x) dx means?",
    options: ["Area under curve", "Derivative"],
    correct: 0,
  },
  english: {
    question: "Synonym: abundant?",
    options: ["Plentiful", "Scarce"],
    correct: 0,
  },
};

/** Shared subject-picker frame: fixed aspect, centered art with safe padding. */
function SubjectPreviewShell({
  subject,
  children,
}: {
  subject: FlashcardSubjectId;
  children: ReactNode;
}) {
  return (
    <div
      className="relative aspect-video w-full overflow-hidden"
      style={{ backgroundColor: SUBJECT_BG[subject] }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
        {children}
      </div>
    </div>
  );
}

function SubjectGlyph({
  subject,
  className = "h-7 w-7",
}: {
  subject: FlashcardSubjectId;
  className?: string;
}) {
  if (subject === "economics") {
    return (
      <svg viewBox="0 0 32 32" className={className} aria-hidden fill="none">
        <path
          d="M6 24V18M12 24V14M18 24V12M24 24V8"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M6 16l7-5 5 2.5 8-7.5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (subject === "math") {
    return (
      <svg viewBox="0 0 32 32" className={className} aria-hidden fill="none">
        <path
          d="M5 12h4l5 14 4-22h9"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 18l4 4M24 18l-4 4"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden fill="none">
      <path
        d="M16 9v15"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M16 9c-2.2-1.4-5-2-7.8-2-1.5 0-2.8.2-3.8.5v14.8c1.1-.4 2.4-.6 3.8-.6 2.8 0 5.6.6 7.8 2"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 9c2.2-1.4 5-2 7.8-2 1.5 0 2.8.2 3.8.5v14.8c-1.1-.4-2.4-.6-3.8-.6-2.8 0-5.6.6-7.8 2"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MiniCard({
  subject,
  label,
  sample,
}: {
  subject: FlashcardSubjectId;
  label: string;
  sample: string;
}) {
  return (
    <div className="flex h-[4.75rem] w-[3.5rem] flex-col items-center justify-center rounded-lg border-[1.5px] border-foreground/35 bg-white px-1 py-2 sm:h-[5.25rem] sm:w-[3.85rem]">
      <SubjectGlyph subject={subject} className="h-5 w-5 shrink-0 text-foreground" />
      <span className="mt-1.5 line-clamp-2 w-full px-0.5 text-center text-[7px] font-semibold leading-tight text-foreground">
        {sample}
      </span>
      <span className="mt-1 w-full text-center text-[7px] font-semibold uppercase tracking-wider text-taupe">
        {label}
      </span>
    </div>
  );
}

/** Dashboard / tile banner for Flashcards. */
export function FlashcardsModeArt({ className = "" }: { className?: string }) {
  return (
    <div
      className={
        "box-border flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden bg-[#f7ebdc] px-4 py-2 " +
        className
      }
    >
      <p className="shrink-0 text-center text-[10px] font-semibold uppercase leading-none tracking-widest text-caramel-deep">
        Tap to flip
      </p>
      <div className="flex shrink-0 items-center justify-center gap-2 sm:gap-2.5">
        <MiniCard subject="economics" label="Econ" sample="Supply" />
        <MiniCard subject="math" label="Math" sample="f(x)" />
        <MiniCard subject="english" label="Eng" sample="Synonym" />
      </div>
    </div>
  );
}

/** Subject-picker hero for Flashcards. */
export function FlashcardsSubjectArt({
  subject,
  accent,
}: {
  subject: FlashcardSubjectId;
  accent: string;
}) {
  return (
    <SubjectPreviewShell subject={subject}>
      <div className="flex w-[6.5rem] flex-col items-center justify-center rounded-2xl border-[1.5px] border-foreground/35 bg-white px-3 py-4 sm:w-[7rem]">
        <SubjectGlyph subject={subject} className="h-9 w-9 shrink-0 text-foreground" />
        <p className="mt-3 line-clamp-2 w-full text-center font-display text-sm font-bold leading-snug text-foreground">
          {FLASHCARD_PREVIEW[subject]}
        </p>
        <span
          className="mt-3 h-1 w-12 shrink-0 rounded-full"
          style={{ backgroundColor: accent }}
        />
      </div>
    </SubjectPreviewShell>
  );
}

function MatchingPairs({
  pairs,
  accent,
}: {
  pairs: Pair[];
  accent: string;
}) {
  return (
    <div className="flex w-full max-w-[15rem] flex-col gap-1.5">
      {pairs.map(([left, right]) => (
        <div key={left} className="grid grid-cols-[1fr_auto_1fr] items-center gap-1.5">
          <span className="truncate rounded-md border-[1.5px] border-foreground/30 bg-white px-2 py-1 text-center text-[10px] font-semibold leading-none text-foreground sm:text-[11px]">
            {left}
          </span>
          <span
            className="text-center text-xs font-bold leading-none"
            style={{ color: accent }}
            aria-hidden
          >
            →
          </span>
          <span className="truncate rounded-md border-[1.5px] border-foreground/30 bg-white px-2 py-1 text-center text-[10px] font-semibold leading-none text-foreground sm:text-[11px]">
            {right}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Dashboard / tile banner for Matching. */
export function MatchingModeArt({
  accent = "#c8763a",
  className = "",
}: {
  accent?: string;
  className?: string;
}) {
  return (
    <div
      className={
        "flex h-full w-full flex-col items-center justify-center gap-2 bg-[#f7ebdc] px-4 py-3 " +
        className
      }
    >
      <p className="text-[10px] font-semibold uppercase leading-none tracking-widest text-caramel-deep">
        Concept ↔ Meaning
      </p>
      <MatchingPairs
        accent={accent}
        pairs={[
          ["Term", "Definition"],
          ["Formula", "Meaning"],
        ]}
      />
    </div>
  );
}

function TutorRobot({
  accent,
  compact = false,
}: {
  accent: string;
  compact?: boolean;
}) {
  const head = compact ? "h-9 w-9" : "h-12 w-12";
  const body = compact ? "h-7 w-8" : "h-9 w-10";

  return (
    <div className="flex shrink-0 flex-col items-center" aria-hidden>
      <span
        className="mb-0.5 h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: accent }}
      />
      <span className="mb-0.5 h-1.5 w-px bg-foreground/80" />
      <div
        className={
          "flex flex-col items-center justify-center rounded-xl border-[1.5px] border-foreground/35 bg-white " +
          head
        }
      >
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
        </div>
        <span className="mt-0.5 block h-0 w-2.5 border-b-2 border-foreground" />
      </div>
      <div
        className={
          "mt-0.5 flex items-center justify-center rounded-lg border-[1.5px] border-foreground/35 bg-white " +
          body
        }
      >
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: accent }}
        />
      </div>
    </div>
  );
}

/** Dashboard / tile banner for Tutor Exam. */
export function TutorModeArt({
  accent = "#c8763a",
  className = "",
}: {
  accent?: string;
  className?: string;
}) {
  return (
    <div
      className={
        "flex h-full w-full items-center justify-center gap-3 bg-[#e8f0ec] px-4 py-3 " +
        className
      }
    >
      <TutorRobot accent={accent} />
      <div className="relative min-w-0 max-w-[11rem] flex-1 rounded-xl border-[1.5px] border-foreground/30 bg-white px-3 py-2">
        <span
          className="absolute -left-1.5 top-5 h-3 w-3 rotate-45 border-b border-l border-foreground/30 bg-white"
          aria-hidden
        />
        <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
          Tutor Bot
        </p>
        <p className="mt-0.5 font-display text-sm font-bold leading-snug text-foreground">
          Ready for a theory exam?
        </p>
        <span
          className="mt-2 inline-flex rounded-md px-2.5 py-1 text-[10px] font-semibold text-white"
          style={{ backgroundColor: accent }}
        >
          Start exam
        </span>
      </div>
    </div>
  );
}

/** Subject-picker hero for Matching. */
export function MatchingSubjectArt({
  subject,
  accent,
}: {
  subject: FlashcardSubjectId;
  accent: string;
}) {
  return (
    <SubjectPreviewShell subject={subject}>
      <MatchingPairs accent={accent} pairs={MATCHING_PAIRS[subject]} />
    </SubjectPreviewShell>
  );
}

/** Subject-picker hero for Tutor Exam — horizontal layout so nothing clips. */
export function TutorSubjectArt({
  subject,
  accent,
}: {
  subject: FlashcardSubjectId;
  accent: string;
}) {
  const preview = TUTOR_PREVIEW[subject];

  return (
    <SubjectPreviewShell subject={subject}>
      <div className="flex w-full max-w-[16rem] items-center gap-2.5">
        <TutorRobot accent={accent} compact />
        <div className="relative min-w-0 flex-1 rounded-xl border-[1.5px] border-foreground/30 bg-white px-2.5 py-2">
          <span
            className="absolute -left-1 top-4 h-2.5 w-2.5 rotate-45 border-b border-l border-foreground/30 bg-white"
            aria-hidden
          />
          <p className="font-display text-[11px] font-bold leading-snug text-foreground sm:text-xs">
            {preview.question}
          </p>
          <div className="mt-1.5 space-y-1">
            {preview.options.map((opt, i) => (
              <div
                key={opt}
                className={
                  "truncate rounded-md border-[1.5px] px-2 py-0.5 text-[9px] font-semibold leading-tight sm:text-[10px] " +
                  (i === preview.correct
                    ? "border-transparent text-white"
                    : "border-foreground/25 bg-white text-foreground")
                }
                style={i === preview.correct ? { backgroundColor: accent } : undefined}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubjectPreviewShell>
  );
}
