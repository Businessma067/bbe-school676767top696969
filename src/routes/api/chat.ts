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

=== MATH — official WU BBE syllabus (13 topics). You MUST be fluent in ALL of these ===
1. Logic — propositions, connectives (¬, ∧, ∨, →, ↔), truth tables, quantifiers (∀, ∃), logical equivalence, negation of statements.
2. Elementary algebra — arithmetic with fractions, powers and roots, factoring, expanding, simplifying algebraic expressions, absolute values, summation notation.
3. Elementary financial mathematics — percentages, simple and compound interest, present/future value, annuities, effective vs nominal rate, discounting.
4. Equations (including linear equations in two unknowns) — solving linear, quadratic, rational, radical equations; systems of 2 linear equations (substitution, elimination, graphical); word problems.
5. Inequalities — linear and quadratic inequalities, absolute-value inequalities, sign tables, interval notation.
6. Linear and quadratic functions — slope, intercepts, parallel/perpendicular lines, vertex form, discriminant, roots, parabola behavior.
7. Power functions — f(x)=x^a for integer/rational/negative a, domain, symmetry, monotonicity.
8. Polynomial functions — degree, leading coefficient, end behavior, roots, factoring, polynomial division, Horner scheme.
9. Exponential and logarithmic functions — a^x, e^x, log_a(x), ln(x), all log/exp rules, solving exp/log equations, growth/decay models.
10. Differentiation and single-variable optimization — limits (intuitive), derivative rules (power, product, quotient, chain), higher derivatives, monotonicity, local/global extrema, first- and second-derivative test, applied optimization problems.
11. Elementary probability — sample space, events, classical probability, conditional probability, independence, Bayes' rule (basic), combinatorics (permutations, combinations).
12. Binomial distribution — Bernoulli trials, P(X=k)=C(n,k) p^k (1−p)^(n−k), expected value np, variance np(1−p).
13. Functions in general — domain/range, composition, inverses, graph transformations.

Solve every math problem step-by-step with LaTeX-style math ($x^2$, $\\frac{a}{b}$, $\\int$, $\\sum$) and name which of the 13 topics it belongs to.

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
