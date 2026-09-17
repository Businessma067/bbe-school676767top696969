import { createFileRoute, redirect } from "@tanstack/react-router";
import { getFlashcardSubject } from "@/data/flashcards";
import { MatchingSubjectView } from "@/components/study-modes/MatchingSubjectView";

export const Route = createFileRoute("/matching/$subject")({
  beforeLoad: ({ params }) => {
    const subject = getFlashcardSubject(params.subject);
    if (!subject || subject.comingSoon) {
      throw redirect({ to: "/matching" });
    }
  },
  head: ({ params }) => {
    const subject = getFlashcardSubject(params.subject);
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
  const subject = getFlashcardSubject(subjectId)!;
  return (
    <MatchingSubjectView
      subjectId={subjectId}
      subject={subject}
      subjectsHref="/matching"
    />
  );
}
