import {
  LOCALIZABLE_PATHS,
  LOCALE_PREFIXES,
  absoluteUrl,
  hreflangLinks,
  localizePath,
} from "./i18n/locale-path";

const SITEMAP_LANGS = ["en", ...LOCALE_PREFIXES] as const;

/**
 * Auth, account, payment, and other non-indexable prefixes.
 * New public pages in LOCALIZABLE_PATHS are included automatically unless they
 * match one of these prefixes.
 *
 * Study hubs (/flashcards, /matching, /tutor-exam, /mock-exams) are public
 * landing pages and stay in the sitemap; paid task URLs under products/ are not.
 */
const PRIVATE_PATH_PREFIXES = [
  "/admin",
  "/account",
  "/dashboard",
  "/auth",
  "/login",
  "/signup",
  "/reset-password",
  "/forgot-password",
  "/confirm-email",
  "/api",
  "/payment",
  "/payment-result",
  "/practice",
  "/bbe-entrance-exam-guide",
  "/products/full-course-subjects",
  "/products/full-course-math",
  "/products/full-course-english",
  "/products/full-course-economics",
  "/products/custom-mock-builder",
  "/products/lite-bbe-course-subjects",
  "/products/lite-bbe-course-math",
  "/products/lite-bbe-course-english",
  "/products/lite-bbe-course-economics",
] as const;

export const ENGLISH_ONLY_INDEXABLE_PATHS = [
  "/demo-practice/economics",
  "/demo-practice/math",
  "/demo-practice/english",
  "/mock-exams",
  "/flashcards",
  "/flashcards/economics",
  "/flashcards/math",
  "/flashcards/english",
  "/matching",
  "/matching/economics",
  "/matching/math",
  "/matching/english",
  "/tutor-exam",
  "/tutor-exam/economics",
  "/tutor-exam/math",
  "/tutor-exam/english",
] as const;

type SitemapEntry = {
  loc: string;
  priority: string;
  alternates: { hrefLang: string; href: string }[];
};

function matchesPrefix(path: string, prefix: string): boolean {
  return path === prefix || path.startsWith(`${prefix}/`);
}

export function isSitemapIndexablePath(pathname: string): boolean {
  return !PRIVATE_PATH_PREFIXES.some((prefix) => matchesPrefix(pathname, prefix));
}

function priorityFor(englishPath: string): string {
  if (englishPath === "/") return "1.0";
  if (englishPath === "/products") return "0.9";
  if (englishPath === "/terms") return "0.3";
  if (englishPath === "/important-features" || englishPath === "/features/answer-sheet") {
    return "0.6";
  }
  if (englishPath === "/parents") return "0.7";
  if (englishPath.startsWith("/demo-practice/")) return "0.7";
  if (
    englishPath === "/mock-exams" ||
    englishPath === "/flashcards" ||
    englishPath === "/matching" ||
    englishPath === "/tutor-exam"
  ) {
    return "0.6";
  }
  if (
    englishPath.startsWith("/flashcards/") ||
    englishPath.startsWith("/matching/") ||
    englishPath.startsWith("/tutor-exam/")
  ) {
    return "0.5";
  }
  return "0.8";
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

/** Canonical sitemap URLs in language groups: English, then German, then Ukrainian. */
export function getSitemapEntries(): SitemapEntry[] {
  const publicLocalizable = LOCALIZABLE_PATHS.filter((path) => isSitemapIndexablePath(path));
  const entries: SitemapEntry[] = [];

  const localizableSet = new Set<string>(LOCALIZABLE_PATHS);

  for (const code of SITEMAP_LANGS) {
    for (const path of publicLocalizable) {
      const localized = localizePath(path, code);
      entries.push({
        loc: absoluteUrl(localized),
        priority: priorityFor(path),
        alternates: hreflangLinks(path).map(({ hrefLang, href }) => ({ hrefLang, href })),
      });
    }

    if (code === "en") {
      for (const path of ENGLISH_ONLY_INDEXABLE_PATHS) {
        if (!isSitemapIndexablePath(path) || localizableSet.has(path)) continue;
        entries.push({
          loc: absoluteUrl(path),
          priority: priorityFor(path),
          alternates: [],
        });
      }
    }
  }

  return entries;
}

export function renderSitemapXml(): string {
  const urls = getSitemapEntries()
    .map((entry) => {
      const links = entry.alternates
        .map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hrefLang)}" href="${escapeXml(alt.href)}"/>`,
        )
        .join("\n");
      const linkBlock = links ? `\n${links}` : "";
      return `  <url>\n    <loc>${escapeXml(entry.loc)}</loc>\n    <priority>${entry.priority}</priority>${linkBlock}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated from src/lib/sitemap.ts on 2026-09-05. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

export function sitemapXmlResponse(method: string = "GET"): Response {
  const body = method === "HEAD" ? null : renderSitemapXml();
  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
