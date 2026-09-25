import { WISO_EXAM_FORMAT } from "@/config/wiso-exam-hub";
import { absoluteUrl } from "@/lib/i18n/locale-path";
import { PAGE_SOCIAL_IMAGES, WU_CAMPUS_SOCIAL_IMAGE } from "@/lib/seo/social-image";

const WU_UNIVERSITY = {
  "@type": "CollegeOrUniversity",
  name: "WU Vienna University of Economics and Business",
  alternateName: ["Wirtschaftsuniversität Wien", "WU Wien"],
  url: "https://www.wu.ac.at/",
} as const;

const PUBLISHER = {
  "@type": "Organization",
  name: "BBE School",
  url: absoluteUrl("/"),
  logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png") },
} as const;

const WISO_PROGRAM = {
  "@type": "EducationalOccupationalProgram",
  name: "Bachelor Wirtschafts- und Sozialwissenschaften (WiSo)",
  alternateName: ["WiSo", "WU WiSo Bachelor"],
  provider: WU_UNIVERSITY,
} as const;

const WISO_EXAM_THING = {
  "@type": "Thing",
  name: "WiSo Aufnahmeprüfung (WU Vienna WiSo entrance exam)",
  alternateName: ["WiSo exam", "WiSo Aufnahmetest", "WU Aufnahmeprüfung WiSo"],
} as const;

/** Shared search phrases for the WiSo hub (EN + DE, as applicants actually type them). */
export const WISO_KEYWORDS = [
  "WiSo exam",
  "WiSo entrance exam",
  "WiSo Aufnahmeprüfung",
  "WiSo Aufnahmetest",
  "WU Aufnahmeprüfung",
  "WU Wien WiSo",
  "WU Vienna WiSo",
  "Wirtschaft verstehen",
  "WiSo Vorbereitung",
] as const;

type WisoGuideSeo = {
  path: string;
  /** Short breadcrumb label for this page (the WiSo hub itself uses two crumbs). */
  crumb: string;
  headline: string;
  description: string;
  keywords?: readonly string[];
};

function wisoBreadcrumbJsonLd(path: string, crumb: string) {
  const items = [
    { name: "Home", item: absoluteUrl("/") },
    { name: "WiSo", item: absoluteUrl("/wiso") },
  ];
  if (path !== "/wiso") items.push({ name: crumb, item: absoluteUrl(path) });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      ...entry,
    })),
  };
}

function wisoArticleJsonLd({
  path,
  headline,
  description,
  keywords = WISO_KEYWORDS,
}: WisoGuideSeo) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    inLanguage: "en",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: [PAGE_SOCIAL_IMAGES[path] ?? WU_CAMPUS_SOCIAL_IMAGE],
    dateModified: WISO_EXAM_FORMAT.cycle.lastUpdatedIso,
    author: PUBLISHER,
    publisher: PUBLISHER,
    isPartOf: { "@type": "WebSite", name: "BBE School", url: absoluteUrl("/") },
    about: [WISO_EXAM_THING, WISO_PROGRAM],
    keywords: keywords.join(", "),
  };
}

/** Article + BreadcrumbList JSON-LD for a WiSo exam guide page. */
export function wisoGuideJsonLdScripts(seo: WisoGuideSeo) {
  return [
    { type: "application/ld+json", children: JSON.stringify(wisoArticleJsonLd(seo)) },
    {
      type: "application/ld+json",
      children: JSON.stringify(wisoBreadcrumbJsonLd(seo.path, seo.crumb)),
    },
  ];
}

/** BreadcrumbList only (for the WiSo hub, which has its own WebPage schema). */
export function wisoBreadcrumbScript(path: string, crumb: string) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(wisoBreadcrumbJsonLd(path, crumb)),
  };
}

/**
 * URL, locale, and Twitter tags. Without explicit twitter:title/description the
 * root route's BBE-branded values leak onto every WiSo page.
 */
export function wisoShareMeta(path: string, title: string, description: string) {
  return [
    { property: "og:url", content: absoluteUrl(path) },
    { property: "og:locale", content: "en_US" },
    // HeadContent dedupes meta by property, so only one alternate survives.
    { property: "og:locale:alternate", content: "de_AT" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}
