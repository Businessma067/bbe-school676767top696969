import fs from "node:fs";
import path from "node:path";

const root = "C:/Users/bubli/Projects/bbe-school-fixed";

function parse(p) {
  const r = fs.readFileSync(p, "utf8");
  try {
    return JSON.parse(r);
  } catch {
    return JSON.parse(r.slice(0, r.lastIndexOf("]") + 1));
  }
}

const mid11 = parse(path.join(root, "textbook/output/_rev/_mid_ch11.json"));
const mid8 = parse(path.join(root, "textbook/output/_rev/_mid_ch8.json"));
const files = {};
const issues = [];
const counts = { n: 0, w160: 0, w280: 0, falseN: 0, false280: 0 };

for (const e of [...mid11, ...mid8]) {
  const f = e.file.replace(/\\/g, "/");
  if (!files[f]) files[f] = parse(path.join(root, f));
  const t = files[f].find((x) => x.id === e.id);
  const expl = t.tactical_explanations[e.idx];
  const header = expl.split("\n")[0];
  const oldh = e.header.split("\n")[0];
  if (header !== oldh) issues.push("HEADER " + e.id + " " + e.letter);
  const want = e.key ? "True" : "False";
  if (!expl.trim().endsWith("so the statement is " + want + ".")) {
    issues.push("CLOSER " + e.id + " " + e.letter + " :: " + expl.trim().slice(-60));
  }
  if (/[\u2013\u2014]|\$\{/.test(expl)) issues.push("BANNED " + e.id + " " + e.letter);
  const body = expl.split("\n").slice(1).join("\n").trim();
  const w = body.split(/\s+/).filter(Boolean).length;
  counts.n++;
  if (w >= 160) counts.w160++;
  if (w >= 280) counts.w280++;
  if (!e.key) {
    counts.falseN++;
    if (w >= 280) counts.false280++;
    else issues.push("FALSE-THIN " + e.id + " " + e.letter + " " + w);
  }
  if (w < 160) issues.push("SHORT " + e.id + " " + e.letter + " " + w);
}

for (const f of Object.keys(files)) {
  const raw = fs.readFileSync(path.join(root, f), "utf8");
  JSON.parse(raw);
  if (!raw.endsWith("]\n") && !raw.endsWith("]\r\n")) {
    issues.push("ENDING " + f + " " + JSON.stringify(raw.slice(-6)));
  }
}

console.log("letters", counts.n, "ge160", counts.w160, "ge280", counts.w280);
console.log("false", counts.falseN, "false ge280", counts.false280);
console.log("files", Object.keys(files).length);
console.log(issues.length ? issues.join("\n") : "all checks ok");
