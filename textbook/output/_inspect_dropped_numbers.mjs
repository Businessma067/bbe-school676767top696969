import fs from "node:fs";

const norm = (n) => n.replace(/,/g, "").replace(/\.0+$/, "").replace(/\.$/, "");
const numbers = (s) =>
  new Set((s.replace(/\{,\}/g, ",").match(/\d[\d,.]*/g) ?? []).map(norm));

for (let b = 1; b <= 6; b++) {
  const input = JSON.parse(fs.readFileSync(`textbook/output/_ch11_ov_batch_${b}.json`, "utf8"));
  const output = JSON.parse(fs.readFileSync(`textbook/output/_ch11_ov_out_${b}.json`, "utf8"));
  input.forEach((item, i) => {
    const after = numbers(output[i].text);
    const missing = [...numbers(item.text)].filter((n) => !after.has(n));
    if (!missing.length) return;
    console.log(`\n########## ${item.caseId} missing: ${missing.join(", ")}`);
    for (const n of missing) {
      const pattern = new RegExp(`.{0,110}${n.replace(/\./g, "\\.").replace(/(\d)(?=(\d{3})+$)/g, "$1,?")}.{0,60}`, "g");
      const hits = item.text.match(pattern) ?? [];
      for (const h of hits.slice(0, 2)) console.log(`  OLD: ${h.replace(/\n/g, " | ")}`);
    }
  });
}
