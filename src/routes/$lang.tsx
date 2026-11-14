import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { ensureDictionaryReady } from "@/lib/i18n/dictionary";
import { isLocalePrefix } from "@/lib/i18n/locale-path";
import type { Lang } from "@/lib/i18n/languages";

export const Route = createFileRoute("/$lang")({
  beforeLoad: async ({ params }) => {
    if (!isLocalePrefix(params.lang)) {
      throw notFound();
    }
    // Locale SSR/hydration must see full packs (JSX runtime translates on render).
    // Chrome/nav still works from the sync core if this were skipped; page copy needs packs.
    await ensureDictionaryReady(params.lang as Lang);
  },
  component: LocaleLayout,
});

function LocaleLayout() {
  const { lang } = Route.useParams();
  // Remount page content when switching DE↔UK so React re-renders English
  // source strings, then PageTranslator can apply the new language.
  return <Outlet key={lang} />;
}
