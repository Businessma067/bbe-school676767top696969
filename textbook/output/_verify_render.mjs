// Faithful reimplementation of src/components/FlashcardMath.tsx's parsing logic,
// run against every string in math-ch1-logic.ts, with real KaTeX rendering to
// catch genuine LaTeX syntax errors (not python heuristics).
import katex from "katex";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..", "..");

function indexOfUnescapedDollar(text, from = 0) {
  for (let i = from; i < text.length; i++) {
    if (text[i] !== "$") continue;
    let bs = 0;
    for (let j = i - 1; j >= 0 && text[j] === "\\"; j--) bs++;
    if (bs % 2 === 0) return i;
  }
  return -1;
}

function hasProseWords(s) {
  return /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(s);
}

const CURRENCY_RE =
  /\$\d+(?:,\d{3})*(?:\.\d+)?(?:\/[A-Za-z%]+)?(?!\.\d)(?!,\d)(?![0-9A-Za-z+\-*=<>≠≤≥(\\{^_$])/y;

function looksLikeMathInner(inner) {
  const t = inner.trim();
  if (!t) return false;
  if (/[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(t)) return false;
  if (
    /(?<!\\)\b(?:and|or|the|for|with|from|that|which|this|into|onto|than|then|when|where|while|also|but|not|amount|invested|returned|matching|statement|condition|satisfied|exists)\b/i.test(
      t,
    )
  ) {
    return false;
  }
  if (t.includes("|")) return false;
  if (
    !/[=<>≠≤≥]/.test(t) &&
    /\b(?:Shipment|Invoice|Account|Week|Batch|Season|Client|Fund|Route|Day|Point|Job|Branch|cost|total|mixed|price|rate|fee|balance|units?|kg|litres?|miles?)\b/i.test(
      t,
    )
  ) {
    return false;
  }
  if (/[A-Za-z]{4,}/.test(t) && !/[=<>≠≤≥]/.test(t) && !/\\[a-zA-Z]+/.test(t)) {
    return false;
  }
  if (/[=<>≠≤≥+×·\-/^\\()_]/.test(t) && /[A-Za-z0-9]/.test(t)) return true;
  if (/^[+\-]?\d+(?:\.\d+)?$/.test(t)) return true;
  if (
    t.length <= 48 &&
    /[a-zA-Z]/.test(t) &&
    /\d/.test(t) &&
    /^[+\-\d.a-zA-Z\s×·*^/()]+$/.test(t)
  ) {
    return true;
  }
  return false;
}

function splitMath(input) {
  const text = input
    .replace(/\\\(/g, "$")
    .replace(/\\\)/g, "$")
    .replace(/\\\[/g, "$$")
    .replace(/\\\]/g, "$$");

  const parts = [];
  let i = 0;
  let buf = "";

  const flush = () => {
    if (buf) {
      parts.push({ type: "text", value: buf });
      buf = "";
    }
  };

  while (i < text.length) {
    if (text.startsWith("$$", i)) {
      const end = text.indexOf("$$", i + 2);
      if (end !== -1) {
        flush();
        parts.push({ type: "display", value: text.slice(i + 2, end).trim() });
        i = end + 2;
        continue;
      }
    }

    if (text[i] === "\\" && text[i + 1] === "$") {
      buf += "\\$";
      i += 2;
      continue;
    }

    if (text[i] === "$") {
      CURRENCY_RE.lastIndex = i;
      const cur = CURRENCY_RE.exec(text);
      if (cur && cur.index === i) {
        const afterMath = indexOfUnescapedDollar(text, i + cur[0].length);
        const between = afterMath === -1 ? "" : text.slice(i + 1, afterMath);
        if (!(afterMath !== -1 && looksLikeMathInner(between))) {
          buf += cur[0];
          i += cur[0].length;
          continue;
        }
      }

      const end = indexOfUnescapedDollar(text, i + 1);
      if (end !== -1) {
        const inner = text.slice(i + 1, end);
        if (looksLikeMathInner(inner)) {
          flush();
          parts.push({ type: "inline", value: inner.trim() });
          i = end + 1;
          continue;
        }
      }
    }

    buf += text[i];
    i += 1;
  }
  flush();
  if (parts.length === 0) parts.push({ type: "text", value: text });
  return parts;
}

function sanitizeMathSource(src) {
  const raw = src.trim();
  if (!raw) return [];
  if (!hasProseWords(raw)) {
    return [{ kind: "math", value: raw }];
  }
  const noted = raw.match(/^(.+?=.+?)\s*(\([\s\S]*\))\s*$/);
  if (noted) {
    const eq = noted[1].trim();
    const note = noted[2].trim();
    if (!hasProseWords(eq)) {
      return [
        { kind: "math", value: eq },
        { kind: "text", value: ` ${note}` },
      ];
    }
  }
  const leadEq = raw.match(/^([A-Za-z0-9.\s+\-*/^=()]+?=\s*[+\-]?\d+(?:\.\d+)?)(?=\s|\)|$)/);
  if (leadEq && !hasProseWords(leadEq[1])) {
    const rest = raw.slice(leadEq[1].length).trim();
    return rest
      ? [
          { kind: "math", value: leadEq[1].trim() },
          { kind: "text", value: ` ${rest}` },
        ]
      : [{ kind: "math", value: leadEq[1].trim() }];
  }
  return [{ kind: "text", value: raw }];
}

const issues = [];
let mathChunks = 0;
let renderErrors = 0;
let braceDrops = 0;

let leakedLatex = 0;

function checkText(id, field, text) {
  if (typeof text !== "string" || !text) return;
  const parts = splitMath(text);
  for (const part of parts) {
    if (part.type === "text") {
      const m = part.value.match(/\\[a-zA-Z]+/g);
      if (m) {
        leakedLatex++;
        issues.push(`${id} ${field}: RAW LATEX LEAKED INTO TEXT ${JSON.stringify(m)} in ${JSON.stringify(part.value)}`);
      }
      continue;
    }
    const chunks = sanitizeMathSource(part.value);
    for (const chunk of chunks) {
      if (chunk.kind !== "math") continue;
      mathChunks++;
      try {
        katex.renderToString(chunk.value, { throwOnError: true, strict: "ignore" });
      } catch (e) {
        renderErrors++;
        issues.push(`${id} ${field}: KATEX ERROR on ${JSON.stringify(chunk.value)} -> ${e.message}`);
        continue;
      }
      // Detect braces that will be silently swallowed by KaTeX grouping
      // (i.e. braces not part of a recognized \cmd{...} or ^{...}/_{...}).
      const withoutCmdGroups = chunk.value
        .replace(/(?:\\[a-zA-Z]+|\^|_)\{[^{}]*\}/g, "")
        .replace(/\\[{}]/g, "");
      if (/[{}]/.test(withoutCmdGroups)) {
        braceDrops++;
        issues.push(`${id} ${field}: BRACE WILL BE DROPPED in ${JSON.stringify(chunk.value)}`);
      }
    }
  }
}

const tsPath = path.join(root, "src", "data", "math-ch1-logic.ts");
const src = fs.readFileSync(tsPath, "utf8");
// crude extraction of the MATH_CH1_LOGIC array as JSON-ish by re-using the JSON strings
const idRe = /id:\s*"([^"]+)"/g;
// Simpler: require the module via a transpile-free trick is hard for TS; instead
// parse task objects using a regex-based block splitter on `  {\n    id: "..."`.
const blocks = src.split(/\n  \{\n(?=    id: )/).slice(1);
for (const block of blocks) {
  const idM = block.match(/^ {4}id: "([^"]+)"/);
  const id = idM ? idM[1] : "?";
  const fieldNames = ["context", "solution_overview"];
  for (const f of fieldNames) {
    const re = new RegExp(`${f}: (".*?")(?:,\\n)`, "s");
    // The strings are JSON-escaped double-quoted; find matching by scanning quotes properly.
  }
}

