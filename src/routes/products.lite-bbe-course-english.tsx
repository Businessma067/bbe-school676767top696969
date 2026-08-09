import { createFileRoute } from "@tanstack/react-router";
import { EnglishTasksPage } from "@/components/EnglishTasksPage";

export const Route = createFileRoute("/products/lite-bbe-course-english")({
  head: () => ({
    meta: [
      { title: "English — Lite Course — BBE School" },
      {
        name: "description",
        content:
          "Lite-course English practice: Texts, Grammar, and Vocabulary for the WU BBE entrance exam.",
      },
    ],
  }),
  component: LiteCourseEnglishTasks,
});

function LiteCourseEnglishTasks() {
  return (
    <EnglishTasksPage
      tier="lite"
      backTo="/products/lite-bbe-course-subjects"
    />
  );
}
