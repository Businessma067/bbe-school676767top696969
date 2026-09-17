import { createFileRoute } from "@tanstack/react-router";
import { StudyToolsSubjectIndex } from "@/components/study-modes/StudyToolsSubjectIndex";
import { WISO_FLASHCARD_SUBJECTS } from "@/data/wiso-flashcards";

export const Route = createFileRoute("/wiso/tutor-exam/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/wiso/tutor-exam" }],
    meta: [
      { title: "WiSo Tutor Exam — BBE School" },
      {
        name: "description",
        content:
          "A tutor robot runs a random theoretical exam on WiSo Economics, Math, and German.",
      },
    ],
  }),
  component: WisoTutorExamIndexPage,
});

function WisoTutorExamIndexPage() {
  return (
    <StudyToolsSubjectIndex
      kind="tutor-exam"
      subjectPath="/wiso/tutor-exam/$subject"
      subjects={WISO_FLASHCARD_SUBJECTS.map((s) => ({
        ...s,
        artSubject: s.id,
      }))}
    />
  );
}
