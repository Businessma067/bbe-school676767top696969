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
                  ? "flashcard-math-display my-0 block h-auto w-full overflow-x-auto overflow-y-hidden py-1.5 text-center [scrollbar-gutter:auto] [&_.katex]:whitespace-nowrap [&_.katex-display]:my-0 [&_.katex-display]:h-auto [&_.katex-display]:overflow-x-auto [&_.katex-display]:overflow-y-hidden [&_.katex-display]:py-1"
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

  // Repair mangled KaTeX row breaks: `\\[0.85em]` / `\\[4pt]` corrupted into
  // `\$0.85em]` or `$0.85em]` (bare `$` makes whole gather*/aligned fail red).
  s = s.replace(/\\?\$(\d+(?:\.\d+)?(?:em|ex|pt|mu)\])/g, "\\\\");

  // `\$…\$` used as math delimiters (common in some generated explanations).
  // Skip spacing-corruption leftovers and never unwrap across display math.
  s = s.replace(/\\\$([^$]*?)\\\$/g, (_m, inner: string) => {
    const t = inner.trim();
    if (!t) return _m;
    // `\$0.85em] … \$0.75em]` must not become `$0.85em] … $`.
    if (/^\d+(?:\.\d+)?(?:em|ex|pt|mu)\]/.test(t)) return _m;
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

/**
 * Display lines that continue a prior equation (lone `= −2`, `\approx 1.23`, …).
 * Used so KaTeX does not center each fragment on its own airy row.
 */
const RELATION_CONTINUATION_RE =
  /^(?:=|\\approx\b|\\simeq\b|\\sim\b|\\cong\b|\\equiv\b|\\neq\b|\\ne\b|\\le\b|\\leq\b|\\leqslant\b|\\leqq\b|\\ge\b|\\geq\b|\\geqslant\b|\\geqq\b|\\ll\b|\\gg\b|\\propto\b|\\iff\b|\\implies\b|\\Rightarrow\b|\\Leftrightarrow\b|\\rightarrow\b|\\longrightarrow\b|\\to\b|\\mapsto\b|\\leftarrow\b|\\longleftarrow\b|<|>)/;

export function isRelationContinuationBody(body: string): boolean {
  return RELATION_CONTINUATION_RE.test(body.trim());
}

/** Already a multi-line KaTeX stack — do not wrap again. */
function isStackedMathBody(body: string): boolean {
  return /\\begin\{(?:aligned|align\*?|gather\*?|gathered|eqnarray\*?|array)\}/.test(body);
}

/**
 * Short single-step displays (memberships, tiny intermediates). Long formulas
 * keep the airy single-equation layout.
 */
function isCompactDisplayBody(body: string): boolean {
  const t = body.trim();
  if (!t || isStackedMathBody(t) || /\\begin\{/.test(t)) return false;
  // Keep fraction / large-operator steps as separate airy displays (econ
  // ratio stacks, long divisions). Membership checklists stay compact.
  if (/\\(?:d|t)?frac|\\sum|\\int|\\prod/.test(t)) return false;
  return t.replace(/\s+/g, " ").length <= 88;
}

/** Minimum consecutive short displays before stacking into gather*. */
const DENSE_SHORT_DISPLAY_MIN = 3;

/**
 * Turn a chain like
 *   $$\varepsilon=\dfrac{…}{20}$$
 *   $$=-2$$
 * into one left-aligned `aligned` block so KaTeX does not center a lone `= -2`.
 */
/**
 * When a single display block runs `… = 45{,}000` straight into `\frac{…}{6}`,
 * KaTeX prints them on one line. Split onto aligned rows before render.
 */
function normalizeCrampedFractionSteps(body: string): string {
  const t = body.trim();
  if (!t || isStackedMathBody(t)) return body;
  if (!/\\frac/.test(t)) return body;
  const lines = t.split("\n");
  const out: string[] = [];
  let changed = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!;
    const next = lines[i + 1]?.trim() ?? "";
    if (
      /=\s*[\d{,}]+\s*$/.test(line) &&
      next.startsWith("\\frac") &&
      !/\\\\/.test(line)
    ) {
      // Plain `\\` — never `\\[0.65em]` (optional-break brackets are eaten by
      // delimiter normalizers that rewrite `\[` → `$$`).
      out.push(`${line.trimEnd()} \\\\`);
      changed = true;
      continue;
    }
    out.push(line);
  }
  return changed ? out.join("\n") : body;
}

function formatAlignedContinuationChain(bodies: string[]): string {
  const lines: string[] = [];
  for (let k = 0; k < bodies.length; k++) {
    const raw = bodies[k].trim();
    if (!raw) continue;
    if (k === 0) {
      lines.push(toAlignedFirstLine(raw));
    } else if (/^\s*=/.test(raw)) {
      lines.push(`&${raw}`);
    } else {
      lines.push(`& ${raw}`);
    }
  }
  // Plain `\\` row breaks (avoid `\\[…em]`, which corrupts into `$0.85em]`).
  return `\\begin{aligned}\n${lines.join(" \\\\\n")}\n\\end{aligned}`;
}

function formatGatherBlock(bodies: string[]): string {
  // Plain `\\` — `\\[0.85em]` was rewritten to `$0.85em]` and turned whole
  // gather* blocks into red katex-error source across explanations.
  return `\\begin{gather*}\n${bodies.map((b) => b.trim()).filter(Boolean).join(" \\\\\n")}\n\\end{gather*}`;
}

/** Put `&=` on the first top-level equals so the chain lines up. */
function toAlignedFirstLine(s: string): string {
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i]!;
    if (c === "{" || c === "(") depth += 1;
    else if (c === "}" || c === ")") depth = Math.max(0, depth - 1);
    else if (c === "=" && depth === 0) {
      if (i > 0 && s[i - 1] === "\\") continue;
      const before = s.slice(0, i).replace(/\s+$/, "");
      if (
        /\\(?:neq|leq|geq|eq|approx|equiv|sim|cong|leqslant|geqslant|doteq|coloneqq)$/.test(
          before,
        )
      ) {
        continue;
      }
      return `${s.slice(0, i).trimEnd()} &=${s.slice(i + 1)}`;
    }
  }
  return `& ${s}`;
}

