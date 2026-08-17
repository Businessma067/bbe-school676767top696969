import fs from "node:fs";
import path from "node:path";

const root = "C:\\Users\\bubli\\Projects\\bbe-school-fixed";
const tsPath = path.join(root, "src", "data", "math-ch5-linear-equations.ts");
const batches = [
  "ch5_rightsized_01_15.json",
  "ch5_rightsized_16_30.json",
  "ch5_rightsized_31_45.json",
  "ch5_rightsized_46_60.json",
].map((name) => path.join(root, "textbook", "output", name));

const CURRENCY =
  /\$\d+(?:,\d{3})*(?:\.\d+)?(?:\/[A-Za-z%]+)?(?!\.\d)(?!,\d)(?![0-9A-Za-z+\-*=<>≠≤≥(\\{^_$])/y;

const unescapeTemplate = (raw) =>
  raw
    .replaceAll("\\`", "`")
    .replaceAll("\\${", "${")
    .replaceAll("\\\\", "\\");

const looksLikeMathInner = (inner) => {
  const t = (inner || "").trim();
  if (!t) return false;
  if (/[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(t)) return false;
  if (/\|/.test(t) && !/[=<>≠≤≥]/.test(t)) return false;
  if (/^[A-Za-z][A-Za-z0-9]*$/.test(t)) return true;
  if (/[=<>≠≤≥+×·\-/^\\()_]/.test(t) && /[A-Za-z0-9]/.test(t)) return true;
  if (/^[+\-]?\d+(?:\.\d+)?$/.test(t)) return true;
  if (
    t.length <= 48 &&
    /[a-zA-Z0-9]/.test(t) &&
    /^[+\-\d.a-zA-Z\s×·*^/(){}\\,:]+$/.test(t)
  ) {
    return true;
  }
  return false;
};

const unpairedDollars = (text) => {
  // Mirror FlashcardMath: optional backslash before currency, prefer math when span looks mathematical.
  const s = text;
  const leftovers = [];
  let i = 0;
  while (i < s.length) {
    if (s.startsWith("$$", i)) {
      const end = s.indexOf("$$", i + 2);
      if (end !== -1) {
        i = end + 2;
        continue;
      }
    }
    if (s[i] === "\\" && s[i + 1] === "$") {
      CURRENCY.lastIndex = i + 1;
      const m = CURRENCY.exec(s);
      if (m && m.index === i + 1) {
        i = m.index + m[0].length;
        continue;
      }
    }
    if (s[i] === "$") {
      CURRENCY.lastIndex = i;
      const m = CURRENCY.exec(s);
      if (m && m.index === i) {
        const after = s.indexOf("$", m.index + m[0].length);
        const between = after === -1 ? "" : s.slice(i + 1, after);
        if (!(after !== -1 && looksLikeMathInner(between))) {
          i = m.index + m[0].length;
          continue;
        }
      }
      const end = s.indexOf("$", i + 1);
      if (end !== -1) {
        const inner = s.slice(i + 1, end);
        if (looksLikeMathInner(inner)) {
          i = end + 1;
          continue;
        }
      }
      leftovers.push(s.slice(Math.max(0, i - 30), i + 30));
      i += 1;
      continue;
    }
    i += 1;
  }
  return leftovers;
};

const extractTasks = (source) => {
  const tasks = [];
  const blockRe =
    /id: "math-5-(\d+)",[\s\S]*?statements: \[([\s\S]*?)\],\r?\n\s*answer_key: \[([^\]]+)\],[\s\S]*?tactical_explanations: \[([\s\S]*?)\],\r?\n\s*difficulty_level:/g;
  let match;
  while ((match = blockRe.exec(source))) {
    const n = Number(match[1]);
    const stmts = [...match[2].matchAll(/`((?:\\`|[^`])*)`/g)].map((m) =>
      unescapeTemplate(m[1]),
    );
    const answers = match[3].split(",").map((s) => s.trim() === "true");
    tasks.push({ n, stmts, answers });
  }
  return tasks;
};

const merged = Object.assign(
  {},
  ...batches.map((filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"))),
);
const tasks = extractTasks(fs.readFileSync(tsPath, "utf8"));
const issues = [];
const lengths = [];

for (const task of tasks) {
  const explanations = merged[String(task.n)]?.tactical_explanations;
  if (!Array.isArray(explanations) || explanations.length !== 5) {
    issues.push(`T${task.n}: missing five explanations`);
    continue;
  }
  for (let i = 0; i < 5; i += 1) {
    const letter = "ABCDE"[i];
    const text = explanations[i];
    const stmt = task.stmts[i];
    const verdict = task.answers[i] ? "true" : "false";
    const header = `**${letter}) ${stmt}**  (${verdict})`;
    if (!text.startsWith(`${header}\n\n`)) {
      const parsed = text.match(
        /^\*\*([A-E])\) ([\s\S]*?)\*\*  \((true|false)\)/,
      );
      if (!parsed) issues.push(`T${task.n}${letter}: header parse fail`);
      else if (parsed[2] !== stmt)
        issues.push(
          `T${task.n}${letter}: statement mismatch\n  live: ${JSON.stringify(stmt)}\n  expl: ${JSON.stringify(parsed[2])}`,
        );
      else if (parsed[3] !== verdict)
        issues.push(`T${task.n}${letter}: verdict mismatch`);
      else issues.push(`T${task.n}${letter}: header spacing mismatch`);
    }
    if (
      /from part [a-e]\b|same rebuild as in|the y from|earlier statement|\bfrom [BCDE]\b|\bfrom A\b(?!ccount)/.test(
        text,
      )
    ) {
      issues.push(`T${task.n}${letter}: scaffolding language`);
    }
    if (/\*\*(Watch|Why it fails|Trap)\./i.test(text)) {
      issues.push(`T${task.n}${letter}: tip/trap label`);
    }
    const leftovers = unpairedDollars(text);
    if (leftovers.length) {
      issues.push(
        `T${task.n}${letter}: unpaired $ (${leftovers.length}) e.g. ${JSON.stringify(leftovers[0])}`,
      );
    }
    lengths.push(text.length);
  }
}

console.log(
  JSON.stringify(
    {
      tasks: tasks.length,
      explanations: lengths.length,
      issues: issues.length,
      sample: issues.slice(0, 40),
      min: Math.min(...lengths),
      max: Math.max(...lengths),
      mean: Math.round(lengths.reduce((a, b) => a + b, 0) / lengths.length),
      under250: lengths.filter((n) => n < 250).length,
      over1200: lengths.filter((n) => n > 1200).length,
    },
    null,
    2,
  ),
);
