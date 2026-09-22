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

const TILTS = [-1.55, 1.25, -0.7, 1.6, -1.15, 0.9] as const;
const LIFTS = [0, 10, 4, 14, 2, 8] as const;

function BinderClip({ accent }: { accent: Accent }) {
  const body = accent === "wiso" ? "#4a5680" : "#5c574e";
  const arm = accent === "wiso" ? "#6d79a3" : "#7a756b";
  const shine = accent === "wiso" ? "#c5cce0" : "#d2cec4";
  return (
    <svg
      viewBox="0 0 48 58"
      className="pointer-events-none h-12 w-10 drop-shadow-[0_2px_3px_rgba(0,0,0,0.28)]"
      aria-hidden
    >
      {/* spring loop */}
      <path
        d="M16 22 V12.5 C16 7.5 20 3.8 24.8 3.8 C29.6 3.8 33.6 7.5 33.6 12.5 V22"
        fill="none"
        stroke={arm}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      {/* clip jaws */}
      <path
        d="M10 20.5 H38 C40.2 20.5 41.8 22.4 41.5 24.5 L39.2 42.5 C38.9 45.1 36.7 47 34 47 H14 C11.3 47 9.1 45.1 8.8 42.5 L6.5 24.5 C6.2 22.4 7.8 20.5 10 20.5 Z"
        fill={body}
      />
      <path
        d="M12.2 24 H35.8 C36.9 24 37.7 25 37.5 26.1 L35.8 39.4 C35.6 40.7 34.5 41.6 33.2 41.6 H14.8 C13.5 41.6 12.4 40.7 12.2 39.4 L10.5 26.1 C10.3 25 11.1 24 12.2 24 Z"
        fill={shine}
        opacity="0.22"
      />
      {/* handle ridge */}
      <rect x="18" y="27.5" width="12" height="3.2" rx="1.2" fill={shine} opacity="0.55" />
      <rect x="20" y="33" width="8" height="5.5" rx="1" fill={shine} opacity="0.2" />
    </svg>
  );
}

function PinnedReviewCard({
  report,
  index,
  accent,
  badgeExtra,
}: {
  report: PinnedReview;
  index: number;
  accent: Accent;
  badgeExtra?: ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const tilt = TILTS[index % TILTS.length];
  const lift = LIFTS[index % LIFTS.length];

  return (
    <article
      className={cn(
        "review-pin group relative flex h-full flex-col pt-8",
        "hover:z-10",
      )}
      style={{
        ["--review-tilt" as string]: `${tilt}deg`,
        marginTop: lift,
      }}
    >
      <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 transition-transform duration-500 group-hover:-translate-y-0.5">
        <BinderClip accent={accent} />
      </div>

      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-[3px] border px-5 pb-5 pt-9",
          "bg-[color-mix(in_oklab,var(--color-card)_88%,#faf7f1)] dark:bg-[color-mix(in_oklab,var(--color-card)_90%,#2c281f)]",
          "border-border/70",
          "shadow-[0_18px_34px_-22px_rgba(20,18,14,0.55),0_1px_0_rgba(255,255,255,0.55)_inset]",
          "dark:shadow-[0_18px_34px_-22px_rgba(0,0,0,0.65),0_1px_0_rgba(255,255,255,0.06)_inset]",
          "before:pointer-events-none before:absolute before:inset-x-3 before:top-[3.25rem] before:h-px before:bg-foreground/[0.06]",
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

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-border/60 pt-4">
          <div>
            <p className="font-display text-sm font-semibold tracking-tight text-foreground">
              {report.name}
            </p>
            <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground/80">
              Field note
            </p>
          </div>
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
    <section id="reviews" className={cn("relative px-6 py-16 lg:px-8 lg:py-20", className)}>
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
        <div className="relative mb-10 max-w-3xl sm:mb-12">
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

        <div className="relative rounded-[4px] border border-border/60 bg-[color-mix(in_oklab,var(--color-muted)_35%,var(--color-card))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] sm:p-7 dark:bg-[color-mix(in_oklab,var(--color-muted)_25%,var(--color-card))] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div
            className={cn(
              "pointer-events-none absolute left-6 right-6 top-[1.65rem] hidden h-px sm:block",
              accent === "wiso"
                ? "bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
                : "bg-gradient-to-r from-transparent via-foreground/30 to-transparent",
            )}
            aria-hidden
          />

          <div className="grid items-start gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-7">
            {reports.map((report, index) => (
              <PinnedReviewCard
                key={report.id}
                report={report}
                index={index}
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
