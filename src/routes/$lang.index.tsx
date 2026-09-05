import { createFileRoute, notFound } from "@tanstack/react-router";
import { buildLocaleHead } from "@/lib/i18n/locale-head";
import { isLocalePrefix } from "@/lib/i18n/locale-path";
import { getLocalizedPage } from "@/lib/i18n/localized-pages";

export const Route = createFileRoute("/$lang/")({
  beforeLoad: ({ params }) => {
    if (!isLocalePrefix(params.lang)) throw notFound();
  },
  head: ({ params }) => {
    if (!isLocalePrefix(params.lang)) return {};
    return buildLocaleHead(params.lang, "/", {
      meta: [
        { title: "WU Vienna BBE Exam Prep — Practice Simulator | BBE School" },
        {
          name: "description",
          content:
            "Prepare for the WU Vienna BBE entrance exam with 1500+ realistic cases, timed mock exams and step-by-step explanations for Economics, Mathematics and English.",
        },
        { property: "og:title", content: "WU Vienna BBE Exam Prep — Practice Simulator | BBE School" },
        {
          property: "og:description",
          content:
            "Practice the real BBE exam format: True/False cases, partial-credit scoring, timed mocks and tactical explanations.",
        },
        { property: "og:type", content: "website" },
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
