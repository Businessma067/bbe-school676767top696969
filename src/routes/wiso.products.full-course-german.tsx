import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { EnglishTasksPage } from "@/components/EnglishTasksPage";
import { RequireFullCourse } from "@/components/RequireFullCourse";
import { SiteHeader } from "@/components/SiteHeader";
import { loadWisoGermanChapters } from "@/data/wiso-german-chapters";
import type { EnglishChapter } from "@/data/english-chapters";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { PRACTICE_PAGE } from "@/lib/practice-layout";
import { socialImageMetaForPath } from "@/lib/seo/social-image";
import { Loader2 } from "lucide-react";

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
      { property: "og:title", content: "Deutsches Sprachverständnis: Full WiSo Course" },
      {
        property: "og:description",
        content:
          "Ten German reading texts with ten comprehension tasks each, aligned to WiSo Sprachverständnis (no English, no grammar mini-section).",
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
  const [chapters, setChapters] = useState<EnglishChapter[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        const next = await loadWisoGermanChapters();
        if (!cancel) setChapters(next);
      } catch (err) {
        if (!cancel) {
          setError(err instanceof Error ? err.message : "Failed to load German texts.");
        }
      }
    })();
    return () => {
      cancel = true;
    };
  }, []);

  return (
    <RequireFullCourse minTier="full" productSlug="wiso-full-course">
      {!chapters ? (
        <div className={PRACTICE_PAGE}>
          <SiteHeader maxWidthClassName="max-w-none" compact />
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-4 py-24 text-sm text-muted-foreground">
            {error ? (
              <p className="text-destructive">{error}</p>
            ) : (
              <>
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                <p>Loading German texts…</p>
              </>
            )}
          </div>
        </div>
      ) : (
        <EnglishTasksPage
          tier="full"
          backTo="/wiso/products/full-course-subjects"
          chapters={chapters}
          storageKey="wiso.german.progress.v1"
          subjectLabel="Deutsch"
          progressSubject="german"
          enableContentTranslation
          emptyHint={
            <>
              Tippe in der Seitenleiste auf <span className="font-semibold text-foreground">Chapters</span>, um die
              deutschen Lesetexte für die WiSo-Aufnahmeprüfung zu öffnen.
            </>
          }
        />
      )}
    </RequireFullCourse>
  );
}
