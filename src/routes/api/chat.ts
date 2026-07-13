import { createFileRoute } from "@tanstack/react-router";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import bookData from "@/data/book-embeddings.json";

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
- Solve step by step, name which of the 13 WU topics the problem belongs to (if it fits), and state the final answer boxed.


=== ECONOMICS ===
Your primary reference is the official WU BBE textbook "Introduction to Business and Economics" by Bettina Fuhrmann (2019, Verlag Jugend & Volk). When the user asks anything about business or economics, RELEVANT PASSAGES from this book will be provided to you at the start of the user turn under a "BOOK CONTEXT" section. Use them as your source of truth — quote/paraphrase them, don't contradict them, and reference chapter topics when possible. Cover micro (supply/demand, elasticity, consumer/producer, market structures, game theory basics, externalities), macro (GDP, inflation, unemployment, monetary/fiscal policy, growth, international trade), and business fundamentals (firm types, accounting identity, balance sheet vs income statement, break-even, marketing 4P, SWOT).

=== ENGLISH ===
Grammar, reading comprehension, business vocabulary. Assume near-native fluency — answer directly.

Also: solve practice problems step by step, give study strategies and time-management tips, discuss WU Vienna, BBE program, admission, life in Vienna, career prospects, and motivate students.

Style rules:
- Match the user's language (Russian ↔ English). If the user writes Russian, reply in Russian (but keep technical terms recognizable).
- For navigation questions: 1–3 short sentences.
- For study/exam/explanation questions: be as detailed as needed — markdown, lists, math notation, step-by-step.
- Be friendly, direct, confident. No filler.
- Never invent site features. If unsure, say so and point to FAQ.`;

// ---- Book RAG (in-memory) ----
type BookData = { dim: number; count: number; chunks: string[]; embeddings_b64: string };
const book = bookData as unknown as BookData;

// Decode embeddings once at cold start into a flat Float32Array (already L2-normalized).
function decodeEmbeddings(b64: string): Float32Array {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Float32Array(bytes.buffer);
}
const BOOK_VECTORS = decodeEmbeddings(book.embeddings_b64);
const DIM = book.dim;

function l2Normalize(v: number[]): Float32Array {
  let s = 0;
  for (const x of v) s += x * x;
  const n = Math.sqrt(s) || 1;
  const out = new Float32Array(v.length);
  for (let i = 0; i < v.length; i++) out[i] = v[i] / n;
  return out;
}

function topKChunks(queryVec: Float32Array, k = 6): { idx: number; score: number }[] {
  const scores = new Array(book.count);
  for (let i = 0; i < book.count; i++) {
    let dot = 0;
    const base = i * DIM;
    for (let d = 0; d < DIM; d++) dot += queryVec[d] * BOOK_VECTORS[base + d];
    scores[i] = { idx: i, score: dot };
  }
  scores.sort((a, b) => b.score - a.score);
  return scores.slice(0, k);
}

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
        dimensions: DIM,
      }),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { data: { embedding: number[] }[] };
    return l2Normalize(json.data[0].embedding);
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
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        // Retrieve relevant book passages for the last user turn.
        let bookContext = "";
        const lastUser = extractLastUserText(messages);
        if (lastUser) {
          const qVec = await embedQuery(lastUser, key);
          if (qVec) {
            const top = topKChunks(qVec, 6);
            const passages = top
              .filter((t) => t.score > 0.15)
              .map(
                (t, i) =>
                  `[Passage ${i + 1} · relevance ${t.score.toFixed(2)}]\n${book.chunks[t.idx]}`,
              )
              .join("\n\n");
            if (passages) {
              bookContext = `BOOK CONTEXT — relevant passages from "Introduction to Business and Economics" (Fuhrmann, WU, 2019). Use these as your primary source when they apply to the user's question. Do not mention that this context was retrieved; just use it.\n\n${passages}`;
            }
          }
        }

        const system = bookContext
          ? `${SYSTEM_PROMPT}\n\n---\n\n${bookContext}`
          : SYSTEM_PROMPT;

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
