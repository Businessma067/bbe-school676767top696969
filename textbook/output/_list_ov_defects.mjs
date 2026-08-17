import fs from "node:fs";

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

for (let b = 1; b <= 6; b++) {
  const input = JSON.parse(fs.readFileSync(`textbook/output/_ch11_ov_batch_${b}.json`, "utf8"));
  const output = JSON.parse(fs.readFileSync(`textbook/output/_ch11_ov_out_${b}.json`, "utf8"));
  const lines = [];
  input.forEach((item, i) => {
    const text = output[i].text;
    const bad = [];
    for (const span of spansOf(text)) {
      if (/\\\$/.test(span.body)) bad.push(`currency inside math: ${span.body.trim()}`);
    }
    for (const line of text.split("\n")) {
      const t = line.trim();
      if (!t || t.includes("$") || t.startsWith("**")) continue;
      if (/[A-Za-z_)\]}]\s*=\s*[-\d.]/.test(t)) bad.push(`unmarked math line: ${t}`);
    }
    if (bad.length) lines.push(`${item.caseId} (${item.id}):\n    - ${bad.join("\n    - ")}`);
  });
  if (lines.length) {
    console.log(`\n===== batch ${b}: ${lines.length} overviews need another pass =====`);
    for (const l of lines) console.log("  " + l);
  }
}
