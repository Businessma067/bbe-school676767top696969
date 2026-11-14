import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import {
  dictionaryScopesForPath,
  ensureDictionaryReady,
} from "@/lib/i18n/dictionary";
import { isLocalePrefix } from "@/lib/i18n/locale-path";
import type { Lang } from "@/lib/i18n/languages";

export const Route = createFileRoute("/$lang")({
  beforeLoad: async ({ params, location }) => {
    if (!isLocalePrefix(params.lang)) {
      throw notFound();
    }
    // Load only packs needed for this locale path (home/news/wiso), not always all.
    const scopes = dictionaryScopesForPath(location.pathname);
    await ensureDictionaryReady(params.lang as Lang, { scopes });
  },
  component: LocaleLayout,
});

function LocaleLayout() {
  const { lang } = Route.useParams();
  // Remount page content when switching DE↔UK so React re-renders English
  // source strings, then PageTranslator can apply the new language.
  return <Outlet key={lang} />;
}
