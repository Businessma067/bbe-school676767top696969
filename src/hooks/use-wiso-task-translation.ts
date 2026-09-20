import { useCallback, useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  translateWisoTask,
  translateWisoTaskStem,
  type WisoTaskTranslatePayload,
} from "@/lib/translate-wiso-task.functions";
import type { TaskContentLang } from "@/components/TaskContentLangToggle";
import type { WisoEconomicsEnOverlay } from "@/data/wiso-economics-en-overlays";

type CacheMap = Record<string, WisoTaskTranslatePayload>;

function readCache(storageKey: string): CacheMap {
  if (typeof window === "undefined") return {};
  for (const store of [localStorage, sessionStorage]) {
    try {
      const raw = store.getItem(storageKey);
      if (!raw) continue;
      const parsed = JSON.parse(raw) as CacheMap;
      if (parsed && typeof parsed === "object") return parsed;
    } catch {
      /* ignore */
    }
  }
  return {};
}

function writeCache(storageKey: string, cache: CacheMap) {
  if (typeof window === "undefined") return;
  const raw = JSON.stringify(cache);
  try {
    localStorage.setItem(storageKey, raw);
  } catch {
    try {
      sessionStorage.setItem(storageKey, raw);
    } catch {
      /* quota */
    }
  }
}

function readLang(storageKey: string): TaskContentLang {
  if (typeof window === "undefined") return "de";
  try {
    return localStorage.getItem(storageKey) === "en" ||
      sessionStorage.getItem(storageKey) === "en"
      ? "en"
      : "de";
  } catch {
    return "de";
  }
}

function writeLang(storageKey: string, lang: TaskContentLang) {
  try {
    localStorage.setItem(storageKey, lang);
  } catch {
    try {
      sessionStorage.setItem(storageKey, lang);
    } catch {
      /* ignore */
    }
  }
}

function overlayToPayload(o: WisoEconomicsEnOverlay): WisoTaskTranslatePayload {
  return {
    title: o.title,
    context: o.context,
    statements: o.statements,
    tactical_explanations: o.tactical_explanations,
    solution_overview: "",
    passage: "",
    highlights: [],
  };
}

function hasExplanations(p: WisoTaskTranslatePayload | null | undefined): boolean {
  return Boolean(p?.tactical_explanations?.some((s) => typeof s === "string" && s.trim()));
}

/**
 * DE/EN for WiSo economics & German texts.
 * Priority: prebuilt EN overlay (instant) → durable cache → stem-first AI → fill explanations.
 */
