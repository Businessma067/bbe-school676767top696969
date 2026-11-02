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

export type CourseHighlightPoint = {
  title: string;
  detail: string;
};

export function courseHighlightPoints(track: CourseHighlightTrack): CourseHighlightPoint[] {
  if (track === "wiso") {
    const q = formatCount(WISO_COURSE_COUNTS.practiceQuestions);
    const cards = formatCount(WISO_COURSE_COUNTS.studyToolCards);
    return [
      {
        title: `${q} unique practice questions`,
        detail: "Wirtschaft verstehen, mathematics, and German reading in the real exam format.",
      },
      {
        title: "6+ WiSo-style exams",
        detail: "Timed Probeprüfungen plus papers you build around your weak chapters.",
      },
      {
        title: "Economics, Math, and German theory",
        detail: "Chapter theory readers for the definitions and formulas the statements assume.",
      },
      {
        title: "Custom mock exam builder",
        detail: "Pick WiSo chapters and subtopics, set the mix, and start a timed paper from the bank.",
      },
      {
        title: `${cards} Flashcards, TutorExam, and matching questions`,
        detail: "One deck powers flashcards, matching drills, and tutor-exam quizzes.",
      },
    ];
  }

  const q = formatCount(BBE_COURSE_COUNTS.practiceQuestions);
  const cards = formatCount(BBE_COURSE_COUNTS.studyToolCards);
  return [
    {
      title: `${q} unique practice questions`,
      detail: "Economics, Mathematics, and English cases in the real BBE statement format.",
    },
    {
      title: "6+ BBE-style exams",
      detail: "Full-length timed mocks with the same scoring and pacing as exam day.",
    },
    {
      title: "Economics, Math, and English theory",
      detail: "Chapter theory readers for the definitions and formulas the statements assume.",
    },
    {
      title: "Custom mock exam builder",
      detail: "Pick chapters and subtopics, set the mix, and start a timed paper from the Full Course bank.",
    },
    {
      title: `${cards} Flashcards, TutorExam, and matching questions`,
      detail: "One deck powers flashcards, matching drills, and tutor-exam quizzes.",
    },
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
