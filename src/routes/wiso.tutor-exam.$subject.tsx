import { createFileRoute, redirect } from "@tanstack/react-router";
import { TutorExamSubjectView } from "@/components/study-modes/TutorExamSubjectView";
import { getWisoFlashcardSubject } from "@/data/wiso-flashcards";

export const Route = createFileRoute("/wiso/tutor-exam/$subject")({
  beforeLoad: ({ params }) => {
    const subject = getWisoFlashcardSubject(params.subject);
    if (!subject || subject.comingSoon) {
      throw redirect({ to: "/wiso/tutor-exam" });
    }
  },
  head: ({ params }) => {
    const subject = getWisoFlashcardSubject(params.subject);
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
  const subject = getWisoFlashcardSubject(subjectId)!;
  return (
    <TutorExamSubjectView
      subjectId={subjectId}
      subject={subject}
      subjectsHref="/wiso/tutor-exam"
      locale="de"
    />
  );
}
