import { createFileRoute } from "@tanstack/react-router";
import { StudyToolsSubjectIndex } from "@/components/study-modes/StudyToolsSubjectIndex";
import { FLASHCARD_SUBJECTS } from "@/data/flashcards";

export const Route = createFileRoute("/tutor-exam/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/tutor-exam" }],
    meta: [
      { title: "Tutor Exam — BBE School" },
      {
        name: "description",
        content:
          "A tutor robot runs a random theoretical exam on BBE Economics, Math, and English. A new question set every time.",
      },
      { property: "og:title", content: "Tutor Exam — BBE School" },
      {
        property: "og:description",
        content:
          "A tutor robot runs a random theoretical exam on BBE Economics, Math, and English. A new question set every time.",
      },
    ],
  }),
  component: TutorExamIndexPage,
});

function TutorExamIndexPage() {
  return (
    <StudyToolsSubjectIndex
      kind="tutor-exam"
      subjectPath="/tutor-exam/$subject"
      subjects={FLASHCARD_SUBJECTS.map((s) => ({
        ...s,
        artSubject: s.id,
      }))}
    />
  );
}
