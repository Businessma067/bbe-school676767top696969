import type { Lang } from "./dictionary";

/** Non-default locales that get their own URL prefix. */
export const LOCALE_PREFIXES = ["de", "uk"] as const;
export type LocalePrefix = (typeof LOCALE_PREFIXES)[number];

const LOCALE_SET = new Set<string>(LOCALE_PREFIXES);

/** Marketing / SEO pages that have dedicated DE and UK URLs. */
export const LOCALIZABLE_PATHS = [
  "/",
  "/bbe-entrance-exam",
  "/bbe-exam-scoring",
  "/bbe-mathematics",
  "/bbe-economics-english",
  "/bbe-exam-preparation",
  "/bbe-admission",
  "/parents",
  "/important-features",
  "/features/answer-sheet",
  "/terms",
  "/products",
  "/products/demo-practice",
  "/products/full-course",
  "/products/lite-bbe-course",
] as const;

export type LocalizablePath = (typeof LOCALIZABLE_PATHS)[number];

const LOCALIZABLE_SET = new Set<string>(LOCALIZABLE_PATHS);

export const SITE_ORIGIN = "https://bbe-school.com";

export function isLocalePrefix(value: string | undefined | null): value is LocalePrefix {
  return !!value && LOCALE_SET.has(value);
}

export function normalizeAppPath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  const trimmed = pathname.replace(/\/+$/, "") || "/";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

/** Returns `de` / `uk` when the path starts with a locale prefix; otherwise null. */
export function getLocaleFromPath(pathname: string): LocalePrefix | null {
  const path = normalizeAppPath(pathname);
  if (path === "/") return null;
  const first = path.split("/").filter(Boolean)[0];
  return isLocalePrefix(first) ? first : null;
}

/** Strip `/de` or `/uk` prefix; English paths are unchanged. */
export function stripLocalePrefix(pathname: string): string {
  const path = normalizeAppPath(pathname);
  const locale = getLocaleFromPath(path);
  if (!locale) return path;
  const rest = path.slice(locale.length + 1);
  return rest ? normalizeAppPath(rest) : "/";
}

export function isLocalizablePath(pathname: string): pathname is LocalizablePath {
  return LOCALIZABLE_SET.has(normalizeAppPath(pathname));
}

/**
 * Map a path to the URL for a given language.
 * Non-localizable paths (dashboard, practice, etc.) stay unprefixed.
 */
export function localizePath(pathname: string, lang: Lang): string {
  const hashIndex = pathname.indexOf("#");
  const hash = hashIndex >= 0 ? pathname.slice(hashIndex) : "";
  const pathOnly = hashIndex >= 0 ? pathname.slice(0, hashIndex) : pathname;
  const base = stripLocalePrefix(pathOnly);

  if (!isLocalizablePath(base) || lang === "en") {
    return `${base === "/" ? "/" : base}${hash}`;
  }

  if (base === "/") return `/${lang}${hash}`;
  return `/${lang}${base}${hash}`;
}

export function absoluteUrl(pathname: string): string {
  const path = normalizeAppPath(pathname);
  return path === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`;
}

/** `<link rel="alternate" hreflang=...>` entries for a localizable English path. */
export function hreflangLinks(pathname: string): { rel: string; hrefLang: string; href: string }[] {
  const base = stripLocalePrefix(pathname);
  if (!isLocalizablePath(base)) return [];

  return [
    { rel: "alternate", hrefLang: "en", href: absoluteUrl(localizePath(base, "en")) },
    { rel: "alternate", hrefLang: "de", href: absoluteUrl(localizePath(base, "de")) },
    { rel: "alternate", hrefLang: "uk", href: absoluteUrl(localizePath(base, "uk")) },
    { rel: "alternate", hrefLang: "x-default", href: absoluteUrl(localizePath(base, "en")) },
  ];
}

export function localeHeadLinks(lang: LocalePrefix, pathname: string) {
  const base = stripLocalePrefix(pathname);
  const canonicalPath = localizePath(base, lang);
  return [
    { rel: "canonical", href: absoluteUrl(canonicalPath) },
    ...hreflangLinks(base),
  ];
}
