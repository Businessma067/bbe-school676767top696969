import { createFileRoute, redirect } from "@tanstack/react-router";
import {
  DemoStudyToolSubjectPage,
  isValidDemoStudySubject,
} from "@/components/study-modes/DemoStudyToolPages";

export const Route = createFileRoute("/demo-practice/matching/$subject")({
  beforeLoad: ({ params }) => {
    if (!isValidDemoStudySubject("bbe", params.subject)) {
      throw redirect({ to: "/demo-practice/matching" });
    }
  },
  head: ({ params }) => ({
    links: [
      {
        rel: "canonical",
        href: `https://bbe-school.com/demo-practice/matching/${params.subject}`,
      },
    ],
    meta: [{ title: `Demo Matching — ${params.subject} — BBE School` }],
  }),
  component: function DemoMatchingSubject() {
    const { subject } = Route.useParams();
    return <DemoStudyToolSubjectPage track="bbe" kind="matching" subjectId={subject} />;
  },
});
