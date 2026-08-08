import { memo, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/lib/utils";
import {
  isSectionHeaderRow,
  segmentCaseContext,
  type CaseChartSpec,
} from "@/lib/case-context";

type CaseContextRichProps = {
  content: string;
  className?: string;
  emphasized?: boolean;
};

const CHART_COLORS = ["#8B5A2B", "#2A1F17", "#A67C52", "#5C4033", "#C4A484", "#3D2914"];

/** Case charts paint once — long Recharts spins feel stuck when parents re-render. */
const CHART_ANIM = {
  isAnimationActive: false,
};

function cleanCell(cell: string): string {
  return cell.replace(/\*\*/g, "").trim();
}

function CaseTable({ rows }: { rows: string[][] }) {
  if (rows.length === 0) return null;
  const header = rows[0]!;
  const body = rows.slice(1);
  const colCount = Math.max(...rows.map((r) => r.length));

  return (
    <div className="my-4 w-full overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[28rem] border-collapse text-[13px]">
        <thead className="bg-secondary/70">
          <tr>
            {Array.from({ length: colCount }, (_, i) => (
              <th
                key={`h-${i}`}
                className="border-b border-border px-3 py-2 text-left font-semibold text-foreground"
              >
                {cleanCell(header[i] ?? "")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => {
            const section = isSectionHeaderRow(row);
            const totalish = /total/i.test(cleanCell(row[0] ?? ""));
            if (section) {
              return (
                <tr key={`r-${ri}`} className="bg-secondary/90">
                  <td
                    colSpan={colCount}
                    className="border-t border-border px-3 py-2.5 text-[11px] font-bold uppercase tracking-wider text-foreground"
                  >
                    {cleanCell(row[0] ?? "")}
                  </td>
                </tr>
              );
            }
            return (
              <tr
                key={`r-${ri}`}
                className={cn(
                  ri % 2 === 1 && "bg-secondary/20",
                  totalish && "bg-secondary/40 font-semibold",
                )}
              >
                {Array.from({ length: colCount }, (_, ci) => (
                  <td
                    key={`c-${ri}-${ci}`}
                    className={cn(
                      "border-t border-border px-3 py-2 align-top text-foreground/90",
                      ci > 0 && "tabular-nums",
                      totalish && "font-semibold text-foreground",
                    )}
                  >
                    {cleanCell(row[ci] ?? "")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const CaseChart = memo(function CaseChart({ chart }: { chart: CaseChartSpec }) {
  const title = chart.title?.trim();
  const height = 260;

  return (
    <div className="my-4 w-full rounded-lg border border-border bg-card/40 p-3 sm:p-4">
      {title ? (
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-taupe">{title}</p>
      ) : null}
      <div className="w-full" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%" debounce={80}>
          {chart.type === "pie" ? (
            <PieChart>
              <Pie
                data={chart.data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                {...CHART_ANIM}
                labelLine={false}
                label={({ name, percent }) => `${name} ${Math.round((percent ?? 0) * 100)}%`}
              >
                {chart.data.map((_, i) => (
                  <Cell key={`slice-${i}`} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          ) : chart.type === "line" ? (
            <LineChart data={chart.data} margin={{ top: 8, right: 12, left: 0, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8e0d4" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend />
              {chart.seriesKeys.map((key, i) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={CHART_COLORS[i % CHART_COLORS.length]}
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  {...CHART_ANIM}
                />
              ))}
            </LineChart>
          ) : (
            <BarChart data={chart.data} margin={{ top: 8, right: 12, left: 0, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8e0d4" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend />
              {chart.seriesKeys.map((key, i) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={CHART_COLORS[i % CHART_COLORS.length]}
                  radius={[4, 4, 0, 0]}
                  {...CHART_ANIM}
                />
              ))}
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
});

/**
 * Renders economics case context with HTML tables, Recharts, and markdown prose.
 */
export function CaseContextRich({ content, className, emphasized }: CaseContextRichProps) {
  const segments = useMemo(() => segmentCaseContext(content), [content]);

  return (
    <div
      className={cn(
        "case-context-rich max-w-full break-words text-sm leading-relaxed text-muted-foreground",
        "[&_p]:mb-3 [&_p:last-child]:mb-0",
        "[&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5",
        "[&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5",
        "[&_li]:mb-1",
        "[&_strong]:font-semibold [&_strong]:text-foreground",
        "[&_pre]:my-3 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border [&_pre]:bg-secondary/40 [&_pre]:p-3 [&_pre]:font-mono [&_pre]:text-[12px] [&_pre]:leading-snug [&_pre]:text-foreground",
        "[&_code]:rounded [&_code]:bg-secondary [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[12px]",
        "[&_pre_code]:bg-transparent [&_pre_code]:p-0",
        emphasized &&
          "[&_p:first-child]:font-display [&_p:first-child]:text-lg [&_p:first-child]:font-semibold [&_p:first-child]:text-foreground sm:[&_p:first-child]:text-xl",
        className,
      )}
    >
      {segments.map((seg, idx) => {
        if (seg.kind === "table") return <CaseTable key={`t-${idx}`} rows={seg.rows} />;
        if (seg.kind === "chart") {
          const c = seg.chart;
          const key = `c-${c.type}-${c.title ?? ""}-${idx}-${c.data.length}`;
          return <CaseChart key={key} chart={c} />;
        }
        return (
          <ReactMarkdown key={`m-${idx}`} remarkPlugins={[remarkGfm]}>
            {seg.text}
          </ReactMarkdown>
        );
      })}
    </div>
  );
}

export { scrubStatementHints, normalizeCaseContext } from "@/lib/case-context";
