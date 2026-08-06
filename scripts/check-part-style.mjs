import fs from "node:fs";

const files = [
  "src/data/ch2-part-2.1-2.3.json",
  "src/data/ch2-part-2.4-2.5.json",
  "src/data/ch2-part-2.6-2.7.json",
  "src/data/ch3-part-3.1-3.3.json",
  "src/data/ch3-part-3.4-3.6.json",
];

const endRe = /Evaluate the following economic assertions:\s*$/i;

for (const f of files) {
  const a = JSON.parse(fs.readFileSync(f, "utf8"));
  let good = 0;
  let bad = [];
  for (const c of a) {
    const t = String(c.context).trim();
    const ok =
      endRe.test(t) &&
      t.length >= 70 &&
      !/^\.\s*Evaluate/i.test(t) &&
      !/^Evaluate the following economic assertions:\s*$/i.test(t) &&
      !/^Review the economic concepts in this case\./i.test(t) &&
      !/^At a /i.test(t);
    if (ok) good++;
    else bad.push({ id: c.case_id, ctx: t.slice(0, 140) });
  }
  console.log(f, "good", good, "bad", bad.length);
  for (const b of bad.slice(0, 8)) console.log(" ", b.id, JSON.stringify(b.ctx));
}
