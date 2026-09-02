import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

// Parse bodies object from the patch script without executing writes.
const src = fs.readFileSync("textbook/output/_rev/_patch_thin30.mjs", "utf8");
const start = src.indexOf("const bodies = {");
const end = src.indexOf("\n};", start);
const objSrc = src.slice(start + "const bodies = ".length, end + 2);
const bodies = Function(`return (${objSrc})`)();

const thin = JSON.parse(
  fs.readFileSync("textbook/output/_rev/_thin30.json", "utf8"),
);
const root = "C:/Users/bubli/Projects/bbe-school-fixed";

const banned = [
  "Linear thinking is the trap",
  "The arithmetic is locked in",
  "Nothing in the later letters",
  "Linear interpolation between two dollar amounts",
  "A solver who compared face amounts without discounting",
  "A solver who ignored the compounding or discounting convention",
  "The opposite verdict would need the recovered gap",
  "That is why this letter does not rebuild the shared factor",
  "The trap is using the wrong clock",
  "The claimed cutoff sits on the wrong side",
  "Linear shortcuts miss the extra from compounding",
  "Halving a multiple, doubling a rate",
  "The wording would survive only if the recovered figure were rounded",
  "That recovered value is the one later letters lean on",
  "Treating two clocks as interchangeable",
  "Someone rebuilding the same product from scratch",
  "The comparison is already sitting in the overview",
  "Someone who reused the overview product with a different exponent",
  "The ranking in the wording is the trap",
  "A rushed solver often stops at a printed quote",
  "The claim names",
  "matches the claim",
  "as claimed",
  "so the statement is True",
  "so the statement is False",
];

function wc(b) {
  return b.trim().split(/\s+/).filter(Boolean).length;
}

const issues = [];
const counts = [];
const dump = [];

for (const e of thin) {
  const key = `${e.id}:${e.letter}`;
  const body = bodies[key];
  if (!body) {
    issues.push("MISSING " + key);
    continue;
  }
  const w = wc(body);
  counts.push({ key, w });
  if (w < 45 || w > 75) issues.push(`WC ${key} ${w}`);
  for (const b of banned) if (body.includes(b)) issues.push(`BANNED ${key}: ${b}`);
  if (/[\u2013\u2014]/.test(body)) issues.push("DASH " + key);
  if (body.includes("${")) issues.push("TPL " + key);
  if (/The claim names|so the statement is (True|False)|matches the claim|as claimed/i.test(body)) {
    issues.push("PHRASE " + key);
  }
  // raw \% in JSON would be invalid; in the JS source string it is \\%
  if (/[^\\]\\%/.test(JSON.stringify(body))) issues.push("RAW_PCT " + key);

  const arr = JSON.parse(fs.readFileSync(path.join(root, e.file), "utf8"));
  const t = arr.find((x) => x.id === e.id);
  const letter = t.tactical_explanations[e.idx];
  const header = letter.split("\n")[0];
  dump.push({
    key,
    w,
    header,
    listed_header: e.header,
    header_match: header === e.header,
    answer_key: t.answer_key[e.idx],
    listed_key: e.key,
    overview: t.solution_overview,
    current_body: letter.split("\n").slice(2).join("\n"),
    new_body: body,
    displays_overview: [...t.solution_overview.matchAll(/\$\$[\s\S]*?\$\$/g)].map((m) => m[0]),
    displays_new: [...body.matchAll(/\$\$[\s\S]*?\$\$/g)].map((m) => m[0]),
  });
}

fs.writeFileSync(
  "textbook/output/_rev/_thin30_check.json",
  JSON.stringify({ counts, issues, dump }, null, 2) + "\n",
);
console.log("bodies", Object.keys(bodies).length, "thin", thin.length);
console.log(counts.map((c) => `${c.key}:${c.w}`).join("\n"));
console.log("under45", counts.filter((c) => c.w < 45));
console.log("over75", counts.filter((c) => c.w > 75));
console.log("issues", issues);
console.log("header mismatches", dump.filter((d) => !d.header_match).map((d) => d.key));
console.log(
  "dup displays",
  dump
    .filter((d) =>
      d.displays_new.some((x) => d.displays_overview.includes(x)),
    )
    .map((d) => d.key),
);
