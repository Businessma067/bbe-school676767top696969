import { useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { stage: "Foundation Year", private: 25000, wu: 0 },
  { stage: "Year 1 (Bachelor)", private: 45000, wu: 5000 },
  { stage: "Year 2", private: 65000, wu: 10000 },
  { stage: "Year 3 (Graduation)", private: 85000, wu: 15000 },
];

// Palette (matches the site's warm ivory / caramel / espresso system)
const ESPRESSO = "#2A1F17";
const CARAMEL = "#B8865B";
const CARAMEL_DEEP = "#8B5A2B";
const IVORY = "#F7F3EC";

const fmt = (n: number) =>
  "€" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });

function PremiumTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const priv = Number(payload.find((p: any) => p.dataKey === "private")?.value ?? 0);
  const wu = Number(payload.find((p: any) => p.dataKey === "wu")?.value ?? 0);
  const delta = priv - wu;
  return (
    <div
      className="rounded-xl px-5 py-4 shadow-2xl"
      style={{
        background: "rgba(255, 253, 248, 0.92)",
        backdropFilter: "blur(18px) saturate(140%)",
        WebkitBackdropFilter: "blur(18px) saturate(140%)",
        border: `1px solid ${CARAMEL}55`,
        minWidth: 240,
      }}
    >
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.28em]"
        style={{ color: `${ESPRESSO}99` }}
      >
        {label}
      </p>
      <div className="mt-3 space-y-1.5">
        <div className="flex items-center justify-between gap-6">
          <span className="text-xs" style={{ color: `${ESPRESSO}AA` }}>
            Private Route
          </span>
          <span
            className="font-display text-sm font-semibold"
            style={{ color: ESPRESSO }}
          >
            {fmt(priv)}
          </span>
        </div>
        <div className="flex items-center justify-between gap-6">
          <span className="text-xs" style={{ color: `${ESPRESSO}AA` }}>
            WU Vienna Route
          </span>
          <span
            className="font-display text-sm font-semibold"
            style={{ color: CARAMEL_DEEP }}
          >
            {fmt(wu)}
          </span>
        </div>
      </div>
      <div
        className="mt-4 pt-3"
        style={{ borderTop: `1px solid ${ESPRESSO}18` }}
      >
        <p
          className="text-[10px] font-medium uppercase tracking-[0.22em]"
          style={{ color: `${ESPRESSO}80` }}
        >
          Net Family Capital Saved
        </p>
        <p
          className="mt-1 font-display text-lg font-bold"
          style={{ color: CARAMEL_DEEP }}
        >
          {fmt(delta)}
        </p>
      </div>
    </div>
  );
}

export function LiabilityChart() {
  const ticks = useMemo(() => [0, 20000, 40000, 60000, 80000], []);
  return (
    <div className="w-full">
      <div className="h-[360px] w-full sm:h-[440px] lg:h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
          >
            <defs>
              <linearGradient id="privateFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={ESPRESSO} stopOpacity={0.28} />
                <stop offset="100%" stopColor={ESPRESSO} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="wuFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={CARAMEL} stopOpacity={0.5} />
                <stop offset="100%" stopColor={CARAMEL} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              stroke={`${ESPRESSO}12`}
              vertical={false}
            />
            <XAxis
              dataKey="stage"
              tick={{
                fill: `${ESPRESSO}AA`,
                fontSize: 11,
                fontFamily: "DM Sans, sans-serif",
                letterSpacing: 0.4,
              }}
              tickLine={false}
              axisLine={{ stroke: `${ESPRESSO}22` }}
              tickMargin={12}
            />
            <YAxis
              ticks={ticks}
              tickFormatter={(v) => `€${(v / 1000).toFixed(0)}k`}
              tick={{
                fill: `${ESPRESSO}88`,
                fontSize: 11,
                fontFamily: "DM Sans, sans-serif",
              }}
              tickLine={false}
              axisLine={false}
              width={56}
            />
            <Tooltip
              content={<PremiumTooltip />}
              cursor={{
                stroke: `${CARAMEL_DEEP}80`,
                strokeDasharray: "3 4",
              }}
            />
            <Area
              type="monotone"
              dataKey="private"
              name="Private Route"
              stroke={ESPRESSO}
              strokeWidth={2.25}
              fill="url(#privateFill)"
              activeDot={{ r: 5, fill: ESPRESSO, stroke: IVORY, strokeWidth: 2 }}
              isAnimationActive
              animationDuration={1400}
            />
            <Area
              type="monotone"
              dataKey="wu"
              name="WU Vienna"
              stroke={CARAMEL_DEEP}
              strokeWidth={2.25}
              fill="url(#wuFill)"
              activeDot={{
                r: 5,
                fill: CARAMEL_DEEP,
                stroke: IVORY,
                strokeWidth: 2,
              }}
              isAnimationActive
              animationDuration={1600}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Custom legend */}
      <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
        <div className="flex items-center gap-3">
          <span
            className="h-[2px] w-8"
            style={{ background: ESPRESSO }}
          />
          <span
            className="text-xs font-medium tracking-wide"
            style={{ color: `${ESPRESSO}CC` }}
          >
            Private Business School — cumulative outlay
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-8" style={{ background: CARAMEL_DEEP }} />
          <span
            className="text-xs font-medium tracking-wide"
            style={{ color: `${ESPRESSO}CC` }}
          >
            WU Vienna Direct Admission
          </span>
        </div>
      </div>
    </div>
  );
}
