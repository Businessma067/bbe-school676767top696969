import fs from "node:fs";

const unescapeTemplate = (raw) =>
  raw.replaceAll("\\`", "`").replaceAll("\\${", "${").replaceAll("\\\\", "\\");

const source = fs.readFileSync("src/data/math-ch5-linear-equations.ts", "utf8");
const blockRe =
  /id: "math-5-(\d+)",[\s\S]*?tactical_explanations: \[([\s\S]*?)\],\r?\n\s*difficulty_level:/g;

const hits = [];
let m;
while ((m = blockRe.exec(source))) {
  const n = Number(m[1]);
  const items = [...m[2].matchAll(/`((?:\\`|[^`])*)`/g)].map((x) =>
    unescapeTemplate(x[1]),
  );
  items.forEach((text, i) => {
    const letter = "ABCDE"[i];
    const overEscaped = [...text.matchAll(/\\\\[a-zA-Z]+/g)].map((x) => x[0]);
    const overCurrency = [...text.matchAll(/\\\\\$/g)].map((x) => x[0]);
    if (overEscaped.length || overCurrency.length) {
      hits.push({
        id: `T${n}${letter}`,
        latex: [...new Set(overEscaped)].slice(0, 6),
        currency: overCurrency.length,
      });
    }
  });
}

console.log(
  JSON.stringify({ count: hits.length, hits: hits.slice(0, 40) }, null, 2),
);
