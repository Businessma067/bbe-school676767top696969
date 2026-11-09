import { useEffect, useState } from "react";
import { ClientOnly, ScriptOnce, useRouterState } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import { isHybridPath, isWisoPath } from "@/lib/exam-track";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";

/** WiSo: 6 July 2027, 10:00–12:00. BBE: 7 July 2027; WU has not published the clock time. Both at VIECON. */
const WISO_EXAM_AT_MS = new Date("2027-07-06T10:00:00+02:00").getTime();
const BBE_EXAM_AT_MS = new Date("2027-07-07T00:00:00+02:00").getTime();

type ExamKind = "bbe" | "wiso" | "home" | "hybrid";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

function examKind(pathname: string): ExamKind {
  if (isWisoPath(pathname)) return "wiso";
  if (isHybridPath(pathname)) return "hybrid";
  if (stripLocalePrefix(pathname) === "/") return "home";
  return "bbe";
}

function examAtFor(kind: ExamKind): number {
  return kind === "wiso" || kind === "hybrid" ? WISO_EXAM_AT_MS : BBE_EXAM_AT_MS;
}

function getRemaining(examAt: number, nowMs: number = Date.now()): Remaining {
  const ms = examAt - nowMs;
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
  kind = "bbe",
}: {
  remaining: Remaining;
  className?: string;
  placeholder?: boolean;
  kind?: ExamKind;
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

  const examAt = examAtFor(kind);
  const untilLabel =
    kind === "wiso" || kind === "hybrid"
      ? "Until the WiSo exam · 6 July, 10:00"
      : "Until the BBE exam · 7 July";
  const placeLine =
    kind === "hybrid"
      ? "BBE is 7 July · VIECON, Messe Wien"
      : kind === "home"
        ? "WiSo is 6 July, 10:00 · VIECON, Messe Wien"
        : "VIECON, Messe Wien";
  const ariaCountdown =
    kind === "wiso" || kind === "hybrid"
      ? "Countdown to the 2027 WiSo exam"
      : "Countdown to the 2027 BBE exam";

  return (
    <div
      className={cn("flex flex-col items-center gap-2", className)}
      role="timer"
      aria-live="off"
      data-exam-countdown=""
      data-exam-at={String(examAt)}
      aria-label={
        placeholder
          ? ariaCountdown
          : remaining.done
            ? "Exam day has arrived"
            : `${ariaCountdown}: ${remaining.days} days, ${remaining.hours} hours, ${remaining.minutes} minutes, ${remaining.seconds} seconds`
      }
    >
      <p className="text-[11px] font-medium tracking-wide text-taupe sm:text-xs">
        {remaining.done && !placeholder ? "Exam day" : untilLabel}
      </p>
          <div className="flex items-stretch gap-1.5 sm:gap-3">
        {units.map((u, i) => (
          <div key={u.key} className="flex items-stretch gap-1.5 sm:gap-3">
            {i > 0 && (
              <span
                className="self-start pt-1 font-display text-lg font-semibold text-foreground/25 sm:pt-1.5 sm:text-2xl"
                aria-hidden
              >
                :
              </span>
            )}
            <div className="min-w-[2.85rem] rounded-sm border border-border bg-card px-1.5 py-2 text-center sm:min-w-[4rem] sm:px-3 sm:py-2.5">
              <div
                data-exam-unit={u.key}
                className="font-display text-lg font-semibold tabular-nums leading-none text-foreground sm:text-2xl"
              >
                {u.value}
              </div>
              <div className="mt-1 text-[9px] font-medium uppercase tracking-wide text-muted-foreground sm:text-[10px]">
                {u.label}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] font-medium tracking-wide text-taupe">{placeLine}</p>
    </div>
  );
}

/**
 * Live ticker — mounts only after hydration (via ClientOnly), so it never
 * participates in an SSR text mismatch. Same pattern as the original working timer.
 */
function ExamCountdownLive({ className }: { className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const kind = examKind(pathname);
  const examAt = examAtFor(kind);
  const [remaining, setRemaining] = useState<Remaining>(() => getRemaining(examAt));

  useEffect(() => {
    setRemaining(getRemaining(examAt));
    const id = window.setInterval(() => {
      setRemaining(getRemaining(examAt));
    }, 1000);
    return () => window.clearInterval(id);
  }, [examAt]);

  return <CountdownView remaining={remaining} className={className} kind={kind} />;
}

function ExamCountdownFallback({ className }: { className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <CountdownView
      remaining={PLACEHOLDER}
      className={className}
      placeholder
      kind={examKind(pathname)}
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
  function pad(n){return String(n).padStart(2,"0");}
  function tick(){
    var root=document.querySelector("[data-exam-countdown]");
    if(!root)return;
    var exam=Number(root.getAttribute("data-exam-at"));
    if(!exam)return;
    var ms=exam-Date.now();
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
