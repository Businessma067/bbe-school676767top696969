/**
 * Shared config for the WiSo Exam knowledge hub pages.
 * Facts aligned with official WU WiSo materials (see wiso-exam-reference).
 */

export const WISO_EXAM_HUB_PATH = "/wiso/entrance-exam" as const;

export type WisoExamHubPath =
  | "/wiso/entrance-exam"
  | "/wiso/exam-scoring"
  | "/wiso/mathematics"
  | "/wiso/economics-german"
  | "/wiso/exam-preparation"
  | "/wiso/admission"
  | "/bbe-vs-wiso"
  | "/wiso/wu-vienna";

export type WisoExamNavItem = {
  label: string;
  href: WisoExamHubPath;
  shortLabel: string;
};

export const WISO_EXAM_SUBNAV: WisoExamNavItem[] = [
  { label: "Overview", shortLabel: "Overview", href: "/wiso/entrance-exam" },
  { label: "Scoring", shortLabel: "Scoring", href: "/wiso/exam-scoring" },
  { label: "Mathematics", shortLabel: "Math", href: "/wiso/mathematics" },
  {
    label: "Economics & German",
    shortLabel: "Econ & German",
    href: "/wiso/economics-german",
  },
  { label: "Preparation", shortLabel: "Prep", href: "/wiso/exam-preparation" },
  { label: "Admission", shortLabel: "Admission", href: "/wiso/admission" },
  { label: "BBE vs WISO", shortLabel: "vs BBE", href: "/bbe-vs-wiso" },
  { label: "WU Vienna", shortLabel: "WU", href: "/wiso/wu-vienna" },
];

export const WISO_PRACTICE_ROUTES = {
  demo: "/wiso/demo-practice",
  mockExams: "/wiso/mock-exams",
  mockBuilder: "/wiso/mock-builder",
  flashcards: "/wiso/flashcards",
  products: "/wiso/products",
  fullCourse: "/wiso/products/full-course",
  home: "/wiso",
} as const;

export const WISO_EXAM_FORMAT = {
  questionCount: 34,
  durationHours: 2,
  /** Three content areas per WU FAQ — not English. */
  areas: {
    economics: "Economics (wirtschaftliche Grundkenntnisse)",
    german: "German reading comprehension (deutsches Sprachverständnis)",
    mathematics: "Mathematics",
  },
  places: 2703,
  location: "VIECON, Vienna Congress and Convention Center (Messe Wien)",
  cycle: {
    lastUpdated: "September 15, 2026",
    examDate: "June 30, 2026, 10:00–12:00 CEST",
    registrationWindow: "March 2 – May 19, 2026",
    registrationFee: "€50 per programme (non-refundable)",
    osaDeadline: "May 28, 2026, 12:00 CEST",
    enrollmentWindow: "July 9 – September 5, 2026",
  },
} as const;

export const WISO_FORMAT_NOTE =
  "The WiSo entrance exam is a 2-hour, in-person multiple-choice test with 34 questions (each with five true/false statements in recent cycles). WU may adjust details by year — always confirm on the official WU website.";

/** Official economics study guide chapters (Wirtschaft verstehen, 2026/27). */
export const WISO_ECONOMICS_CHAPTERS = [
  {
    id: "ch1",
    title: "Warum wir wirtschaften und was Wirtschaften bedeutet",
    topics:
      "Circular flow, opportunity cost, supply/demand, GDP/GNP, market types, money, interest, inflation (CPI, ECB 2% target)",
  },
  {
    id: "ch2",
    title: "Wirtschaft als Teil der Gesellschaft und Umwelt",
    topics:
      "Sustainability, planetary boundaries, decoupling, wellbeing economics (SWB, Doughnut model) — WiSo-specific",
  },
  {
    id: "ch3",
    title: "Was Wirtschaften für Unternehmen bedeutet",
    topics:
      "Company types, legal forms, financing, accounting basics (balance sheet, P&L, cash flow), marketing",
  },
  {
    id: "ch4",
    title: "Digitalisierung und Vernetzung von Wirtschaft und Gesellschaft",
    topics:
      "Digital transformation, new business models, internet platforms, Wirtschaftsinformatik — WiSo-specific",
  },
] as const;

export const WISO_MATH_TOPICS = [
  "Algebra",
  "Statistics",
  "Calculus (Kalkül)",
  "Logical reasoning",
  "Formula and equation fluency under time pressure",
] as const;
