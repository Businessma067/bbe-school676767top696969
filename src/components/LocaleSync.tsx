import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { readStoredLang, useLanguage } from "@/lib/i18n/context";
import {
  getLocaleFromPath,
  isLocalizablePath,
  stripLocalePrefix,
} from "@/lib/i18n/locale-path";

/**
 * URL is the source of truth on marketing pages:
 * `/` and English paths → en; `/de/...` → de; `/uk/...` → uk.
 * App routes keep the stored language preference for chrome translation.
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
