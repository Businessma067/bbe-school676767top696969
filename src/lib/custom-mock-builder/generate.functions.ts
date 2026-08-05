import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
import { generateText, Output, NoObjectGeneratedError } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import {
  CUSTOM_MOCK_QUESTION_COUNTS,
  durationMinutesForQuestionCount,
  getEnabledEconomicsChapters,
  pointsTotalForEconomicsQuestions,
} from "@/config/custom-mock-builder";
import { SCORING_CONFIG } from "@/config/scoring-config";
import type { ExamQuestion } from "@/lib/mock-exams";
import { buildCustomMockPrompt, type StyleExampleCase } from "./prompt";
import bookData from "@/data/book-embeddings.json";

const Input = z.object({
  chapters: z.array(z.number().int().min(1).max(20)).min(1).max(10),
  questionCount: z.union([z.literal(5), z.literal(10), z.literal(20)]),
});

const StatementOut = z.object({
  text: z.string().min(1),
  isTrue: z.boolean(),
  explanation: z.string().min(1),
});

const QuestionOut = z.object({
  stem: z.string().min(1),
  statements: z.array(StatementOut).length(5),
});

const OutputSchema = z.object({
  questions: z.array(QuestionOut).min(1).max(40),
});

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

async function embedQuery(text: string, apiKey: string, dim: number): Promise<Float32Array | null> {
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

function topK(queryVec: Float32Array, k: number): { idx: number; score: number }[] {
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

function pickStyleExamples(cases: StyleExampleCase[], count: number): StyleExampleCase[] {
  if (cases.length <= count) return cases;
  // Prefer mid-high difficulty; shuffle lightly for variety across generations.
  const scored = [...cases].sort((a, b) => {
    const da = parseFloat(a.difficulty_level) || 0;
    const db = parseFloat(b.difficulty_level) || 0;
    return db - da;
  });
  const pool = scored.slice(0, Math.min(scored.length, count * 3));
  const out: StyleExampleCase[] = [];
  const used = new Set<number>();
  while (out.length < count && used.size < pool.length) {
    const i = Math.floor(Math.random() * pool.length);
    if (used.has(i)) continue;
    used.add(i);
    out.push(pool[i]);
  }
  return out;
}

function toExamQuestions(
  mockId: string,
  generated: z.infer<typeof OutputSchema>["questions"],
): ExamQuestion[] {
  const maxPoints = SCORING_CONFIG.economics.defaultMaxPerTask;
  return generated.map((q, i) => {
    const index = i + 1;
    return {
      id: `${mockId}-q${index}`,
      index,
      subject: "economics" as const,
      stem: q.stem.trim(),
      maxPoints,
      statements: q.statements.map((s, j) => ({
        id: `${mockId}-q${index}-s${j + 1}`,
        text: s.text.trim(),
        isTrue: s.isTrue,
        explanation: s.explanation.trim(),
      })),
    };
  });
}

function chapterTitleLine(chapters: number[]): string {
  const enabled = getEnabledEconomicsChapters();
  return chapters
    .map((n) => {
      const c = enabled.find((e) => e.num === n);
      return c ? `Ch.${c.num}` : `Ch.${n}`;
    })
    .join(", ");
}

/**
 * Generate a Custom Mock using only platform textbook material + Full Course
 * Economics cases for style/difficulty, then persist it for the user.
 */
export const generateCustomMock = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => Input.parse(d))
  .handler(async ({ data, context }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("Missing LOVABLE_API_KEY");

    if (!CUSTOM_MOCK_QUESTION_COUNTS.includes(data.questionCount)) {
      throw new Error("Invalid question count");
    }

    const enabled = getEnabledEconomicsChapters();
    const enabledNums = new Set(enabled.map((c) => c.num));
    const chapters = [...new Set(data.chapters)].filter((n) => enabledNums.has(n)).sort((a, b) => a - b);
    if (chapters.length === 0) {
      throw new Error("Select at least one enabled Economics chapter (2–5).");
    }

    const chapterConfigs = enabled.filter((c) => chapters.includes(c.num));
    const subsectionFilters = chapters.map(String);

    const { data: caseRows, error: caseError } = await context.supabase
      .from("economics_cases")
      .select(
        "case_id, subsection, context, statements, answer_key, difficulty_level, tactical_explanations",
      )
      .eq("tier", "full")
      .in("subsection", subsectionFilters)
      .order("sort_order", { ascending: true });

    if (caseError) throw new Error(`Failed to load Full Course cases: ${caseError.message}`);
    const allCases = (caseRows ?? []) as StyleExampleCase[];
    if (allCases.length < 3) {
      throw new Error(
        "Not enough Full Course questions in the selected chapters to learn style and difficulty.",
      );
    }

    const styleExamples = pickStyleExamples(allCases, Math.min(6, allCases.length));

    // Textbook RAG — only platform book embeddings.
    const textbookPassages: string[] = [];
    {
      const queryParts = [
        ...chapterConfigs.map((c) => `Chapter ${c.num}: ${c.title}`),
        ...styleExamples.map((ex) => ex.context.slice(0, 280)),
      ];
      const query = queryParts.join("\n").slice(0, 3500);
      const qVec = await embedQuery(query, key, book.dim);
      if (qVec) {
        const hits = topK(qVec, 12).filter((t) => t.score > 0.08);
        for (const h of hits) {
          const chunk = book.chunks[h.idx]?.trim();
          if (chunk) textbookPassages.push(chunk);
        }
      }
    }

    // Fallback knowledge: pull definitions/explanations from Full Course cases when RAG is thin.
    if (textbookPassages.length < 4) {
      for (const ex of allCases.slice(0, 10)) {
        const block = [
          ex.context,
          ...ex.statements.map((s, i) => `${s} (${ex.answer_key[i] ? "T" : "F"})`),
          ...ex.tactical_explanations,
        ]
          .filter(Boolean)
          .join("\n");
        if (block.trim()) textbookPassages.push(block.slice(0, 1200));
      }
    }

    const prompt = buildCustomMockPrompt({
      chapters: chapterConfigs,
      questionCount: data.questionCount,
      textbookPassages: textbookPassages.slice(0, 14),
      styleExamples,
    });

    const gateway = createLovableAiGatewayProvider(key, { structuredOutputs: true });

    let generated: z.infer<typeof OutputSchema>;
    try {
      const { output } = await generateText({
        model: gateway("openai/gpt-5.5"),
        output: Output.object({ schema: OutputSchema }),
        prompt,
      });
      if (!output) throw new Error("Empty model output");
      generated = output;
    } catch (error) {
      if (NoObjectGeneratedError.isInstance(error)) {
        try {
          const match = error.text?.match(/\{[\s\S]*\}/);
          if (match) {
            generated = OutputSchema.parse(JSON.parse(match[0]));
          } else {
            throw error;
          }
        } catch {
          throw new Error("AI generation failed to produce valid exam questions. Please try again.");
        }
      } else {
        throw error;
      }
    }

    if (generated.questions.length !== data.questionCount) {
      // Soft trim / reject if wildly off
      if (generated.questions.length > data.questionCount) {
        generated = { questions: generated.questions.slice(0, data.questionCount) };
      } else {
        throw new Error(
          `AI returned ${generated.questions.length} questions instead of ${data.questionCount}. Try again.`,
        );
      }
    }

    const durationMinutes = durationMinutesForQuestionCount(data.questionCount);
    const pointsTotal = pointsTotalForEconomicsQuestions(data.questionCount);
    const title = `Custom Economics Mock · ${chapterTitleLine(chapters)} · ${data.questionCount}Q`;

    // Insert first to get id, then stamp question ids.
    const { data: inserted, error: insertError } = await context.supabase
      .from("custom_mocks")
      .insert({
        user_id: context.userId,
        subject: "economics",
        title,
        chapters: chapters.map(String),
        question_count: data.questionCount,
        duration_minutes: durationMinutes,
        points_total: pointsTotal,
        questions: [],
      })
      .select("id")
      .single();

    if (insertError || !inserted) {
      throw new Error(insertError?.message ?? "Failed to save custom mock");
    }

    const questions = toExamQuestions(inserted.id, generated.questions);

    const { data: saved, error: updateError } = await context.supabase
      .from("custom_mocks")
      .update({ questions: questions as never })
      .eq("id", inserted.id)
      .eq("user_id", context.userId)
      .select(
        "id, user_id, subject, title, chapters, question_count, duration_minutes, points_total, questions, created_at",
      )
      .single();

    if (updateError || !saved) {
      throw new Error(updateError?.message ?? "Failed to save generated questions");
    }

    return {
      id: saved.id as string,
      examId: `custom-${saved.id}`,
      title: saved.title as string,
      chapters: (saved.chapters as string[]) ?? [],
      questionCount: saved.question_count as number,
      durationMinutes: saved.duration_minutes as number,
      pointsTotal: Number(saved.points_total),
      questions: questions,
      createdAt: saved.created_at as string,
    };
  });
