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

const TILTS = [-1.35, 1.1, -0.55, 1.45, -1.0, 0.75] as const;

function BinderClip({ accent }: { accent: Accent }) {
  const steel = accent === "wiso" ? "#5b6b9a" : "#7a7468";
  const steelDark = accent === "wiso" ? "#3d4a72" : "#4f4a42";
  const highlight = accent === "wiso" ? "#9aa6c9" : "#b8b2a6";
  return (
    <svg
      viewBox="0 0 40 52"
      className="pointer-events-none h-11 w-8 drop-shadow-sm"
      aria-hidden
    >
      <path
        d="M12 18.5V10.2c0-4.2 3.4-7.6 7.6-7.6h0.8c4.2 0 7.6 3.4 7.6 7.6V18.5"
        fill="none"
        stroke={steel}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <rect x="8" y="16" width="24" height="28" rx="3.5" fill={steel} />
      <rect x="10.5" y="18.5" width="19" height="23" rx="2.2" fill={steelDark} />
      <rect x="12.5" y="20.5" width="15" height="4" rx="1" fill={highlight} opacity="0.55" />
      <rect x="14" y="28" width="12" height="10" rx="1.2" fill={highlight} opacity="0.18" />
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

  return (
    <article
      className={cn(
        "review-pin group relative flex h-full flex-col pt-7",
        "hover:z-10",
      )}
      style={{ ["--review-tilt" as string]: `${tilt}deg` }}
    >
      <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 transition-transform duration-500 group-hover:-translate-y-0.5">
        <BinderClip accent={accent} />
      </div>

      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-sm border px-5 pb-5 pt-8 shadow-[0_14px_28px_-18px_rgba(20,18,14,0.45)]",
          "bg-[color-mix(in_oklab,var(--color-card)_92%,#f7f4ee)] dark:bg-[color-mix(in_oklab,var(--color-card)_88%,#2a2620)]",
          "border-border/80",
          "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/40 dark:before:bg-white/10",
          "after:pointer-events-none after:absolute after:inset-y-3 after:left-0 after:w-[3px] after:rounded-r-full",
          accent === "wiso"
            ? "after:bg-indigo-600/55 dark:after:bg-indigo-400/45"
            : "after:bg-caramel-deep/55",
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
        <div className="mb-12 max-w-3xl">
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

        <div className="relative rounded-sm border border-border/70 bg-[color-mix(in_oklab,var(--color-background)_70%,var(--color-card))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] sm:p-6 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div
            className={cn(
              "mb-5 hidden h-px sm:block",
              accent === "wiso"
                ? "bg-gradient-to-r from-transparent via-indigo-500/45 to-transparent"
                : "bg-gradient-to-r from-transparent via-foreground/25 to-transparent",
            )}
            aria-hidden
          />

          <div className="grid items-start gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
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
