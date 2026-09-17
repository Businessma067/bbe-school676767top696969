import { createFileRoute } from "@tanstack/react-router";
import { RequireFullCourse } from "@/components/RequireFullCourse";
import { WisoMathTasksPage } from "@/components/WisoMathTasksPage";
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
          "WiSo mathematics practice: German questions and explanations for the WU Vienna WiSo Aufnahmeprüfung.",
      },
      { property: "og:title", content: "Mathematik — Full WiSo Course" },
      {
        property: "og:description",
        content:
          "Algebra, functions, finance math, probability and more — WiSo Full Course mathematics in German.",
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
    <RequireFullCourse minTier="full" productSlug="wiso-full-course">
      <WisoMathTasksPage />
    </RequireFullCourse>
  );
}
