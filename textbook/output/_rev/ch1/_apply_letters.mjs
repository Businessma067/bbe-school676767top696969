import fs from "node:fs";

export function wordCount(s) {
  return s
    .replace(/\$\$[\s\S]*?\$\$/g, " MATH ")
    .replace(/\$[^$]+\$/g, " MATH ")
    .replace(/[^\w\s']/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

const FILLER =
  /The sentence under test|Unpack this claim as its own piece|Name what the sentence is actually asking in the story of the stem, not in a generic template/;

export function applyLetters(file, patches) {
  const arr = JSON.parse(fs.readFileSync(file, "utf8"));
  const letters = "ABCDE";
  const report = [];
  let n = 0;
  for (const t of arr) {
    const p = patches[t.id];
    if (!p) continue;
    const ov = t.solution_overview;
    const st = JSON.stringify(t.statements);
    const ak = JSON.stringify(t.answer_key);
    for (const L of Object.keys(p)) {
      const i = letters.indexOf(L);
      if (i < 0) throw new Error(`${t.id}: bad letter ${L}`);
      const body = p[L].replace(/\n+$/, "");
      const want = t.answer_key[i] ? "True" : "False";
      const head = `**${L}.** → ${want}`;
      if (!body.startsWith(head)) {
        throw new Error(`${t.id} ${L}: header must be ${head}`);
      }
      const close = t.answer_key[i]
        ? "so the statement is True."
        : "so the statement is False.";
      if (!body.endsWith(close)) {
        throw new Error(`${t.id} ${L}: missing closer ${close}`);
      }
      if (body.includes("${")) throw new Error(`${t.id} ${L}: has \${`);
      if (/[\u2013\u2014\u2018\u2019\u201C\u201D]/.test(body)) {
        throw new Error(`${t.id} ${L}: fancy dash/quote`);
      }
      if (FILLER.test(body)) {
        throw new Error(`${t.id} ${L}: leftover filler`);
      }
      const w = wordCount(body);
      report.push({ id: t.id, letter: L, words: w, key: t.answer_key[i] });
      t.tactical_explanations[i] = body;
      n++;
    }
    if (t.solution_overview !== ov) throw new Error(`${t.id}: overview mutated`);
    if (JSON.stringify(t.statements) !== st) throw new Error(`${t.id}: statements mutated`);
    if (JSON.stringify(t.answer_key) !== ak) throw new Error(`${t.id}: answer_key mutated`);
  }
  const unused = Object.keys(patches).filter((id) => !arr.some((t) => t.id === id));
  if (unused.length) throw new Error(`unused patches ${unused}`);
  fs.writeFileSync(file, JSON.stringify(arr, null, 2) + "\n");
  return { n, report };
}
