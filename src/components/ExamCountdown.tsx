import { useSyncExternalStore } from "react";
import { ScriptOnce } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

/** Next BBE entrance exam — 30 June 2027, 15:00 CEST (Vienna). */
export const EXAM_AT_MS = new Date("2027-06-30T15:00:00+02:00").getTime();

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

export function getRemaining(nowMs: number = Date.now()): Remaining {
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

/** Subscribe to wall-clock seconds (React 19–safe live clock). */
function subscribeToSeconds(onChange: () => void) {
  // Align to the next whole second, then tick every second.
  let intervalId = 0;
  const delay = 1000 - (Date.now() % 1000);
  const timeoutId = window.setTimeout(() => {
    onChange();
    intervalId = window.setInterval(onChange, 1000);
  }, delay);
  return () => {
    window.clearTimeout(timeoutId);
    window.clearInterval(intervalId);
  };
}

function getSecondsSnapshot() {
  return Math.floor(Date.now() / 1000);
}

/** Stable SSR snapshot — avoids hydration mismatch; client takes over immediately. */
function getServerSecondsSnapshot() {
  return Math.floor(EXAM_AT_MS / 1000) - 1;
}

/**
 * Vanilla bootstrap that runs from the SSR HTML even before React hydrates.
 * Directly writes into [data-exam-unit] nodes so seconds visibly tick on the live site.
 */
const LIVE_TICK_SCRIPT = `(function(){
  var root=document.querySelector("[data-exam-countdown]");
  if(!root||root.getAttribute("data-exam-live")==="1")return;
  root.setAttribute("data-exam-live","1");
  var at=Number(root.getAttribute("data-exam-at")||"0");
  function pad(n){return String(n).padStart(2,"0");}
  function tick(){
    var ms=at-Date.now();
    if(ms<0)ms=0;
    var s=Math.floor(ms/1000);
    var map={
      days:String(Math.floor(s/86400)),
      hours:pad(Math.floor((s%86400)/3600)),
      min:pad(Math.floor((s%3600)/60)),
      sec:pad(s%60)
    };
    var nodes=root.querySelectorAll("[data-exam-unit]");
    for(var i=0;i<nodes.length;i++){
      var el=nodes[i];
      var key=el.getAttribute("data-exam-unit");
      if(key&&map[key]!=null)el.textContent=map[key];
    }
  }
  tick();
  setInterval(tick,1000);
})();`;

export function ExamCountdown({ className }: { className?: string }) {
  // Live second counter via useSyncExternalStore (correct SSR/client subscription).
  const nowSec = useSyncExternalStore(
    subscribeToSeconds,
    getSecondsSnapshot,
    getServerSecondsSnapshot,
  );
  const remaining = getRemaining(nowSec * 1000);

  const units: { key: "days" | "hours" | "min" | "sec"; value: string; label: string }[] = [
    { key: "days", value: String(remaining.days), label: "days" },
    { key: "hours", value: pad(remaining.hours), label: "hours" },
    { key: "min", value: pad(remaining.minutes), label: "min" },
    { key: "sec", value: pad(remaining.seconds), label: "sec" },
  ];

  return (
    <>
      <div
        className={cn("flex flex-col items-center gap-2", className)}
        role="timer"
        aria-live="off"
        data-exam-countdown=""
        data-exam-at={String(EXAM_AT_MS)}
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
            <div key={u.key} className="flex items-stretch gap-2 sm:gap-3">
              {i > 0 && (
                <span
                  className="self-start pt-1 font-display text-xl font-semibold text-foreground/25 sm:pt-1.5 sm:text-2xl"
                  aria-hidden
                >
                  :
                </span>
              )}
              <div className="min-w-[3.25rem] rounded-sm border border-border bg-card px-2.5 py-2 text-center sm:min-w-[4rem] sm:px-3 sm:py-2.5">
                <div
                  data-exam-unit={u.key}
                  className="font-display text-xl font-semibold tabular-nums leading-none text-foreground sm:text-2xl"
                >
                  {u.value}
                </div>
                <div className="mt-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  {u.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Imperative tick in the SSR HTML — works even if React hydration is delayed. */}
      <ScriptOnce>{LIVE_TICK_SCRIPT}</ScriptOnce>
    </>
  );
}
