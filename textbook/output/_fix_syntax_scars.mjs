import fs from "node:fs";

const FILES = [
  "src/data/math-ch1-logic.ts",
  "src/data/math-ch5-linear-equations.ts",
  "src/data/math-ch11-financial.ts",
];

function protectMath(s) {
  const slots = [];
  const out = s.replace(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g, (m) => {
    const i = slots.length;
    let fixed = m.replace(/\{,\}/g, ",");
    fixed = fixed.replace(/(?<![\^])t\*(?![A-Za-z*])/g, "t^*");
    fixed = fixed.replace(/P''\(t\^\*\)/g, "P''(t^*)");
    fixed = fixed.replace(/P'\(t\^\*\)/g, "P'(t^*)");
    fixed = fixed.replace(/P\(t\^\*\)/g, "P(t^*)");
    slots.push(fixed);
    return `\u0000MATH${i}\u0000`;
  });
  return { out, slots };
}

function restoreMath(s, slots) {
  return s.replace(/\u0000MATH(\d+)\u0000/g, (_, i) => slots[Number(i)]);
}

function fixProse(s) {
  let t = s.replace(/\{,\}/g, ",");
  t = t.replace(/P''\(t\*\)/g, "$P''(t^*)$");
  t = t.replace(/P'\(t\*\)/g, "$P'(t^*)$");
  t = t.replace(/P\(t\*\)/g, "$P(t^*)$");
  t = t.replace(/dt\*\/dr/g, "$dt^*/dr$");
  t = t.replace(/dt\*\b/g, "$dt^*$");
  t = t.replace(/(?<![A-Za-z\\^$])t\*(?![A-Za-z*])/g, "$t^*$");
  return t;
}

function fixFile(path) {
  const raw = fs.readFileSync(path, "utf8");
  const beforeBrace = (raw.match(/\{,\}/g) || []).length;
  const beforeBareT = (raw.match(/(?<![A-Za-z\\^$])t\*(?![A-Za-z*])/g) || []).length;

  const { out, slots } = protectMath(raw);
  let fixed = fixProse(out);
  fixed = restoreMath(fixed, slots);
  fixed = fixed.replace(/\{,\}/g, ",");

  const afterBrace = (fixed.match(/\{,\}/g) || []).length;
  const afterBareT = (fixed.match(/(?<![A-Za-z\\^$])t\*(?![A-Za-z*])/g) || []).length;
  fs.writeFileSync(path, fixed);
  return { path, beforeBrace, afterBrace, beforeBareT, afterBareT, changed: raw !== fixed };
}

for (const f of FILES) console.log(JSON.stringify(fixFile(f)));
