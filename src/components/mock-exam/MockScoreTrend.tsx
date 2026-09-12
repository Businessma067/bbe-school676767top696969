import { useId, useMemo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useLocalizedNavigate } from "@/hooks/use-localized-navigate";
import type { MockAttempt } from "@/lib/user-progress";

const STROKE = "var(--color-caramel-deep)";
const GRID = "var(--border)";
const MUTED = "var(--muted-foreground)";
const axisTick = { fill: MUTED, fontSize: 11 };

function pctOf(m: MockAttempt) {
  return Math.round((m.points_earned / Math.max(1, m.points_total)) * 100);
}

export function MockScoreTrend({ attempts }: { attempts: MockAttempt[] }) {
  const fillId = `mockScoreTrendFill-${useId().replace(/:/g, "")}`;
  const navigate = useLocalizedNavigate();
  const data = useMemo(() => {
    const chronological = [...attempts].sort((a, b) => a.completed_at.localeCompare(b.completed_at));
    return chronological.map((m, i) => ({
      n: i + 1,
      pct: pctOf(m),
      examId: m.exam_id,
      title: m.exam_title,
      date: new Date(m.completed_at).toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
      }),
    }));
  }, [attempts]);

  if (data.length === 0) return null;

  const open = (examId: string | undefined) => {
    if (!examId) return;
    void navigate({ to: `/mock-exams/${examId}/review` });
  };

  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="border-b border-border px-5 py-4 sm:px-6">
        <h3 className="font-display text-lg font-semibold tracking-tight">Results</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Score of each completed sitting, in order. Click a point to open it.
        </p>
      </div>
      <div className="h-64 w-full px-2 pb-4 pt-3 sm:px-4">
        <ResponsiveContainer width="100%" height="100%" debounce={80}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 12, left: 0, bottom: 0 }}
            onClick={(state) => {
              const examId = (
                state as { activePayload?: Array<{ payload?: { examId?: string } }> } | undefined
              )?.activePayload?.[0]?.payload?.examId;
              open(examId);
            }}
            style={{ cursor: "pointer" }}
          >
            <defs>
              <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={STROKE} stopOpacity={0.22} />
                <stop offset="100%" stopColor={STROKE} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={GRID} vertical={false} />
            <XAxis dataKey="n" tick={axisTick} axisLine={false} tickLine={false} />
            <YAxis
              domain={[0, 100]}
              tick={axisTick}
              axisLine={false}
              tickLine={false}
              width={36}
              tickFormatter={(v) => `${v}%`}
            />
            <Tooltip
              contentStyle={{
                background: "var(--popover)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                fontSize: 12,
                color: "var(--foreground)",
              }}
              formatter={(value, _name, item) => {
                const row = item?.payload as { title?: string; date?: string } | undefined;
                return [`${value}%`, row?.title ? `${row.title} · ${row.date}` : "Score"];
              }}
              labelFormatter={(label) => `Sitting ${label}`}
            />
            <Area
              type="monotone"
              dataKey="pct"
              stroke={STROKE}
              strokeWidth={2}
              fill={`url(#${fillId})`}
              dot={{ r: 4, strokeWidth: 0, fill: STROKE, cursor: "pointer" }}
              activeDot={{ r: 6, strokeWidth: 0, fill: STROKE }}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
