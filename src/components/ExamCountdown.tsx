import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

/** Next BBE entrance exam — 30 June 2027, 15:00 CEST (Vienna). */
const EXAM_AT_MS = new Date("2027-06-30T15:00:00+02:00").getTime();

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

function getRemaining(nowMs: number): Remaining {
  const ms = EXAM_AT_MS - nowMs;
  if (ms <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }
  const totalSec = Math.floor(ms / 1000);
  return {
    days: Math.floor(totalSec / 86400),
    hours: Math.floor((totalSec % 86400) / 3600),
    minutes: Math.floor((totalSec % 3600) / 60),
    seconds: totalSec % 60,
    done: false,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/**
 * Live countdown that ticks every second on the client.
 * Seeds with a real value immediately (no empty placeholders), then
 * resyncs on mount and on each wall-clock second.
 */
export function ExamCountdown({ className }: { className?: string }) {
  const [remaining, setRemaining] = useState<Remaining>(() =>
    getRemaining(Date.now()),
  );

  useEffect(() => {
    let intervalId = 0;
    let timeoutId = 0;

    const tick = () => setRemaining(getRemaining(Date.now()));

    // Paint the correct client time immediately (SSR seed may be stale).
    tick();

    // Align the interval to the next whole second so the display feels live.
    const msToNextSecond = 1000 - (Date.now() % 1000);
    timeoutId = window.setTimeout(() => {
      tick();
      intervalId = window.setInterval(tick, 1000);
    }, msToNextSecond);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, []);

  const units: { value: number; label: string; padded?: boolean }[] = [
    { value: remaining.days, label: "days" },
    { value: remaining.hours, label: "hours", padded: true },
    { value: remaining.minutes, label: "min", padded: true },
    { value: remaining.seconds, label: "sec", padded: true },
  ];

  return (
    <div
      className={cn("flex flex-col items-center gap-2", className)}
      role="timer"
      aria-live="off"
      aria-label={
        remaining.done
          ? "Exam day has arrived"
          : `Countdown to the 2027 BBE exam: ${remaining.days} days, ${remaining.hours} hours, ${remaining.minutes} minutes, ${remaining.seconds} seconds`
      }
    >
      <p className="text-[11px] font-medium tracking-wide text-taupe sm:text-xs">
        {remaining.done ? "Exam day" : "Until the 2027 BBE exam · 30 June"}
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
                {u.padded ? pad(u.value) : u.value}
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
