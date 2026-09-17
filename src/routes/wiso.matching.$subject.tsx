import { createFileRoute, redirect } from "@tanstack/react-router";
import { MatchingSubjectView } from "@/components/study-modes/MatchingSubjectView";
import { getWisoFlashcardSubject } from "@/data/wiso-flashcards";

export const Route = createFileRoute("/wiso/matching/$subject")({
  beforeLoad: ({ params }) => {
    const subject = getWisoFlashcardSubject(params.subject);
    if (!subject || subject.comingSoon) {
      throw redirect({ to: "/wiso/matching" });
    }
  },
  head: ({ params }) => {
    const subject = getWisoFlashcardSubject(params.subject);
    const title = subject
      ? `${subject.title} Matching — WiSo · BBE School`
      : "WiSo Matching — BBE School";
    return {
      links: [{ rel: "canonical", href: `https://bbe-school.com/wiso/matching/${params.subject}` }],
      meta: [
        { title },
        {
          name: "description",
          content:
            subject?.description ??
            "Connect WiSo concepts to their meanings for the WU entrance exam.",
        },
      ],
    };
  },
  component: WisoMatchingSubjectPage,
});

function WisoMatchingSubjectPage() {
  const { subject: subjectId } = Route.useParams();
  const subject = getWisoFlashcardSubject(subjectId)!;
  return (
    <MatchingSubjectView
      subjectId={subjectId}
      subject={subject}
      subjectsHref="/wiso/matching"
    />
  );
}
