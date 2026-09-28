import { translateUiBatch } from "@/lib/i18n/auto-translate.functions";
import { getAutoLanguage, type AutoLang } from "@/lib/i18n/languages";

const CACHE_KEY = "bbe.autotr.v1";
const CACHE_LIMIT = 180_000;

type ChromeTranslator = {
  translate: (input: string) => Promise<string>;
};

type ChromeTranslatorCtor = {
  availability: (options: {
    sourceLanguage: string;
    targetLanguage: string;
  }) => Promise<"unavailable" | "downloadable" | "downloading" | "available">;
  create: (options: {
    sourceLanguage: string;
    targetLanguage: string;
  }) => Promise<ChromeTranslator>;
};

const memory = new Map<string, Map<string, string>>();
const inflight = new Set<string>();
const failed = new Set<string>();
const chromeReady = new Map<string, Promise<ChromeTranslator | null>>();

function pairKey(lang: string, text: string): string {
  return `${lang}\u0000${text}`;
}

function cacheFor(lang: string): Map<string, string> {
  let table = memory.get(lang);
  if (table) return table;
  table = new Map();
  memory.set(lang, table);
  if (typeof localStorage === "undefined") return table;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    const stored = raw ? (JSON.parse(raw) as Record<string, Record<string, string>>) : {};
    const saved = stored[lang];
    if (saved) {
      for (const [source, value] of Object.entries(saved)) {
        if (typeof value === "string" && value) table.set(source, value);
      }
    }
  } catch {
    /* ignore broken cache */
  }
  return table;
}

function persist(lang: string) {
  if (typeof localStorage === "undefined") return;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    const stored = raw ? (JSON.parse(raw) as Record<string, Record<string, string>>) : {};
    stored[lang] = Object.fromEntries(cacheFor(lang));
    const json = JSON.stringify(stored);
    if (json.length > CACHE_LIMIT) {
      stored[lang] = Object.fromEntries([...cacheFor(lang)].slice(-80));
    }
    localStorage.setItem(CACHE_KEY, JSON.stringify(stored));
  } catch {
    /* quota or private mode */
  }
}

export function peekAutoTranslation(lang: string, text: string): string | null {
  return cacheFor(lang).get(text) ?? null;
}

function remember(lang: string, text: string, value: string) {
  cacheFor(lang).set(text, value);
  persist(lang);
}

function chromeCtor(): ChromeTranslatorCtor | null {
  const candidate = (globalThis as { Translator?: ChromeTranslatorCtor }).Translator;
  return candidate && typeof candidate.create === "function" ? candidate : null;
}

async function getChromeTranslator(chromeCode: string): Promise<ChromeTranslator | null> {
  const cached = chromeReady.get(chromeCode);
  if (cached) return cached;
  const pending = (async () => {
    const Ctor = chromeCtor();
    if (!Ctor) return null;
    try {
      const availability = await Ctor.availability({
        sourceLanguage: "en",
        targetLanguage: chromeCode,
      });
      if (availability !== "available") return null;
      return await Ctor.create({ sourceLanguage: "en", targetLanguage: chromeCode });
    } catch {
      return null;
    }
  })();
  chromeReady.set(chromeCode, pending);
  return pending;
}

async function translateWithChrome(
  translator: ChromeTranslator,
  texts: string[],
): Promise<(string | null)[]> {
  const out: (string | null)[] = [];
  for (const text of texts) {
    try {
      const value = (await translator.translate(text)).trim();
      out.push(value && value !== text ? value : null);
    } catch {
      out.push(null);
    }
  }
  return out;
}

async function translateMissing(lang: AutoLang, texts: string[]): Promise<(string | null)[]> {
  const spec = getAutoLanguage(lang);
  if (!spec) return texts.map(() => null);
  const values: (string | null)[] = texts.map(() => null);
  const chrome = await getChromeTranslator(spec.chrome);
  if (chrome) {
    const local = await translateWithChrome(chrome, texts);
    local.forEach((value, index) => {
      values[index] = value;
    });
  }
  const missing = texts.flatMap((text, index) => (values[index] ? [] : [text]));
  if (missing.length === 0) return values;
  let filled: (string | null)[] = [];
  try {
    const result = await translateUiBatch({ data: { lang, texts: missing } });
    filled = Array.isArray(result?.translations) ? result.translations : [];
  } catch {
    filled = [];
  }
  let cursor = 0;
  for (let index = 0; index < values.length; index += 1) {
    if (values[index]) continue;
    values[index] = filled[cursor] ?? null;
    cursor += 1;
  }
  return values;
}

/** Translate English UI strings for an automatic language and cache them. */
export function requestAutoTranslations(lang: AutoLang, texts: string[], onDone: () => void) {
  const todo = texts
    .filter((text) => {
      const key = pairKey(lang, text);
      return !peekAutoTranslation(lang, text) && !inflight.has(key) && !failed.has(key);
    })
    .slice(0, 40);
  if (todo.length === 0) return;
  for (const text of todo) inflight.add(pairKey(lang, text));
  void translateMissing(lang, todo)
    .then((values) => {
      todo.forEach((text, index) => {
        const value = values[index];
        if (value) remember(lang, text, value);
        else failed.add(pairKey(lang, text));
      });
    })
    .catch(() => {
      for (const text of todo) failed.add(pairKey(lang, text));
    })
    .finally(() => {
      for (const text of todo) inflight.delete(pairKey(lang, text));
      onDone();
    });
}
