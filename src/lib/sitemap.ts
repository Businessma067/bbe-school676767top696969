import {
  LOCALIZABLE_PATHS,
  LOCALE_PREFIXES,
  absoluteUrl,
  hreflangLinks,
  localizePath,
} from "./i18n/locale-path";
import { WISO_EXAM_FORMAT } from "../config/wiso-exam-hub";

const SITEMAP_LANGS = ["en", ...LOCALE_PREFIXES] as const;

/**
 * Auth, account, payment, gated study tools, and other non-indexable prefixes.
 * New public pages in LOCALIZABLE_PATHS are included automatically unless they
 * match one of these prefixes (or an exact private path below).
 *
 * Public: exam-info guides, product/sales pages, demo course hubs, and the demo
 * mock landing page (EN/DE/UK). Excluded: paywalled full-course study, mock
 * exam catalogs, mock builders, and study tools (flashcards, matching, tutor).
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
  "/products/full-course-wiso-economics",
  "/wiso/products/full-course-subjects",
  "/wiso/products/full-course-math",
  "/wiso/products/full-course-economics",
  "/wiso/products/full-course-german",
  "/mock-exams",
  "/wiso/mock-exams",
  "/wiso/mock-builder",
  "/flashcards",
  "/matching",
  "/tutor-exam",
  "/wiso/flashcards",
  "/wiso/matching",
  "/wiso/tutor-exam",
  "/demo-practice/flashcards",
  "/demo-practice/matching",
  "/demo-practice/tutor-exam",
  "/wiso/demo-practice/flashcards",
  "/wiso/demo-practice/matching",
  "/wiso/demo-practice/tutor-exam",
  "/products/custom-mock-builder",
] as const;

/** Exact paths that redirect or must not be indexed (prefix rules would over-match). */
const PRIVATE_PATHS_EXACT = new Set<string>([
  "/wiso/products", // redirects to shared /products
]);

/** Free demo course subject pages that have a single (unprefixed) URL. Anything
 *  behind a course purchase (flashcards, matching, tutor exam, mock exams,
 *  course subjects) is intentionally excluded. */
export const ENGLISH_ONLY_INDEXABLE_PATHS = [
  "/demo-practice/economics",
  "/demo-practice/math",
  "/demo-practice/english",
  "/wiso/demo-practice/math",
  "/wiso/demo-practice/economics",
  "/wiso/demo-practice/german",
] as const;

type SitemapEntry = {
  loc: string;
  lastmod?: string;
  priority: string;
  alternates: { hrefLang: string; href: string }[];
};

function matchesPrefix(path: string, prefix: string): boolean {
  return path === prefix || path.startsWith(`${prefix}/`);
}

export function isSitemapIndexablePath(pathname: string): boolean {
  if (PRIVATE_PATHS_EXACT.has(pathname)) return false;
  return !PRIVATE_PATH_PREFIXES.some((prefix) => matchesPrefix(pathname, prefix));
}

function priorityFor(englishPath: string): string {
  if (englishPath === "/") return "1.0";
  if (englishPath === "/products") return "0.9";
  if (englishPath === "/terms" || englishPath === "/privacy") return "0.3";
  if (englishPath === "/important-features" || englishPath === "/features/answer-sheet") {
    return "0.6";
  }
  if (englishPath === "/parents") return "0.7";
  if (englishPath.startsWith("/demo-practice/") || englishPath.startsWith("/wiso/demo-practice/")) {
    return "0.7";
  }
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

/** Only pages with a tracked content date get lastmod; a build-time date would be noise. */
function lastmodFor(englishPath: string): string | undefined {
  if (englishPath.startsWith("/wiso/products") || englishPath.startsWith("/wiso/demo-practice")) {
    return undefined;
  }
  if (englishPath === "/wiso" || englishPath.startsWith("/wiso/")) {
    return WISO_EXAM_FORMAT.cycle.lastUpdatedIso;
  }
  return undefined;
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
      if (code !== "en" && localized === path) continue;
      entries.push({
        loc: absoluteUrl(localized),
        lastmod: lastmodFor(path),
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
      const lastmod = entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : "";
      return `  <url>\n    <loc>${escapeXml(entry.loc)}</loc>${lastmod}\n    <priority>${entry.priority}</priority>${linkBlock}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated from src/lib/sitemap.ts on 2026-09-25. -->
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
