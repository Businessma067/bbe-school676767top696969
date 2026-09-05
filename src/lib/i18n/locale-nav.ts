import type { Lang } from "./dictionary";
import {
  getLocaleFromPath,
  isLocalizablePath,
  localizePath,
  stripLocalePrefix,
  type LocalePrefix,
} from "./locale-path";

export type LocaleLinkProps = {
  to: string;
  params?: { lang: LocalePrefix; _splat?: string };
  hash?: string;
};

/**
 * Build TanStack Router `to` + `params` for a path in a given language.
 * English uses the normal file routes; DE/UK use `/$lang/` and `/$lang/$`.
 */
export function getLocaleLinkProps(pathname: string, lang: Lang): LocaleLinkProps {
  const hashIndex = pathname.indexOf("#");
  const hash = hashIndex >= 0 ? pathname.slice(hashIndex + 1) : undefined;
  const pathOnly = hashIndex >= 0 ? pathname.slice(0, hashIndex) : pathname;
  const target = localizePath(pathOnly, lang);
  const locale = getLocaleFromPath(target);

  if (!locale) {
    return hash ? { to: target, hash } : { to: target };
  }

  const base = stripLocalePrefix(target);
  if (base === "/") {
    return hash
      ? { to: "/$lang/", params: { lang: locale }, hash }
      : { to: "/$lang/", params: { lang: locale } };
  }

  return hash
    ? { to: "/$lang/$", params: { lang: locale, _splat: base.slice(1) }, hash }
    : { to: "/$lang/$", params: { lang: locale, _splat: base.slice(1) } };
}

/** Language implied by the current URL, or React lang on app-only routes. */
export function effectiveLangFromLocation(pathname: string, lang: Lang): Lang {
  const urlLocale = getLocaleFromPath(pathname);
  if (urlLocale) return urlLocale;
  if (isLocalizablePath(stripLocalePrefix(pathname))) return "en";
  return lang;
}
