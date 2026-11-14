import { createFileRoute } from "@tanstack/react-router";
import { EconomicsTasksPage } from "@/components/EconomicsTasksPage";
import { RequireFullCourse } from "@/components/RequireFullCourse";
import {
  loadAllWisoEconomicsChapterTasks,
  loadWisoEconomicsChapterTasks,
} from "@/data/wiso-economics-chapters";
import { WISO_ECONOMICS_BOOK_TOC } from "@/data/wiso-economics-subtopics";

const CHAPTERS = WISO_ECONOMICS_BOOK_TOC.map((c) => ({ num: c.num, title: c.title }));

/**
 * Legacy URL kept for bookmarks / SEO. Reuses EconomicsTasksPage with
 * per-chapter lazy banks (same as /wiso/products/full-course-economics).
 */
export const Route = createFileRoute("/products/full-course-wiso-economics")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/products/full-course-wiso-economics" }],
    meta: [
      { title: "WISO Wirtschaft — Full Course — BBE School" },
      {
        name: "description",
        content:
          "Full Course WISO Wirtschaft: chapter-by-chapter practice cases and teacher explanations for Wirtschaft verstehen (WU WISO Aufnahmeprüfung 2026).",
      },
    ],
  }),
  component: function EconomicsTasksRoute() {
    return (
      <RequireFullCourse minTier="full" productSlug="wiso-full-course">
        <EconomicsTasksPage
          chapters={CHAPTERS}
          loadAllChapters={loadAllWisoEconomicsChapterTasks}
          loadChapter={loadWisoEconomicsChapterTasks}
          storageKey="wiso.economics.progress.v1"
          backTo="/wiso/products/full-course-subjects"
          enableTheory
          enableContentTranslation
          theorySubject="wiso-economics"
          examLabel="WU WiSo exam"
        />
      </RequireFullCourse>
    );
  },
});
