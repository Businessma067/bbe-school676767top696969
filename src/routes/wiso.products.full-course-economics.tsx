import { createFileRoute } from "@tanstack/react-router";
import { EconomicsTasksPage } from "@/components/EconomicsTasksPage";
import { RequireFullCourse } from "@/components/RequireFullCourse";
import { loadAllWisoEconomicsChapterTasks } from "@/data/wiso-economics-chapters";
import { WISO_ECONOMICS_BOOK_TOC } from "@/data/wiso-economics-subtopics";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/products/full-course-economics" as const;

const CHAPTERS = WISO_ECONOMICS_BOOK_TOC.map((c) => ({ num: c.num, title: c.title }));

export const Route = createFileRoute("/wiso/products/full-course-economics")({
  head: () => ({
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "Wirtschaft verstehen — Full WiSo Course | BBE School" },
      {
        name: "description",
        content:
          "WiSo-Wirtschaftsaufgaben zur Lernunterlage Wirtschaft verstehen (Aufnahmeprüfung 2026): Wahr/Falsch nach Kapiteln, mit Lehrererklärungen.",
      },
      { property: "og:title", content: "Wirtschaft verstehen — Full WiSo Course" },
      {
        property: "og:description",
        content:
          "Aufgaben zu allen Kapiteln von Wirtschaft verstehen 2026, im BBE-Wahr/Falsch-Stil, auf Deutsch.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://bbe-school.com${PATH}` },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath(PATH),
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: function WisoEconomicsTasksRoute() {
    return (
      <RequireFullCourse minTier="full" productSlug="wiso-full-course">
        <EconomicsTasksPage
          chapters={CHAPTERS}
          loadAllChapters={loadAllWisoEconomicsChapterTasks}
          storageKey="wiso.economics.progress.v1"
          backTo="/wiso/products/full-course-subjects"
          enableTheory
          enableContentTranslation
        />
      </RequireFullCourse>
    );
  },
});
