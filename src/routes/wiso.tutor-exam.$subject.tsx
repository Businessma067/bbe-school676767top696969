import { createFileRoute, redirect } from "@tanstack/react-router";
import { TutorExamSubjectView } from "@/components/study-modes/TutorExamSubjectView";
import { getWisoFlashcardSubjectMeta } from "@/data/wiso-flashcards";
import { useWisoFlashcardSubject } from "@/hooks/use-flashcard-subject";

export const Route = createFileRoute("/wiso/tutor-exam/$subject")({
  beforeLoad: ({ params }) => {
    const subject = getWisoFlashcardSubjectMeta(params.subject);
    if (!subject || subject.comingSoon) {
      throw redirect({ to: "/wiso/tutor-exam" });
    }
  },
  head: ({ params }) => {
    const subject = getWisoFlashcardSubjectMeta(params.subject);
    const title = subject
      ? `${subject.title} Tutor Exam — WiSo · BBE School`
      : "WiSo Tutor Exam — BBE School";
    return {
      links: [
        { rel: "canonical", href: `https://bbe-school.com/wiso/tutor-exam/${params.subject}` },
      ],
      meta: [
        { title },
        {
          name: "description",
          content:
            subject?.description ??
            "Random theoretical exam with a tutor robot for the WiSo entrance exam.",
        },
      ],
    };
  },
  component: WisoTutorExamSubjectPage,
});

function WisoTutorExamSubjectPage() {
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
    <TutorExamSubjectView
      subjectId={subjectId}
      subject={subject}
      subjectsHref="/wiso/tutor-exam"
      locale="de"
    />
  );
}
