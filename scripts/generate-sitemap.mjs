/**
 * Zero-dependency sitemap writer. Keep path lists in sync with src/lib/sitemap.ts
 * (PRIVATE_PATH_PREFIXES / PRIVATE_PATHS_EXACT) and public LOCALIZABLE_PATHS.
 *
 * Excludes gated study surfaces and unfinished WiSo tool placeholders
 * (full-course subjects, mock builder, mock exams, flashcards, demo-practice).
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SITE = "https://bbe-school.com";
const LOCALES = ["de", "uk"];

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
  "/parents",
  "/important-features",
  "/features/answer-sheet",
  "/terms",
  "/privacy",
  "/products",
  "/products/demo-practice",
  "/products/full-course",
  "/products/lite-bbe-course",
  "/demo-practice",
];

const ENGLISH_ONLY = [
  "/demo-practice/economics",
  "/demo-practice/math",
  "/demo-practice/english",
];

function abs(path) {
  return path === "/" ? `${SITE}/` : `${SITE}${path}`;
}

function localize(path, lang) {
  if (lang === "en") return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

function priorityFor(path) {
  if (path === "/") return "1.0";
  if (path === "/products") return "0.9";
  if (path === "/terms" || path === "/privacy") return "0.3";
  if (path === "/important-features" || path === "/features/answer-sheet") return "0.6";
  if (path === "/parents") return "0.7";
  if (path.startsWith("/demo-practice/")) return "0.7";
  return "0.8";
}

function escapeXml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
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
  return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <priority>${priorityFor(englishPath)}</priority>${linkBlock}\n  </url>`;
}

function render() {
  const blocks = [];
  for (const lang of ["en", ...LOCALES]) {
    for (const path of PUBLIC_LOCALIZABLE) {
      blocks.push(urlBlock(localize(path, lang), path, true));
    }
    if (lang === "en") {
      for (const path of ENGLISH_ONLY) {
        blocks.push(urlBlock(path, path, false));
      }
    }
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated from src/lib/sitemap.ts on 2026-09-16. -->
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
