import { useEffect, useState } from "react";
import { Timer } from "lucide-react";
import { cn } from "@/lib/utils";

export const TIMER_WARNING_THRESHOLDS = [
  { seconds: 60 * 60, label: "1 hour", tone: "info" as const },
  { seconds: 30 * 60, label: "30 minutes", tone: "info" as const },
  { seconds: 15 * 60, label: "15 minutes", tone: "warn" as const },
  { seconds: 10 * 60, label: "10 minutes", tone: "warn" as const },
  { seconds: 5 * 60, label: "5 minutes", tone: "critical" as const },
] as const;

type Tone = (typeof TIMER_WARNING_THRESHOLDS)[number]["tone"];

type ActiveWarning = {
  label: string;
  tone: Tone;
  id: number;
};

const DISPLAY_MS = 5000;

const TONE_STYLES: Record<Tone, string> = {
  info: "border-border bg-card text-foreground shadow-lg",
  warn: "border-amber-500/40 bg-amber-50 text-amber-950 shadow-lg dark:bg-amber-950/90 dark:text-amber-50",
  critical:
    "border-red-500/50 bg-red-50 text-red-950 shadow-lg dark:bg-red-950/90 dark:text-red-50",
};

/** Marks thresholds already at/under current time so resume doesn't re-fire them. */
export function seedFiredTimerWarnings(secondsLeft: number): Set<number> {
  return new Set(
    TIMER_WARNING_THRESHOLDS.filter((t) => secondsLeft <= t.seconds).map((t) => t.seconds),
  );
}

type Props = {
  secondsLeft: number | null;
  timed: boolean;
  firedRef: React.MutableRefObject<Set<number>>;
};

/**
 * Slides in a short plaque when remaining time crosses 1h / 30m / 15m / 10m / 5m.
 * Visible for 5 seconds, then slides out.
 */
export function TimerWarningPlaque({ secondsLeft, timed, firedRef }: Props) {
  const [active, setActive] = useState<ActiveWarning | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!timed || secondsLeft == null) return;

    const newly = TIMER_WARNING_THRESHOLDS.filter(
      (t) => secondsLeft <= t.seconds && !firedRef.current.has(t.seconds),
    );
    if (newly.length === 0) return;

    for (const t of newly) firedRef.current.add(t.seconds);
    // Most urgent among crossed (thresholds ordered high → low)
    const t = newly[newly.length - 1];
    setActive({ label: t.label, tone: t.tone, id: t.seconds });
    setVisible(true);
    const hide = window.setTimeout(() => setVisible(false), DISPLAY_MS);
    const clear = window.setTimeout(() => setActive(null), DISPLAY_MS + 400);
    return () => {
      window.clearTimeout(hide);
      window.clearTimeout(clear);
    };
  }, [secondsLeft, timed, firedRef]);

  if (!active) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-16 z-[60] flex justify-center px-4 sm:top-20"
      role="status"
      aria-live="polite"
    >
      <div
        className={cn(
          "flex max-w-md items-center gap-3 rounded-2xl border px-5 py-4 transition-all duration-300 ease-out",
          TONE_STYLES[active.tone],
          visible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0",
        )}
      >
        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
            active.tone === "critical" && "bg-red-500/15",
            active.tone === "warn" && "bg-amber-500/15",
            active.tone === "info" && "bg-secondary",
          )}
        >
          <Timer className="h-5 w-5" />
        </span>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-70">
            Time remaining
          </div>
          <div className="font-display text-lg font-bold leading-tight">
            {active.label} left
          </div>
          <p className="mt-0.5 text-xs opacity-80">
            Keep working — the exam will submit automatically when time runs out.
          </p>
        </div>
      </div>
    </div>
  );
}
