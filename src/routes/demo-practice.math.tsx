import { createFileRoute } from "@tanstack/react-router";
import { MathTasksPage } from "@/components/MathTasksPage";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

export const Route = createFileRoute("/demo-practice/math")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/demo-practice/math" }],
    meta: [
      { title: "Math Tasks — BBE School" },
      {
        name: "description",
        content:
          "Interactive Mathematics practice grouped by syllabus topic for the WU BBE entrance exam.",
      },
      { property: "og:title", content: "Math Tasks — BBE School" },
      {
        property: "og:description",
        content:
          "Interactive Mathematics practice grouped by syllabus topic for the WU BBE entrance exam.",
      },
      ...socialImageMetaForPath("/demo-practice/math"),
    ],
  }),
  component: DemoMathTasks,
});

function DemoMathTasks() {
  return <MathTasksPage tier="demo" backTo="/demo-practice" />;
}
