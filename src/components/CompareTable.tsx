import { Check, X } from "lucide-react";

type ColKey = "free" | "lite" | "full";

type ComparisonCell = {
  label: string;
  free: string;
  lite: string;
  full: string;
};

type ComparisonSection = {
  title: string;
  rows: ComparisonCell[];
};

const comparisonSections: ComparisonSection[] = [
  {
    title: "Features",
    rows: [
      { label: "Math Tasks", free: "50", lite: "550", full: "800+" },
      { label: "Economics Tasks", free: "35", lite: "375", full: "500+" },
      { label: "English Tasks", free: "10", lite: "150", full: "240+" },
      { label: "Textbook Theory", free: "❌", lite: "Crucial materials", full: "Full materials" },
      { label: "Answer Sheet Simulator", free: "❌", lite: "❌", full: "tick" },
      { label: "Interactive Speed Simulators", free: "❌", lite: "❌", full: "tick" },
      { label: "Mock Exams", free: "❌", lite: "2", full: "7+ exams with answer sheets" },
    ],
  },
  {
    title: "Insider Guide",
    rows: [
      { label: "Step by step explanations", free: "tick", lite: "tick", full: "tick" },
      { label: "AI Study Assistant", free: "❌", lite: "❌", full: "tick" },
      { label: "Tactical Trap Callouts", free: "❌", lite: "❌", full: "tick" },
      { label: "Dynamic Focus Heatmap", free: "❌", lite: "tick", full: "tick" },
      { label: "Support Chat", free: "❌", lite: "tick", full: "tick" },
      { label: "Achievements & Medals Tab", free: "❌", lite: "tick", full: "tick" },
      { label: "OSA Guide", free: "❌", lite: "❌", full: "tick" },
    ],
  },
];

const columns: { key: ColKey; label: string }[] = [
  { key: "free", label: "Free Sample" },
  { key: "lite", label: "BBE Lite Practice" },
  { key: "full", label: "BBE Full Course" },
];

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
  const hiClass =
    "relative bg-gradient-to-b from-[#C2643A0d] to-transparent ring-2 ring-[#C2643A] shadow-[0_0_24px_-4px_rgba(194,100,58,0.55)]";

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
          <table className="w-full min-w-[620px] border-collapse text-[11px]">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="sticky left-0 z-10 w-[170px] bg-muted px-2.5 py-1.5 text-left font-display text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Compare
                </th>
                {columns.map((col) => {
                  const isHi = highlight === col.key;
                  const isDim = highlight && !isHi;
                  return (
                    <th
                      key={col.key}
                      className={`px-2.5 py-1.5 text-center font-display text-[9px] font-semibold uppercase tracking-widest ${
                        isHi ? "text-foreground bg-muted " + hiClass : "text-muted-foreground bg-muted/50"
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
                <>
                  <tr key={section.title} className="border-t border-border">
                    <td
                      colSpan={4}
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
                        const isDim = highlight && !isHi;
                        return (
                          <td
                            key={col.key}
                            className={`px-2.5 py-1.5 text-center font-medium text-foreground/80 ${
                              isHi ? hiClass : ""
                            } ${isDim ? dimClass : ""}`}
                          >
                            {renderValue(row[col.key])}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  {sectionIdx < comparisonSections.length - 1 && (
                    <tr className="border-t border-border">
                      <td colSpan={4} className="h-1 bg-background" />
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile unified table */}
        <div className="overflow-hidden rounded-2xl border border-border bg-background sm:hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse text-[10px]">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="sticky left-0 z-10 w-[120px] bg-muted px-2 py-1.5 text-left font-display text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Compare
                  </th>
                  {columns.map((col) => {
                    const isHi = highlight === col.key;
                    const isDim = highlight && !isHi;
                    return (
                      <th
                        key={col.key}
                        className={`px-1.5 py-1.5 text-center font-display text-[9px] font-semibold uppercase tracking-widest ${
                          isHi ? "text-foreground bg-muted " + hiClass : "text-muted-foreground bg-muted/50"
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
                  <>
                    <tr key={section.title} className="border-t border-border">
                      <td
                        colSpan={4}
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
                          const isDim = highlight && !isHi;
                          return (
                            <td
                              key={col.key}
                              className={`px-1.5 py-1.5 text-center text-[10px] font-medium text-foreground/80 ${
                                isHi ? hiClass : ""
                              } ${isDim ? dimClass : ""}`}
                            >
                              {renderValue(row[col.key])}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                    {sectionIdx < comparisonSections.length - 1 && (
                      <tr className="border-t border-border">
                        <td colSpan={4} className="h-1 bg-background" />
                      </tr>
                    )}
                  </>
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
