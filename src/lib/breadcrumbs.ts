import {
  displayTitleForCustomMock,
  isCustomExamId,
} from "@/config/custom-mock-builder";
import { FLASHCARD_SUBJECTS } from "@/data/flashcards";
import { getExamById } from "@/lib/mock-exams";

/** Known URL segment → label. Extend when adding new top-level sections. */
const SEGMENT_LABELS: Record<string, string> = {
  "demo-practice": "Demo Practice",
  products: "Products",
  "custom-mock-builder": "Custom Mock Builder",
  "full-course": "Full Course",
  "full-course-subjects": "Full Course Subjects",
  "full-course-economics": "Economics",
  "full-course-math": "Math",
  "full-course-english": "English",
  "lite-bbe-course": "Lite BBE Course",
  "lite-bbe-course-subjects": "Lite Course Subjects",
  "lite-bbe-course-math": "Lite Math",
  "lite-bbe-course-english": "Lite English",
  dashboard: "Dashboard",
  flashcards: "Flashcards",
  matching: "Matching",
  "tutor-exam": "Tutor Exam",
  "mock-exams": "Mock Exams",
  "important-features": "Features",
  features: "Features",
  "answer-sheet": "Answer Sheet",
  parents: "Parents",
  account: "Account",
  practice: "Practice",
  admin: "Admin",
  terms: "Terms",
  login: "Log In",
  signup: "Sign Up",
  auth: "Sign In",
  "forgot-password": "Forgot Password",
  "reset-password": "Reset Password",
  economics: "Economics",
  math: "Math",
  english: "English",
  take: "Take",
  review: "Review",
  api: "API",
};

const SUBJECT_TITLE: Record<string, string> = Object.fromEntries(
  FLASHCARD_SUBJECTS.map((s) => [s.id, s.title]),
);

export type BreadcrumbCrumb = {
  label: string;
  to: string | null;
  isLast: boolean;
};

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  const trimmed = pathname.replace(/\/+$/, "") || "/";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

function prettifySegment(segment: string): string {
  const decoded = decodeURIComponent(segment);
  if (SEGMENT_LABELS[decoded]) return SEGMENT_LABELS[decoded];
  if (SUBJECT_TITLE[decoded]) return SUBJECT_TITLE[decoded];
  if (isCustomExamId(decoded)) return "Custom Mock";
  return decoded
    .split("-")
    .map((w) => (w.length === 0 ? w : w[0]!.toUpperCase() + w.slice(1)))
    .join(" ");
}

/** Parse `<title>` from route head — works for future pages that set a title. */
export function labelFromDocumentTitle(): string | null {
  if (typeof document === "undefined") return null;
  const raw = document.title.trim();
  if (!raw) return null;

  const cleaned = raw
    .replace(/\s*[·|–—-]\s*BBE School\s*$/i, "")
    .replace(/\s*\|\s*WU Vienna.*$/i, "")
    .trim();

  if (!cleaned || /^BBE School(\s|\||$)/i.test(cleaned)) return null;
  return cleaned;
}

export type PageLabelContext = {
  customMockTitle?: string | null;
};

/** Label for one visited page — used in the navigation trail. */
export function resolvePageLabel(
  pathname: string,
  ctx: PageLabelContext = {},
): string {
  const path = normalizePathname(pathname);
  if (path === "/") return "Home";

  const mockMatch = path.match(/^\/mock-exams\/([^/]+)(?:\/(take|review))?$/);
  if (mockMatch) {
    const examId = decodeURIComponent(mockMatch[1]!);
    const action = mockMatch[2];
    if (isCustomExamId(examId)) {
      const title = ctx.customMockTitle ?? "Custom Mock";
      if (action === "take") return `${title} · Take`;
      if (action === "review") return `${title} · Review`;
      return title;
    }
    const exam = getExamById(examId);
    const base = exam?.title ?? prettifySegment(examId);
    if (action === "take") return `${base} · Take`;
    if (action === "review") return `${base} · Review`;
    return base;
  }

  const studyMatch = path.match(/^\/(flashcards|matching|tutor-exam)\/([^/]+)$/);
  if (studyMatch) {
    const mode = prettifySegment(studyMatch[1]!);
    const subject = SUBJECT_TITLE[studyMatch[2]!] ?? prettifySegment(studyMatch[2]!);
    return `${subject} · ${mode}`;
  }

  const fromTitle = labelFromDocumentTitle();
  if (fromTitle) return fromTitle;

  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) return "Home";

  // Composite paths: use last two segments when the last is a subject/id
  if (segments.length >= 2) {
    const parent = prettifySegment(segments[segments.length - 2]!);
    const leaf = prettifySegment(segments[segments.length - 1]!);
    if (parent !== leaf) return `${leaf} · ${parent}`;
  }

  return prettifySegment(segments[segments.length - 1]!);
}

/** URL hierarchy fallback when there is no session trail yet. */
export function buildHierarchyCrumbs(pathname: string): BreadcrumbCrumb[] {
  const path = normalizePathname(pathname);
  if (path === "/") return [];

  const segments = path.split("/").filter(Boolean);
  return segments.map((seg, i) => ({
    label: prettifySegment(seg),
    to: i === segments.length - 1 ? null : `/${segments.slice(0, i + 1).join("/")}`,
    isLast: i === segments.length - 1,
  }));
}

export function trailToCrumbs(
  trail: { pathname: string; label: string }[],
): BreadcrumbCrumb[] {
  const items = trail.filter((e) => normalizePathname(e.pathname) !== "/");
  if (items.length === 0) return [];

  return items.map((e, i) => ({
    label: e.label,
    to: i === items.length - 1 ? null : normalizePathname(e.pathname),
    isLast: i === items.length - 1,
  }));
}
