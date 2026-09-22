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
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SUBJECT_META, subjectLabel, type SubjectKey } from "@/config/scoring-config";
import type { GroupAnalytics, TaskAnalyticsRow } from "@/lib/mock-exam-analytics";
import { buildExamAnalytics } from "@/lib/mock-exam-analytics";
import { formatCompactDuration, formatQuestionTime } from "@/lib/mock-exam-session";
import { cn } from "@/lib/utils";

type Analytics = ReturnType<typeof buildExamAnalytics>;
type UiLocale = "en" | "de";

function overviewCopy(locale: UiLocale) {
  if (locale === "de") {
    return {
      subtitle: "Zeit, Trefferquote und wi2-Punkte von der ersten bis zur letzten Aufgabe.",
      examScore: "Prüfungsergebnis",
      pts: "Pkt.",
      statementAccuracy: "Aussagen-Trefferquote",
      judgedOf: (a: number, b: number) => `${a} von ${b} richtig beurteilt`,
      time: "Zeit",
      timedSitting: "Mit Zeitlimit",
      untimedSitting: "Ohne Zeitlimit",
      medianPerQ: "Median pro Aufgabe",
      average: "Durchschnitt",
      marked: "bearbeitet",
      timePerQ: "Zeit pro Aufgabe",
      timePerQHint: (last: number, slowIdx: number, slowTime: string) =>
        `A1 bis A${last}. Längste: A${slowIdx} (${slowTime}).`,
      timePerQFallback: "Sekunden pro Aufgabe, in Prüfungsreihenfolge.",
      timeNotRecorded: "Die Zeit pro Aufgabe wurde für diesen Durchgang nicht erfasst.",
      accuracyBySubject: "Trefferquote nach Fach",
      accuracyBySubjectHint: "Anteil richtig beurteilter Aussagen je Abschnitt.",
      noSectionData: "Keine Abschnittsdaten.",
      accuracyByChapter: "Trefferquote nach Kapitel",
      noChapterData: "Keine Kapiteldaten.",
      chapterHintOrdered: "Kapitel von schwächsten zu stärksten.",
      chapterHintCustom: "Kapitel-Tags erscheinen bei Custom-Mock-Builder-Prüfungen.",
      chapterEmpty: "Dieser Durchgang hat keine Kapitel-Labels — die Auswertung bleibt auf Fachebene.",
      whatNext: "Was als Nächstes lernen",
      whatNextTopics:
        "Themen unter 70 % brauchen einen weiteren Durchgang. Ab 85 % sitzt es.",
      whatNextSections:
        "Abschnitte unter 70 % brauchen einen weiteren Durchgang. Ab 85 % sitzt es.",
      review: "Wiederholen",
      reviewHint: "Unter 70 % der Aussagen richtig beurteilt.",
      watch: "Beobachten",
      watchHint: "70–84 %. Solide, aber noch undicht.",
      holding: "Stabil",
      holdingHint: "85 % und mehr.",
      emptyBand: "Nichts in diesem Band.",
      emptyHolding: "Noch nichts bei 85 %.",
      sections: "Abschnitte",
      topics: "Themen",
      chapters: "Kapitel",
      questions: "Aufgaben",
      questionsHint: "A–E zeigen die Beurteilung, nicht ob du „richtig“ angekreuzt hast.",
      section: "Fach",
      topic: "Thema",
      statements: "Aussagen",
      points: "Punkte",
      accuracy: "Trefferquote",
      flagged: "markiert",
      name: "Name",
      score: "Ergebnis",
      task: "Aufgabe",
      tasks: "Aufgaben",
      question: "Aufgabe",
      statementMarked: (letter: string, yours: string, key: string, delta: string) =>
        `${letter}: markiert ${yours} · Schlüssel ${key} · ${delta} Pkt.`,
      true: "Richtig",
      false: "Falsch",
      blank: "leer",
      correct: "richtig",
      incorrect: "falsch",
    };
  }
  return {
    subtitle: "Time, accuracy, and wi2 points from the first question to the last.",
    examScore: "Exam score",
    pts: "pts",
    statementAccuracy: "Statement accuracy",
    judgedOf: (a: number, b: number) => `${a} of ${b} judged correctly`,
    time: "Time",
    timedSitting: "Timed sitting",
    untimedSitting: "Untimed sitting",
    medianPerQ: "Median per question",
    average: "Average",
    marked: "marked",
    timePerQ: "Time per question",
    timePerQHint: (last: number, slowIdx: number, slowTime: string) =>
      `Q1 to Q${last}. Longest: Q${slowIdx} (${slowTime}).`,
    timePerQFallback: "Seconds spent on each question, in exam order.",
    timeNotRecorded: "Time per question was not recorded for this sitting.",
    accuracyBySubject: "Accuracy by subject",
    accuracyBySubjectHint: "Share of statements judged correctly in each section.",
    noSectionData: "No section data.",
    accuracyByChapter: "Accuracy by chapter",
    noChapterData: "No chapter data.",
    chapterHintOrdered: "Chapters ordered from weakest to strongest.",
    chapterHintCustom: "Chapter tags appear on Custom Mock Builder exams.",
    chapterEmpty: "This sitting has no chapter labels, so the breakdown stays at subject level.",
    whatNext: "What to study next",
    whatNextTopics: "Topics below 70% need another pass. 85% and above are holding.",
    whatNextSections: "Sections below 70% need another pass. 85% and above are holding.",
    review: "Review",
    reviewHint: "Under 70% of statements judged correctly.",
    watch: "Watch",
    watchHint: "70–84%. Solid enough, still leaky.",
    holding: "Holding well",
    holdingHint: "85% and above.",
    emptyBand: "Nothing in this band.",
    emptyHolding: "Nothing reached 85% yet.",
    sections: "Sections",
    topics: "Topics",
    chapters: "Chapters",
    questions: "Questions",
    questionsHint: "A–E show judgment, not whether you ticked True.",
    section: "Section",
    topic: "Topic",
    statements: "Statements",
    points: "Points",
    accuracy: "Accuracy",
    flagged: "flagged",
    name: "Name",
    score: "Score",
    task: "task",
    tasks: "tasks",
    question: "Question",
    statementMarked: (letter: string, yours: string, key: string, delta: string) =>
      `${letter}: marked ${yours} · key ${key} · ${delta} pts`,
    true: "True",
    false: "False",
    blank: "blank",
    correct: "correct",
    incorrect: "incorrect",
  };
}

