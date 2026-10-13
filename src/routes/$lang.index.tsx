import { createFileRoute, notFound } from "@tanstack/react-router";
import { buildLocaleHead } from "@/lib/i18n/locale-head";
import { isLocalePrefix } from "@/lib/i18n/locale-path";
import { getLocalizedPage } from "@/lib/i18n/localized-pages";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

export const Route = createFileRoute("/$lang/")({
  beforeLoad: ({ params }) => {
    if (!isLocalePrefix(params.lang)) throw notFound();
  },
  head: ({ params }) => {
    if (!isLocalePrefix(params.lang)) return {};
    return buildLocaleHead(params.lang, "/", {
      meta: [
        { title: "WU Vienna Admission 2027 — BBE Exam & WiSo Prep | BBE School" },
        {
          name: "description",
          content:
            "Prepare for WU Vienna admission in 2027: BBE exam (BBE Aufnahmetest) and WiSo entrance exam practice, timed mock exams, and study tools.",
        },
        { property: "og:title", content: "WU Vienna Admission 2027 — BBE Exam & WiSo Prep | BBE School" },
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
  const Page = getLocalizedPage("/");
  if (!Page) return null;
  return <Page />;
}
