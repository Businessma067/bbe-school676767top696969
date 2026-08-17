import fs from "node:fs";

const norm = (n) => n.replace(/,/g, "").replace(/\.0+$/, "").replace(/\.$/, "");
const numbers = (s) => (s.replace(/\{,\}/g, ",").match(/\d[\d,.]*/g) ?? []).map(norm);

for (let b = 1; b <= 6; b++) {
  const input = JSON.parse(fs.readFileSync(`textbook/output/_ch11_ov_batch_${b}.json`, "utf8"));
  const output = JSON.parse(fs.readFileSync(`textbook/output/_ch11_ov_out_${b}.json`, "utf8"));
  const todo = [];

  input.forEach((item, i) => {
    const after = new Set(numbers(output[i].text));
    const missing = [...new Set(numbers(item.text))].filter((n) => !after.has(n));
    if (!missing.length) return;

    const contexts = [];
    for (const n of missing) {
      const grouped = n.replace(/(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1,?");
      const re = new RegExp(`.{0,140}${grouped.replace(/\./g, "\\.")}.{0,80}`, "g");
      for (const hit of item.text.match(re) ?? []) contexts.push(hit.replace(/\n/g, " "));
    }
    todo.push({
      id: item.id,
      caseId: item.caseId,
      missing_numbers: missing,
      original_context: contexts.slice(0, 4),
      current_text: output[i].text,
    });
  });

  const p = `textbook/output/_ch11_ov_numbers_${b}.json`;
  fs.writeFileSync(p, JSON.stringify(todo, null, 2));
  console.log(`${p}: ${todo.length} overviews lost figures ${todo.map((t) => t.caseId).join(", ")}`);
}
