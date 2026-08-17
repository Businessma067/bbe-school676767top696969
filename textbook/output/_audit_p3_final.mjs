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

const issues = [];
for (let id = 1; id <= 40; id++) {
  const p3 = part3(id);
  if (p3.includes("$, $")) issues.push([id, "split-thousands"]);
  if (/[×÷δ]/.test(p3)) issues.push([id, "unicode-op"]);
  if (p3.includes("\\mathrm{PV}")) issues.push([id, "mathrm-PV"]);
  if (/\$At\b/.test(p3)) issues.push([id, "dollar-At"]);
  if (p3.includes("needed =")) issues.push([id, "needed-inside"]);
  if (p3.includes("Gap (continuous vs.")) issues.push([id, "broken-gap-line"]);
  if (p3.includes("Annual $compounding")) issues.push([id, "annual-scar"]);
  if (p3.includes("$Gap =")) issues.push([id, "gap-scar"]);
  if (p3.includes("$Solve ")) issues.push([id, "solve-scar"]);
  if (p3.includes("$The ")) issues.push([id, "the-scar"]);
  if (p3.includes("$Quarterly =")) issues.push([id, "quarterly-scar"]);
  if (p3.includes("$Monthly =")) issues.push([id, "monthly-scar"]);
  if (p3.includes("Comparing = a")) issues.push([id, "comparing-scar"]);
  // single backslash TeX (file should have double)
  const lines = p3.split(/\r?\n/).filter((L) => /^\*\*\d+\.\*\*/.test(L));
  for (const L of lines) {
    // In file, correct is \\times (two chars). JSON would show \\\\times
    // Detect single-backslash: odd — look for pattern where times is preceded by only one \
    if (/(^|[^\\])\\times/.test(L) && !/\\\\times/.test(L)) issues.push([id, "single-times"]);
    if (/(^|[^\\])\\approx/.test(L) && !/\\\\approx/.test(L)) issues.push([id, "single-approx"]);
  }
}

console.log("issues", issues.length ? issues : "none");

// digit-in-prose check (allow CD$_n$ style)
for (let id = 1; id <= 40; id++) {
  const p3 = part3(id);
  for (const L of p3.split(/\r?\n/)) {
    if (!/^\*\*\d+\.\*\*/.test(L)) continue;
    let body = L.replace(/^\*\*\d+\.\*\*\s*/, "");
    let prose = "";
    let i = 0;
    while (i < body.length) {
      if (body[i] === "$") {
        i++;
        while (i < body.length) {
          if (body[i] === "\\" && body[i + 1] === "$") {
            i += 2;
            continue;
          }
          if (body[i] === "$") {
            i++;
            break;
          }
          i++;
        }
      } else {
        prose += body[i++];
      }
    }
    if (/\d/.test(prose)) {
      console.log(`digit-prose ${id}:`, JSON.stringify(prose.trim().slice(0, 100)));
    }
  }
}

console.log("\n--- math-11-1 ---");
console.log(part3(1));
console.log("--- math-11-52 ---");
console.log(part3(52));
