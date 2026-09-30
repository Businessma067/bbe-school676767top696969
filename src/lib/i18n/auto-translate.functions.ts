import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getAutoLanguage } from "@/lib/i18n/languages";

const Input = z.object({
  lang: z.string().min(2).max(12),
  texts: z.array(z.string().min(1).max(1800)).min(1).max(40),
});

function readTranslation(part: unknown): string {
  if (typeof part === "string") return part.trim();
  if (Array.isArray(part) && typeof part[0] === "string") return part[0].trim();
  return "";
}

async function googleTranslate(target: string, texts: string[]): Promise<(string | null)[]> {
  const body = new URLSearchParams();
  for (const text of texts) body.append("q", text);
  const response = await fetch(
    `https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=en&tl=${encodeURIComponent(target)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: AbortSignal.timeout(12_000),
    },
  );
  if (!response.ok) throw new Error(`Translate failed (${response.status})`);
  const payload = (await response.json()) as unknown;
  if (!Array.isArray(payload) || payload.length !== texts.length) return texts.map(() => null);
  return payload.map((part) => readTranslation(part) || null);
}

async function myMemoryTranslate(target: string, texts: string[]): Promise<(string | null)[]> {
  const out: (string | null)[] = [];
  for (const text of texts.slice(0, 12)) {
    if (text.length > 450) {
      out.push(null);
      continue;
    }
    try {
      const url = new URL("https://api.mymemory.translated.net/get");
      url.searchParams.set("q", text);
      url.searchParams.set("langpair", `en|${target}`);
      const response = await fetch(url, { signal: AbortSignal.timeout(8_000) });
      const data = (await response.json()) as { responseData?: { translatedText?: string } };
      const value = data.responseData?.translatedText?.trim() ?? "";
      out.push(value && !/MYMEMORY WARNING/i.test(value) && value !== text ? value : null);
    } catch {
      out.push(null);
    }
  }
  while (out.length < texts.length) out.push(null);
  return out;
}

/** Keyless batch translate for languages that have no edited dictionary. */
export const translateUiBatch = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    const parsed = Input.parse(data);
    const spec = getAutoLanguage(parsed.lang);
    if (!spec) throw new Error("Unsupported language");
    const total = parsed.texts.reduce((sum, text) => sum + text.length, 0);
    if (total > 12_000) throw new Error("Batch too large");
    return { lang: spec.code, google: spec.google, texts: parsed.texts };
  })
  .handler(async ({ data }) => {
    try {
      const translations = await googleTranslate(data.google, data.texts);
      if (translations.some((item) => item)) return { translations };
    } catch {
      /* keyless endpoint failed; try the public fallback */
    }
    return { translations: await myMemoryTranslate(data.google, data.texts) };
  });
