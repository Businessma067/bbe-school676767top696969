import katex from "katex";
import "katex/dist/katex.min.css";
import { memo, useMemo } from "react";

/** Index of next `$` that is not escaped as `\$` (odd number of preceding `\`). */
export function indexOfUnescapedDollar(text: string, from = 0): number {
  for (let i = from; i < text.length; i++) {
    if (text[i] !== "$") continue;
    let bs = 0;
    for (let j = i - 1; j >= 0 && text[j] === "\\"; j--) bs++;
    if (bs % 2 === 0) return i;
  }
  return -1;
}

/** Prose `\$1,000` → `$1,000` for display (KaTeX still receives raw `\$` inside math). */
function unescapeProseDollars(s: string): string {
  return s.replace(/\\\$/g, "$");
}

const katexHtmlCache = new Map<string, string>();
const KATEX_CACHE_LIMIT = 800;

function renderKatexCached(source: string, displayMode: boolean): string {
  const key = `${displayMode ? "d" : "i"}\0${source}`;
  const cached = katexHtmlCache.get(key);
  if (cached !== undefined) return cached;
  const html = katex.renderToString(source, {
    throwOnError: false,
    displayMode,
    strict: "ignore",
  });
  if (katexHtmlCache.size >= KATEX_CACHE_LIMIT) {
    const oldest = katexHtmlCache.keys().next().value;
    if (oldest !== undefined) katexHtmlCache.delete(oldest);
  }
  katexHtmlCache.set(key, html);
  return html;
}

/**
 * Render flashcard text with inline `$...$` / display `$$...$$` KaTeX.
 * Memoized + HTML cache so True/False clicks don't re-parse math.
 */
export const FlashcardMath = memo(function FlashcardMath({
  text,
  className,
  displayPrefer = false,
}: {
  text: string;
  className?: string;
  displayPrefer?: boolean;
}) {
  const parts = useMemo(() => splitMath(text), [text]);
  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.type === "text") {
          return <span key={i}>{unescapeProseDollars(part.value)}</span>;
        }
        return <MathChunk key={i} part={part} displayPrefer={displayPrefer} />;
      })}
    </span>
  );
});