const STROKE = "var(--color-caramel-deep)";
const MUTED = "var(--muted-foreground)";
const GRID = "var(--border)";
const axisTick = { fill: MUTED, fontSize: 11 };

/** Monochrome brand fills — no subject green/blue on mock results. */
const BRAND_CHART = [
  "var(--color-caramel-deep)",
  "color-mix(in oklab, var(--color-caramel-deep) 70%, var(--foreground))",
  "color-mix(in oklab, var(--color-caramel-deep) 45%, var(--muted-foreground))",
  "color-mix(in oklab, var(--foreground) 55%, var(--muted-foreground))",
];

function brandFill(index: number) {
  return BRAND_CHART[index % BRAND_CHART.length]!;
}

function tipStyle(): CSSProperties {
  return {
    background: "var(--popover)",
    border: "1px solid var(--border)",
    borderRadius: 12,
    fontSize: 12,
    color: "var(--foreground)",
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
  void color;
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
      <div
        className="h-full rounded-full bg-caramel-deep"
        style={{ width: `${Math.min(100, Math.max(0, pct))}%` }}
      />
    </div>
  );
}

/** Y-axis tick: one line with ellipsis so chapter names never wrap. */
function OneLineCategoryTick({
  x = 0,
  y = 0,
  payload,
  width = 168,
}: {
  x?: number;
  y?: number;
  payload?: { value?: string | number };
  width?: number;
}) {
  const label = String(payload?.value ?? "");
  const boxW = Math.max(48, width - 8);
  return (
    <g transform={`translate(${x},${y})`}>
      <title>{label}</title>
      <foreignObject x={-boxW} y={-9} width={boxW} height={18}>
        <div
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            textAlign: "right",
            fontSize: 11,
            lineHeight: "18px",
            color: "var(--muted-foreground)",
          }}
        >
          {label}
        </div>
      </foreignObject>
    </g>
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
  copy,
}: {
  title: string;
  rows: GroupAnalytics[];
  copy: ReturnType<typeof overviewCopy>;
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
              <th className="px-5 py-2.5 font-medium sm:px-6">{copy.name}</th>
              <th className="px-3 py-2.5 text-right font-medium">{copy.score}</th>
              <th className="px-3 py-2.5 text-right font-medium">{copy.accuracy}</th>
              <th className="hidden px-3 py-2.5 text-right font-medium sm:table-cell">{copy.statements}</th>
              <th className="px-5 py-2.5 text-right font-medium sm:px-6">{copy.time}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className="border-b border-border last:border-b-0">
                <td className="px-5 py-4 sm:px-6">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="h-2 w-2 shrink-0 rounded-full bg-caramel-deep"
                      aria-hidden
                    />
                    <div className="min-w-0">
                      <p className="truncate font-medium">{row.label}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {row.taskCount} {row.taskCount === 1 ? copy.task : copy.tasks}
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

function StatementCells({
  task,
  copy,
}: {
  task: TaskAnalyticsRow;
  copy: ReturnType<typeof overviewCopy>;
}) {
  return (
    <div className="flex items-center gap-1">
      {task.judgments.map((j) => (
        <span
          key={j.letter}
          title={copy.statementMarked(
            j.letter,
            j.userMarked ? copy.true : copy.blank,
            j.isTrue ? copy.true : copy.false,
            formatDelta(j.delta),
          )}
          className={cn(
            "grid h-7 w-7 place-items-center rounded-md text-[11px] font-semibold",
            j.judgedOk
              ? "bg-caramel-deep/12 text-caramel-deep"
              : "bg-secondary text-muted-foreground",
          )}
        >
          {j.letter}
          <span className="sr-only">{j.judgedOk ? copy.correct : copy.incorrect}</span>
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
  questionWord = "Question",
}: {
  active?: boolean;
  payload?: Array<{ payload: { q: number; seconds: number; subject: string; accuracy: number } }>;
  questionWord?: string;
}) {
  if (!active || !payload?.[0]) return null;
  const row = payload[0].payload;
  return (
    <div className="rounded-xl border border-border bg-popover px-3 py-2 text-xs shadow-md">
      <p className="font-medium">
        {questionWord} {row.q}
      </p>
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
  locale = "en",
}: {
  examTitle: string;
  analytics: Analytics;
  onOpenTask: (index: number) => void;
  locale?: UiLocale;
}) {
  const copy = overviewCopy(locale);
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
        subject: subjectLabel(t.question.subject as SubjectKey, locale),
        color: SUBJECT_META[t.question.subject].color,
        accuracy: t.accuracyPct,
      })),
    [tasks, locale],
  );

  const slowest = useMemo(() => {
    const withTime = tasks.filter((t) => t.seconds > 0);
    return [...withTime].sort((a, b) => b.seconds - a.seconds)[0] ?? null;
  }, [tasks]);

  const subjectPie = useMemo(
    () =>
      sections.map((s, i) => ({
        name: s.label,
        value: Math.max(s.accuracyPct, 0.01),
        accuracy: s.accuracyPct,
        color: brandFill(i),
        earned: s.earned,
        max: s.max,
      })),
    [sections],
  );

  const chapterBars = useMemo(
    () =>
      [...chapters]
        .sort((a, b) => a.accuracyPct - b.accuracyPct)
        .map((c, i) => ({
          name: c.label,
          accuracy: c.accuracyPct,
          color: brandFill(i),
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
          {copy.subtitle}
        </p>
      </header>

      <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          <Stat
            value={`${pct}%`}
            label={copy.examScore}
            hint={`${total.toFixed(1)} / ${pointsTotal.toFixed(1)} ${copy.pts}`}
          />
          <Stat
            value={`${statementPct}%`}
            label={copy.statementAccuracy}
            hint={copy.judgedOf(statementCorrect, statementCount)}
          />
          <Stat
            value={secondsTaken != null ? formatCompactDuration(secondsTaken) : "—"}
            label={copy.time}
            hint={timed ? copy.timedSitting : copy.untimedSitting}
          />
          <Stat
            value={formatQuestionTime(medianSeconds)}
            label={copy.medianPerQ}
            hint={`${copy.average} ${formatQuestionTime(meanSeconds)} · ${answeredTasks}/${tasks.length} ${copy.marked}`}
          />
        </div>
      </section>

      <ChartFrame
        title={copy.timePerQ}
        hint={
          slowest
            ? copy.timePerQHint(
                tasks.at(-1)?.question.index ?? tasks.length,
                slowest.question.index,
                formatQuestionTime(slowest.seconds),
              )
            : copy.timePerQFallback
        }
        tall
      >
        {timeSeries.every((d) => d.seconds === 0) ? (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            {copy.timeNotRecorded}
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%" debounce={80}>
            <AreaChart data={timeSeries} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="mockExamTimeFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={STROKE} stopOpacity={0.22} />
                  <stop offset="100%" stopColor={STROKE} stopOpacity={0} />
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
                content={<TimeTooltip questionWord={copy.question} />}
                cursor={{ stroke: GRID, strokeWidth: 1 }}
              />
              <Area
                type="monotone"
                dataKey="seconds"
                stroke={STROKE}
                strokeWidth={2}
                fill="url(#mockExamTimeFill)"
                dot={{ r: 3, strokeWidth: 0, fill: STROKE }}
                activeDot={{ r: 5, strokeWidth: 0, fill: STROKE }}
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </ChartFrame>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartFrame title={copy.accuracyBySubject} hint={copy.accuracyBySubjectHint}>
          {subjectPie.length === 0 ? (
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              {copy.noSectionData}
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
                        ? [
                            `${row.accuracy}% · ${row.earned.toFixed(1)} / ${row.max.toFixed(1)} ${copy.pts}`,
                            String(name),
                          ]
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
                        <span
                          className="h-2 w-2 shrink-0 rounded-full"
                          style={{ backgroundColor: row.color }}
                        />
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
          title={copy.accuracyByChapter}
          hint={chapterBars.length ? copy.chapterHintOrdered : copy.chapterHintCustom}
        >
          {chapterBars.length === 0 ? (
            <div className="flex h-full items-center justify-center px-6 text-center text-sm text-muted-foreground">
              {copy.chapterEmpty}
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
                  formatter={(value) => [`${value}%`, copy.accuracy]}
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
          <h2 className="font-display text-xl font-semibold tracking-tight">{copy.whatNext}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {hasTopicBreakdown ? copy.whatNextTopics : copy.whatNextSections}
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <FocusList
            title={copy.review}
            hint={copy.reviewHint}
            rows={toReview}
            empty={copy.emptyBand}
          />
          <FocusList
            title={copy.watch}
            hint={copy.watchHint}
            rows={watch}
            empty={copy.emptyBand}
          />
          <FocusList
            title={copy.holding}
            hint={copy.holdingHint}
            rows={holdingWell}
            empty={copy.emptyHolding}
          />
        </div>
      </section>

      <GroupTable title={copy.sections} rows={sections} copy={copy} />
      {hasTopicBreakdown ? <GroupTable title={copy.topics} rows={topics} copy={copy} /> : null}
      {chapters.length > 0 ? <GroupTable title={copy.chapters} rows={chapters} copy={copy} /> : null}

      <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border px-5 py-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold tracking-tight">{copy.questions}</h2>
          <p className="text-xs text-muted-foreground">{copy.questionsHint}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[44rem] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="px-5 py-2.5 font-medium sm:px-6">{locale === "de" ? "A" : "Q"}</th>
                <th className="px-3 py-2.5 font-medium">{copy.section}</th>
                {hasTopicBreakdown ? <th className="px-3 py-2.5 font-medium">{copy.topic}</th> : null}
                <th className="px-3 py-2.5 font-medium">{copy.statements}</th>
                <th className="px-3 py-2.5 text-right font-medium">{copy.points}</th>
                <th className="px-3 py-2.5 text-right font-medium">{copy.accuracy}</th>
                <th className="px-5 py-2.5 text-right font-medium sm:px-6">{copy.time}</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => {
                const smLabel = subjectLabel(task.question.subject as SubjectKey, locale);
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
                          <span className="ml-1.5 text-xs text-muted-foreground">{copy.flagged}</span>
                        ) : null}
                      </button>
                    </td>
                    <td className="px-3 py-3.5 text-muted-foreground">{smLabel}</td>
                    {hasTopicBreakdown ? (
                      <td className="max-w-[14rem] truncate px-3 py-3.5 text-muted-foreground">
                        {task.topicLabel}
                      </td>
                    ) : null}
                    <td className="px-3 py-3.5">
                      <StatementCells task={task} copy={copy} />
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
