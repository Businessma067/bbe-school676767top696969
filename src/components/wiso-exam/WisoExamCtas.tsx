import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { LocalizedLink } from "@/components/LocalizedLink";
import { WISO_PRACTICE_ROUTES } from "@/config/wiso-exam-hub";
import { isLocalizablePath } from "@/lib/i18n/locale-path";
import { cn } from "@/lib/utils";

const PRIMARY_BTN =
  "inline-flex items-center justify-center gap-1.5 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110";
const PRIMARY_STYLE = {
  background: "linear-gradient(135deg, #0F766E 0%, #0D9488 100%)",
  boxShadow: "0 8px 20px -8px rgba(15,118,110,0.55)",
} as const;

const GHOST_BTN =
  "inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary";

function ExamHubLink({
  to,
  params,
  className,
  style,
  children,
}: {
  to: string;
  params?: Record<string, string>;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  if (!params && isLocalizablePath(to)) {
    return (
      <LocalizedLink to={to} className={className} style={style}>
        {children}
      </LocalizedLink>
    );
  }
  return (
    <Link to={to} params={params} className={className} style={style}>
      {children}
    </Link>
  );
}

export function WisoPrimaryButton({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <ExamHubLink to={to} className={cn(PRIMARY_BTN, className)} style={PRIMARY_STYLE}>
      {children}
    </ExamHubLink>
  );
}

export function WisoGhostButton({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <ExamHubLink to={to} className={cn(GHOST_BTN, className)}>
      {children}
    </ExamHubLink>
  );
}

export function WisoTextLink({
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
    <ExamHubLink
      to={to}
      params={params}
      className={cn(
        "inline-flex items-center gap-1 text-sm font-semibold text-teal-800 underline-offset-4 hover:underline dark:text-teal-300",
        className,
      )}
    >
      {children}
    </ExamHubLink>
  );
}

export function WisoInfoCallout({
  label,
  tone = "note",
  children,
}: {
  label: string;
  tone?: "official" | "note";
  children: ReactNode;
}) {
  return (
    <aside
      className={cn(
        "rounded-2xl border px-5 py-4",
        tone === "official"
          ? "border-teal-300/70 bg-teal-50/60 dark:border-teal-800/50 dark:bg-teal-950/30"
          : "border-border bg-secondary/40",
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <div className="mt-2 text-[0.98rem] leading-relaxed text-foreground">{children}</div>
    </aside>
  );
}

export function WisoDemoCta({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-between gap-4 rounded-2xl border border-teal-200/70 bg-gradient-to-br from-teal-50/80 to-card p-6 sm:flex-row sm:items-center dark:border-teal-800/40 dark:from-teal-950/40",
        className,
      )}
    >
      <div>
        <p className="font-display text-lg font-bold text-foreground">Try WiSo prep when it opens</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Demo practice, mocks, and flashcards for WiSo are on dedicated URLs — coming next.
        </p>
      </div>
      <WisoPrimaryButton to={WISO_PRACTICE_ROUTES.demo}>
        Open WiSo demo
        <ArrowRight className="h-4 w-4" />
      </WisoPrimaryButton>
    </div>
  );
}
