import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type PinnedReview = {
  id: number | string;
  name: string;
  quote: string;
  badge: string;
  fire?: boolean;
};

type Accent = "default" | "wiso";

function PinnedReviewCard({
  report,
  accent,
  badgeExtra,
}: {
  report: PinnedReview;
  accent: Accent;
  badgeExtra?: ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="review-pin group relative flex h-full flex-col hover:z-10">
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-[3px] border px-5 pb-5 pt-8",
          "bg-[color-mix(in_oklab,var(--color-card)_88%,#faf7f1)] dark:bg-[color-mix(in_oklab,var(--color-card)_90%,#2c281f)]",
          "border-border/70",
          "shadow-[0_18px_34px_-22px_rgba(20,18,14,0.55),0_1px_0_rgba(255,255,255,0.55)_inset]",
          "dark:shadow-[0_18px_34px_-22px_rgba(0,0,0,0.65),0_1px_0_rgba(255,255,255,0.06)_inset]",
          "before:pointer-events-none before:absolute before:inset-x-3 before:top-6 before:h-px before:bg-foreground/[0.06]",
          "after:pointer-events-none after:absolute after:inset-y-4 after:left-0 after:w-[3px] after:rounded-r-full",
          accent === "wiso"
            ? "after:bg-indigo-600/60 dark:after:bg-indigo-400/50"
            : "after:bg-caramel-deep/60",
          "review-pin-paper origin-top",
        )}
      >
        <span
          className={cn(
            "pointer-events-none absolute -left-1 top-4 select-none font-display text-6xl leading-none opacity-[0.09]",
            accent === "wiso" ? "text-indigo-800 dark:text-indigo-200" : "text-foreground",
          )}
          aria-hidden
          data-no-i18n
        >
          “
        </span>

        <p
          className={cn(
            "relative text-[0.95rem] leading-[1.65] text-muted-foreground sm:text-base",
            !expanded && "line-clamp-4",
          )}
        >
          {report.quote}
        </p>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className={cn(
            "mt-3 self-start text-xs font-semibold underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            accent === "wiso"
              ? "text-indigo-700 focus-visible:ring-indigo-600 dark:text-indigo-300"
              : "text-primary focus-visible:ring-primary",
          )}
          aria-label={expanded ? "Show less" : "Show more"}
        >
          {expanded ? "Show less" : "Show more"}
        </button>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/60 pt-4">
          <p className="font-display text-sm font-semibold tracking-tight text-foreground">
            {report.name}
          </p>
          <div
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-[2px] border px-2.5 py-1",
              "border-border/90 bg-background/55 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] dark:shadow-none",
            )}
          >
            <span className="font-display text-[11px] font-semibold tracking-wide">{report.badge}</span>
            {badgeExtra}
          </div>
        </div>
      </div>
    </article>
  );
}

export function PinnedReviewsBoard({
  title,
  reports,
  accent = "default",
  badgeExtraFor,
  className,
}: {
  title: string;
  reports: PinnedReview[];
  accent?: Accent;
  badgeExtraFor?: (report: PinnedReview) => ReactNode;
  className?: string;
}) {
  return (
    <section id="reviews" className={cn("relative px-4 py-16 sm:px-6 lg:px-8 lg:py-20", className)}>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-[0.55]",
          "bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.55),transparent_55%)]",
          "dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_55%)]",
        )}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]",
          "[background-image:linear-gradient(to_right,color-mix(in_oklab,var(--color-foreground)_7%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--color-foreground)_7%,transparent)_1px,transparent_1px)]",
          "[background-size:28px_28px]",
          "[mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_78%)]",
        )}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative mb-10 max-w-3xl">
          <p
            className={cn(
              "mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]",
              accent === "wiso" ? "text-indigo-700 dark:text-indigo-300" : "text-caramel-deep",
            )}
          >
            Acceptance notes
          </p>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            {title}
          </h2>
        </div>

        <div className="relative rounded-[4px] border border-border/60 bg-[color-mix(in_oklab,var(--color-muted)_35%,var(--color-card))] p-4 pt-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] sm:p-7 sm:pt-8 dark:bg-[color-mix(in_oklab,var(--color-muted)_25%,var(--color-card))] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div className="grid items-start gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-7">
            {reports.map((report) => (
              <PinnedReviewCard
                key={report.id}
                report={report}
                accent={accent}
                badgeExtra={badgeExtraFor?.(report)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
