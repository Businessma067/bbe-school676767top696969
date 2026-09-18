import { createFileRoute, redirect } from "@tanstack/react-router";
import { FlashcardSubjectView } from "@/components/study-modes/FlashcardSubjectView";
import { getWisoFlashcardSubject } from "@/data/wiso-flashcards";

export const Route = createFileRoute("/wiso/flashcards/$subject")({
  beforeLoad: ({ params }) => {
    const subject = getWisoFlashcardSubject(params.subject);
    if (!subject || subject.comingSoon) {
      throw redirect({ to: "/wiso/flashcards" });
    }
  },
  head: ({ params }) => {
    const subject = getWisoFlashcardSubject(params.subject);
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
  const subject = getWisoFlashcardSubject(subjectId)!;
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
