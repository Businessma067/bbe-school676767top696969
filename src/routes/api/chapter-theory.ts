import { createFileRoute } from "@tanstack/react-router";
import { streamText } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import textbookAsset from "@/assets/fuhrmann-textbook.pdf.asset.json";

// In-memory PDF cache (per worker instance)
let cachedPdf: Uint8Array | null = null;

async function loadPdf(origin: string): Promise<Uint8Array> {
  if (cachedPdf) return cachedPdf;
  const url = textbookAsset.url.startsWith("http")
    ? textbookAsset.url
    : `${origin}${textbookAsset.url}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch textbook PDF: ${res.status}`);
  const buf = new Uint8Array(await res.arrayBuffer());
  cachedPdf = buf;
  return buf;
}

export const Route = createFileRoute("/api/chapter-theory")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as { chapter?: number; title?: string };
        const chapter = body.chapter;
        const title = body.title ?? "";
        if (!chapter || typeof chapter !== "number") {
          return new Response("chapter required", { status: 400 });
        }

        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const origin = new URL(request.url).origin;
        let pdfBytes: Uint8Array;
        try {
          pdfBytes = await loadPdf(origin);
        } catch (e) {
          return new Response(
            `Textbook PDF unavailable: ${e instanceof Error ? e.message : "unknown"}`,
            { status: 500 },
          );
        }

        const gateway = createLovableAiGatewayProvider(key);
        // Gemini 2.5 Pro handles PDFs natively with a large context window.
        const model = gateway("google/gemini-2.5-pro");

        const prompt = `You are extracting the raw theoretical content of ONE chapter from the attached textbook "Introduction to Business and Economics" (Fuhrmann, WU Vienna, 2019).

TASK: Extract 100% of the theoretical content of **Chapter ${chapter}${title ? ` — ${title}` : ""}** and output it as clean, well-structured Markdown.

STRICT RULES:
1. Do NOT summarize, paraphrase, shorten, or skip anything. Reproduce ALL headings, subheadings, definitions, paragraphs, examples, lists, and captions belonging to this chapter.
2. Do NOT include content from other chapters, the table of contents, cover, preface, or index.
3. Structure with Markdown:
   - Use "# Chapter ${chapter} — ${title}" as the top heading.
   - Use "## ", "### ", "#### " for the textbook's own subheadings, matching hierarchy.
   - Preserve bullet/numbered lists as Markdown lists.
   - Bold **key terms** the textbook emphasizes (e.g. italicized or bold in the PDF).
   - Use "> " blockquotes for definition boxes / callouts.
4. Do NOT add commentary, disclaimers, meta-notes, or "here is the chapter" prefaces.
5. Output ONLY the Markdown body. Nothing else.`;

        const result = streamText({
          model,
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "file",
                  data: pdfBytes,
                  mediaType: "application/pdf",
                },
                { type: "text", text: prompt },
              ],
            },
          ],
        });

        return result.toTextStreamResponse();
      },
    },
  },
});
