import type { LocalePrefix } from "./locale-path";
import { localeHeadLinks, normalizeAppPath, stripLocalePrefix } from "./locale-path";
import { translate } from "./dictionary";

type HeadFnResult = {
  meta?: Array<Record<string, string>>;
  links?: Array<Record<string, string>>;
  scripts?: Array<Record<string, unknown>>;
};

/**
 * Head for locale-prefixed marketing pages: keep English SEO copy (client
 * translator does not rewrite <head>), but set the correct canonical + hreflang.
 */
export function buildLocaleHead(lang: LocalePrefix, pathname: string, englishHead?: HeadFnResult) {
  const base = stripLocalePrefix(pathname);
  const path = normalizeAppPath(base);
  const links = [...localeHeadLinks(lang, path), ...(englishHead?.links ?? []).filter((l) => l.rel !== "canonical")];

  const meta = (englishHead?.meta ?? []).map((entry) => {
    if (entry.title) {
      return { ...entry, title: translate(entry.title, lang) ?? entry.title };
    }
    if (entry.name === "description" && entry.content) {
      return { ...entry, content: translate(entry.content, lang) ?? entry.content };
    }
    if (entry.property === "og:title" && entry.content) {
      return { ...entry, content: translate(entry.content, lang) ?? entry.content };
    }
    if (entry.property === "og:description" && entry.content) {
      return { ...entry, content: translate(entry.content, lang) ?? entry.content };
    }
    if (entry.property === "og:url") {
      const canonical = localeHeadLinks(lang, path).find((l) => l.rel === "canonical");
      return canonical ? { ...entry, content: canonical.href } : entry;
    }
    return entry;
  });

  return {
    meta,
    links,
    scripts: englishHead?.scripts,
  };
}
