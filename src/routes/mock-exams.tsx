import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { RequireFullCourse } from "@/components/RequireFullCourse";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";

export const Route = createFileRoute("/mock-exams")({
  component: MockExamsLayout,
});

/** Free demo mock take/review — auth is enforced inside the take page. */
function isDemoMockPath(pathname: string): boolean {
  const path = stripLocalePrefix(pathname);
  return path === "/mock-exams/demo-mock" || path.startsWith("/mock-exams/demo-mock/");
}

function MockExamsLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (isDemoMockPath(pathname)) {
    return <Outlet />;
  }
  return (
    <RequireFullCourse>
      <Outlet />
    </RequireFullCourse>
  );
}
