import { Link, useRouterState } from "@tanstack/react-router";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";
import { cn } from "@/lib/utils";

const MODES = [
  { label: "Flashcards", to: "/flashcards", prefix: "/flashcards" },
  { label: "Matching", to: "/matching", prefix: "/matching" },
  { label: "Tutor Exam", to: "/tutor-exam", prefix: "/tutor-exam" },
] as const;

/**
 * Direct mode switcher for study tools — never routes through the dashboard hub.
 */
export function StudyToolsModeNav({ className }: { className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const path = stripLocalePrefix(pathname);

  return (
    <nav
      aria-label="Study tools"
      className={cn(
        "flex flex-wrap items-center justify-center gap-1 rounded-xl border border-border bg-card p-1",
        className,
      )}
    >
      {MODES.map((mode) => {
        const active = path === mode.prefix || path.startsWith(`${mode.prefix}/`);
        return (
          <Link
            key={mode.to}
            to={mode.to}
            className={cn(
              "rounded-lg px-3 py-2 text-xs font-semibold transition-colors sm:px-4 sm:text-sm",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
            )}
            aria-current={active ? "page" : undefined}
          >
            {mode.label}
          </Link>
        );
      })}
    </nav>
  );
}
