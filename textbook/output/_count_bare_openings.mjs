import fs from "node:fs";

const stripMath = (s) =>
  s
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    .replace(/(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g, " ");

let bare = 0;
let total = 0;
const samples = [];

for (let b = 1; b <= 6; b++) {
  const out = JSON.parse(fs.readFileSync(`textbook/output/_ch11_ov_out_${b}.json`, "utf8"));
  for (const item of out) {
    total += 1;
    const opening = stripMath(item.text.split("**Part")[0]);
    if (/[A-Za-z_)\]}]\s*=\s*[-\d.]/.test(opening)) {
      bare += 1;
      if (samples.length < 8) samples.push(`${item.id}: ${opening.trim().slice(0, 130)}`);
    }
  }
}

console.log(`openings with unmarked math: ${bare} of ${total}`);
for (const s of samples) console.log("  " + s);
