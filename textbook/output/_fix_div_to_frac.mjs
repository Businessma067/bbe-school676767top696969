/**
 * Safe conversion of division signs to \frac in math chapter banks.
 * Only transforms clear division patterns; skips currency $amounts and \text{}.
 */
import fs from "node:fs";
import katex from "katex";
import { MATH_CH1_LOGIC as ch1 } from "../../src/data/math-ch1-logic.ts";
import { MATH_CH5_LINEAR_EQUATIONS as ch5 } from "../../src/data/math-ch5-linear-equations.ts";
import { MATH_CH8_POWER_FUNCTIONS as ch8 } from "../../src/data/math-ch8-power-functions.ts";
import { MATH_CH11_FINANCIAL as ch11 } from "../../src/data/math-ch11-financial.ts";

const NUM = String.raw`-?\d+(?:\.\d+)?`;

function protectZones(tex) {
  const bags = [];
  const stash = (full) => {
    const key = `«${bags.length}»`;
    bags.push(full);
    return key;
  };
  let out = tex;
  for (let pass = 0; pass < 12; pass += 1) {
    const next = out
      .replace(/\\(?:d|t)?frac\{[^{}]*\}\{[^{}]*\}/g, stash)
      .replace(/\\binom\{[^{}]*\}\{[^{}]*\}/g, stash)
      .replace(/\\(?:text|mathrm|operatorname|mathbf|mathit)\{[^{}]*\}/g, stash)
      .replace(/\\sqrt\[[^\]]*\]\{[^{}]*\}/g, stash)
      .replace(/\\sqrt\{[^{}]*\}/g, stash)
      .replace(/\\begin\{[^}]+\}[\s\S]*?\\end\{[^}]+\}/g, stash);
    if (next === out) break;
    out = next;
  }
  return { text: out, bags };
}

function restore(text, bags) {
  let out = text;
  for (let i = bags.length - 1; i >= 0; i -= 1) {
    out = out.split(`«${i}»`).join(bags[i]);
  }
  return out;
}

function convertTex(tex) {
  if (!tex) return tex;
  if (!/[\/÷]|\\div/.test(tex)) return tex;

  let { text, bags } = protectZones(tex);
  const reprotect = () => {
    ({ text, bags } = protectZones(restore(text, bags)));
  };

  // 1) Exponents ^{a/b} and ^a/b (including decimals like 1/0.6)
  text = text.replace(
    new RegExp(`\\^\\{(${NUM})\\/(${NUM})\\}`, "g"),
    (_, a, b) => `^{\\frac{${a}}{${b}}}`,
  );
  text = text.replace(
    new RegExp(`\\^(${NUM})\\/(${NUM})(?![0-9.])`, "g"),
    (_, a, b) => `^{\\frac{${a}}{${b}}}`,
  );
  text = text.replace(
    new RegExp(`\\^\\{(${NUM})\\/(${NUM})-(${NUM})\\/(${NUM})\\}`, "g"),
    (_, a, b, c, d) => `^{\\frac{${a}}{${b}}-\\frac{${c}}{${d}}}`,
  );
  reprotect();

  // 2) Explicit \div or ÷ between simple operands
  const simpleOperand = String.raw`(?:«\d+»|\([^()]+\)|\{[^{}]+\}|${NUM}|[A-Za-z](?:_[A-Za-z0-9]+)?)`;
  for (let pass = 0; pass < 6; pass += 1) {
    const before = text;
    const divRe = new RegExp(
      `(${simpleOperand})\\s*(?:\\\\div|÷)\\s*(${simpleOperand})`,
      "g",
    );
    text = text.replace(divRe, (_, a, b) => `\\frac{${a}}{${b}}`);
    if (text === before) break;
    reprotect();
  }

  // 3) Numeric slash divisions: 24.00 / 80, 0.072/12, (174+46)/1.10
  for (let pass = 0; pass < 8; pass += 1) {
    const before = text;
    text = text.replace(
      new RegExp(
        `((?:«\\d+»|\\([^()]+\\)|${NUM}))\\s*\\/\\s*((?:«\\d+»|\\([^()]+\\)|${NUM}))`,
        "g",
      ),
      (_, a, b) => `\\frac{${a}}{${b}}`,
    );
    if (text === before) break;
    reprotect();
  }

  // 4) Simple symbol/symbol or symbol/number after protected zones: A/B, q/L, M/2
  //    Only single-letter or simple names — avoid chewing latex commands.
  for (let pass = 0; pass < 6; pass += 1) {
    const before = text;
    text = text.replace(
      /(?<![A-Za-z\\])([A-Za-z](?:_[A-Za-z0-9]+)?)\s*\/\s*((?:«\d+»|[A-Za-z](?:_[A-Za-z0-9]+)?|-?\d+(?:\.\d+)?))/g,
      (_, a, b) => `\\frac{${a}}{${b}}`,
    );
    // protected / number: «0»/2
    text = text.replace(
      /(«\d+»)\s*\/\s*((?:«\d+»|-?\d+(?:\.\d+)?))/g,
      (_, a, b) => `\\frac{${a}}{${b}}`,
    );
    if (text === before) break;
    reprotect();
  }

  // 5) \ln patterns
  text = text.replace(
    /\\ln\(([^)]+)\)\s*\/\s*(\\?[A-Za-z]+|«\d+»)/g,
    (_, a, b) => `\\frac{\\ln(${a})}{${b}}`,
  );
  text = text.replace(
    /\\ln\s+(-?\d+(?:\.\d+)?)\s*\/\s*\\ln\s+(-?\d+(?:\.\d+)?)/g,
    (_, a, b) => `\\frac{\\ln ${a}}{\\ln ${b}}`,
  );
  text = text.replace(
    /\\ln\s+(-?\d+(?:\.\d+)?|«\d+»)\s*\/\s*(\\?[A-Za-z]+|«\d+»)/g,
    (_, a, b) => `\\frac{\\ln ${a}}{${b}}`,
  );

  return restore(text, bags);
}

