import { Fragment } from "react";
import { Check, X } from "lucide-react";

type ColKey = "free" | "full" | "wiso";

type ComparisonCell = {
  label: string;
  free: string;
  full: string;
  wiso: string;
};

type ComparisonSection = {
  title: string;
  rows: ComparisonCell[];
};

const comparisonSections: ComparisonSection[] = [
  {
    title: "Features",
    rows: [
      { label: "Math Tasks", free: "70", full: "1870", wiso: "1870" },
      { label: "Economics Tasks", free: "33", full: "913", wiso: "576" },
      { label: "English Tasks", free: "6", full: "729", wiso: "❌" },
      { label: "German Reading", free: "❌", full: "❌", wiso: "100" },
      { label: "Textbook Theory", free: "❌", full: "Full materials", wiso: "Wirtschaft verstehen" },
      { label: "Answer Sheet Simulator", free: "❌", full: "tick", wiso: "tick" },
      { label: "Interactive Speed Simulators", free: "❌", full: "tick", wiso: "tick" },
      { label: "Mock Exams", free: "❌", full: "7+ exams with answer sheets", wiso: "WiSo mocks with answer sheets" },
    ],
  },
  {
    title: "Insider Guide",
    rows: [
      { label: "Step by step explanations", free: "tick", full: "tick", wiso: "tick" },
      { label: "AI Study Assistant", free: "❌", full: "tick", wiso: "tick" },
      { label: "Tactical Trap Callouts", free: "❌", full: "tick", wiso: "tick" },
      { label: "Dynamic Focus Heatmap", free: "❌", full: "tick", wiso: "tick" },
      { label: "Support Chat", free: "❌", full: "tick", wiso: "tick" },
      { label: "Achievements & Medals Tab", free: "❌", full: "tick", wiso: "tick" },
      { label: "OSA Guide", free: "❌", full: "tick", wiso: "tick" },
    ],
  },
];

const columns: { key: ColKey; label: string }[] = [
  { key: "free", label: "Free Sample" },
  { key: "full", label: "BBE Full Course" },
  { key: "wiso", label: "WiSo Full Course" },
];

const COL_COUNT = columns.length + 1;

function renderValue(value: string) {
  if (value === "tick" || value === "✔️") {
    return <Check className="mx-auto h-3.5 w-3.5 text-caramel-deep" strokeWidth={3} />;
  }
  if (value === "❌") {
    return <X className="mx-auto h-3.5 w-3.5 text-gray-400" strokeWidth={2.5} />;
  }
  return value;
}

