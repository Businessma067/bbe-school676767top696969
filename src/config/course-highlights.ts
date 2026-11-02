/**
 * Marketing totals for BBE / WiSo course highlight sections.
 * Counts are derived from the Full Course practice banks and flashcard decks
 * (unique exam-format cases and flashcard cards that also power matching + tutor exam).
 */

export type CourseHighlightTrack = "bbe" | "wiso";

export type CourseHighlightSubject = "economics" | "math" | "english" | "german";

export const BBE_COURSE_COUNTS = {
  /** Unique practice cases across Economics, Math, and English. */
  practiceQuestions: 3512,
  /** Curated full-length BBE mocks (mock-1 … mock-6). */
  styleExams: 6,
  /** Flashcard cards across Economics, Math, and English (also matching + tutor exam). */
  studyToolCards: 1148,
} as const;

export const WISO_COURSE_COUNTS = {
  /** Unique practice cases across Wirtschaft, Math, and German reading. */
  practiceQuestions: 2546,
  /** WiSo-style exam papers via curated mocks and the mock builder. */
  styleExams: 6,
  /** Flashcard cards across Economics, Math, and German (also matching + tutor exam). */
  studyToolCards: 675,
} as const;

function formatCount(n: number): string {
  return n.toLocaleString("en-US");
}

/** Short bullet labels only — no supporting copy. */
export function courseHighlightBullets(track: CourseHighlightTrack): string[] {
  if (track === "wiso") {
    const q = formatCount(WISO_COURSE_COUNTS.practiceQuestions);
    const cards = formatCount(WISO_COURSE_COUNTS.studyToolCards);
    return [
      `${q} practice questions`,
      "6+ WiSo-style exams",
      "Economics, Math & German theory",
      "Custom mock exam builder",
      `${cards} Flashcards, TutorExam & matching`,
    ];
  }

  const q = formatCount(BBE_COURSE_COUNTS.practiceQuestions);
  const cards = formatCount(BBE_COURSE_COUNTS.studyToolCards);
  return [
    `${q} practice questions`,
    "6+ BBE-style exams",
    "Economics, Math & English theory",
    "Custom mock exam builder",
    `${cards} Flashcards, TutorExam & matching`,
  ];
}

export function courseHighlightSubjects(
  track: CourseHighlightTrack,
): { id: CourseHighlightSubject; label: string }[] {
  if (track === "wiso") {
    return [
      { id: "economics", label: "Economics" },
      { id: "math", label: "Math" },
      { id: "german", label: "German" },
    ];
  }
  return [
    { id: "economics", label: "Economics" },
    { id: "math", label: "Math" },
    { id: "english", label: "English" },
  ];
}
