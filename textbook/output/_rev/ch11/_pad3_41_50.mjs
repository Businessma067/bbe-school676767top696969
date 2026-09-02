import fs from "node:fs";

const file = "textbook/output/_rev/ch11/41_50.json";
const arr = JSON.parse(fs.readFileSync(file, "utf8"));

const pad = {
  "math-11-43": ["", "", "", "",
    `The recovered $7\\%$ present values were $\\$26,190$ annually and $\\$25,704$ continuously. A zero rate has to lift both of those figures to the face, $\\$45,000$, because there is then nothing left to discount. $\\$40,000$ would be a further haircut, which is the wrong direction. The recovered zero-rate PDV on both clocks is $\\$45,000$.`],
  "math-11-45": ["", "", "", "",
    `Letter D already locked the continuous wait at $5.02$ years, not at the false $5.45$. Ranking $5.02$ against the annual $5.17$ is this letter's only extra step. Continuous is shorter. A claimed longer continuous wait contradicts both recovered maturities.`],
  "math-11-46": ["", "", "", "",
    `Letter B's $6.65\\%$ was $-\\ln 0.45/12$. Replacing $12$ with $24$ is this letter's extra step, and it halves the rate. No square-root, no new logarithm of a new factor. The recovered $24$-year continuous rate is $3.33\\%$.`],
  "math-11-47": [
    `The two-year piece is the first addend of the licensing total. Getting $\\$36,281$ right is what lets letter C's $\\$87,212$ come out. A one-year discount or the undiscounted $\\$40,000$ would throw that total off by thousands. The recovered nearer PDV is $\\$36,281.18$.`,
    "",
    `Letters A and B are the addends. This letter is the sum. Approximately $\\$87,212$ is not approximately $\\$105,000$, and it is not either addend reused. The recovered combined PDV is $\\$87,212.05$.`,
    "", ""],
  "math-11-48": [
    `Letter B will compare this $\\$21,410$ with $\\$22,000$. A PDV above $\\$22,000$ would require a lower rate or a shorter wait than the stem's $6\\%$ and three years. The recovered PDV of Option B is $\\$21,410.30$.`,
    "", "", "",
    `Letter B's $6\\%$ ranking had A ahead by $\\$590$. At $5\\%$ that lead is gone and B is ahead by $\\$29$. The claimed $\\$23,500$ would pretend the lead is $\\$1,500$. The recovered $5\\%$ PDV is $\\$22,029$, near indifference, not a blowout.`],
  "math-11-49": [
    `Letter C will value $f(23)$ and letter E will check $t=25$. Both of those letters need this date. A harvest at $t=25$ from forgetting to subtract the shift $2$ is the usual algebraic miss. The recovered $t^{*}$ is $23$ years.`,
    "",
    `Letter E's neighbour $f(25)\\approx \\$493{,}000$ lives in the same band as $f(23)\\approx \\$496{,}000$. Neither is $\\$623,000$. The claim is not a rounding of the recovered maximum. The recovered present value at $t^{*}$ is about $\\$496,219$.`,
    "", ""],
  "math-11-50": [
    `Letter C will add this $\\$14,445$ to the nine-year piece. A wrong four-year PDV would throw the settlement off by the same error. The recovered nearer PDV is $\\$14,445.34$.`,
    "",
    `Letters A and B are the addends. This letter is the sum. Approximately $\\$32,732$ is not approximately $\\$48,000$, except in letter E when $r=0$. At $r=0.055$ the recovered settlement is $\\$32,732.47$.`,
    "",
    `Letter C's $5.5\\%$ total was $\\$32,732$. Moving $r$ to $0$ has to lift that settlement to the faces, $\\$48,000$, not leave it at $\\$32,732$. The recovered zero-rate lump sum is $\\$48,000$.`],
};

function splice(body, extraText) {
  if (!extraText) return body;
  const lines = body.replace(/\r\n/g, "\n").trimEnd().split("\n");
  const closer = lines.pop();
  while (lines.length && lines[lines.length - 1].trim() === "") lines.pop();
  return [...lines, "", extraText.trim(), "", closer].join("\n");
}

function words(s) {
  return s.split(/\s+/).filter(Boolean).length;
}

for (const t of arr) {
  const ex = pad[t.id];
  if (!ex) continue;
  t.tactical_explanations = t.tactical_explanations.map((e, i) => {
    const nl = e.indexOf("\n");
    const header = e.slice(0, nl);
    let body = e.slice(nl + 1).replace(/^\n+/, "");
    body = splice(body, ex[i] || "");
    return header + "\n\n" + body;
  });
}

fs.writeFileSync(file, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) {
  const ws = t.tactical_explanations.map(words);
  console.log(t.id, ws.join(", "));
}
