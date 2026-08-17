import fs from "node:fs";

/**
 * Each `$$...$$` renders as its own centered block, so a chain of short
 * continuation steps ("= 50^2", "= 2,500") stacks into a thin column. Join runs
 * of them back onto one line, but only while the joined formula still fits the
 * solution panel without horizontal scrolling.
 *
 * Widths come from measuring KaTeX in the running app (see
 * `_merged_candidates.json` / `_merged_widths.json`), because character counts
 * badly underestimate digit-heavy financial formulas.
 *
 *   node _merge_short_displays.mjs --emit-candidates   -> candidates to measure
 *   node _merge_short_displays.mjs [--apply]           -> merge using widths
 */

const FILES = [
  "src/data/math-ch1-logic.ts",
  "src/data/math-ch5-linear-equations.ts",
  "src/data/math-ch8-power-functions.ts",
  "src/data/math-ch11-financial.ts",
];

const CANDIDATES_PATH = "textbook/output/_merged_candidates.json";
const WIDTHS_PATH = "textbook/output/_merged_widths.json";
const MAX_PX = Number(process.env.MERGE_MAX_PX ?? 470);
const MAX_CHAIN = 6;

const EMIT = process.argv.includes("--emit-candidates");
const APPLY = process.argv.includes("--apply");

const unescape = (s) => s.replace(/\\\\/g, "\\");

const CONTINUATION =
  /^(?:=|<|>|\\(?:approx|le|leq|ge|geq|ne|neq|Rightarrow|to|equiv)\b)/;

const isPlainStep = (raw) =>
  !/\\tag|\\begin|\\\\|\\substack|\\underbrace/.test(unescape(raw));

const collectDisplays = (src) =>
  [...src.matchAll(/\$\$([\s\S]*?)\$\$/g)].map((m) => ({
    start: m.index,
    end: m.index + m[0].length,
    body: m[1].trim(),
    multiline: /^\s*(?:\r?\n|\\n)/.test(m[1]),
  }));

/** Groups of displays separated by nothing but blank lines. */
const collectRuns = (src, displays) => {
  const runs = [];
  let current = [];
  for (let i = 0; i < displays.length; i += 1) {
    if (i > 0) {
      const gap = src.slice(displays[i - 1].end, displays[i].start);
      if (!/^(?:[ \t]*(?:\r?\n|\\n)[ \t]*)+$/.test(gap)) {
        if (current.length > 1) runs.push(current);
        current = [];
      }
    }
    current.push(displays[i]);
  }
  if (current.length > 1) runs.push(current);
  return runs;
};

const canFollow = (prev, next) =>
  CONTINUATION.test(unescape(next.body)) && isPlainStep(prev.body) && isPlainStep(next.body);

const widths = !EMIT && fs.existsSync(WIDTHS_PATH) ? JSON.parse(fs.readFileSync(WIDTHS_PATH, "utf8")) : null;
if (!EMIT && !widths) {
  console.error(`missing ${WIDTHS_PATH}: run with --emit-candidates and measure first`);
  process.exit(1);
}

const candidates = new Set();
let totalMerged = 0;
let totalRemoved = 0;
const samples = [];

for (const file of FILES) {
  const src = fs.readFileSync(file, "utf8");
  const runs = collectRuns(src, collectDisplays(src));
  const edits = [];

  for (const run of runs) {
    if (EMIT) {
      // Every start index, so the width-limited pass finds a measurement for
      // whatever chain it decides to try after an earlier line filled up.
      for (let i = 0; i < run.length; i += 1) {
        let joined = run[i].body;
        for (let j = i + 1; j < run.length && j - i < MAX_CHAIN; j += 1) {
          if (!canFollow(run[j - 1], run[j])) break;
          joined = `${joined} ${run[j].body}`;
          candidates.add(unescape(joined));
        }
      }
      continue;
    }

    let i = 0;
    while (i < run.length) {
      let end = i; // last index that still fits on the line
      let joined = run[i].body;
      for (let j = i + 1; j < run.length && j - i < MAX_CHAIN; j += 1) {
        if (!canFollow(run[j - 1], run[j])) break;
        const next = `${joined} ${run[j].body}`;
        const width = widths[unescape(next)];
        if (width === undefined || width > MAX_PX) break;
        joined = next;
        end = j;
      }

      if (!EMIT && end > i) {
        const text = run[i].multiline ? `$$\n${joined}\n$$` : `$$${joined}$$`;
        edits.push({ start: run[i].start, end: run[end].end, text });
        totalRemoved += end - i;
        if (samples.length < 8) {
          samples.push(`${file}\n    ${run.slice(i, end + 1).map((d) => unescape(d.body)).join("  ||  ")}\n    -> ${unescape(joined)}`);
        }
      }
      i = end + 1;
    }
  }

  totalMerged += edits.length;
  if (!EMIT) console.log(`${file}: ${edits.length} joined lines`);

  if (APPLY && edits.length) {
    let out = src;
    for (const edit of edits.reverse()) out = out.slice(0, edit.start) + edit.text + out.slice(edit.end);
    fs.writeFileSync(file, out);
  }
}

if (EMIT) {
  fs.writeFileSync(CANDIDATES_PATH, JSON.stringify([...candidates], null, 2));
  console.log(`${candidates.size} candidate formulas written to ${CANDIDATES_PATH}`);
} else {
  console.log(
    `\n${totalMerged} joined lines, ${totalRemoved} display blocks removed (max ${MAX_PX}px)${APPLY ? " (applied)" : " (dry run)"}`,
  );
  for (const s of samples) console.log("  " + s);
}
