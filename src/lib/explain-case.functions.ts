import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { generateText, Output, NoObjectGeneratedError } from "ai";
import { createLovableAiGatewayProvider } from "./ai-gateway.server";
import bookData from "@/data/book-embeddings.json";

type BookData = { dim: number; count: number; chunks: string[]; embeddings_b64: string };
const book = bookData as unknown as BookData;

let CACHED_VECTORS: Float32Array | null = null;
function getVectors(): Float32Array {
  if (CACHED_VECTORS) return CACHED_VECTORS;
  const bin = atob(book.embeddings_b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  CACHED_VECTORS = new Float32Array(bytes.buffer);
  return CACHED_VECTORS;
}

function l2Normalize(v: number[]): Float32Array {
  let s = 0;
  for (const x of v) s += x * x;
  const n = Math.sqrt(s) || 1;
  const out = new Float32Array(v.length);
  for (let i = 0; i < v.length; i++) out[i] = v[i] / n;
  return out;
}

async function embedQuery(text: string, apiKey: string): Promise<Float32Array | null> {
  try {
    const res = await fetch("https://ai.gateway.lovable.dev/v1/embeddings", {
      method: "POST",
      headers: { "Lovable-API-Key": apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "openai/text-embedding-3-small",
        input: text.slice(0, 4000),
        dimensions: book.dim,
      }),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { data: { embedding: number[] }[] };
    return l2Normalize(json.data[0].embedding);
  } catch {
    return null;
  }
}

function topK(queryVec: Float32Array, k = 5): { idx: number; score: number }[] {
  const vectors = getVectors();
  const dim = book.dim;
  const scores: { idx: number; score: number }[] = new Array(book.count);
  for (let i = 0; i < book.count; i++) {
    let dot = 0;
    const base = i * dim;
    for (let d = 0; d < dim; d++) dot += queryVec[d] * vectors[base + d];
    scores[i] = { idx: i, score: dot };
  }
  scores.sort((a, b) => b.score - a.score);
  return scores.slice(0, k);
}

const Input = z.object({
  stem: z.string().min(1),
  statement: z.string().min(1),
  correctAnswer: z.boolean(),
});

const Output_ = z.object({
  classic_explanation: z.string(),
  textbook_context: z.string(),
  highlight_text: z.string(),
});

export const explainCase = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => Input.parse(d))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("Missing LOVABLE_API_KEY");

    const query = `${data.stem}\n\nStatement: ${data.statement}`;
    let passages = "";
    const qVec = await embedQuery(query, key);
    if (qVec) {
      const top = topK(qVec, 5).filter((t) => t.score > 0.1);
      passages = top.map((t, i) => `[Passage ${i + 1}]\n${book.chunks[t.idx]}`).join("\n\n---\n\n");
    }

    const truthLabel = data.correctAnswer ? "TRUE" : "FALSE";
    const gateway = createLovableAiGatewayProvider(key);

    const prompt = `You are the BBE School economics tutor. The official textbook is "Introduction to Business and Economics" by Bettina Fuhrmann (WU, 2019).

The exam question stem: "${data.stem}"

The specific statement being evaluated: "${data.statement}"

The correct answer is: ${truthLabel}

Below are relevant retrieved passages from the textbook. Use them as your source of truth.

===== BOOK CONTEXT =====
${passages || "(no strong retrieval hits — rely on well-established economics knowledge and note this in the classic explanation)"}
========================

Produce a JSON object with EXACTLY these three fields:

1. "classic_explanation": 2-4 clear sentences of plain-English reasoning explaining WHY the statement is ${truthLabel}. No jargon dumps, no bullet lists — flowing conversational tutor voice. Do not reference "the passage" or "the textbook".

2. "textbook_context": ONE clean paragraph (60-180 words) copied/paraphrased tightly from the most relevant retrieved passage above. It must be self-contained prose that a student could read like an excerpt from the book. Preserve the book's tone. No headings, no "[Passage 1]" markers.

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
