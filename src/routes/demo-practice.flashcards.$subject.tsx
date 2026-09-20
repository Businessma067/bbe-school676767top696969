import { createFileRoute, redirect } from "@tanstack/react-router";
import {
  DemoStudyToolSubjectPage,
  isValidDemoStudySubject,
} from "@/components/study-modes/DemoStudyToolPages";

export const Route = createFileRoute("/demo-practice/flashcards/$subject")({
  beforeLoad: ({ params }) => {
    if (!isValidDemoStudySubject("bbe", params.subject)) {
      throw redirect({ to: "/demo-practice/flashcards" });
    }
  },
  head: ({ params }) => ({
    links: [
      {
        rel: "canonical",
        href: `https://bbe-school.com/demo-practice/flashcards/${params.subject}`,
      },
    ],
    meta: [{ title: `Demo Flashcards — ${params.subject} — BBE School` }],
  }),
  component: function DemoFlashcardSubject() {
    const { subject } = Route.useParams();
    return <DemoStudyToolSubjectPage track="bbe" kind="flashcards" subjectId={subject} />;
  },
});
