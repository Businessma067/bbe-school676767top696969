import fs from "node:fs";

const tsPath = "src/data/math-ch11-financial.ts";
const unescapeTemplate = (raw) =>
  raw.replaceAll("\\`", "`").replaceAll("\\${", "${").replaceAll("\\\\", "\\");
const escapeTemplate = (value) =>
  value.replaceAll("\\", "\\\\").replaceAll("`", "\\`").replaceAll("${", "\\${");

const extract = (source) => {
  const map = new Map();
  const blockRe =
    /id: `math-11-(\d+)`,[\s\S]*?statements: \[([\s\S]*?)\],\r?\n\s*answer_key: \[([^\]]+)\],[\s\S]*?tactical_explanations: \[([\s\S]*?)\],\r?\n\s*difficulty_level:/g;
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

let source = fs.readFileSync(tsPath, "utf8");
const current = extract(source);

const expansions = {};
const targets = {};
for (const name of ["01_30", "31_60", "61_90", "91_123"]) {
  const path = `textbook/output/ch11_expanded_${name}.json`;
  if (!fs.existsSync(path)) throw new Error(`Missing ${path}`);
  const data = JSON.parse(fs.readFileSync(path, "utf8"));
  Object.assign(
    targets,
    JSON.parse(
      fs.readFileSync(
        `textbook/output/_ch11_expand_targets_${name}.json`,
        "utf8",
      ),
    ),
  );
  for (const [task, letters] of Object.entries(data)) {
    expansions[task] ??= {};
    Object.assign(expansions[task], letters);
  }
}

const rejected = [];
const applied = [];
const finalByTask = new Map();

for (const [n, cur] of current.entries()) {
  const next = [...cur.explanations];
  for (let i = 0; i < 5; i += 1) {
    const letter = "ABCDE"[i];
    const candidate = expansions[String(n)]?.[letter];
    if (typeof candidate !== "string") continue;
    const statement = cur.statements[i];
    const verdict = cur.answers[i] ? "true" : "false";
    const header = `**${letter}) ${statement}**  (${verdict})`;
    const target = targets[String(n)]?.letters?.[letter];
    const oldLen = target?.current?.length ?? next[i].length;
    const minChars = target?.min_chars ?? oldLen;
    if (!candidate.startsWith(`${header}\n\n`)) {
      rejected.push(`T${n}${letter}: header mismatch`);
      continue;
    }
    if (candidate.length < oldLen) {
      rejected.push(
        `T${n}${letter}: shorter than current (${candidate.length} < ${oldLen})`,
      );
      continue;
    }
    if (candidate.length < minChars) {
      rejected.push(
        `T${n}${letter}: below target floor (${candidate.length} < ${minChars})`,
      );
      continue;
    }
    if (/\bTrap:/i.test(candidate) || /\*\*(Watch|Why it fails)\./i.test(candidate)) {
      rejected.push(`T${n}${letter}: tip/trap label`);
      continue;
    }
    if (/from \([A-E]\)|from Part [A-E]/i.test(candidate)) {
      rejected.push(`T${n}${letter}: scaffolding`);
      continue;
    }
    next[i] = candidate;
    applied.push(`T${n}${letter}`);
  }
  finalByTask.set(n, next);
}

for (const n of [...current.keys()].sort((a, b) => a - b)) {
  const rendered = finalByTask
    .get(n)
    .map((text) => `      \`${escapeTemplate(text)}\`,`)
    .join("\n");
  const pattern = new RegExp(
    `(id: \`math-11-${n}\`,[\\s\\S]*?tactical_explanations: \\[)[\\s\\S]*?(\\r?\\n    \\],\\r?\\n    difficulty_level:)`,
  );
  if (!pattern.test(source)) throw new Error(`Task ${n}: block not found`);
  source = source.replace(
    pattern,
    (_match, start, end) => `${start}\n${rendered}${end}`,
  );
}

fs.writeFileSync(tsPath, source, "utf8");
console.log(
  JSON.stringify(
    {
      applied: applied.length,
      rejected: rejected.length,
      rejectedSample: rejected.slice(0, 25),
    },
    null,
    2,
  ),
);
