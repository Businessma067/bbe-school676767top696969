import fs from "node:fs";
const out = JSON.parse(fs.readFileSync("textbook/output/_other_out_a.json", "utf8"));
const glue =
  /\b(?:and|or|the|for|with|from|that|which|this|into|onto|than|then|when|where|while|also|but|not|amount|invested|returned|matching|statement|condition|satisfied|exists)\b/i;
let bad = 0;
for (const o of out) {
  for (const m of o.text.matchAll(/(?<!\$)\$([^$\n]+?)\$(?!\$)/g)) {
    const t = m[1].trim();
    const stripped = t.replace(/\\[a-zA-Z]+/g, " ");
    if (glue.test(stripped) || /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(t)) {
      console.log("inline degrades:", o.i, JSON.stringify(t));
      bad++;
    }
  }
}
console.log(bad ? `BAD ${bad}` : "inline spans all clean");
