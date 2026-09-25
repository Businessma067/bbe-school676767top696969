/**
 * Zero-dependency sitemap writer. Keep path lists in sync with src/lib/sitemap.ts
 * (PRIVATE_PATH_PREFIXES / ENGLISH_ONLY_INDEXABLE_PATHS) and public LOCALIZABLE_PATHS.
 *
 * Includes exam-info guides, product pages, demo course hubs, and the demo mock.
 * Excludes paywalled full-course study, mock exam catalogs, mock builders, and
 * study tools (flashcards, matching, tutor exam).
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SITE = "https://bbe-school.com";
const LOCALES = ["de", "uk"];

const WISO_LASTMOD = /lastUpdatedIso:\s*"([^"]+)"/.exec(
  readFileSync(resolve("src/config/wiso-exam-hub.ts"), "utf8"),
)?.[1];

const PUBLIC_LOCALIZABLE = [
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
  "/wiso/products/full-course",
  "/wiso/demo-practice",
  "/parents",
  "/important-features",
  "/features/answer-sheet",
  "/terms",
  "/privacy",
  "/products",
  "/products/demo-practice",
  "/products/full-course",
  "/demo-practice",
  "/demo-mock",
];

/** Localizable in the nav, but /de and /uk redirect to the English URL. */
const SINGLE_URL = new Set(["/demo-practice"]);

const ENGLISH_ONLY = [
  "/demo-practice/economics",
  "/demo-practice/math",
  "/demo-practice/english",
  "/wiso/demo-practice/math",
  "/wiso/demo-practice/economics",
  "/wiso/demo-practice/german",
];

function abs(path) {
  return path === "/" ? `${SITE}/` : `${SITE}${path}`;
}

function localize(path, lang) {
  if (lang === "en" || SINGLE_URL.has(path)) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

function priorityFor(path) {
  if (path === "/") return "1.0";
  if (path === "/products") return "0.9";
  if (path === "/terms" || path === "/privacy") return "0.3";
  if (path === "/important-features" || path === "/features/answer-sheet") return "0.6";
  if (path === "/parents") return "0.7";
  if (path.startsWith("/demo-practice/") || path.startsWith("/wiso/demo-practice/")) return "0.7";
  return "0.8";
}

function lastmodFor(path) {
  if (path.startsWith("/wiso/products") || path.startsWith("/wiso/demo-practice")) return undefined;
  if (path === "/wiso" || path.startsWith("/wiso/")) return WISO_LASTMOD;
  return undefined;
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function hreflang(path) {
  return [
    ["en", localize(path, "en")],
    ["de", localize(path, "de")],
    ["uk", localize(path, "uk")],
    ["x-default", localize(path, "en")],
  ];
}

function urlBlock(locPath, englishPath, withAlternates) {
  const loc = abs(locPath);
  const links = withAlternates
    ? hreflang(englishPath)
        .map(
          ([lang, href]) =>
            `    <xhtml:link rel="alternate" hreflang="${lang}" href="${escapeXml(abs(href))}"/>`,
        )
        .join("\n")
    : "";
  const linkBlock = links ? `\n${links}` : "";
  const lastmod = lastmodFor(englishPath);
  const lastmodBlock = withAlternates && lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
  return `  <url>\n    <loc>${escapeXml(loc)}</loc>${lastmodBlock}\n    <priority>${priorityFor(englishPath)}</priority>${linkBlock}\n  </url>`;
}

function render() {
  const blocks = [];
  for (const lang of ["en", ...LOCALES]) {
    for (const path of PUBLIC_LOCALIZABLE) {
      if (lang !== "en" && SINGLE_URL.has(path)) continue;
      blocks.push(urlBlock(localize(path, lang), path, !SINGLE_URL.has(path)));
    }
    if (lang === "en") {
      for (const path of ENGLISH_ONLY) {
        blocks.push(urlBlock(path, path, false));
      }
    }
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated from src/lib/sitemap.ts on 2026-09-25. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${blocks.join("\n")}
</urlset>
`;
}

const xml = render();
const locs = (xml.match(/<loc>/g) || []).length;
mkdirSync("public", { recursive: true });
for (const file of ["public/sitemap.xml", "public/pages-sitemap.xml"]) {
  writeFileSync(resolve(file), xml);
  console.log(`wrote ${file} (${Buffer.byteLength(xml)} bytes, ${locs} urls)`);
}
