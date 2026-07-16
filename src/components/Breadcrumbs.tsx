import { Link, useRouterState } from "@tanstack/react-router";
import { Home, ChevronRight } from "lucide-react";

const LABELS: Record<string, string> = {
  "demo-practice": "Demo-Practice",
  "bbe": "BBE",
  "faq": "FAQ",
  "api": "API",
};

function prettify(segment: string): string {
  if (LABELS[segment]) return LABELS[segment];
  return segment
    .split("-")
    .map((w) => (w.length === 0 ? w : w[0].toUpperCase() + w.slice(1)))
    .join(" ");
}

export function Breadcrumbs() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((seg, i) => ({
    label: prettify(decodeURIComponent(seg)),
    to: "/" + segments.slice(0, i + 1).join("/"),
    isLast: i === segments.length - 1,
  }));

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
        {crumbs.map((c) => (
          <li key={c.to} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3 text-muted-foreground/60" aria-hidden="true" />
            {c.isLast ? (
              <span className="font-medium text-foreground" aria-current="page">
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
