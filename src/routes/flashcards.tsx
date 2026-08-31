import { createFileRoute, Outlet } from "@tanstack/react-router";
import { RequireFullCourse } from "@/components/RequireFullCourse";

export const Route = createFileRoute("/flashcards")({
  component: () => (
    <RequireFullCourse>
      <Outlet />
    </RequireFullCourse>
  ),
});
