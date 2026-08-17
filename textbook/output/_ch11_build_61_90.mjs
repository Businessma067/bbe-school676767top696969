import fs from "fs";
import path from "path";

const OUT_DIR = "textbook/output";
const targets = JSON.parse(
  fs.readFileSync(path.join(OUT_DIR, "_ch11_expand_targets_61_90.json"), "utf8"),
);

const srcFiles = fs
  .readdirSync(OUT_DIR)
  .filter((f) => /^_ch11_src_\d+_\d+\.md$/.test(f))
  .sort();

const bodies = {};
for (const file of srcFiles) {
  const raw = fs.readFileSync(path.join(OUT_DIR, file), "utf8").replace(/\r\n/g, "\n");
  const parts = raw.split(/^@@@(\d{2})([A-E])[ \t]*$/m);
  for (let i = 1; i < parts.length; i += 3) {
    const task = parts[i];
    const letter = parts[i + 1];
    const body = parts[i + 2].trim();
    const key = task + letter;
    if (bodies[key]) console.log("DUPLICATE", key, "in", file);
    bodies[key] = body;
  }
}

const out = {};
const problems = [];
const stats = [];

for (const task of Object.keys(targets)) {
  out[task] = {};
  for (const letter of Object.keys(targets[task].letters)) {
    const spec = targets[task].letters[letter];
    const body = bodies[task + letter];
    if (!body) {
      problems.push(`MISSING BODY ${task}${letter}`);
      continue;
    }
    const header = `**${letter}) ${spec.statement}**  (${spec.verdict})`;
    const liveHeader = spec.current.replace(/\r\n/g, "\n").split("\n")[0];
    if (header !== liveHeader) problems.push(`HEADER DIFF ${task}${letter}`);
    const text = `${header}\n\n${body}`;
    out[task][letter] = text;

    const len = text.length;
    const floor = Math.max(spec.min_chars, spec.current.replace(/\r\n/g, "\n").length);
    if (len < floor) problems.push(`SHORT ${task}${letter} len=${len} floor=${floor} need=${floor - len}`);
    stats.push({ key: task + letter, len, floor });

    // content checks
    const bad = [];
    if (/\u2014/.test(text)) bad.push("em-dash");
    if (/\*\*(Watch|Tip|Trap|Why it fails)/i.test(text)) bad.push("sticker");
    if (/\bTrap:/i.test(text)) bad.push("trap-label");
    if (/from Part [A-E]\b/i.test(text)) bad.push("from-part");
    if (/\bfrom \([A-E]\)/i.test(text)) bad.push("from-paren");
    if (/\b(as shown above|shown earlier|computed in \([a-e]\)|in part \([a-e]\)|already computed)/i.test(text))
      bad.push("backref");
    if (/\\\\[a-zA-Z]/.test(text)) bad.push("double-escape");

    // delimiter balance: strip escaped currency first, then $$ pairs, then inline $
    const noCurrency = text.replace(/\\\$/g, "");
    const displayDelims = (noCurrency.match(/\$\$/g) || []).length;
    if (displayDelims % 2 !== 0) bad.push(`unbalanced-display(${displayDelims})`);
    const inlineDelims = (noCurrency.replace(/\$\$/g, "").match(/\$/g) || []).length;
    if (inlineDelims % 2 !== 0) bad.push(`unbalanced-inline(${inlineDelims})`);

    // currency written outside math must be escaped: look at prose regions only
    const prose = text
      .replace(/\$\$[\s\S]*?\$\$/g, " MATH ")
      .replace(/\\\$/g, "CUR")
      .replace(/\$[^$\n]*\$/g, " MATH ");
    if (/\$/.test(prose)) bad.push("stray-dollar-in-prose");
    if (bad.length) problems.push(`FLAG ${task}${letter}: ${bad.join(",")}`);
  }
}

const count = stats.length;
const lens = stats.map((s) => s.len);
const mean = lens.reduce((a, b) => a + b, 0) / (count || 1);
const minLen = Math.min(...lens);
const maxLen = Math.max(...lens);
const overFloor = stats.map((s) => s.len - s.floor);
const minOver = Math.min(...overFloor);
const meanFloor = stats.reduce((a, s) => a + s.floor, 0) / (count || 1);

fs.writeFileSync(
  path.join(OUT_DIR, "ch11_expanded_61_90.json"),
  JSON.stringify(out, null, 2) + "\n",
);

console.log("count:", count);
console.log("min len:", minLen, " mean len:", mean.toFixed(1), " max len:", maxLen);
console.log("mean floor:", meanFloor.toFixed(1), " min (len - floor):", minOver);
console.log("problems:", problems.length);
for (const p of problems) console.log("  " + p);
