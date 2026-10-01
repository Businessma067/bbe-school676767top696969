import { useRouterState } from "@tanstack/react-router";
import { useLayoutEffect } from "react";
import { isWisoPath } from "@/lib/exam-track";
import { warmLanguage } from "@/lib/i18n/auto-translate";
import { readStoredLang, useLanguage } from "@/lib/i18n/context";
import { isAutoLang } from "@/lib/i18n/languages";
import {
  getLocaleFromPath,
  isLocalizablePath,
  isStudyContentPath,
  stripLocalePrefix,
} from "@/lib/i18n/locale-path";

/**
 * URL is the source of truth on marketing pages:
 * `/` and English paths → en; `/de/...` → de; `/uk/...` → uk.
 * App routes keep the stored language preference for chrome translation.
 * WiSo study surfaces (mock builder, flashcards, …) always use German chrome.
 *
 * Depends only on pathname so the language switcher can setLang before
 * navigate without being overwritten while the URL is still catching up.
 */
export function LocaleSync() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { setLang } = useLanguage();

  useLayoutEffect(() => {
    let cancelled = false;
    const urlLocale = getLocaleFromPath(pathname);
    if (urlLocale) {
      setLang(urlLocale);
      return;
    }

    const base = stripLocalePrefix(pathname);
    // WiSo course tools are authored in German — keep chrome (nav via t()) in DE
    // without rewriting the stored preference for other routes.
    if (isStudyContentPath(base) && isWisoPath(base)) {
      setLang("de", { persist: false });
      return;
    }

    if (isLocalizablePath(base)) {
      // Automatic languages have no /fr URL. Translate the whole page first,
      // then swap once. Edited DE/UK always follow the URL instead.
      const stored = readStoredLang();
      if (stored && isAutoLang(stored)) {
        void Promise.race([warmLanguage(stored).catch(() => undefined), new Promise((r) => setTimeout(r, 1200))]).then(() => {
          if (cancelled || readStoredLang() !== stored) return;
          setLang(stored, { persist: false });
        });
        return () => {
          cancelled = true;
        };
      }
      setLang("en", { persist: false });
      return;
    }

    const stored = readStoredLang();
    if (stored && isAutoLang(stored)) {
      void Promise.race([warmLanguage(stored).catch(() => undefined), new Promise((r) => setTimeout(r, 1200))]).then(() => {
        if (cancelled || readStoredLang() !== stored) return;
        setLang(stored, { persist: false });
      });
      return () => {
        cancelled = true;
      };
    }
    if (stored) setLang(stored, { persist: false });
  }, [pathname, setLang]);

  return null;
}
