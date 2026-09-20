import { createFileRoute } from "@tanstack/react-router";
import { EnglishTasksPage } from "@/components/EnglishTasksPage";
import { RequireFullCourse } from "@/components/RequireFullCourse";
import { WISO_GERMAN_CHAPTERS } from "@/data/wiso-german-chapters";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/products/full-course-german" as const;

export const Route = createFileRoute("/wiso/products/full-course-german")({
  head: () => ({
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "Deutsches Sprachverständnis — Full WiSo Course | BBE School" },
      {
        name: "description",
        content:
          "WiSo German reading comprehension: academic passages with true/false statements for the WU Vienna Aufnahmeprüfung Sprachverständnis.",
      },
      { property: "og:title", content: "Deutsches Sprachverständnis — Full WiSo Course" },
      {
        property: "og:description",
        content:
          "Ten German reading texts with ten comprehension tasks each — aligned to WiSo Sprachverständnis (no English, no grammar mini-section).",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://bbe-school.com${PATH}` },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath(PATH),
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: WisoFullCourseGermanTasks,
});

function WisoFullCourseGermanTasks() {
  return (
    <RequireFullCourse minTier="full" productSlug="wiso-full-course">
      <EnglishTasksPage
        tier="full"
        backTo="/wiso/products/full-course-subjects"
        chapters={WISO_GERMAN_CHAPTERS}
        storageKey="wiso.german.progress.v1"
        subjectLabel="Deutsch"
        enableContentTranslation
        emptyHint={
          <>
            Tippe oben auf <span className="font-semibold text-foreground">Chapters</span>, um die
            deutschen Lesetexte für die WiSo-Aufnahmeprüfung zu öffnen.
          </>
        }
      />
    </RequireFullCourse>
  );
}
