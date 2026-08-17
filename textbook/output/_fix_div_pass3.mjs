import fs from "fs";

const files = [
  "src/data/math-ch1-logic.ts",
  "src/data/math-ch5-linear-equations.ts",
  "src/data/math-ch8-power-functions.ts",
  "src/data/math-ch11-financial.ts",
  "src/data/math-cases-ch13-binomial.json",
];

const UNIT = /^(month|months|year|years|day|days|night|nights|unit|units|lb|mile|miles)$/i;

function clean(body, F, pi) {
  let b = body;
  let local = 0;

  b = b.replace(
    /(?<![\d.\\])(\d{1,3}(?:,\d{3})+(?:\.\d+)?|\d+\.\d+|\d+)\s*\/\s*(\d{1,3}(?:,\d{3})+(?:\.\d+)?|\d+\.\d+|\d+)/g,
    (m, a, b2) => {
      if (/^[1-5]$/.test(a) && b2 === "5") return m;
      local += 1;
      return `${F}{${a}}{${b2}}`;
    },
  );

  b = b.replace(
    /(?<![A-Za-z\\])([A-Za-z](?:_[A-Za-z0-9]+)?(?:\([^()]*\))?)\s*\/\s*([A-Za-z](?:_[A-Za-z0-9]+)?(?:\([^()]*\))?|\d+(?:\.\d+)?)/g,
    (m, a, b2) => {
      if (UNIT.test(b2)) return m;
      local += 1;
      return `${F}{${a}}{${b2}}`;
    },
  );

  b = b.replace(new RegExp(`(\\d+(?:\\.\\d+)?)\\s*/\\s*(${pi})`, "g"), (_, a) => {
    local += 1;
    return `${F}{${a}}{${pi}}`;
  });

  b = b.replace(new RegExp(`([A-Za-z])\\/\\((${pi}[^)]*)\\)`, "g"), (_, a, inner) => {
    local += 1;
    return `${F}{${a}}{${inner}}`;
  });

  b = b.replace(/([A-Za-z0-9]+)\^\{(\d+)\}\s*\/\s*(\d+)/g, (_, base, exp, den) => {
    local += 1;
    return `${F}{${base}^{${exp}}}{${den}}`;
  });

  b = b.replace(/\(([^()]+)\)\^\{(\d+)\}\/(\d+)/g, (_, base, exp, den) => {
    local += 1;
    return `${F}{(${base})^{${exp}}}{${den}}`;
  });

  return { text: b, local };
}

for (const path of files) {
  const ts = path.endsWith(".ts");
  const F = ts ? "\\\\frac" : "\\frac";
  const pi = ts ? "\\\\pi" : "\\pi";
  let s = fs.readFileSync(path, "utf8");
  const before = s;
  let n = 0;

  s = s.replace(/\$([^$\n]{1,220})\$/g, (full, body) => {
    if (/difficulty_level/.test(body)) return full;
    const { text, local } = clean(body, F, pi);
    n += local;
    return local ? `$${text}$` : full;
  });

  s = s.replace(/\$\$([\s\S]{1,2500}?)\$\$/g, (full, body) => {
    if (/difficulty_level:|case_id:/.test(body)) return full;
    const { text, local } = clean(body, F, pi);
    n += local;
    return local ? `$$${text}$$` : full;
  });

  if (s.match(/difficulty_level:\s*[`"']\\+frac/)) {
    throw new Error(`difficulty corrupted in ${path}`);
  }
  if (s !== before) fs.writeFileSync(path, s);
  console.log(path, "n", n, "changed", s !== before);
}
