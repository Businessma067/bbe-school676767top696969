import { createFileRoute, Outlet } from "@tanstack/react-router";
import { RequireFullCourse } from "@/components/RequireFullCourse";

export const Route = createFileRoute("/wiso/flashcards")({
  component: () => (
    <RequireFullCourse productSlug="wiso-full-course">
      <Outlet />
    </RequireFullCourse>
  ),
});
