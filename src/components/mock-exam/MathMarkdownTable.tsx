import { FlashcardMath } from "@/components/FlashcardMath";
import { cn } from "@/lib/utils";

/** Parse a GFM pipe table into rows (separator row dropped). */
export function parsePipeTable(markdown: string): string[][] {
  const lines = String(markdown ?? "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const rows: string[][] = [];
  for (const line of lines) {
    if (!line.includes("|")) continue;
    const cells = line
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());
    if (cells.length === 0) continue;
    if (cells.every((c) => /^:?-{3,}:?$/.test(c.replace(/\s/g, "")))) continue;
    rows.push(cells);
  }
  return rows;
}

/**
 * Math exam tables with KaTeX in every cell.
 * Avoids ReactMarkdown (no math plugin) so `$p$` / `$$…$$` render correctly.
 */
export function MathMarkdownTable({
  markdown,
  className,
}: {
  markdown: string;
  className?: string;
}) {
  const rows = parsePipeTable(markdown);
  if (rows.length === 0) return null;

  const colCount = Math.max(...rows.map((r) => r.length));
  const header = rows[0]!;
  const body = rows.slice(1);

  return (
    <div
      className={cn(
        "my-4 w-full max-w-full overflow-x-auto rounded-lg border border-border bg-card/30",
        className,
      )}
    >
      <table className="w-full border-collapse text-sm">
        <thead className="bg-secondary/70">
          <tr>
            {Array.from({ length: colCount }, (_, i) => (
              <th
                key={`h-${i}`}
                className="border-b border-border px-3 py-2.5 text-left font-semibold text-foreground"
              >
                <FlashcardMath text={header[i] ?? ""} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={`r-${ri}`} className={ri % 2 === 1 ? "bg-secondary/20" : undefined}>
              {Array.from({ length: colCount }, (_, ci) => (
                <td
                  key={`c-${ri}-${ci}`}
                  className={cn(
                    "border-t border-border px-3 py-2 align-middle text-foreground",
                    ci > 0 && "tabular-nums",
                  )}
                >
                  <FlashcardMath text={row[ci] ?? ""} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
