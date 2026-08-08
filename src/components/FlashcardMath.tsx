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
        try {
          const html = katex.renderToString(part.value, {
            throwOnError: false,
            displayMode: part.type === "display" || (displayPrefer && part.type === "inline"),
            strict: "ignore",
          });
          return (
            <span
              key={i}
              className={
                part.type === "display" ? "my-2 block overflow-x-auto text-center" : "mx-0.5 inline-block"
              }
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <span key={i}>{part.value}</span>;
        }
      })}
    </span>
  );
}

type Part =
  | { type: "text"; value: string }
  | { type: "inline"; value: string }
  | { type: "display"; value: string };

/**
 * Protect currency like $304.00 / $9,660.00 so they are not parsed as KaTeX.
 * Real math still uses $...$ / $$...$$ (including values like $0.25^{10}$).
 */
function protectCurrency(input: string): { text: string; restore: (s: string) => string } {
  const bag: string[] = [];
  const text = input.replace(/\$(\d{1,3}(?:,\d{3})*(?:\.\d+)?|\d+(?:\.\d+)?)(?![\dA-Za-z\\{^_])/g, (_, num) => {
    const key = `¤C${bag.length}¤`;
    bag.push(`$${num}`);
    return key;
  });
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
