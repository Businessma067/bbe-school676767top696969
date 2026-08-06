/**
 * Shared case-context helpers (safe for client + server).
 */

/** Ensure a line that looks like a table row starts/ends with pipes. */
function ensurePipeRow(line: string): string {
  const t = line.trim();
  if (!t.includes("|")) return t;
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
    .replace(
      /\s*\([^)]*(?:divided by|multiplied by|equals|equal to|means|defined as|calculated as|computed as|i\.e\.|e\.g\.|cost of sales|revenue divided|sum of|difference between|ratio of|minus|plus)[^)]*\)/gi,
      "",
    )
    .replace(/\s*\([^)]*[\/÷=×*][^)]*\)/g, "")
    .replace(
      /\s*\((?:intangible|tangible|operating result|gross profit|net profit|before tax|after tax|current|non-current)\)/gi,
      "",
    )
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
 * Chart blocks must already be removed or placeholder-protected.
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
    s = s.replace(/([.!?])[ \t]+(\|)/g, "$1\n\n$2");
  }

  s = s
    .split("\n")
    .flatMap((line) => line.split("\n"))
    .map((line) => {
      const t = line.trim();
      if (!t) return "";
      if (t.startsWith("|") || t.includes("|")) {
        const row = t.startsWith("|") || !t.includes("|") ? t : ensurePipeRow(t);
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

export type CaseChartType = "bar" | "line" | "pie";

export type CaseChartSpec = {
  type: CaseChartType;
  title?: string;
  /** Category / slice rows. For bar/line: { name, [seriesKey]: number }. For pie: { name, value }. */
  data: Array<Record<string, string | number>>;
  seriesKeys: string[];
};

export type CaseContextSegment =
  | { kind: "markdown"; text: string }
  | { kind: "table"; rows: string[][] }
  | { kind: "chart"; chart: CaseChartSpec };

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

/** Empty amount columns + uppercase-ish label → financial statement section header. */
export function isSectionHeaderRow(cells: string[]): boolean {
  if (cells.length === 0) return false;
  const label = (cells[0] ?? "").replace(/\*\*/g, "").trim();
  if (!label) return false;
  const restEmpty = cells.slice(1).every((c) => !String(c).replace(/\*\*/g, "").trim());
  if (!restEmpty) return false;
  return /^(assets|equity|liabilities|equity and liabilities|statement of profit and loss|income statement|cash flow statement|cash flow statement extract|item)/i.test(
    label,
  ) || /^[A-Z][A-Z\s,–—-]{2,}$/.test(label);
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

  const allAmountish = normalized.every(
    (r) => isSectionHeaderRow(r) || r.slice(1).every(looksLikeAmount),
  );
  const firstLabel = (normalized[0]?.[0] ?? "").toLowerCase();
  const firstLooksLikeHeader =
    /item|assets|liabilit|amount|month|year|end of|figure|closing|equity|income|€/.test(firstLabel);

  if (allAmountish && !firstLooksLikeHeader && !isSectionHeaderRow(normalized[0]!) && width >= 2) {
    const header =
      width === 2
        ? ["Item", "Amount"]
        : ["Item", ...Array.from({ length: width - 1 }, (_, i) => (width === 3 && i === 0 ? "Year 1" : width === 3 && i === 1 ? "Year 2" : `Col ${i + 1}`))];
    return [header, ...normalized];
  }
  return normalized;
}

function parseNum(raw: string): number {
  const cleaned = String(raw)
    .trim()
    .replace(/€/g, "")
    .replace(/\s/g, "")
    .replace(/,/g, "");
  const neg = /^\(.*\)$/.test(cleaned) || cleaned.startsWith("−") || cleaned.startsWith("–");
  const n = Number(cleaned.replace(/[()−–]/g, ""));
  if (!Number.isFinite(n)) return NaN;
  return neg ? -Math.abs(n) : n;
}

function parseChartOpen(line: string): { type: CaseChartType; title?: string } | null {
  const m = line.trim().match(/^\[\[\s*CHART\b([^\]]*)\]\]$/i);
  if (!m) return null;
  const attrs = m[1] ?? "";
  const typeM = attrs.match(/\btype\s*=\s*"([^"]+)"/i) ?? attrs.match(/\btype\s*=\s*'([^']+)'/i);
  const titleM = attrs.match(/\btitle\s*=\s*"([^"]+)"/i) ?? attrs.match(/\btitle\s*=\s*'([^']+)'/i);
  const typeRaw = (typeM?.[1] ?? "bar").toLowerCase();
  const type: CaseChartType = typeRaw === "line" || typeRaw === "pie" ? typeRaw : "bar";
  return { type, title: titleM?.[1]?.trim() || undefined };
}

