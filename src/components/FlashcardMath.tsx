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
              className={part.type === "display" ? "my-2 block overflow-x-auto text-center" : "mx-0.5 inline-block"}
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

function splitMath(input: string): Part[] {
  const parts: Part[] = [];
  const re = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(input))) {
    if (m.index > last) {
      parts.push({ type: "text", value: input.slice(last, m.index) });
    }
    if (m[1] != null) {
      parts.push({ type: "display", value: m[1].trim() });
    } else if (m[2] != null) {
      parts.push({ type: "inline", value: m[2].trim() });
    }
    last = m.index + m[0].length;
  }
  if (last < input.length) {
    parts.push({ type: "text", value: input.slice(last) });
  }
  if (parts.length === 0) {
    parts.push({ type: "text", value: input });
  }
  return parts;
}
