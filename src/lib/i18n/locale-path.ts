import type { Lang } from "./dictionary";

/** Non-default locales that get their own URL prefix. */
export const LOCALE_PREFIXES = ["de", "uk"] as const;
export type LocalePrefix = (typeof LOCALE_PREFIXES)[number];

const LOCALE_SET = new Set<string>(LOCALE_PREFIXES);

/** Marketing / SEO / app chrome pages that have dedicated DE and UK URLs.
 *  Public entries here are included in the generated sitemap automatically. */
export const LOCALIZABLE_PATHS = [
  "/",
  "/bbe",
  "/bbe-entrance-exam",
  "/bbe-exam-scoring",
  "/bbe-mathematics",
  "/bbe-economics-english",
  "/bbe-exam-preparation",
  "/bbe-admission",
  "/bbe-vs-wiso",
  "/wu-vienna",
  "/wiso",
  "/wiso/entrance-exam",
  "/wiso/exam-scoring",
  "/wiso/mathematics",
  "/wiso/economics-german",
  "/wiso/exam-preparation",
  "/wiso/admission",
  "/wiso/wu-vienna",
  "/wiso/products",
  "/wiso/products/full-course",
  "/wiso/demo-practice",
  "/wiso/mock-exams",
  "/parents",
  "/news",
  "/important-features",
  "/features/answer-sheet",
  "/terms",
  "/privacy",
  "/products",
  "/products/demo-practice",
  "/products/full-course",
  "/demo-practice",
  "/demo-mock",
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
 * Course study surfaces that skip marketing PageTranslator / locale URLs
 * (exam content + study tools). Marketing pages like `/products/full-course`
 * are not included. WiSo study UI is authored in German.
 */
export const STUDY_CONTENT_PATH_PREFIXES = [
  "/products/full-course-subjects",
  "/products/full-course-math",
  "/products/full-course-english",
  "/products/full-course-economics",
  "/products/full-course-wiso-economics",
  "/wiso/products/full-course-subjects",
  "/wiso/products/full-course-math",
  "/wiso/products/full-course-economics",
  "/wiso/products/full-course-german",
  "/products/custom-mock-builder",
  "/wiso/mock-builder",
  "/mock-exams",
  "/flashcards",
  "/matching",
  "/tutor-exam",
  "/wiso/flashcards",
  "/wiso/matching",
  "/wiso/tutor-exam",
  "/practice",
  "/demo-practice",
] as const;

/** True for full course study, games, mock builder, and mock exams. */
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

  // Study tools / course drills stay on unprefixed gated routes (never /de|/uk).
  if (isStudyContentPath(base) || !isLocalizablePath(base) || lang === "en") {
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
  // Study routes redirect /de|/uk back to the English URL, so they have no alternates.
  if (!isLocalizablePath(base) || isStudyContentPath(base)) return [];

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
