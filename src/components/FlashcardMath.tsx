import katex from "katex";
import "katex/dist/katex.min.css";
import { memo, useMemo } from "react";
import {
  sanitizeMathSource,
  splitMath,
  unescapeProseLatex,
} from "@/lib/flashcard-math-helpers";

// Re-export pure helpers so existing `@/components/FlashcardMath` imports keep working.
export {
  indexOfUnescapedDollar,
  unescapeProseLatex,
  isRelationContinuationBody,
  isSoleDisplayMathParagraph,
  mergeContinuationDisplayParagraphs,
  __splitMathForAudit,
} from "@/lib/flashcard-math-helpers";

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
    <span className={className} data-no-i18n>
      {parts.map((part, i) => {
        if (part.type === "text") {
          return <span key={i}>{unescapeProseLatex(part.value)}</span>;
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
              {unescapeProseLatex(chunk.value)}
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
                  ? "flashcard-math-display my-0.5 block h-auto w-full max-w-full overflow-x-auto overflow-y-visible py-0.5 text-center [&_.katex]:max-w-full [&_.katex-display]:my-0 [&_.katex-display]:h-auto [&_.katex-display]:max-w-full [&_.katex-display]:overflow-x-auto [&_.katex-display]:overflow-y-visible [&_.katex-display]:py-0.5 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border"
                  : "mx-0.5 inline-block max-w-full align-baseline [overflow-wrap:anywhere] [&_.katex]:max-w-full"
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
