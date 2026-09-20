import { createFileRoute } from "@tanstack/react-router";
import { DemoStudyToolIndexPage } from "@/components/study-modes/DemoStudyToolPages";

export const Route = createFileRoute("/demo-practice/flashcards/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/demo-practice/flashcards" }],
    meta: [
      { title: "Demo Flashcards — BBE School" },
      {
        name: "description",
        content: "Try BBE demo flashcards for Economics, Math, and English.",
      },
    ],
  }),
  component: () => <DemoStudyToolIndexPage track="bbe" kind="flashcards" />,
});
