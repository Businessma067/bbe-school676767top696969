import katex from "katex";
import "katex/dist/katex.min.css";

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
          return <span key={i}>{part.value}</span>;
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
              {chunk.value}
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
  /\$\d+(?:,\d{3})*(?:\.\d+)?(?:\/[A-Za-z%]+)?(?!\.\d)(?!,\d)(?![0-9A-Za-z+\-*=(\\{^_$])/y;

function looksLikeMathInner(inner: string): boolean {
  const t = inner.trim();
  if (!t) return false;
  if (/[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(t)) return false; // prose between dollars
  if (/[=+×·\-/^\\()_]/.test(t)) return true;
  if (/[A-Za-z]/.test(t) && /\d/.test(t)) return true;
  if (/^[+\-]?\d+(?:\.\d+)?$/.test(t)) return true; // $360$
  return false;
}

/**
 * Split prose / currency / KaTeX.
 * Currency is claimed first at `$digits…` so `$6000 … $0.04(6000)=240$` does not
 * falsely pair the currency `$` with the math opener. Already-valid math spans
 * (inner looks like math) are taken as KaTeX.
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

    if (text[i] === "$") {
      // Prefer currency at $digits when it does not look like delimited math later.
      CURRENCY_RE.lastIndex = i;
      const cur = CURRENCY_RE.exec(text);
      if (cur && cur.index === i) {
        const afterMath = text.indexOf("$", i + cur[0].length);
        const between = afterMath === -1 ? "" : text.slice(i + 1, afterMath);
        // If `$…$` from here would be math, don't steal currency from a math span
        // like `$428.00 - 160y = 185$`.
        if (!(afterMath !== -1 && looksLikeMathInner(between))) {
          buf += cur[0];
          i += cur[0].length;
          continue;
        }
      }

      const end = text.indexOf("$", i + 1);
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
