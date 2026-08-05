import { useEffect, useMemo, useState } from "react";
import {
  HEATMAP_LEVEL_COLORS,
  accuracyToLevel,
  buildStudyProgress,
  toLocalDateKey,
  type DayProgress,
  type SessionAnswerStat,
} from "@/lib/study-progress";
import type { MockAttempt, TaskAttempt } from "@/lib/user-progress";
import { CalendarDays, Flame, Target, TrendingUp, CheckCircle2 } from "lucide-react";

type Props = {
  tasks: TaskAttempt[];
  mocks: MockAttempt[];
  sessionAnswers: SessionAnswerStat[];
};

export function StudyProgressSection({ tasks, mocks, sessionAnswers }: Props) {
  const summary = useMemo(
    () => buildStudyProgress(tasks, mocks, sessionAnswers, { months: 12 }),
    [tasks, mocks, sessionAnswers],
  );

  const avgLabel =
    summary.averageAccuracy == null ? "—" : `${Math.round(summary.averageAccuracy)}%`;

  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taupe">
            Consistency
          </p>
          <h2 className="mt-1 font-display text-xl font-bold tracking-tight sm:text-2xl">
            Study Progress
          </h2>
          <p className="mt-1 max-w-xl text-sm text-muted-foreground">
            Daily accuracy from every True/False statement you answer — practice, quizzes, and mocks.
          </p>
        </div>
        <HeatmapLegend />
      </div>

      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <SummaryCard
          icon={<Flame className="h-4 w-4 text-caramel-deep" />}
          label="Current streak"
          value={`${summary.currentStreak}`}
          sub={summary.currentStreak === 1 ? "day" : "days"}
        />
        <SummaryCard
          icon={<CalendarDays className="h-4 w-4 text-caramel-deep" />}
          label="Longest streak"
          value={`${summary.longestStreak}`}
          sub={summary.longestStreak === 1 ? "day" : "days"}
        />
        <SummaryCard
          icon={<TrendingUp className="h-4 w-4 text-caramel-deep" />}
          label="Average accuracy"
          value={avgLabel}
          sub="all statements"
        />
        <SummaryCard
          icon={<Target className="h-4 w-4 text-caramel-deep" />}
          label="Statements this month"
          value={`${summary.statementsThisMonth}`}
          sub="answered"
        />
        <SummaryCard
          icon={<CheckCircle2 className="h-4 w-4 text-caramel-deep" />}
          label="Assignments this month"
          value={`${summary.assignmentsThisMonth}`}
          sub="completed"
        />
      </div>

      <ContributionHeatmap days={summary.days} />
    </section>
  );
}

function SummaryCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 shadow-sm">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-secondary">{icon}</div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="font-display text-xl font-bold leading-tight">{value}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}

function HeatmapLegend() {
  const levels = [0, 1, 2, 3, 4, 5, 6, 7] as const;
  return (
    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
      <span>No activity</span>
      {levels.map((lvl) => (
        <span
          key={lvl}
          className="inline-block h-2.5 w-2.5 rounded-[3px] shadow-sm"
          style={{ backgroundColor: HEATMAP_LEVEL_COLORS[lvl] }}
          title={
            lvl === 0
              ? "No activity"
              : lvl === 1
                ? "1–49%"
                : lvl === 2
                  ? "50–59%"
                  : lvl === 3
                    ? "60–69%"
                    : lvl === 4
                      ? "70–79%"
                      : lvl === 5
                        ? "80–89%"
                        : lvl === 6
                          ? "90–94%"
                          : "95–100%"
          }
        />
      ))}
      <span>High accuracy</span>
    </div>
  );
}

