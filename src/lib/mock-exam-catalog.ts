/**
 * Lightweight mock-exam metadata (no sourced JSON).
 * Import this for lists, breadcrumbs, and locked previews.
 * Question banks live in `@/lib/mock-exam-*-content` and are loaded only when taking an exam.
 */
import { SCORING_CONFIG } from "@/config/scoring-config";

/** Paid course tiers plus free demo-mock access. */
export type ProductTier = "full" | "lite" | "demo";

export interface MockExamSummary {
  id: string;
  title: string;
  questionCount: number;
  durationMinutes: number;
  tier: ProductTier;
  /** Present for Custom Mock Builder exams — used for progress sync only. */
  pointsTotal?: number;
  /** Optional content stamp (Mock 1) to verify Lovable/Git sync. */
  contentRev?: string;
}

const BBE_POINTS = SCORING_CONFIG.examTotalPoints;
const WISO_POINTS = SCORING_CONFIG.wisoExamTotalPoints;

/** Free hard diagnostic — always unlocked (hero “Demo mock” CTA). */
export const DEMO_MOCK_EXAM: MockExamSummary = {
  id: "demo-mock",
  title: "Demo Mock Exam",
  questionCount: 34,
  durationMinutes: 120,
  tier: "demo",
  pointsTotal: BBE_POINTS,
  contentRev: "2026-09-28b · exam-knowledge econ text + mixed tables",
};

/** Available exams. Demo + mocks 1–6; Custom Mock Builder exams are separate. */
export const MOCK_EXAMS: MockExamSummary[] = [
  DEMO_MOCK_EXAM,
  {
    id: "mock-1",
    title: "Mock Exam 1",
    questionCount: 34,
    durationMinutes: 120,
    tier: "lite",
    pointsTotal: BBE_POINTS,
    contentRev: "2026-09-17h · 34q · Voyager · katex currency scrub",
  },
  {
    id: "mock-2",
    title: "Mock Exam 2",
    questionCount: 34,
    durationMinutes: 120,
    tier: "lite",
    pointsTotal: BBE_POINTS,
    contentRev: "2026-09-17h · 34q · Shifting · katex currency scrub",
  },
  {
    id: "mock-3",
    title: "Mock Exam 3",
    questionCount: 34,
    durationMinutes: 120,
    tier: "full",
    pointsTotal: BBE_POINTS,
    contentRev: "2026-09-17h · 34q · Silicon · katex t=0 + currency scrub",
  },
  {
    id: "mock-4",
    title: "Mock Exam 4",
    questionCount: 34,
    durationMinutes: 120,
    tier: "full",
    pointsTotal: BBE_POINTS,
    contentRev: "2026-09-16c · 34q · Glacier · pushed-to-main",
  },
  {
    id: "mock-5",
    title: "Mock Exam 5",
    questionCount: 34,
    durationMinutes: 120,
    tier: "full",
    pointsTotal: BBE_POINTS,
    contentRev: "2026-09-18i · 34q · Octopus · natural math explanations + UI clip fix",
  },
  {
    id: "mock-6",
    title: "Mock Exam 6",
    questionCount: 34,
    durationMinutes: 120,
    tier: "full",
    pointsTotal: BBE_POINTS,
    contentRev: "2026-09-18i · 34q · Reshoring · natural math explanations + UI clip fix",
  },
];

/** Free WiSo diagnostic — always unlocked (WiSo “Demo Exam” CTA). */
export const WISO_DEMO_MOCK_EXAM: MockExamSummary = {
  id: "wiso-demo-mock",
  title: "WiSo Demo-Probeprüfung",
  questionCount: 34,
  durationMinutes: 120,
  tier: "demo",
  pointsTotal: WISO_POINTS,
  contentRev: "2026-09-28a · curated demo · Nudging t.6 · DE accounting",
};

/** Curated WiSo Aufnahmeprüfung mocks (German track). Demo + paid mocks. */
export const WISO_MOCK_EXAMS: MockExamSummary[] = [
  WISO_DEMO_MOCK_EXAM,
  {
    id: "wiso-mock-1",
    title: "WiSo Mock Exam 1",
    questionCount: 34,
    durationMinutes: 120,
    tier: "full",
    pointsTotal: WISO_POINTS,
    contentRev: "2026-09-21d · 34q · KaTeX audit · fix $20\\%$ close",
  },
  ...Array.from({ length: 6 }, (_, index): MockExamSummary => ({
    id: `wiso-mock-${index + 2}`,
    title: `WiSo Mock Exam ${index + 2}`,
    questionCount: 34,
    durationMinutes: 120,
    tier: "full",
    pointsTotal: WISO_POINTS,
  })),
];

export function getExamsForTier(tier: ProductTier): MockExamSummary[] {
  const paid = MOCK_EXAMS.filter((e) => e.tier !== "demo");
  if (tier === "full") return paid;
  if (tier === "lite") return paid.filter((e) => e.tier === "lite");
  return [];
}

export function getFreeDemoMockExam(): MockExamSummary {
  return DEMO_MOCK_EXAM;
}

export function getFreeWisoDemoMockExam(): MockExamSummary {
  return WISO_DEMO_MOCK_EXAM;
}

export function isFreeDemoMockId(id: string): boolean {
  return id === DEMO_MOCK_EXAM.id || id === WISO_DEMO_MOCK_EXAM.id;
}

export function getWisoExamsForTier(tier: ProductTier | "none"): MockExamSummary[] {
  if (tier !== "full") return [];
  return WISO_MOCK_EXAMS.filter((e) => e.tier !== "demo");
}

export function getExamById(id: string): MockExamSummary | undefined {
  return MOCK_EXAMS.find((e) => e.id === id) ?? WISO_MOCK_EXAMS.find((e) => e.id === id);
}

export function isWisoCuratedMockId(id: string): boolean {
  return id.startsWith("wiso-mock-") || id === WISO_DEMO_MOCK_EXAM.id;
}