/** Split text into math / non-math without treating $12,000 as math. */
function mapMathSegments(text, fn) {
  let out = "";
  let i = 0;
  while (i < text.length) {
    if (text[i] === "$" && text[i + 1] === "$") {
      const end = text.indexOf("$$", i + 2);
      if (end < 0) {
        out += text.slice(i);
        break;
      }
      const body = text.slice(i + 2, end);
      out += `$$${fn(body, true)}$$`;
      i = end + 2;
      continue;
    }
    if (text[i] === "$") {
      // Currency: $ then digit (optional) — leave alone until a real math pair.
      if (/\d/.test(text[i + 1] || "")) {
        out += text[i];
        i += 1;
        continue;
      }
      const end = text.indexOf("$", i + 1);
      if (end < 0) {
        out += text.slice(i);
        break;
      }
      // If closing is currency-like weirdness, still treat as math when opener wasn't digit
      const body = text.slice(i + 1, end);
      out += `$${fn(body, false)}$`;
      i = end + 1;
      continue;
    }
    out += text[i];
    i += 1;
  }
  return out;
}

function convertProse(text) {
  let out = text;
  out = out.replace(
    /(\d+(?:\.\d+)?)\s*([A-Za-z]+)?\s*÷\s*(\d+(?:\.\d+)?)/g,
    (_, num, unit, den) => (unit ? `$\\frac{${num}}{${den}}$ ${unit}` : `$\\frac{${num}}{${den}}$`),
  );
  out = out.replace(/,\s*÷(\d+)/g, (_, n) => `, divide by $${n}$`);
  out = out.replace(/\b÷\s+(?=[A-Za-z])/g, "divided by ");
  return out;
}

function convertAll(text) {
  if (typeof text !== "string") return text;
  return convertProse(mapMathSegments(text, (body) => convertTex(body)));
}

function transformTask(task) {
  const next = { ...task };
  for (const key of ["title", "context", "solution_overview"]) {
    if (typeof next[key] === "string") next[key] = convertAll(next[key]);
  }
  if (Array.isArray(next.statements)) next.statements = next.statements.map(convertAll);
  if (Array.isArray(next.tactical_explanations)) {
    next.tactical_explanations = next.tactical_explanations.map(convertAll);
  }
  return next;
}

