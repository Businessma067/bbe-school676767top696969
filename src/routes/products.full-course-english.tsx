import { createFileRoute } from "@tanstack/react-router";
import { EnglishTasksPage } from "@/components/EnglishTasksPage";
import { RequireFullCourse } from "@/components/RequireFullCourse";

export const Route = createFileRoute("/products/full-course-english")({
  head: () => ({
    meta: [
      { title: "English — Full Course — BBE School" },
      {
        name: "description",
        content:
          "Full-course English practice: Texts, Grammar, and Vocabulary for the WU BBE entrance exam.",
      },
    ],
  }),
  component: FullCourseEnglishTasks,
});

function FullCourseEnglishTasks() {
  return (
    <RequireFullCourse minTier="full">
      <EnglishTasksPage tier="full" backTo="/products/full-course-subjects" />
    </RequireFullCourse>
  );
}
