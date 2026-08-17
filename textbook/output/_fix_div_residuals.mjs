/**
 * Residual cleanup for division→frac after the main walker.
 * Only replaces known safe leftovers inside $...$ / $$...$$.
 */
import fs from "node:fs";

const FILES = [
  { path: "src/data/math-ch1-logic.ts", ts: true },
  { path: "src/data/math-ch5-linear-equations.ts", ts: true },
  { path: "src/data/math-ch8-power-functions.ts", ts: true },
  { path: "src/data/math-ch11-financial.ts", ts: true },
  { path: "src/data/math-cases-ch13-binomial.json", ts: false },
];

const NUM = String.raw`-?\d+(?:\.\d+)?`;
const UNIT = String.raw`month|months|year|years|day|days|hour|hours|week|weeks|night|nights|unit|units|lb|ton|tons|person|people|staff`;

function cleanBody(body, ts) {
  const frac = ts ? "\\\\frac" : "\\frac";
  const div = ts ? "\\\\\\\\div" : "\\\\div";
  let text = body;
  let n = 0;
  const sub = (re, repl) => {
    const next = text.replace(re, (...args) => {
      n += 1;
      return repl(...args);
    });
    text = next;
  };

  // Skip pure money / difficulty
  if (/^[1-5]\/5$/.test(text.trim())) return { text, n: 0 };

  // num/num
  sub(new RegExp(`(${NUM})\\s*/\\s*(${NUM})`, "g"), (_, a, b) => `${frac}{${a}}{${b}}`);

  // num/unit-word — leave (per-unit prose)
  // num/symbol
  sub(
    new RegExp(`(${NUM})\\s*/\\s*(?!${UNIT}\\b)([A-Za-z](?:_[A-Za-z0-9]+)?)`, "g"),
    (_, a, b) => `${frac}{${a}}{${b}}`,
  );

  // symbol/symbol or symbol/num (avoid latex commands)
  sub(
    new RegExp(
      `(?<![A-Za-z\\\\])([A-Za-z](?:_[A-Za-z0-9]+)?)\\s*/\\s*(${NUM}|[A-Za-z](?:_[A-Za-z0-9]+)?)`,
      "g",
    ),
    (_, a, b) => {
      if (new RegExp(`^(?:${UNIT})$`, "i").test(b)) return `${a}/${b}`;
      n -= 0;
      return `${frac}{${a}}{${b}}`;
    },
  );

  // F(a)/G(b)
  sub(
    /([A-Za-z]\\?\([^()]*\))\s*\/\s*([A-Za-z]\\?\([^()]*\))/g,
    (_, a, b) => `${frac}{${a}}{${b}}`,
  );

  // M^{\frac{a}{b}}/c  (ts-escaped)
  if (ts) {
    sub(
      new RegExp(
        `([A-Za-z])\\^\\{\\\\frac\\{([^}]+)\\}\\{([^}]+)\\}\\}\\s*/\\s*(${NUM})`,
        "g",
      ),
      (_, base, a, b, den) => `${frac}{${base}^{\\\\frac{${a}}{${b}}}}{${den}}`,
    );
    sub(
      new RegExp(`([A-Za-z])\\^\\{(${NUM})\\}\\s*/\\s*(${NUM})`, "g"),
      (_, base, exp, den) => `${frac}{${base}^{${exp}}}{${den}}`,
    );
    // (expr) \div num
    sub(
      new RegExp(`(\\([^()]+\\)|${NUM})\\s*\\\\div\\s*(${NUM})`, "g"),
      (_, a, b) => `${frac}{${a}}{${b}}`,
    );
  } else {
    sub(
      new RegExp(
        `([A-Za-z])\\^\\{\\frac\\{([^}]+)\\}\\{([^}]+)\\}\\}\\s*/\\s*(${NUM})`,
        "g",
      ),
      (_, base, a, b, den) => `${frac}{${base}^{\\frac{${a}}{${b}}}}{${den}}`,
    );
    sub(
      new RegExp(`([A-Za-z])\\^\\{(${NUM})\\}\\s*/\\s*(${NUM})`, "g"),
      (_, base, exp, den) => `${frac}{${base}^{${exp}}}{${den}}`,
    );
    sub(
      new RegExp(`(\\([^()]+\\)|${NUM})\\s*\\\\div\\s*(${NUM})`, "g"),
      (_, a, b) => `${frac}{${a}}{${b}}`,
    );
  }

  // ^{a/b}
  sub(
    new RegExp(`\\^\\{(${NUM})/(${NUM})\\}`, "g"),
    (_, a, b) => `^{${frac}{${a}}{${b}}}`,
  );
  sub(
    new RegExp(`\\^(${NUM})/(${NUM})(?![0-9.])`, "g"),
    (_, a, b) => `^{${frac}{${a}}{${b}}}`,
  );

  // \ln a / \ln b
  if (ts) {
    sub(
      /\\\\ln\s+(-?\d+(?:\.\d+)?)\s*\/\s*\\\\ln\s+(-?\d+(?:\.\d+)?)/g,
      (_, a, b) => `${frac}{\\\\ln ${a}}{\\\\ln ${b}}`,
    );
  } else {
    sub(
      /\\ln\s+(-?\d+(?:\.\d+)?)\s*\/\s*\\ln\s+(-?\d+(?:\.\d+)?)/g,
      (_, a, b) => `${frac}{\\ln ${a}}{\\ln ${b}}`,
    );
  }

  // nested h^{3}/3
  sub(
    new RegExp(`([A-Za-z])\\^\\{(${NUM})\\}\\/(${NUM})`, "g"),
    (_, base, exp, den) => `${frac}{${base}^{${exp}}}{${den}}`,
  );

  return { text, n };
}