// The above per-field regex is unreliable for multi-line JSON strings with escaped quotes.
// Instead, dynamically transpile via a minimal TS->JS stub: replace the type import and
// `as const`/type annotations, then eval as an ES module through a data: import.
let jsSrc = src
  .replace(/import type \{[^}]*\} from "[^"]*";\n?/g, "")
  .replace(/: MathTask\[\]/g, "")
  .replace(/ as const/g, "");
const tmpPath = path.join(__dirname, "_tmp_ch1_logic.mjs");
fs.writeFileSync(tmpPath, jsSrc, "utf8");
const mod = await import("file://" + tmpPath.replace(/\\/g, "/") + "?t=" + Date.now());
fs.unlinkSync(tmpPath);

const tasks = mod.MATH_CH1_LOGIC;
console.log("loaded tasks:", tasks.length);

for (const t of tasks) {
  checkText(t.id, "context", t.context);
  t.statements.forEach((s, i) => checkText(t.id, `stmt${i}`, s));
  t.tactical_explanations.forEach((s, i) => checkText(t.id, `expl${i}`, s));
  checkText(t.id, "overview", t.solution_overview);
}

console.log("math chunks checked:", mathChunks);
console.log("katex render errors:", renderErrors);
console.log("brace-drop issues:", braceDrops);
console.log("leaked-latex issues:", leakedLatex);
fs.writeFileSync(
  path.join(__dirname, "_verify_render_out.txt"),
  issues.join("\n") || "CLEAN",
  "utf8",
);
