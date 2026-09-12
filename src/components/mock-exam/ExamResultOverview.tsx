import { useMemo, type CSSProperties, type ReactNode } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SUBJECT_META } from "@/config/scoring-config";
import type { GroupAnalytics, TaskAnalyticsRow } from "@/lib/mock-exam-analytics";
import { buildExamAnalytics } from "@/lib/mock-exam-analytics";
import { formatCompactDuration, formatQuestionTime } from "@/lib/mock-exam-session";
import { cn } from "@/lib/utils";

type Analytics = ReturnType<typeof buildExamAnalytics>;

const INK = "var(--foreground)";
const MUTED = "var(--muted-foreground)";
const GRID = "var(--border)";
const axisTick = { fill: MUTED, fontSize: 11 };

function tipStyle(): CSSProperties {
  return {
    background: "var(--popover)",
    border: "1px solid var(--border)",
    borderRadius: 12,
    fontSize: 12,
    color: INK,
    boxShadow: "0 8px 24px color-mix(in oklab, var(--foreground) 12%, transparent)",
  };
}

function formatDelta(n: number) {
  if (n > 0) return `+${n.toFixed(1)}`;
  if (n < 0) return n.toFixed(1);
  return "0";
}

function formatAxisSeconds(value: number) {
  const sec = Math.max(0, Math.round(value));
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function Stat({
  value,
  label,
  hint,
}: {
  value: string;
  label: string;
  hint?: string;
}) {
  return (
    <div className="min-w-0 px-5 py-5 sm:px-6">
      <p className="font-display text-[1.85rem] font-semibold tabular-nums leading-none tracking-tight sm:text-[2.15rem]">
        {value}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
      {hint ? <p className="mt-0.5 text-xs text-muted-foreground/80">{hint}</p> : null}
    </div>
  );
}

function Meter({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
      <div
        className="h-full rounded-full"
        style={{ width: `${Math.min(100, Math.max(0, pct))}%`, backgroundColor: color }}
      />
    </div>
  );
}

function ChartFrame({
  title,
  hint,
  children,
  tall,
}: {
  title: string;
  hint?: string;
  children: ReactNode;
  tall?: boolean;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="border-b border-border px-5 py-4 sm:px-6">
        <h2 className="font-display text-xl font-semibold tracking-tight">{title}</h2>
        {hint ? <p className="mt-1 text-sm text-muted-foreground">{hint}</p> : null}
      </div>
      <div className={cn("w-full px-2 pb-4 pt-3 sm:px-4", tall ? "h-72" : "h-64")}>{children}</div>
    </section>
  );
}

function GroupTable({
  title,
  rows,
}: {
  title: string;
  rows: GroupAnalytics[];
}) {
  if (rows.length === 0) return null;

  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="border-b border-border px-5 py-4 sm:px-6">
        <h2 className="font-display text-xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="px-5 py-2.5 font-medium sm:px-6">Name</th>
              <th className="px-3 py-2.5 text-right font-medium">Score</th>
              <th className="px-3 py-2.5 text-right font-medium">Accuracy</th>
              <th className="hidden px-3 py-2.5 text-right font-medium sm:table-cell">Statements</th>
              <th className="px-5 py-2.5 text-right font-medium sm:px-6">Time</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className="border-b border-border last:border-b-0">
                <td className="px-5 py-4 sm:px-6">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: row.color }}
                      aria-hidden
                    />
                    <div className="min-w-0">
                      <p className="truncate font-medium">{row.label}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {row.taskCount} {row.taskCount === 1 ? "task" : "tasks"}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 max-w-xs">
                    <Meter pct={row.accuracyPct} color={row.color} />
                  </div>
                </td>
                <td className="px-3 py-4 text-right tabular-nums">
                  <span className="font-medium">{row.scorePct}%</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {row.earned.toFixed(1)} / {row.max.toFixed(1)}
                  </span>
                </td>
                <td className="px-3 py-4 text-right tabular-nums">
                  <span className="font-medium">{row.accuracyPct}%</span>
                </td>
                <td className="hidden px-3 py-4 text-right tabular-nums text-muted-foreground sm:table-cell">
                  {row.statementCorrect}/{row.statementCount}
                </td>
                <td className="px-5 py-4 text-right tabular-nums text-muted-foreground sm:px-6">
                  {formatCompactDuration(row.seconds)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function StatementCells({ task }: { task: TaskAnalyticsRow }) {
  return (
    <div className="flex items-center gap-1">
      {task.judgments.map((j) => (
        <span
          key={j.letter}
          title={`${j.letter}: marked ${j.userMarked ? "True" : "blank"} · key ${j.isTrue ? "True" : "False"} · ${formatDelta(j.delta)} pts`}
          className={cn(
            "grid h-7 w-7 place-items-center rounded-md text-[11px] font-semibold",
            j.judgedOk
              ? "bg-emerald-500/12 text-emerald-800 dark:text-emerald-300"
              : "bg-red-500/12 text-red-800 dark:text-red-300",
          )}
        >
          {j.letter}
          <span className="sr-only">{j.judgedOk ? "correct" : "incorrect"}</span>
        </span>
      ))}
    </div>
  );
}

function FocusList({
  title,
  hint,
  rows,
  empty,
}: {
  title: string;
  hint: string;
  rows: GroupAnalytics[];
  empty: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <h3 className="font-display text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{hint}</p>
      {rows.length === 0 ? (
        <p className="mt-5 text-sm text-muted-foreground">{empty}</p>
      ) : (
        <ul className="mt-5 space-y-4">
          {rows.map((row) => (
            <li key={row.key}>
              <div className="mb-1.5 flex items-baseline justify-between gap-3">
                <p className="min-w-0 truncate text-sm font-medium">{row.label}</p>
                <p className="shrink-0 tabular-nums text-sm font-semibold">{row.accuracyPct}%</p>
              </div>
              <Meter pct={row.accuracyPct} color={row.color} />
              <p className="mt-1 text-xs text-muted-foreground">
                {row.statementCorrect}/{row.statementCount} statements · {row.scorePct}% of points
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TimeTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload: { q: number; seconds: number; subject: string; accuracy: number } }>;
}) {
  if (!active || !payload?.[0]) return null;
  const row = payload[0].payload;
  return (
    <div className="rounded-xl border border-border bg-popover px-3 py-2 text-xs shadow-md">
      <p className="font-medium">Question {row.q}</p>
      <p className="mt-0.5 text-muted-foreground">
        {row.subject} · {formatQuestionTime(row.seconds)} · {row.accuracy}%
      </p>
    </div>
  );
}

export function ExamResultOverview({
  examTitle,
  analytics,
  onOpenTask,
}: {
  examTitle: string;
  analytics: Analytics;
  onOpenTask: (index: number) => void;
}) {
  const {
    pct,
    total,
    pointsTotal,
    statementPct,
    statementCorrect,
    statementCount,
    secondsTaken,
    timed,
    answeredTasks,
    tasks,
    sections,
    topics,
    chapters,
    hasTopicBreakdown,
    medianSeconds,
    meanSeconds,
    toReview,
    watch,
    holdingWell,
  } = analytics;

  const timeSeries = useMemo(
    () =>
      tasks.map((t) => ({
        q: t.question.index,
        seconds: t.seconds,
        subject: SUBJECT_META[t.question.subject].label,
        color: SUBJECT_META[t.question.subject].color,
        accuracy: t.accuracyPct,
      })),
    [tasks],
  );

  const slowest = useMemo(() => {
    const withTime = tasks.filter((t) => t.seconds > 0);
    return [...withTime].sort((a, b) => b.seconds - a.seconds)[0] ?? null;
  }, [tasks]);

  const subjectPie = useMemo(
    () =>
      sections.map((s) => ({
        name: s.label,
        value: Math.max(s.accuracyPct, 0.01),
        accuracy: s.accuracyPct,
        color: s.color,
        earned: s.earned,
        max: s.max,
      })),
    [sections],
  );

  const chapterBars = useMemo(
    () =>
      [...chapters]
        .sort((a, b) => a.accuracyPct - b.accuracyPct)
        .map((c) => ({
          name: c.label,
          accuracy: c.accuracyPct,
          color: c.color,
        })),
    [chapters],
  );

  const tickEvery = tasks.length > 20 ? 4 : tasks.length > 12 ? 2 : 1;

  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {examTitle}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Time, accuracy, and wi2 points from the first question to the last.
        </p>
      </header>

      <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          <Stat
            value={`${pct}%`}
            label="Exam score"
            hint={`${total.toFixed(1)} / ${pointsTotal.toFixed(1)} pts`}
          />
          <Stat
            value={`${statementPct}%`}
            label="Statement accuracy"
            hint={`${statementCorrect} of ${statementCount} judged correctly`}
          />
          <Stat
            value={secondsTaken != null ? formatCompactDuration(secondsTaken) : "—"}
            label="Time"
            hint={timed ? "Timed sitting" : "Untimed sitting"}
          />
          <Stat
            value={formatQuestionTime(medianSeconds)}
            label="Median per question"
            hint={`Average ${formatQuestionTime(meanSeconds)} · ${answeredTasks}/${tasks.length} marked`}
          />
        </div>
      </section>

      <ChartFrame
        title="Time per question"
        hint={
          slowest
            ? `Q1 → Q${tasks.at(-1)?.question.index ?? tasks.length}. Median ${formatQuestionTime(medianSeconds)}. Longest: Q${slowest.question.index} (${formatQuestionTime(slowest.seconds)}).`
            : "Seconds spent on each question, in exam order."
        }
        tall
      >
        {timeSeries.every((d) => d.seconds === 0) ? (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Time per question was not recorded for this sitting.
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%" debounce={80}>
            <AreaChart data={timeSeries} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="mockExamTimeFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={INK} stopOpacity={0.22} />
                  <stop offset="100%" stopColor={INK} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke={GRID} vertical={false} />
              <XAxis
                dataKey="q"
                tick={axisTick}
                axisLine={false}
                tickLine={false}
                interval={tickEvery - 1}
              />
              <YAxis
                tick={axisTick}
                axisLine={false}
                tickLine={false}
                width={40}
                tickFormatter={formatAxisSeconds}
                domain={[0, (max: number) => Math.max(max * 1.08, 8)]}
              />
              <Tooltip
                content={<TimeTooltip />}
                cursor={{ stroke: GRID, strokeWidth: 1 }}
              />
              {medianSeconds > 0 ? (
                <ReferenceLine y={medianSeconds} stroke={MUTED} strokeDasharray="4 4" />
              ) : null}
              <Area
                type="monotone"
                dataKey="seconds"
                stroke={INK}
                strokeWidth={2}
                fill="url(#mockExamTimeFill)"
                dot={{ r: 3, strokeWidth: 0, fill: INK }}
                activeDot={{ r: 5, strokeWidth: 0, fill: INK }}
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </ChartFrame>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartFrame title="Accuracy by subject" hint="Share of statements judged correctly in each section.">
          {subjectPie.length === 0 ? (
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              No section data.
            </div>
          ) : (
            <div className="flex h-full flex-col items-center gap-4 sm:flex-row sm:items-center">
              <div className="mx-auto shrink-0" style={{ width: 196, height: 196 }}>
                <PieChart width={196} height={196}>
                  <Pie
                    data={subjectPie}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={58}
                    outerRadius={88}
                    paddingAngle={2}
                    stroke="var(--card)"
                    strokeWidth={2}
                    isAnimationActive={false}
                  >
                    {subjectPie.map((row) => (
                      <Cell key={row.name} fill={row.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={tipStyle()}
                    formatter={(_value, name, item) => {
                      const row = item?.payload as { accuracy: number; earned: number; max: number } | undefined;
                      return row
                        ? [`${row.accuracy}% · ${row.earned.toFixed(1)} / ${row.max.toFixed(1)} pts`, String(name)]
                        : ["", String(name)];
                    }}
                  />
                </PieChart>
              </div>
              <ul className="w-full min-w-0 flex-1 space-y-3 px-2">
                {subjectPie.map((row) => (
                  <li key={row.name}>
                    <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
                      <span className="flex min-w-0 items-center gap-2">
                        <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: row.color }} />
                        <span className="truncate font-medium">{row.name}</span>
                      </span>
                      <span className="tabular-nums font-semibold">{row.accuracy}%</span>
                    </div>
                    <Meter pct={row.accuracy} color={row.color} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </ChartFrame>

        <ChartFrame
          title="Accuracy by chapter"
          hint={
            chapterBars.length
              ? "Chapters ordered from weakest to strongest."
              : "Chapter tags appear on Custom Mock Builder exams."
          }
        >
          {chapterBars.length === 0 ? (
            <div className="flex h-full items-center justify-center px-6 text-center text-sm text-muted-foreground">
              This sitting has no chapter labels, so the breakdown stays at subject level.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%" debounce={80}>
              <BarChart
                data={chapterBars}
                layout="vertical"
                margin={{ top: 4, right: 16, left: 8, bottom: 4 }}
              >
                <CartesianGrid stroke={GRID} horizontal={false} />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tick={axisTick}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={128}
                  tick={axisTick}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={tipStyle()}
                  formatter={(value) => [`${value}%`, "Accuracy"]}
                />
                <Bar dataKey="accuracy" radius={[0, 4, 4, 0]} maxBarSize={18} isAnimationActive={false}>
                  {chapterBars.map((row) => (
                    <Cell key={row.name} fill={row.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}
        </ChartFrame>
      </div>

      <section>
        <div className="mb-4">
          <h2 className="font-display text-xl font-semibold tracking-tight">What to study next</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {hasTopicBreakdown
              ? "Topics below 70% need another pass. 85% and above are holding."
              : "Sections below 70% need another pass. 85% and above are holding."}
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <FocusList
            title="Review"
            hint="Under 70% of statements judged correctly."
            rows={toReview}
            empty="Nothing in this band."
          />
          <FocusList
            title="Watch"
            hint="70–84%. Solid enough, still leaky."
            rows={watch}
            empty="Nothing in this band."
          />
          <FocusList
            title="Holding well"
            hint="85% and above."
            rows={holdingWell}
            empty="Nothing reached 85% yet."
          />
        </div>
      </section>

      <GroupTable title="Sections" rows={sections} />
      {hasTopicBreakdown ? <GroupTable title="Topics" rows={topics} /> : null}
      {chapters.length > 0 ? <GroupTable title="Chapters" rows={chapters} /> : null}

      <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border px-5 py-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold tracking-tight">Questions</h2>
          <p className="text-xs text-muted-foreground">
            A–E show judgment, not whether you ticked True.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[44rem] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="px-5 py-2.5 font-medium sm:px-6">Q</th>
                <th className="px-3 py-2.5 font-medium">Section</th>
                {hasTopicBreakdown ? <th className="px-3 py-2.5 font-medium">Topic</th> : null}
                <th className="px-3 py-2.5 font-medium">Statements</th>
                <th className="px-3 py-2.5 text-right font-medium">Points</th>
                <th className="px-3 py-2.5 text-right font-medium">Accuracy</th>
                <th className="px-5 py-2.5 text-right font-medium sm:px-6">Time</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => {
                const sm = SUBJECT_META[task.question.subject];
                return (
                  <tr key={task.question.id} className="border-b border-border last:border-b-0">
                    <td className="px-5 py-3.5 sm:px-6">
                      <button
                        type="button"
                        onClick={() => onOpenTask(index)}
                        className="font-medium tabular-nums text-foreground underline-offset-4 hover:underline"
                      >
                        {task.question.index}
                        {task.flagged ? (
                          <span className="ml-1.5 text-xs text-muted-foreground">flagged</span>
                        ) : null}
                      </button>
                    </td>
                    <td className="px-3 py-3.5 text-muted-foreground">{sm.label}</td>
                    {hasTopicBreakdown ? (
                      <td className="max-w-[14rem] truncate px-3 py-3.5 text-muted-foreground">
                        {task.topicLabel}
                      </td>
                    ) : null}
                    <td className="px-3 py-3.5">
                      <StatementCells task={task} />
                    </td>
                    <td className="px-3 py-3.5 text-right tabular-nums">
                      {task.score.toFixed(1)}
                      <span className="text-muted-foreground"> / {task.maxPoints.toFixed(1)}</span>
                    </td>
                    <td className="px-3 py-3.5 text-right tabular-nums text-muted-foreground">
                      {task.accuracyPct}%
                    </td>
                    <td className="px-5 py-3.5 text-right tabular-nums text-muted-foreground sm:px-6">
                      {formatQuestionTime(task.seconds)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
