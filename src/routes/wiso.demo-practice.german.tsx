import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { EnglishTasksPage } from "@/components/EnglishTasksPage";
import {
  DEMO_WISO_GERMAN_SUBSECTION_FREE,
  loadWisoGermanChapters,
} from "@/data/wiso-german-chapters";
import type { EnglishChapter } from "@/data/english-chapters";
import { socialImageMetaForPath } from "@/lib/seo/social-image";
import { PRACTICE_PAGE } from "@/lib/practice-layout";
import { SiteHeader } from "@/components/SiteHeader";
import { Loader2 } from "lucide-react";

const PATH = "/wiso/demo-practice/german" as const;

export const Route = createFileRoute("/wiso/demo-practice/german")({
  head: () => ({
    links: [{ rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "Deutsch Demo — WiSo | BBE School" },
      {
        name: "description",
        content:
          "Free WiSo German reading demo: five tasks from the first text and three from the second.",
      },
      { property: "og:title", content: "Deutsch Demo — WiSo | BBE School" },
      {
        property: "og:description",
        content:
          "Free WiSo German reading demo: five tasks from the first text and three from the second.",
      },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoDemoGermanTasks,
});

function WisoDemoGermanTasks() {
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

  if (!chapters) {
    return (
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
    );
  }

  return (
    <EnglishTasksPage
      tier="demo"
      backTo="/wiso/demo-practice"
      chapters={chapters}
      storageKey="wiso.german.demo.progress.v1"
      subjectLabel="Deutsch"
      progressSubject="german"
      demoSubsectionFree={DEMO_WISO_GERMAN_SUBSECTION_FREE}
      courseHref="/wiso/products/full-course"
      emptyHint={
        <>
          Tippe in der Seitenleiste auf <span className="font-semibold text-foreground">Chapters</span>, um die
          kostenlosen Demo-Texte für die WiSo-Aufnahmeprüfung zu öffnen.
        </>
      }
    />
  );
}
