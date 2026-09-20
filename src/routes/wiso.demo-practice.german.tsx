import { createFileRoute } from "@tanstack/react-router";
import { EnglishTasksPage } from "@/components/EnglishTasksPage";
import {
  DEMO_WISO_GERMAN_SUBSECTION_FREE,
  WISO_GERMAN_CHAPTERS,
} from "@/data/wiso-german-chapters";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

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
  return (
    <EnglishTasksPage
      tier="demo"
      backTo="/wiso/demo-practice"
      chapters={WISO_GERMAN_CHAPTERS}
      storageKey="wiso.german.demo.progress.v1"
      subjectLabel="Deutsch"
      demoSubsectionFree={DEMO_WISO_GERMAN_SUBSECTION_FREE}
      emptyHint={
        <>
          Tippe oben auf <span className="font-semibold text-foreground">Chapters</span>, um die
          kostenlosen Demo-Texte für die WiSo-Aufnahmeprüfung zu öffnen.
        </>
      }
    />
  );
}
