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

const LABELS: Record<string, string> = {
  "demo-practice": "Demo-Practice",
  bbe: "BBE",
  faq: "FAQ",
  api: "API",
  products: "Products",
  "custom-mock-builder": "Custom Mock Builder",
  "full-course-economics": "Full Course Economics",
  "full-course-subjects": "Full Course",
  "mock-exams": "Mock Exams",
};

function prettify(segment: string): string {
  if (LABELS[segment]) return LABELS[segment];
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

function buildDefaultCrumbs(pathname: string): Crumb[] {
  const segments = pathname.split("/").filter(Boolean);
  return segments.map((seg, i) => ({
    label: prettify(decodeURIComponent(seg)),
    to: "/" + segments.slice(0, i + 1).join("/"),
    isLast: i === segments.length - 1,
  }));
}

/** `/mock-exams/custom-…/take|review` → Custom Mock Builder trail. */
function buildCustomMockCrumbs(
  pathname: string,
  examId: string,
  title: string | null,
): Crumb[] {
  const action = pathname.endsWith("/review")
    ? "Review"
    : pathname.endsWith("/take")
      ? "Take"
      : null;
  const mockLabel = title ?? "Custom Mock";
  const crumbs: Crumb[] = [
    {
      label: "Custom Mock Builder",
      to: "/products/custom-mock-builder",
      isLast: false,
    },
    {
      label: mockLabel,
      to: action ? `/mock-exams/${examId}/take` : null,
      isLast: !action,
    },
  ];
  if (action) {
    crumbs.push({ label: action, to: null, isLast: true });
  }
  return crumbs;
}

function buildCatalogMockCrumbs(pathname: string, examId: string): Crumb[] {
  const action = pathname.endsWith("/review")
    ? "Review"
    : pathname.endsWith("/take")
      ? "Take"
      : null;
  const exam = getExamById(examId);
  const crumbs: Crumb[] = [
    { label: "Mock Exams", to: "/mock-exams", isLast: false },
    {
      label: exam?.title ?? prettify(examId),
      to: action ? `/mock-exams/${examId}/take` : null,
      isLast: !action,
    },
  ];
  if (action) {
    crumbs.push({ label: action, to: null, isLast: true });
  }
  return crumbs;
}

export function Breadcrumbs() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [customTitle, setCustomTitle] = useState<string | null>(null);

  const mockExamMatch = useMemo(() => {
    const m = pathname.match(/^\/mock-exams\/([^/]+)(?:\/(take|review))?\/?$/);
    if (!m) return null;
    return { examId: decodeURIComponent(m[1]), action: m[2] ?? null };
  }, [pathname]);

  const customMockId = mockExamMatch && isCustomExamId(mockExamMatch.examId)
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

  const crumbs = useMemo(() => {
    if (mockExamMatch && isCustomExamId(mockExamMatch.examId)) {
      return buildCustomMockCrumbs(
        pathname,
        mockExamMatch.examId,
        customTitle,
      );
    }
    if (mockExamMatch) {
      return buildCatalogMockCrumbs(pathname, mockExamMatch.examId);
    }
    return buildDefaultCrumbs(pathname);
  }, [pathname, mockExamMatch, customTitle]);

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border/60 bg-background/70 backdrop-blur"
    >
      <ol className="mx-auto flex max-w-7xl items-center gap-1.5 overflow-x-auto whitespace-nowrap px-6 py-2 text-xs lg:px-8">
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
