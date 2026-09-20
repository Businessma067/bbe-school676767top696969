import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { isWisoPath } from "@/lib/exam-track";
import { readStoredLang, useLanguage } from "@/lib/i18n/context";
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

  useEffect(() => {
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
      // English URL: render English, but keep the stored preference intact so
      // app routes still use the language the visitor chose.
      setLang("en", { persist: false });
      return;
    }

    const stored = readStoredLang();
    if (stored) setLang(stored, { persist: false });
  }, [pathname, setLang]);

  return null;
}
