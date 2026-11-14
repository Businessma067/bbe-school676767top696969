import { createFileRoute, redirect } from "@tanstack/react-router";
import { FlashcardSubjectView } from "@/components/study-modes/FlashcardSubjectView";
import { getWisoFlashcardSubjectMeta } from "@/data/wiso-flashcards";
import { useWisoFlashcardSubject } from "@/hooks/use-flashcard-subject";

export const Route = createFileRoute("/wiso/flashcards/$subject")({
  beforeLoad: ({ params }) => {
    const subject = getWisoFlashcardSubjectMeta(params.subject);
    if (!subject || subject.comingSoon) {
      throw redirect({ to: "/wiso/flashcards" });
    }
  },
  head: ({ params }) => {
    const subject = getWisoFlashcardSubjectMeta(params.subject);
    const title = subject
      ? `${subject.title} Flashcards — WiSo · BBE School`
      : "WiSo Flashcards — BBE School";
    return {
      links: [
        { rel: "canonical", href: `https://bbe-school.com/wiso/flashcards/${params.subject}` },
      ],
      meta: [
        { title },
        {
          name: "description",
          content: subject?.description ?? "WiSo flashcards for the WU entrance exam.",
        },
      ],
    };
  },
  component: WisoFlashcardSubjectPage,
});

function WisoFlashcardSubjectPage() {
  const { subject: subjectId } = Route.useParams();
  const { subject, loading } = useWisoFlashcardSubject(subjectId);
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
      progressSubjectId={`wiso-${subjectId}`}
      subjectsHref="/wiso/flashcards"
      locale="de"
    />
  );
}
