import { Link, useRouterState } from "@tanstack/react-router";
import { Home, ChevronRight } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import {
  buildHierarchyCrumbs,
  normalizePathname,
  trailToCrumbs,
} from "@/lib/breadcrumbs";
import { getNavTrail, truncateNavTrailTo } from "@/lib/navigation-trail";
import { NavigationTrailRecorder } from "@/components/NavigationTrailRecorder";

export function Breadcrumbs() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [trailVersion, setTrailVersion] = useState(0);

  const bumpTrail = useCallback(() => {
    setTrailVersion((v) => v + 1);
  }, []);

  const crumbs = useMemo(() => {
    void trailVersion;
    const trail = getNavTrail();
    const fromTrail = trailToCrumbs(trail);
    if (fromTrail.length > 0) return fromTrail;

    const path = normalizePathname(pathname);
    if (path === "/") return [];
    return buildHierarchyCrumbs(path);
  }, [pathname, trailVersion]);

  const handleCrumbClick = (to: string) => {
    truncateNavTrailTo(to);
    bumpTrail();
  };

  return (
    <>
      <NavigationTrailRecorder onTrailChange={bumpTrail} />
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
                  bumpTrail();
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
    </>
  );
}
