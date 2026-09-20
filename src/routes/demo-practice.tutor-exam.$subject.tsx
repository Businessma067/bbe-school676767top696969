import { createFileRoute, redirect } from "@tanstack/react-router";
import {
  DemoStudyToolSubjectPage,
  isValidDemoStudySubject,
} from "@/components/study-modes/DemoStudyToolPages";

export const Route = createFileRoute("/demo-practice/tutor-exam/$subject")({
  beforeLoad: ({ params }) => {
    if (!isValidDemoStudySubject("bbe", params.subject)) {
      throw redirect({ to: "/demo-practice/tutor-exam" });
    }
  },
  head: ({ params }) => ({
    links: [
      {
        rel: "canonical",
        href: `https://bbe-school.com/demo-practice/tutor-exam/${params.subject}`,
      },
    ],
    meta: [{ title: `Demo Tutor Exam — ${params.subject} — BBE School` }],
  }),
  component: function DemoTutorSubject() {
    const { subject } = Route.useParams();
    return <DemoStudyToolSubjectPage track="bbe" kind="tutor-exam" subjectId={subject} />;
  },
});
