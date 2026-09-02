import { createFileRoute } from "@tanstack/react-router";
import { EnglishTasksPage } from "@/components/EnglishTasksPage";
import { RequireFullCourse } from "@/components/RequireFullCourse";

export const Route = createFileRoute("/products/lite-bbe-course-english")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/products/lite-bbe-course-english" }],
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
    <RequireFullCourse>
      <EnglishTasksPage tier="lite" backTo="/products/lite-bbe-course-subjects" />
    </RequireFullCourse>
  );
}
