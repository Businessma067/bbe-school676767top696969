import { createFileRoute } from "@tanstack/react-router";
import { EconomicsTasksPage } from "@/components/EconomicsTasksPage";
import { RequireFullCourse } from "@/components/RequireFullCourse";
import { loadAllEconomicsChapterTasks } from "@/data/economics-chapters";

export const Route = createFileRoute("/products/full-course-economics")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/products/full-course-economics" }],
    meta: [
      { title: "Economics — Full Course — BBE School" },
      {
        name: "description",
        content:
          "Full Course Economics: chapter-by-chapter practice cases, theory reader and tactical breakdowns for the WU Vienna BBE entrance exam.",
      },
    ],
  }),
  component: function EconomicsTasksRoute() {
    return (
      <RequireFullCourse minTier="full" productSlug="full-course">
        <EconomicsTasksPage
          chapters={[
            { num: 2, title: "Basic Economic Concepts" },
            { num: 3, title: "Focus on different types of businesses" },
            { num: 4, title: "Forms of business ownership and sources of finance" },
            { num: 5, title: "Marketing" },
            { num: 6, title: "Accounting – keeping record of business transactions" },
          ]}
          loadAllChapters={loadAllEconomicsChapterTasks}
          storageKey="bbe.economics.progress.v1"
          backTo="/products/full-course-subjects"
        />
      </RequireFullCourse>
    );
  },
});
