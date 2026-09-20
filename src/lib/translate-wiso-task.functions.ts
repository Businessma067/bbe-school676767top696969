import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
import { generateText, Output, NoObjectGeneratedError } from "ai";
import { createLovableAiGatewayProvider } from "./ai-gateway.server";

const TaskPayload = z.object({
  title: z.string(),
  context: z.string(),
  statements: z.array(z.string()),
  tactical_explanations: z.array(z.string()),
  // Structured-output JSON Schema requires every property key in `required`
  // (OpenAI rejects .optional() fields). Always send "" when unused.
  solution_overview: z.string(),
  passage: z.string(),
  /** Passage locator snippets — must remain verbatim substrings of `passage` after translation. */
  highlights: z.array(z.string()),
});

export type WisoTaskTranslatePayload = z.infer<typeof TaskPayload>;

/**
 * Translate one WiSo economics / German-text task (stem, statements, explanations,
 * optional reading passage) from German into clear student English.
 * Math does not use this — it swaps to the BBE English bank instead.
 */
export const translateWisoTask = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) =>
    TaskPayload.parse({
      ...(d as Record<string, unknown>),
      solution_overview:
        typeof (d as { solution_overview?: unknown })?.solution_overview === "string"
          ? (d as { solution_overview: string }).solution_overview
          : "",
      passage:
        typeof (d as { passage?: unknown })?.passage === "string"
          ? (d as { passage: string }).passage
          : "",
      highlights: Array.isArray((d as { highlights?: unknown })?.highlights)
        ? (d as { highlights: string[] }).highlights
        : [],
    }),
  )
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("Missing LOVABLE_API_KEY");

    const gateway = createLovableAiGatewayProvider(key, { structuredOutputs: true });
    const n = data.statements.length;

    const prompt = `You translate WiSo (WU Vienna) exam practice content from German into clear, natural English for students who understand the subject but may struggle with German.

RULES:
- Return JSON with the SAME fields and the SAME array lengths.
- statements must have exactly ${n} items.
- tactical_explanations must have exactly ${n} items (one per statement, same order).
- highlights must have the same length as the German highlights array (${data.highlights.length}).
- Each highlight MUST appear character-for-character inside the translated passage (for passage locators).
- Preserve all math/KaTeX ($...$, $$...$$), markdown emphasis, numbers, proper names, and table/pipe structure.
- Preserve True/False verdict lines (translate "Richtig"/"Falsch"/"wahr"/"falsch" into True/False naturally).
- Do NOT add commentary, notes, or extra statements.
- Do NOT invent content that is not in the German source.
- If a field is empty, return an empty string for that field.
- Keep paragraph markers like (1) (2) in reading passages.

German source JSON:
${JSON.stringify(data)}`;

    try {
      const { output } = await generateText({
        model: gateway("openai/gpt-5.5"),
        output: Output.object({ schema: TaskPayload }),
        prompt,
      });
      // Enforce array lengths — model sometimes drifts.
      return {
        title: output.title || data.title,
        context: output.context || data.context,
        statements: padArray(output.statements, data.statements),
        tactical_explanations: padArray(output.tactical_explanations, data.tactical_explanations),
        solution_overview: output.solution_overview || data.solution_overview || "",
        passage: output.passage || data.passage || "",
        highlights: padArray(output.highlights ?? [], data.highlights ?? []),
      };
    } catch (error) {
      if (NoObjectGeneratedError.isInstance(error)) {
        try {
          const match = error.text?.match(/\{[\s\S]*\}/);
          if (match) {
            const parsed = TaskPayload.parse(JSON.parse(match[0]));
            return {
              title: parsed.title || data.title,
              context: parsed.context || data.context,
              statements: padArray(parsed.statements, data.statements),
              tactical_explanations: padArray(
                parsed.tactical_explanations,
                data.tactical_explanations,
              ),
              solution_overview: parsed.solution_overview || data.solution_overview || "",
              passage: parsed.passage || data.passage || "",
              highlights: padArray(parsed.highlights ?? [], data.highlights ?? []),
            };
          }
        } catch {
          /* ignore */
        }
      }
      throw error;
    }
  });

function padArray(translated: string[], fallback: string[]): string[] {
  return fallback.map((orig, i) => {
    const t = translated[i];
    return typeof t === "string" && t.trim() ? t : orig;
  });
}
