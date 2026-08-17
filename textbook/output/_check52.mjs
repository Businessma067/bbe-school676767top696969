import fs from "fs";
const s = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const marker = "id: `math-11-52`";
const i = s.indexOf(marker);
console.log("idx", i);
const p = s.indexOf("**Part 3: Solve.**", i);
const a = s.indexOf("**Answer.**", p);
console.log(JSON.stringify(s.slice(p, a)));

// also check task 9 for times char
const i9 = s.indexOf("id: `math-11-9`");
const p9 = s.indexOf("**Part 3: Solve.**", i9);
const a9 = s.indexOf("**Answer.**", p9);
const p3_9 = s.slice(p9, a9);
console.log("\n--- task9 first step ---");
console.log(JSON.stringify(p3_9.split(/\r?\n/).filter(Boolean)[1]));
for (const ch of p3_9) {
  if (ch.codePointAt(0) > 127) console.log("weird", ch, ch.codePointAt(0).toString(16));
}
