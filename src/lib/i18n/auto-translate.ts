import { useSyncExternalStore } from "react";
import { getAutoLanguage, isAutoLang, type AutoLang } from "@/lib/i18n/languages";

const CACHE_KEY = "bbe.autotr.v1";
const CACHE_LIMIT = 180_000;
const SEPARATOR = "\n⟦⟧\n";
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
  persist(lang);
}

function withWhitespace(source: string, translated: string): string {
  const [, lead = "", , trail = ""] = /^(\s*)([\s\S]*?)(\s*)$/.exec(source) ?? [];
  return `${lead}${translated}${trail}`;
}

export function lookupAuto(lang: string, text: string): string | null {
  const trimmed = text.trim();
  if (!trimmed) return null;
  const hit = peekAutoTranslation(lang, trimmed);
  return hit ? withWhitespace(text, hit) : null;
}

/** Dictionary miss: show English until the browser translation arrives, then re-render. */
export function localizeAuto(lang: string, text: string): string {
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

function joinSegments(payload: unknown): string {
  if (!Array.isArray(payload) || !Array.isArray(payload[0])) return "";
  return (payload[0] as unknown[])
    .map((part) => (Array.isArray(part) && typeof part[0] === "string" ? part[0] : ""))
    .join("");
}

function chunkTexts(texts: string[], maxCount: number, maxChars: number): string[][] {
  const chunks: string[][] = [];
  let current: string[] = [];
  let size = 0;
  for (const text of texts) {
    const next = size + text.length + SEPARATOR.length;
    if (current.length && (current.length >= maxCount || next > maxChars)) {
      chunks.push(current);
      current = [];
      size = 0;
    }
    current.push(text);
    size += text.length + SEPARATOR.length;
  }
  if (current.length) chunks.push(current);
  return chunks;
}

/** null means the request failed and the caller should retry. */
async function googleRaw(target: string, text: string): Promise<string | null> {
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "en");
  url.searchParams.set("tl", target);
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", text);
  const response = await fetch(url);
  if (!response.ok) return null;
  return joinSegments(await response.json());
}

async function googleChunk(target: string, texts: string[]): Promise<(string | null)[] | null> {
  if (texts.length === 1) {
    const raw = await googleRaw(target, texts[0]);
    if (raw == null) return null;
    const value = raw.trim();
    return [value && value !== texts[0] ? value : null];
  }
  const raw = await googleRaw(target, texts.join(SEPARATOR));
  if (raw == null) return null;
  const parts = raw.split("⟦⟧").map((part) => part.trim());
  if (parts.length !== texts.length) {
    const singles: (string | null)[] = [];
    for (const text of texts) {
      const one = await googleChunk(target, [text]);
      if (!one) return null;
      singles.push(one[0]);
    }
    return singles;
  }
  return parts.map((part, index) => (part && part !== texts[index] ? part : null));
}

async function translateWithGoogle(
  target: string,
  texts: string[],
): Promise<(string | null)[] | null> {
  const out: (string | null)[] = [];
  for (const chunk of chunkTexts(texts, 20, 1600)) {
    const part = await googleChunk(target, chunk);
    if (!part) return null;
    out.push(...part);
  }
  return out;
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

async function translateOnServer(
  lang: AutoLang,
  texts: string[],
): Promise<(string | null)[] | null> {
  try {
    const mod = await import("@/lib/i18n/auto-translate.functions");
    const result = await mod.translateUiBatch({
      data: { lang, texts: texts.slice(0, 40) },
    });
    return Array.isArray(result?.translations) ? result.translations : null;
  } catch {
    return null;
  }
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
  const server = await translateOnServer(lang, missing);
  if (server && server.some(Boolean)) {
    let cursor = 0;
    for (let index = 0; index < values.length; index += 1) {
      if (values[index]) continue;
      values[index] = server[cursor] ?? null;
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

type Bucket = { texts: Set<string>; dones: Array<() => void> };
const buckets = new Map<string, Bucket>();

function needsTranslation(lang: string, text: string): boolean {
  const key = pairKey(lang, text);
  return !peekAutoTranslation(lang, text) && !inflight.has(key) && !failed.has(key);
}

async function runTranslations(lang: AutoLang, texts: string[], onDone: () => void) {
  const pending = texts.filter((text) => needsTranslation(lang, text));
  if (pending.length === 0) return;
  for (const text of pending) inflight.add(pairKey(lang, text));
  while (pending.length) {
    const batch = pending.splice(0, 24);
    const release = (text: string) => inflight.delete(pairKey(lang, text));
    let changed = false;
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
          await new Promise((resolve) => setTimeout(resolve, 500));
          pending.unshift(...retry);
        }
      } else {
        result.forEach((value, index) => {
          const text = batch[index];
          if (value) {
            remember(lang, text, value);
            changed = true;
          } else failed.add(pairKey(lang, text));
          release(text);
        });
      }
    } catch {
      for (const text of batch) {
        const key = pairKey(lang, text);
        const count = (attempts.get(key) ?? 0) + 1;
        attempts.set(key, count);
        if (count >= 2) failed.add(key);
        else pending.unshift(text);
        if ((attempts.get(key) ?? 0) >= 2) release(text);
      }
    }
    if (changed) emit();
    onDone();
  }
}

/** Translate English UI strings in the browser and cache them. */
export function queueAutoTranslations(lang: AutoLang, texts: string[], onDone?: () => void) {
  if (typeof window === "undefined") return;
  const fresh = texts.filter((text) => needsTranslation(lang, text));
  if (fresh.length === 0) return;
  let bucket = buckets.get(lang);
  if (!bucket) {
    bucket = { texts: new Set(), dones: [] };
    buckets.set(lang, bucket);
    const scheduled = bucket;
    queueMicrotask(() => {
      if (buckets.get(lang) === scheduled) buckets.delete(lang);
      const batch = [...scheduled.texts];
      const dones = scheduled.dones;
      void runTranslations(lang, batch, () => {
        for (const done of dones) done();
      });
    });
  }
  for (const text of fresh) bucket.texts.add(text);
  if (onDone) bucket.dones.push(onDone);
}
