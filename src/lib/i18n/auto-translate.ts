import { useSyncExternalStore } from "react";
import { getAutoLanguage, isAutoLang, type AutoLang } from "@/lib/i18n/languages";

const CACHE_KEY = "bbe.autotr.v1";
const CACHE_LIMIT = 2_000_000;
const LETTER = /[A-Za-zÀ-ÿ]/;

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
const reverse = new Map<string, Map<string, string>>();
const inflight = new Set<string>();
const failed = new Set<string>();
const attempts = new Map<string, number>();
const chromeReady = new Map<string, Promise<ChromeTranslator | null>>();

let version = 0;
const listeners = new Set<() => void>();

function emit() {
  version += 1;
  for (const listener of listeners) listener();
}

/** Re-render React copy when a browser translation lands in the cache. */
export function useAutoDictionaryVersion(): number {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => version,
    () => 0,
  );
}

function pairKey(lang: string, text: string): string {
  return `${lang}\u0000${text}`;
}

function cacheFor(lang: string): Map<string, string> {
  let table = memory.get(lang);
  if (table) return table;
  table = new Map();
  memory.set(lang, table);
  const back = new Map<string, string>();
  reverse.set(lang, back);
  if (typeof localStorage === "undefined") return table;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    const stored = raw ? (JSON.parse(raw) as Record<string, Record<string, string>>) : {};
    const saved = stored[lang];
    if (saved) {
      for (const [source, value] of Object.entries(saved)) {
        if (typeof value === "string" && value) {
          table.set(source, value);
          back.set(value, source);
        }
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
      stored[lang] = Object.fromEntries([...cacheFor(lang)].slice(-4000));
    }
    localStorage.setItem(CACHE_KEY, JSON.stringify(stored));
  } catch {
    /* quota or private mode */
  }
}

export function peekAutoTranslation(lang: string, text: string): string | null {
  return cacheFor(lang).get(text) ?? null;
}

/** English source for a string we already translated, so it is not translated again. */
export function englishSourceFor(lang: string, translated: string): string | null {
  cacheFor(lang);
  return reverse.get(lang)?.get(translated) ?? null;
}

function remember(lang: string, text: string, value: string) {
  cacheFor(lang).set(text, value);
  let back = reverse.get(lang);
  if (!back) {
    back = new Map();
    reverse.set(lang, back);
  }
  back.set(value, text);
}

function withWhitespace(source: string, translated: string): string {
  const [, lead = "", , trail = ""] = /^(\s*)([\s\S]*?)(\s*)$/.exec(source) ?? [];
  return `${lead}${translated}${trail}`;
}

const seenEnglish = new Set<string>();

/** Remember an English UI string so a language switch can translate it before paint. */
export function noteEnglishSource(text: string) {
  const trimmed = text.trim();
  if (!trimmed || trimmed.length > 1800 || !LETTER.test(trimmed)) return;
  seenEnglish.add(trimmed);
}

export function lookupAuto(lang: string, text: string): string | null {
  const trimmed = text.trim();
  if (!trimmed) return null;
  const hit = peekAutoTranslation(lang, trimmed);
  return hit ? withWhitespace(text, hit) : null;
}

/** Dictionary miss: show English until the whole language batch is ready, then swap once. */
export function localizeAuto(lang: string, text: string): string {
  noteEnglishSource(text);
  if (!isAutoLang(lang)) return text;
  const hit = lookupAuto(lang, text);
  if (hit) return hit;
  const trimmed = text.trim();
  if (trimmed && LETTER.test(trimmed) && trimmed.length <= 1800) {
    queueAutoTranslations(lang, [trimmed]);
  }
  return text;
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

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T | null> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      () => {
        clearTimeout(timer);
        resolve(null);
      },
    );
  });
}

function readTranslation(part: unknown): string {
  if (typeof part === "string") return part.trim();
  if (Array.isArray(part) && typeof part[0] === "string") return part[0].trim();
  return "";
}

