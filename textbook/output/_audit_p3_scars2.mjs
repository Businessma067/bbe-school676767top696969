import fs from "fs";

const s = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const re = /id: `math-11-(\d+)`/g;
const ids = [];
let m;
while ((m = re.exec(s))) ids.push({ id: +m[1], idx: m.index });

function part3(id) {
  const i = ids.findIndex((x) => x.id === id);
  const start = ids[i].idx;
  const end = i + 1 < ids.length ? ids[i + 1].idx : s.length;
  const block = s.slice(start, end);
  const p = block.indexOf("**Part 3: Solve.**");
  const a = block.indexOf("**Answer.**");
  return block.slice(p, a);
}

const patterns = [
  "Annual $compounding",
  "$Gap =",
  "$Quarterly =",
  "$Monthly =",
  "$Difference =",
  "$Interest =",
  "$The ",
  "$At ",
  "$Solve ",
  "$FV of",
  "Gap (continuous vs.",
  "Comparing = a lower",
  "\\mathrm{PV}",
  "needed =",
  "PV}_1:",
  "PV}_2 needed",
];

for (let id = 1; id <= 40; id++) {
  const p3 = part3(id);
  for (const pat of patterns) {
    if (p3.includes(pat)) console.log(`math-11-${id} has: ${pat}`);
  }
  // encoding scars
  for (const ch of p3) {
    if (ch.codePointAt(0) > 127 && ch !== "—") {
      console.log(`math-11-${id} weird char U+${ch.codePointAt(0).toString(16)}`);
      break;
    }
  }
}

console.log("---52---");
console.log(part3(52));
console.log("---1---");
console.log(part3(1));

// which of 1-40 might have been skipped: compare step1 of rewrite markers
for (let id = 1; id <= 40; id++) {
  const p3 = part3(id);
  if (p3.includes("Annual $compounding") || p3.includes("$Gap = 7.44")) {
    console.log("OLD STYLE still in", id);
  }
}
