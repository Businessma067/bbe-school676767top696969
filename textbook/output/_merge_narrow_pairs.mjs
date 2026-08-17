import fs from "node:fs";

/**
 * Second pass over stacked display equations. Pass 1 joined continuation steps
 * that start with a relation ("= 2,500"). This pass handles the other thin
 * column: several short self-contained equations stacked one under another,
 * which Ch5/Ch8 already write on one line separated by `, \qquad`
 * (e.g. `175y = 3465.00, \qquad y = 19.80`).
 *
 *   node _merge_narrow_pairs.mjs --emit-runs   -> runs for browser measuring
 *   node _merge_narrow_pairs.mjs --apply       -> apply groups chosen in browser
 */

const FILES = [
  "src/data/math-ch1-logic.ts",
  "src/data/math-ch5-linear-equations.ts",
  "src/data/math-ch8-power-functions.ts",
  "src/data/math-ch11-financial.ts",
];

const RUNS_PATH = "textbook/output/_narrow_runs.json";
const GROUPS_PATH = "textbook/output/_narrow_groups.json";
const GLUE = ", \\qquad ";

const EMIT = process.argv.includes("--emit-runs");
const APPLY = process.argv.includes("--apply");

const unescape = (s) => s.replace(/\\\\/g, "\\");
const escape = (s) => s.replace(/\\/g, "\\\\");

const RELATION = /(?:=|\\approx|\\le\b|\\leq\b|\\ge\b|\\geq\b|\\ne\b|\\neq\b|<|>)/;
const STARTS_WITH_RELATION =
  /^(?:=|<|>|\\(?:approx|le|leq|ge|geq|ne|neq|Rightarrow|to|equiv)\b)/;

/** A short, self-contained equation that may share a line with its neighbours. */
const isGlueable = (body) => {
  const v = unescape(body);
  if (/\\tag|\\begin|\\\\|\\substack|\\underbrace|\\qquad|\\quad|\\Rightarrow/.test(v)) return false;
  if (STARTS_WITH_RELATION.test(v)) return false;
  return RELATION.test(v);
};

const collectDisplays = (src) =>
  [...src.matchAll(/\$\$([\s\S]*?)\$\$/g)].map((m) => ({
    start: m.index,
    end: m.index + m[0].length,
    body: m[1].trim(),
    multiline: /^\s*(?:\r?\n|\\n)/.test(m[1]),
  }));

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

const perFile = FILES.map((file) => {
  const src = fs.readFileSync(file, "utf8");
  return { file, src, runs: collectRuns(src, collectDisplays(src)) };
});

if (EMIT) {
  const payload = perFile.map(({ file, runs }) => ({
    file,
    runs: runs.map((run) =>
      run.map((d) => ({ body: unescape(d.body), eligible: isGlueable(d.body) })),
    ),
  }));
  fs.writeFileSync(RUNS_PATH, JSON.stringify(payload));
  const eligible = payload.reduce(
    (n, f) => n + f.runs.reduce((m, r) => m + r.filter((d) => d.eligible).length, 0),
    0,
  );
  console.log(`${payload.length} files, ${eligible} glueable displays written to ${RUNS_PATH}`);
  process.exit(0);
}

/**
 * Groups come from the browser pass keyed by file index, each entry either
 * "run.start" (a pair) or "run.start.end".
 */
const raw = JSON.parse(fs.readFileSync(GROUPS_PATH, "utf8"));
const groups = {};
FILES.forEach((file, idx) => {
  groups[file] = (raw[idx] ?? raw[String(idx)] ?? []).map((entry) => {
    const [run, start, end] = entry.split(".").map(Number);
    return [run, start, end ?? start + 1];
  });
});
let joined = 0;
let removed = 0;
const samples = [];

for (const { file, src, runs } of perFile) {
  const chosen = groups[file] ?? [];
  const edits = [];
  for (const [runIdx, start, end] of chosen) {
    const run = runs[runIdx];
    const members = run.slice(start, end + 1);
    const body = members.map((d) => d.body).join(escape(GLUE));
    const text = members[0].multiline ? `$$\n${body}\n$$` : `$$${body}$$`;
    edits.push({ start: members[0].start, end: members.at(-1).end, text });
    joined += 1;
    removed += members.length - 1;
    if (samples.length < 8) samples.push(`${file}\n    -> ${unescape(body)}`);
  }

  console.log(`${file}: ${edits.length} joined lines`);
  if (APPLY && edits.length) {
    edits.sort((a, b) => b.start - a.start);
    let out = src;
    for (const edit of edits) out = out.slice(0, edit.start) + edit.text + out.slice(edit.end);
    fs.writeFileSync(file, out);
  }
}

console.log(`\n${joined} joined lines, ${removed} display blocks removed${APPLY ? " (applied)" : " (dry run)"}`);
for (const s of samples) console.log("  " + s);
