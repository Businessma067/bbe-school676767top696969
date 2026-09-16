import { createFileRoute } from "@tanstack/react-router";
import { MathTasksPage } from "@/components/MathTasksPage";
import { RequireFullCourse } from "@/components/RequireFullCourse";
import { WISO_MATH_CHAPTERS, loadWisoMathChapterTasks } from "@/data/wiso-math-chapters";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/products/full-course-math" as const;

export const Route = createFileRoute("/wiso/products/full-course-math")({
  head: () => ({
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "Mathematik — Full WiSo Course | BBE School" },
      {
        name: "description",
        content:
          "WiSo mathematics practice: the Full Course math bank with German syllabus labels for the WU Vienna Aufnahmeprüfung.",
      },
      { property: "og:title", content: "Mathematik — Full WiSo Course" },
      {
        property: "og:description",
        content:
          "Algebra, functions, finance math, probability and more — same exam-format cases as BBE Full Course, organised for WiSo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://bbe-school.com${PATH}` },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath(PATH),
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: WisoFullCourseMathTasks,
});

function WisoFullCourseMathTasks() {
  return (
    <RequireFullCourse minTier="full">
      <MathTasksPage
        tier="full"
        backTo="/wiso/products/full-course-subjects"
        chapters={WISO_MATH_CHAPTERS}
        loadChapterTasks={loadWisoMathChapterTasks}
        storageKey="wiso.math.progress.v1"
      />
    </RequireFullCourse>
  );
}
