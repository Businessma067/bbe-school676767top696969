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

/**
 * Protect currency like $304.00 / $9,660.00 so they are not parsed as KaTeX.
 * Real math still uses $...$ / $$...$$ (including values like $0.25^{10}$).
 */
/**
 * Protect currency so it is not parsed as KaTeX.
 * Matches: $304.00 · $9,660 · $2.00/GB · $14,100
 * Leaves real math alone: $0.25^{10}$ · $428.00-160y=185$ · $x+y=1$ · $360$
 */
function protectCurrency(input: string): { text: string; restore: (s: string) => string } {
  const bag: string[] = [];
  const text = input.replace(
    // Require: don't end before a decimal continuation (".25"), and don't steal math ops.
    /\$\d+(?:,\d{3})*(?:\.\d+)?(?:\/[A-Za-z%]+)?(?!\.\d)(?!,\d)(?![0-9A-Za-z+\-*=(\\{^_$])/g,
    (whole) => {
      const key = `¤C${bag.length}¤`;
      bag.push(whole);
      return key;
    },
  );
  return {
    text,
    restore: (s: string) => s.replace(/¤C(\d+)¤/g, (_, i) => bag[Number(i)] ?? ""),
  };
}

function splitMath(input: string): Part[] {
  const { text: protectedText, restore } = protectCurrency(input);

  const normalized = protectedText
    .replace(/\\\(/g, "$")
    .replace(/\\\)/g, "$")
    .replace(/\\\[/g, "$$")
    .replace(/\\\]/g, "$$");

  const parts: Part[] = [];
  const re = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(normalized))) {
    if (m.index > last) {
      parts.push({ type: "text", value: restore(normalized.slice(last, m.index)) });
    }
    if (m[1] != null) {
      parts.push({ type: "display", value: restore(m[1]).trim() });
    } else if (m[2] != null) {
      parts.push({ type: "inline", value: restore(m[2]).trim() });
    }
    last = m.index + m[0].length;
  }
  if (last < normalized.length) {
    parts.push({ type: "text", value: restore(normalized.slice(last)) });
  }
  if (parts.length === 0) {
    parts.push({ type: "text", value: restore(normalized) });
  }
  return parts;
}
