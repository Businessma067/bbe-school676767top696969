import { readFileSync, writeFileSync } from "node:fs";

const dir = "C:/Users/bubli/Projects/bbe-school-fixed/textbook/output/";
const outPath = dir + "_ch11_ov_out_4.json";

const raw = readFileSync(outPath);
if (raw[0] === 0xef) throw new Error("input has BOM");
const out = JSON.parse(raw.toString("utf8"));

const edits = [
  {
    id: "math-11-66",
    from: "The first four adjustments sum to \\$2,500.00, not \\$3,000.00.",
    to: "The four-term sum is \\$2,500.00, not the \\$3,000.00 the statement claims, a gap of \\$500.00.",
  },
  {
    id: "math-11-68",
    from: "The infinite stream totals \\$125,000.00, not \\$130,000.00.",
    to: "The infinite stream totals \\$125,000.00, not the \\$130,000.00 the statement claims, which overstates the perpetuity by \\$5,000.00.",
  },
  {
    id: "math-11-77",
    from: "The fourth benefit is \\$625.00, not \\$650.00.",
    to: "The fourth benefit is \\$625.00, not the \\$650.00 the statement claims, a difference of \\$25.00.",
  },
  {
    id: "math-11-79",
    from: "The $15$-year total is \\$24,188,328.05, not \\$22,000,000.00.",
    to: "The $15$-year total is \\$24,188,328.05, not the \\$22,000,000.00 the statement claims, which understates the fifteen-year cash flow by \\$2,188,328.05.",
  },
  {
    id: "math-11-79",
    from: "The year-$7$ recovery cash flow is approximately \\$3,404,445.87, not \\$2,900,000.00.",
    to: "The year-$7$ recovery cash flow is approximately \\$3,404,445.87, not the \\$2,900,000.00 the statement claims, a shortfall of \\$504,445.87 in the claim.",
  },
];

const touched = new Set();
for (const edit of edits) {
  const item = out.find((o) => o.id === edit.id);
  if (!item) throw new Error(`missing entry ${edit.id}`);
  const occurrences = item.text.split(edit.from).length - 1;
  if (occurrences !== 1) throw new Error(`${edit.id}: found ${occurrences} occurrences of target sentence`);
  const before = item.text.length;
  item.text = item.text.replace(edit.from, edit.to);
  if (item.text.length <= before) throw new Error(`${edit.id}: text did not grow`);
  touched.add(edit.id);
}

const serialized = out.map((item) => ({ id: item.id, text: item.text }));
writeFileSync(outPath, JSON.stringify(serialized, null, 2) + "\n", { encoding: "utf8" });
console.log(`entries: ${serialized.length}; edits applied: ${edits.length}`);
console.log(`touched: ${[...touched].join(", ")}`);
