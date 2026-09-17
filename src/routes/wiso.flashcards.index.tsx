import { createFileRoute } from "@tanstack/react-router";
import { StudyToolsSubjectIndex } from "@/components/study-modes/StudyToolsSubjectIndex";
import { WISO_FLASHCARD_SUBJECTS } from "@/data/wiso-flashcards";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/flashcards" as const;

export const Route = createFileRoute("/wiso/flashcards/")({
  head: () => ({
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "WiSo Flashcards — BBE School" },
      {
        name: "description",
        content:
          "Study WiSo Economics, Math, and German flashcards for the WU WiSo entrance exam.",
      },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoFlashcardsIndexPage,
});

export function WisoFlashcardsIndexPage() {
  return (
    <StudyToolsSubjectIndex
      kind="flashcards"
      subjectPath="/wiso/flashcards/$subject"
      subjects={WISO_FLASHCARD_SUBJECTS.map((s) => ({
        ...s,
        artSubject: s.id,
      }))}
    />
  );
}
