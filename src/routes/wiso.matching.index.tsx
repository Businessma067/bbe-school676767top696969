import { createFileRoute } from "@tanstack/react-router";
import { StudyToolsSubjectIndex } from "@/components/study-modes/StudyToolsSubjectIndex";
import { WISO_FLASHCARD_SUBJECTS } from "@/data/wiso-flashcards";

export const Route = createFileRoute("/wiso/matching/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/wiso/matching" }],
    meta: [
      { title: "WiSo Matching — BBE School" },
      {
        name: "description",
        content:
          "Connect WiSo Economics, Math, and German concepts to their meanings for the WU entrance exam.",
      },
    ],
  }),
  component: WisoMatchingIndexPage,
});

function WisoMatchingIndexPage() {
  return (
    <StudyToolsSubjectIndex
      kind="matching"
      subjectPath="/wiso/matching/$subject"
      subjects={WISO_FLASHCARD_SUBJECTS.map((s) => ({
        ...s,
        artSubject: s.id,
      }))}
    />
  );
}
