import fs from "node:fs";

const inp = JSON.parse(
  fs.readFileSync("textbook/output/_ch11_textcmd_batch_4.json", "utf8"),
);
const out = JSON.parse(
  fs.readFileSync("textbook/output/_ch11_textcmd_out_4.json", "utf8"),
);

const bad = [];
if (inp.length !== out.length) bad.push("count mismatch");

const hasProseWords = (s) => /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(s);

inp.forEach((it, i) => {
  const o = out[i];
  if (o.id !== it.id || o.kind !== it.kind || o.index !== (it.index ?? null)) {
    bad.push(`${i} meta mismatch`);
  }
  for (const s of it.spans || []) {
    if (o.text.includes(s)) bad.push(`${i} old span still present: ${s}`);
  }
  if (/\\text\{/.test(o.text)) bad.push(`${i} still has \\text{`);
  if (o.text.length < it.min_chars) bad.push(`${i} short`);
  if (o.text.split("\n")[0] !== it.text.split("\n")[0]) bad.push(`${i} header line changed`);

  for (const m of o.text.matchAll(/\$\$([\s\S]*?)\$\$/g)) {
    const d = m[1];
    let depth = 0;
    for (const c of d) {
      if (c === "{") depth++;
      if (c === "}") depth--;
    }
    if (depth !== 0) bad.push(`${i} unbalanced braces: ${d.trim()}`);
    if (hasProseWords(d)) bad.push(`${i} prose in display: ${d.trim()}`);
    if (d.includes("\\$")) bad.push(`${i} \\$ inside display`);
  }
  // paragraph count preserved or grown
  const oldParas = it.text.split("\n\n").length;
  const newParas = o.text.split("\n\n").length;
  if (newParas < oldParas) bad.push(`${i} paragraphs lost ${newParas} < ${oldParas}`);
  // display block count preserved
  const oldD = (it.text.match(/\$\$/g) || []).length / 2;
  const newD = (o.text.match(/\$\$/g) || []).length / 2;
  if (newD < oldD) bad.push(`${i} display blocks lost ${newD} < ${oldD}`);
});

console.log("items", out.length);
console.log(bad.length ? bad.join("\n") : "ALL CHECKS PASS");
console.log("runtime backslash sample:", JSON.stringify(out[3].text.slice(out[3].text.indexOf("F_N"), out[3].text.indexOf("F_N") + 40)));
