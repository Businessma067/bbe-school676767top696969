import type { LocalizablePath } from "./locale-path";

import { Route as BbeAdmissionRoute } from "@/routes/bbe-admission";
import { Route as BbeEconomicsEnglishRoute } from "@/routes/bbe-economics-english";
import { Route as BbeEntranceExamRoute } from "@/routes/bbe-entrance-exam";
import { Route as BbeExamPreparationRoute } from "@/routes/bbe-exam-preparation";
import { Route as BbeExamScoringRoute } from "@/routes/bbe-exam-scoring";
import { Route as BbeMathematicsRoute } from "@/routes/bbe-mathematics";
import { Route as BbeVsWisoRoute } from "@/routes/bbe-vs-wiso";
import { Route as DemoPracticeRoute } from "@/routes/demo-practice.index";
import { Route as AnswerSheetRoute } from "@/routes/features.answer-sheet";
import { Route as ImportantFeaturesRoute } from "@/routes/important-features";
import { Route as ParentsRoute } from "@/routes/parents";
import { Route as DemoPracticeProductRoute } from "@/routes/products.demo-practice";
import { Route as FullCourseRoute } from "@/routes/products.full-course";
import { Route as ProductsRoute } from "@/routes/products.index";
import { Route as LiteCourseRoute } from "@/routes/products.lite-bbe-course";
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

/** Call an English route `head` option without fighting TanStack's deep head types. */
function callHead(route: { options: { head?: (ctx: never) => unknown } }): HeadFnResult | undefined {
  const head = route.options.head;
  if (!head) return undefined;
  return head({} as never) as HeadFnResult;
}

function headFrom(route: unknown): HeadFnResult | undefined {
  return callHead(route as { options: { head?: (ctx: never) => unknown } });
}

/**
 * English route head for locale-prefixed marketing URLs (`/de/...`, `/uk/...`).
 * Keep in sync with LOCALIZABLE_PATHS (home `/` is handled by `/$lang/`).
 */
const ENGLISH_HEAD_BY_PATH: Partial<Record<LocalizablePath, () => HeadFnResult | undefined>> = {
  "/bbe-entrance-exam": () => headFrom(BbeEntranceExamRoute),
  "/bbe-exam-scoring": () => headFrom(BbeExamScoringRoute),
  "/bbe-mathematics": () => headFrom(BbeMathematicsRoute),
  "/bbe-economics-english": () => headFrom(BbeEconomicsEnglishRoute),
  "/bbe-exam-preparation": () => headFrom(BbeExamPreparationRoute),
  "/bbe-admission": () => headFrom(BbeAdmissionRoute),
  "/bbe-vs-wiso": () => headFrom(BbeVsWisoRoute),
  "/parents": () => headFrom(ParentsRoute),
  "/important-features": () => headFrom(ImportantFeaturesRoute),
  "/features/answer-sheet": () => headFrom(AnswerSheetRoute),
  "/terms": () => headFrom(TermsRoute),
  "/privacy": () => headFrom(PrivacyRoute),
  "/products": () => headFrom(ProductsRoute),
  "/products/demo-practice": () => headFrom(DemoPracticeProductRoute),
  "/products/full-course": () => headFrom(FullCourseRoute),
  "/products/lite-bbe-course": () => headFrom(LiteCourseRoute),
  "/demo-practice": () => headFrom(DemoPracticeRoute),
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
