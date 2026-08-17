import fs from "node:fs";

const unescapeTemplate = (raw) =>
  raw
    .replaceAll("\\`", "`")
    .replaceAll("\\${", "${")
    .replaceAll("\\\\", "\\");

const source = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const blockRe =
  /id: `math-11-(\d+)`,[\s\S]*?subsection: `([^`]*)`,[\s\S]*?context: `((?:\\`|[^`])*)`,[\s\S]*?statements: \[([\s\S]*?)\],\r?\n\s*answer_key: \[([^\]]+)\],[\s\S]*?tactical_explanations: \[([\s\S]*?)\],\r?\n\s*difficulty_level:[\s\S]*?solution_overview: `((?:\\`|[^`])*)`,/g;

const buckets = {
  "01_30": {},
  "31_60": {},
  "61_90": {},
  "91_123": {},
};

const bucketFor = (n) =>
  n <= 30 ? "01_30" : n <= 60 ? "31_60" : n <= 90 ? "61_90" : "91_123";

let taskCount = 0;
let explanationCount = 0;
let match;

while ((match = blockRe.exec(source))) {
  const n = Number(match[1]);
  const statements = [...match[4].matchAll(/`((?:\\`|[^`])*)`/g)].map((m) =>
    unescapeTemplate(m[1]),
  );
  const answers = match[5].split(",").map((value) => value.trim() === "true");
  const explanations = [
    ...match[6].matchAll(/`((?:\\`|[^`])*)`/g),
  ].map((m) => unescapeTemplate(m[1]));

  if (
    statements.length !== 5 ||
    answers.length !== 5 ||
    explanations.length !== 5
  ) {
    throw new Error(
      `Task ${n}: expected 5 statements/answers/explanations, got ${statements.length}/${answers.length}/${explanations.length}`,
    );
  }

  const letters = {};
  for (let i = 0; i < 5; i += 1) {
    const letter = "ABCDE"[i];
    letters[letter] = {
      statement: statements[i],
      verdict: answers[i] ? "true" : "false",
      min_chars: explanations[i].length + 80,
      current: explanations[i],
    };
    explanationCount += 1;
  }

  buckets[bucketFor(n)][n] = {
    subsection: match[2],
    context: unescapeTemplate(match[3]),
    solution_overview: unescapeTemplate(match[7]),
    letters,
  };
  taskCount += 1;
}

for (const [name, data] of Object.entries(buckets)) {
  fs.writeFileSync(
    `textbook/output/_ch11_expand_targets_${name}.json`,
    JSON.stringify(data, null, 2),
    "utf8",
  );
}

console.log(
  JSON.stringify(
    {
      tasks: taskCount,
      explanations: explanationCount,
      perBucket: Object.fromEntries(
        Object.entries(buckets).map(([name, data]) => [
          name,
          Object.keys(data).length * 5,
        ]),
      ),
    },
    null,
    2,
  ),
);
