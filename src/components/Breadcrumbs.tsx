import { Link, useRouterState } from "@tanstack/react-router";
import { Home, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  displayTitleForCustomMock,
  isCustomExamId,
  parseCustomMockId,
} from "@/config/custom-mock-builder";
import {
  cacheCustomMock,
  fetchCustomMockById,
  readCachedCustomMock,
} from "@/lib/custom-mock-builder/client";
import { getExamById } from "@/lib/mock-exams";
import {
  getNavTrail,
  recordNavVisit,
  truncateNavTrailTo,
  type NavTrailEntry,
} from "@/lib/navigation-trail";

const LABELS: Record<string, string> = {
  "demo-practice": "Demo Practice",
  bbe: "BBE",
  faq: "FAQ",
  api: "API",
  products: "Products",
  "custom-mock-builder": "Custom Mock Builder",
  "full-course": "Full Course",
  "full-course-economics": "Economics",
  "full-course-math": "Math",
  "full-course-english": "English",
  "full-course-subjects": "Full Course Subjects",
  "lite-bbe-course": "Lite BBE Course",
  "lite-bbe-course-subjects": "Lite Course Subjects",
  "lite-bbe-course-math": "Lite Math",
  "lite-bbe-course-english": "Lite English",
  "demo-practice-product": "Demo Practice",
  dashboard: "Dashboard",
  flashcards: "Flashcards",
  matching: "Matching",
  "tutor-exam": "Tutor Exam",
  "mock-exams": "Mock Exams",
  "important-features": "Features",
  parents: "Parents",
  account: "Account",
  practice: "Practice",
  economics: "Economics",
  english: "English",
  math: "Math",
  take: "Take",
  review: "Review",
};

function prettify(segment: string): string {
  if (LABELS[segment]) return LABELS[segment];
  if (isCustomExamId(segment)) return "Custom Mock";
  return segment
    .split("-")
    .map((w) => (w.length === 0 ? w : w[0].toUpperCase() + w.slice(1)))
    .join(" ");
}

type Crumb = {
  label: string;
  to: string | null;
  isLast: boolean;
};

function withLastFlags(crumbs: Omit<Crumb, "isLast">[]): Crumb[] {
  return crumbs.map((c, i) => ({
    ...c,
    isLast: i === crumbs.length - 1,
  }));
}

/** URL segments as crumbs (Home is rendered separately). */
function buildDefaultCrumbs(pathname: string): Crumb[] {
  const segments = pathname.split("/").filter(Boolean);
  return withLastFlags(
    segments.map((seg, i) => ({
      label: prettify(decodeURIComponent(seg)),
      to: "/" + segments.slice(0, i + 1).join("/"),
    })),
  );
}

function labelForPathname(pathname: string, customTitle: string | null): string {
  if (pathname === "/") return "Home";

  const mockMatch = pathname.match(/^\/mock-exams\/([^/]+)(?:\/(take|review))?\/?$/);
  if (mockMatch) {
    const examId = decodeURIComponent(mockMatch[1]);
    const action = mockMatch[2];
    if (isCustomExamId(examId)) {
      const title = customTitle ?? "Custom Mock";
      if (action === "take") return `${title} · Take`;
      if (action === "review") return `${title} · Review`;
      return title;
    }
    const exam = getExamById(examId);
    const base = exam?.title ?? prettify(examId);
    if (action === "take") return `${base} · Take`;
    if (action === "review") return `${base} · Review`;
    return base;
  }

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return "Home";
  return prettify(decodeURIComponent(segments[segments.length - 1]!));
}

function trailToCrumbs(trail: NavTrailEntry[]): Crumb[] {
  const items = trail.filter((e) => e.pathname !== "/");
  if (items.length === 0) return [];
  return withLastFlags(
    items.map((e, i) => ({
      label: e.label,
      to: i === items.length - 1 ? null : e.pathname,
    })),
  );
}

export function Breadcrumbs() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [customTitle, setCustomTitle] = useState<string | null>(null);
  const [trail, setTrail] = useState<NavTrailEntry[]>([]);

  const mockExamMatch = useMemo(() => {
    const m = pathname.match(/^\/mock-exams\/([^/]+)(?:\/(take|review))?\/?$/);
    if (!m) return null;
    return { examId: decodeURIComponent(m[1]), action: m[2] ?? null };
  }, [pathname]);

  const customMockId =
    mockExamMatch && isCustomExamId(mockExamMatch.examId)
      ? parseCustomMockId(mockExamMatch.examId)
      : null;

  useEffect(() => {
    if (!customMockId) {
      setCustomTitle(null);
      return;
    }

    const cached = readCachedCustomMock(customMockId);
    if (cached) {
      setCustomTitle(displayTitleForCustomMock(cached));
      return;
    }

    let cancelled = false;
    void fetchCustomMockById(customMockId).then((row) => {
      if (cancelled || !row) return;
      cacheCustomMock(row);
      setCustomTitle(displayTitleForCustomMock(row));
    });
    return () => {
      cancelled = true;
    };
  }, [customMockId]);

  useEffect(() => {
    const label = labelForPathname(pathname, customTitle);
    recordNavVisit(pathname, label);
    setTrail(getNavTrail());
  }, [pathname, customTitle]);

  const crumbs = useMemo(() => {
    const fromTrail = trailToCrumbs(trail);
    if (fromTrail.length > 0) return fromTrail;
    if (pathname === "/") return [];
    return buildDefaultCrumbs(pathname);
  }, [trail, pathname]);

  const handleCrumbClick = (to: string) => {
    truncateNavTrailTo(to);
    setTrail(getNavTrail());
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border/60 bg-background/70 backdrop-blur"
    >
      <ol className="mx-auto flex w-full max-w-none items-center gap-1.5 overflow-x-auto whitespace-nowrap px-3 py-2 text-xs sm:px-5 lg:px-8 xl:px-10">
        <li className="flex items-center">
          {crumbs.length === 0 ? (
            <span className="inline-flex items-center gap-1 font-medium text-foreground">
              <Home className="h-3.5 w-3.5" />
              Home
            </span>
          ) : (
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => {
                truncateNavTrailTo("/");
                setTrail(getNavTrail());
              }}
            >
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
          )}
        </li>
        {crumbs.map((c, i) => (
          <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
            <ChevronRight
              className="h-3 w-3 text-muted-foreground/60"
              aria-hidden="true"
            />
            {c.isLast || !c.to ? (
              <span
                className={
                  c.isLast
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
                }
                aria-current={c.isLast ? "page" : undefined}
              >
                {c.label}
              </span>
            ) : (
              <Link
                to={c.to}
                className="text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => handleCrumbClick(c.to!)}
              >
                {c.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
