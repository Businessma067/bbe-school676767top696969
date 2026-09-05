import { createFileRoute, notFound } from "@tanstack/react-router";
import { buildLocaleHead } from "@/lib/i18n/locale-head";
import { isLocalePrefix, isLocalizablePath, normalizeAppPath } from "@/lib/i18n/locale-path";
import { getLocalizedPage } from "@/lib/i18n/localized-pages";

export const Route = createFileRoute("/$lang/$")({
  beforeLoad: ({ params }) => {
    if (!isLocalePrefix(params.lang)) throw notFound();
    const path = normalizeAppPath(`/${params._splat ?? ""}`);
    if (!isLocalizablePath(path) || path === "/") throw notFound();
    if (!getLocalizedPage(path)) throw notFound();
  },
  head: ({ params }) => {
    if (!isLocalePrefix(params.lang)) return {};
    const path = normalizeAppPath(`/${params._splat ?? ""}`);
    return buildLocaleHead(params.lang, path);
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
