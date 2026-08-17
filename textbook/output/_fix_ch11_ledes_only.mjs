import fs from "node:fs";
import { sanitize, wrapEq, mergeHalf, fixMatchingLede, hasUnescapedDollar } from "./_fix_ch11_denylist2.mjs";

const PATH = "src/data/math-ch11-financial.ts";
let s = fs.readFileSync(PATH, "utf8");
const before = s;

s = s.replace(/\r(?!\n)/g, "");

const lines = s.split("\n");
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  if (/matching exactly|matching approximately/.test(line) && !line.includes("$$")) {
    lines[i] = fixMatchingLede(line);
    continue;
  }
  const m = line.match(/^(\*\*\d+\.\*\*)\s+([\s\S]+)$/);
  if (!m) continue;
  const num = m[1];
  let body = m[2];
  let changed = false;
  if (/^\$/.test(body) && /\$\$\.?$/.test(body) && hasUnescapedDollar(body.slice(1).replace(/\$\$\.?$/, ""))) {
    body = body.replace(/^\$/, "").replace(/\$\$(\.?)$/, "$$$1");
    changed = true;
  }
  if (/\$[^$\n]+\$\s*(-\s*1)?\s*(≈|\\\\approx)/.test(body)) {
    body = mergeHalf(body);
    changed = true;
  }
  if (changed) lines[i] = `${num} ${body}`;
}
s = lines.join("\n");
s = s.replace(/\n\$\.\n/g, "\n");
s = s.replace(
  /Trap: the actual gap is only 7\.44% - 7\.20% = 0\.24 percentage points/g,
  "Trap: the actual gap is only $7.44\\\\% - 7.20\\\\% = 0.24$ percentage points",
);
s = s.replace(/(\*\*\d+\.\*\*[^\n]*)\n(\*\*\d+\.\*\*)/g, "$1\n\n$2");

fs.writeFileSync(PATH, s);

const ov1 = s.slice(s.indexOf("id: `math-11-1`"), s.indexOf("id: `math-11-2`"));
fs.writeFileSync(
  "textbook/output/_ch11_verify.json",
  JSON.stringify(
    {
      changed: before !== s,
      step2: (ov1.match(/\*\*2\.\*\*[^\n]+/) || [])[0],
      step3: (ov1.match(/\*\*3\.\*\*[^\n]+/) || [])[0],
      eTrap: (ov1.match(/Trap: the actual gap[^\n]+/) || [])[0],
      cLede: (ov1.match(/\$?FV =[^\n]+/) || [])[0],
      aLede: (ov1.match(/Periodic rate[^\n]+/) || [])[0],
      nestedSemi: (s.match(/\*\*1\.\*\* \$Semi-annual[^\n]+/) || [])[0] || (s.match(/\*\*1\.\*\* Semi-annual[^\n]+/) || [])[0],
      fileText: (s.match(/\\text\{/g) || []).length,
    },
    null,
    2,
  ),
);
console.log("ledes-only done", before.length, "->", s.length);
