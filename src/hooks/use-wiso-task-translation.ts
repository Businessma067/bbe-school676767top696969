import { useCallback, useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  translateWisoTask,
  type WisoTaskTranslatePayload,
} from "@/lib/translate-wiso-task.functions";
import type { TaskContentLang } from "@/components/TaskContentLangToggle";

type CacheMap = Record<string, WisoTaskTranslatePayload>;

function readCache(storageKey: string): CacheMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(storageKey);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as CacheMap;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeCache(storageKey: string, cache: CacheMap) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(storageKey, JSON.stringify(cache));
  } catch {
    /* quota — ignore */
  }
}

function readLang(storageKey: string): TaskContentLang {
  if (typeof window === "undefined") return "de";
  try {
    return sessionStorage.getItem(storageKey) === "en" ? "en" : "de";
  } catch {
    return "de";
  }
}

/**
 * DE/EN content language for WiSo economics & German texts.
 * German source stays untouched; English is translated once per task and cached.
 */
export function useWisoTaskTranslation(opts: {
  enabled: boolean;
  langStorageKey: string;
  cacheStorageKey: string;
  taskId: string | null;
  source: WisoTaskTranslatePayload | null;
}) {
  const { enabled, langStorageKey, cacheStorageKey, taskId, source } = opts;
  const translateFn = useServerFn(translateWisoTask);
  const [lang, setLangState] = useState<TaskContentLang>("de");
  const [cache, setCache] = useState<CacheMap>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sourceRef = useRef(source);
  sourceRef.current = source;
  const loadingRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;
    setLangState(readLang(langStorageKey));
    setCache(readCache(cacheStorageKey));
  }, [enabled, langStorageKey, cacheStorageKey]);

  const ensureEnglish = useCallback(
    async (id: string) => {
      if (loadingRef.current) return;
      const payload = sourceRef.current;
      if (!payload) {
        setLangState("en");
        try {
          sessionStorage.setItem(langStorageKey, "en");
        } catch {
          /* ignore */
        }
        return;
      }
      const existing = readCache(cacheStorageKey)[id];
      if (existing) {
        setCache((prev) => (prev[id] ? prev : { ...prev, [id]: existing }));
        setLangState("en");
        try {
          sessionStorage.setItem(langStorageKey, "en");
        } catch {
          /* ignore */
        }
        return;
      }
      loadingRef.current = true;
      setLoading(true);
      setError(null);
      try {
        const translated = await translateFn({ data: payload });
        setCache((prev) => {
          const nextCache = { ...prev, [id]: translated };
          writeCache(cacheStorageKey, nextCache);
          return nextCache;
        });
        setLangState("en");
        try {
          sessionStorage.setItem(langStorageKey, "en");
        } catch {
          /* ignore */
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Translation failed");
        setLangState("de");
      } finally {
        loadingRef.current = false;
        setLoading(false);
      }
    },
    [translateFn, langStorageKey, cacheStorageKey],
  );

  const setLang = useCallback(
    async (next: TaskContentLang) => {
      if (!enabled) return;
      setError(null);
      if (next === "de") {
        setLangState("de");
        try {
          sessionStorage.setItem(langStorageKey, "de");
        } catch {
          /* ignore */
        }
        return;
      }
      if (!taskId) {
        setLangState("en");
        try {
          sessionStorage.setItem(langStorageKey, "en");
        } catch {
          /* ignore */
        }
        return;
      }
      if (cache[taskId]) {
        setLangState("en");
        try {
          sessionStorage.setItem(langStorageKey, "en");
        } catch {
          /* ignore */
        }
        return;
      }
      await ensureEnglish(taskId);
    },
    [enabled, taskId, cache, ensureEnglish, langStorageKey],
  );

  // Stay on EN across task navigation — translate the new task if needed.
  useEffect(() => {
    if (!enabled || lang !== "en" || !taskId) return;
    if (cache[taskId] || loadingRef.current) return;
    void ensureEnglish(taskId);
  }, [enabled, lang, taskId, cache, ensureEnglish]);

  const translated = taskId ? cache[taskId] ?? null : null;
  const activeTranslation = lang === "en" ? translated : null;

  return {
    lang: enabled ? lang : ("de" as TaskContentLang),
    setLang,
    loading,
    error,
    activeTranslation,
  };
}
