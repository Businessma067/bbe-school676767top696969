import { createFileRoute } from "@tanstack/react-router";
import { MathTasksPage } from "@/components/MathTasksPage";

export const Route = createFileRoute("/demo-practice/math")({
  head: () => ({
    meta: [
      { title: "Math Tasks — BBE School" },
      {
        name: "description",
        content:
          "Interactive Mathematics practice grouped by syllabus topic for the WU BBE entrance exam.",
      },
    ],
  }),
  component: DemoMathTasks,
});

function DemoMathTasks() {
  return <MathTasksPage tier="demo" backTo="/demo-practice" />;
}
