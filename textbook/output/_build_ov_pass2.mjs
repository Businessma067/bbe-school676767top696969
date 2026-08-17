import fs from "node:fs";

const MOJIBAKE = [
  ["â€”", "—"],
  ["â€“", "–"],
  ["â€™", "’"],
  ["â€œ", "“"],
  ["â€\u009d", "”"],
  ["â€¦", "…"],
  ["Â ", " "],
];

const repair = (s) => MOJIBAKE.reduce((acc, [bad, good]) => acc.split(bad).join(good), s);

const spansOf = (value) => {
  const spans = [];
  const displayRe = /\$\$([\s\S]*?)\$\$/g;
  let m;
  while ((m = displayRe.exec(value))) spans.push({ kind: "display", body: m[1] });
  const withoutDisplays = value.replace(/\$\$[\s\S]*?\$\$/g, " ");
  const inlineRe = /(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g;
  while ((m = inlineRe.exec(withoutDisplays))) spans.push({ kind: "inline", body: m[1] });
  return spans;
};

const stripMath = (s) =>
  s.replace(/\$\$[\s\S]*?\$\$/g, " ").replace(/(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g, " ");

let repaired = 0;

for (let b = 1; b <= 6; b++) {
  const input = JSON.parse(fs.readFileSync(`textbook/output/_ch11_ov_batch_${b}.json`, "utf8"));
  const outPath = `textbook/output/_ch11_ov_out_${b}.json`;
  const output = JSON.parse(fs.readFileSync(outPath, "utf8"));

  // Repair double-encoded punctuation in place before asking for another writing pass.
  let touched = false;
  for (const entry of output) {
    const fixed = repair(entry.text);
    if (fixed !== entry.text) {
      entry.text = fixed;
      repaired += 1;
      touched = true;
    }
  }
  if (touched) fs.writeFileSync(outPath, JSON.stringify(output, null, 2));

  const todo = [];
  input.forEach((item, i) => {
    const text = output[i].text;
    const issues = [];

    for (const span of spansOf(text)) {
      if (/\\\$/.test(span.body)) issues.push(`currency inside math: $$${span.body.trim()}$$`);
    }
    for (const line of text.split("\n")) {
      const t = line.trim();
      if (!t || t.startsWith("**")) continue;
      const bare = stripMath(t);
      if (/[A-Za-z_)\]}]\s*=\s*[-\d.]/.test(bare)) {
        issues.push(`unmarked math in this line: ${t}`);
      }
    }

    if (issues.length) {
      todo.push({ id: item.id, caseId: item.caseId, min_chars: item.min_chars, issues, text });
    }
  });

  const p = `textbook/output/_ch11_ov_fix_${b}.json`;
  fs.writeFileSync(p, JSON.stringify(todo, null, 2));
  console.log(`${p}: ${todo.length} overviews need a second pass`);
}

console.log(`mojibake entries repaired: ${repaired}`);
