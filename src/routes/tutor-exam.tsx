import { createFileRoute, Outlet } from "@tanstack/react-router";
import { RequireFullCourse } from "@/components/RequireFullCourse";

export const Route = createFileRoute("/tutor-exam")({
  component: () => (
    <RequireFullCourse>
      <Outlet />
    </RequireFullCourse>
  ),
});
