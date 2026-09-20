import { createFileRoute } from "@tanstack/react-router";
import { MathTasksPage } from "@/components/MathTasksPage";
import { WISO_MATH_CHAPTERS, loadWisoMathChapterTasks } from "@/data/wiso-math-chapters";
import { swapWisoDemoMathBlocks } from "@/data/wiso-demo-math";
import { getWisoMathCourseTheory } from "@/data/wiso-math-course-theory";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/demo-practice/math" as const;

export const Route = createFileRoute("/wiso/demo-practice/math")({
  head: () => ({
    links: [{ rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "Mathematik Demo — WiSo | BBE School" },
      {
        name: "description",
        content:
          "Free WiSo math demo: sample tasks from chapters 1–8 that do not overlap the BBE demo set.",
      },
      { property: "og:title", content: "Mathematik Demo — WiSo | BBE School" },
      {
        property: "og:description",
        content:
          "Free WiSo math demo: sample tasks from chapters 1–8 that do not overlap the BBE demo set.",
      },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoDemoMathTasks,
});

async function loadWisoDemoMathChapterTasks(num: number) {
  const tasks = await loadWisoMathChapterTasks(num, "de");
  return swapWisoDemoMathBlocks(num, tasks);
}

function WisoDemoMathTasks() {
  return (
    <MathTasksPage
      tier="demo"
      backTo="/wiso/demo-practice"
      chapters={WISO_MATH_CHAPTERS}
      loadChapterTasks={loadWisoDemoMathChapterTasks}
      getTheory={getWisoMathCourseTheory}
      storageKey="wiso.math.demo.progress.v1"
      contentLang="de"
      fullCourseHref="/wiso/products/full-course"
    />
  );
}
