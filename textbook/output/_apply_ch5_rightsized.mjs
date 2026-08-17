import fs from "node:fs";
import path from "node:path";

const root = "C:\\Users\\bubli\\Projects\\bbe-school-fixed";
const sourcePath = path.join(root, "src", "data", "math-ch5-linear-equations.ts");
const batchPaths = [
  "ch5_rightsized_01_15.json",
  "ch5_rightsized_16_30.json",
  "ch5_rightsized_31_45.json",
  "ch5_rightsized_46_60.json",
].map((name) => path.join(root, "textbook", "output", name));

const merged = {};
for (const batchPath of batchPaths) {
  const batch = JSON.parse(fs.readFileSync(batchPath, "utf8"));
  Object.assign(merged, batch);
}

const escapeTemplate = (value) =>
  value.replaceAll("\\", "\\\\").replaceAll("`", "\\`").replaceAll("${", "\\${");

let source = fs.readFileSync(sourcePath, "utf8");
const lengths = [];

for (let n = 1; n <= 60; n += 1) {
  const explanations = merged[String(n)]?.tactical_explanations;
  if (!Array.isArray(explanations) || explanations.length !== 5) {
    throw new Error(`Task ${n}: expected exactly five tactical explanations`);
  }

  for (let i = 0; i < 5; i += 1) {
    const text = explanations[i];
    const letter = "ABCDE"[i];
    if (typeof text !== "string" || !text.startsWith(`**${letter}) `)) {
      throw new Error(`Task ${n}${letter}: malformed explanation header`);
    }
    if (!/\.\*\*  \((true|false)\)\n\n/.test(text)) {
      throw new Error(`Task ${n}${letter}: missing normalized verdict header`);
    }
    lengths.push({
      task: n,
      letter,
      chars: text.length,
      equations: (text.match(/\$\$/g) || []).length / 2 + (text.match(/(?<!\$)\$(?!\$)/g) || []).length / 2,
    });
  }

  const rendered = explanations
    .map((text) => `      \`${escapeTemplate(text)}\`,`)
    .join("\n");
  const pattern = new RegExp(
    `(id: "math-5-${n}",[\\s\\S]*?tactical_explanations: \\[)[\\s\\S]*?(\\r?\\n    \\],\\r?\\n    difficulty_level:)`,
  );
  if (!pattern.test(source)) {
    throw new Error(`Task ${n}: source block not found`);
  }
  // Use a function replacer so KaTeX like $2x$ or $$ is not treated as $1/$2 tokens.
  source = source.replace(pattern, (_match, start, end) => `${start}\n${rendered}${end}`);
}

fs.writeFileSync(sourcePath, source, "utf8");

const sizes = lengths.map((item) => item.chars);
const mean = sizes.reduce((sum, value) => sum + value, 0) / sizes.length;
const sorted = [...lengths].sort((a, b) => a.chars - b.chars);
console.log(
  JSON.stringify(
    {
      tasks: 60,
      explanations: lengths.length,
      min: sorted[0],
      max: sorted.at(-1),
      mean: Math.round(mean),
      under250: lengths.filter((item) => item.chars < 250).length,
      over1200: lengths.filter((item) => item.chars > 1200).length,
    },
    null,
    2,
  ),
);
