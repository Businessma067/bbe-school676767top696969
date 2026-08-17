import fs from "node:fs";

const inp = JSON.parse(
  fs.readFileSync("textbook/output/_ch11_textcmd_batch_4.json", "utf8"),
);
const raw = fs
  .readFileSync("textbook/output/_batch4_rewrites.txt", "utf8")
  .replace(/\r\n/g, "\n")
  .replace(/^\uFEFF/, "");

const blocks = raw.split(/^=== ITEM (\d+)\n/m);
const byIndex = new Map();
for (let i = 1; i < blocks.length; i += 2) {
  byIndex.set(Number(blocks[i]), blocks[i + 1].replace(/\n+$/, ""));
}

if (byIndex.size !== inp.length) {
  throw new Error(`block count ${byIndex.size} != input ${inp.length}`);
}

const hasProseWords = (s) => /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(s);

const out = [];
const problems = [];

inp.forEach((item, i) => {
  const text = byIndex.get(i);
  if (text === undefined) throw new Error(`missing block ${i}`);

  const oldFirst = item.text.split("\n")[0];
  const newFirst = text.split("\n")[0];
  if (oldFirst !== newFirst) problems.push(`${i} ${item.id}: header changed`);

  if (text.length < item.min_chars) {
    problems.push(
      `${i} ${item.id}: too short ${text.length} < ${item.min_chars}`,
    );
  }

  // display spans
  const displays = [...text.matchAll(/\$\$([\s\S]*?)\$\$/g)].map((m) => m[1]);
  displays.forEach((d) => {
    if (hasProseWords(d)) problems.push(`${i} ${item.id}: prose in $$: ${d.trim()}`);
  });
  if (/\\text\{[^}]*[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(text)) {
    problems.push(`${i} ${item.id}: \\text{ with prose`);
  }
  if (/\\operatorname\{/.test(text)) {
    problems.push(`${i} ${item.id}: operatorname present`);
  }
  // \$ must not appear inside a math span
  const stripped = text.replace(/\$\$[\s\S]*?\$\$/g, (m) => {
    if (m.includes("\\$")) problems.push(`${i} ${item.id}: escaped currency inside $$`);
    return "\u0000";
  });
  // inline spans on remaining text: check odd $ balance
  const dollars = (stripped.match(/(?<!\\)\$/g) || []).length;
  if (dollars % 2 !== 0) problems.push(`${i} ${item.id}: unbalanced inline $ (${dollars})`);
  // inline span prose check
  const inline = [...stripped.matchAll(/(?<!\\)\$([^$\n]+?)(?<!\\)\$/g)].map((m) => m[1]);
  inline.forEach((s) => {
    if (hasProseWords(s)) problems.push(`${i} ${item.id}: prose in $..$: ${s}`);
  });
  if (/—|Trap:|from Part A/.test(text)) problems.push(`${i} ${item.id}: banned phrasing`);

  out.push({
    id: item.id,
    kind: item.kind,
    index: item.index ?? null,
    text,
  });
});

fs.writeFileSync(
  "textbook/output/_ch11_textcmd_out_4.json",
  JSON.stringify(out, null, 2) + "\n",
  "utf8",
);

console.log("entries:", out.length);
console.log(
  "lengths:",
  out.map((o, i) => `${i}:${o.text.length}/${inp[i].min_chars}`).join(" "),
);
console.log(problems.length ? "PROBLEMS:\n" + problems.join("\n") : "no problems");
