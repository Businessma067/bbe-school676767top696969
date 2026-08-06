import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
import { segmentCaseContext } from "@/lib/case-context";

type CaseContextRichProps = {
  content: string;
  className?: string;
  emphasized?: boolean;
};

function CaseTable({ rows }: { rows: string[][] }) {
  if (rows.length === 0) return null;
  const header = rows[0]!;
  const body = rows.slice(1);
  return (
    <div className="my-4 w-full overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[28rem] border-collapse text-[13px]">
        <thead className="bg-secondary/70">
          <tr>
            {header.map((cell, i) => (
              <th
                key={`h-${i}`}
                className="border-b border-border px-3 py-2 text-left font-semibold text-foreground"
              >
                {cell.replace(/\*\*/g, "")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={`r-${ri}`} className={ri % 2 === 1 ? "bg-secondary/20" : undefined}>
              {row.map((cell, ci) => (
                <td
                  key={`c-${ri}-${ci}`}
                  className="border-t border-border px-3 py-2 align-top tabular-nums text-foreground/90"
                >
                  {cell.replace(/\*\*/g, "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Renders economics case context with reliable HTML tables + markdown prose.
 */
export function CaseContextRich({ content, className, emphasized }: CaseContextRichProps) {
  const segments = segmentCaseContext(content);

  return (
    <div
      className={cn(
        "case-context-rich max-w-full text-sm leading-relaxed text-muted-foreground",
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
      {segments.map((seg, idx) =>
        seg.kind === "table" ? (
          <CaseTable key={`t-${idx}`} rows={seg.rows} />
        ) : (
          <ReactMarkdown key={`m-${idx}`} remarkPlugins={[remarkGfm]}>
            {seg.text}
          </ReactMarkdown>
        ),
      )}
    </div>
  );
}

export { scrubStatementHints, normalizeCaseContext } from "@/lib/case-context";