function transformFile({ path, ts }) {
  const original = fs.readFileSync(path, "utf8");
  let conversions = 0;
  let out = "";
  let i = 0;
  const s = original;

  while (i < s.length) {
    if (s[i] === "$" && s[i + 1] === "$") {
      const end = s.indexOf("$$", i + 2);
      if (end < 0) {
        out += s.slice(i);
        break;
      }
      const body = s.slice(i + 2, end);
      if (/difficulty_level:|case_id:/.test(body)) {
        out += `$$${body}$$`;
      } else {
        const { text, n } = cleanBody(body, ts);
        conversions += n;
        out += `$$${text}$$`;
      }
      i = end + 2;
      continue;
    }
    if (s[i] === "$") {
      const after = s[i + 1];
      const end = s.indexOf("$", i + 1);
      if (after && /\d/.test(after)) {
        if (end < 0) {
          out += s.slice(i);
          break;
        }
        const body = s.slice(i + 1, end);
        if (/^[\d,]+(?:\.\d+)?$/.test(body)) {
          out += s.slice(i, end + 1);
          i = end + 1;
          continue;
        }
        if (body.length <= 800 && !/difficulty_level:/.test(body)) {
          const { text, n } = cleanBody(body, ts);
          conversions += n;
          out += `$${text}$`;
        } else {
          out += s.slice(i, end + 1);
        }
        i = end + 1;
        continue;
      }
      if (end < 0) {
        out += s.slice(i);
        break;
      }
      const body = s.slice(i + 1, end);
      if (body.length <= 800 && !/difficulty_level:/.test(body)) {
        const { text, n } = cleanBody(body, ts);
        conversions += n;
        out += `$${text}$`;
      } else {
        out += s.slice(i, end + 1);
      }
      i = end + 1;
      continue;
    }
    out += s[i];
    i += 1;
  }

  // Residual \div with parentheses in equation lines (outside careful match)
  if (ts) {
    out = out.replace(
      new RegExp(`(\\([^()]+\\)|${NUM})\\s*\\\\div\\s*(${NUM})`, "g"),
      (_, a, b) => {
        conversions += 1;
        return `\\\\frac{${a}}{${b}}`;
      },
    );
  }

  if (out !== original) fs.writeFileSync(path, out);
  // Safety: difficulty levels must stay digit/digit
  const badDiff = out.match(/difficulty_level:\s*[`"']\\+frac/g);
  if (badDiff) {
    throw new Error(`Corrupted difficulty_level in ${path}: ${badDiff[0]}`);
  }
  return { path, conversions, changed: out !== original };
}

for (const f of FILES) console.log(transformFile(f));
