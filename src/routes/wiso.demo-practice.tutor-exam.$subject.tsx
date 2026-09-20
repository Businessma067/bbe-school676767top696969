import { createFileRoute, redirect } from "@tanstack/react-router";
import {
  DemoStudyToolSubjectPage,
  isValidDemoStudySubject,
} from "@/components/study-modes/DemoStudyToolPages";

export const Route = createFileRoute("/wiso/demo-practice/tutor-exam/$subject")({
  beforeLoad: ({ params }) => {
    if (!isValidDemoStudySubject("wiso", params.subject)) {
      throw redirect({ to: "/wiso/demo-practice/tutor-exam" });
    }
  },
  head: ({ params }) => ({
    links: [
      {
        rel: "canonical",
        href: `https://bbe-school.com/wiso/demo-practice/tutor-exam/${params.subject}`,
      },
    ],
    meta: [{ title: `WiSo Demo Tutor Exam — ${params.subject} — BBE School` }],
  }),
  component: function WisoDemoTutorSubject() {
    const { subject } = Route.useParams();
    return <DemoStudyToolSubjectPage track="wiso" kind="tutor-exam" subjectId={subject} />;
  },
});
