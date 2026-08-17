import fs from "node:fs";

const unescape = (s) => s.replace(/\\\\/g, "\\");
const visualLength = (raw) =>
  unescape(raw)
    .replace(/\\(?:left|right|bigl|bigr|Bigl|Bigr)\b/g, "")
    .replace(/\\(?:qquad|quad|,|;|:|!)/g, " ")
    .replace(/\\frac/g, "/")
    .replace(/\\[a-zA-Z]+/g, "x")
    .replace(/[{}]/g, "")
    .replace(/\s+/g, " ")
    .trim().length;

/** Narrow neighbours that still stack: candidates for a further style pass. */
for (const file of process.argv.slice(2)) {
  const src = fs.readFileSync(file, "utf8");
  const displays = [...src.matchAll(/\$\$([\s\S]*?)\$\$/g)].map((m) => ({
    start: m.index,
    end: m.index + m[0].length,
    body: m[1].trim(),
  }));

  let thin = 0;
  const examples = [];
  for (let i = 1; i < displays.length; i += 1) {
    const gap = src.slice(displays[i - 1].end, displays[i].start);
    if (!/^(?:[ \t]*(?:\r?\n|\\n)[ \t]*)+$/.test(gap)) continue;
    const a = displays[i - 1].body;
    const b = displays[i].body;
    if (visualLength(a) <= 22 && visualLength(b) <= 22) {
      thin += 1;
      if (examples.length < 12) examples.push(`${unescape(a)}  ||  ${unescape(b)}`);
    }
  }
  console.log(`${file}: ${thin} stacked narrow pairs`);
  for (const e of examples) console.log("    " + e);
}
