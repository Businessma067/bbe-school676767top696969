import fs from "node:fs";

const items = JSON.parse(fs.readFileSync("textbook/output/_other_batch_a.json", "utf8"));
const out = JSON.parse(fs.readFileSync("textbook/output/_other_out_a.json", "utf8"));

const problems = [];
if (items.length !== out.length) problems.push(`count ${out.length} != ${items.length}`);

const PROSE = /[A-Za-z]{3,}\s+[A-Za-z]{3,}/;

function mathSpans(text) {
  const spans = [];
  const re = /\$\$([\s\S]+?)\$\$|(?<!\$)\$([^$\n]+?)\$(?!\$)/g;
  let m;
  while ((m = re.exec(text))) spans.push(m[1] ?? m[2]);
  return spans;
}

out.forEach((o, idx) => {
  const src = items[idx];
  const tag = `#${idx} ${src.caseId}${src.letter ? " " + src.letter : ""}`;
  if (o.i !== idx) problems.push(`${tag}: index field ${o.i}`);
  if (typeof o.text !== "string") problems.push(`${tag}: text not string`);

  if (o.text.length < src.min_chars)
    problems.push(`${tag}: ${o.text.length} chars < min ${src.min_chars}`);

  const oldFirst = src.text.split("\n")[0];
  const newFirst = o.text.split("\n")[0];
  if (oldFirst !== newFirst) problems.push(`${tag}: first line changed`);

  for (const chunk of src.rawChunks) {
    if (o.text.includes(chunk)) problems.push(`${tag}: rawChunk survives: ${chunk.slice(0, 50)}`);
  }

  for (const t of o.text.matchAll(/\\(?:text|operatorname)\{([^{}]*)\}/g)) {
    problems.push(`${tag}: leftover \\text/\\operatorname: ${t[0]}`);
  }

  for (const span of mathSpans(o.text)) {
    if (PROSE.test(span)) problems.push(`${tag}: prose in math span: ${span.slice(0, 70)}`);
    if (span.includes("\\$")) problems.push(`${tag}: escaped currency inside math: ${span.slice(0, 50)}`);
  }

  if (/—/.test(o.text)) problems.push(`${tag}: em dash`);

  const dispOld = (src.text.match(/\$\$/g) || []).length / 2;
  const dispNew = (o.text.match(/\$\$/g) || []).length / 2;
  console.log(
    `${tag}: ${src.text.length} -> ${o.text.length} chars (min ${src.min_chars}), displays ${dispOld} -> ${dispNew}`,
  );
});

console.log("\nUTF-8 round trip ok:", Buffer.from(fs.readFileSync("textbook/output/_other_out_a.json")).toString("utf8").length > 0);
console.log(problems.length ? "PROBLEMS:\n" + problems.join("\n") : "\nALL CHECKS PASSED");
