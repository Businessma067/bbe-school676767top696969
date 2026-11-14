import { createFileRoute, redirect } from "@tanstack/react-router";
import { getFlashcardSubjectMeta } from "@/data/flashcards";
import { FlashcardSubjectView } from "@/components/study-modes/FlashcardSubjectView";
import { useFlashcardSubject } from "@/hooks/use-flashcard-subject";

export const Route = createFileRoute("/flashcards/$subject")({
  beforeLoad: ({ params }) => {
    const subject = getFlashcardSubjectMeta(params.subject);
    if (!subject || subject.comingSoon) {
      throw redirect({ to: "/flashcards" });
    }
  },
  head: ({ params }) => {
    const subject = getFlashcardSubjectMeta(params.subject);
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
  const { subject, loading } = useFlashcardSubject(subjectId);
  if (loading || !subject) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center text-sm text-muted-foreground">
        Loading deck…
      </div>
    );
  }
  return (
    <FlashcardSubjectView
      subjectId={subjectId}
      subject={subject}
      subjectsHref="/flashcards"
      vocabularyModes={subjectId === "english"}
    />
  );
}
