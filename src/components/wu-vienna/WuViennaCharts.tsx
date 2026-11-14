import type { ReactNode } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CHART = {
  ink: "var(--foreground)",
  muted: "var(--muted-foreground)",
  border: "var(--border)",
  red: "#B3392A",
  amber: "#D97706",
  slate: "#3F3F46",
  teal: "#0F766E",
};

const FT_EUROPEAN_TREND = [
  { year: "2023", rank: 41 },
  { year: "2024", rank: 46 },
  { year: "2025", rank: 41 },
];

const QS_SUBJECT_RANKS = [
  { subject: "Supply Chain MSc", rank: 2, fill: CHART.red },
  { subject: "Marketing MSc", rank: 12, fill: CHART.amber },
  { subject: "Management MSc", rank: 17, fill: CHART.slate },
  { subject: "Finance MSc", rank: 22, fill: CHART.teal },
  { subject: "Business & Mgmt (subject)", rank: 69, fill: CHART.muted },
];

const PROGRAM_MIX = [
  { name: "Bachelor’s", value: 3, fill: CHART.red },
  { name: "Master’s", value: 16, fill: CHART.amber },
  { name: "Doctoral / PhD", value: 5, fill: CHART.slate },
  { name: "MBA tracks", value: 10, fill: CHART.teal },
];

const tooltipStyle = {
  background: "var(--popover)",
  border: `1px solid ${CHART.border}`,
  borderRadius: 12,
  color: CHART.ink,
  fontSize: 12,
};

function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
      <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function WuViennaRankingCharts() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <ChartCard
        title="FT European Business School rank"
        subtitle="Lower number is better. WU returned to #41 in 2025 after #46 in 2024."
      >
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={FT_EUROPEAN_TREND} margin={{ top: 12, right: 16, left: 0, bottom: 8 }}>
              <CartesianGrid stroke={CHART.border} strokeDasharray="3 3" />
              <XAxis dataKey="year" tick={{ fill: CHART.muted, fontSize: 12 }} />
              <YAxis reversed domain={[35, 50]} tick={{ fill: CHART.muted, fontSize: 12 }} width={36} />
              <Tooltip formatter={(value) => [`#${value}`, "Rank"]} contentStyle={tooltipStyle} />
              <Line
                type="monotone"
                dataKey="rank"
                stroke={CHART.red}
                strokeWidth={3}
                dot={{ r: 5, fill: CHART.red }}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      <ChartCard
        title="Selected QS 2026 ranks"
        subtitle="Master’s programme ranks and the Business & Management subject table."
      >
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={QS_SUBJECT_RANKS}
              layout="vertical"
              margin={{ top: 8, right: 16, left: 8, bottom: 8 }}
            >
              <CartesianGrid stroke={CHART.border} strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 80]} tick={{ fill: CHART.muted, fontSize: 12 }} />
              <YAxis
                type="category"
                dataKey="subject"
                width={118}
                tick={{ fill: CHART.ink, fontSize: 11 }}
              />
              <Tooltip formatter={(value) => [`#${value}`, "Rank"]} contentStyle={tooltipStyle} />
              <Bar dataKey="rank" radius={[0, 6, 6, 0]} isAnimationActive={false}>
                {QS_SUBJECT_RANKS.map((row) => (
                  <Cell key={row.subject} fill={row.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>
    </div>
  );
}

export function WuViennaProgrammeMixChart() {
  return (
    <ChartCard
      title="Programme mix at WU"
      subtitle="Count of programme tracks commonly listed by WU (not enrolment share)."
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <PieChart width={200} height={200}>
          <Pie
            data={PROGRAM_MIX}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={52}
            outerRadius={84}
            paddingAngle={2}
            stroke="#fff"
            strokeWidth={2}
            isAnimationActive={false}
          >
            {PROGRAM_MIX.map((slice) => (
              <Cell key={slice.name} fill={slice.fill} />
            ))}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} />
        </PieChart>
        <ul className="space-y-2 text-sm">
          {PROGRAM_MIX.map((slice) => (
            <li key={slice.name} className="flex items-center gap-2 text-foreground">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: slice.fill }}
              />
              <span>
                {slice.name}: <span className="font-medium text-foreground">{slice.value}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </ChartCard>
  );
}
