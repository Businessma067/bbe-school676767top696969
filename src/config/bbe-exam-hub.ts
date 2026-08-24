/**
 * Shared config for the BBE Exam knowledge hub pages.
 * Keep factual claims aligned with the BBE Entrance Exam Guide.
 */

export const BBE_EXAM_HUB_PATH = "/bbe-entrance-exam" as const;

export type BbeExamHubPath =
  | "/bbe-entrance-exam"
  | "/bbe-exam-scoring"
  | "/bbe-mathematics"
  | "/bbe-economics-english"
  | "/bbe-exam-preparation"
  | "/bbe-admission";

export type BbeExamNavItem = {
  label: string;
  href: BbeExamHubPath;
  shortLabel: string;
};

/** Compact secondary navigation for BBE Exam hub pages. */
export const BBE_EXAM_SUBNAV: BbeExamNavItem[] = [
  { label: "Overview", shortLabel: "Overview", href: "/bbe-entrance-exam" },
  { label: "Scoring", shortLabel: "Scoring", href: "/bbe-exam-scoring" },
  { label: "Mathematics", shortLabel: "Math", href: "/bbe-mathematics" },
  {
    label: "Economics & English",
    shortLabel: "Econ & English",
    href: "/bbe-economics-english",
  },
  { label: "Preparation", shortLabel: "Prep", href: "/bbe-exam-preparation" },
  { label: "Admission", shortLabel: "Admission", href: "/bbe-admission" },
];

/** Breadcrumb labels for flat hub URLs (Home → BBE Exam → Page). */
export const BBE_EXAM_BREADCRUMB_LABELS: Record<string, string> = {
  "bbe-entrance-exam": "Overview",
  "bbe-exam-scoring": "Scoring",
  "bbe-mathematics": "Mathematics",
  "bbe-economics-english": "Economics & English",
  "bbe-exam-preparation": "How to Prepare",
  "bbe-admission": "Admission",
};

export const BBE_EXAM_HUB_SEGMENTS = new Set(Object.keys(BBE_EXAM_BREADCRUMB_LABELS));

/** Existing practice / conversion routes — do not invent new ones. */
export const BBE_PRACTICE_ROUTES = {
  demo: "/demo-practice",
  math: "/demo-practice/math",
  economics: "/demo-practice/economics",
  english: "/demo-practice/english",
  flashcards: "/flashcards",
  economicsFlashcards: "/flashcards/$subject",
  mockExams: "/mock-exams",
  products: "/products",
  fullCourse: "/products/full-course",
} as const;

/**
 * Format facts from the most recent exam structure described in the guide.
 * Present as previous/latest; next cycle expected similar.
 */
export const BBE_EXAM_FORMAT = {
  questionCount: 34,
  durationHours: 2,
  economicsQuestions: 10,
  englishQuestions: 11,
  mathQuestions: 13,
  /** Approximate score weighting — NOT share of questions. */
  scoreWeighting: {
    economics: "40%",
    english: "20%",
    mathematics: "40%",
  },
  places: 240,
  location: "VIECON – Vienna Congress and Convention Center (Messe Wien)",
  /** Time-sensitive cycle details from the existing guide — update yearly. */
  cycle: {
    lastUpdated: "August 22, 2026",
    examDate: "June 30, 2026, 3:00–5:00 p.m. CEST",
    registrationWindow: "March 2 – May 19, 2026",
    registrationFee: "€50 (waived for Ukrainian citizens)",
    osaDeadline: "May 28, 2026, 12:00 noon CEST",
  },
} as const;

export const BBE_FORMAT_NOTE =
  "Based on the most recent BBE entrance exam, the test consisted of 34 questions completed in 2 hours. The next admission cycle is expected to follow a similar structure, although WU may modify the selection procedure.";

