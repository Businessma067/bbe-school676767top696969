/**
 * Deep audit of economics-book chapters + exported theory markdown.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ch2 from "../economics-book/chapters/ch02.mjs";
import ch3 from "../economics-book/chapters/ch03.mjs";
import ch4 from "../economics-book/chapters/ch04.mjs";
import ch5 from "../economics-book/chapters/ch05.mjs";
import ch6 from "../economics-book/chapters/ch06.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const chapters = [ch2, ch3, ch4, ch5, ch6];
const issues = [];

function issue(level, where, msg) {
  issues.push({ level, where, msg });
}

function num(s) {
  return Number(String(s).replace(/[€$,\s]/g, "").replace("−", "-").replace("–", "-"));
}

function walkBlocks(ch, fn) {
  for (const sec of ch.sections || []) {
    for (const b of sec.blocks || []) fn(ch, sec, b);
  }
}

// Structure
for (const ch of chapters) {
  if (!ch.num || !ch.title) issue("error", `ch${ch.num}`, "missing num/title");
  if (!ch.sections?.length) issue("error", `ch${ch.num}`, "no sections");
  const ids = (ch.sections || []).map((s) => s.id);
  ids.forEach((id, i) => {
    if (!id?.startsWith(`${ch.num}.`)) issue("error", `ch${ch.num}`, `bad section id ${id}`);
    if (i && ids[i - 1] === id) issue("error", `ch${ch.num}`, `duplicate section ${id}`);
  });
  for (const sec of ch.sections || []) {
    if (!sec.blocks?.length) issue("warn", `${sec.id}`, "empty section");
  }
}

// Captions / Figure-Table labels
for (const ch of chapters) {
  walkBlocks(ch, (_c, sec, b) => {
    const cap = b.caption || "";
    if (/^(figure|table)\s*\d+/i.test(cap.trim())) {
      issue("error", sec.id, `caption still numbered: ${cap}`);
    }
    if (b.type === "table") {
      const h = b.headers?.length || 0;
      for (const [i, row] of (b.rows || []).entries()) {
        if (row.length !== h) {
          issue("warn", sec.id, `table row ${i} length ${row.length} != headers ${h}`);
        }
      }
    }
    if (b.type === "p" && (b.text || "").length > 1200) {
      issue("warn", sec.id, `very long paragraph (${(b.text || "").length} chars) — consider a table`);
    }
    // number-wall heuristic: many "from X to Y" in one paragraph
    const fromTo = ((b.text || "").match(/\bfrom\s+[\d.,]+\s+to\s+[\d.,]+/gi) || []).length;
    if (b.type === "p" && fromTo >= 4) {
      issue("error", sec.id, `number-wall prose (${fromTo} from-to phrases) should be a table`);
    }
  });
}

// Cedar / Northline arithmetic from tables
function findTable(ch, captionPart) {
  let found = null;
  walkBlocks(ch, (_c, _s, b) => {
    if (b.type === "table" && (b.caption || "").includes(captionPart)) found = b;
  });
  return found;
}

function rowMap(table) {
  const m = new Map();
  for (const row of table.rows || []) m.set(String(row[0]).toLowerCase(), row);
  return m;
}

const cedarBs = findTable(ch6, "statement of financial position");
if (!cedarBs) issue("error", "6.3", "missing Cedar balance-sheet table");
else {
  const m = rowMap(cedarBs);
  for (const year of [1, 2]) {
    const nca =
      num(m.get("property, plant and equipment")[year]) +
      num(m.get("intangible assets")[year]) +
      num(m.get("other non-current assets")[year]);
    if (nca !== num(m.get("non-current assets")[year])) {
      issue("error", "6.3", `Cedar Y${year} non-current assets do not sum`);
    }
    const ca =
      num(m.get("inventories")[year]) +
      num(m.get("trade and other receivables")[year]) +
      num(m.get("cash and cash equivalents")[year]);
    if (ca !== num(m.get("current assets")[year])) {
      issue("error", "6.3", `Cedar Y${year} current assets do not sum`);
    }
    if (
      num(m.get("non-current assets")[year]) + num(m.get("current assets")[year]) !==
      num(m.get("total assets")[year])
    ) {
      issue("error", "6.3", `Cedar Y${year} total assets do not sum`);
    }
    const eq = num(m.get("share capital")[year]) + num(m.get("reserves and retained earnings")[year]);
    if (eq !== num(m.get("total equity")[year])) issue("error", "6.3", `Cedar Y${year} equity does not sum`);
    const ncl =
      num(m.get("non-current financial liabilities")[year]) +
      num(m.get("other non-current liabilities")[year]);
    if (ncl !== num(m.get("non-current liabilities")[year])) {
      issue("error", "6.3", `Cedar Y${year} NCL do not sum`);
    }
    const cl =
      num(m.get("trade and other payables")[year]) + num(m.get("other current liabilities")[year]);
    if (cl !== num(m.get("current liabilities")[year])) {
      issue("error", "6.3", `Cedar Y${year} CL do not sum`);
    }
    if (
      num(m.get("non-current liabilities")[year]) + num(m.get("current liabilities")[year]) !==
      num(m.get("total liabilities")[year])
    ) {
      issue("error", "6.3", `Cedar Y${year} total liabilities do not sum`);
    }
    if (num(m.get("total assets")[year]) !== num(m.get("total equity and liabilities")[year])) {
      issue("error", "6.3", `Cedar Y${year} balance-sheet identity fails`);
    }
  }
}

const cedarIs = findTable(ch6, "income statement");
if (!cedarIs) issue("error", "6.3", "missing Cedar income-statement table");
else {
  const m = rowMap(cedarIs);
  for (const year of [1, 2]) {
    const gp = num(m.get("revenue")[year]) - num(m.get("cost of sales")[year]);
    if (gp !== num(m.get("gross profit")[year])) issue("error", "6.3", `Cedar Y${year} gross profit wrong`);
    // EBIT = GP - dist - admin + other
    const ebit =
      gp -
      num(m.get("distribution costs")[year]) -
      num(m.get("administration costs")[year]) +
      num(m.get("other operating result")[year]);
    if (ebit !== num(m.get("operating result (ebit)")[year])) {
      issue("error", "6.3", `Cedar Y${year} EBIT wrong (got ${ebit})`);
    }
    const pbt = ebit - num(m.get("finance costs (net)")[year]);
    if (pbt !== num(m.get("profit before tax")[year])) issue("error", "6.3", `Cedar Y${year} PBT wrong`);
    const pat = pbt - num(m.get("income taxes")[year]);
    if (pat !== num(m.get("profit for the year")[year])) issue("error", "6.3", `Cedar Y${year} PAT wrong`);
  }
}

const openBs = findTable(ch6, "opening balance sheet");
if (openBs) {
  const assets = openBs.rows.filter((r) => r[0] && r[1] && !/total/i.test(r[0]));
  const left = assets.reduce((s, r) => s + (num(r[1]) || 0), 0);
  const rightRows = openBs.rows.filter((r) => r[2] && r[3] && !/total/i.test(r[2]));
  const right = rightRows.reduce((s, r) => s + (num(r[3]) || 0), 0);
  const totL = num(openBs.rows.find((r) => /total assets/i.test(r[0]))?.[1]);
  const totR = num(openBs.rows.find((r) => /total liabilities/i.test(r[2]))?.[3]);
  if (left !== totL) issue("error", "6.1", `Northline opening assets ${left} != total ${totL}`);
  if (right !== totR) issue("error", "6.1", `Northline opening financing ${right} != total ${totR}`);
  if (totL !== totR) issue("error", "6.1", "Northline opening identity fails");
}

const yearBs = findTable(ch6, "year-end balance sheet");
if (yearBs) {
  const left = yearBs.rows
    .filter((r) => r[0] && r[1] && !/total/i.test(r[0]))
    .reduce((s, r) => s + (num(r[1]) || 0), 0);
  const right = yearBs.rows
    .filter((r) => r[2] && r[3] && !/total/i.test(r[2]))
    .reduce((s, r) => s + (num(r[3]) || 0), 0);
  const totL = num(yearBs.rows.find((r) => /total assets/i.test(r[0]))?.[1]);
  const totR = num(yearBs.rows.find((r) => /total liabilities/i.test(r[2]))?.[3]);
  if (left !== totL) issue("error", "6.2", `Northline year-end assets ${left} != ${totL}`);
  if (right !== totR) issue("error", "6.2", `Northline year-end financing ${right} != ${totR}`);
  if (totL !== totR) issue("error", "6.2", "Northline year-end identity fails");
}

// Markdown export presence + basic density
for (const n of [2, 3, 4, 5, 6]) {
  const mdPath = path.join(root, "src", "data", "economics-theory", `ch${n}.md`);
  if (!fs.existsSync(mdPath)) {
    issue("error", `ch${n}.md`, "missing theory markdown");
    continue;
  }
  const md = fs.readFileSync(mdPath, "utf8");
  if (md.length < 2000) issue("warn", `ch${n}.md`, `short markdown (${md.length} chars)`);
  if (!md.includes(`# Chapter ${n}`)) issue("error", `ch${n}.md`, "missing H1");
  const h2 = (md.match(/^## /gm) || []).length;
  if (h2 < 3) issue("warn", `ch${n}.md`, `few sections (${h2})`);
  if (/^Figure\s+\d|^Table\s+\d/m.test(md)) issue("error", `ch${n}.md`, "Figure/Table numbers leaked");
}

// Cross-check chapter nums in package of content vs TOC expectations
const expectedCounts = { 2: 7, 3: 6, 4: 6, 5: 7, 6: 5 };
for (const ch of chapters) {
  if (ch.sections.length !== expectedCounts[ch.num]) {
    issue(
      "warn",
      `ch${ch.num}`,
      `section count ${ch.sections.length} (expected ${expectedCounts[ch.num]})`,
    );
  }
}

const errors = issues.filter((i) => i.level === "error");
const warns = issues.filter((i) => i.level === "warn");
console.log(`AUDIT: ${errors.length} errors, ${warns.length} warnings`);
for (const i of issues) console.log(`${i.level.toUpperCase()} [${i.where}] ${i.msg}`);
if (errors.length) process.exit(1);
