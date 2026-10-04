import { Outlet, createFileRoute } from "@tanstack/react-router";
import { RequireFullCourse } from "@/components/RequireFullCourse";
import { HYBRID_FULL_COURSE_SLUG } from "@/lib/hybrid-course";

export const Route = createFileRoute("/hybrid")({
  component: HybridLayout,
});

function HybridLayout() {
  return (
    <RequireFullCourse minTier="full" productSlug={HYBRID_FULL_COURSE_SLUG}>
      <Outlet />
    </RequireFullCourse>
  );
}