export const MATH_TOPICS = [
  {
    id: "logic",
    title: "Logic",
    know: "Truth values, logical connectives, and evaluating statements carefully under a shared stem.",
    concepts: "Negation, conjunction, implication-style reasoning, and spotting when a claim does not follow.",
    mistakes: "Treating informal English wording as formal logic, or assuming options must “balance.”",
  },
  {
    id: "elementary-algebra",
    title: "Elementary algebra",
    know: "Manipulate expressions, simplify fractions, and work confidently with powers and roots.",
    concepts: "Factoring, expanding, algebraic fractions, and rearranging formulas.",
    mistakes: "Sign errors when distributing negatives; dropping terms when simplifying.",
  },
  {
    id: "elementary-financial-mathematics",
    title: "Elementary financial mathematics",
    know: "Interest, growth factors, and basic present/future value thinking at an elementary level.",
    concepts: "Simple vs compound interest ideas, percentage change, and interpreting financial wording.",
    mistakes: "Mixing percentage points with relative percentages; applying the wrong growth period.",
  },
  {
    id: "equations",
    title: "Equations",
    know: "Solve linear and common nonlinear equations that appear in school-leaving style problems.",
    concepts: "Equivalence transformations, checking solutions, and translating word problems into equations.",
    mistakes: "Extraneous solutions after squaring; not verifying answers in the original equation.",
  },
  {
    id: "linear-equations-two-unknowns",
    title: "Linear equations in two unknowns",
    know: "Solve 2×2 linear systems and interpret solutions in context.",
    concepts: "Substitution, elimination, and inconsistent vs dependent systems at a basic level.",
    mistakes: "Arithmetic slips when eliminating variables; misreading which variable a statement claims.",
  },
  {
    id: "inequalities",
    title: "Inequalities",
    know: "Solve and interpret inequalities, including how inequality direction behaves under operations.",
    concepts: "Linear inequalities, solution sets on a number line, and careful handling when multiplying by negatives.",
    mistakes: "Forgetting to flip the inequality when multiplying/dividing by a negative.",
  },
  {
    id: "linear-quadratic-functions",
    title: "Linear and quadratic functions",
    know: "Read graphs and equations of lines and parabolas; connect slope, intercepts, and vertex ideas.",
    concepts: "Slope-intercept form, zeros of quadratics, vertex/axis of symmetry at syllabus depth.",
    mistakes: "Confusing roots with the vertex; misreading “at least / at most” from a graph.",
  },
  {
    id: "power-functions",
    title: "Power functions",
    know: "Work with y = xⁿ-style behaviour and related algebraic manipulations.",
    concepts: "Domain issues for even/odd roots, growth vs decay of power shapes, and equation solving.",
    mistakes: "Ignoring domain restrictions; treating power rules as if exponents were always integers.",
  },
  {
    id: "polynomial-functions",
    title: "Polynomial functions",
    know: "Degree, leading coefficient intuition, and evaluating or factoring simple polynomials.",
    concepts: "Zeros, factorisation links, and end-behaviour at an elementary level.",
    mistakes: "Assuming every polynomial factors nicely over the reals; sign chart mistakes.",
  },
  {
    id: "exponential-logarithmic",
    title: "Exponential and logarithmic functions",
    know: "Convert between exponential and logarithmic form; solve basic equations.",
    concepts: "Growth/decay language, log laws used carefully, and interpreting statements about rates.",
    mistakes: "Applying log laws incorrectly; mixing ln and log₁₀ without checking the base.",
  },
  {
    id: "differentiation-optimization",
    title: "Differentiation and single-variable optimization",
    know: "Differentiate standard functions and use derivatives for basic max/min problems.",
    concepts: "Critical points, first-derivative tests at syllabus depth, and interpreting rates of change.",
    mistakes: "Finding critical points but forgetting to check which are maxima/minima in context.",
  },
  {
    id: "elementary-probability",
    title: "Elementary probability",
    know: "Compute basic probabilities, including conditional probability and Bayes-style updates.",
    concepts: "Independence vs dependence, total probability, and reading tree/table setups.",
    mistakes: "Confusing P(A|B) with P(B|A); mixing “at least” with “exactly.”",
  },
  {
    id: "binomial-distribution",
    title: "Binomial distribution",
    know: "Recognize binomial settings and compute probabilities for fixed n and success probability p.",
    concepts: "n trials, success/failure, binomial coefficients, and cumulative “at least / at most” wording.",
    mistakes: "Using binomial formulas when trials are not independent or when p is not constant.",
  },
] as const;
