import { Link, useRouterState } from "@tanstack/react-router";
import { BBE_EXAM_SUBNAV } from "@/config/bbe-exam-hub";
import { cn } from "@/lib/utils";

export function BbeExamSubnav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      aria-label="BBE Exam sections"
      className="border-b border-border/70 bg-background/90 backdrop-blur"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="pt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:pt-3.5">
          BBE Exam
        </p>
        <ul className="-mx-1 flex gap-1 overflow-x-auto pb-3 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {BBE_EXAM_SUBNAV.map((item) => {
            const active =
              pathname === item.href ||
              (item.href === "/bbe-entrance-exam" &&
                pathname === "/bbe-entrance-exam-guide");
            return (
              <li key={item.href} className="shrink-0">
                <Link
                  to={item.href}
                  className={cn(
                    "inline-flex items-center rounded-md px-2.5 py-1.5 text-sm transition-colors",
                    active
                      ? "bg-secondary font-semibold text-foreground"
                      : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="sm:hidden">{item.shortLabel}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
