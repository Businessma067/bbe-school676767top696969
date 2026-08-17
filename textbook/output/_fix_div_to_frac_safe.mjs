/**
 * Surgical in-place conversion of division to \frac inside math spans.
 * Edits file text directly (handles TS double-escaped backslashes vs JSON).
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

function convertMathBody(body, ts) {
  const frac = ts ? "\\\\frac" : "\\frac";
  const div = ts ? "\\\\div" : "\\div";
  const ln = ts ? "\\\\ln" : "\\ln";
  let text = body;
  let n = 0;

  // Protect existing frac/text/binom (escaped accordingly)
  const bags = [];
  const stash = (full) => {
    const key = `«${bags.length}»`;
    bags.push(full);
    return key;
  };
  const protectRe = ts
    ? /\\{1,2}(?:d|t)?frac\{[^{}]*\}\{[^{}]*\}|\\{1,2}binom\{[^{}]*\}\{[^{}]*\}|\\{1,2}(?:text|mathrm|operatorname)\{[^{}]*\}|\\{1,2}sqrt(?:\[[^\]]*\])?\{[^{}]*\}/g
    : /\\(?:d|t)?frac\{[^{}]*\}\{[^{}]*\}|\\binom\{[^{}]*\}\{[^{}]*\}|\\(?:text|mathrm|operatorname)\{[^{}]*\}|\\sqrt(?:\[[^\]]*\])?\{[^{}]*\}/g;

  for (let pass = 0; pass < 10; pass += 1) {
    const next = text.replace(protectRe, stash);
    if (next === text) break;
    text = next;
  }

  const bump = (re, replacer) => {
    text = text.replace(re, (...args) => {
      n += 1;
      return replacer(...args);
    });
  };

  // Exponents ^{a/b}
  bump(new RegExp(`\\^\\{(${NUM})/(${NUM})\\}`, "g"), (_, a, b) => `^{${frac}{${a}}{${b}}}`);
  bump(new RegExp(`\\^(${NUM})/(${NUM})(?![0-9.])`, "g"), (_, a, b) => `^{${frac}{${a}}{${b}}}`);
  bump(
    new RegExp(`\\^\\{(${NUM})/(${NUM})-(${NUM})/(${NUM})\\}`, "g"),
    (_, a, b, c, d) => `^{${frac}{${a}}{${b}}-${frac}{${c}}{${d}}}`,
  );

  // a \div b  or a ÷ b
  for (let pass = 0; pass < 6; pass += 1) {
    const before = text;
    bump(
      new RegExp(
        `(«\\d+»|\\([^()]+\\)|${NUM}|[A-Za-z](?:_[A-Za-z0-9]+)?)\\s*(?:${div}|÷)\\s*(«\\d+»|\\([^()]+\\)|${NUM}|[A-Za-z](?:_[A-Za-z0-9]+)?)`,
        "g",
      ),
      (_, a, b) => `${frac}{${a}}{${b}}`,
    );
    // undo double-count on loop: n counts every replace; acceptable
    if (text === before) break;
    // re-protect new fracs
    text = text.replace(protectRe, stash);
  }

  // numeric / numeric
  for (let pass = 0; pass < 8; pass += 1) {
    const before = text;
    bump(
      new RegExp(`(«\\d+»|\\([^()]+\\)|${NUM})\\s*/\\s*(«\\d+»|\\([^()]+\\)|${NUM})`, "g"),
      (_, a, b) => `${frac}{${a}}{${b}}`,
    );
    if (text === before) break;
    text = text.replace(protectRe, stash);
  }

  // number / symbol: 100/m, 9/h
  bump(
    new RegExp(`(${NUM})\\s*/\\s*([A-Za-z](?:_[A-Za-z0-9]+)?)`, "g"),
    (_, a, b) => `${frac}{${a}}{${b}}`,
  );
  text = text.replace(protectRe, stash);

  // F(a)/G(b) function forms: C(64)/C(32), S(h)/V(h)
  bump(
    /([A-Za-z]\\?\([^()]*\))\s*\/\s*([A-Za-z]\\?\([^()]*\))/g,
    (_, a, b) => `${frac}{${a}}{${b}}`,
  );
  text = text.replace(protectRe, stash);

  // y^{«k»}/27 → \frac{y^{«k»}}{27}  (note braces around placeholder)
  bump(
    new RegExp(`([A-Za-z](?:\\([^()]*\\))?)\\^\\{(«\\d+»)\\}\\s*/\\s*(${NUM})`, "g"),
    (_, base, exp, den) => `${frac}{${base}^{${exp}}}{${den}}`,
  );
  // h^{3}/3
  bump(
    new RegExp(`([A-Za-z])\\^\\{(${NUM})\\}\\s*/\\s*(${NUM})`, "g"),
    (_, base, exp, den) => `${frac}{${base}^{${exp}}}{${den}}`,
  );
  // q^{0.5}/2
  bump(
    new RegExp(`([A-Za-z])\\^\\{(${NUM})\\}\\s*/\\s*(${NUM})`, "g"),
    (_, base, exp, den) => `${frac}{${base}^{${exp}}}{${den}}`,
  );
  // «k»/27 remaining
  bump(
    new RegExp(`(«\\d+»)\\s*/\\s*(${NUM})`, "g"),
    (_, a, b) => `${frac}{${a}}{${b}}`,
  );

  // simple symbol/symbol or symbol/number (not preceded by backslash letter)
  bump(
    new RegExp(
      `(?<![A-Za-z\\\\])([A-Za-z](?:_[A-Za-z0-9]+)?)\\s*/\\s*(«\\d+»|[A-Za-z](?:_[A-Za-z0-9]+)?|${NUM})`,
      "g",
    ),
    (_, a, b) => `${frac}{${a}}{${b}}`,
  );

  // Direct residual: M^{\\frac{2}{3}}/2 after restore-like forms still in body
  if (ts) {
    bump(
      new RegExp(
        `([A-Za-z])\\^\\{\\\\frac\\{([^}]+)\\}\\{([^}]+)\\}\\}\\s*/\\s*(${NUM})`,
        "g",
      ),
      (_, base, a, b, den) => `${frac}{${base}^{\\\\frac{${a}}{${b}}}}{${den}}`,
    );
  } else {
    bump(
      new RegExp(
        `([A-Za-z])\\^\\{\\frac\\{([^}]+)\\}\\{([^}]+)\\}\\}\\s*/\\s*(${NUM})`,
        "g",
      ),
      (_, base, a, b, den) => `${frac}{${base}^{\\frac{${a}}{${b}}}}{${den}}`,
    );
  }

  // \ln a / \ln b
  bump(
    new RegExp(
      `${ln}\\s*(${NUM})\\s*/\\s*${ln}\\s*(${NUM})`,
      "g",
    ),
    (_, a, b) => `${frac}{${ln} ${a}}{${ln} ${b}}`,
  );
  bump(
    new RegExp(`${ln}\\(([^)]+)\\)\\s*/\\s*(«\\d+»|[A-Za-z\\\\]+)`, "g"),
    (_, a, b) => `${frac}{${ln}(${a})}{${b}}`,
  );

  // Restore bags
  for (let i = bags.length - 1; i >= 0; i -= 1) {
    text = text.split(`«${i}»`).join(bags[i]);
  }
  return { text, n };
}

function transformFile({ path, ts }) {
  const original = fs.readFileSync(path, "utf8");
  let conversions = 0;

  const replaceSpan = (full, body, display) => {
    // Refuse spans that clearly escaped the math and ate source structure.
    if (
      /difficulty_level:|case_id:|tactical_explanations:|solution_overview:|answer_key:/.test(
        body,
      )
    ) {
      return display ? `$$${body}$$` : `$${body}$`;
    }
    if (!display && body.length > 800) {
      return `$${body}$`;
    }
    // Pure difficulty labels if they ever appear alone
    if (/^[1-5]\/5$/.test(body.trim())) {
      return display ? `$$${body}$$` : `$${body}$`;
    }
    const { text, n } = convertMathBody(body, ts);
    conversions += n;
    return display ? `$$${text}$$` : `$${text}$`;
  };

  // Walk manually to skip currency $123
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
      out += replaceSpan(null, s.slice(i + 2, end), true);
      i = end + 2;
      continue;
    }
    if (s[i] === "$") {
      const after = s[i + 1];
      const end = s.indexOf("$", i + 1);
      if (after && /\d/.test(after)) {
        // $123.45... — currency if no closer, or closer body is pure money.
        if (end < 0) {
          out += s[i];
          i += 1;
          while (i < s.length && /[\d,]/.test(s[i])) {
            out += s[i];
            i += 1;
          }
          if (s[i] === "." && /\d/.test(s[i + 1] || "")) {
            out += s[i];
            i += 1;
            while (i < s.length && /\d/.test(s[i])) {
              out += s[i];
              i += 1;
            }
          }
          continue;
        }
        const body = s.slice(i + 1, end);
        if (/^[\d,]+(?:\.\d+)?$/.test(body)) {
          // $12.00$ money-shaped pair — keep as-is
          out += s.slice(i, end + 1);
          i = end + 1;
          continue;
        }
        // Otherwise it's math that happens to start with a number: $2419.20 / 1.08$
        out += replaceSpan(null, body, false);
        i = end + 1;
        continue;
      }
      if (end < 0) {
        out += s.slice(i);
        break;
      }
      out += replaceSpan(null, s.slice(i + 1, end), false);
      i = end + 1;
      continue;
    }
    out += s[i];
    i += 1;
  }

  // Prose ÷ outside math
  out = out.replace(
    /(\d+(?:\.\d+)?)\s*([A-Za-z]+)?\s*÷\s*(\d+(?:\.\d+)?)/g,
    (_, num, unit, den) => {
      conversions += 1;
      const f = ts ? `$\\\\frac{${num}}{${den}}$` : `$\\frac{${num}}{${den}}$`;
      return unit ? `${f} ${unit}` : f;
    },
  );
  out = out.replace(/,\s*÷(\d+)/g, (_, n) => {
    conversions += 1;
    return `, divide by $${n}$`;
  });
  out = out.replace(/\b÷\s+(?=[A-Za-z])/g, () => {
    conversions += 1;
    return "divided by ";
  });

  // Catch residual \div in already-written equation lines (TS doubles backslashes).
  if (ts) {
    const before = out;
    out = out.replace(
      new RegExp(`(${NUM})\\s*\\\\\\\\div\\s*(${NUM})`, "g"),
      (_, a, b) => {
        conversions += 1;
        return `\\\\frac{${a}}{${b}}`;
      },
    );
    // Also single-escaped form inside some overviews
    out = out.replace(
      new RegExp(`(${NUM})\\s*\\\\div\\s*(${NUM})`, "g"),
      (_, a, b) => {
        conversions += 1;
        return `\\\\frac{${a}}{${b}}`;
      },
    );
    void before;
  } else {
    out = out.replace(
      new RegExp(`(${NUM})\\s*\\\\div\\s*(${NUM})`, "g"),
      (_, a, b) => {
        conversions += 1;
        return `\\frac{${a}}{${b}}`;
      },
    );
  }

  if (out !== original) fs.writeFileSync(path, out);
  return { path, conversions, changed: out !== original };
}

for (const file of FILES) {
  console.log(transformFile(file));
}
