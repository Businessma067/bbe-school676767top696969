import fs from "node:fs";
const file = "textbook/output/_rev/ch11/41_50.json";
const arr = JSON.parse(fs.readFileSync(file, "utf8"));
const pad = {
  "math-11-46": ["","","","",
    `Half of the recovered $6.65\\%$ is $3.325\\%$, which the claim rounds to $3.33\\%$. The extra step is only replacing $t=12$ with $t=24$ in the same logarithm. The recovered $24$-year rate is $3.33\\%$.`],
  "math-11-47": [
    `Letter C adds this $\\$36,281$ to $\\$50,931$. Treat the two-year cheque as $\\$36,281$ today, not as $\\$40,000$ today. The recovered nearer PDV is $\\$36,281.18$.`,
    "","","",""],
  "math-11-50": [
    `Letter C adds this $\\$14,445$ to $\\$18,287$. Treat the four-year invoice as $\\$14,445$ today, not as $\\$18,000$ today. The recovered nearer PDV is $\\$14,445.34$.`,
    "",
    `A winery that tenders $\\$32,732$ has converted both dates. A winery that tenders $\\$48,000$ at $5.5\\%$ has overpaid. The recovered settlement is $\\$32,732.47$.`,
    "",
    `The original $5.5\\%$ settlement was $\\$32,732$. A zero rate must lift that figure to the faces. It does: $\\$48,000$. The recovered zero-rate lump sum is $\\$48,000$.`],
};
function splice(body, extraText) {
  if (!extraText) return body;
  const lines = body.replace(/\r\n/g, "\n").trimEnd().split("\n");
  const closer = lines.pop();
  while (lines.length && !lines[lines.length-1].trim()) lines.pop();
  return [...lines, "", extraText.trim(), "", closer].join("\n");
}
function words(s){return s.split(/\s+/).filter(Boolean).length;}
for (const t of arr) {
  const ex = pad[t.id];
  if (!ex) continue;
  t.tactical_explanations = t.tactical_explanations.map((e,i) => {
    const nl = e.indexOf("\n");
    return e.slice(0,nl) + "\n\n" + splice(e.slice(nl+1).replace(/^\n+/,""), ex[i]||"");
  });
}
fs.writeFileSync(file, JSON.stringify(arr,null,2)+"\n");
for (const t of arr) console.log(t.id, t.tactical_explanations.map(words).join(", "));
