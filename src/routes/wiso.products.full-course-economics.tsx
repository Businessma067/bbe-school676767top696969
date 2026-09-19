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
          "Full WiSo economics practice aligned to Wirtschaft verstehen 2026 — chapters 1–4 (Grundlagen, Gesellschaft & Umwelt, Unternehmen, Digitalisierung) for the WU Aufnahmeprüfung.",
      },
      { property: "og:title", content: "Wirtschaft verstehen — Full WiSo Course" },
      {
        property: "og:description",
        content:
          "Cases and flashcards mapped to the official Wirtschaft verstehen 2026 Inhaltsverzeichnis (1.1–1.5, 2.1–2.6, 3.1–3.5, 4.1–4.4), in German.",
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
          enableTheory={false}
        />
      </RequireFullCourse>
    );
  },
});
