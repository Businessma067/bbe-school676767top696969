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
import { buildBreadcrumbs } from "@/lib/breadcrumbs";

export function Breadcrumbs() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [customTitle, setCustomTitle] = useState<string | null>(null);

  const customMockId = useMemo(() => {
    const m = pathname.match(/^\/mock-exams\/([^/]+)(?:\/(?:take|review))?\/?$/);
    if (!m || !isCustomExamId(m[1]!)) return null;
    return parseCustomMockId(decodeURIComponent(m[1]!));
  }, [pathname]);

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

  const crumbs = useMemo(
    () => buildBreadcrumbs(pathname, { customMockTitle: customTitle }),
    [pathname, customTitle],
  );

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
