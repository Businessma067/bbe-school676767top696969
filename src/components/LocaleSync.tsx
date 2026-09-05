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
 */
export function LocaleSync() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { setLang } = useLanguage();
  const hydratedAppPref = useRef(false);

  useEffect(() => {
    const urlLocale = getLocaleFromPath(pathname);
    if (urlLocale) {
      setLang(urlLocale);
      return;
    }

    const base = stripLocalePrefix(pathname);
    if (isLocalizablePath(base)) {
      setLang("en");
      return;
    }

    if (!hydratedAppPref.current) {
      hydratedAppPref.current = true;
      const stored = readStoredLang();
      if (stored) setLang(stored);
    }
  }, [pathname, setLang]);

  return null;
}
