import katex from "katex";
import "katex/dist/katex.min.css";

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

/** Render flashcard text with inline `$...$` / display `$$...$$` KaTeX. */
export function FlashcardMath({
  text,
  className,
  displayPrefer = false,
}: {
  text: string;
  className?: string;
  displayPrefer?: boolean;
}) {
  const parts = splitMath(text);
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
}

function MathChunk({
  part,
  displayPrefer,
}: {
  part: { type: "inline" | "display"; value: string };
  displayPrefer: boolean;
}) {
  const displayMode = part.type === "display" || (displayPrefer && part.type === "inline");
  const chunks = sanitizeMathSource(part.value);

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
          const html = katex.renderToString(chunk.value, {
            throwOnError: false,
            displayMode,
            strict: "ignore",
          });
          return (
            <span
              key={j}
              className={
                displayMode
                  ? "my-0 block w-full overflow-x-auto py-1 text-center [&_.katex-display]:my-0 [&_.katex-display]:overflow-x-auto"
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
}

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
  // Two consecutive English words (≥3 letters) → almost certainly not pure math.
  return /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(s);
}

type Part =
  | { type: "text"; value: string }
  | { type: "inline"; value: string }
  | { type: "display"; value: string };

const CURRENCY_RE =
  /\$\d+(?:,\d{3})*(?:\.\d+)?(?:\/[A-Za-z%]+)?(?!\.\d)(?!,\d)(?![0-9A-Za-z+\-*=<>≠≤≥(\\{^_$])/y;

/**
 * Decide whether `$…$` contents are real KaTeX vs accidental pairing of two
 * currency signs across prose: `$2,943.20. Shipment 2… cost $4,555.00`.
 */
function looksLikeMathInner(inner: string): boolean {
  const t = inner.trim();
  if (!t) return false;

  // Two consecutive English words → narrative prose
  if (/[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(t)) return false;

  // Glue words mean currency `$8,000 < 0 and $a_1$` must NOT become one math span
  if (
    /\b(?:and|or|the|for|with|from|that|which|this|into|onto|than|then|when|where|while|also|but|not|amount|invested|returned|matching|statement|condition|satisfied|exists)\b/i.test(
      t,
    )
  ) {
    return false;
  }

  // Answer lines: Notebook = $3.50 | Pen = $1.80
  if (t.includes("|")) return false;

  // Stem-style words with no equation mark → currency mid-sentence
  if (
    !/[=<>≠≤≥]/.test(t) &&
    /\b(?:Shipment|Invoice|Account|Week|Batch|Season|Client|Fund|Route|Day|Point|Job|Branch|cost|total|mixed|price|rate|fee|balance|units?|kg|litres?|miles?)\b/i.test(
      t,
    )
  ) {
    return false;
  }

  // Any 4+ letter English token without eq/compare (and not a LaTeX command) is prose
  if (/[A-Za-z]{4,}/.test(t) && !/[=<>≠≤≥]/.test(t) && !/\\[a-zA-Z]+/.test(t)) {
    return false;
  }

  // Equations / comparisons / algebra (escaped currency `\$` is fine inside)
  if (/[=<>≠≤≥+×·\-/^\\()_]/.test(t) && /[A-Za-z0-9]/.test(t)) return true;
  // Bare answers like $360$
  if (/^[+\-]?\d+(?:\.\d+)?$/.test(t)) return true;
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
function splitMath(input: string): Part[] {
  const text = input
    .replace(/\\\(/g, "$")
    .replace(/\\\)/g, "$")
    .replace(/\\\[/g, "$$")
    .replace(/\\\]/g, "$$");

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

/** Exported for stem audits / unit checks. */
export function __splitMathForAudit(input: string): Part[] {
  return splitMath(input);
}