export function useWisoTaskTranslation(opts: {
  enabled: boolean;
  langStorageKey: string;
  cacheStorageKey: string;
  taskId: string | null;
  source: WisoTaskTranslatePayload | null;
  prebuiltById?: Map<string, WisoEconomicsEnOverlay> | null;
  prefetchIds?: string[];
  prefetchSources?: Record<string, WisoTaskTranslatePayload | null | undefined>;
}) {
  const {
    enabled,
    langStorageKey,
    cacheStorageKey,
    taskId,
    source,
    prebuiltById,
    prefetchIds = [],
    prefetchSources = {},
  } = opts;
  const translateFullFn = useServerFn(translateWisoTask);
  const translateStemFn = useServerFn(translateWisoTaskStem);
  const [lang, setLangState] = useState<TaskContentLang>("de");
  const [cache, setCache] = useState<CacheMap>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sourceRef = useRef(source);
  sourceRef.current = source;
  const inFlight = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (!enabled) return;
    setLangState(readLang(langStorageKey));
    setCache(readCache(cacheStorageKey));
  }, [enabled, langStorageKey, cacheStorageKey]);

  const putCache = useCallback(
    (id: string, payload: WisoTaskTranslatePayload) => {
      setCache((prev) => {
        const nextCache = { ...prev, [id]: payload };
        writeCache(cacheStorageKey, nextCache);
        return nextCache;
      });
    },
    [cacheStorageKey],
  );

  const resolvePrebuilt = useCallback(
    (id: string): WisoTaskTranslatePayload | null => {
      const row = prebuiltById?.get(id);
      return row ? overlayToPayload(row) : null;
    },
    [prebuiltById],
  );

  const fillExplanations = useCallback(
    async (id: string, payload: WisoTaskTranslatePayload) => {
      if (hasExplanations(readCache(cacheStorageKey)[id])) return;
      if (inFlight.current.has(`${id}:expl`)) return;
      inFlight.current.add(`${id}:expl`);
      try {
        const full = await translateFullFn({ data: payload });
        putCache(id, full);
      } catch {
        /* stem already shown */
      } finally {
        inFlight.current.delete(`${id}:expl`);
      }
    },
    [translateFullFn, putCache, cacheStorageKey],
  );

  const ensureEnglish = useCallback(
    async (id: string, src?: WisoTaskTranslatePayload | null) => {
      const prebuilt = resolvePrebuilt(id);
      if (prebuilt) {
        putCache(id, prebuilt);
        setLangState("en");
        writeLang(langStorageKey, "en");
        setLoading(false);
        setError(null);
        return;
      }

      const existing = readCache(cacheStorageKey)[id] ?? cache[id];
      if (existing) {
        setCache((prev) => (prev[id] ? prev : { ...prev, [id]: existing }));
        setLangState("en");
        writeLang(langStorageKey, "en");
        if (!hasExplanations(existing) && (src ?? sourceRef.current)) {
          void fillExplanations(id, src ?? sourceRef.current!);
        }
        return;
      }

      const payload = src ?? sourceRef.current;
      if (!payload) {
        setLangState("en");
        writeLang(langStorageKey, "en");
        return;
      }

      if (inFlight.current.has(id)) return;
      inFlight.current.add(id);
      setLoading(true);
      setError(null);
      try {
        const stem = await translateStemFn({ data: payload });
        const partial: WisoTaskTranslatePayload = {
          ...stem,
          tactical_explanations: payload.tactical_explanations.map(() => ""),
        };
        putCache(id, partial);
        setLangState("en");
        writeLang(langStorageKey, "en");
        setLoading(false);
        void fillExplanations(id, payload);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Translation failed");
        setLangState("de");
        setLoading(false);
      } finally {
        inFlight.current.delete(id);
      }
    },
    [
      resolvePrebuilt,
      putCache,
      langStorageKey,
      cacheStorageKey,
      cache,
      translateStemFn,
      fillExplanations,
    ],
  );

  const setLang = useCallback(
    async (next: TaskContentLang) => {
      if (!enabled) return;
      setError(null);
      if (next === "de") {
        setLangState("de");
        writeLang(langStorageKey, "de");
        return;
      }
      if (!taskId) {
        setLangState("en");
        writeLang(langStorageKey, "en");
        return;
      }
      const prebuilt = resolvePrebuilt(taskId);
      if (prebuilt) {
        putCache(taskId, prebuilt);
        setLangState("en");
        writeLang(langStorageKey, "en");
        return;
      }
      if (cache[taskId] || readCache(cacheStorageKey)[taskId]) {
        setLangState("en");
        writeLang(langStorageKey, "en");
        return;
      }
      await ensureEnglish(taskId);
    },
    [
      enabled,
      taskId,
      cache,
      ensureEnglish,
      langStorageKey,
      cacheStorageKey,
      resolvePrebuilt,
      putCache,
    ],
  );

  useEffect(() => {
    if (!enabled || lang !== "en" || !taskId) return;
    if (resolvePrebuilt(taskId)) {
      const p = resolvePrebuilt(taskId)!;
      if (!cache[taskId]) putCache(taskId, p);
      return;
    }
    if (cache[taskId] || inFlight.current.has(taskId)) return;
    void ensureEnglish(taskId);
  }, [enabled, lang, taskId, cache, ensureEnglish, resolvePrebuilt, putCache]);

  useEffect(() => {
    if (!enabled || lang !== "en") return;
    for (const id of prefetchIds) {
      if (!id || id === taskId) continue;
      if (resolvePrebuilt(id) || cache[id] || readCache(cacheStorageKey)[id]) continue;
      const src = prefetchSources[id];
      if (!src) continue;
      void ensureEnglish(id, src);
    }
  }, [
    enabled,
    lang,
    prefetchIds,
    prefetchSources,
    taskId,
    cache,
    cacheStorageKey,
    ensureEnglish,
    resolvePrebuilt,
  ]);

  const translated = taskId
    ? cache[taskId] ?? (resolvePrebuilt(taskId) ? resolvePrebuilt(taskId) : null) ?? null
    : null;
  const activeTranslation = lang === "en" ? translated : null;

  return {
    lang: enabled ? lang : ("de" as TaskContentLang),
    setLang,
    loading: enabled && lang === "en" && Boolean(taskId) && !translated ? loading : false,
    error,
    activeTranslation,
  };
}
