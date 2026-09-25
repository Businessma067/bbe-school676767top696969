import type { LocalePrefix } from "./locale-path";
import {
  absoluteUrl,
  isLocalizablePath,
  localeHeadLinks,
  localizePath,
  normalizeAppPath,
  SITE_ORIGIN,
  stripLocalePrefix,
} from "./locale-path";
import { translate } from "./dictionary";

type HeadFnResult = {
  meta?: Array<Record<string, string>>;
  links?: Array<Record<string, string>>;
  scripts?: Array<Record<string, unknown>>;
};

const OG_LOCALE: Record<LocalePrefix | "en", string> = {
  en: "en_US",
  de: "de_AT",
  uk: "uk_UA",
};

const TRANSLATED_META_KEYS = new Set([
  "description",
  "og:title",
  "og:description",
  "twitter:title",
  "twitter:description",
]);

/** schema.org text fields worth localizing (FAQ questions/answers, article copy). */
const TRANSLATED_JSON_LD_KEYS = new Set(["name", "headline", "description", "text"]);

function localizeSiteUrl(value: string, lang: LocalePrefix): string {
  if (!value.startsWith(SITE_ORIGIN)) return value;
  const path = normalizeAppPath(value.slice(SITE_ORIGIN.length) || "/");
  if (path === "/" || !isLocalizablePath(path)) return value;
  return absoluteUrl(localizePath(path, lang));
}

function localizeJsonLd(node: unknown, lang: LocalePrefix, key?: string): unknown {
  if (Array.isArray(node)) return node.map((item) => localizeJsonLd(item, lang, key));
  if (node && typeof node === "object") {
    return Object.fromEntries(
      Object.entries(node).map(([k, v]) => [k, localizeJsonLd(v, lang, k)]),
    );
  }
  if (typeof node !== "string") return node;
  if (key === "inLanguage") return lang;
  if (key === "url" || key === "item" || key === "@id" || key === "mainEntityOfPage") {
    return localizeSiteUrl(node, lang);
  }
  if (key && TRANSLATED_JSON_LD_KEYS.has(key)) return translate(node, lang) ?? node;
  return node;
}

function localizeScripts(scripts: HeadFnResult["scripts"], lang: LocalePrefix) {
  return scripts?.map((script) => {
    if (script.type !== "application/ld+json" || typeof script.children !== "string") return script;
    try {
      const localized = localizeJsonLd(JSON.parse(script.children), lang);
      return { ...script, children: JSON.stringify(localized) };
    } catch {
      return script;
    }
  });
}

/**
 * Head for locale-prefixed marketing pages: keep English SEO copy (client
 * translator does not rewrite <head>), but set the correct canonical + hreflang.
 */
export function buildLocaleHead(lang: LocalePrefix, pathname: string, englishHead?: HeadFnResult) {
  const base = stripLocalePrefix(pathname);
  const path = normalizeAppPath(base);
  const links = [
    ...localeHeadLinks(lang, path),
    ...(englishHead?.links ?? []).filter((l) => l.rel !== "canonical"),
  ];

  const meta = (englishHead?.meta ?? []).map((entry) => {
    if (entry.title) {
      return { ...entry, title: translate(entry.title, lang) ?? entry.title };
    }
    const metaKey = entry.name ?? entry.property;
    if (metaKey && TRANSLATED_META_KEYS.has(metaKey) && entry.content) {
      return { ...entry, content: translate(entry.content, lang) ?? entry.content };
    }
    if (entry.property === "og:locale") return { ...entry, content: OG_LOCALE[lang] };
    if (entry.property === "og:locale:alternate") return { ...entry, content: OG_LOCALE.en };
    // Keep absolute social image URLs as-is (do not translate).
    if (entry.property === "og:url") {
      const canonical = localeHeadLinks(lang, path).find((l) => l.rel === "canonical");
      return canonical ? { ...entry, content: canonical.href } : entry;
    }
    return entry;
  });

  return {
    meta,
    links,
    scripts: localizeScripts(englishHead?.scripts, lang),
  };
}
