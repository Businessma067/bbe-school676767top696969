import { createFileRoute } from "@tanstack/react-router";
import { MathTasksPage } from "@/components/MathTasksPage";

export const Route = createFileRoute("/products/lite-bbe-course-math")({
  head: () => ({
    meta: [
      { title: "Mathematics — Lite Course — BBE School" },
      {
        name: "description",
        content:
          "Lite-course Mathematics practice grouped by syllabus topic for the WU BBE entrance exam.",
      },
    ],
  }),
  component: LiteCourseMathTasks,
});

function LiteCourseMathTasks() {
  return (
    <MathTasksPage
      tier="lite"
      backTo="/products/lite-bbe-course-subjects"
    />
  );
}
