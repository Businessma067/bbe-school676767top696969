import { createFileRoute } from "@tanstack/react-router";
import { EnglishTasksPage } from "@/components/EnglishTasksPage";

export const Route = createFileRoute("/products/full-course-english")({
  head: () => ({
    meta: [
      { title: "English — Full Course — BBE School" },
      {
        name: "description",
        content:
          "Full-course English Texts, Grammar, and Vocabulary practice for the WU BBE entrance exam.",
      },
    ],
  }),
  component: FullCourseEnglishTasks,
});

function FullCourseEnglishTasks() {
  return (
    <EnglishTasksPage tier="full" backTo="/products/full-course-subjects" />
  );
}
