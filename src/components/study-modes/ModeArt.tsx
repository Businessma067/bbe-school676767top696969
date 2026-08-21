import type { FlashcardSubjectId } from "@/data/flashcards";

const SUBJECT_BG: Record<FlashcardSubjectId, string> = {
  economics: "#f3e6d4",
  math: "#dceee6",
  english: "#d9e8f2",
};

type Pair = [string, string];

function MatchingPairs({
  pairs,
  accent,
}: {
  pairs: Pair[];
  accent: string;
}) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      {pairs.map(([left, right]) => (
        <div key={left} className="flex items-center gap-2">
          <span className="min-w-0 flex-1 truncate rounded-md border-[1.5px] border-foreground/30 bg-white px-2 py-1.5 text-center text-[11px] font-semibold text-foreground sm:text-xs">
            {left}
          </span>
          <span
            className="shrink-0 text-sm font-bold leading-none"
            style={{ color: accent }}
            aria-hidden
          >
            →
          </span>
          <span className="min-w-0 flex-1 truncate rounded-md border-[1.5px] border-foreground/30 bg-white px-2 py-1.5 text-center text-[11px] font-semibold text-foreground sm:text-xs">
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
        "flex h-full w-full flex-col justify-center gap-1.5 bg-[#f7ebdc] px-4 py-3 " +
        className
      }
    >
      <p className="text-[10px] font-semibold uppercase tracking-widest text-caramel-deep">
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

function TutorRobot({ accent }: { accent: string }) {
  return (
    <div className="flex shrink-0 flex-col items-center" aria-hidden>
      <span
        className="mb-0.5 h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: accent }}
      />
      <span className="mb-0.5 h-2 w-px bg-foreground/80" />
      <div className="flex h-12 w-12 flex-col items-center justify-center rounded-xl border-[1.5px] border-foreground/35 bg-white">
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
        </div>
        <span className="mt-1.5 block h-0 w-3 border-b-2 border-foreground" />
      </div>
      <div className="mt-1 flex h-9 w-10 items-center justify-center rounded-lg border-[1.5px] border-foreground/35 bg-white">
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
        "flex h-full w-full items-center gap-3 bg-[#e8f0ec] px-4 py-3 " +
        className
      }
    >
      <TutorRobot accent={accent} />
      <div className="relative min-w-0 flex-1 rounded-xl border-[1.5px] border-foreground/30 bg-white px-3 py-2">
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
        <p className="mt-1 text-[10px] font-medium text-muted-foreground">
          Economics · Math · English
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
    <div
      className="relative flex aspect-video w-full flex-col justify-center gap-2 px-5 py-5"
      style={{ backgroundColor: SUBJECT_BG[subject] }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-widest text-foreground/60">
        Matching · {subject}
      </p>
      <MatchingPairs
        accent={accent}
        pairs={[
          ["Concept A", "Meaning 1"],
          ["Concept B", "Meaning 2"],
          ["Concept C", "Meaning 3"],
        ]}
      />
    </div>
  );
}

/** Subject-picker hero for Tutor Exam. */
export function TutorSubjectArt({
  subject,
  accent,
}: {
  subject: FlashcardSubjectId;
  accent: string;
}) {
  return (
    <div
      className="relative flex aspect-video w-full items-center gap-4 px-5 py-4"
      style={{ backgroundColor: SUBJECT_BG[subject] }}
    >
      <TutorRobot accent={accent} />
      <div className="relative min-w-0 flex-1 rounded-xl border-[1.5px] border-foreground/30 bg-white px-3.5 py-3">
        <span
          className="absolute -left-1.5 top-6 h-3 w-3 rotate-45 border-b border-l border-foreground/30 bg-white"
          aria-hidden
        />
        <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
          Tutor Exam · {subject}
        </p>
        <p className="mt-1 font-display text-base font-bold leading-snug text-foreground">
          What does this mean?
        </p>
        <div className="mt-2 space-y-1.5">
          {["A  Definition one", "B  Definition two", "C  Definition three"].map(
            (opt, i) => (
              <div
                key={opt}
                className={
                  "rounded-md border-[1.5px] px-2.5 py-1 text-[11px] font-semibold " +
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
  );
}
