import fs from "node:fs";

/** Turns the ordered width list measured in the browser into a lookup map. */
const candidates = JSON.parse(fs.readFileSync("textbook/output/_merged_candidates.json", "utf8"));
const widths = fs.readFileSync("textbook/output/_measured_widths.txt", "utf8").trim().split(",").map(Number);

if (candidates.length !== widths.length) {
  throw new Error(`candidates ${candidates.length} != widths ${widths.length}`);
}

const map = {};
candidates.forEach((f, i) => {
  map[f] = widths[i];
});
fs.writeFileSync("textbook/output/_merged_widths.json", JSON.stringify(map, null, 2));
console.log(`${candidates.length} widths stored; min ${Math.min(...widths)} max ${Math.max(...widths)}`);
