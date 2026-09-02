import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const DIR = "textbook/output/_ch8_v3";
const files = [
  "11_20.json",
  "21_30.json",
  "31_40.json",
  "41_50.json",
  "51_60.json",
  "61_70.json",
  "71_80.json",
  "81_90.json",
  "91_97.json",
];

function part3(ov) {
  const i = ov.indexOf("**Part 3:");
  return i >= 0 ? ov.slice(i) : "";
}

function withPart3(current, old) {
  const head = current.split("**Part 3:")[0];
  const p3 = part3(old);
  return p3 ? head.replace(/\s*$/, "\n\n") + p3 : current;
}

for (const f of files) {
  const p = path.join(DIR, f);
  const cur = JSON.parse(fs.readFileSync(p, "utf8"));
  const old = JSON.parse(
    execSync(`git show cb89956:textbook/output/_ch8_v3/${f}`, { encoding: "utf8" }),
  );
  const byId = new Map(old.map((t) => [t.id, t]));
  for (const t of cur) {
    const o = byId.get(t.id);
    if (!o) throw new Error(`missing ${t.id} in ${f}`);
    t.statements = o.statements;
    t.answer_key = o.answer_key;
    t.tactical_explanations = o.tactical_explanations;
    t.solution_overview = withPart3(t.solution_overview, o.solution_overview);
  }
  fs.writeFileSync(p, JSON.stringify(cur, null, 2) + "\n");
  console.log(f, cur.length);
}