const MathChunk = memo(function MathChunk({
  part,
  displayPrefer,
}: {
  part: { type: "inline" | "display"; value: string };
  displayPrefer: boolean;
}) {
  const displayMode = part.type === "display" || (displayPrefer && part.type === "inline");
  const chunks = useMemo(() => sanitizeMathSource(part.value), [part.value]);

  return (
    <>
      {chunks.map((chunk, j) => {
        if (chunk.kind === "text") {
          return (
            <span key={j} className="mx-0.5">
              {unescapeProseDollars(chunk.value)}
            </span>
          );
        }
        try {
          const html = renderKatexCached(chunk.value, displayMode);
          return (
            <span
              key={j}
              className={
                displayMode
                  ? "flashcard-math-display my-0 block h-auto w-full overflow-x-auto overflow-y-hidden py-2 text-center [scrollbar-gutter:auto] [&_.katex-display]:my-0 [&_.katex-display]:h-auto [&_.katex-display]:overflow-visible [&_.katex-display]:py-0.5"
                  : "mx-0.5 inline-block align-baseline"
              }
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <span key={j}>{chunk.value}</span>;
        }
      })}
    </>
  );
});

/**
 * KaTeX collapses spaces and italicizes letters. Plain English left inside $...$
 * therefore renders as jammed gibberish ("250kmgapclosed…"). Keep only clean
 * math in KaTeX; force prose notes out as normal text.
 */
function sanitizeMathSource(src: string): { kind: "math" | "text"; value: string }[] {
  const raw = src.trim();
  if (!raw) return [];

  if (!hasProseWords(raw)) {
    return [{ kind: "math", value: raw }];
  }

  // "x + y = 125 (250 km gap closed in 2 hrs: 2(x+y) = 250)"
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

  // Peel chain with trailing junk, or mixed junk — prefer leading clean equation.
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

  // Last resort: do not KaTeX prose — preserves spaces.
  return [{ kind: "text", value: raw }];
}

function hasProseWords(s: string): boolean {
  // Ignore LaTeX command names and `\text{…}` labels — those are valid math.
  return /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(stripLatexForProseCheck(s));
}

type Part =
  | { type: "text"; value: string }
  | { type: "inline"; value: string }
  | { type: "display"; value: string };

/** `$12,000` or `$12\,000` currency / plain amounts (thin space = thousands). */
const CURRENCY_RE =
  /\$\d+(?:(?:\\,|,)\d{3})*(?:\.\d+)?(?:\/[A-Za-z%]+)?(?!\.\d)(?!,\d)(?!\\,\d)(?![0-9A-Za-z+\-*=<>≠≤≥(\\{^_$])/y;

/**
 * Strip LaTeX so prose heuristics do not fire on command names (`\mid` → "mid")
 * or on intentional `\text{…}` labels inside real math.
 */
function stripLatexForProseCheck(t: string): string {
  let s = t;
  // Peel simple one-level text macros first (their English is intentional math labels).
  for (let n = 0; n < 4; n++) {
    const next = s.replace(
      /\\(?:text|mathrm|operatorname|textit|textbf|mbox|mathsf|mathbf)\s*\{[^{}]*\}/g,
      " ",
    );
    if (next === s) break;
    s = next;
  }
  s = s.replace(/\\[a-zA-Z]+/g, " ");
  s = s.replace(/\\[,;:!]/g, " ");
  return s;
}

/**
 * Decide whether `$…$` contents are real KaTeX vs accidental pairing of two
 * currency signs across prose: `$2,943.20. Shipment 2… cost $4,555.00`.
 */
function looksLikeMathInner(inner: string): boolean {
  const t = inner.trim();
  if (!t) return false;

  const forProse = stripLatexForProseCheck(t);
  const hasLatexCmd = /\\[a-zA-Z]+/.test(t);

  // Two consecutive English words in non-LaTeX residue → narrative prose
  // (must run on stripped text so `\mid OOC` is not read as "mid OOC").
  if (/[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(forProse)) return false;

  // Real LaTeX (`\mid`, `\frac`, `\le`, `\text`, …) → math, even when a short
  // connective like "or"/"and" appears: `$(x \le 1 or x \ge 3)$`.
  if (hasLatexCmd) return true;

  // Thin-space-only chunks like `12\,000` (no letter commands) are math numbers.
  if (/^\d{1,3}(?:\\,\d{3})+(?:\.\d+)?$/.test(t)) return true;

  // Glue words mean currency `$8,000 < 0 and $a_1$` must NOT become one math span.
  if (
    /\b(?:and|or|the|for|with|from|that|which|this|into|onto|than|then|when|where|while|also|but|not|is|are|was|be|if|amount|invested|returned|matching|statement|condition|satisfied|exists)\b/i.test(
      forProse,
    )
  ) {
    return false;
  }

  // Answer lines: Notebook = $3.50 | Pen = $1.80. Absolute values write `|k|` unspaced.
  if (/\s\|\s/.test(t)) return false;

  // Stem-style words with no equation mark → currency mid-sentence
  if (
    !/[=<>≠≤≥]/.test(t) &&
    /\b(?:Shipment|Invoice|Account|Week|Batch|Season|Client|Fund|Route|Day|Point|Job|Branch|cost|total|mixed|price|rate|fee|balance|units?|kg|litres?|miles?)\b/i.test(
      forProse,
    )
  ) {
    return false;
  }

  // Multi-letter symbol tags: $PDV$, $FV$, $np$, $AB$. Currency always carries digits,
  // so a bare letter token can only come from real math.
  if (/^[A-Za-z]{2,5}$/.test(t)) return true;

  // Any 4+ letter English token without eq/compare is prose
  if (/[A-Za-z]{4,}/.test(forProse) && !/[=<>≠≤≥]/.test(t)) {
    return false;
  }

  // Bare sign-chart / comparison glyphs: `$+$`, `$-$`, `$<$`, `$>$`, `$=$`.
  // Without this, Ch6 interval-method tables show literal `$+$` / `$-$`.
  if (/^[+\-<>≠≤≥=×·]+$/.test(t)) return true;

  // Equations / comparisons / algebra (escaped currency `\$` is fine inside).
  // Unspaced pipes are cardinality / absolute value (`|A|`); spaced ones were
  // rejected above as answer lines. A colon between numbers is a ratio (`3:2`).
  if (/[=<>≠≤≥+×·\-/^\\()_|:]/.test(t) && /[A-Za-z0-9]/.test(t)) return true;
  // Number lists / short rosters: $1,2,3,4,5$ or $5,6,7$ (not currency)
  if (/^[+\-]?\d+(?:\.\d+)?(?:\s*,\s*[+\-]?\d+(?:\.\d+)?)+$/.test(t)) return true;
  // Plain set braces without LaTeX commands: ${1,2,3}$ or ${a,b}$
  if (/^\{[^{}]+\}$/.test(t) && /[A-Za-z0-9]/.test(t)) return true;
  // Element rosters: $w,x,y,z$ or $m,n$
  if (/^[A-Za-z](?:\s*,\s*[A-Za-z])+$/.test(t)) return true;
  // Intervals: $[5,10]$, $(0,1]$
  if (/^[[(]\s*-?\d+(?:\.\d+)?\s*,\s*-?\d+(?:\.\d+)?\s*[\])]$/.test(t)) return true;
  // Bare answers like $360$
  if (/^[+\-]?\d+(?:\.\d+)?$/.test(t)) return true;
  // Bare math identifiers: $p$, $n$, $k$, $X$, $p_A$, $\lambda$, $A'$, $R_A'$
  // Primes must be allowed: otherwise `$A'$` is treated as prose and the
  // dollar signs leak into the rendered text.
  if (/^(?:\\[A-Za-z]+|[A-Za-z])(?:_[A-Za-z0-9]+)?(?:')*$/.test(t)) return true;
  // Short algebraic chunks (3x+2y, 160y)
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

/**
 * Split prose / currency / KaTeX.
 * Currency amounts like `$2,943.20` stay text; real `$x+y=1$` stays math.
 * Never let two currency signs swallow the prose between them as KaTeX.
 */
/**
 * Normalize broken authoring so users never see raw KaTeX control sequences:
 * - `$12\,000 subject…` (thin-space thousands that never close before English)
 *   → `$12,000 subject…`
 * - `\$P(A \mid B)\$` (escaped dollars around real math) → `$P(A \mid B)$`
 * Do not touch legitimate display math `$$40\,000 e^{…}$$`.
 */
function normalizeBrokenMathMarkup(input: string): string {
  let s = input;

  // `\$…\$` used as math delimiters (common in some generated explanations).
  s = s.replace(/\\\$([^$]*?)\\\$/g, (_m, inner: string) => {
    const t = inner.trim();
    if (!t) return _m;
    if (/\\[a-zA-Z]/.test(t) || /[=<>≠≤≥^_{}+*/\\]/.test(t) || /[A-Za-z]\s*\(/.test(t)) {
      return `$${inner}$`;
    }
    return _m;
  });

  // `$12\,000 subject` → `$12,000 subject` (not `$$40\,000 e`)
  s = s.replace(
    /(?<!\$)\$(\d{1,3}(?:\\,\d{3})+)(?=\s+[A-Za-z])/g,
    (_, nums: string) => `$${nums.replace(/\\,/g, ",")}`,
  );

  return s;
}

function splitMath(input: string): Part[] {
  const text = normalizeBrokenMathMarkup(
    input
      .replace(/\\\(/g, "$")
      .replace(/\\\)/g, "$")
      .replace(/\\\[/g, "$$")
      .replace(/\\\]/g, "$$"),
  );

  const parts: Part[] = [];
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

    // Literal `\$` (escaped currency) — never treat as KaTeX delimiter
    if (text[i] === "\\" && text[i + 1] === "$") {
      buf += "\\$";
      i += 2;
      continue;
    }

    if (text[i] === "$") {
      // Prefer currency at $digits… unless this `$` opens a true math span.
      CURRENCY_RE.lastIndex = i;
      const cur = CURRENCY_RE.exec(text);
      if (cur && cur.index === i) {
        const afterMath = indexOfUnescapedDollar(text, i + cur[0].length);
        const between = afterMath === -1 ? "" : text.slice(i + 1, afterMath);
        if (!(afterMath !== -1 && looksLikeMathInner(between))) {
          // Show thin-space currency as a normal comma amount in prose.
          buf += cur[0].replace(/\\,/g, ",");
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

/** Exported for stem audits / unit checks. */
export function __splitMathForAudit(input: string): Part[] {
  return splitMath(input);
}
