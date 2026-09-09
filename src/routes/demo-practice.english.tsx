import { createFileRoute } from "@tanstack/react-router";
import { EnglishTasksPage } from "@/components/EnglishTasksPage";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

export const Route = createFileRoute("/demo-practice/english")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/demo-practice/english" }],
    meta: [
      { title: "English Tasks — BBE School" },
      {
        name: "description",
        content: "Reading, Grammar and Vocabulary practice for the WU BBE entrance exam.",
      },
      { property: "og:title", content: "English Tasks — BBE School" },
      {
        property: "og:description",
        content: "Reading, Grammar and Vocabulary practice for the WU BBE entrance exam.",
      },
      ...socialImageMetaForPath("/demo-practice/english"),
    ],
  }),
  component: DemoEnglishTasks,
});

function DemoEnglishTasks() {
  return <EnglishTasksPage tier="demo" backTo="/demo-practice" />;
}
