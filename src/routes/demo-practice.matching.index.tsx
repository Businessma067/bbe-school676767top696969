import { createFileRoute } from "@tanstack/react-router";
import { DemoStudyToolIndexPage } from "@/components/study-modes/DemoStudyToolPages";

export const Route = createFileRoute("/demo-practice/matching/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/demo-practice/matching" }],
    meta: [
      { title: "Demo Matching — BBE School" },
      {
        name: "description",
        content: "Try BBE demo matching for Economics, Math, and English.",
      },
    ],
  }),
  component: () => <DemoStudyToolIndexPage track="bbe" kind="matching" />,
});
