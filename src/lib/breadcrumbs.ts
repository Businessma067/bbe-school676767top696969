import { isCustomExamId } from "@/config/custom-mock-builder";
import {
  BBE_EXAM_BREADCRUMB_LABELS,
  BBE_EXAM_HUB_PATH,
  BBE_EXAM_HUB_SEGMENTS,
} from "@/config/bbe-exam-hub";
import { FLASHCARD_SUBJECTS } from "@/data/flashcards";
import type { Lang } from "@/lib/i18n/dictionary";
import {
  getLocaleFromPath,
  localizePath,
  stripLocalePrefix,
  type LocalePrefix,
} from "@/lib/i18n/locale-path";
import { getExamById } from "@/lib/mock-exams";

/** Known URL segment → label. Extend when adding new sections. */
const SEGMENT_LABELS: Record<string, string> = {
  "bbe-entrance-exam": "Overview",
  "bbe-entrance-exam-guide": "BBE Entrance Exam",
  "bbe-exam-scoring": "Scoring",
  "bbe-mathematics": "Mathematics",
  "bbe-economics-english": "Economics & English",
  "bbe-exam-preparation": "How to Prepare",
  "bbe-admission": "Admission",
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
};

const SUBJECT_TITLE: Record<string, string> = Object.fromEntries(
  FLASHCARD_SUBJECTS.map((s) => [s.id, s.title]),
);

export type BreadcrumbCrumb = {
  label: string;
  to: string | null;
  isLast: boolean;
};

export type BreadcrumbContext = {
  customMockTitle?: string | null;
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

function withLastFlags(crumbs: Omit<BreadcrumbCrumb, "isLast">[]): BreadcrumbCrumb[] {
  return crumbs.map((c, i) => ({
    ...c,
    isLast: i === crumbs.length - 1,
  }));
}

function labelForSegment(segment: string, ctx: BreadcrumbContext): string {
  const decoded = decodeURIComponent(segment);
  if (isCustomExamId(decoded)) {
    return ctx.customMockTitle ?? "Custom Mock";
  }
  const exam = getExamById(decoded);
  if (exam) return exam.title;
  return prettifySegment(decoded);
}

function withLocale(to: string | null, locale: LocalePrefix | null): string | null {
  if (!to || !locale) return to;
  return localizePath(to, locale as Lang);
}

/**
 * Standard hierarchical breadcrumbs from the URL (not click history).
 * Home is rendered separately in the component.
 */
export function buildBreadcrumbs(
  pathname: string,
  ctx: BreadcrumbContext = {},
): BreadcrumbCrumb[] {
  const locale = getLocaleFromPath(pathname);
  const path = stripLocalePrefix(normalizePathname(pathname));
  if (path === "/") return [];

  const customMock = path.match(/^\/mock-exams\/([^/]+)(?:\/(take|review))?$/);
  if (customMock && isCustomExamId(customMock[1]!)) {
    const examId = decodeURIComponent(customMock[1]!);
    const action = customMock[2];
    const mockLabel = ctx.customMockTitle ?? "Custom Mock";
    const trail: Omit<BreadcrumbCrumb, "isLast">[] = [
      { label: "Products", to: withLocale("/products", locale) },
      { label: "Custom Mock Builder", to: withLocale("/products/custom-mock-builder", locale) },
      {
        label: mockLabel,
        to: action ? `/mock-exams/${examId}/take` : null,
      },
    ];
    if (action === "take") trail.push({ label: "Take", to: null });
    if (action === "review") trail.push({ label: "Review", to: null });
    return withLastFlags(trail);
  }

  const catalogMock = path.match(/^\/mock-exams\/([^/]+)(?:\/(take|review))?$/);
  if (catalogMock) {
    const examId = decodeURIComponent(catalogMock[1]!);
    const action = catalogMock[2];
    const exam = getExamById(examId);
    const trail: Omit<BreadcrumbCrumb, "isLast">[] = [
      { label: "Mock Exams", to: "/mock-exams" },
      {
        label: exam?.title ?? prettifySegment(examId),
        to: action ? `/mock-exams/${examId}/take` : null,
      },
    ];
    if (action === "take") trail.push({ label: "Take", to: null });
    if (action === "review") trail.push({ label: "Review", to: null });
    return withLastFlags(trail);
  }

  const segments = path.split("/").filter(Boolean);

  // Flat BBE Exam hub URLs → Home / BBE Exam / Page
  if (segments.length === 1 && BBE_EXAM_HUB_SEGMENTS.has(segments[0]!)) {
    const seg = segments[0]!;
    const pageLabel = BBE_EXAM_BREADCRUMB_LABELS[seg] ?? labelForSegment(seg, ctx);
    return withLastFlags([
      { label: "BBE Exam", to: withLocale(BBE_EXAM_HUB_PATH, locale) },
      { label: pageLabel, to: null },
    ]);
  }

  return withLastFlags(
    segments.map((seg, i) => ({
      label: labelForSegment(seg, ctx),
      to:
        i === segments.length - 1
          ? null
          : withLocale(`/${segments.slice(0, i + 1).join("/")}`, locale),
    })),
  );
}
