import type { PracticeCasePayload } from "@/lib/practice-case-context";

function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    .replace(/\$[^$]+\$/g, " ")
    .replace(/\\[a-zA-Z]+/g, " ")
    .replace(/[^\p{L}\p{N}\s.%/=+-]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(s: string): string[] {
  return norm(s)
    .split(" ")
    .filter((w) => w.length > 1)
    .slice(0, 80);
}

function scoreOverlap(haystack: string, needleTokens: string[]): number {
  if (!needleTokens.length || !haystack) return 0;
  const h = norm(haystack);
  let hits = 0;
  for (const t of needleTokens) {
    if (h.includes(t)) hits += 1;
  }
  return hits / needleTokens.length;
}

type KbChunk = {
  kind: "overview" | "statement" | "explanation" | "context" | "theory";
  label: string;
  text: string;
};

function buildChunks(c: PracticeCasePayload): KbChunk[] {
  const out: KbChunk[] = [];
  if (c.context?.trim()) out.push({ kind: "context", label: "Case stem", text: c.context.trim() });
  if (c.theorySnippet?.trim())
    out.push({ kind: "theory", label: "Theory", text: c.theorySnippet.trim() });
  if (c.solutionOverview?.trim())
    out.push({ kind: "overview", label: "Solution overview", text: c.solutionOverview.trim() });
  c.statements.forEach((stmt, i) => {
    const letter = String.fromCharCode(65 + i);
    out.push({ kind: "statement", label: `Statement ${letter}`, text: stmt });
    const expl = c.tacticalExplanations?.[i]?.trim();
    if (expl) out.push({ kind: "explanation", label: `Explanation ${letter}`, text: expl });
  });
  return out;
}

function bestChunks(chunks: KbChunk[], query: string, limit = 3): Array<KbChunk & { score: number }> {
  const toks = tokens(query);
  return chunks
    .map((ch) => ({ ...ch, score: scoreOverlap(ch.text, toks) }))
    .filter((ch) => ch.score > 0.08)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function clip(s: string, max = 1200): string {
  const t = s.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1)}…`;
}

/** Instant answers from the authored case bank (no LLM). */
export function answerFromCaseDatabase(
  c: PracticeCasePayload,
  query: string,
  mode: "explain" | "ask" = "ask",
): string {
  const q = query.trim();
  if (!q) {
    return "Select text in the case, or ask a question about the current task.";
  }

  const chunks = buildChunks(c);
  const hits = bestChunks(chunks, q, mode === "explain" ? 4 : 3);

  if (!hits.length) {
    const fallback = [
      c.solutionOverview?.trim(),
      ...(c.tacticalExplanations ?? []).map((e) => e.trim()).filter(Boolean),
    ].filter(Boolean)[0];
    if (fallback) {
      return [
        `**Case:** ${c.title}`,
        "",
        "No tight match for that excerpt in the case bank. Closest authored note:",
        "",
        clip(fallback, 1400),
      ].join("\n");
    }
    return [
      `**Case:** ${c.title}`,
      "",
      "This case bank has the stem and statements, but no matching authored explanation chunk for that query yet.",
      "",
      clip(c.context || "No stem available.", 800),
    ].join("\n");
  }

  const lines: string[] = [
    `**Case:** ${c.chapterLabel} · ${c.title}`,
    "",
  ];

  if (mode === "explain") {
    lines.push(`**Selected:** «${clip(q, 280)}»`, "");
    lines.push(
      "Pulled from the case database (authored stem + solution notes), not a free-form model guess:",
      "",
    );
  } else {
    lines.push("Answer from the case database:", "");
  }

  for (const hit of hits) {
    lines.push(`### ${hit.label}`);
    lines.push(clip(hit.text, hit.kind === "explanation" ? 1600 : 900));
    lines.push("");
  }

  if (mode === "explain") {
    lines.push(
      "_Tip: ask a follow-up about this case (e.g. “why is D false?”) and I will pull the matching statement note._",
    );
  }

  return lines.join("\n").trim();
}
