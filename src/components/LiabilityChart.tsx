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

const fmt = (n: number) =>
  "€" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });

function PremiumTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const priv = Number(payload.find((p: any) => p.dataKey === "private")?.value ?? 0);
  const wu = Number(payload.find((p: any) => p.dataKey === "wu")?.value ?? 0);
  const delta = priv - wu;
  return (
    <div
      className="rounded-xl border border-white/15 px-5 py-4 shadow-2xl"
      style={{
        background: "rgba(20,20,20,0.72)",
        backdropFilter: "blur(18px) saturate(140%)",
        WebkitBackdropFilter: "blur(18px) saturate(140%)",
        minWidth: 240,
      }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
        {label}
      </p>
      <div className="mt-3 space-y-1.5">
        <div className="flex items-center justify-between gap-6">
          <span className="text-xs text-white/60">Private Route</span>
          <span className="font-display text-sm font-semibold text-white">
            {fmt(priv)}
          </span>
        </div>
        <div className="flex items-center justify-between gap-6">
          <span className="text-xs text-white/60">WU Vienna Route</span>
          <span
            className="font-display text-sm font-semibold"
            style={{ color: "#C8375A" }}
          >
            {fmt(wu)}
          </span>
        </div>
      </div>
      <div className="mt-4 border-t border-white/10 pt-3">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">
          Net Family Capital Loss
        </p>
        <p className="mt-1 font-display text-lg font-bold text-white">
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
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="wuFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7A0026" stopOpacity={0.55} />
                <stop offset="100%" stopColor="#7A0026" stopOpacity={0} />
              </linearGradient>
              <filter id="whiteGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <CartesianGrid
              stroke="rgba(255,255,255,0.06)"
              vertical={false}
            />
            <XAxis
              dataKey="stage"
              tick={{
                fill: "rgba(255,255,255,0.55)",
                fontSize: 11,
                fontFamily: "DM Sans, sans-serif",
                letterSpacing: 0.4,
              }}
              tickLine={false}
              axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
              tickMargin={12}
            />
            <YAxis
              ticks={ticks}
              tickFormatter={(v) => `€${(v / 1000).toFixed(0)}k`}
              tick={{
                fill: "rgba(255,255,255,0.45)",
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
                stroke: "rgba(255,255,255,0.2)",
                strokeDasharray: "3 4",
              }}
            />
            <Area
              type="monotone"
              dataKey="private"
              name="Private Route"
              stroke="#FFFFFF"
              strokeWidth={2.25}
              fill="url(#privateFill)"
              filter="url(#whiteGlow)"
              activeDot={{ r: 5, fill: "#FFFFFF", stroke: "#0D0D0D", strokeWidth: 2 }}
              isAnimationActive
              animationDuration={1400}
            />
            <Area
              type="monotone"
              dataKey="wu"
              name="WU Vienna"
              stroke="#7A0026"
              strokeWidth={2.25}
              fill="url(#wuFill)"
              activeDot={{ r: 5, fill: "#7A0026", stroke: "#0D0D0D", strokeWidth: 2 }}
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
            style={{ background: "#FFFFFF", boxShadow: "0 0 8px rgba(255,255,255,0.6)" }}
          />
          <span className="text-xs font-medium tracking-wide text-white/70">
            Private Business School — cumulative outlay
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-8" style={{ background: "#7A0026" }} />
          <span className="text-xs font-medium tracking-wide text-white/70">
            WU Vienna Direct Admission
          </span>
        </div>
      </div>
    </div>
  );
}
