import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { localizeAuto, useAutoDictionaryVersion } from "./auto-translate";
import { translate, type Lang } from "./dictionary";
import { isAutoLang, isKnownLang, RTL_LANGS } from "./languages";

const STORAGE_KEY = "bbe.lang";

type SetLangOptions = { persist?: boolean };

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang, options?: SetLangOptions) => void;
  t: (text: string) => string;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: (text) => text,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: ReactNode;
  /** Must be derived from the URL so SSR and the first client render agree. */
  initialLang?: Lang;
}) {
  // LocaleSync applies stored preferences after mount.
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.has(lang) ? "rtl" : "ltr";
  }, [lang]);

  // `persist: false` applies a language for the current view only (e.g. an
  // English marketing URL) without erasing the user's stored preference.
  const setLang = useCallback((next: Lang, options?: SetLangOptions) => {
    setLangState(next);
    if (options?.persist === false) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const autoVersion = useAutoDictionaryVersion();
  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: (text: string) =>
        isAutoLang(lang) ? localizeAuto(lang, text) : (translate(text, lang) ?? text),
    }),
    [lang, setLang, autoVersion],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function readStoredLang(): Lang | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (isKnownLang(stored)) return stored;
  } catch {
    /* storage unavailable */
  }
  return null;
}