function parseChartBody(type: CaseChartType, bodyLines: string[]): CaseChartSpec {
  const data: Array<Record<string, string | number>> = [];
  const seriesSet = new Set<string>();

  for (const raw of bodyLines) {
    const line = raw.trim();
    if (!line) continue;

    if (type === "pie") {
      // Name=value  OR  Name | value
      const eq = line.match(/^(.+?)\s*=\s*(.+)$/);
      const pipe = splitRow(line.startsWith("|") ? line : `| ${line} |`);
      let name = "";
      let value = NaN;
      if (eq && !line.includes("|")) {
        name = eq[1]!.trim();
        value = parseNum(eq[2]!);
      } else if (pipe.length >= 2) {
        name = pipe[0]!;
        value = parseNum(pipe[1]!);
      }
      if (name && Number.isFinite(value)) {
        data.push({ name, value });
        seriesSet.add("value");
      }
      continue;
    }

    // bar / line: Category | SeriesA=10 | SeriesB=20
    // or Category | 10 | 20 with implied keys from header line " | A | B"
    const cells = splitRow(line.startsWith("|") ? line : `| ${line} |`);
    if (cells.length < 2) continue;

    const row: Record<string, string | number> = { name: cells[0]! };
    let numericOnly = true;
    for (let i = 1; i < cells.length; i++) {
      const cell = cells[i]!;
      const kv = cell.match(/^(.+?)\s*=\s*(.+)$/);
      if (kv) {
        numericOnly = false;
        const key = kv[1]!.trim();
        const val = parseNum(kv[2]!);
        if (Number.isFinite(val)) {
          row[key] = val;
          seriesSet.add(key);
        }
      } else {
        const val = parseNum(cell);
        if (Number.isFinite(val)) {
          const key = `Series ${i}`;
          row[key] = val;
          seriesSet.add(key);
        } else {
          numericOnly = false;
        }
      }
    }
    if (Object.keys(row).length > 1) data.push(row);
    void numericOnly;
  }

  return {
    type,
    data,
    seriesKeys: [...seriesSet].filter((k) => k !== "name"),
  };
}

/**
 * Split into markdown prose, pipe tables, and [[CHART]]…[[/CHART]] blocks.
 */
export function segmentCaseContext(raw: string): CaseContextSegment[] {
  const source = String(raw ?? "").replace(/\r\n/g, "\n");
  const lines = source.split("\n");
  const segments: CaseContextSegment[] = [];
  let buf: string[] = [];

  const flushMdNormalized = () => {
    const chunk = normalizeCaseContext(buf.join("\n"));
    buf = [];
    if (!chunk) return;
    // After normalize, re-split markdown vs tables inside this chunk
    const inner = chunk.split("\n");
    let mdBuf: string[] = [];
    const flushMd = () => {
      const t = mdBuf.join("\n").trim();
      if (t) segments.push({ kind: "markdown", text: t });
      mdBuf = [];
    };
    let j = 0;
    while (j < inner.length) {
      if (isTableLine(inner[j]!)) {
        flushMd();
        const tableLines: string[] = [];
        while (j < inner.length && isTableLine(inner[j]!)) {
          tableLines.push(inner[j]!);
          j++;
        }
        // Blank line ends this table (allows consecutive FS tables to stay separate)
        while (j < inner.length && inner[j]!.trim() === "") j++;
        const rows = decorateTableRows(
          tableLines.map(splitRow).filter((cells) => cells.length > 0 && !isSeparatorRow(cells)),
        );
        if (rows.length > 0) segments.push({ kind: "table", rows });
        continue;
      }
      mdBuf.push(inner[j]!);
      j++;
    }
    flushMd();
  };

  let i = 0;
  while (i < lines.length) {
    const open = parseChartOpen(lines[i]!);
    if (open) {
      flushMdNormalized();
      i++;
      const body: string[] = [];
      while (i < lines.length && !/^\[\[\s*\/\s*CHART\s*\]\]$/i.test(lines[i]!.trim())) {
        body.push(lines[i]!);
        i++;
      }
      if (i < lines.length) i++; // consume [[/CHART]]
      const chart = parseChartBody(open.type, body);
      chart.title = open.title;
      if (chart.data.length > 0) segments.push({ kind: "chart", chart });
      continue;
    }
    buf.push(lines[i]!);
    i++;
  }
  flushMdNormalized();
  return segments;
}