function chunkTexts(texts: string[], maxCount: number, maxChars: number): string[][] {
  const chunks: string[][] = [];
  let current: string[] = [];
  let size = 0;
  for (const text of texts) {
    const next = size + text.length + 1;
    if (current.length && (current.length >= maxCount || next > maxChars)) {
      chunks.push(current);
      current = [];
      size = 0;
    }
    current.push(text);
    size += text.length + 1;
  }
  if (current.length) chunks.push(current);
  return chunks;
}

/**
 * Batch translate. The gtx single-string endpoint rate-limits and then the
 * MyMemory fallback only covers a few languages, so some picks stayed English.
 * This client returns one string per `q` and allows the browser call.
 */
async function googleChunk(target: string, texts: string[]): Promise<(string | null)[] | null> {
  const body = new URLSearchParams();
  for (const text of texts) body.append("q", text);
  const url = `https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=en&tl=${encodeURIComponent(target)}`;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    let response: Response;
    try {
      response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
    } catch {
      return null;
    }
    if (response.status === 429) {
      await new Promise((resolve) => setTimeout(resolve, 700 * (attempt + 1)));
      continue;
    }
    if (!response.ok) return null;
    let payload: unknown;
    try {
      payload = await response.json();
    } catch {
      return null;
    }
    if (!Array.isArray(payload) || payload.length !== texts.length) return null;
    return payload.map((part) => readTranslation(part) || null);
  }
  return null;
}

async function translateWithGoogle(
  target: string,
  texts: string[],
): Promise<(string | null)[] | null> {
  const chunks = chunkTexts(texts, 30, 2200);
  // Chunks run in parallel so a new page is translated in one round-trip.
  const parts = await Promise.all(chunks.map((chunk) => googleChunk(target, chunk)));
  const out: (string | null)[] = [];
  let any = false;
  parts.forEach((part, index) => {
    if (!part) {
      out.push(...chunks[index].map(() => null));
      return;
    }
    if (part.some(Boolean)) any = true;
    out.push(...part);
  });
  return any ? out : null;
}

async function translateWithMyMemory(
  target: string,
  texts: string[],
): Promise<(string | null)[] | null> {
  const out: (string | null)[] = [];
  for (const text of texts.slice(0, 16)) {
    if (text.length > 450) {
      out.push(null);
      continue;
    }
    try {
      const url = new URL("https://api.mymemory.translated.net/get");
      url.searchParams.set("q", text);
      url.searchParams.set("langpair", `en|${target}`);
      const response = await fetch(url);
      if (!response.ok) return null;
      const data = (await response.json()) as { responseData?: { translatedText?: string } };
      const value = data.responseData?.translatedText?.trim() ?? "";
      out.push(value && !/MYMEMORY WARNING/i.test(value) && value !== text ? value : null);
    } catch {
      return null;
    }
  }
  while (out.length < texts.length) out.push(null);
  return out;
}

async function translateMissing(
  lang: AutoLang,
  texts: string[],
): Promise<(string | null)[] | "retry"> {
  const spec = getAutoLanguage(lang);
  if (!spec) return texts.map(() => null);
  const values: (string | null)[] = texts.map(() => null);
  const chrome = await withTimeout(getChromeTranslator(spec.chrome), 250);
  if (chrome) {
    for (let index = 0; index < texts.length; index += 1) {
      try {
        const value = (await chrome.translate(texts[index])).trim();
        values[index] = value && value !== texts[index] ? value : null;
      } catch {
        values[index] = null;
      }
    }
  }
  const missing = texts.filter((_, index) => !values[index]);
  if (missing.length === 0) return values;
  const google = await translateWithGoogle(spec.google, missing).catch(() => null);
  if (google && google.some(Boolean)) {
    let cursor = 0;
    for (let index = 0; index < values.length; index += 1) {
      if (values[index]) continue;
      values[index] = google[cursor] ?? null;
      cursor += 1;
    }
    return values;
  }
  const memory = await translateWithMyMemory(spec.google, missing);
  if (!memory) return "retry";
  let cursor = 0;
  for (let index = 0; index < values.length; index += 1) {
    if (values[index]) continue;
    values[index] = memory[cursor] ?? null;
    cursor += 1;
  }
  return values;
}

