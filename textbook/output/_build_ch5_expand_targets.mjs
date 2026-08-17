import fs from "node:fs";

const unescapeTemplate = (raw) =>
  raw.replaceAll("\\`", "`").replaceAll("\\${", "${").replaceAll("\\\\", "\\");

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
const after = extract(fs.readFileSync("src/data/math-ch5-linear-equations.ts", "utf8"));
const raw = JSON.parse(
  fs.readFileSync("textbook/output/linear_eq_60_raw.json", "utf8"),
);
const rawByNum = new Map(raw.map((t) => [t.num, t]));

const buckets = {
  "01_15": {},
  "16_30": {},
  "31_45": {},
  "46_60": {},
};
const bucketFor = (n) =>
  n <= 15 ? "01_15" : n <= 30 ? "16_30" : n <= 45 ? "31_45" : "46_60";

let count = 0;
for (let n = 1; n <= 60; n += 1) {
  const b = before.get(n);
  const a = after.get(n);
  if (!b || !a) continue;
  for (let i = 0; i < 5; i += 1) {
    const letter = "ABCDE"[i];
    const oldText = b.explanations[i] || "";
    const newText = a.explanations[i] || "";
    if (newText.length >= oldText.length) continue;
    const bucket = bucketFor(n);
    buckets[bucket][n] ??= {
      context: rawByNum.get(n)?.context ?? "",
      tables_markdown: rawByNum.get(n)?.tables_markdown ?? "",
      model: rawByNum.get(n)?.model ?? "",
      solution: rawByNum.get(n)?.solution ?? "",
      letters: {},
    };
    buckets[bucket][n].letters[letter] = {
      statement: a.statements[i],
      verdict: a.answers[i] ? "true" : "false",
      min_chars: oldText.length + 60,
      previous_committed_version: oldText,
      current_version_too_short: newText,
    };
    count += 1;
  }
}

for (const [name, data] of Object.entries(buckets)) {
  fs.writeFileSync(
    `textbook/output/_ch5_expand_targets_${name}.json`,
    JSON.stringify(data, null, 2),
    "utf8",
  );
}

console.log(
  JSON.stringify(
    {
      totalTargets: count,
      perBucket: Object.fromEntries(
        Object.entries(buckets).map(([k, v]) => [
          k,
          Object.values(v).reduce((s, t) => s + Object.keys(t.letters).length, 0),
        ]),
      ),
    },
    null,
    2,
  ),
);
