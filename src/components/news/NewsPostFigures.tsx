import type { ReactNode } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const INK = "#161616";
const MUTED = "#5a584f";
const RULE = "#d8d6ce";
const PAPER = "#fdf9f0";
const EMBER = "#c45f1a";
const MINT = "#3d6b5a";
const STEEL = "#3a5a78";

type FigureProps = {
  caption: string;
};

function FigureFrame({ caption, children }: FigureProps & { children: ReactNode }) {
  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-border bg-card">
      <div className="bg-[var(--paper)] px-4 py-5 sm:px-6 sm:py-6">{children}</div>
      <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:px-6">
        {caption}
      </figcaption>
    </figure>
  );
}

const FEED_PILLARS = [
  {
    label: "Product",
    detail: "What shipped, what broke, what we fixed next.",
    tone: EMBER,
  },
  {
    label: "Exam craft",
    detail: "How banks, keys, and explanations get rewritten.",
    tone: STEEL,
  },
  {
    label: "Study notes",
    detail: "Short prep habits that survive a real sitting.",
    tone: MINT,
  },
];

/** Soft editorial map of what this news feed covers. */
export function NewsFeedMapFigure({ caption }: FigureProps) {
  return (
    <FigureFrame caption={caption}>
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: MUTED }}
          >
            Feed map
          </p>
          <p className="mt-1 font-display text-lg font-semibold" style={{ color: INK }}>
            Three lanes, one place
          </p>
        </div>
        <svg width="72" height="40" viewBox="0 0 72 40" aria-hidden="true" className="shrink-0 opacity-80">
          <path
            d="M4 28 C18 8, 30 34, 44 16 S62 6, 68 18"
            fill="none"
            stroke={INK}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="4" cy="28" r="2.2" fill={EMBER} />
          <circle cx="44" cy="16" r="2.2" fill={STEEL} />
          <circle cx="68" cy="18" r="2.2" fill={MINT} />
        </svg>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {FEED_PILLARS.map((pillar) => (
          <div
            key={pillar.label}
            className="rounded-md border px-3.5 py-3.5"
            style={{ borderColor: RULE, background: "rgba(255,255,255,0.55)" }}
          >
            <div className="mb-2.5 flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: pillar.tone }}
                aria-hidden="true"
              />
              <span className="font-display text-sm font-semibold" style={{ color: INK }}>
                {pillar.label}
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
              {pillar.detail}
            </p>
          </div>
        ))}
      </div>
    </FigureFrame>
  );
}

const REWRITE_STAGES = [
  { stage: "Domain check", hours: 18 },
  { stage: "False candidates", hours: 27 },
  { stage: "Key sync", hours: 14 },
  { stage: "Step polish", hours: 31 },
];

function RewriteTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="rounded-md px-3 py-2 text-xs shadow-md"
      style={{
        background: PAPER,
        border: `1px solid ${RULE}`,
        color: INK,
      }}
    >
      <p className="font-semibold">{label}</p>
      <p className="mt-0.5" style={{ color: MUTED }}>
        ~{payload[0].value} editor hours in the last bank pass
      </p>
    </div>
  );
}

