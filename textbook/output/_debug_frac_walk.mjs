const NUM = String.raw`-?\d+(?:\.\d+)?`;
const body = "0.072/12 = 0.006";
const re = new RegExp(`(${NUM})\\s*/\\s*(${NUM})`, "g");
console.log("direct", body.replace(re, (_, a, b) => `\\frac{${a}}{${b}}`));

// Simulate the currency-aware walker on a realistic fragment
const s =
  "the nominal rate is $r = 0.072$, interest is paid $n = 12$ times a year and the term is $t = 1$ year, so the periodic rate is $0.072/12 = 0.006$ and the exponent is $nt = 12$:";

let i = 0;
const spans = [];
while (i < s.length) {
  if (s[i] === "$") {
    const after = s[i + 1];
    const end = s.indexOf("$", i + 1);
    if (after && /\d/.test(after)) {
      if (end < 0) break;
      const body = s.slice(i + 1, end);
      const money = /^[\d,]+(?:\.\d+)?$/.test(body);
      spans.push({ body, money, converted: money ? null : body.replace(re, (_, a, b) => `\\frac{${a}}{${b}}`) });
      i = end + 1;
      continue;
    }
    if (end < 0) break;
    spans.push({ body: s.slice(i + 1, end), money: false });
    i = end + 1;
    continue;
  }
  i += 1;
}
console.log(spans);
