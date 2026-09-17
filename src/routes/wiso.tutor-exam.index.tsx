import { createFileRoute } from "@tanstack/react-router";
import { StudyToolsSubjectIndex } from "@/components/study-modes/StudyToolsSubjectIndex";
import { WISO_FLASHCARD_SUBJECTS } from "@/data/wiso-flashcards";

export const Route = createFileRoute("/wiso/tutor-exam/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/wiso/tutor-exam" }],
    meta: [
      { title: "WiSo-Tutor-Prüfung — BBE School" },
      {
        name: "description",
        content:
          "Ein Tutor-Roboter stellt eine zufällige Theorieprüfung zu WiSo-Wirtschaft, Mathematik und Deutsch.",
      },
    ],
  }),
  component: WisoTutorExamIndexPage,
});

function WisoTutorExamIndexPage() {
  return (
    <StudyToolsSubjectIndex
      kind="tutor-exam"
      locale="de"
      subjectPath="/wiso/tutor-exam/$subject"
      subjects={WISO_FLASHCARD_SUBJECTS.map((s) => ({
        ...s,
        artSubject: s.id,
      }))}
    />
  );
}