function coalesceContinuationDisplays(parts: Part[]): Part[] {
  const afterRelations = coalesceRelationContinuationDisplays(parts);
  return coalesceDenseShortDisplays(afterRelations);
}

/**
 * Keep each display as its own centered KaTeX block (old formula style).
 * Do not merge `= 164` into gather-star / aligned — that shifts short rows off-center.
 */
function coalesceRelationContinuationDisplays(parts: Part[]): Part[] {
  return parts;
}

/** Stack runs of many tiny display fragments into one gather* block. */
function coalesceDenseShortDisplays(parts: Part[]): Part[] {
  const out: Part[] = [];
  let i = 0;
  while (i < parts.length) {
    const p = parts[i]!;
    if (p.type !== "display" || !isCompactDisplayBody(p.value)) {
      out.push(p);
      i += 1;
      continue;
    }

    const bodies = [p.value];
    let j = i + 1;
    let end = j;
    while (j < parts.length) {
      const mid = parts[j]!;
      if (mid.type === "text" && mid.value.trim() === "") {
        j += 1;
        continue;
      }
      if (mid.type === "display" && isCompactDisplayBody(mid.value)) {
        bodies.push(mid.value);
        j += 1;
        end = j;
        continue;
      }
      break;
    }

    if (bodies.length >= DENSE_SHORT_DISPLAY_MIN) {
      // Keep econ CA=/CL= stacks as separate centered displays (old style).
      // Only gather* pure membership / tiny non-assignment checklists.
      const assignmentLike = bodies.filter((b) =>
        /(?:^|[^\\])(?:=|\\approx\b|\\leq\b|\\geq\b|\\le\b|\\ge\b|>|<)/.test(b),
      ).length;
      if (assignmentLike >= Math.ceil(bodies.length * 0.6)) {
        for (const b of bodies) out.push({ type: "display", value: b });
      } else {
        out.push({ type: "display", value: formatGatherBlock(bodies) });
      }
      i = end;
    } else {
      // Keep originals (with any blank text parts between) when the run is short.
      out.push(p);
      i += 1;
    }
  }
  return out;
}

/** True when a paragraph is only a display-math block (optional trailing punct). */
export function isSoleDisplayMathParagraph(trimmed: string): boolean {
  return /^\$\$[\s\S]+\$\$[.,:;!?]*$/.test(trimmed.trim());
}

function extractSoleDisplayBody(para: string): string {
  const t = para.trim();
  const m = t.match(/^\$\$([\s\S]+)\$\$[.,:;!?]*$/);
  return (m?.[1] ?? t).trim();
}

