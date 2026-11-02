/**
 * Marketing totals for BBE / WiSo course highlight sections.
 * Counts are derived from the Full Course practice banks and theory readers.
 *
 * Preparation-material page totals = Economics + Math theory only, as Word-page
 * equivalents: economics uses the published textbook PDF page count; math uses
 * theory-markdown word count ÷ 300 (calibrated against the economics PDFs).
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
  /**
   * Economics textbook PDF (75) + Math theory markdown ≈198 Word pages.
   * Math estimate: ~59,300 words ÷ 300.
   */
  preparationMaterialPages: 273,
} as const;

export const WISO_COURSE_COUNTS = {
  /** Unique practice cases across Wirtschaft, Math, and German reading. */
  practiceQuestions: 2546,
  /** WiSo-style exam papers via curated mocks and the mock builder. */
  styleExams: 6,
  /** Flashcard cards across Economics, Math, and German (also matching + tutor exam). */
  studyToolCards: 675,
  /**
   * Wirtschaft verstehen PDF (105) + Math theory markdown ≈189 Word pages.
   * Math estimate: ~56,550 words ÷ 300.
   */
  preparationMaterialPages: 294,
} as const;

function formatCount(n: number): string {
  return n.toLocaleString("en-US");
}

/** Short bullet labels only — no supporting copy. */
export function courseHighlightBullets(track: CourseHighlightTrack): string[] {
  if (track === "wiso") {
    const q = formatCount(WISO_COURSE_COUNTS.practiceQuestions);
    const pages = formatCount(WISO_COURSE_COUNTS.preparationMaterialPages);
    return [
      `${q} practice questions`,
      "6+ WiSo-style exams",
      `${pages} preparation material pages`,
      "Custom mock exam builder",
    ];
  }

  const q = formatCount(BBE_COURSE_COUNTS.practiceQuestions);
  const pages = formatCount(BBE_COURSE_COUNTS.preparationMaterialPages);
  return [
    `${q} practice questions`,
    "6+ BBE-style exams",
    `${pages} preparation material pages`,
    "Custom mock exam builder",
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
