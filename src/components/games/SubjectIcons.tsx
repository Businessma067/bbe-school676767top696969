import type { FlashcardSubjectId } from "@/data/flashcards";

/** Crisp line icons matching the Games / flashcard subject art. */
export function SubjectIcon({
  subject,
  className = "h-10 w-10",
}: {
  subject: FlashcardSubjectId;
  className?: string;
}) {
  if (subject === "economics") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
        <path
          d="M8 36V28M16 36V22M24 36V18M32 36V12"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M8 26l10-8 8 4 12-12"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34 10h6v6"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (subject === "math") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
        <path
          d="M8 20h5l7 20 5-32h15"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 30c1.8-2.6 4.2-4 6.8-4 2.8 0 4.7 1.7 4.7 4.2 0 3.6-3.4 5.8-7.5 9.2"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M32 40h11"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M24 14v22"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M24 14c-3.2-2-7.2-2.8-11-2.8-2.2 0-4 .3-5.5.8v22.2c1.6-.6 3.5-1 5.5-1 3.8 0 7.8.8 11 2.8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 14c3.2-2 7.2-2.8 11-2.8 2.2 0 4 .3 5.5.8v22.2c-1.6-.6-3.5-1-5.5-1-3.8 0-7.8.8-11 2.8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const SUBJECT_PREVIEW_BG: Record<FlashcardSubjectId, string> = {
  economics: "#f3e6d4",
  math: "#dceee6",
  english: "#d9e8f2",
};