/**
 * Old formula style: each `$$…$$` stays its own centered paragraph.
 * Merging relation continuations into aligned/gather made stacks look crooked.
 */
function mergeRelationContinuationParagraphs(paragraphs: string[]): string[] {
  return paragraphs;
}

/**
 * Stack ≥3 consecutive short sole-display paragraphs into one gather* so
 * membership checklists and tiny intermediates are not each given a large gap.
 */
function mergeDenseShortDisplayParagraphs(paragraphs: string[]): string[] {
  const out: string[] = [];
  let i = 0;
  while (i < paragraphs.length) {
    const p = paragraphs[i]!;
    if (!isSoleDisplayMathParagraph(p) || !isCompactDisplayBody(extractSoleDisplayBody(p))) {
      out.push(p);
      i += 1;
      continue;
    }
    let j = i + 1;
    while (
      j < paragraphs.length &&
      isSoleDisplayMathParagraph(paragraphs[j]!) &&
      isCompactDisplayBody(extractSoleDisplayBody(paragraphs[j]!))
    ) {
      j += 1;
    }
    if (j - i >= DENSE_SHORT_DISPLAY_MIN) {
      const bodies = paragraphs.slice(i, j).map(extractSoleDisplayBody);
      const assignmentLike = bodies.filter((b) =>
        /(?:^|[^\\])(?:=|\\approx\b|\\leq\b|\\geq\b|\\le\b|\\ge\b|>|<)/.test(b),
      ).length;
      // Assignment / ratio chains stay as separate centered $$…$$ (old style).
      if (assignmentLike >= Math.ceil(bodies.length * 0.6)) {
        for (let k = i; k < j; k++) out.push(paragraphs[k]!);
      } else {
        out.push(`$$\n${formatGatherBlock(bodies)}\n$$`);
      }
      i = j;
    } else {
      for (let k = i; k < j; k++) out.push(paragraphs[k]!);
      i = j;
    }
  }
  return out;
}

/**
 * Merge consecutive blank-line-separated `$$…$$` paragraphs when later ones
 * are relation continuations (`= …`, `\approx …`, …), then stack long runs of
 * short displays into gather* (fixes floating `= -2` and airy membership lists).
 */
export function mergeContinuationDisplayParagraphs(paragraphs: string[]): string[] {
  return mergeDenseShortDisplayParagraphs(mergeRelationContinuationParagraphs(paragraphs));
}

function splitMath(input: string): Part[] {
  // Convert TeX delimiters \(…\) / \[…\] to $…$ / $$…$$.
  // Lookbehind + paired match + function replacer:
  // 1) Must not match KaTeX row breaks `\\[0.85em]` / `\\[4pt]` (a bare /\\\[/
  //    turns those into `$0.85em]` and red-fails whole gather* blocks).
  // 2) String.replace treats `$$` in a string replacement as a single `$`,
  //    which would turn display `\[…\]` into inline `$…$`.
  const text = normalizeBrokenMathMarkup(
    input
      .replace(/(?<!\\)\\\(([\s\S]+?)(?<!\\)\\\)/g, (_m, inner: string) => `$${inner}$`)
      .replace(/(?<!\\)\\\[([\s\S]+?)(?<!\\)\\\]/g, (_m, inner: string) => `$$${inner}$$`),
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
        // Trailing . , : ; ? after $$ would otherwise render on its own line
        // under a block-level KaTeX display — fold it into the math.
        let value = text.slice(i + 2, end).trim();
        i = end + 2;
        // Do not absorb "!" — it is often factorial/subfactorial notation after $$.
        while (i < text.length && /[.,:;?]/.test(text[i]!)) {
          value += text[i];
          i += 1;
        }
        parts.push({ type: "display", value: normalizeCrampedFractionSteps(value) });
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
          // Keep sentence punctuation glued to inline math so "." / "," cannot
          // wrap alone onto the next visual line after a KaTeX span.
          let value = inner.trim();
          i = end + 1;
          while (i < text.length && /[.,:;?]/.test(text[i]!)) {
            value += text[i];
            i += 1;
          }
          parts.push({ type: "inline", value });
          continue;
        }
      }
    }

    buf += text[i];
    i += 1;
  }
  flush();
  if (parts.length === 0) parts.push({ type: "text", value: text });
  return coalesceContinuationDisplays(parts);
}

/** Exported for stem audits / unit checks. */
export function __splitMathForAudit(input: string): Part[] {
  return splitMath(input);
}
