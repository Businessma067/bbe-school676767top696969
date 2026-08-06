import { useEffect, useState } from "react";
import { Timer } from "lucide-react";
import { cn } from "@/lib/utils";

export const TIMER_WARNING_THRESHOLDS = [
  { seconds: 60 * 60, minutes: 60, tone: "info" as const },
  { seconds: 30 * 60, minutes: 30, tone: "info" as const },
  { seconds: 15 * 60, minutes: 15, tone: "warn" as const },
  { seconds: 10 * 60, minutes: 10, tone: "warn" as const },
  { seconds: 5 * 60, minutes: 5, tone: "critical" as const },
] as const;

type Tone = (typeof TIMER_WARNING_THRESHOLDS)[number]["tone"];

type ActiveWarning = {
  minutes: number;
  tone: Tone;
  id: number;
};

/** Each plaque stays visible for exactly 5 seconds. */
const DISPLAY_MS = 5000;

const TONE_STYLES: Record<
  Tone,
  { shell: string; iconWell: string; text: string }
> = {
  info: {
    shell: "border-[#e8dfc8] bg-[#fffaf0]",
    iconWell: "bg-[#f3ead7] text-[#5c4f3a]",
    text: "text-[#2f2920]",
  },
  warn: {
    shell: "border-[#f0d9a8] bg-[#fff8e8]",
    iconWell: "bg-[#f6e6c4] text-[#8a6a28]",
    text: "text-[#3d3018]",
  },
  critical: {
    shell: "border-[#f0c4b0] bg-[#fff1ea]",
    iconWell: "bg-[#f8d9cc] text-[#a04528]",
    text: "text-[#4a2010]",
  },
};

/** Marks thresholds already strictly under current time so resume doesn't re-fire them. */
export function seedFiredTimerWarnings(secondsLeft: number): Set<number> {
  return new Set(
    TIMER_WARNING_THRESHOLDS.filter((t) => secondsLeft < t.seconds).map((t) => t.seconds),
  );
}

type Props = {
  secondsLeft: number | null;
  timed: boolean;
  firedRef: React.MutableRefObject<Set<number>>;
};

/**
 * Cream plaque: "N minutes remaining" — catalog + custom timed mocks.
 * Visible 5 seconds, then slides out.
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
    const t = newly[newly.length - 1];
    setActive({ minutes: t.minutes, tone: t.tone, id: t.seconds });
    setVisible(true);
    const hide = window.setTimeout(() => setVisible(false), DISPLAY_MS);
    const clear = window.setTimeout(() => setActive(null), DISPLAY_MS + 400);
    return () => {
      window.clearTimeout(hide);
      window.clearTimeout(clear);
    };
  }, [secondsLeft, timed, firedRef]);

  if (!active) return null;

  const tone = TONE_STYLES[active.tone];

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-16 z-[60] flex justify-center px-4 sm:top-20"
      role="status"
      aria-live="polite"
    >
      <div
        className={cn(
          "flex items-center gap-3 rounded-2xl border px-5 py-3.5 shadow-sm transition-all duration-300 ease-out",
          tone.shell,
          visible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0",
        )}
      >
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
            tone.iconWell,
          )}
        >
          <Timer className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <p className={cn("font-display text-base font-bold tracking-tight", tone.text)}>
          {active.minutes} minutes remaining
        </p>
      </div>
    </div>
  );
}