function ContributionHeatmap({ days }: { days: DayProgress[] }) {
  const [hovered, setHovered] = useState<DayProgress | null>(null);
  const [todayKey, setTodayKey] = useState(() => toLocalDateKey(new Date()));

  // Keep the "today" outline on the correct square when the calendar date changes.
  useEffect(() => {
    const syncToday = () => {
      const next = toLocalDateKey(new Date());
      setTodayKey((prev) => (prev === next ? prev : next));
    };

    const now = new Date();
    const nextMidnight = new Date(now);
    nextMidnight.setHours(24, 0, 0, 0);
    const untilMidnight = nextMidnight.getTime() - now.getTime() + 50;

    const midnightTimer = window.setTimeout(() => {
      syncToday();
    }, untilMidnight);

    // Fallback for sleep/wake / background tabs missing the midnight timeout.
    const interval = window.setInterval(syncToday, 60_000);

    const onVisibility = () => {
      if (document.visibilityState === "visible") syncToday();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.clearTimeout(midnightTimer);
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [todayKey]);

  const weeks = useMemo(() => {
    const result: DayProgress[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      result.push(days.slice(i, i + 7));
    }
    return result;
  }, [days]);

  const monthLabels = useMemo(() => buildMonthLabels(weeks), [weeks]);

  return (
    <div className="relative">
      <div className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:thin]">
        <div className="mx-auto inline-flex min-w-max flex-col gap-1.5">
          {/* Month labels */}
          <div className="ml-6 flex gap-[3px] text-[10px] text-muted-foreground sm:ml-7">
            {monthLabels.map((m, i) => (
              <div key={`${m.label}-${i}`} style={{ width: m.width }} className="truncate">
                {m.label}
              </div>
            ))}
          </div>

          <div className="flex gap-1.5">
            {/* Day-of-week labels (Mon–Sun) */}
            <div className="flex w-5 flex-col justify-between gap-[3px] pt-0 text-[9px] leading-none text-muted-foreground sm:w-6 sm:text-[10px]">
              {["M", "", "W", "", "F", "", "S"].map((label, i) => (
                <span key={i} className="flex h-[11px] items-center sm:h-[12px]">
                  {label}
                </span>
              ))}
            </div>

            <div className="flex gap-[3px]">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((day) => {
                    if (day.isFuture) {
                      return (
                        <span
                          key={day.date}
                          className="h-[11px] w-[11px] rounded-[3px] sm:h-[12px] sm:w-[12px] md:h-[13px] md:w-[13px]"
                          style={{ backgroundColor: "transparent" }}
                          aria-hidden
                        />
                      );
                    }
                    const level = accuracyToLevel(day.accuracy);
                    const isToday = day.date === todayKey;
                    const isHovered = hovered?.date === day.date;
                    return (
                      <button
                        key={day.date}
                        type="button"
                        aria-label={ariaLabelForDay(day)}
                        aria-current={isToday ? "date" : undefined}
                        onMouseEnter={() => setHovered(day)}
                        onMouseLeave={() => setHovered(null)}
                        onFocus={() => setHovered(day)}
                        onBlur={() => setHovered(null)}
                        className="h-[11px] w-[11px] rounded-[3px] shadow-sm outline-none sm:h-[12px] sm:w-[12px] md:h-[13px] md:w-[13px]"
                        style={{
                          backgroundColor: HEATMAP_LEVEL_COLORS[level],
                          transform: isHovered ? "scale(1.28)" : "scale(1)",
                          boxShadow: isHovered
                            ? `0 0 0 1px color-mix(in oklab, ${HEATMAP_LEVEL_COLORS[7]} 35%, transparent), 0 0 10px -2px color-mix(in oklab, ${HEATMAP_LEVEL_COLORS[5]} 70%, transparent)`
                            : isToday
                              ? "0 0 0 1.5px #111, 0 1px 1px rgba(0,0,0,0.04)"
                              : "0 1px 1px rgba(0,0,0,0.04)",
                          transition:
                            "transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease",
                          zIndex: isHovered || isToday ? 2 : 1,
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {hovered && <DayTooltip day={hovered} />}
    </div>
  );
}

function DayTooltip({ day }: { day: DayProgress }) {
  const dateLabel = new Date(day.date + "T12:00:00").toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const questionsCompleted = day.assignmentsCompleted + day.questionsCompleted;
  const hasActivity = day.statementsAnswered > 0 || day.mocksCompleted > 0 || questionsCompleted > 0;

  return (
    <div className="pointer-events-none mt-3 rounded-xl border border-border bg-primary px-3.5 py-2.5 text-xs text-primary-foreground shadow-lg animate-in fade-in-0 zoom-in-95 duration-200">
      <p className="font-semibold">{dateLabel}</p>
      {!hasActivity ? (
        <p className="mt-1 text-primary-foreground/75">No study activity</p>
      ) : (
        <ul className="mt-1.5 space-y-0.5 text-primary-foreground/85">
          {day.statementsAnswered > 0 && (
            <>
              <li>
                Statements answered: <strong>{day.statementsAnswered}</strong>
              </li>
              <li>
                Correct statements: <strong>{day.correctStatements}</strong>
              </li>
              <li>
                Daily accuracy:{" "}
                <strong>
                  {day.accuracy == null ? "—" : `${Math.round(day.accuracy * 10) / 10}%`}
                </strong>
              </li>
            </>
          )}
          {questionsCompleted > 0 && (
            <li>
              Questions completed: <strong>{questionsCompleted}</strong>
            </li>
          )}
          {day.mocksCompleted > 0 && (
            <li>
              Quizzes / mocks completed: <strong>{day.mocksCompleted}</strong>
            </li>
          )}
          {day.studyTimeSeconds != null && day.studyTimeSeconds > 0 && (
            <li>
              Study time: <strong>{formatDuration(day.studyTimeSeconds)}</strong>
            </li>
          )}
          {day.statementsAnswered === 0 && day.mocksCompleted > 0 && (
            <li className="text-primary-foreground/70">Statement accuracy unavailable for this attempt</li>
          )}
        </ul>
      )}
    </div>
  );
}

function ariaLabelForDay(day: DayProgress): string {
  if (day.statementsAnswered === 0) {
    return `${day.date}: no study activity`;
  }
  return `${day.date}: ${Math.round(day.accuracy ?? 0)}% accuracy, ${day.statementsAnswered} statements`;
}

function formatDuration(sec: number): string {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m} min`;
  return `${sec}s`;
}

function buildMonthLabels(weeks: DayProgress[][]): { label: string; width: string }[] {
  if (weeks.length === 0) return [];
  const CELL = 13; // approx md cell + gap
  const GAP = 3;
  const colW = CELL + GAP;

  const labels: { label: string; width: string }[] = [];
  let lastMonth = "";
  let run = 0;

  const flush = (month: string, cols: number) => {
    if (cols <= 0) return;
    const d = new Date(month + "-01T12:00:00");
    const label = cols >= 2 ? d.toLocaleDateString(undefined, { month: "short" }) : "";
    labels.push({ label, width: `${cols * colW - GAP}px` });
  };

  for (const week of weeks) {
    const mid = week[Math.min(3, week.length - 1)];
    const month = mid.date.slice(0, 7);
    if (month !== lastMonth) {
      if (lastMonth) flush(lastMonth, run);
      lastMonth = month;
      run = 1;
    } else {
      run += 1;
    }
  }
  if (lastMonth) flush(lastMonth, run);
  return labels;
}
