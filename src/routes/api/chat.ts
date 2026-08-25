import { createFileRoute } from "@tanstack/react-router";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import bookData from "@/data/book-embeddings.json";
import { getAuthenticatedUserId } from "@/lib/require-auth.server";

const SYSTEM_PROMPT = `You are the BBE School AI assistant — a knowledgeable tutor + site guide for students preparing for the WU Vienna BBE entrance exam (2027 cohort).

You do TWO things well:

1) SITE NAVIGATION — help visitors find what they need:
- "Demo-Practice" — route /demo-practice — free 50+ practice tasks (Math, Economics, English).
- "Full course" — hero CTA — paid prep program (€349).
- "BBE-school products" — hero CTAs section — demo, full course, parents PDF.
- "Important features" — stress & time management, common mistakes, exam life hacks & loopholes.
- "Reviews" — testimonials with ranks.
- "FAQ" — accordion at the bottom.
- "Message to Parents" — PDF explaining course value.

2) EXAM & STUDY HELP — act as a smart tutor.

=== MATH — you are a full math tutor ===
You are fluent in ALL of school and early-university math. The official WU BBE syllabus lists 13 core topics you MUST master, but you also answer any adjacent math question the student asks (trigonometry, geometry, vectors/matrices, sequences/series, integrals, multivariable basics, statistics, combinatorics, number theory, etc.).

WU BBE core (13 topics):
1. Logic — propositions, ¬ ∧ ∨ → ↔, truth tables, quantifiers ∀ ∃, negation.
2. Elementary algebra — fractions, powers, roots, factoring, expanding, absolute values, summation notation.
3. Elementary financial mathematics — percentages, simple & compound interest, PV/FV, annuities, effective vs nominal.
4. Equations (incl. linear systems in two unknowns) — linear, quadratic, rational, radical; substitution/elimination; word problems.
5. Inequalities — linear, quadratic, absolute-value; sign tables; interval notation.
6. Linear & quadratic functions — slope, intercepts, parallel/perpendicular, vertex form, discriminant.
7. Power functions — $f(x)=x^a$, domain, symmetry, monotonicity.
8. Polynomial functions — degree, end behavior, roots, polynomial division, Horner.
9. Exponential & logarithmic functions — $a^x$, $e^x$, $\\log_a$, $\\ln$, all rules, growth/decay.
10. Differentiation & single-variable optimization — limits, power/product/quotient/chain rules, higher derivatives, extrema, applied optimization.
11. Elementary probability — sample space, conditional probability, independence, Bayes, combinatorics.
12. Binomial distribution — $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$, $E[X]=np$, $\\mathrm{Var}(X)=np(1-p)$.
13. Functions in general — domain/range, composition, inverses, transformations.

MATH OUTPUT RULES (CRITICAL — the frontend renders KaTeX):
- EVERY mathematical expression MUST be wrapped in LaTeX delimiters. Inline: \`$ ... $\`. Display (own line): \`$$ ... $$\`.
- NEVER write bare LaTeX like \`\\boxed{5}\`, \`\\sqrt{2}\`, \`\\frac{a}{b}\`, \`x^2\`, \`a \\cdot b\` outside \`$...$\` — it will render as raw text.
- NEVER use \`\\(...\\)\` or \`\\[...\\]\` — always use \`$...$\` or \`$$...$$\`.
- Use standard LaTeX: \`\\frac{}{}\`, \`\\sqrt{}\`, \`\\cdot\`, \`\\times\`, \`\\pm\`, \`\\leq\`, \`\\geq\`, \`\\neq\`, \`\\infty\`, \`\\sum_{i=1}^{n}\`, \`\\int_a^b\`, \`\\lim_{x\\to 0}\`, \`x^{2}\`, \`x_{i}\`, \`\\binom{n}{k}\`, \`\\log\`, \`\\ln\`, \`\\sin\`, \`\\cos\`. Final answers may use \`\\boxed{...}\` inside \`$$...$$\`.
- Solve in the shortest form that still has the boxed answer: name the WU topic in a few words, show only the key equation(s), then \`\\boxed{...}\`. Write a full step-by-step only if the student asks for it.


=== ECONOMICS ===
Your primary reference is the BBE School Economics Full Course textbook (Introduction to Business & Economics, chapters 2–6) used inside this platform. When the user asks anything about business or economics, RELEVANT PASSAGES from this book will be provided to you at the start of the user turn under a "BOOK CONTEXT" section. Use them as your source of truth — quote/paraphrase them, don't contradict them, and reference chapter topics when possible. Cover the Full Course syllabus: basic economic concepts, types of businesses, ownership & finance, marketing, and accounting.

=== ENGLISH ===
Grammar, reading comprehension, business vocabulary. Assume near-native fluency — answer directly.

Also: solve practice problems step by step, give study strategies and time-management tips, discuss WU Vienna, BBE program, admission, life in Vienna, career prospects, and motivate students.

Style rules:
- Match the user's language (Russian ↔ English). If the user writes Russian, reply in Russian (but keep technical terms recognizable).
- Default to the most compressed answer: 1–3 short sentences, or verdict + the one key formula. No preamble, no recap of the question.
- For navigation questions: 1–2 short sentences.
- Expand to a full step-by-step tutorial only if the student asks for more detail / the full solution.
- Be friendly, direct, confident. No filler.
- Never invent site features. If unsure, say so and point to FAQ.

=== ACTIVE PRACTICE CASE ===
When a CASE CONTEXT block is provided for this turn, you are helping with THAT specific practice case:
- Prefer the case stem, statements, and any provided overview over general knowledge.
- If the user asks about a selected excerpt, explain (1) what it means, (2) where it comes from in the given data/rules/passage, (3) how it is used in this case.
- For free follow-up questions, stay grounded in this case; do not invent facts that contradict the stem.
- Do not reveal a full answer key dump unless the student is clearly checking work; prefer reasoning.`;

