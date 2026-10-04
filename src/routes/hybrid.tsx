import { Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";
import { RequireFullCourse } from "@/components/RequireFullCourse";
import { HYBRID_FULL_COURSE_SLUG } from "@/lib/hybrid-course";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";

export const Route = createFileRoute("/hybrid")({
  component: HybridLayout,
});

function HybridLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const path = stripLocalePrefix(pathname);
  const isLanding = path === "/hybrid";

  if (isLanding) return <Outlet />;

  return (
    <RequireFullCourse minTier="full" productSlug={HYBRID_FULL_COURSE_SLUG}>
      <Outlet />
    </RequireFullCourse>
  );
}
