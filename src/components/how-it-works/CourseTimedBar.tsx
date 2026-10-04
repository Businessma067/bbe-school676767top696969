import { Calculator, Clock, Gauge, Timer } from "lucide-react";
import { cn } from "@/lib/utils";
import { EN_CHROME, type CourseChrome } from "./course-copy";

/** Same strip as TimedModeBar on the practice pages. Standard allocation is 1:30. */
export function CourseTimedBar({
  on,
  calculator,
  calcOpen,
  chrome = EN_CHROME,
}: {
  on: boolean;
  calculator?: boolean;
  calcOpen?: boolean;
  chrome?: CourseChrome;
}) {
  return (
    <div data-no-i18n className="mb-4 rounded-2xl border border-border bg-card p-3 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <span
          data-d="timed"
          className={cn(
            "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold transition-colors",
            on
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background text-foreground",
          )}
        >
          <Timer className="h-4 w-4" />
          {on ? chrome.timedOn : chrome.timedOff}
        </span>
        {calculator ? (
          <span
            data-d="calc"
            className={cn(
              "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold transition-colors",
              calcOpen
                ? "border-caramel-deep bg-caramel-deep text-primary-foreground"
                : "border-border bg-background text-foreground",
            )}
          >
            <Calculator className="h-4 w-4" /> {chrome.calculator}
          </span>
        ) : null}
        {on ? (
          <>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-2 text-[11px] font-semibold text-muted-foreground">
              <Gauge className="h-3.5 w-3.5" />
              {chrome.standard}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-2 text-sm font-bold tabular-nums text-primary">
              <Clock className="h-4 w-4" /> 1:30
            </span>
          </>
        ) : null}
      </div>
    </div>
  );
}
