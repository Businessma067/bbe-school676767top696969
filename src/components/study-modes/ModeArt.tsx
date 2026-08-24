import type { ReactNode } from "react";
import type { FlashcardSubjectId } from "@/data/flashcards";

const SUBJECT_BG: Record<FlashcardSubjectId, string> = {
  economics: "#f3e6d4",
  math: "#dceee6",
  english: "#d9e8f2",
};

const SUBJECT_LABEL: Record<FlashcardSubjectId, string> = {
  economics: "Economics",
  math: "Math",
  english: "English",
};

/** Shared subject-picker frame: fixed aspect, reserved tag strip, centered art. */
function SubjectPreviewShell({
  subject,
  tag,
  accent,
  children,
}: {
  subject: FlashcardSubjectId;
  tag: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <div
      className="relative aspect-video w-full overflow-hidden"
      style={{ backgroundColor: SUBJECT_BG[subject] }}
    >
      <div className="absolute inset-x-0 top-0 bottom-11 flex items-center justify-center px-5 pt-1">
        {children}
      </div>
      <span
        className="pointer-events-none absolute bottom-3 left-4 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest shadow-sm ring-1 ring-foreground/10"
        style={{ color: accent }}
      >
        {tag}
      </span>
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
}: {
  subject: FlashcardSubjectId;
  label: string;
}) {
  return (
    <div className="flex h-[4.75rem] w-[3.5rem] flex-col items-center justify-center rounded-lg border-[1.5px] border-foreground/35 bg-white sm:h-[5.25rem] sm:w-[3.85rem]">
      <SubjectGlyph subject={subject} className="h-6 w-6 text-foreground" />
      <span className="mt-1.5 text-[8px] font-semibold uppercase tracking-wider text-taupe">
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
        <MiniCard subject="economics" label="Econ" />
        <MiniCard subject="math" label="Math" />
        <MiniCard subject="english" label="Eng" />
      </div>
    </div>
  );
}

/** Subject-picker hero for Flashcards. */
export function FlashcardsSubjectArt({
  subject,
  accent,
  tag,
}: {
  subject: FlashcardSubjectId;
  accent: string;
  tag: string;
}) {
  return (
    <SubjectPreviewShell subject={subject} tag={tag} accent={accent}>
      <div className="flex h-[8.5rem] w-[6.75rem] flex-col items-center justify-center gap-2 rounded-2xl border-[1.5px] border-foreground/35 bg-white px-3 py-4 sm:h-[9rem] sm:w-[7.25rem]">
        <SubjectGlyph subject={subject} className="h-9 w-9 shrink-0 text-foreground" />
        <p className="font-display text-sm font-bold leading-tight text-foreground">
          {SUBJECT_LABEL[subject]}
        </p>
        <span
          className="h-1 w-8 shrink-0 rounded-full"
          style={{ backgroundColor: accent }}
        />
      </div>
    </SubjectPreviewShell>
  );
}

type Pair = [string, string];

function MatchingPairs({
  pairs,
  accent,
}: {
  pairs: Pair[];
  accent: string;
}) {
  return (
    <div className="flex w-full max-w-[17rem] flex-col gap-1.5">
      {pairs.map(([left, right]) => (
        <div key={left} className="grid grid-cols-[1fr_auto_1fr] items-center gap-1.5">
          <span className="truncate rounded-md border-[1.5px] border-foreground/30 bg-white px-2 py-1.5 text-center text-[10px] font-semibold text-foreground sm:text-[11px]">
            {left}
          </span>
          <span
            className="text-center text-xs font-bold leading-none"
            style={{ color: accent }}
            aria-hidden
          >
            →
          </span>
          <span className="truncate rounded-md border-[1.5px] border-foreground/30 bg-white px-2 py-1.5 text-center text-[10px] font-semibold text-foreground sm:text-[11px]">
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
          ["Word", "Sense"],
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
  const head = compact ? "h-10 w-10" : "h-12 w-12";
  const body = compact ? "h-8 w-9" : "h-9 w-10";

  return (
    <div className="flex shrink-0 flex-col items-center" aria-hidden>
      <span
        className="mb-0.5 h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: accent }}
      />
      <span className="mb-0.5 h-2 w-px bg-foreground/80" />
      <div
        className={
          "flex flex-col items-center justify-center rounded-xl border-[1.5px] border-foreground/35 bg-white " +
          head
        }
      >
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
        </div>
        <span className="mt-1 block h-0 w-3 border-b-2 border-foreground" />
      </div>
      <div
        className={
          "mt-1 flex items-center justify-center rounded-lg border-[1.5px] border-foreground/35 bg-white " +
          body
        }
      >
        <span
          className="h-2.5 w-2.5 rounded-full"
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
  tag,
}: {
  subject: FlashcardSubjectId;
  accent: string;
  tag: string;
}) {
  return (
    <SubjectPreviewShell subject={subject} tag={tag} accent={accent}>
      <MatchingPairs
        accent={accent}
        pairs={[
          ["Concept A", "Meaning 1"],
          ["Concept B", "Meaning 2"],
          ["Concept C", "Meaning 3"],
        ]}
      />
    </SubjectPreviewShell>
  );
}

/** Subject-picker hero for Tutor Exam. */
export function TutorSubjectArt({
  subject,
  accent,
  tag,
}: {
  subject: FlashcardSubjectId;
  accent: string;
  tag: string;
}) {
  return (
    <SubjectPreviewShell subject={subject} tag={tag} accent={accent}>
      <div className="flex w-full max-w-[15rem] flex-col items-center gap-2">
        <TutorRobot accent={accent} compact />
        <div className="w-full rounded-xl border-[1.5px] border-foreground/30 bg-white px-3 py-2.5 text-center">
          <p className="font-display text-xs font-bold leading-snug text-foreground sm:text-sm">
            What does this mean?
          </p>
          <div className="mt-2 space-y-1">
            {["A  Definition one", "B  Definition two", "C  Definition three"].map(
              (opt, i) => (
                <div
                  key={opt}
                  className={
                    "truncate rounded-md border-[1.5px] px-2 py-0.5 text-[10px] font-semibold " +
                    (i === 1
                      ? "border-transparent text-white"
                      : "border-foreground/25 bg-white text-foreground")
                  }
                  style={i === 1 ? { backgroundColor: accent } : undefined}
                >
                  {opt}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </SubjectPreviewShell>
  );
}
