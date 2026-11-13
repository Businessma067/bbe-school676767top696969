import { getNewsPost } from "@/data/news/posts";
import { isNewsPostPath, type LocalizablePath } from "./locale-path";

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

async function headFromImport(
  loader: () => Promise<{ Route: unknown }>,
): Promise<HeadFnResult | undefined> {
  const mod = await loader();
  return headFrom(mod.Route);
}

/**
 * Import only the English route module whose head we need. Static imports of
 * every Route previously evaluated all page graphs (including mock banks).
 */
const ENGLISH_HEAD_LOADERS: Partial<
  Record<LocalizablePath, () => Promise<HeadFnResult | undefined>>
> = {
  "/bbe": () => headFromImport(() => import("@/routes/bbe")),
  "/bbe-entrance-exam": () => headFromImport(() => import("@/routes/bbe-entrance-exam")),
  "/bbe-exam-scoring": () => headFromImport(() => import("@/routes/bbe-exam-scoring")),
  "/bbe-mathematics": () => headFromImport(() => import("@/routes/bbe-mathematics")),
  "/bbe-economics-english": () =>
    headFromImport(() => import("@/routes/bbe-economics-english")),
  "/bbe-exam-preparation": () =>
    headFromImport(() => import("@/routes/bbe-exam-preparation")),
  "/bbe-admission": () => headFromImport(() => import("@/routes/bbe-admission")),
  "/bbe-vs-wiso": () => headFromImport(() => import("@/routes/bbe-vs-wiso")),
  "/wu-vienna": () => headFromImport(() => import("@/routes/wu-vienna")),
  "/hybrid": () => headFromImport(() => import("@/routes/hybrid.index")),
  "/wiso": () => headFromImport(() => import("@/routes/wiso.index")),
  "/wiso/entrance-exam": () => headFromImport(() => import("@/routes/wiso.entrance-exam")),
  "/wiso/exam-scoring": () => headFromImport(() => import("@/routes/wiso.exam-scoring")),
  "/wiso/mathematics": () => headFromImport(() => import("@/routes/wiso.mathematics")),
  "/wiso/economics-german": () =>
    headFromImport(() => import("@/routes/wiso.economics-german")),
  "/wiso/exam-preparation": () =>
    headFromImport(() => import("@/routes/wiso.exam-preparation")),
  "/wiso/admission": () => headFromImport(() => import("@/routes/wiso.admission")),
  "/wiso/wu-vienna": () => headFromImport(() => import("@/routes/wiso.wu-vienna")),
  "/wiso/products": () => headFromImport(() => import("@/routes/products.index")),
  "/wiso/products/full-course": () =>
    headFromImport(() => import("@/routes/wiso.products.full-course")),
  "/wiso/demo-practice": () =>
    headFromImport(() => import("@/routes/wiso.demo-practice.index")),
  "/wiso/demo-mock": () => headFromImport(() => import("@/routes/wiso.demo-mock")),
  "/wiso/mock-exams": () => headFromImport(() => import("@/routes/wiso.mock-exams")),
  "/parents": () => headFromImport(() => import("@/routes/parents")),
  "/reviews": () => headFromImport(() => import("@/routes/reviews")),
  "/news": () => headFromImport(() => import("@/routes/news")),
  "/important-features": () => headFromImport(() => import("@/routes/important-features")),
  "/features/answer-sheet": () =>
    headFromImport(() => import("@/routes/features.answer-sheet")),
  "/terms": () => headFromImport(() => import("@/routes/terms")),
  "/privacy": () => headFromImport(() => import("@/routes/privacy")),
  "/products": () => headFromImport(() => import("@/routes/products.index")),
  "/products/demo-practice": () =>
    headFromImport(() => import("@/routes/products.demo-practice")),
  "/products/full-course": () =>
    headFromImport(() => import("@/routes/products.full-course")),
  "/products/hybrid-course": () =>
    headFromImport(() => import("@/routes/products.hybrid-course")),
  "/demo-practice": () => headFromImport(() => import("@/routes/demo-practice.index")),
  "/demo-mock": () => headFromImport(() => import("@/routes/demo-mock")),
  "/login": () => headFromImport(() => import("@/routes/login")),
  "/signup": () => headFromImport(() => import("@/routes/signup")),
  "/reset-password": () => headFromImport(() => import("@/routes/reset-password")),
  "/account": () => headFromImport(() => import("@/routes/account")),
  "/payment/success": () => headFromImport(() => import("@/routes/payment.success")),
  "/payment/failed": () => headFromImport(() => import("@/routes/payment.failed")),
};

export async function getEnglishHeadForPath(
  pathname: string,
): Promise<HeadFnResult | undefined> {
  if (isNewsPostPath(pathname)) {
    const slug = pathname.slice("/news/".length);
    if (!getNewsPost(slug)) return undefined;
    const { newsPostHead } = await import("@/routes/news.$slug");
    return newsPostHead(slug);
  }
  const getter = ENGLISH_HEAD_LOADERS[pathname as LocalizablePath];
  return getter?.();
}
