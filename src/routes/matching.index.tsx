import { createFileRoute } from "@tanstack/react-router";
import { StudyToolsSubjectIndex } from "@/components/study-modes/StudyToolsSubjectIndex";
import { FLASHCARD_SUBJECTS } from "@/data/flashcards";

export const Route = createFileRoute("/matching/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/matching" }],
    meta: [
      { title: "Matching — BBE School" },
      {
        name: "description",
        content:
          "Connect BBE Economics, Math, and English concepts to their meanings. An interactive matching drill for the WU entrance exam.",
      },
      { property: "og:title", content: "Matching — BBE School" },
      {
        property: "og:description",
        content:
          "Connect BBE Economics, Math, and English concepts to their meanings. An interactive matching drill for the WU entrance exam.",
      },
    ],
  }),
  component: MatchingIndexPage,
});

function MatchingIndexPage() {
  return (
    <StudyToolsSubjectIndex
      kind="matching"
      subjectPath="/matching/$subject"
      subjects={FLASHCARD_SUBJECTS.map((s) => ({
        ...s,
        artSubject: s.id,
      }))}
    />
  );
}
