import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

/** Next BBE entrance exam — 30 June 2027, 15:00–17:00 CEST (Vienna). */
const EXAM_AT = new Date("2027-06-30T15:00:00+02:00");

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

function getRemaining(now: Date): Remaining {
  const ms = EXAM_AT.getTime() - now.getTime();
  if (ms <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }
  const totalSec = Math.floor(ms / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { days, hours, minutes, seconds, done: false };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function formatUnit(value: number | null, padded?: boolean) {
  if (value === null) return "––";
  return padded ? pad(value) : String(value);
}

export function ExamCountdown({ className }: { className?: string }) {
  // Live clock starts after hydration so SSR and the first client paint match.
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    setRemaining(getRemaining(new Date()));
    const id = window.setInterval(() => {
      setRemaining(getRemaining(new Date()));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const done = remaining?.done ?? false;
  const units: { value: number | null; label: string; padded?: boolean }[] = [
    { value: remaining?.days ?? null, label: "days" },
    { value: remaining?.hours ?? null, label: "hours", padded: true },
    { value: remaining?.minutes ?? null, label: "min", padded: true },
    { value: remaining?.seconds ?? null, label: "sec", padded: true },
  ];

  return (
    <div
      className={cn("flex flex-col items-center gap-2", className)}
      role="timer"
      aria-live="polite"
      aria-label={
        !remaining
          ? "Countdown to the 2027 BBE exam"
          : remaining.done
            ? "Exam day has arrived"
            : `Countdown to the 2027 BBE exam: ${remaining.days} days, ${remaining.hours} hours, ${remaining.minutes} minutes, ${remaining.seconds} seconds`
      }
    >
      <p className="text-[11px] font-medium tracking-wide text-taupe sm:text-xs">
        {done ? "Exam day" : "Until the 2027 BBE exam · 30 June, 15:00 CEST"}
      </p>
      <div className="flex items-stretch gap-2 sm:gap-3">
        {units.map((u, i) => (
          <div key={u.label} className="flex items-stretch gap-2 sm:gap-3">
            {i > 0 && (
              <span
                className="self-start pt-1 font-display text-xl font-semibold text-foreground/25 sm:pt-1.5 sm:text-2xl"
                aria-hidden
              >
                :
              </span>
            )}
            <div className="min-w-[3.25rem] rounded-sm border border-border bg-card px-2.5 py-2 text-center sm:min-w-[4rem] sm:px-3 sm:py-2.5">
              <div className="font-display text-xl font-semibold tabular-nums leading-none text-foreground sm:text-2xl">
                {formatUnit(u.value, u.padded)}
              </div>
              <div className="mt-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                {u.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
