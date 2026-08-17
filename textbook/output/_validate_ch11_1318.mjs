import fs from "node:fs";
import katex from "katex";

const unescapeTemplate = (raw) =>
  raw
    .replaceAll("\\`", "`")
    .replaceAll("\\${", "${")
    .replaceAll("\\\\", "\\");

const extractLive = (source) => {
  const tasks = new Map();
  const blockRe =
    /id: `math-11-(\d+)`,[\s\S]*?statements: \[([\s\S]*?)\],\r?\n\s*answer_key: \[([^\]]+)\],[\s\S]*?tactical_explanations: \[([\s\S]*?)\],\r?\n\s*difficulty_level:/g;
  let match;
  while ((match = blockRe.exec(source))) {
    tasks.set(Number(match[1]), {
      statements: [
        ...match[2].matchAll(/`((?:\\`|[^`])*)`/g),
      ].map((m) => unescapeTemplate(m[1])),
      answers: match[3]
        .split(",")
        .map((value) => value.trim() === "true"),
      explanations: [
        ...match[4].matchAll(/`((?:\\`|[^`])*)`/g),
      ].map((m) => unescapeTemplate(m[1])),
    });
  }
  return tasks;
};

const targets = {};
for (const name of ["01_30", "31_60", "61_90", "91_123"]) {
  Object.assign(
    targets,
    JSON.parse(
      fs.readFileSync(
        `textbook/output/_ch11_expand_targets_${name}.json`,
        "utf8",
      ),
    ),
  );
}

const live = extractLive(
  fs.readFileSync("src/data/math-ch11-financial.ts", "utf8"),
);
const issues = [];
const lengths = [];
let mathCount = 0;
let displayCount = 0;

for (let n = 1; n <= 123; n += 1) {
  const task = live.get(n);
  if (!task) {
    issues.push(`T${n}: missing task`);
    continue;
  }
  if (
    task.statements.length !== 5 ||
    task.answers.length !== 5 ||
    task.explanations.length !== 5
  ) {
    issues.push(
      `T${n}: invalid cardinality ${task.statements.length}/${task.answers.length}/${task.explanations.length}`,
    );
    continue;
  }

  for (let i = 0; i < 5; i += 1) {
    const letter = "ABCDE"[i];
    const id = `T${n}${letter}`;
    const text = task.explanations[i];
    const target = targets[String(n)]?.letters?.[letter];
    const verdict = task.answers[i] ? "true" : "false";
    const header = `**${letter}) ${task.statements[i]}**  (${verdict})`;
    const separator = text.indexOf("\n\n");
    const body = separator === -1 ? "" : text.slice(separator + 2);

    if (!text.startsWith(`${header}\n\n`)) {
      issues.push(`${id}: header/verdict mismatch`);
    }
    if (!target) {
      issues.push(`${id}: missing target metadata`);
    } else {
      if (text.length < target.current.length) {
        issues.push(
          `${id}: shorter than original ${text.length} < ${target.current.length}`,
        );
      }
      if (text.length < target.min_chars) {
        issues.push(
          `${id}: below requested floor ${text.length} < ${target.min_chars}`,
        );
      }
    }
    if (
      /\bTrap:|\*\*(Watch|Why it fails|Tip)\.|from \([A-E]\)|from Part [A-E]|as shown above|earlier statement|the solution gives/i.test(
        text,
      )
    ) {
      issues.push(`${id}: banned scaffolding/tip language`);
    }
    if (/[—–]/.test(text)) {
      issues.push(`${id}: dash scar`);
    }
    if (/\\\\[A-Za-z]+/.test(text)) {
      issues.push(`${id}: over-escaped KaTeX command`);
    }
    if (
      !new RegExp(`statement is ${verdict}[.]?$`, "i").test(text.trim())
    ) {
      issues.push(`${id}: missing final verdict sentence`);
    }

    const displays = [
      ...body.matchAll(/(?<!\\)\$\$([\s\S]*?)(?<!\\)\$\$/g),
    ];
    const withoutDisplays = body.replace(
      /(?<!\\)\$\$[\s\S]*?(?<!\\)\$\$/g,
      "",
    );
    const inlines = [
      ...withoutDisplays.matchAll(/(?<!\\)(?<!\$)\$([^$\n]+?)(?<!\\)\$(?!\$)/g),
    ];

    displayCount += displays.length;
    mathCount += displays.length + inlines.length;
    if (displays.length < 2) {
      issues.push(`${id}: fewer than two display steps`);
    }

    for (const [kind, expressions] of [
      ["display", displays.map((m) => m[1])],
      ["inline", inlines.map((m) => m[1])],
    ]) {
      for (const expression of expressions) {
        try {
          katex.renderToString(expression, {
            displayMode: kind === "display",
            throwOnError: true,
          });
        } catch (error) {
          issues.push(`${id}: KaTeX ${kind} error: ${error.message}`);
        }
      }
    }

    let plain = withoutDisplays.replace(
      /(?<!\\)(?<!\$)\$[^$\n]+?(?<!\\)\$(?!\$)/g,
      "",
    );
    plain = plain.replace(/\\\$-?\d[\d,.]*/g, "");
    if (plain.includes("$")) {
      issues.push(`${id}: unpaired or unescaped dollar sign`);
    }

    lengths.push(text.length);
  }
}

console.log(
  JSON.stringify(
    {
      tasks: live.size,
      explanations: lengths.length,
      issues: issues.length,
      issueSample: issues.slice(0, 40),
      min: Math.min(...lengths),
      mean: Math.round(
        lengths.reduce((sum, value) => sum + value, 0) / lengths.length,
      ),
      max: Math.max(...lengths),
      totalChars: lengths.reduce((sum, value) => sum + value, 0),
      mathCount,
      displayCount,
    },
    null,
    2,
  ),
);

if (issues.length > 0) process.exitCode = 1;
