import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { BBE_PRACTICE_ROUTES } from "@/config/bbe-exam-hub";
import { cn } from "@/lib/utils";

const PRIMARY_BTN =
  "inline-flex items-center justify-center gap-1.5 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110";
const PRIMARY_STYLE = {
  background: "linear-gradient(135deg, #E85D3A 0%, #D97706 100%)",
  boxShadow: "0 8px 20px -8px rgba(232,93,58,0.55)",
} as const;

const GHOST_BTN =
  "inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary";

export function BbePrimaryButton({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link to={to} className={cn(PRIMARY_BTN, className)} style={PRIMARY_STYLE}>
      {children}
    </Link>
  );
}

export function BbeGhostButton({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link to={to} className={cn(GHOST_BTN, className)}>
      {children}
    </Link>
  );
}

export function BbeTextLink({
  to,
  params,
  children,
  className,
}: {
  to: string;
  params?: Record<string, string>;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      params={params}
      className={cn(
        "inline-flex items-center gap-1.5 text-[0.975rem] font-semibold text-foreground hover:text-primary",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

/** Mid-page contextual CTA toward the free demo and full preparation. */
export function BbeDemoCta({
  title = "Curious what BBE School preparation actually looks like?",
  body = "The free demo course walks you through sample lessons, BBE-style questions, and worked explanations.",
  cta = "Start Free Demo Course →",
}: {
  title?: string;
  body?: string;
  cta?: string;
}) {
  return (
    <aside className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7">
      <h3 className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
        {title}
      </h3>
      <p className="mt-2 text-[1.0625rem] leading-relaxed text-neutral-800 sm:text-[1.125rem]">
        {body}
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <BbePrimaryButton to={BBE_PRACTICE_ROUTES.demo}>{cta}</BbePrimaryButton>
        <BbeGhostButton to={BBE_PRACTICE_ROUTES.products}>
          Explore Full Preparation →
        </BbeGhostButton>
      </div>
    </aside>
  );
}

export function BbeInfoCallout({
  label,
  children,
  tone = "neutral",
}: {
  label: string;
  children: ReactNode;
  tone?: "neutral" | "official" | "advice";
}) {
  const toneClass =
    tone === "official"
      ? "border-sky-200 bg-sky-50/80"
      : tone === "advice"
        ? "border-amber-200 bg-amber-50/70"
        : "border-border bg-secondary/40";

  return (
    <aside className={cn("rounded-xl border px-4 py-3 sm:px-5 sm:py-4", toneClass)}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
        {label}
      </p>
      <div className="mt-2 text-[1.0625rem] leading-relaxed text-neutral-800 sm:text-[1.125rem]">
        {children}
      </div>
    </aside>
  );
}
