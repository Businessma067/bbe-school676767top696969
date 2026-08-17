import fs from "node:fs";

const input = JSON.parse(
  fs.readFileSync("textbook/output/_ch11_textcmd_batch_2.json", "utf8"),
);
const raw = fs
  .readFileSync("textbook/output/_tmp_batch2_new.txt", "utf8")
  .replace(/\r\n/g, "\n");

const chunks = raw.split(/^<<<ITEM (\d+)>>>\n/m);
const texts = new Map();
for (let i = 1; i < chunks.length; i += 2) {
  texts.set(Number(chunks[i]), chunks[i + 1].replace(/\n+$/, ""));
}

if (texts.size !== input.length) {
  throw new Error(`chunk count ${texts.size} != input ${input.length}`);
}

const out = input.map((item, n) => ({
  id: item.id,
  kind: item.kind,
  index: item.index ?? null,
  text: texts.get(n),
}));

fs.writeFileSync(
  "textbook/output/_ch11_textcmd_out_2.json",
  JSON.stringify(out, null, 2) + "\n",
  "utf8",
);

// ---- validation ----
const hasProseWords = (s) => /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(s);
const spansOf = (src) => {
  const spans = [];
  const displayRe = /\$\$([\s\S]*?)\$\$/g;
  let m;
  while ((m = displayRe.exec(src))) spans.push({ kind: "display", value: m[1] });
  const stripped = src.replace(displayRe, " ");
  const inlineRe = /(?<![$\\])\$(?!\$)((?:\\.|[^$\n])+?)\$(?!\$)/g;
  while ((m = inlineRe.exec(stripped))) spans.push({ kind: "inline", value: m[1] });
  return spans;
};

const check = JSON.parse(
  fs.readFileSync("textbook/output/_ch11_textcmd_out_2.json", "utf8"),
);
let problems = 0;
console.log(`entries: ${check.length} (input ${input.length})`);
check.forEach((o, n) => {
  const src = input[n];
  const t = o.text;
  if (o.id !== src.id || o.kind !== src.kind || (src.index ?? null) !== o.index) {
    console.log(`  [${n}] id/kind/index mismatch`);
    problems++;
  }
  if (t.length < src.min_chars) {
    console.log(`  [${n}] ${src.id} SHORT: ${t.length} < ${src.min_chars}`);
    problems++;
  }
  const head = t.split("\n")[0];
  const oldHead = src.text.split("\n")[0];
  if (head !== oldHead) {
    console.log(`  [${n}] ${src.id} HEADER CHANGED`);
    console.log(`      old: ${oldHead}`);
    console.log(`      new: ${head}`);
    problems++;
  }
  for (const s of spansOf(t)) {
    if (hasProseWords(s.value)) {
      console.log(`  [${n}] ${src.id} PROSE SPAN [${s.kind}]: ${s.value.trim().slice(0, 90)}`);
      problems++;
    }
  }
  if (/\\text\{|\\operatorname\{/.test(t)) {
    const hits = t.match(/\\(?:text|operatorname)\{[^}]*\}/g);
    console.log(`  [${n}] ${src.id} TEXT CMD: ${JSON.stringify(hits)}`);
    problems++;
  }
  const dollars = (t.match(/(?<!\\)\$/g) || []).length;
  if (dollars % 2 !== 0) {
    console.log(`  [${n}] ${src.id} UNBALANCED $ count=${dollars}`);
    problems++;
  }
  for (const s of spansOf(t)) {
    if (s.value.includes("\\$")) {
      console.log(`  [${n}] ${src.id} escaped currency inside math [${s.kind}]: ${s.value.trim().slice(0, 90)}`);
      problems++;
    }
  }
  if (t.includes("—")) {
    console.log(`  [${n}] ${src.id} em dash`);
    problems++;
  }
  console.log(
    `  ok[${n}] ${src.id} idx=${o.index} len ${src.text.length} -> ${t.length} (min ${src.min_chars})`,
  );
});
console.log(problems === 0 ? "ALL CHECKS PASS" : `PROBLEMS: ${problems}`);
