import { createFileRoute, Outlet } from "@tanstack/react-router";
import { RequireFullCourse } from "@/components/RequireFullCourse";

export const Route = createFileRoute("/wiso/matching")({
  component: () => (
    <RequireFullCourse productSlug="wiso-full-course">
      <Outlet />
    </RequireFullCourse>
  ),
});
