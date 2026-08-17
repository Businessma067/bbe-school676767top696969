import fs from "node:fs";

const unescapeTemplate = (raw) =>
  raw.replaceAll("\\`", "`").replaceAll("\\${", "${").replaceAll("\\\\", "\\");

const source = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const blockRe =
  /id: `math-11-(\d+)`,[\s\S]*?subsection: `([^`]*)`,[\s\S]*?context: `((?:\\`|[^`])*)`,[\s\S]*?statements: \[([\s\S]*?)\],\r?\n\s*answer_key: \[([^\]]+)\],[\s\S]*?tactical_explanations: \[([\s\S]*?)\],\r?\n\s*difficulty_level:/g;

const tasks = [];
let m;
while ((m = blockRe.exec(source))) {
  const n = Number(m[1]);
  const subsection = m[2];
  const context = unescapeTemplate(m[3]);
  const statements = [...m[4].matchAll(/`((?:\\`|[^`])*)`/g)].map((x) =>
    unescapeTemplate(x[1]),
  );
  const answers = m[5].split(",").map((s) => s.trim() === "true");
  const explanations = [...m[6].matchAll(/`((?:\\`|[^`])*)`/g)].map((x) =>
    unescapeTemplate(x[1]),
  );
  tasks.push({ n, subsection, context, statements, answers, explanations });
}

const needs = [];
for (const t of tasks) {
  for (let i = 0; i < 5; i += 1) {
    const letter = "ABCDE"[i];
    const text = t.explanations[i] || "";
    const displays = (text.match(/\$\$/g) || []).length / 2;
    const inlines = (text.match(/(?<!\$)\$(?!\$)/g) || []).length / 2;
    const hasTrap = /\bTrap:/i.test(text);
    const scaffold = /from \([A-E]\)|from Part|as shown above|earlier statement|the solution gives/i.test(
      text,
    );
    const crammedInline =
      displays === 0 &&
      (/=/.test(text) || /\\times|\\approx|\\frac/.test(text)) &&
      text.length < 700;
    const multiStepCram =
      displays <= 1 &&
      (text.match(/=/g) || []).length >= 3 &&
      text.length < 900;
    const shortForWork = text.length < 280 && (inlines >= 2 || /=/.test(text));

    const reasons = [];
    if (hasTrap) reasons.push("trap-label");
    if (scaffold) reasons.push("scaffold");
    if (crammedInline) reasons.push("crammed-inline");
    if (multiStepCram) reasons.push("multi-step-cram");
    if (shortForWork) reasons.push("short");

    // Keep truly direct one-liners (pure conceptual / single lookup) out unless trap/scaffold
    const looksDirect =
      displays === 0 &&
      (text.match(/=/g) || []).length <= 1 &&
      text.length < 350 &&
      !hasTrap &&
      !scaffold;

    if (reasons.length && !looksDirect) {
      needs.push({
        n: t.n,
        letter,
        subsection: t.subsection,
        chars: text.length,
        displays,
        reasons,
        statement: t.statements[i],
        verdict: t.answers[i] ? "true" : "false",
        text,
      });
    } else if (hasTrap || scaffold) {
      needs.push({
        n: t.n,
        letter,
        subsection: t.subsection,
        chars: text.length,
        displays,
        reasons: hasTrap ? ["trap-label"] : ["scaffold"],
        statement: t.statements[i],
        verdict: t.answers[i] ? "true" : "false",
        text,
      });
    }
  }
}

const byBucket = { "01_30": [], "31_60": [], "61_90": [], "91_123": [] };
for (const item of needs) {
  const key =
    item.n <= 30
      ? "01_30"
      : item.n <= 60
        ? "31_60"
        : item.n <= 90
          ? "61_90"
          : "91_123";
  byBucket[key].push(item);
}

for (const [name, items] of Object.entries(byBucket)) {
  const grouped = {};
  for (const item of items) {
    const task = tasks.find((t) => t.n === item.n);
    grouped[item.n] ??= {
      subsection: item.subsection,
      context: task.context,
      letters: {},
    };
    grouped[item.n].letters[item.letter] = {
      statement: item.statement,
      verdict: item.verdict,
      min_chars: item.chars + 80,
      reasons: item.reasons,
      current: item.text,
    };
  }
  fs.writeFileSync(
    `textbook/output/_ch11_expand_targets_${name}.json`,
    JSON.stringify(grouped, null, 2),
    "utf8",
  );
}

const reasonCounts = {};
for (const item of needs) {
  for (const r of item.reasons) reasonCounts[r] = (reasonCounts[r] || 0) + 1;
}

console.log(
  JSON.stringify(
    {
      tasks: tasks.length,
      targets: needs.length,
      perBucket: Object.fromEntries(
        Object.entries(byBucket).map(([k, v]) => [k, v.length]),
      ),
      reasonCounts,
      sample: needs.slice(0, 12).map((x) => ({
        id: `T${x.n}${x.letter}`,
        chars: x.chars,
        displays: x.displays,
        reasons: x.reasons,
      })),
    },
    null,
    2,
  ),
);
