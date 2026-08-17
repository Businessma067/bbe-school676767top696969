import fs from "fs";
import { execSync } from "child_process";

const cur = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
const head = execSync("git show HEAD:src/data/math-ch11-financial.ts", {
  encoding: "utf8",
  maxBuffer: 50e6,
});

function overview(src, id) {
  const i = src.indexOf("case_id: `" + id + "`");
  const k = "solution_overview: `";
  const s = src.indexOf(k, i) + k.length;
  const e = src.indexOf("`", s);
  return src.slice(s, e);
}

// Compare escape density: count of \\$ sequences in source
for (const id of ["MATH 11.14", "MATH 11.34", "MATH 11.40", "MATH 11.96"]) {
  const a = overview(head, id);
  const b = overview(cur, id);
  const countEsc = (s) => ({
    len: s.length,
    dollarEsc: (s.match(/\\\$/g) || []).length,
    doubleDollarEsc: (s.match(/\\\\\$/g) || []).length,
    delta: (s.match(/\\delta/g) || []).length,
    answer: /\*\*Answer\.\*\*/.test(s),
  });
  console.log(id, "HEAD", countEsc(a), "CUR", countEsc(b));
  // show raw bytes around first dollar
  const idx = b.indexOf("$");
  if (idx > 0) {
    console.log("  cur bytes near first $:", [...b.slice(Math.max(0, idx - 3), idx + 5)].map((c) => c.charCodeAt(0)));
  }
  const idxH = a.indexOf("$");
  if (idxH > 0) {
    console.log("  head bytes near first $:", [...a.slice(Math.max(0, idxH - 3), idxH + 5)].map((c) => c.charCodeAt(0)));
  }
}
