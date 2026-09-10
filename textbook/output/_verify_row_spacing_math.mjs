/**
 * Regression: gather-star / aligned row breaks `\\[0.85em]` must survive delimiter
 * conversion and must not become katex-error `$0.85em]` (MATH 11.07 overview).
 */
import katex from "katex";
import { createRequire } from "module";
import { pathToFileURL } from "url";

const require = createRequire(import.meta.url);

// Load TS via vite-node-less path: duplicate the critical helpers inline to
// mirror FlashcardMath (keep in sync with convertTexDelimiters).
function convertTexDelimiters(input) {
  return input
    .replace(/(?<!\\)\\\(([\s\S]+?)(?<!\\)\\\)/g, (_m, inner) => `$${inner}$`)
    .replace(/(?<!\\)\\\[([\s\S]+?)(?<!\\)\\\]/g, (_m, inner) => `$$${inner}$$`);
}

function looksLikeCorruptedRowBreakInner(inner) {
  return /^\d*\.?\d+(?:em|ex|pt|mu|bp|dd|cm|mm|in)\]/.test(inner.trim());
}

function normalizeBrokenMathMarkup(input) {
  const parts = input.split(/(\$\$[\s\S]*?\$\$)/g);
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 1) continue;
    parts[i] = parts[i].replace(/\\\$([^$]*?)\\\$/g, (_m, inner) => {
      const t = inner.trim();
      if (!t || looksLikeCorruptedRowBreakInner(t)) return _m;
      if (/\\[a-zA-Z]/.test(t) || /[=<>≠≤≥^_{}+*/\\]/.test(t) || /[A-Za-z]\s*\(/.test(t)) {
        return `$${inner}$`;
      }
      return _m;
    });
  }
  return parts.join("");
}

function formatGatherBlock(bodies) {
  return `\\begin{gather*}\n${bodies.map((b) => b.trim()).filter(Boolean).join(" \\\\[0.85em]\n")}\n\\end{gather*}`;
}

function assert(cond, msg) {
  if (!cond) {
    console.error("FAIL:", msg);
    process.exitCode = 1;
  } else {
    console.log("ok:", msg);
  }
}

const bodies = ["r = 15\\%", "r = 0.15", "n = 2,", "n = 4,", "n = 12"];
const input = `$$\n${formatGatherBlock(bodies)}\n$$`;

const converted = convertTexDelimiters(input);
assert(converted === input, "convertTexDelimiters leaves \\\\[[0.85em] intact");
assert(!converted.includes("$0.85em]"), "no bare $0.85em] after convert");

const normalized = normalizeBrokenMathMarkup(converted);
assert(!/\$0\.85em\]/.test(normalized.replace(/\\\$0\.85em\]/g, "")), "normalize does not invent bare $0.85em]");

const body = normalized.slice(normalized.indexOf("$$") + 2, normalized.lastIndexOf("$$")).trim();
const html = katex.renderToString(body, { throwOnError: false, displayMode: true, strict: "ignore" });
assert(!html.includes("katex-error"), "gather* with row breaks renders without katex-error");

// Cross-match hardening: \\\\[[0.85em] … \\] must not be eaten
const cross = "a \\\\[0.85em] b \\] c";
const crossOut = convertTexDelimiters(cross);
assert(crossOut === cross, "lookbehind blocks \\\\[[0.85em]…\\\\] cross-match");

// Legitimate \\[ … \\] still converts
assert(convertTexDelimiters("\\[x+1\\]") === "$$x+1$$", "\\[x+1\\] → $$x+1$$");
assert(convertTexDelimiters("\\(a\\)") === "$a$", "\\(a\\) → $a$");

// Simulated legacy corruption residue must not unwrap inside $$
const legacy = `$$\\begin{gather*}r = 15\\% \\$0.85em]\nr = 0.15 \\$0.85em]\\end{gather*}$$`;
const legacyNorm = normalizeBrokenMathMarkup(legacy);
assert(legacyNorm.includes("\\$0.85em]"), "\\$0.85em] inside $$ stays escaped");
assert(!legacyNorm.match(/[^\\]\$0\.85em\]/), "no unescaped $0.85em] inside $$ after normalize");

// Prose \\$…\\$ delimiters still unwrap
assert(
  normalizeBrokenMathMarkup("see \\$P(A \\\\mid B)\\$ here") === "see $P(A \\\\mid B)$ here",
  "prose \\$math\\$ still unwraps",
);

if (process.exitCode) {
  console.error("\n_row_spacing_math regressions failed");
} else {
  console.log("\nall row-spacing math checks passed");
}
