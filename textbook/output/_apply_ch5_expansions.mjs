import fs from "node:fs";

const tsPath = "src/data/math-ch5-linear-equations.ts";

const unescapeTemplate = (raw) =>
  raw.replaceAll("\\`", "`").replaceAll("\\${", "${").replaceAll("\\\\", "\\");
const escapeTemplate = (value) =>
  value.replaceAll("\\", "\\\\").replaceAll("`", "\\`").replaceAll("${", "\\${");

const extract = (source) => {
  const map = new Map();
  const blockRe =
    /id: "math-5-(\d+)",[\s\S]*?statements: \[([\s\S]*?)\],\r?\n\s*answer_key: \[([^\]]+)\],[\s\S]*?tactical_explanations: \[([\s\S]*?)\],\r?\n\s*difficulty_level:/g;
  let m;
  while ((m = blockRe.exec(source))) {
    map.set(Number(m[1]), {
      statements: [...m[2].matchAll(/`((?:\\`|[^`])*)`/g)].map((x) =>
        unescapeTemplate(x[1]),
      ),
      answers: m[3].split(",").map((s) => s.trim() === "true"),
      explanations: [...m[4].matchAll(/`((?:\\`|[^`])*)`/g)].map((x) =>
        unescapeTemplate(x[1]),
      ),
    });
  }
  return map;
};

const beforeRaw = fs.readFileSync("textbook/output/_ch5_before.ts");
const beforeText =
  beforeRaw[0] === 0xff && beforeRaw[1] === 0xfe
    ? beforeRaw.toString("utf16le").slice(1)
    : beforeRaw.toString("utf8");
const before = extract(beforeText);

let source = fs.readFileSync(tsPath, "utf8");
const current = extract(source);

const expansions = {};
for (const name of ["01_15", "16_30", "31_45", "46_60"]) {
  const path = `textbook/output/ch5_expanded_${name}.json`;
  if (!fs.existsSync(path)) {
    throw new Error(`Missing expansion file: ${path}`);
  }
  const data = JSON.parse(fs.readFileSync(path, "utf8"));
  for (const [task, letters] of Object.entries(data)) {
    expansions[task] ??= {};
    Object.assign(expansions[task], letters);
  }
}

const rejected = [];
const applied = [];
const finalByTask = new Map();

for (let n = 1; n <= 60; n += 1) {
  const cur = current.get(n);
  const old = before.get(n);
  const next = [...cur.explanations];
  for (let i = 0; i < 5; i += 1) {
    const letter = "ABCDE"[i];
    const candidate = expansions[String(n)]?.[letter];
    if (typeof candidate !== "string") continue;

    const statement = cur.statements[i];
    const verdict = cur.answers[i] ? "true" : "false";
    const header = `**${letter}) ${statement}**  (${verdict})`;
    const oldLen = (old?.explanations[i] || "").length;

    if (!candidate.startsWith(`${header}\n\n`)) {
      rejected.push(`T${n}${letter}: header mismatch`);
      continue;
    }
    if (candidate.length < oldLen) {
      rejected.push(
        `T${n}${letter}: still shorter than original (${candidate.length} < ${oldLen})`,
      );
      continue;
    }
    if (candidate.length <= next[i].length) {
      rejected.push(
        `T${n}${letter}: not longer than current (${candidate.length} <= ${next[i].length})`,
      );
      continue;
    }
    next[i] = candidate;
    applied.push(`T${n}${letter}`);
  }
  finalByTask.set(n, next);
}

for (let n = 1; n <= 60; n += 1) {
  const rendered = finalByTask
    .get(n)
    .map((text) => `      \`${escapeTemplate(text)}\`,`)
    .join("\n");
  const pattern = new RegExp(
    `(id: "math-5-${n}",[\\s\\S]*?tactical_explanations: \\[)[\\s\\S]*?(\\r?\\n    \\],\\r?\\n    difficulty_level:)`,
  );
  if (!pattern.test(source)) throw new Error(`Task ${n}: block not found`);
  source = source.replace(
    pattern,
    (_match, start, end) => `${start}\n${rendered}${end}`,
  );
}

fs.writeFileSync(tsPath, source, "utf8");

const finalLens = [];
let stillShorter = 0;
for (let n = 1; n <= 60; n += 1) {
  for (let i = 0; i < 5; i += 1) {
    const text = finalByTask.get(n)[i];
    finalLens.push(text.length);
    if (text.length < (before.get(n)?.explanations[i] || "").length) {
      stillShorter += 1;
    }
  }
}

console.log(
  JSON.stringify(
    {
      applied: applied.length,
      rejected: rejected.length,
      rejectedSample: rejected.slice(0, 20),
      stillShorterThanOriginal: stillShorter,
      min: Math.min(...finalLens),
      mean: Math.round(finalLens.reduce((a, b) => a + b, 0) / finalLens.length),
      max: Math.max(...finalLens),
      totalChars: finalLens.reduce((a, b) => a + b, 0),
    },
    null,
    2,
  ),
);
