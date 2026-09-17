import { createFileRoute, redirect } from "@tanstack/react-router";
import { getFlashcardSubject } from "@/data/flashcards";
import { TutorExamSubjectView } from "@/components/study-modes/TutorExamSubjectView";

export const Route = createFileRoute("/tutor-exam/$subject")({
  beforeLoad: ({ params }) => {
    const subject = getFlashcardSubject(params.subject);
    if (!subject || subject.comingSoon) {
      throw redirect({ to: "/tutor-exam" });
    }
  },
  head: ({ params }) => {
    const subject = getFlashcardSubject(params.subject);
    const title = subject
      ? `${subject.title} Tutor Exam — BBE School`
      : "Tutor Exam — BBE School";
    return {
      links: [{ rel: "canonical", href: `https://bbe-school.com/tutor-exam/${params.subject}` }],
      meta: [
        { title },
        {
          name: "description",
          content:
            subject?.description ??
            "Random theoretical exam with a tutor robot for the WU entrance exam.",
        },
      ],
    };
  },
  component: TutorExamSubjectPage,
});

function TutorExamSubjectPage() {
  const { subject: subjectId } = Route.useParams();
  const subject = getFlashcardSubject(subjectId)!;
  return (
    <TutorExamSubjectView
      subjectId={subjectId}
      subject={subject}
      subjectsHref="/tutor-exam"
    />
  );
}
