import { createFileRoute } from "@tanstack/react-router";
import { StudyToolsSubjectIndex } from "@/components/study-modes/StudyToolsSubjectIndex";
import { FLASHCARD_SUBJECTS } from "@/data/flashcards";

export const Route = createFileRoute("/flashcards/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/flashcards" }],
    meta: [
      { title: "Flashcards — BBE School" },
      {
        name: "description",
        content:
          "Study BBE Economics, Math, and English flashcards: terms, formulas, and concepts for the WU entrance exam.",
      },
      { property: "og:title", content: "Flashcards — BBE School" },
      {
        property: "og:description",
        content:
          "Study BBE Economics, Math, and English flashcards: terms, formulas, and concepts for the WU entrance exam.",
      },
    ],
  }),
  component: FlashcardsIndexPage,
});

function FlashcardsIndexPage() {
  return (
    <StudyToolsSubjectIndex
      kind="flashcards"
      subjectPath="/flashcards/$subject"
      subjects={FLASHCARD_SUBJECTS.map((s) => ({
        ...s,
        artSubject: s.id,
      }))}
    />
  );
}
