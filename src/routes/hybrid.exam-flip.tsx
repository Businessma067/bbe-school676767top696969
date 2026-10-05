import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/hybrid/exam-flip")({
  head: () => ({
    meta: [{ title: "Hybrid Course | BBE School" }, { name: "robots", content: "noindex, follow" }],
  }),
  component: RedirectToHybridCourse,
});

function RedirectToHybridCourse() {
  return <Navigate to="/hybrid/course" />;
}
