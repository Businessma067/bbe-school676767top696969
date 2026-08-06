/**
 * Shared case-context helpers (safe for client + server).
 */

/** Ensure a line that looks like a table row starts/ends with pipes. */
function ensurePipeRow(line: string): string {
  const t = line.trim();
  if (!t.includes("|")) return t;
  // Prose + table start on same line: "....sheet. | Property | 450"
  const proseSplit = t.match(/^(.*?[.!?])\s+(\|.+)$/);
  if (proseSplit) {
    return `${proseSplit[1]}\n\n${ensurePipeRow(proseSplit[2]!)}`;
  }
  let row = t;
  if (!row.startsWith("|")) row = `| ${row}`;
  if (!row.endsWith("|")) row = `${row} |`;
  return row;
}

/**
 * Strip definitional / formula parentheticals from student-facing labels and statements.
 * Keeps pure numeric parentheses such as (132) or (€ thousands) unit notes in prose.
 */
export function scrubStatementHints(text: string): string {
  return String(text ?? "")
    // Formula / definition hints: "Inventory turnover (cost of sales divided by …)"
    .replace(
      /\s*\([^)]*(?:divided by|multiplied by|equals|equal to|means|defined as|calculated as|computed as|i\.e\.|e\.g\.|cost of sales|revenue divided|sum of|difference between|ratio of|minus|plus)[^)]*\)/gi,
      "",
    )
    // Formula fragments with operators inside parentheses
    .replace(/\s*\([^)]*[\/÷=×*][^)]*\)/g, "")
    // Short definitional add-ons on line items (not numeric amounts)
    .replace(
      /\s*\((?:intangible|tangible|operating result|gross profit|net profit|before tax|after tax|current|non-current)\)/gi,
      "",
    )
    // Expand common shorthand left from "EBIT (operating result)" → already stripped paren; leftover EBIT
    .replace(/\bEBIT\b/g, "operating result")
    .replace(/\bEBITDA\b/g, "operating result before depreciation and amortisation")
    .replace(/\bROCE\b/g, "return on capital employed")
    .replace(/\bROE\b/g, "return on equity")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.,;:])/g, "$1")
    .trim();
}

/**
 * Normalize broken table encodings from DB / pasted content
 * (e.g. [[TABLE]] … | A | 1 || B | 2 collapsed into one paragraph).
 */
export function normalizeCaseContext(raw: string): string {
  let s = String(raw ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/\[\[\s*\/?\s*TABLE\s*\]\]/gi, "")
    .trim();

  if (s.includes("||")) {
    s = s
      .split(/\s*\|\|\s*/)
      .map((part) => part.trim())
      .filter(Boolean)
      .map(ensurePipeRow)
      .join("\n");
  } else {
    // Still peel prose glued to a leading pipe-row
    s = s.replace(/([.!?])[ \t]+(\|)/g, "$1\n\n$2");
  }

  // Expand ensurePipeRow multi-line returns + scrub label hints on each line
  s = s
    .split("\n")
    .flatMap((line) => line.split("\n"))
    .map((line) => {
      const t = line.trim();
      if (!t) return "";
      if (t.startsWith("|") || t.includes("|")) {
        const row = t.startsWith("|") || !t.includes("|") ? t : ensurePipeRow(t);
        // Scrub hints inside table cells, preserve pipe structure
        return row
          .split("|")
          .map((cell, i, arr) => {
            if (i === 0 || i === arr.length - 1) return cell;
            return ` ${scrubStatementHints(cell.trim())} `;
          })
          .join("|");
      }
      return scrubStatementHints(t);
    })
    .join("\n");

  return s.trim();
}

export type CaseContextSegment =
  | { kind: "markdown"; text: string }
  | { kind: "table"; rows: string[][] };

function splitRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|").map((c) => c.trim());
}

function isSeparatorRow(cells: string[]): boolean {
  return cells.length > 0 && cells.every((c) => /^:?-{3,}:?$/.test(c.replace(/\s/g, "")));
}

function isTableLine(line: string): boolean {
  const t = line.trim();
  return t.startsWith("|") && t.includes("|", 1);
}

function looksLikeAmount(cell: string): boolean {
  const t = cell.trim();
  if (t === "") return true;
  return /^[\d(),.\s€$%−–-]+$/.test(t);
}

/**
 * When every data column looks numeric (incl. row 0), treat row 0 as data and
 * inject a synthetic Item / Amount… header — common for broken || encodings.
 */
export function decorateTableRows(rows: string[][]): string[][] {
  if (rows.length === 0) return rows;
  const width = Math.max(...rows.map((r) => r.length));
  const normalized = rows.map((r) => {
    const copy = [...r];
    while (copy.length < width) copy.push("");
    return copy;
  });

  const allAmountish = normalized.every((r) => r.slice(1).every(looksLikeAmount));
  const firstLabel = (normalized[0]?.[0] ?? "").toLowerCase();
  const firstLooksLikeHeader =
    /item|assets|liabilit|amount|month|year|end of|figure|closing|equity|income/.test(firstLabel);

  if (allAmountish && !firstLooksLikeHeader && width >= 2) {
    const header =
      width === 2
        ? ["Item", "Amount"]
        : ["Item", ...Array.from({ length: width - 1 }, (_, i) => (i === 0 ? "Amount" : `Col ${i + 1}`))];
    return [header, ...normalized];
  }
  return normalized;
}

/** Split into markdown prose segments and explicit table segments. */
export function segmentCaseContext(raw: string): CaseContextSegment[] {
  const text = normalizeCaseContext(raw);
  const lines = text.split("\n");
  const segments: CaseContextSegment[] = [];
  let buf: string[] = [];

  const flushMd = () => {
    const t = buf.join("\n").trim();
    if (t) segments.push({ kind: "markdown", text: t });
    buf = [];
  };

  let i = 0;
  while (i < lines.length) {
    if (isTableLine(lines[i]!)) {
      flushMd();
      const tableLines: string[] = [];
      while (i < lines.length && (isTableLine(lines[i]!) || lines[i]!.trim() === "")) {
        if (isTableLine(lines[i]!)) tableLines.push(lines[i]!);
        i++;
        if (i < lines.length && lines[i]!.trim() === "") {
          let j = i;
          while (j < lines.length && lines[j]!.trim() === "") j++;
          if (j >= lines.length || !isTableLine(lines[j]!)) break;
          i = j;
        }
      }
      const rows = decorateTableRows(
        tableLines.map(splitRow).filter((cells) => cells.length > 0 && !isSeparatorRow(cells)),
      );
      if (rows.length > 0) segments.push({ kind: "table", rows });
      continue;
    }
    buf.push(lines[i]!);
    i++;
  }
  flushMd();
  return segments;
}
