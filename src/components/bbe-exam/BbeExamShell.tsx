import type { ReactNode } from "react";
import { Clock } from "lucide-react";
import wuAsset from "@/assets/wu-vienna.jpg.asset.json";
import { SiteHeader } from "@/components/SiteHeader";
import { BbeExamSubnav } from "@/components/bbe-exam/BbeExamSubnav";
import { BBE_EXAM_FORMAT } from "@/config/bbe-exam-hub";
import { cn } from "@/lib/utils";

type BbeExamShellProps = {
  /** Optional JSON-LD script content already stringified. */
  jsonLd?: object;
  h1: string;
  lead: string;
  badges?: string[];
  heroActions?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function BbeExamShell({
  jsonLd,
  h1,
  lead,
  badges = [
    "Independent, unofficial guide — not affiliated with WU Vienna",
    `Last updated: ${BBE_EXAM_FORMAT.cycle.lastUpdated}`,
  ],
  heroActions,
  children,
  className,
}: BbeExamShellProps) {
  return (
    <div className={cn("min-h-screen bg-background font-sans text-foreground antialiased", className)}>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <SiteHeader />
      <BbeExamSubnav />

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.72), rgba(0,0,0,0.86)), url(${wuAsset.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur"
              >
                {badge}
              </span>
            ))}
          </div>
          <h1 className="mt-6 font-display text-[1.75rem] font-bold leading-[1.12] tracking-tight text-white sm:text-4xl sm:leading-[1.1] lg:text-[2.75rem]">
            {h1}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">{lead}</p>
          {heroActions ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{heroActions}</div> : null}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">{children}</div>

      <footer className="border-t border-border bg-card px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Independent preparation guide. Not affiliated with WU Vienna. Dates and rules can change —
            always confirm details on the official WU website.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            Last updated {BBE_EXAM_FORMAT.cycle.lastUpdated}
          </div>
        </div>
      </footer>
    </div>
  );
}

export function BbeSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn(id && "scroll-mt-28")}>
      <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export function BbeStatGrid({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-border bg-card px-4 py-4 shadow-sm"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {item.label}
          </p>
          <p className="mt-2 font-display text-xl font-bold tracking-tight text-foreground">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
