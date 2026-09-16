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
        { title: "WU Vienna Exam Prep — BBE & WiSo | BBE School" },
        {
          name: "description",
          content:
            "Step-by-step preparation for your 2027 WU exam. Choose BBE (English) or WiSo (German) and prepare with practice questions, mock exams, and study tools.",
        },
        { property: "og:title", content: "WU Vienna Exam Prep — BBE & WiSo | BBE School" },
        {
          property: "og:description",
          content:
            "Prepare for WU Vienna’s BBE or WiSo entrance exam: practice questions, timed mocks, mock builder, and study tools.",
        },
        { property: "og:type", content: "website" },
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
