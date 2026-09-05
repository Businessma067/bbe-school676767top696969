import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { isLocalePrefix } from "@/lib/i18n/locale-path";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isLocalePrefix(params.lang)) {
      throw notFound();
    }
  },
  component: LocaleLayout,
});

function LocaleLayout() {
  return <Outlet />;
}
