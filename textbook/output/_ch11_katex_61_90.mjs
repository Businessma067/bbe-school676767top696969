import fs from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const katex = require("katex");

const out = JSON.parse(fs.readFileSync("textbook/output/ch11_expanded_61_90.json", "utf8"));

let blocks = 0;
const errs = [];

for (const task of Object.keys(out)) {
  for (const L of Object.keys(out[task])) {
    const text = out[task][L];
    const displays = text.match(/\$\$[\s\S]*?\$\$/g) || [];
    const rest = text.replace(/\$\$[\s\S]*?\$\$/g, "\u0000").replace(/\\\$/g, "\u0001");
    const inlines = rest.match(/\$[^$\n]*\$/g) || [];
    const all = [
      ...displays.map((d) => ({ mode: "display", src: d.slice(2, -2) })),
      ...inlines.map((s) => ({ mode: "inline", src: s.slice(1, -1).replace(/\u0001/g, "\\$") })),
    ];
    for (const { mode, src } of all) {
      blocks++;
      try {
        katex.renderToString(src, { displayMode: mode === "display", throwOnError: true });
      } catch (e) {
        errs.push(`${task}${L} [${mode}] ${e.message.split("\n")[0]} :: ${src.trim().slice(0, 90)}`);
      }
    }
  }
}

console.log("math blocks rendered:", blocks);
console.log("katex errors:", errs.length);
for (const e of errs) console.log("  " + e);
