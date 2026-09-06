import { useState } from "react";
import { Clock, Gauge, Timer, TimerOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { PracticeCalculatorInline } from "@/components/calculator/Ti30MathPrint";
import {
  DIFFICULTY_LABEL,
  DIFFICULTY_MULTIPLIER,
  allocatedFor,
  describeSpent,
  formatClock,
  type QuestionTimerState,
  type TimedDifficulty,
  type TimedSession,
} from "@/lib/timed-practice";

const LEVELS: TimedDifficulty[] = ["easy", "standard", "hard"];

/** Always-visible Timed Mode control strip for the practice screen. */
export function TimedModeBar({
  session,
  questionId = null,
  showCalculator = false,
  className,
}: {
  session: TimedSession;
  /** Current unlocked question — passed so enable() can start the clock immediately. */
  questionId?: string | null;
  /** Math practice can show the TI-30; English/Economics omit it. */
  showCalculator?: boolean;
  className?: string;
}) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const entry = session.get(session.activeId ?? questionId);

  return (
    <div className={cn("mb-5 rounded-2xl border border-border bg-card p-3 shadow-sm", className)}>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => (session.enabled ? session.disable() : session.enable(questionId))}
          aria-pressed={session.enabled}
          className={cn(
            "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold transition-colors",
            session.enabled
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background text-foreground hover:bg-secondary",
          )}
        >
          <Timer className="h-4 w-4" /> Timed Mode {session.enabled ? "ON" : "OFF"}
        </button>

        {showCalculator && <PracticeCalculatorInline />}

        {session.enabled && (
          <>
            <button
              type="button"
              onClick={() => setSettingsOpen((o) => !o)}
              title="Difficulty settings"
              aria-label="Difficulty settings"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-2 text-[11px] font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <Gauge className="h-3.5 w-3.5" />
              {DIFFICULTY_LABEL[session.difficulty]} · {formatClock(allocatedFor(session.difficulty))}
            </button>

            <TimerReadout entry={entry} />

            <span className="flex-1" />

            <button
              type="button"
              onClick={session.disable}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2 text-[11px] font-semibold text-muted-foreground hover:border-destructive hover:text-destructive"
            >
              <TimerOff className="h-3.5 w-3.5" /> Switch to Untimed Mode
            </button>
          </>
        )}
      </div>

      {session.enabled && settingsOpen && (
        <div className="mt-3 rounded-xl border border-dashed border-border bg-background/60 p-3">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Difficulty — per-question time
          </p>
          <div className="flex flex-wrap gap-2">
            {LEVELS.map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => session.setDifficulty(lvl)}
                className={cn(
                  "rounded-lg border px-3 py-1.5 text-[11px] font-semibold transition-colors",
                  session.difficulty === lvl
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-background text-foreground hover:bg-secondary",
                )}
              >
                {DIFFICULTY_LABEL[lvl]} · {DIFFICULTY_MULTIPLIER[lvl]}× · {formatClock(allocatedFor(lvl))}
              </button>
            ))}
          </div>
          <p className="mt-2 text-[10px] text-muted-foreground">
            Changing difficulty only affects questions you haven&apos;t opened yet — clocks already
            running or recorded stay exactly as they are.
          </p>
        </div>
      )}
    </div>
  );
}

function TimerReadout({ entry }: { entry: QuestionTimerState | undefined }) {
  if (!entry) return null;

  if (entry.status === "submitted") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-2 text-[11px] font-bold text-muted-foreground">
        <Clock className="h-3.5 w-3.5" /> {describeSpent(entry)}
      </span>
    );
  }
  if (entry.status === "overtime") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500/15 px-3 py-2 text-sm font-bold tabular-nums text-amber-700 dark:text-amber-300">
        <Clock className="h-4 w-4" /> Overtime +{formatClock(entry.overtimeSeconds)}
      </span>
    );
  }
  if (entry.status === "timed_out") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-lg bg-destructive/15 px-3 py-2 text-[11px] font-bold text-destructive">
        Failed on time
      </span>
    );
  }
  const low = entry.remainingSeconds <= 15;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-bold tabular-nums",
        low ? "bg-destructive/15 text-destructive" : "bg-primary/10 text-primary",
        entry.status === "paused" && "opacity-60",
      )}
    >
      <Clock className="h-4 w-4" /> {formatClock(entry.remainingSeconds)}
      {entry.status === "paused" && <span className="text-[10px] font-semibold">paused</span>}
    </span>
  );
}

/** Modal shown the moment a question's countdown hits zero. */
export function TimeoutModal({
  onOvertime,
  onReview,
}: {
  onOvertime: () => void;
  onReview: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 text-center shadow-xl">
        <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-destructive/15 text-destructive">
          <Clock className="h-6 w-6" />
        </div>
        <h2 className="font-display text-lg font-bold">Time&apos;s up for this question.</h2>
        <p className="mt-2 text-xs text-muted-foreground">
          This task is already marked as failed on time — that&apos;s a timing outcome, separate
          from whether your answer is correct.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          <button
            type="button"
            onClick={onOvertime}
            className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Continue without timer
          </button>
          <button
            type="button"
            onClick={onReview}
            className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            Check the answer
          </button>
        </div>
      </div>
    </div>
  );
}

/** Small per-question status dot for the navigator strip. */
export function TimerStatusDot({ entry }: { entry: QuestionTimerState | undefined }) {
  const status = entry?.status ?? "not_started";
  const map: Record<string, { cls: string; title: string }> = {
    not_started: { cls: "bg-border", title: "Timer not started" },
    running: { cls: "bg-primary animate-pulse", title: "Timer running" },
    paused: { cls: "bg-primary/50", title: "Timer paused" },
    timed_out: { cls: "bg-destructive", title: "Timed out" },
    overtime: { cls: "bg-amber-500", title: "Overtime" },
    submitted: { cls: entry?.timedOut ? "bg-destructive/60" : "bg-emerald-500", title: "Submitted" },
  };
  const m = map[status];
  return <span title={m.title} aria-label={m.title} className={cn("h-1.5 w-1.5 shrink-0 rounded-full", m.cls)} />;
}
