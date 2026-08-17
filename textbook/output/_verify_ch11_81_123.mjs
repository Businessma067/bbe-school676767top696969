import { MATH_CH11_FINANCIAL as T } from "../../src/data/math-ch11-financial.ts";

const dump = JSON.parse(
  await import("fs").then((fs) =>
    fs.promises.readFile("textbook/output/_ch11_81_123_dump.json", "utf8"),
  ),
);

console.log("PARSE_OK", T.length, T[T.length - 1].id);

const slice = T.filter((t) => {
  const n = parseInt(t.id.replace("math-11-", ""), 10);
  return n >= 81;
});

const letters = "ABCDE";
let headerMismatch = 0;
let dashCount = 0;
let shortened = 0;
const allLens = [];

for (const t of slice) {
  const old = dump.find((d) => d.id === t.id);
  if (t.tactical_explanations.length !== 5) console.log("not 5", t.id);
  for (let i = 0; i < 5; i++) {
    const e = t.tactical_explanations[i];
    const wantTrue = t.answer_key[i];
    const m = e.match(/^\*\*([A-E])\)[\s\S]*?\*\*\s+\((true|false)\)/);
    if (!m) {
      console.log("bad header", t.id, letters[i]);
      headerMismatch++;
    } else {
      const tf = m[2] === "true";
      if (tf !== wantTrue) {
        console.log("header/key mismatch", t.id, letters[i], m[2], wantTrue);
        headerMismatch++;
      }
    }
    if (e.includes("\u2014") || t.solution_overview.includes("\u2014")) dashCount++;
    allLens.push(e.length);
    if (old) {
      const oldE = old.tactical[i].text.replace(/\u2014/g, ":");
      // compare without dash - if new is shorter than original (minus dash), fail
      if (e.length < old.tactical[i].len - 5) {
        console.log("SHORTENED", t.id, letters[i], old.tactical[i].len, "->", e.length);
        shortened++;
      }
    }
  }
  if (old && t.solution_overview.length < old.ov_len - 5) {
    console.log("OV SHORTENED", t.id, old.ov_len, "->", t.solution_overview.length);
    shortened++;
  }
}

console.log("header mismatches", headerMismatch);
console.log("em dashes in 81-123 slots", dashCount);
console.log("shortened", shortened);
console.log(
  "tactical lens min/max/avg",
  Math.min(...allLens),
  Math.max(...allLens),
  (allLens.reduce((a, b) => a + b, 0) / allLens.length) | 0,
);
console.log("samples:");
for (const n of [81, 90, 99, 108, 114, 123]) {
  const t = T.find((x) => x.id === "math-11-" + n);
  console.log(
    " ",
    t.id,
    t.tactical_explanations.map((e) => e.length).join("/"),
    "ov=" + t.solution_overview.length,
  );
}
console.log("expanded ids:", slice.map((t) => t.id).join(", "));
