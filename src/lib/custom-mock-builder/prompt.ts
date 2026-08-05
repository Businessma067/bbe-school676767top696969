import type { CustomMockChapter } from "@/config/custom-mock-builder";

export type StyleExampleCase = {
  case_id: string;
  subsection: string;
  context: string;
  statements: string[];
  answer_key: boolean[];
  difficulty_level: string;
  tactical_explanations: string[];
};

export function buildCustomMockPrompt(input: {
  chapters: CustomMockChapter[];
  questionCount: number;
  textbookPassages: string[];
  styleExamples: StyleExampleCase[];
}): string {
  const chapterList = input.chapters
    .map((c) => `Chapter ${c.num}: ${c.title}`)
    .join("\n");

  const allowedNums = input.chapters.map((c) => c.num).join(", ");

  const examples = input.styleExamples
    .map((ex, i) => {
      const stmts = ex.statements
        .map((s, j) => {
          const truth = ex.answer_key[j] ? "TRUE" : "FALSE";
          const expl = ex.tactical_explanations[j] ?? "";
          return `  ${j + 1}. [${truth}] ${s}${expl ? `\n     Explanation: ${expl}` : ""}`;
        })
        .join("\n");
      return `--- STYLE EXAMPLE ${i + 1} (${ex.case_id}, difficulty ${ex.difficulty_level}, Ch.${ex.subsection}) ---
Scenario:
${ex.context}

Statements:
${stmts}`;
    })
    .join("\n\n");

  const passages = input.textbookPassages.length
    ? input.textbookPassages.map((p, i) => `[Passage ${i + 1}]\n${p}`).join("\n\n---\n\n")
    : "(No textbook passages retrieved — rely only on Full Course case material below and the chapter titles.)";

  return `You are an expert WU BBE Economics exam author writing for BBE School.

Your ONLY knowledge sources are:
1) The official textbook passages provided below (Introduction to Business and Economics by Bettina Fuhrmann).
2) The Full Course style examples from this platform (selected chapters only).

STRICT BOUNDARIES:
- Generate questions ONLY for chapters: ${allowedNums}.
- NEVER introduce concepts, formulas, definitions, or terminology not taught in the selected chapters / provided material.
- NEVER use general internet knowledge beyond what appears in the material below.
- Match the EXACT difficulty of the Full Course examples (typically around the shown difficulty ratings). Do NOT simplify. Do NOT make harder.
- Match the EXACT writing style, formatting, scenario length, statement length, and exam quality of the examples.
- Create COMPLETELY NEW business scenarios, NEW numerical values, NEW calculations, NEW situations.
- NEVER copy existing questions. NEVER paraphrase existing questions. Never reuse firm names, numbers, or near-identical stems from the examples.

FORMAT (mandatory for every question):
- One scenario / stem (business situation).
- Exactly FIVE statements about that scenario.
- Each statement must be clearly TRUE or FALSE based only on the provided material + the scenario facts.
- Mix true/false realistically (typically 1–4 true statements, never 0 or 5 unless an example does so).
- Provide a short tactical explanation for each statement (why it is true or false), in the same terse exam-prep tone as the examples.

SELECTED CHAPTERS:
${chapterList}

===== TEXTBOOK MATERIAL (platform only) =====
${passages}
============================================

===== FULL COURSE STYLE & DIFFICULTY EXAMPLES (do not copy) =====
${examples}
===============================================================

TASK:
Generate exactly ${input.questionCount} brand-new Economics exam questions that a student could not tell apart from manually written Full Course questions.

Return a JSON object with this exact shape:
{
  "questions": [
    {
      "stem": "scenario text…",
      "statements": [
        { "text": "…", "isTrue": true, "explanation": "…" },
        { "text": "…", "isTrue": false, "explanation": "…" },
        { "text": "…", "isTrue": true, "explanation": "…" },
        { "text": "…", "isTrue": false, "explanation": "…" },
        { "text": "…", "isTrue": false, "explanation": "…" }
      ]
    }
  ]
}

Rules for the JSON:
- "questions" length must be exactly ${input.questionCount}.
- Each "statements" array must have exactly 5 items.
- "isTrue" must be boolean.
- Explanations must not reveal that the question was AI-generated.`;
}