type Bucket = { texts: Set<string> };
const buckets = new Map<string, Bucket>();
const idleWaiters = new Map<string, Array<() => void>>();

function needsTranslation(lang: string, text: string): boolean {
  const key = pairKey(lang, text);
  return !peekAutoTranslation(lang, text) && !inflight.has(key) && !failed.has(key);
}

function langBusy(lang: string): boolean {
  for (const key of inflight) {
    if (key.startsWith(`${lang}\u0000`)) return true;
  }
  return false;
}

function finishLang(lang: AutoLang) {
  if (langBusy(lang) || buckets.has(lang)) return;
  persist(lang);
  const waiters = idleWaiters.get(lang);
  idleWaiters.delete(lang);
  if (waiters) for (const waiter of waiters) waiter();
  emit();
}

async function runTranslations(lang: AutoLang, texts: string[]) {
  const pending = texts.filter((text) => needsTranslation(lang, text));
  if (pending.length === 0) {
    finishLang(lang);
    return;
  }
  for (const text of pending) inflight.add(pairKey(lang, text));
  const release = (text: string) => inflight.delete(pairKey(lang, text));
  try {
    let guard = 0;
    while (pending.length && guard < 6) {
      guard += 1;
      const batch = pending.splice(0, 80);
      try {
        const result = await translateMissing(lang, batch);
        if (result === "retry") {
          const retry: string[] = [];
          for (const text of batch) {
            const key = pairKey(lang, text);
            const count = (attempts.get(key) ?? 0) + 1;
            attempts.set(key, count);
            if (count >= 2) {
              failed.add(key);
              release(text);
            } else retry.push(text);
          }
          if (retry.length) {
            await new Promise((resolve) => setTimeout(resolve, 400));
            pending.unshift(...retry);
          }
          continue;
        }
        result.forEach((value, index) => {
          const text = batch[index];
          if (value && !value.includes("⟦") && !/MYMEMORY WARNING/i.test(value))
            remember(lang, text, value);
          else failed.add(pairKey(lang, text));
          release(text);
        });
        // Paint each finished batch right away instead of waiting for all.
        emit();
      } catch {
        for (const text of batch) {
          const key = pairKey(lang, text);
          const count = (attempts.get(key) ?? 0) + 1;
          attempts.set(key, count);
          if (count >= 2) {
            failed.add(key);
            release(text);
          } else pending.unshift(text);
        }
      }
    }
    for (const text of pending) release(text);
  } finally {
    finishLang(lang);
  }
}

/** Translate English UI strings in the browser and cache them. One paint when the batch ends. */
export function queueAutoTranslations(lang: AutoLang, texts: string[]) {
  if (typeof window === "undefined") return;
  const fresh = texts.filter((text) => needsTranslation(lang, text));
  if (fresh.length === 0) return;
  let bucket = buckets.get(lang);
  if (!bucket) {
    bucket = { texts: new Set() };
    buckets.set(lang, bucket);
    const scheduled = bucket;
    queueMicrotask(() => {
      if (buckets.get(lang) === scheduled) buckets.delete(lang);
      void runTranslations(lang, [...scheduled.texts]);
    });
  }
  for (const text of fresh) bucket.texts.add(text);
}

/** Resolve when every noted English string has a cached translation or a final miss. */
export function warmLanguage(lang: AutoLang): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  const missing = [...seenEnglish].filter(
    (text) => !peekAutoTranslation(lang, text) && !failed.has(pairKey(lang, text)),
  );
  if (missing.length === 0 && !langBusy(lang)) return Promise.resolve();
  return new Promise((resolve) => {
    const waiters = idleWaiters.get(lang) ?? [];
    waiters.push(resolve);
    idleWaiters.set(lang, waiters);
    if (missing.length) queueAutoTranslations(lang, missing);
    else if (!langBusy(lang)) finishLang(lang);
  });
}
