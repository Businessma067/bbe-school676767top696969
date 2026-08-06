import { createFileRoute } from "@tanstack/react-router";
import { MathTasksPage } from "@/components/MathTasksPage";

export const Route = createFileRoute("/products/full-course-math")({
  head: () => ({
    meta: [
      { title: "Mathematics — Full Course — BBE School" },
      {
        name: "description",
        content:
          "Full-course Mathematics practice grouped by syllabus topic for the WU BBE entrance exam.",
      },
    ],
  }),
  component: FullCourseMathTasks,
});

function FullCourseMathTasks() {
  return (
    <MathTasksPage
      tier="full"
      backTo="/products/full-course-subjects"
    />
  );
}
