import type { Lang } from "./dictionary";

/** Non-default locales that get their own URL prefix. */
export const LOCALE_PREFIXES = ["de", "uk"] as const;
export type LocalePrefix = (typeof LOCALE_PREFIXES)[number];

const LOCALE_SET = new Set<string>(LOCALE_PREFIXES);

/** Marketing / SEO / app chrome pages that have dedicated DE and UK URLs.
 *  Public entries here are included in the generated sitemap automatically. */
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
  "/demo-practice",
  "/login",
  "/signup",
  "/reset-password",
  "/account",
  "/dashboard",
  "/payment/success",
  "/payment/failed",
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
 * Course study surfaces that must stay in English (exam content + study tools).
 * Marketing pages like `/products/full-course` are not included.
 */
export const STUDY_CONTENT_PATH_PREFIXES = [
  "/products/full-course-subjects",
  "/products/full-course-math",
  "/products/full-course-english",
  "/products/full-course-economics",
  "/products/lite-bbe-course-subjects",
  "/products/lite-bbe-course-math",
  "/products/lite-bbe-course-english",
  "/products/lite-bbe-course-economics",
  "/products/custom-mock-builder",
  "/mock-exams",
  "/flashcards",
  "/matching",
  "/tutor-exam",
  "/practice",
  "/demo-practice",
] as const;

/** True for full/lite course study, games, mock builder, and mock exams. */
export function isStudyContentPath(pathname: string): boolean {
  const path = stripLocalePrefix(pathname);
  return STUDY_CONTENT_PATH_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );
}

/**
 * Map a path to the URL for a given language.
 * Non-localizable paths (subject practice, admin, etc.) stay unprefixed.
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
