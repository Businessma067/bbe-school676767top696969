import type { ComponentType } from "react";
import { getNewsPost } from "@/data/news/posts";
import { isNewsPostPath, normalizeAppPath, type LocalizablePath } from "./locale-path";

/**
 * DE/UK marketing pages resolve through /$lang and /$lang/$. Eagerly importing
 * every page here pulled mock exams + exercise banks into memory on every
 * locale visit (~16MB). Load only the path that was requested.
 */
const LOCALIZED_PAGE_LOADERS: Record<LocalizablePath, () => Promise<ComponentType>> = {
  "/": () => import("@/routes/index").then((m) => m.Index),
  "/bbe": () => import("@/routes/bbe").then((m) => m.BbeLandingPage),
  "/bbe-entrance-exam": () =>
    import("@/routes/bbe-entrance-exam").then((m) => m.BbeEntranceExamHubPage),
  "/bbe-exam-scoring": () =>
    import("@/routes/bbe-exam-scoring").then((m) => m.BbeExamScoringPage),
  "/bbe-mathematics": () =>
    import("@/routes/bbe-mathematics").then((m) => m.BbeMathematicsPage),
  "/bbe-economics-english": () =>
    import("@/routes/bbe-economics-english").then((m) => m.BbeEconomicsEnglishPage),
  "/bbe-exam-preparation": () =>
    import("@/routes/bbe-exam-preparation").then((m) => m.BbeExamPreparationPage),
  "/bbe-admission": () => import("@/routes/bbe-admission").then((m) => m.BbeAdmissionPage),
  "/bbe-vs-wiso": () => import("@/routes/bbe-vs-wiso").then((m) => m.BbeVsWisoPage),
  "/wu-vienna": () => import("@/routes/wu-vienna").then((m) => m.WuViennaOverviewPage),
  "/hybrid": () => import("@/routes/hybrid.index").then((m) => m.HybridLandingPage),
  "/wiso": () => import("@/routes/wiso.index").then((m) => m.WisoLandingPage),
  "/wiso/entrance-exam": () =>
    import("@/routes/wiso.entrance-exam").then((m) => m.WisoEntranceExamPage),
  "/wiso/exam-scoring": () =>
    import("@/routes/wiso.exam-scoring").then((m) => m.WisoExamScoringPage),
  "/wiso/mathematics": () =>
    import("@/routes/wiso.mathematics").then((m) => m.WisoMathematicsPage),
  "/wiso/economics-german": () =>
    import("@/routes/wiso.economics-german").then((m) => m.WisoEconomicsGermanPage),
  "/wiso/exam-preparation": () =>
    import("@/routes/wiso.exam-preparation").then((m) => m.WisoExamPreparationPage),
  "/wiso/admission": () =>
    import("@/routes/wiso.admission").then((m) => m.WisoAdmissionPage),
  "/wiso/wu-vienna": () =>
    import("@/routes/wiso.wu-vienna").then((m) => m.WisoWuViennaPage),
  "/wiso/products": () => import("@/routes/products.index").then((m) => m.ProductsPage),
  "/wiso/products/full-course": () =>
    import("@/routes/wiso.products.full-course").then((m) => m.WisoFullCourseProduct),
  "/wiso/demo-practice": () =>
    import("@/routes/wiso.demo-practice.index").then((m) => m.WisoDemoPractice),
  "/wiso/demo-mock": () =>
    import("@/routes/wiso.demo-mock").then((m) => m.WisoDemoMockPage),
  "/wiso/mock-exams": () =>
    import("@/routes/wiso.mock-exams").then((m) => m.WisoMockExamsPage),
  "/parents": () => import("@/routes/parents").then((m) => m.ParentsPage),
  "/reviews": () => import("@/routes/reviews").then((m) => m.ReviewsPage),
  "/news": () => import("@/routes/news").then((m) => m.NewsPage),
  "/important-features": () =>
    import("@/routes/important-features").then((m) => m.ImportantFeaturesPage),
  "/features/answer-sheet": () =>
    import("@/routes/features.answer-sheet").then((m) => m.AnswerSheetFeaturePage),
  "/terms": () => import("@/routes/terms").then((m) => m.TermsPage),
  "/privacy": () => import("@/routes/privacy").then((m) => m.PrivacyPage),
  "/products": () => import("@/routes/products.index").then((m) => m.ProductsPage),
  "/products/demo-practice": () =>
    import("@/routes/products.demo-practice").then((m) => m.DemoPracticeProduct),
  "/products/full-course": () =>
    import("@/routes/products.full-course").then((m) => m.FullCourseProduct),
  "/products/hybrid-course": () =>
    import("@/routes/products.hybrid-course").then((m) => m.HybridCourseProductPage),
  "/demo-practice": () =>
    import("@/routes/demo-practice.index").then((m) => m.DemoPractice),
  "/demo-mock": () => import("@/routes/demo-mock").then((m) => m.DemoMockPage),
  "/login": () => import("@/routes/login").then((m) => m.LoginPage),
  "/signup": () => import("@/routes/signup").then((m) => m.SignupPage),
  "/reset-password": () =>
    import("@/routes/reset-password").then((m) => m.ResetPasswordPage),
  "/account": () => import("@/routes/account").then((m) => m.AccountPage),
  "/payment/success": () =>
    import("@/routes/payment.success").then((m) => m.PaymentSuccessPage),
  "/payment/failed": () =>
    import("@/routes/payment.failed").then((m) => m.PaymentFailedPage),
};

const pageCache = new Map<string, ComponentType>();

/** Cheap existence check — does not import page modules or mock banks. */
export function hasLocalizedPage(pathname: string): boolean {
  const path = normalizeAppPath(pathname);
  if (isNewsPostPath(path)) {
    return Boolean(getNewsPost(path.slice("/news/".length)));
  }
  return Object.prototype.hasOwnProperty.call(LOCALIZED_PAGE_LOADERS, path);
}

/** Sync read after `loadLocalizedPage` has run (e.g. in beforeLoad). */
export function getCachedLocalizedPage(pathname: string): ComponentType | null {
  return pageCache.get(normalizeAppPath(pathname)) ?? null;
}

/** Dynamically import only the component for `pathname`. */
export async function loadLocalizedPage(pathname: string): Promise<ComponentType | null> {
  const path = normalizeAppPath(pathname);
  const cached = pageCache.get(path);
  if (cached) return cached;

  if (isNewsPostPath(path)) {
    const slug = path.slice("/news/".length);
    if (!getNewsPost(slug)) return null;
    const { NewsPostPage } = await import("@/routes/news.$slug");
    pageCache.set(path, NewsPostPage);
    return NewsPostPage;
  }

  const loader = LOCALIZED_PAGE_LOADERS[path as LocalizablePath];
  if (!loader) return null;
  const Page = await loader();
  pageCache.set(path, Page);
  return Page;
}
