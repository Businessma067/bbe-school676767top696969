import { SUBJECT_META } from "@/config/scoring-config";
import type { GroupAnalytics, TaskAnalyticsRow } from "@/lib/mock-exam-analytics";
import { formatCompactDuration, formatQuestionTime } from "@/lib/mock-exam-session";
import { cn } from "@/lib/utils";

function formatDelta(n: number) {
  if (n > 0) return `+${n.toFixed(1)}`;
  if (n < 0) return n.toFixed(1);
  return "0";
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

function GroupTable({
  title,
  rows,
  empty,
}: {
  title: string;
  rows: GroupAnalytics[];
  empty?: string;
}) {
  if (rows.length === 0) {
    return empty ? (
      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h2 className="font-display text-xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{empty}</p>
      </section>
    ) : null;
  }

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
                    <Meter pct={row.scorePct} color={row.color} />
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
          <span className="sr-only">
            {j.judgedOk ? "correct" : "incorrect"}
          </span>
        </span>
      ))}
    </div>
  );
}

export function ExamResultOverview({
  examTitle,
  pct,
  total,
  pointsTotal,
  statementPct,
  statementCorrect,
  statementCount,
  secondsTaken,
  timed,
  answeredTasks,
  taskCount,
  sections,
  topics,
  hasTopicBreakdown,
  tasks,
  onOpenTask,
}: {
  examTitle: string;
  pct: number;
  total: number;
  pointsTotal: number;
  statementPct: number;
  statementCorrect: number;
  statementCount: number;
  secondsTaken: number | null;
  timed: boolean;
  answeredTasks: number;
  taskCount: number;
  sections: GroupAnalytics[];
  topics: GroupAnalytics[];
  hasTopicBreakdown: boolean;
  tasks: TaskAnalyticsRow[];
  onOpenTask: (index: number) => void;
}) {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {examTitle}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          wi2 scoring across every statement. Green letters were judged correctly; red were not.
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
            value={`${answeredTasks}/${taskCount}`}
            label="Tasks with a mark"
            hint={`${taskCount - answeredTasks} left blank`}
          />
        </div>
      </section>

      <GroupTable title="Sections" rows={sections} />

      {hasTopicBreakdown ? (
        <GroupTable title="Topics" rows={topics} />
      ) : null}

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
