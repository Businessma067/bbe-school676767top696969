import { useEffect, useState } from "react";
import { ClientOnly, ScriptOnce } from "@tanstack/react-router";

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

function getRemaining(nowMs: number = Date.now()): Remaining {
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

/** Stable SSR placeholder — must NOT call Date.now() or hydration #418 freezes the tree. */
const PLACEHOLDER: Remaining = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  done: false,
};

function CountdownView({
  remaining,
  className,
  placeholder = false,
}: {
  remaining: Remaining;
  className?: string;
  placeholder?: boolean;
}) {
  const units: { key: string; value: string; label: string }[] = [
    {
      key: "days",
      value: placeholder ? "—" : String(remaining.days),
      label: "days",
    },
    {
      key: "hours",
      value: placeholder ? "—" : pad(remaining.hours),
      label: "hours",
    },
    {
      key: "min",
      value: placeholder ? "—" : pad(remaining.minutes),
      label: "min",
    },
    {
      key: "sec",
      value: placeholder ? "—" : pad(remaining.seconds),
      label: "sec",
    },
  ];

  return (
    <div
      className={cn("flex flex-col items-center gap-2", className)}
      role="timer"
      aria-live="off"
      data-exam-countdown=""
      data-exam-at={String(EXAM_AT_MS)}
      aria-label={
        placeholder
          ? "Countdown to the 2027 BBE exam"
          : remaining.done
            ? "Exam day has arrived"
            : `Countdown to the 2027 BBE exam: ${remaining.days} days, ${remaining.hours} hours, ${remaining.minutes} minutes, ${remaining.seconds} seconds`
      }
    >
      <p className="text-[11px] font-medium tracking-wide text-taupe sm:text-xs">
        {remaining.done && !placeholder
          ? "Exam day"
          : "Until the 2027 BBE exam · 30 June"}
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
  );
}

/**
 * Live ticker — mounts only after hydration (via ClientOnly), so it never
 * participates in an SSR text mismatch. Same pattern as the original working timer.
 */
function ExamCountdownLive({ className }: { className?: string }) {
  const [remaining, setRemaining] = useState<Remaining>(() => getRemaining());

  useEffect(() => {
    setRemaining(getRemaining());
    const id = window.setInterval(() => {
      setRemaining(getRemaining());
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return <CountdownView remaining={remaining} className={className} />;
}

function ExamCountdownFallback({ className }: { className?: string }) {
  return (
    <CountdownView
      remaining={PLACEHOLDER}
      className={className}
      placeholder
    />
  );
}

/**
 * Vanilla DOM tick — starts only after TanStack marks hydration done (or 2s
 * fallback). Updates [data-exam-unit] even if React never mounts the live tree.
 */
const POST_HYDRATION_TICK = `(function(){
  if(window.__bbeExamTick)return;
  window.__bbeExamTick=1;
  var EXAM=${EXAM_AT_MS};
  function pad(n){return String(n).padStart(2,"0");}
  function tick(){
    var root=document.querySelector("[data-exam-countdown]");
    if(!root)return;
    var ms=EXAM-Date.now();
    if(ms<0)ms=0;
    var s=Math.floor(ms/1000);
    var map={days:String(Math.floor(s/86400)),hours:pad(Math.floor((s%86400)/3600)),min:pad(Math.floor((s%3600)/60)),sec:pad(s%60)};
    var nodes=root.querySelectorAll("[data-exam-unit]");
    for(var i=0;i<nodes.length;i++){
      var el=nodes[i];
      var key=el.getAttribute("data-exam-unit");
      if(key&&map[key]!=null)el.textContent=map[key];
    }
  }
  function start(){tick();setInterval(tick,1000);}
  var started=false;
  function tryStart(){
    if(started)return;
    if(window.$_TSR&&window.$_TSR.hydrated){started=true;start();}
  }
  var iv=setInterval(function(){tryStart();if(started)clearInterval(iv);},50);
  setTimeout(function(){if(!started){started=true;clearInterval(iv);start();}},2000);
})();`;

/**
 * Homepage exam countdown.
 *
 * Production was freezing on React hydration error #418 because SSR and the
 * client painted different Date.now() text. ClientOnly + a static placeholder
 * keeps hydration identical; the live interval mounts only in the browser.
 */
export function ExamCountdown({ className }: { className?: string }) {
  return (
    <>
      <ClientOnly fallback={<ExamCountdownFallback className={className} />}>
        <ExamCountdownLive className={className} />
      </ClientOnly>
      <ScriptOnce>{POST_HYDRATION_TICK}</ScriptOnce>
    </>
  );
}
