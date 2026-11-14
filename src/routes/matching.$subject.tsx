import { createFileRoute, redirect } from "@tanstack/react-router";
import { getFlashcardSubjectMeta } from "@/data/flashcards";
import { MatchingSubjectView } from "@/components/study-modes/MatchingSubjectView";
import { useFlashcardSubject } from "@/hooks/use-flashcard-subject";

export const Route = createFileRoute("/matching/$subject")({
  beforeLoad: ({ params }) => {
    const subject = getFlashcardSubjectMeta(params.subject);
    if (!subject || subject.comingSoon) {
      throw redirect({ to: "/matching" });
    }
  },
  head: ({ params }) => {
    const subject = getFlashcardSubjectMeta(params.subject);
    const title = subject
      ? `${subject.title} Matching — BBE School`
      : "Matching — BBE School";
    return {
      links: [{ rel: "canonical", href: `https://bbe-school.com/matching/${params.subject}` }],
      meta: [
        { title },
        {
          name: "description",
          content:
            subject?.description ??
            "Connect BBE concepts to their meanings for the WU entrance exam.",
        },
      ],
    };
  },
  component: MatchingSubjectPage,
});

function MatchingSubjectPage() {
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
    <MatchingSubjectView
      subjectId={subjectId}
      subject={subject}
      subjectsHref="/matching"
    />
  );
}
