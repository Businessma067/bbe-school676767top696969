import { useMemo, type CSSProperties, type ReactNode } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { AdminUserDetail } from "@/lib/admin-types";

const INK = "#111111";
const MUTED = "#737373";
const GRID = "#E5E5E5";
const FILL = "rgba(17,17,17,0.12)";

type DayPoint = {
  day: string;
  label: string;
  tasks: number;
  tasksCum: number;
  passedCum: number;
  accuracy: number | null;
  minutes: number;
  minutesCum: number;
};

function dayKey(iso: string): string {
  return iso.slice(0, 10);
}

function shortLabel(day: string): string {
  const d = new Date(`${day}T12:00:00`);
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function buildSeries(detail: AdminUserDetail): DayPoint[] {
  const map = new Map<
    string,
    { tasks: number; correct: number; total: number; passed: number; seconds: number }
  >();

  const bump = (day: string) => {
    let row = map.get(day);
    if (!row) {
      row = { tasks: 0, correct: 0, total: 0, passed: 0, seconds: 0 };
      map.set(day, row);
    }
    return row;
  };

  for (const t of detail.taskAttempts) {
    const row = bump(dayKey(t.createdAt));
    row.tasks += 1;
    row.correct += t.correctCount;
    row.total += t.statementCount;
    if (t.isPassed) row.passed += 1;
    row.seconds += t.durationSeconds ?? 0;
  }

  for (const m of detail.mocks) {
    const when = m.completedAt ?? m.startedAt;
    if (!when) continue;
    const row = bump(dayKey(when));
    row.seconds += m.secondsTaken ?? 0;
  }

  for (const p of detail.practiceSessions) {
    const row = bump(dayKey(p.startedAt));
    row.tasks += 1;
    row.correct += p.correctAnswers;
    row.total += p.totalQuestions;
    row.seconds += p.durationSeconds ?? 0;
  }

  for (const th of detail.theory) {
    const row = bump(dayKey(th.updatedAt));
    row.seconds += th.timeSeconds ?? 0;
  }

  for (const e of detail.recentActivity) {
    if (e.durationMs == null || e.durationMs <= 0) continue;
    const row = bump(dayKey(e.createdAt));
    row.seconds += Math.round(e.durationMs / 1000);
  }

  const days = [...map.keys()].sort();
  let tasksCum = 0;
  let passedCum = 0;
  let minutesCum = 0;
  const out: DayPoint[] = [];

  for (const day of days) {
    const row = map.get(day)!;
    tasksCum += row.tasks;
    passedCum += row.passed;
    const minutes = Math.round(row.seconds / 60);
    minutesCum += minutes;
    out.push({
      day,
      label: shortLabel(day),
      tasks: row.tasks,
      tasksCum,
      passedCum,
      accuracy: row.total > 0 ? Math.round((row.correct / row.total) * 1000) / 10 : null,
      minutes,
      minutesCum,
    });
  }

  return out;
}

function ChartCard({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-white p-4 shadow-sm">
      <div className="mb-3">
        <h3 className="font-display text-base font-semibold tracking-tight text-foreground">{title}</h3>
        {hint ? <p className="mt-0.5 text-xs text-muted-foreground">{hint}</p> : null}
      </div>
      <div className="h-56 w-full">{children}</div>
    </section>
  );
}

function EmptyChart({ label }: { label: string }) {
  return (
    <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-border bg-secondary/20 text-sm text-muted-foreground">
      {label}
    </div>
  );
}

function tipStyle(): CSSProperties {
  return {
    background: "#FFFFFF",
    border: "1px solid #E5E5E5",
    borderRadius: 12,
    fontSize: 12,
    color: INK,
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  };
}

const axisTick = { fill: MUTED, fontSize: 11 };

export function UserProgressCharts({ detail }: { detail: AdminUserDetail }) {
  const series = useMemo(() => buildSeries(detail), [detail]);
  const accuracySeries = useMemo(
    () => series.filter((d) => d.accuracy != null),
    [series],
  );

  if (series.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 text-center text-sm text-muted-foreground">
        Пока мало данных для графиков — пусть пользователь решит задания.
      </div>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <ChartCard title="Рост прогресса" hint="Накопительно: попытки и сданные задания">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={series} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="adminProgFillLite" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={INK} stopOpacity={0.18} />
                <stop offset="100%" stopColor={INK} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={GRID} vertical={false} />
            <XAxis dataKey="label" tick={axisTick} axisLine={false} tickLine={false} />
            <YAxis allowDecimals={false} tick={axisTick} axisLine={false} tickLine={false} width={32} />
            <Tooltip contentStyle={tipStyle()} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Area
              type="monotone"
              dataKey="tasksCum"
              name="Попытки"
              stroke={INK}
              fill="url(#adminProgFillLite)"
              strokeWidth={2.5}
            />
            <Area
              type="monotone"
              dataKey="passedCum"
              name="Сдано"
              stroke={MUTED}
              fill="transparent"
              strokeWidth={2}
              strokeDasharray="4 4"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Правильность" hint="Средний % верных ответов за день">
        {accuracySeries.length === 0 ? (
          <EmptyChart label="Нет данных по точности" />
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={accuracySeries} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke={GRID} vertical={false} />
              <XAxis dataKey="label" tick={axisTick} axisLine={false} tickLine={false} />
              <YAxis
                domain={[0, 100]}
                tick={axisTick}
                axisLine={false}
                tickLine={false}
                width={32}
                unit="%"
              />
              <Tooltip contentStyle={tipStyle()} formatter={(v) => [`${v}%`, "Accuracy"]} />
              <Line
                type="monotone"
                dataKey="accuracy"
                name="Accuracy %"
                stroke={INK}
                strokeWidth={2.5}
                dot={{ r: 3.5, fill: INK, strokeWidth: 0 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </ChartCard>

      <ChartCard title="Время обучения" hint="Минуты в день (задачи, моки, теория)">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={series} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid stroke={GRID} vertical={false} />
            <XAxis dataKey="label" tick={axisTick} axisLine={false} tickLine={false} />
            <YAxis allowDecimals={false} tick={axisTick} axisLine={false} tickLine={false} width={32} />
            <Tooltip contentStyle={tipStyle()} formatter={(v) => [`${v} min`, "Time"]} />
            <Bar dataKey="minutes" name="Минуты" fill={FILL} stroke={INK} strokeWidth={1} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Накопительное время" hint="Суммарные минуты учёбы">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={series} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="adminTimeFillLite" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={INK} stopOpacity={0.14} />
                <stop offset="100%" stopColor={INK} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={GRID} vertical={false} />
            <XAxis dataKey="label" tick={axisTick} axisLine={false} tickLine={false} />
            <YAxis allowDecimals={false} tick={axisTick} axisLine={false} tickLine={false} width={32} />
            <Tooltip contentStyle={tipStyle()} formatter={(v) => [`${v} min`, "Total"]} />
            <Area
              type="monotone"
              dataKey="minutesCum"
              name="Всего мин"
              stroke={INK}
              fill="url(#adminTimeFillLite)"
              strokeWidth={2.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}
