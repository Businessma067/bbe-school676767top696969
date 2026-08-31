import { createFileRoute, Outlet } from "@tanstack/react-router";
import { RequireFullCourse } from "@/components/RequireFullCourse";

export const Route = createFileRoute("/mock-exams")({
  component: () => (
    <RequireFullCourse>
      <Outlet />
    </RequireFullCourse>
  ),
});
