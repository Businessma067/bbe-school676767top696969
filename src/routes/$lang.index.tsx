import { createFileRoute, notFound } from "@tanstack/react-router";
import { buildLocaleHead } from "@/lib/i18n/locale-head";
import { isLocalePrefix } from "@/lib/i18n/locale-path";
import { getCachedLocalizedPage, loadLocalizedPage } from "@/lib/i18n/localized-pages";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

export const Route = createFileRoute("/$lang/")({
  beforeLoad: async ({ params }) => {
    if (!isLocalePrefix(params.lang)) throw notFound();
    if (!(await loadLocalizedPage("/"))) throw notFound();
    return { localizedPath: "/" as const };
  },
  head: ({ params }) => {
    if (!isLocalePrefix(params.lang)) return {};
    return buildLocaleHead(params.lang, "/", {
      meta: [
        { title: "WU Vienna Admission 2027 — BBE Exam & WiSo Prep | BBE School — Made by BBE Students" },
        {
          name: "description",
          content:
            "Prepare for WU Vienna admission in 2027: BBE exam (BBE Aufnahmetest) and WiSo entrance exam practice, timed mock exams, and study tools.",
        },
        { property: "og:title", content: "WU Vienna Admission 2027 — BBE Exam & WiSo Prep | BBE School — Made by BBE Students" },
        {
          property: "og:description",
          content:
            "Prepare for WU Vienna admission in 2027 with BBE and WiSo entrance exam practice, timed mocks, a mock builder, and study tools.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        ...socialImageMetaForPath("/"),
      ],
    });
  },
  component: LocalizedHomePage,
});

function LocalizedHomePage() {
  const { localizedPath } = Route.useRouteContext();
  const Page = getCachedLocalizedPage(localizedPath);
  if (!Page) return null;
  return <Page />;
}
