import { createFileRoute } from "@tanstack/react-router";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM_PROMPT = `You are the BBE School site assistant. BBE School prepares students for the WU Vienna BBE entrance exam (2027 cohort). Help visitors navigate the site and answer questions about the product.

Site sections and where to click:
- "Demo-Practice" — route /demo-practice — free 50+ practice tasks to try the platform.
- "Full course" — hero CTA button — the paid preparation program to pass the exam confidently (€349 mentioned on the page).
- "BBE-school products" — hero CTAs section — all offerings: demo practice, full course, message to parents PDF.
- "Important features" — features strip in the hero — stress & time management, common mistakes, exam life hacks & loopholes.
- "Reviews" — testimonials section — real student reviews with ranks.
- "FAQ" — accordion at the bottom — common questions.
- "Message to Parents" — PDF link in hero — explains why the course is worth it.

Style: concise (1–3 short sentences), friendly, Russian if the user writes Russian, otherwise English. When a user asks where something is, name the menu item and, if useful, mention scrolling or the /demo-practice route. Do not invent features not listed above — if unsure, say you're not sure and suggest checking FAQ or contacting support.`;

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

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});
