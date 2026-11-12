/**
 * Marketing totals for BBE / WiSo / Hybrid course highlight sections.
 * Counts are derived from the Full Course practice banks and theory readers.
 *
 * Preparation-material page totals = Economics + Math theory only, as Word-page
 * equivalents: economics uses the published textbook PDF page count; math uses
 * theory-markdown word count ÷ 300 (calibrated against the economics PDFs).
 *
 * Hybrid unlocks both full libraries, so its marketing totals are BBE + WiSo.
 */

import { PAID_PRODUCTS } from "@/lib/checkout-catalog";

export type CourseHighlightTrack = "bbe" | "wiso" | "hybrid";

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
  styleExams: 7,
  /** Flashcard cards across Economics, Math, and German (also matching + tutor exam). */
  studyToolCards: 675,
  /**
   * Wirtschaft verstehen PDF (105) + Math theory markdown ≈189 Word pages.
   * Math estimate: ~56,550 words ÷ 300.
   */
  preparationMaterialPages: 294,
} as const;

/** Combined Full BBE + Full WiSo libraries unlocked by Hybrid. */
export const HYBRID_COURSE_COUNTS = {
  practiceQuestions:
    BBE_COURSE_COUNTS.practiceQuestions + WISO_COURSE_COUNTS.practiceQuestions,
  styleExams: BBE_COURSE_COUNTS.styleExams + WISO_COURSE_COUNTS.styleExams,
  studyToolCards: BBE_COURSE_COUNTS.studyToolCards + WISO_COURSE_COUNTS.studyToolCards,
  preparationMaterialPages:
    BBE_COURSE_COUNTS.preparationMaterialPages +
    WISO_COURSE_COUNTS.preparationMaterialPages,
} as const;

function formatCount(n: number): string {
  return n.toLocaleString("en-US");
}

function coursePriceBullet(slug: keyof typeof PAID_PRODUCTS): string {
  return `€${PAID_PRODUCTS[slug].priceEur}`;
}

/** Short bullet labels only — no supporting copy. */
export function courseHighlightBullets(track: CourseHighlightTrack): string[] {
  if (track === "wiso") {
    const q = formatCount(WISO_COURSE_COUNTS.practiceQuestions);
    const pages = formatCount(WISO_COURSE_COUNTS.preparationMaterialPages);
    return [
      `${q} practice questions`,
      "7+ WiSo-style exams",
      `${pages} preparation material pages`,
      coursePriceBullet("wiso-full-course"),
    ];
  }

  if (track === "hybrid") {
    const q = formatCount(HYBRID_COURSE_COUNTS.practiceQuestions);
    const pages = formatCount(HYBRID_COURSE_COUNTS.preparationMaterialPages);
    return [
      `${q} practice questions`,
      "12+ BBE & WiSo-style exams",
      `${pages} preparation material pages`,
      coursePriceBullet("hybrid-full-course"),
    ];
  }

  const q = formatCount(BBE_COURSE_COUNTS.practiceQuestions);
  const pages = formatCount(BBE_COURSE_COUNTS.preparationMaterialPages);
  return [
    `${q} practice questions`,
    "6+ BBE-style exams",
    `${pages} preparation material pages`,
    coursePriceBullet("full-course"),
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
  if (track === "hybrid") {
    return [
      { id: "economics", label: "Economics" },
      { id: "math", label: "Math" },
      { id: "english", label: "English" },
      { id: "german", label: "German" },
    ];
  }
  return [
    { id: "economics", label: "Economics" },
    { id: "math", label: "Math" },
    { id: "english", label: "English" },
  ];
}
