import { createFileRoute, redirect } from "@tanstack/react-router";
import {
  DemoStudyToolSubjectPage,
  isValidDemoStudySubject,
} from "@/components/study-modes/DemoStudyToolPages";

export const Route = createFileRoute("/wiso/demo-practice/matching/$subject")({
  beforeLoad: ({ params }) => {
    if (!isValidDemoStudySubject("wiso", params.subject)) {
      throw redirect({ to: "/wiso/demo-practice/matching" });
    }
  },
  head: ({ params }) => ({
    links: [
      {
        rel: "canonical",
        href: `https://bbe-school.com/wiso/demo-practice/matching/${params.subject}`,
      },
    ],
    meta: [{ title: `WiSo Demo Matching — ${params.subject} — BBE School` }],
  }),
  component: function WisoDemoMatchingSubject() {
    const { subject } = Route.useParams();
    return <DemoStudyToolSubjectPage track="wiso" kind="matching" subjectId={subject} />;
  },
});
