import { createFileRoute, redirect } from "@tanstack/react-router";
import {
  DemoStudyToolSubjectPage,
  isValidDemoStudySubject,
} from "@/components/study-modes/DemoStudyToolPages";

export const Route = createFileRoute("/wiso/demo-practice/flashcards/$subject")({
  beforeLoad: ({ params }) => {
    if (!isValidDemoStudySubject("wiso", params.subject)) {
      throw redirect({ to: "/wiso/demo-practice/flashcards" });
    }
  },
  head: ({ params }) => ({
    links: [
      {
        rel: "canonical",
        href: `https://bbe-school.com/wiso/demo-practice/flashcards/${params.subject}`,
      },
    ],
    meta: [{ title: `WiSo Demo Flashcards — ${params.subject} — BBE School` }],
  }),
  component: function WisoDemoFlashcardSubject() {
    const { subject } = Route.useParams();
    return <DemoStudyToolSubjectPage track="wiso" kind="flashcards" subjectId={subject} />;
  },
});
