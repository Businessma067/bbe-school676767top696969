/**
 * Direct residual replacements for division → \frac leftovers.
 */
import fs from "fs";

const files = [
  "src/data/math-ch1-logic.ts",
  "src/data/math-ch5-linear-equations.ts",
  "src/data/math-ch8-power-functions.ts",
  "src/data/math-ch11-financial.ts",
  "src/data/math-cases-ch13-binomial.json",
];

function tsFrac(a, b) {
  return `\\\\frac{${a}}{${b}}`;
}
function jsonFrac(a, b) {
  return `\\frac{${a}}{${b}}`;
}

for (const path of files) {
  const ts = path.endsWith(".ts");
  const frac = ts ? tsFrac : jsonFrac;
  let s = fs.readFileSync(path, "utf8");
  const before = s;
  let n = 0;

  const swap = (from, to) => {
    if (!s.includes(from)) return;
    const parts = s.split(from);
    n += parts.length - 1;
    s = parts.join(to);
  };

  // Common rate divisions inside $...$
  for (const [a, b] of [
    ["0.072", "12"],
    ["0.08", "4"],
    ["0.056", "4"],
    ["0.06", "12"],
    ["0.064", "4"],
    ["0.065", "2"],
  ]) {
    swap(`$${a}/${b} = `, `$${frac(a, b)} = `);
    swap(`$${a}/${b}$`, `$${frac(a, b)}$`);
    swap(`$${a}/${b},`, `$${frac(a, b)},`);
  }

  // 24.00 / 80 style (with spaces) inside math
  s = s.replace(/\$(\d+\.\d+)\s*\/\s*(\d+) = /g, (_, a, b) => {
    n += 1;
    return `$${frac(a, b)} = `;
  });

  // Ch1 leftovers
  swap("$100/3$", `$${frac("100", "3")}$`);
  swap("$100/3 =", `$${frac("100", "3")} =`);
  swap("$n = 100/3$", `$n = ${frac("100", "3")}$`);
  swap("$n = 100/3 =", `$n = ${frac("100", "3")} =`);
  swap("$n = 100/m$", `$n = ${frac("100", "m")}$`);
  swap("$x/2$", `$${frac("x", "2")}$`);
  swap("= p/q$", `= ${frac("p", "q")}$`);
  swap("=p/q$", `=${frac("p", "q")}$`);

  // Power leftovers
  if (ts) {
    swap(
      "$S(M)=M^{\\\\frac{2}{3}}/2$",
      `$S(M)=${frac("M^{\\\\frac{2}{3}}", "2")}$`,
    );
    swap(
      "S(M)=M^{\\\\frac{2}{3}}/2",
      `S(M)=${frac("M^{\\\\frac{2}{3}}", "2")}`,
    );
    swap(
      "$g(y)=y^{\\\\frac{3}{2}}/27$",
      `$g(y)=${frac("y^{\\\\frac{3}{2}}", "27")}$`,
    );
    swap(
      "g(y)=y^{\\\\frac{3}{2}}/27",
      `g(y)=${frac("y^{\\\\frac{3}{2}}", "27")}`,
    );
    swap("$G(m)/m$", `$${frac("G(m)", "m")}$`);
    swap("G(m)/m", `${frac("G(m)", "m")}`);
    swap("$I(d)/d$", `$${frac("I(d)", "d")}$`);
    swap("$Q(L)/L$", `$${frac("Q(L)", "L")}$`);
    swap("$v(q)=q^{0.5}/2$", `$v(q)=${frac("q^{0.5}", "2")}$`);
    swap("v(q)=q^{0.5}/2", `v(q)=${frac("q^{0.5}", "2")}`);
    swap("V(h) = h^{3}/3", `V(h) = ${frac("h^{3}", "3")}`);
    swap("$V(h) = h^{3}/3$", `$V(h) = ${frac("h^{3}", "3")}$`);
    // (d/(d+1))^2
    swap("(d/(d+1))", `(${frac("d", "d+1")})`);
    // y = (1120 - 5x)/2
    swap("$y = (1120 - 5x)/2$", `$y = ${frac("(1120 - 5x)", "2")}$`);
    swap("y = (1120 - 5x)/2", `y = ${frac("(1120 - 5x)", "2")}`);
    // parenthesized \div
    s = s.replace(
      /(\([^()]+\))\s*\\\\div\s*(\d+(?:\.\d+)?)/g,
      (_, a, b) => {
        n += 1;
        return frac(a, b);
      },
    );
  }

  // Do not touch 15/month, /night, /unit, /lb unit rates outside math intent —
  // but if inside $...$ convert only pure math. Leave unit prose.

  if (s.match(/difficulty_level:\s*[`"']\\+frac/)) {
    throw new Error(`difficulty corrupted in ${path}`);
  }

  if (s !== before) {
    fs.writeFileSync(path, s);
  }
  console.log(path, "replacements", n, "changed", s !== before);
}
