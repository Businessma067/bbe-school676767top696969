import type { ComponentType } from "react";
import type { LocalizablePath } from "./locale-path";

import { Index } from "@/routes/index";
import { BbeEntranceExamHubPage } from "@/routes/bbe-entrance-exam";
import { BbeExamScoringPage } from "@/routes/bbe-exam-scoring";
import { BbeMathematicsPage } from "@/routes/bbe-mathematics";
import { BbeEconomicsEnglishPage } from "@/routes/bbe-economics-english";
import { BbeExamPreparationPage } from "@/routes/bbe-exam-preparation";
import { BbeAdmissionPage } from "@/routes/bbe-admission";
import { ParentsPage } from "@/routes/parents";
import { ImportantFeaturesPage } from "@/routes/important-features";
import { AnswerSheetFeaturePage } from "@/routes/features.answer-sheet";
import { TermsPage } from "@/routes/terms";
import { ProductsPage } from "@/routes/products.index";
import { DemoPracticeProduct } from "@/routes/products.demo-practice";
import { FullCourseProduct } from "@/routes/products.full-course";
import { LiteBbeCourseProduct } from "@/routes/products.lite-bbe-course";

/**
 * Shared page components for English and locale-prefixed routes.
 * Keep this map in sync with LOCALIZABLE_PATHS.
 */
export const LOCALIZED_PAGE_COMPONENTS: Record<LocalizablePath, ComponentType> = {
  "/": Index,
  "/bbe-entrance-exam": BbeEntranceExamHubPage,
  "/bbe-exam-scoring": BbeExamScoringPage,
  "/bbe-mathematics": BbeMathematicsPage,
  "/bbe-economics-english": BbeEconomicsEnglishPage,
  "/bbe-exam-preparation": BbeExamPreparationPage,
  "/bbe-admission": BbeAdmissionPage,
  "/parents": ParentsPage,
  "/important-features": ImportantFeaturesPage,
  "/features/answer-sheet": AnswerSheetFeaturePage,
  "/terms": TermsPage,
  "/products": ProductsPage,
  "/products/demo-practice": DemoPracticeProduct,
  "/products/full-course": FullCourseProduct,
  "/products/lite-bbe-course": LiteBbeCourseProduct,
};

export function getLocalizedPage(pathname: string): ComponentType | null {
  return LOCALIZED_PAGE_COMPONENTS[pathname as LocalizablePath] ?? null;
}