export function CompareTable({
  highlight,
  heading = "Compare plans",
  subheading = "See how this package stacks up against the rest.",
}: {
  highlight?: ColKey;
  heading?: string;
  subheading?: string;
}) {
  const dimClass = "opacity-30 grayscale";
  const hiClassBbe =
    "relative bg-gradient-to-b from-[#C2643A0d] to-transparent ring-2 ring-[#C2643A] shadow-[0_0_24px_-4px_rgba(194,100,58,0.55)]";
  const hiClassWiso =
    "relative bg-gradient-to-b from-indigo-500/10 to-transparent ring-2 ring-indigo-600 shadow-[0_0_24px_-4px_rgba(79,70,229,0.45)]";

  const hiClassFor = (key: ColKey) => (key === "wiso" ? hiClassWiso : hiClassBbe);

  return (
    <section className="mt-14 overflow-hidden rounded-3xl border border-border bg-card text-foreground shadow-sm">
      <div className="px-3 py-3 sm:px-4 lg:px-6 lg:py-4">
        <div className="mb-2 text-center sm:mb-3">
          <h2 className="font-display text-sm font-bold tracking-tight text-foreground sm:text-base lg:text-lg">
            {heading}
          </h2>
          <p className="mt-1 text-[10px] text-muted-foreground">{subheading}</p>
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto rounded-2xl border border-border bg-background sm:block">
          <table className="w-full min-w-[640px] border-collapse text-[11px]">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="sticky left-0 z-10 w-[170px] bg-muted px-2.5 py-1.5 text-left font-display text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Compare
                </th>
                {columns.map((col) => {
                  const isHi = highlight === col.key;
                  const isDim = Boolean(highlight && !isHi);
                  return (
                    <th
                      key={col.key}
                      className={`px-2.5 py-1.5 text-center font-display text-[9px] font-semibold uppercase tracking-widest ${
                        isHi ? `text-foreground bg-muted ${hiClassFor(col.key)}` : "bg-muted/50 text-muted-foreground"
                      } ${isDim ? dimClass : ""}`}
                    >
                      {col.label}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {comparisonSections.map((section, sectionIdx) => (
                <Fragment key={section.title}>
                  <tr className="border-t border-border">
                    <td
                      colSpan={COL_COUNT}
                      className="sticky left-0 z-10 bg-background px-2.5 py-1 text-left font-display text-[9px] font-semibold uppercase tracking-widest text-caramel-deep"
                    >
                      {section.title}
                    </td>
                  </tr>
                  {section.rows.map((row, rowIdx) => (
                    <tr
                      key={row.label}
                      className={`border-t border-border ${rowIdx % 2 === 0 ? "bg-muted/[0.4]" : "bg-transparent"}`}
                    >
                      <td className="sticky left-0 z-10 w-[170px] bg-background px-2.5 py-1.5 font-medium text-foreground/90">
                        {row.label}
                      </td>
                      {columns.map((col) => {
                        const isHi = highlight === col.key;
                        const isDim = Boolean(highlight && !isHi);
                        return (
                          <td
                            key={col.key}
                            className={`px-2.5 py-1.5 text-center font-medium text-foreground/80 ${
                              isHi ? hiClassFor(col.key) : ""
                            } ${isDim ? dimClass : ""}`}
                          >
                            {renderValue(row[col.key])}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  {sectionIdx < comparisonSections.length - 1 ? (
                    <tr className="border-t border-border">
                      <td colSpan={COL_COUNT} className="h-1 bg-background" />
                    </tr>
                  ) : null}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile unified table */}
        <div className="overflow-hidden rounded-2xl border border-border bg-background sm:hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-[10px]">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="sticky left-0 z-10 w-[120px] bg-muted px-2 py-1.5 text-left font-display text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Compare
                  </th>
                  {columns.map((col) => {
                    const isHi = highlight === col.key;
                    const isDim = Boolean(highlight && !isHi);
                    return (
                      <th
                        key={col.key}
                        className={`px-1.5 py-1.5 text-center font-display text-[9px] font-semibold uppercase tracking-widest ${
                          isHi ? `text-foreground bg-muted ${hiClassFor(col.key)}` : "bg-muted/50 text-muted-foreground"
                        } ${isDim ? dimClass : ""}`}
                      >
                        {col.label}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {comparisonSections.map((section, sectionIdx) => (
                  <Fragment key={section.title}>
                    <tr className="border-t border-border">
                      <td
                        colSpan={COL_COUNT}
                        className="sticky left-0 z-10 bg-background px-2 py-1 text-left font-display text-[9px] font-semibold uppercase tracking-widest text-caramel-deep"
                      >
                        {section.title}
                      </td>
                    </tr>
                    {section.rows.map((row, rowIdx) => (
                      <tr
                        key={row.label}
                        className={`border-t border-border ${rowIdx % 2 === 0 ? "bg-muted/[0.4]" : "bg-transparent"}`}
                      >
                        <td className="sticky left-0 z-10 w-[120px] bg-background px-2 py-1.5 text-[10px] font-medium text-foreground/90">
                          {row.label}
                        </td>
                        {columns.map((col) => {
                          const isHi = highlight === col.key;
                          const isDim = Boolean(highlight && !isHi);
                          return (
                            <td
                              key={col.key}
                              className={`px-1.5 py-1.5 text-center text-[10px] font-medium text-foreground/80 ${
                                isHi ? hiClassFor(col.key) : ""
                              } ${isDim ? dimClass : ""}`}
                            >
                              {renderValue(row[col.key])}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                    {sectionIdx < comparisonSections.length - 1 ? (
                      <tr className="border-t border-border">
                        <td colSpan={COL_COUNT} className="h-1 bg-background" />
                      </tr>
                    ) : null}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompareTable;
