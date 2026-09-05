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
  const { lang } = Route.useParams();
  // Remount page content when switching DE↔UK so React re-renders English
  // source strings, then PageTranslator can apply the new language.
  return <Outlet key={lang} />;
}
