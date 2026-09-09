import economicsAsset from "@/assets/economics-bw.jpg.asset.json";
import examHallAsset from "@/assets/exam-hall-real.png.asset.json";
import hallAsset from "@/assets/parents-hall.jpg.asset.json";
import wuAsset from "@/assets/wu-vienna.jpg.asset.json";
import fullProduct from "@/assets/full-course-product.png.asset.json";
import liteProduct from "@/assets/lite-bbe-course.png.asset.json";
import demoSlide1 from "@/assets/demo-slide-1.png.asset.json";
import { SITE_ORIGIN } from "@/lib/i18n/locale-path";

/** Absolute URL for Open Graph / Twitter images (crawlers reject relative paths). */
export function absoluteMediaUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_ORIGIN}${path}`;
}

export function socialImageMeta(pathOrUrl: string): Array<Record<string, string>> {
  const url = absoluteMediaUrl(pathOrUrl);
  return [
    { property: "og:image", content: url },
    { name: "twitter:image", content: url },
  ];
}

/** Homepage product screenshot — used as the sitewide default share image. */
export const DEFAULT_SOCIAL_IMAGE = absoluteMediaUrl("/how-it-works/economics-poster.jpg");

/** Campus hero shared by BBE exam guide shells. */
export const WU_CAMPUS_SOCIAL_IMAGE = absoluteMediaUrl(wuAsset.url);

/**
 * Per-route share images taken from visuals that appear on each page
 * (or the subject/product art that represents that URL).
 */
export const PAGE_SOCIAL_IMAGES: Record<string, string> = {
  "/": DEFAULT_SOCIAL_IMAGE,
  "/bbe-entrance-exam": WU_CAMPUS_SOCIAL_IMAGE,
  "/bbe-exam-scoring": WU_CAMPUS_SOCIAL_IMAGE,
  "/bbe-mathematics": WU_CAMPUS_SOCIAL_IMAGE,
  "/bbe-economics-english": WU_CAMPUS_SOCIAL_IMAGE,
  "/bbe-exam-preparation": WU_CAMPUS_SOCIAL_IMAGE,
  "/bbe-admission": WU_CAMPUS_SOCIAL_IMAGE,
  "/bbe-vs-wiso": WU_CAMPUS_SOCIAL_IMAGE,
  "/parents": absoluteMediaUrl(hallAsset.url),
  "/important-features": absoluteMediaUrl(examHallAsset.url),
  "/features/answer-sheet": absoluteMediaUrl(examHallAsset.url),
  "/products": absoluteMediaUrl(fullProduct.url),
  "/products/demo-practice": absoluteMediaUrl(demoSlide1.url),
  "/products/full-course": absoluteMediaUrl(fullProduct.url),
  "/products/lite-bbe-course": absoluteMediaUrl(liteProduct.url),
  "/demo-practice": absoluteMediaUrl(economicsAsset.url),
  // Economics practice: subject card art (distinct from homepage product poster)
  "/demo-practice/economics": absoluteMediaUrl(economicsAsset.url),
  "/demo-practice/math": absoluteMediaUrl("/how-it-works/math-poster.jpg"),
  "/demo-practice/english": absoluteMediaUrl("/how-it-works/english-poster.jpg"),
};

export function socialImageMetaForPath(pathname: string) {
  return socialImageMeta(PAGE_SOCIAL_IMAGES[pathname] ?? DEFAULT_SOCIAL_IMAGE);
}
