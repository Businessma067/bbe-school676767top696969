import type { LocalizablePath } from "./locale-path";

import { Route as BbeAdmissionRoute } from "@/routes/bbe-admission";
import { Route as BbeEconomicsEnglishRoute } from "@/routes/bbe-economics-english";
import { Route as BbeEntranceExamRoute } from "@/routes/bbe-entrance-exam";
import { Route as BbeExamPreparationRoute } from "@/routes/bbe-exam-preparation";
import { Route as BbeExamScoringRoute } from "@/routes/bbe-exam-scoring";
import { Route as BbeMathematicsRoute } from "@/routes/bbe-mathematics";
import { Route as BbeVsWisoRoute } from "@/routes/bbe-vs-wiso";
import { Route as BbeLandingRoute } from "@/routes/bbe";
import { Route as WuViennaRoute } from "@/routes/wu-vienna";
import { Route as WisoLandingRoute } from "@/routes/wiso.index";
import { Route as WisoEntranceExamRoute } from "@/routes/wiso.entrance-exam";
import { Route as WisoExamScoringRoute } from "@/routes/wiso.exam-scoring";
import { Route as WisoMathematicsRoute } from "@/routes/wiso.mathematics";
import { Route as WisoEconomicsGermanRoute } from "@/routes/wiso.economics-german";
import { Route as WisoExamPreparationRoute } from "@/routes/wiso.exam-preparation";
import { Route as WisoAdmissionRoute } from "@/routes/wiso.admission";
import { Route as WisoWuViennaRoute } from "@/routes/wiso.wu-vienna";
import { Route as WisoFullCourseRoute } from "@/routes/wiso.products.full-course";
import { Route as WisoDemoPracticeRoute } from "@/routes/wiso.demo-practice.index";
import { Route as WisoMockExamsRoute } from "@/routes/wiso.mock-exams";
import { Route as DemoPracticeRoute } from "@/routes/demo-practice.index";
import { Route as DemoMockRoute } from "@/routes/demo-mock";
import { Route as AnswerSheetRoute } from "@/routes/features.answer-sheet";
import { Route as ImportantFeaturesRoute } from "@/routes/important-features";
import { Route as ParentsRoute } from "@/routes/parents";
import { Route as NewsRoute } from "@/routes/news";
import { Route as DemoPracticeProductRoute } from "@/routes/products.demo-practice";
import { Route as FullCourseRoute } from "@/routes/products.full-course";
import { Route as ProductsRoute } from "@/routes/products.index";
import { Route as TermsRoute } from "@/routes/terms";
import { Route as PrivacyRoute } from "@/routes/privacy";
import { Route as LoginRoute } from "@/routes/login";
import { Route as SignupRoute } from "@/routes/signup";
import { Route as ResetPasswordRoute } from "@/routes/reset-password";
import { Route as AccountRoute } from "@/routes/account";
import { Route as DashboardRoute } from "@/routes/dashboard";
import { Route as PaymentSuccessRoute } from "@/routes/payment.success";
import { Route as PaymentFailedRoute } from "@/routes/payment.failed";

type HeadFnResult = {
  meta?: Array<Record<string, string>>;
  links?: Array<Record<string, string>>;
  scripts?: Array<Record<string, unknown>>;
};

function callHead(route: { options: { head?: (ctx: never) => unknown } }): HeadFnResult | undefined {
  const head = route.options.head;
  if (!head) return undefined;
  return head({} as never) as HeadFnResult;
}

function headFrom(route: unknown): HeadFnResult | undefined {
  return callHead(route as { options: { head?: (ctx: never) => unknown } });
}

const ENGLISH_HEAD_BY_PATH: Partial<Record<LocalizablePath, () => HeadFnResult | undefined>> = {
  "/bbe": () => headFrom(BbeLandingRoute),
  "/bbe-entrance-exam": () => headFrom(BbeEntranceExamRoute),
  "/bbe-exam-scoring": () => headFrom(BbeExamScoringRoute),
  "/bbe-mathematics": () => headFrom(BbeMathematicsRoute),
  "/bbe-economics-english": () => headFrom(BbeEconomicsEnglishRoute),
  "/bbe-exam-preparation": () => headFrom(BbeExamPreparationRoute),
  "/bbe-admission": () => headFrom(BbeAdmissionRoute),
  "/bbe-vs-wiso": () => headFrom(BbeVsWisoRoute),
  "/wu-vienna": () => headFrom(WuViennaRoute),
  "/wiso": () => headFrom(WisoLandingRoute),
  "/wiso/entrance-exam": () => headFrom(WisoEntranceExamRoute),
  "/wiso/exam-scoring": () => headFrom(WisoExamScoringRoute),
  "/wiso/mathematics": () => headFrom(WisoMathematicsRoute),
  "/wiso/economics-german": () => headFrom(WisoEconomicsGermanRoute),
  "/wiso/exam-preparation": () => headFrom(WisoExamPreparationRoute),
  "/wiso/admission": () => headFrom(WisoAdmissionRoute),
  "/wiso/wu-vienna": () => headFrom(WisoWuViennaRoute),
  "/wiso/products": () => headFrom(ProductsRoute),
  "/wiso/products/full-course": () => headFrom(WisoFullCourseRoute),
  "/wiso/demo-practice": () => headFrom(WisoDemoPracticeRoute),
  "/wiso/mock-exams": () => headFrom(WisoMockExamsRoute),
  "/parents": () => headFrom(ParentsRoute),
  "/news": () => headFrom(NewsRoute),
  "/important-features": () => headFrom(ImportantFeaturesRoute),
  "/features/answer-sheet": () => headFrom(AnswerSheetRoute),
  "/terms": () => headFrom(TermsRoute),
  "/privacy": () => headFrom(PrivacyRoute),
  "/products": () => headFrom(ProductsRoute),
  "/products/demo-practice": () => headFrom(DemoPracticeProductRoute),
  "/products/full-course": () => headFrom(FullCourseRoute),
  "/demo-practice": () => headFrom(DemoPracticeRoute),
  "/demo-mock": () => headFrom(DemoMockRoute),
  "/login": () => headFrom(LoginRoute),
  "/signup": () => headFrom(SignupRoute),
  "/reset-password": () => headFrom(ResetPasswordRoute),
  "/account": () => headFrom(AccountRoute),
  "/dashboard": () => headFrom(DashboardRoute),
  "/payment/success": () => headFrom(PaymentSuccessRoute),
  "/payment/failed": () => headFrom(PaymentFailedRoute),
};

export function getEnglishHeadForPath(pathname: string): HeadFnResult | undefined {
  const getter = ENGLISH_HEAD_BY_PATH[pathname as LocalizablePath];
  return getter?.();
}