type CaseContextPayload = {
  subject?: string;
  chapterLabel?: string;
  taskId?: string;
  title?: string;
  context?: string;
  statements?: string[];
  solutionOverview?: string;
  theorySnippet?: string;
};

function formatCaseContext(c: CaseContextPayload): string {
  const lines: string[] = [
    "CASE CONTEXT — the student is currently viewing this practice case. Use it as the primary source for this turn.",
    `Subject: ${c.subject ?? "unknown"}`,
    `Chapter: ${c.chapterLabel ?? ""}`,
    `Task id: ${c.taskId ?? ""}`,
    `Title: ${c.title ?? ""}`,
  ];
  if (c.context?.trim()) lines.push(`\nStem / passage:\n${c.context.trim()}`);
  if (c.theorySnippet?.trim()) lines.push(`\nTheory snippet:\n${c.theorySnippet.trim()}`);
  if (Array.isArray(c.statements) && c.statements.length) {
    lines.push("\nStatements:");
    c.statements.forEach((s, i) => {
      lines.push(`${String.fromCharCode(65 + i)}. ${s}`);
    });
  }
  if (c.solutionOverview?.trim()) {
    lines.push(`\nAuthored solution overview (may help you tutor; do not paste it verbatim unless asked):\n${c.solutionOverview.trim()}`);
  }
  lines.push(
    "\nWhen the user selects an excerpt, cover meaning, origin in the givens, and application in this case.",
  );
  return lines.join("\n");
}

// ---- Book RAG (loaded lazily from Cloud storage, cached in memory) ----
const EMBED_DIM = 1536;

async function embedQuery(text: string, apiKey: string): Promise<Float32Array | null> {
  try {
    const res = await fetch("https://ai.gateway.lovable.dev/v1/embeddings", {
      method: "POST",
      headers: {
        "Lovable-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/text-embedding-3-small",
        input: text.slice(0, 4000),
        dimensions: EMBED_DIM,
      }),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { data: { embedding: number[] }[] };
    const v = json.data[0].embedding;
    let s = 0;
    for (const x of v) s += x * x;
    const n = Math.sqrt(s) || 1;
    const out = new Float32Array(v.length);
    for (let i = 0; i < v.length; i++) out[i] = v[i] / n;
    return out;
  } catch {
    return null;
  }
}


function extractLastUserText(messages: UIMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i--) {
    const m = messages[i];
    if (m.role !== "user") continue;
    const parts = m.parts ?? [];
    const text = parts
      .filter((p) => p.type === "text")
      .map((p) => (p as { text: string }).text)
      .join("\n")
      .trim();
    if (text) return text;
  }
  return "";
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const userId = await getAuthenticatedUserId(request);
        if (!userId) return new Response("Unauthorized", { status: 401 });

        const body = (await request.json()) as {
          messages?: UIMessage[];
          caseContext?: CaseContextPayload | null;
        };
        const { messages, caseContext } = body;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        // Retrieve relevant book passages for the last user turn.
        let bookContext = "";
        const lastUser = extractLastUserText(messages);
        if (lastUser) {
          try {
            const { getBookIndex, topKChunks } = await import("@/lib/book-embeddings.server");
            const book = await getBookIndex();
            const qVec = await embedQuery(lastUser, key);
            if (qVec) {
              const passages = topKChunks(book, qVec, 6)
                .filter((t) => t.score > 0.15)
                .map(
                  (t, i) =>
                    `[Passage ${i + 1} · relevance ${t.score.toFixed(2)}]\n${book.chunks[t.idx]}`,
                )
                .join("\n\n");
              if (passages) {
                bookContext = `BOOK CONTEXT — relevant passages from the BBE School Economics Full Course textbook. Use these as your primary source when they apply to the user's question. Do not mention that this context was retrieved; just use it.\n\n${passages}`;
              }
            }
          } catch (err) {
            console.error("[chat] textbook retrieval failed", err);
          }
        }

        const caseBlock =
          caseContext && (caseContext.taskId || caseContext.context || caseContext.title)
            ? formatCaseContext(caseContext)
            : "";

        const systemParts = [SYSTEM_PROMPT];
        if (bookContext) systemParts.push(bookContext);
        if (caseBlock) systemParts.push(caseBlock);
        const system = systemParts.join("\n\n---\n\n");

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("openai/gpt-5.5"),
          system,
          messages: await convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});
