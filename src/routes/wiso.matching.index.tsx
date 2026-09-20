import { createFileRoute } from "@tanstack/react-router";
import { StudyToolsSubjectIndex } from "@/components/study-modes/StudyToolsSubjectIndex";
import { WISO_FLASHCARD_SUBJECTS } from "@/data/wiso-flashcards";

export const Route = createFileRoute("/wiso/matching/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/wiso/matching" }],
    meta: [
      { title: "WiSo-Zuordnung — BBE School" },
      {
        name: "description",
        content:
          "Verbinde WiSo-Begriffe aus Wirtschaft, Mathematik und Deutsch mit ihren Bedeutungen.",
      },
    ],
  }),
  component: WisoMatchingIndexPage,
});

function WisoMatchingIndexPage() {
  return (
    <StudyToolsSubjectIndex
      kind="matching"
      locale="de"
      subjectPath="/wiso/matching/$subject"
      subjects={WISO_FLASHCARD_SUBJECTS.map((s) => ({
        ...s,
        artSubject: s.id,
      }))}
    />
  );
}