/** Relative editor effort across a mock-bank rewrite. Illustrative, not a live metric. */
export function MockRewriteEffortFigure({ caption }: FigureProps) {
  return (
    <FigureFrame caption={caption}>
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: MUTED }}
          >
            Bank rewrite pass
          </p>
          <p className="mt-1 font-display text-lg font-semibold" style={{ color: INK }}>
            Where the hours actually go
          </p>
        </div>
        <p className="text-[11px]" style={{ color: MUTED }}>
          Relative effort · last major pass
        </p>
      </div>
      <div className="h-[220px] w-full sm:h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={REWRITE_STAGES}
            margin={{ top: 8, right: 4, left: -18, bottom: 0 }}
            barCategoryGap="28%"
          >
            <CartesianGrid stroke={`${INK}12`} vertical={false} />
            <XAxis
              dataKey="stage"
              tick={{ fill: MUTED, fontSize: 11 }}
              axisLine={{ stroke: RULE }}
              tickLine={false}
              interval={0}
            />
            <YAxis
              tick={{ fill: MUTED, fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              width={36}
            />
            <Tooltip content={<RewriteTooltip />} cursor={{ fill: `${INK}06` }} />
            <Bar dataKey="hours" radius={[4, 4, 0, 0]} maxBarSize={44}>
              {REWRITE_STAGES.map((row) => (
                <Cell
                  key={row.stage}
                  fill={row.stage === "Step polish" || row.stage === "False candidates" ? EMBER : INK}
                  fillOpacity={row.stage === "Step polish" || row.stage === "False candidates" ? 0.9 : 0.72}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </FigureFrame>
  );
}

const KEEP_CUT = [
  { bucket: "Drafted", count: 40 },
  { bucket: "Kept", count: 18 },
  { bucket: "Reworked", count: 11 },
  { bucket: "Cut", count: 22 },
];

function KeepCutTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="rounded-md px-3 py-2 text-xs shadow-md"
      style={{
        background: PAPER,
        border: `1px solid ${RULE}`,
        color: INK,
      }}
    >
      <p className="font-semibold">{label}</p>
      <p className="mt-0.5" style={{ color: MUTED }}>
        ~{payload[0].value} tasks in the last economics bank pass
      </p>
    </div>
  );
}

/** How many drafted tasks survive into a live bank. Illustrative. */
export function MockKeepCutFigure({ caption }: FigureProps) {
  return (
    <FigureFrame caption={caption}>
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: MUTED }}
          >
            Volume, not vibes
          </p>
          <p className="mt-1 font-display text-lg font-semibold" style={{ color: INK }}>
            How much we add, how much we cut
          </p>
        </div>
        <p className="text-[11px]" style={{ color: MUTED }}>
          Last economics bank pass · relative counts
        </p>
      </div>
      <div className="h-[220px] w-full sm:h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={KEEP_CUT}
            margin={{ top: 8, right: 4, left: -18, bottom: 0 }}
            barCategoryGap="28%"
          >
            <CartesianGrid stroke={`${INK}12`} vertical={false} />
            <XAxis
              dataKey="bucket"
              tick={{ fill: MUTED, fontSize: 11 }}
              axisLine={{ stroke: RULE }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: MUTED, fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              width={36}
            />
            <Tooltip content={<KeepCutTooltip />} cursor={{ fill: `${INK}06` }} />
            <Bar dataKey="count" radius={[4, 4, 0, 0]} maxBarSize={44}>
              {KEEP_CUT.map((row) => (
                <Cell
                  key={row.bucket}
                  fill={
                    row.bucket === "Kept"
                      ? MINT
                      : row.bucket === "Cut"
                        ? EMBER
                        : row.bucket === "Reworked"
                          ? STEEL
                          : INK
                  }
                  fillOpacity={row.bucket === "Drafted" ? 0.55 : 0.9}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </FigureFrame>
  );
}

const SCORE_LEAK = [
  { section: "Econ", leak: 22 },
  { section: "English", leak: 14 },
  { section: "Math", leak: 31 },
];

function LeakTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="rounded-md px-3 py-2 text-xs shadow-md"
      style={{
        background: PAPER,
        border: `1px solid ${RULE}`,
        color: INK,
      }}
    >
      <p className="font-semibold">{label}</p>
      <p className="mt-0.5" style={{ color: MUTED }}>
        ~{payload[0].value}% of recoverable points lost to avoidable slips
      </p>
    </div>
  );
}

/** Small companion chart: where hard mocks tend to expose score leaks. */
export function MockScoreLeakFigure({ caption }: FigureProps) {
  return (
    <FigureFrame caption={caption}>
      <div className="mb-3">
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: MUTED }}
        >
          Demo mock review
        </p>
        <p className="mt-1 font-display text-lg font-semibold" style={{ color: INK }}>
          Score leaks by section
        </p>
      </div>
      <div className="h-[180px] w-full sm:h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={SCORE_LEAK}
            layout="vertical"
            margin={{ top: 4, right: 12, left: 8, bottom: 0 }}
            barCategoryGap="32%"
          >
            <CartesianGrid stroke={`${INK}12`} horizontal={false} />
            <XAxis
              type="number"
              domain={[0, 40]}
              tick={{ fill: MUTED, fontSize: 11 }}
              axisLine={{ stroke: RULE }}
              tickLine={false}
              tickFormatter={(v) => `${v}%`}
            />
            <YAxis
              type="category"
              dataKey="section"
              tick={{ fill: INK, fontSize: 12, fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
              width={58}
            />
            <Tooltip content={<LeakTooltip />} cursor={{ fill: `${INK}06` }} />
            <Bar dataKey="leak" radius={[0, 4, 4, 0]} maxBarSize={22}>
              {SCORE_LEAK.map((row) => (
                <Cell
                  key={row.section}
                  fill={row.section === "Math" ? EMBER : row.section === "Econ" ? STEEL : MINT}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </FigureFrame>
  );
}

const FIGURES = {
  "news-feed-map": NewsFeedMapFigure,
  "mock-rewrite-effort": MockRewriteEffortFigure,
  "mock-keep-cut": MockKeepCutFigure,
  "mock-score-leak": MockScoreLeakFigure,
} as const;

export type NewsFigureId = keyof typeof FIGURES;

export function NewsPostFigure({ id, caption }: { id: string; caption: string }) {
  const Figure = FIGURES[id as NewsFigureId];
  if (!Figure) return null;
  return <Figure caption={caption} />;
}
