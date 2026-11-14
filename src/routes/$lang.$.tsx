import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { Suspense } from "react";
import { buildLocaleHead } from "@/lib/i18n/locale-head";
import { getEnglishHeadForPath } from "@/lib/i18n/localized-heads";
import {
  isLocalePrefix,
  isLocalizablePath,
  isStudyContentPath,
  normalizeAppPath,
} from "@/lib/i18n/locale-path";
import {
  getLocalizedLazyPage,
  hasLocalizedPage,
  loadLocalizedPage,
} from "@/lib/i18n/localized-pages";
import { isFullSiteProtectedPath } from "@/lib/site-access";

export const Route = createFileRoute("/$lang/$")({
  beforeLoad: async ({ params, location }) => {
    if (!isLocalePrefix(params.lang)) throw notFound();
    const path = normalizeAppPath(`/${params._splat ?? ""}`);

    // Paid / study surfaces stay on unprefixed gated routes. Locale-prefixed
    // deep links (e.g. /de/wiso/flashcards, /de/products/full-course-math)
    // must redirect — never skip RequireFullCourse via a translated URL,
    // even if the path was mistakenly listed as localizable.
    if (isFullSiteProtectedPath(path) || isStudyContentPath(path)) {
      throw redirect({ to: path as never });
    }

    // Dashboard must use the file route (/dashboard), not the locale splat.
    // Splat mounts break Route.useSearch and historically made the page hang.
    if (path === "/dashboard") {
      throw redirect({
        to: "/dashboard",
        search: location.search as never,
      });
    }

    // Google Ads conversion URLs stay unprefixed and session-gated.
    if (path === "/signup-complete") {
      throw redirect({ to: "/signup-complete" });
    }
    if (path === "/payment/success") {
      throw redirect({
        to: "/payment/success",
        search: location.search as never,
      });
    }

    // Alias matches EN `/forgot-password` → `/reset-password`.
    if (path === "/forgot-password") {
      throw redirect({
        to: "/$lang/$",
        params: { lang: params.lang, _splat: "reset-password" },
      });
    }

    // Alias matches EN `/wiso/products` → `/products` (keep locale prefix).
    if (path === "/wiso/products") {
      throw redirect({
        to: "/$lang/$",
        params: { lang: params.lang, _splat: "products" },
      });
    }

    if (!isLocalizablePath(path) || path === "/") throw notFound();
    if (!hasLocalizedPage(path)) throw notFound();

    // Load only this path's module (not the whole marketing site graph).
    // Component stays in a module cache — beforeLoad return values must be
    // serializable, so we only pass the path string through context.
    if (!(await loadLocalizedPage(path))) throw notFound();
    return { localizedPath: path };
  },
  head: async ({ params }) => {
    if (!isLocalePrefix(params.lang)) return {};
    const path = normalizeAppPath(`/${params._splat ?? ""}`);
    return buildLocaleHead(params.lang, path, await getEnglishHeadForPath(path));
  },
  component: LocalizedSplatPage,
});

function LocalizedSplatPage() {
  const { localizedPath } = Route.useRouteContext();
  // React.lazy suspends until the warmed module resolves — wrap or /de|/uk white-screen.
  const Page = getLocalizedLazyPage(localizedPath);
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" aria-hidden />}>
      <Page />
    </Suspense>
  );
}
