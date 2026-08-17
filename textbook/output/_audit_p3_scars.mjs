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

const scars = [];
for (let id = 1; id <= 40; id++) {
  const p3 = part3(id);
  const lines = p3.split(/\r?\n/).filter((L) => /^\*\*\d+\.\*\*/.test(L));
  for (const L of lines) {
    // bare digit outside $ (rough): strip math spans then look for digits
    let stripped = L.replace(/\$\\\$/g, ""); // currency markers inside math first? 
    // Remove $...$ spans carefully with currency \$
    let out = "";
    let i = 0;
    const body = L.replace(/^\*\*\d+\.\*\*\s*/, "");
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
        continue;
      }
      out += body[i++];
    }
    if (/\d/.test(out)) {
      scars.push({ id, kind: "digit-in-prose", prose: out.trim().slice(0, 120), line: L.slice(0, 140) });
    }
    if (/\$[A-Za-z][^$]*\b(needed|gives|which|compounding)\b/i.test(L)) {
      scars.push({ id, kind: "english-in-math", line: L.slice(0, 140) });
    }
    if (/\\mathrm\{PV\}/.test(L)) scars.push({ id, kind: "mathrm-PV", line: L.slice(0, 100) });
    if (/\$At\b/.test(L)) scars.push({ id, kind: "dollar-At", line: L.slice(0, 100) });
    if (/\\\\\\approx/.test(L)) scars.push({ id, kind: "triple-approx", line: L.slice(0, 100) });
    if (/\d\$\s*,\s*\$\d/.test(L)) scars.push({ id, kind: "split-thousands", line: L.slice(0, 100) });
    // single-backslash escapes in source (should be double)
    if (/(?<!\\)\\(?:times|approx|%|ln|delta|mathrm)(?!\\)/.test(L) && !/\\\\(?:times|approx|%|ln|delta|mathrm)/.test(L)) {
      scars.push({ id, kind: "single-backslash", line: L.slice(0, 100) });
    }
  }
}

console.log("scar count", scars.length);
for (const sc of scars.slice(0, 40)) {
  console.log(JSON.stringify(sc));
}

// confirm backslash doubling in file for task 1
const p1 = part3(1);
console.log("\nTask1 has \\\\\\\\times?", p1.includes("\\\\times"));
console.log("Task1 JSON:", JSON.stringify(p1.split(/\r?\n/)[2]));
