import { createFileRoute } from "@tanstack/react-router";
import { EconomicsTasksPage } from "@/components/EconomicsTasksPage";
import { loadAllWisoEconomicsChapterTasks } from "@/data/wiso-economics-chapters";
import { WISO_ECONOMICS_BOOK_TOC } from "@/data/wiso-economics-subtopics";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/demo-practice/economics" as const;

const CHAPTERS = WISO_ECONOMICS_BOOK_TOC.filter((c) => !c.blank).map((c) => ({
  num: c.num,
  title: c.title,
}));

/** First 8 questions unlocked in every WiSo economics demo chapter. */
const WISO_DEMO_ECON_FREE_LIMIT = 8;

export const Route = createFileRoute("/wiso/demo-practice/economics")({
  head: () => ({
    links: [{ rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "Wirtschaft verstehen Demo — WiSo | BBE School" },
      {
        name: "description",
        content:
          "Free WiSo economics demo: the first eight tasks from each Wirtschaft verstehen chapter.",
      },
      { property: "og:title", content: "Wirtschaft verstehen Demo — WiSo | BBE School" },
      {
        property: "og:description",
        content:
          "Free WiSo economics demo: the first eight tasks from each Wirtschaft verstehen chapter.",
      },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoDemoEconomicsTasks,
});

function WisoDemoEconomicsTasks() {
  return (
    <EconomicsTasksPage
      chapters={CHAPTERS}
      loadAllChapters={loadAllWisoEconomicsChapterTasks}
      storageKey="wiso.economics.demo.progress.v1"
      backTo="/wiso/demo-practice"
      enableTheory={false}
      freeLimitPerChapter={WISO_DEMO_ECON_FREE_LIMIT}
      phantomLockedCount={3}
    />
  );
}