function escapeTemplate(value) {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function emitTs(path, exportName, tasks) {
  const previous = fs.readFileSync(path, "utf8");
  const importIdx = previous.indexOf("import type");
  const header = importIdx >= 0 ? previous.slice(0, importIdx) : "/**\n */\n\n";
  const subMatch = previous.match(
    /export const MATH_CH\d+_SUBSECTIONS\s*=\s*\[[\s\S]*?\];\s*\n/,
  );

  const body = tasks
    .map((task) => {
      const statements = task.statements
        .map((s) => `      \`${escapeTemplate(s)}\`,`)
        .join("\n");
      const explanations = task.tactical_explanations
        .map((s) => `      \`${escapeTemplate(s)}\`,`)
        .join("\n");
      const subsectionLine =
        task.subsection != null
          ? `    subsection: \`${escapeTemplate(task.subsection)}\`,\n`
          : "";
      return `  {
    id: \`${escapeTemplate(task.id)}\`,
    case_id: \`${escapeTemplate(task.case_id)}\`,
    title: \`${escapeTemplate(task.title)}\`,
${subsectionLine}    context: \`${escapeTemplate(task.context)}\`,
    statements: [
${statements}
    ],
    answer_key: [${task.answer_key.join(", ")}],
    tactical_explanations: [
${explanations}
    ],
    difficulty_level: \`${task.difficulty_level}\`,
    sort_order: ${task.sort_order},
    solution_overview: \`${escapeTemplate(task.solution_overview)}\`,
  }`;
    })
    .join(",\n");

  fs.writeFileSync(
    path,
    `${header.replace(/\s+$/, "\n")}
import type { MathTask } from "@/data/math-chapters";
${subMatch ? "\n" + subMatch[0] : ""}
export const ${exportName}: MathTask[] = [
${body},
];
`,
  );
}

function slashReport(tasks, label) {
  let hits = 0;
  const samples = [];
  const visit = (text) => {
    if (!text) return;
    mapMathSegments(text, (tex) => {
      let stripped = tex;
      for (let p = 0; p < 8; p += 1) {
        stripped = stripped
          .replace(/\\(?:d|t)?frac\{[^{}]*\}\{[^{}]*\}/g, "F")
          .replace(/\\(?:text|mathrm)\{[^{}]*\}/g, "T");
      }
      if (
        /[0-9A-Za-z)}\]]\s*\/\s*[0-9A-Za-z({\\]/.test(stripped) ||
        /\\div|÷/.test(tex)
      ) {
        hits += 1;
        if (samples.length < 8) samples.push(tex.replace(/\s+/g, " ").slice(0, 110));
      }
      return tex;
    });
  };
  for (const t of tasks) {
    visit(t.context);
    visit(t.solution_overview);
    t.statements?.forEach(visit);
    t.tactical_explanations?.forEach(visit);
  }
  console.log(label, "slash_left", hits);
  for (const s of samples) console.log(" ", s);
}

function katexReport(tasks, label) {
  let spans = 0;
  let fails = 0;
  const errors = [];
  const visit = (text) => {
    if (!text) return;
    mapMathSegments(text, (tex, display) => {
      spans += 1;
      try {
        katex.renderToString(tex, {
          throwOnError: true,
          strict: "ignore",
          displayMode: display,
        });
      } catch (err) {
        fails += 1;
        if (errors.length < 6) {
          errors.push(`${String(err.message).slice(0, 90)} :: ${tex.slice(0, 70)}`);
        }
      }
      return tex;
    });
  };
  for (const t of tasks) {
    visit(t.context);
    visit(t.solution_overview);
    t.statements?.forEach(visit);
    t.tactical_explanations?.forEach(visit);
  }
  console.log(label, "katex spans", spans, "fails", fails);
  for (const e of errors) console.log(" ", e);
}

const jobs = [
  ["src/data/math-ch1-logic.ts", "MATH_CH1_LOGIC", ch1],
  ["src/data/math-ch5-linear-equations.ts", "MATH_CH5_LINEAR_EQUATIONS", ch5],
  ["src/data/math-ch8-power-functions.ts", "MATH_CH8_POWER_FUNCTIONS", ch8],
  ["src/data/math-ch11-financial.ts", "MATH_CH11_FINANCIAL", ch11],
];

for (const [path, name, source] of jobs) {
  const tasks = source.map(transformTask);
  emitTs(path, name, tasks);
  slashReport(tasks, name);
  katexReport(tasks, name);
}

const ch13Path = "src/data/math-cases-ch13-binomial.json";
const ch13 = JSON.parse(fs.readFileSync(ch13Path, "utf8"));
ch13.tasks = ch13.tasks.map(transformTask);
fs.writeFileSync(ch13Path, JSON.stringify(ch13, null, 2) + "\n");
slashReport(ch13.tasks, "CH13");
katexReport(ch13.tasks, "CH13");
