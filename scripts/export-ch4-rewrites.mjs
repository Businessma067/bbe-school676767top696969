import fs from "fs";

const src = fs.readFileSync("src/data/math-ch4-equations.ts", "utf8");
const ids = [
  "math-4-22",
  "math-4-34",
  "math-4-39",
  "math-4-40",
  "math-4-41",
  "math-4-51",
  "math-4-52",
  "math-4-53",
  "math-4-55",
];

function parseBacktickArray(chunk, field) {
  const marker = `${field}: [`;
  const start = chunk.indexOf(marker);
  if (start === -1) throw new Error(`Missing ${field}`);
  let i = start + marker.length;
  const items = [];
  while (i < chunk.length) {
    while (i < chunk.length && /\s|,/.test(chunk[i])) i++;
    if (chunk[i] === "]") break;
    if (chunk[i] !== "`") throw new Error(`Expected backtick in ${field}`);
    i++;
    let value = "";
    while (i < chunk.length && chunk[i] !== "`") value += chunk[i++];
    i++;
    items.push(value);
  }
  return items;
}

function parseBacktickField(chunk, field) {
  const marker = `${field}: \``;
  const start = chunk.indexOf(marker);
  if (start === -1) throw new Error(`Missing ${field}`);
  let i = start + marker.length;
  let value = "";
  while (i < chunk.length) {
    if (chunk[i] === "\\") {
      value += chunk[i++];
      if (i < chunk.length) value += chunk[i++];
      continue;
    }
    if (chunk[i] === "`") break;
    value += chunk[i++];
  }
  return value;
}

const out = {};
for (const id of ids) {
  const idMarker = `id: \`${id}\`,`;
  const start = src.indexOf(idMarker);
  if (start === -1) throw new Error(`Missing task ${id}`);
  const next = src.indexOf("\n  },", start);
  const chunk = src.slice(start, next);

  const akMatch = chunk.match(/answer_key: \[(.*?)\]/s);
  const answer_key = akMatch[1]
    .split(",")
    .map((s) => s.trim() === "true");

  out[id] = {
    title: parseBacktickField(chunk, "title"),
    statements: parseBacktickArray(chunk, "statements"),
    answer_key,
    tactical_explanations: parseBacktickArray(chunk, "tactical_explanations"),
    solution_overview: parseBacktickField(chunk, "solution_overview"),
  };
}

fs.writeFileSync("ch4-independent-rewrites.json", JSON.stringify(out, null, 2));
console.log(`Exported ${Object.keys(out).length} tasks`);
for (const id of ids) {
  console.log(`${id}: ${JSON.stringify(out[id].answer_key)}`);
}
