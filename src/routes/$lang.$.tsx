import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { buildLocaleHead } from "@/lib/i18n/locale-head";
import { getEnglishHeadForPath } from "@/lib/i18n/localized-heads";
import {
  isLocalePrefix,
  isLocalizablePath,
  isStudyContentPath,
  normalizeAppPath,
} from "@/lib/i18n/locale-path";
import { getLocalizedPage } from "@/lib/i18n/localized-pages";
import { isFullSiteProtectedPath } from "@/lib/site-access";

export const Route = createFileRoute("/$lang/$")({
  beforeLoad: ({ params, location }) => {
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

    if (!isLocalizablePath(path) || path === "/") throw notFound();
    if (!getLocalizedPage(path)) throw notFound();
  },
  head: ({ params }) => {
    if (!isLocalePrefix(params.lang)) return {};
    const path = normalizeAppPath(`/${params._splat ?? ""}`);
    return buildLocaleHead(params.lang, path, getEnglishHeadForPath(path));
  },
  component: LocalizedSplatPage,
});

function LocalizedSplatPage() {
  const { _splat } = Route.useParams();
  const path = normalizeAppPath(`/${_splat ?? ""}`);
  const Page = getLocalizedPage(path);
  if (!Page) return null;
  return <Page />;
}
