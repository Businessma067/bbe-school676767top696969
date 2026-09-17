/**
 * Shared config for the WiSo Exam knowledge hub pages.
 * Facts aligned with official WU WiSo materials (see wiso-exam-reference).
 *
 * Mark claims carefully:
 * - [WU] = official FAQ / PDFs
 * - [3rd party — verify] = prep sites / recent-cycle descriptions not confirmed in WU FAQ
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
  matching: "/wiso/matching",
  tutorExam: "/wiso/tutor-exam",
  products: "/wiso/products",
  fullCourse: "/wiso/products/full-course",
  subjects: "/wiso/products/full-course-subjects",
  math: "/wiso/products/full-course-math",
  economics: "/wiso/products/full-course-economics",
  german: "/wiso/products/full-course-german",
  home: "/wiso",
} as const;

export const WISO_OFFICIAL_LINKS = {
  faq: "https://www.wu.ac.at/studium/bachelor/wirtschafts-und-sozialwissenschaften/ueberblick/aufnahmeverfahren/faqs-aufnahmeverfahren",
  economicsPdf:
    "https://www.wu.ac.at/fileadmin/wu/h/programs/bachelor/Wirtschaft_verstehen_Aufnahmepr%C3%BCfung_2026.pdf",
  scoringPdf:
    "https://www.wu.ac.at/fileadmin/wu/h/programs/bachelor/wiso/Teilpunktesystem_WISO.pdf",
  prepLanding: "https://short.wu.ac.at/av-wiso",
} as const;

export const WISO_EXAM_FORMAT = {
  durationHours: 2,
  /**
   * [3rd party — verify] Recent prep/cycle descriptions often cite ~34 questions.
   * WU FAQ confirms entirely MCQ but does not publish an exact official count.
   * Prefer WISO_FORMAT_NOTE whenever this number is shown to readers.
   */
  questionCount: 34,
  /** Three content areas per WU FAQ — not English. */
  areas: {
    economics: "Economics (wirtschaftliche Grundkenntnisse)",
    german: "German reading comprehension (deutsches Sprachverständnis)",
    mathematics: "Mathematics",
  },
  /** [WU] 2026/27 places */
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

/**
 * Format note used across hub pages.
 * Do not hard-claim BBE’s 34×5 true/false layout as official WiSo format.
 */
export const WISO_FORMAT_NOTE =
  "WU confirms a 2-hour, in-person, entirely multiple-choice Aufnahmeprüfung at VIECON. The exact per-question layout (single-correct vs multi-select vs five true/false statements under one stem) is not spelled out in the public FAQ. Some recent prep and cycle descriptions mention roughly 34 questions with five statements each — treat that as unverified until WU publishes detail. Always confirm the current cycle on wu.ac.at.";

/** Official economics study guide chapters (Wirtschaft verstehen, 2026/27). [WU] */
export const WISO_ECONOMICS_CHAPTERS = [
  {
    id: "ch1",
    title: "Grundlagen der Wirtschaft",
    topics:
      "Wirtschaftskreislauf, Knappheit und Opportunitätskosten, Arbeitsteilung und Spezialisierung, Geld, Zinsen und Inflation",
    bullets: [
      "Wirtschaftskreislauf",
      "Knappheit und Opportunitätskosten",
      "Arbeitsteilung und Spezialisierung",
      "Geld, Zinsen und Inflation",
    ],
  },
  {
    id: "ch2",
    title: "Wirtschaft, Gesellschaft und Umwelt",
    topics:
      "Nachhaltigkeit, planetare Grenzen, Entkopplung, Wohlfahrtsökonomie — WiSo-spezifisch gegenüber dem BBE-Fuhrmann-Text",
    bullets: [
      "Einbettung der Wirtschaft in Gesellschaft und Umwelt",
      "Nachhaltigkeit und planetare Grenzen",
      "Entkopplung von Wachstum und Umweltschäden",
      "Wohlfahrtsökonomie",
    ],
  },
  {
    id: "ch3",
    title: "Unternehmensgrundlagen",
    topics: "Unternehmensarten und Rechtsformen, Eigentum und Finanzierungsquellen, Rechnungswesen",
    bullets: [
      "Unternehmensarten und Rechtsformen",
      "Eigentum und Finanzierungsquellen",
      "Rechnungswesen",
    ],
  },
  {
    id: "ch4",
    title: "Digitalisierung",
    topics:
      "Digitale Transformation und Geschäftsmodelle, Internetplattformen, Wirtschaftsinformatik — WiSo-spezifisch",
    bullets: [
      "Digitale Transformation und Geschäftsmodelle",
      "Internetplattformen",
      "Wirtschaftsinformatik",
    ],
  },
] as const;

/**
 * Math topic areas. No official WU math skriptum — [3rd party — verify],
 * framed similarly to secondary-school business math under time pressure.
 */
export const WISO_MATH_TOPICS = [
  {
    id: "algebra",
    title: "Algebra & equations",
    body: "Rearranging formulas, linear and quadratic equations, inequalities, and fluent algebraic manipulation in German word problems.",
  },
  {
    id: "statistics",
    title: "Statistics & probability",
    body: "Descriptive statistics, elementary probability, and interpreting data statements under exam time pressure.",
  },
  {
    id: "calculus",
    title: "Calculus (Kalkül)",
    body: "Functions, differentiation ideas, and single-variable optimisation at secondary-school business depth.",
  },
  {
    id: "logic",
    title: "Logical reasoning",
    body: "Evaluating claims carefully, spotting when a statement does not follow from the stem, and avoiding informal traps.",
  },
  {
    id: "fluency",
    title: "Formula fluency under time pressure",
    body: "Recognising which method applies quickly, without translating every stem into English first.",
  },
] as const;
