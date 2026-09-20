import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import {
  countCards,
  getFlashcardSubject,
} from "@/data/flashcards";
import { FlashcardSubjectView } from "@/components/study-modes/FlashcardSubjectView";

export const Route = createFileRoute("/flashcards/$subject")({
  beforeLoad: ({ params }) => {
    const subject = getFlashcardSubject(params.subject);
    if (!subject || subject.comingSoon) {
      throw redirect({ to: "/flashcards" });
    }
  },
  head: ({ params }) => {
    const subject = getFlashcardSubject(params.subject);
    const title = subject ? `${subject.title} Flashcards — BBE School` : "Flashcards — BBE School";
    return {
      links: [{ rel: "canonical", href: `https://bbe-school.com/flashcards/${params.subject}` }],
      meta: [
        { title },
        {
          name: "description",
          content: subject?.description ?? "BBE flashcards for the WU entrance exam.",
        },
      ],
    };
  },
  component: FlashcardSubjectPage,
});

function FlashcardSubjectPage() {
  const { subject: subjectId } = Route.useParams();
  const subject = getFlashcardSubject(subjectId)!;
  return (
    <FlashcardSubjectView
      subjectId={subjectId}
      subject={subject}
      subjectsHref="/flashcards"
      vocabularyModes={subjectId === "english"}
    />
  );
}
