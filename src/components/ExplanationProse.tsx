import {
  FlashcardMath,
  mergeContinuationDisplayParagraphs,
} from "@/components/FlashcardMath";
import { MathMarkdownTable, parsePipeTable } from "@/components/mock-exam/MathMarkdownTable";
import { cn } from "@/lib/utils";

/** Detect a GFM pipe table that lives in one blank-line paragraph. */
function isMarkdownTablePara(block: string): boolean {
  const lines = block
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length < 2) return false;
  if (!lines.every((l) => l.includes("|"))) return false;
  if (!lines.some((l) => /^\|?\s*:?-{3,}/.test(l) || /^(\|\s*:?-+:?\s*)+\|?$/.test(l))) {
    // header + body without separator still ok if ≥2 pipe rows parse
    return parsePipeTable(block).length >= 2;
  }
  return parsePipeTable(block).length >= 1;
}

/**
 * Tutorial prose (font-expl + Part/claim/Tip spacing).
 * Supports KaTeX via `$...$` / `$$...$$` (same as math explanations).
 * Pipe truth tables render as real HTML tables (not crooked monospace).
 */
export function ExplanationProse({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const paragraphs = mergeContinuationDisplayParagraphs(
    text
      .split(/\n\n+/)
      .map((p) => p.trim())
      .filter(Boolean),
  );

  type Chunk =
    | { kind: "part"; title: string }
    | { kind: "claim"; text: string }
    | { kind: "note"; body: string }
    | { kind: "close"; text: string }
    | { kind: "math"; text: string }
    | { kind: "table"; text: string }
    | { kind: "para"; text: string };

  const chunks: Chunk[] = [];
  for (const p of paragraphs) {
    if (isMarkdownTablePara(p)) {
      chunks.push({ kind: "table", text: p });
      continue;
    }
    if (/^\$\$[\s\S]+\$\$$/.test(p) || /^\$\$[\s\S]+\$\$\s*$/.test(p)) {
      chunks.push({ kind: "math", text: p });
      continue;
    }
    const partOnly = p.match(/^\*\*([^*]+)\*\*\s*$/);
    if (partOnly && /^(Part\b|Answer\b|Overview\b|Setup\b|Truth table\b)/i.test(partOnly[1].trim())) {
      chunks.push({ kind: "part", title: partOnly[1].replace(/[.!:]+$/, "") });
      continue;
    }
    if (/^\*\*[A-F](?:\)|\.\*\*)/.test(p)) {
      chunks.push({ kind: "claim", text: p });
      continue;
    }
    const tip = p.match(/^\*\*(Tip|Trap|Note)\.?\*\*\s*([\s\S]*)$/i);
    if (tip) {
      chunks.push({ kind: "note", body: `${tip[1]}: ${tip[2]}` });
      continue;
    }
    const tipPlain = p.match(/^(Tip|Trap|Note):\s*([\s\S]*)$/i);
    if (tipPlain) {
      chunks.push({ kind: "note", body: `${tipPlain[1]}: ${tipPlain[2]}` });
      continue;
    }
    chunks.push({ kind: "para", text: p });
  }

  // Final content paragraph is the natural verdict (after Tip/Trap notes / math).
  for (let i = chunks.length - 1; i >= 0; i--) {
    const c = chunks[i];
    if (c.kind === "note" || c.kind === "math" || c.kind === "table") continue;
    if (c.kind === "para") {
      chunks[i] = { kind: "close", text: c.text };
    }
    break;
  }

  return (
    <div
      className={cn(
        "font-expl text-[15px] leading-[1.65] text-foreground sm:text-[15.5px]",
        "[&_.katex]:text-[1.08em] [&_.flashcard-math-display]:my-0.5 [&_.flashcard-math-display]:overflow-y-visible",
        className,
      )}
    >
      {chunks.map((chunk, idx) => {
        if (chunk.kind === "part") {
          return (
            <h4
              key={idx}
              className="mb-3 mt-9 text-[16.5px] font-bold leading-snug tracking-tight text-foreground first:mt-0 sm:text-[17.5px]"
            >
              {chunk.title}
            </h4>
          );
        }
        if (chunk.kind === "claim") {
          return (
            <p
              key={idx}
              className="mb-3 mt-10 text-[15.5px] font-bold leading-snug text-foreground first:mt-0 sm:text-[16.5px]"
            >
              <InlineMarks text={chunk.text} />
            </p>
          );
        }
        if (chunk.kind === "note") {
          const [label, ...rest] = chunk.body.split(":");
          return (
            <aside
              key={idx}
              className="my-6 border-l-[3px] border-border py-1.5 pl-4 text-[14.5px] font-semibold italic leading-[1.6] text-foreground/90"
            >
              <span className="font-bold not-italic">{label}: </span>
              <InlineMarks text={rest.join(":").trim()} />
            </aside>
          );
        }
        if (chunk.kind === "table") {
          return (
            <div key={idx} className="my-5 overflow-x-auto overflow-y-visible [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border">
              <MathMarkdownTable markdown={chunk.text} />
            </div>
          );
        }
        if (chunk.kind === "math") {
          const prevMath = idx > 0 && chunks[idx - 1]?.kind === "math";
          const nextMath = idx < chunks.length - 1 && chunks[idx + 1]?.kind === "math";
          // Compact gaps between consecutive centered $$ steps.
          return (
            <div
              key={idx}
              className={cn(
                prevMath || nextMath ? "my-0.5" : "my-2",
                prevMath && "mt-0.5",
                nextMath && "mb-0.5",
              )}
            >
              <FlashcardMath text={chunk.text} displayPrefer />
            </div>
          );
        }
        if (chunk.kind === "close") {
          return (
            <p key={idx} className="mb-4 mt-3 font-semibold leading-[1.6] text-foreground">
              <InlineMarks text={chunk.text} />
            </p>
          );
        }
        return (
          <p key={idx} className="mb-4 mt-0 leading-[1.6]">
            <InlineMarks text={chunk.text} />
          </p>
        );
      })}
    </div>
  );
}

function InlineMarks({ text }: { text: string }) {
  const parts: { kind: "text" | "bold" | "italic"; value: string }[] = [];
  const re = /(\*\*[^*]+?\*\*|\*[^*\n]+?\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push({ kind: "text", value: text.slice(last, m.index) });
    const raw = m[0];
    if (raw.startsWith("**")) parts.push({ kind: "bold", value: raw.slice(2, -2) });
    else parts.push({ kind: "italic", value: raw.slice(1, -1) });
    last = m.index + raw.length;
  }
  if (last < text.length) parts.push({ kind: "text", value: text.slice(last) });
  if (parts.length === 0) parts.push({ kind: "text", value: text });

  return (
    <span>
      {parts.map((p, i) =>
        p.kind === "bold" ? (
          <strong key={i} className="font-bold text-foreground">
            {p.value.includes("$") ? <FlashcardMath text={p.value} /> : p.value}
          </strong>
        ) : p.kind === "italic" ? (
          <em key={i}>{p.value.includes("$") ? <FlashcardMath text={p.value} /> : p.value}</em>
        ) : p.value.includes("$") ? (
          <FlashcardMath key={i} text={p.value} />
        ) : (
          <span key={i}>{p.value}</span>
        ),
      )}
    </span>
  );
}
