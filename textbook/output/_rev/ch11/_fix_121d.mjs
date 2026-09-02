import fs from "node:fs";

const p = new URL("./121_123.json", import.meta.url);
let raw = fs.readFileSync(p, "utf8");
const start = raw.indexOf('"**D) Doubling both returns');
const marker = ',\n      "**E) If the outlay were reduced';
const end = raw.indexOf(marker, start);
if (start < 0 || end < 0) {
  console.log({ start, end });
  process.exit(1);
}
const letter = `**D) Doubling both returns to \\$68,000 in Year 1 and \\$84,000 in Year 2, with the outlay unchanged at \\$65,000, would more than double the internal rate of return.**  (true)

Doubling the inflows while holding the outlay fixed is a new quadratic, not $2 \\times 10.69\\%$:

$$84s^{2}+68s-65=0, \\qquad s \\approx 0.564, \\qquad r \\approx 77\\%$$

Twice the original rate would be only $21.4\\%$. The same $\\$65,000$ now buys twice the rental stream, so IRR more than doubles because the outlay was not doubled with the returns.`;
raw = raw.slice(0, start) + JSON.stringify(letter) + raw.slice(end);
fs.writeFileSync(p, raw);
JSON.parse(raw);
console.log("fixed 121 D");
