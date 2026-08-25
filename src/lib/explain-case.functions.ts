import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
import { generateText, Output, NoObjectGeneratedError } from "ai";
import { createLovableAiGatewayProvider } from "./ai-gateway.server";
import type { BookIndex } from "./book-embeddings.server";

async function embedQuery(
  text: string,
  apiKey: string,
  dim: number,
  l2Normalize: (v: number[]) => Float32Array,
): Promise<Float32Array | null> {
  try {
    const res = await fetch("https://ai.gateway.lovable.dev/v1/embeddings", {
      method: "POST",
      headers: { "Lovable-API-Key": apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "openai/text-embedding-3-small",
        input: text.slice(0, 4000),
        dimensions: dim,
      }),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { data: { embedding: number[] }[] };
    return l2Normalize(json.data[0].embedding);
  } catch {
    return null;
  }
}


const Input = z.object({
  stem: z.string().min(1),
  statement: z.string().min(1),
  correctAnswer: z.boolean(),
  compact: z.boolean().optional(),
});

const Output_ = z.object({
  classic_explanation: z.string(),
  textbook_context: z.string(),
  highlight_text: z.string(),
});

export const explainCase = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => Input.parse(d))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("Missing LOVABLE_API_KEY");

    const query = `${data.stem}\n\nStatement: ${data.statement}`;
    let passages = "";
    try {
      const { getBookIndex, topKChunks, l2Normalize } = await import("./book-embeddings.server");
      const book: BookIndex = await getBookIndex();
      const qVec = await embedQuery(query, key, book.dim, l2Normalize);
      if (qVec) {
        const top = topKChunks(book, qVec, 5).filter((t) => t.score > 0.1);
        passages = top
          .map((t, i) => `[Passage ${i + 1}]\n${book.chunks[t.idx]}`)
          .join("\n\n---\n\n");
      }
    } catch (err) {
      console.error("[explainCase] textbook retrieval failed", err);
    }


    const truthLabel = data.correctAnswer ? "TRUE" : "FALSE";
    const gateway = createLovableAiGatewayProvider(key, { structuredOutputs: true });

    const compact = data.compact !== false;
    const prompt = compact
      ? `You are the BBE School economics tutor. The official theory source is the BBE School Economics Full Course textbook (Introduction to Business & Economics, chapters 2–6) used inside this platform.

The exam question stem: "${data.stem}"

The specific statement being evaluated: "${data.statement}"

The correct answer is: ${truthLabel}

Below are relevant retrieved passages from the BBE textbook. Use them as your source of truth.

===== BOOK CONTEXT =====
${passages || "(no strong retrieval hits — rely on well-established economics knowledge aligned with the BBE Full Course syllabus)"}
========================

Produce a JSON object with EXACTLY these three fields. Keep every field brutally short — phone / tweet length.

1. "classic_explanation": ONE sentence (max 28 words) explaining WHY the statement is ${truthLabel}. No preamble ("The claim is correct"), no lists.

2. "textbook_context": ONE sentence (max 22 words) paraphrased from the most relevant retrieved passage.

3. "highlight_text": A verbatim 4-12 word substring from "textbook_context".`
      : `You are the BBE School economics tutor. The official theory source is the BBE School Economics Full Course textbook (Introduction to Business & Economics, chapters 2–6) used inside this platform.

The exam question stem: "${data.stem}"

The specific statement being evaluated: "${data.statement}"

The correct answer is: ${truthLabel}

Below are relevant retrieved passages from the BBE textbook. Use them as your source of truth.

===== BOOK CONTEXT =====
${passages || "(no strong retrieval hits — rely on well-established economics knowledge aligned with the BBE Full Course syllabus and note this in the classic explanation)"}
========================

Produce a JSON object with EXACTLY these three fields:

1. "classic_explanation": 2-4 clear sentences of plain-English reasoning explaining WHY the statement is ${truthLabel}. No jargon dumps, no bullet lists — flowing conversational tutor voice. Do not reference "the passage" or "the textbook".

2. "textbook_context": ONE clean paragraph (60-180 words) copied/paraphrased tightly from the most relevant retrieved passage above. It must be self-contained prose that a student could read like an excerpt from the BBE book. Preserve the book's tone. No headings, no "[Passage 1]" markers.

3. "highlight_text": A single verbatim substring taken from your "textbook_context" field — the exact sentence (or phrase) that most directly proves or disproves the statement. It MUST appear character-for-character inside "textbook_context". Keep it short: 4-25 words.`;

    try {
      const { output } = await generateText({
        model: gateway("openai/gpt-5.5"),
        output: Output.object({ schema: Output_ }),
        prompt,
      });
      return output;
    } catch (error) {
      if (NoObjectGeneratedError.isInstance(error)) {
        // Best-effort fallback: try to salvage JSON from the raw text.
        try {
          const match = error.text?.match(/\{[\s\S]*\}/);
          if (match) return Output_.parse(JSON.parse(match[0]));
        } catch { /* ignore */ }
      }
      throw error;
    }
  });
