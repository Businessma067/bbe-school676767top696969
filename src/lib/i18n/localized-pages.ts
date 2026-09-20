import type { ComponentType } from "react";
import type { LocalizablePath } from "./locale-path";

import { Index } from "@/routes/index";
import { BbeLandingPage } from "@/routes/bbe";
import { BbeEntranceExamHubPage } from "@/routes/bbe-entrance-exam";
import { BbeExamScoringPage } from "@/routes/bbe-exam-scoring";
import { BbeMathematicsPage } from "@/routes/bbe-mathematics";
import { BbeEconomicsEnglishPage } from "@/routes/bbe-economics-english";
import { BbeExamPreparationPage } from "@/routes/bbe-exam-preparation";
import { BbeAdmissionPage } from "@/routes/bbe-admission";
import { BbeVsWisoPage } from "@/routes/bbe-vs-wiso";
import { WuViennaOverviewPage } from "@/routes/wu-vienna";
import { WisoLandingPage } from "@/routes/wiso.index";
import { WisoEntranceExamPage } from "@/routes/wiso.entrance-exam";
import { WisoExamScoringPage } from "@/routes/wiso.exam-scoring";
import { WisoMathematicsPage } from "@/routes/wiso.mathematics";
import { WisoEconomicsGermanPage } from "@/routes/wiso.economics-german";
import { WisoExamPreparationPage } from "@/routes/wiso.exam-preparation";
import { WisoAdmissionPage } from "@/routes/wiso.admission";
import { WisoWuViennaPage } from "@/routes/wiso.wu-vienna";
import { WisoFullCourseProduct } from "@/routes/wiso.products.full-course";
import { WisoDemoPractice } from "@/routes/wiso.demo-practice.index";
import { WisoMockExamsPlaceholder } from "@/routes/wiso.mock-exams";
import { ParentsPage } from "@/routes/parents";
import { ImportantFeaturesPage } from "@/routes/important-features";
import { AnswerSheetFeaturePage } from "@/routes/features.answer-sheet";
import { TermsPage } from "@/routes/terms";
import { PrivacyPage } from "@/routes/privacy";
import { ProductsPage } from "@/routes/products.index";
import { DemoPracticeProduct } from "@/routes/products.demo-practice";
import { FullCourseProduct } from "@/routes/products.full-course";
import { DemoPractice } from "@/routes/demo-practice.index";
import { LoginPage } from "@/routes/login";
import { SignupPage } from "@/routes/signup";
import { ResetPasswordPage } from "@/routes/reset-password";
import { AccountPage } from "@/routes/account";
import { DashboardRoutePage } from "@/routes/dashboard";
import { PaymentSuccessPage } from "@/routes/payment.success";
import { PaymentFailedPage } from "@/routes/payment.failed";

export const LOCALIZED_PAGE_COMPONENTS: Record<LocalizablePath, ComponentType> = {
  "/": Index,
  "/bbe": BbeLandingPage,
  "/bbe-entrance-exam": BbeEntranceExamHubPage,
  "/bbe-exam-scoring": BbeExamScoringPage,
  "/bbe-mathematics": BbeMathematicsPage,
  "/bbe-economics-english": BbeEconomicsEnglishPage,
  "/bbe-exam-preparation": BbeExamPreparationPage,
  "/bbe-admission": BbeAdmissionPage,
  "/bbe-vs-wiso": BbeVsWisoPage,
  "/wu-vienna": WuViennaOverviewPage,
  "/wiso": WisoLandingPage,
  "/wiso/entrance-exam": WisoEntranceExamPage,
  "/wiso/exam-scoring": WisoExamScoringPage,
  "/wiso/mathematics": WisoMathematicsPage,
  "/wiso/economics-german": WisoEconomicsGermanPage,
  "/wiso/exam-preparation": WisoExamPreparationPage,
  "/wiso/admission": WisoAdmissionPage,
  "/wiso/wu-vienna": WisoWuViennaPage,
  "/wiso/products": ProductsPage,
  "/wiso/products/full-course": WisoFullCourseProduct,
  "/wiso/demo-practice": WisoDemoPractice,
  "/wiso/mock-exams": WisoMockExamsPlaceholder,
  "/parents": ParentsPage,
  "/important-features": ImportantFeaturesPage,
  "/features/answer-sheet": AnswerSheetFeaturePage,
  "/terms": TermsPage,
  "/privacy": PrivacyPage,
  "/products": ProductsPage,
  "/products/demo-practice": DemoPracticeProduct,
  "/products/full-course": FullCourseProduct,
  "/demo-practice": DemoPractice,
  "/login": LoginPage,
  "/signup": SignupPage,
  "/reset-password": ResetPasswordPage,
  "/account": AccountPage,
  "/dashboard": DashboardRoutePage,
  "/payment/success": PaymentSuccessPage,
  "/payment/failed": PaymentFailedPage,
};

export function getLocalizedPage(pathname: string): ComponentType | null {
  return LOCALIZED_PAGE_COMPONENTS[pathname as LocalizablePath] ?? null;
}
