import { createFileRoute } from "@tanstack/react-router";
import { DemoStudyToolIndexPage } from "@/components/study-modes/DemoStudyToolPages";

export const Route = createFileRoute("/wiso/demo-practice/tutor-exam/")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://bbe-school.com/wiso/demo-practice/tutor-exam" },
    ],
    meta: [
      { title: "WiSo Demo Tutor-Prüfung — BBE School" },
      {
        name: "description",
        content: "Probiere die WiSo-Demo-Tutor-Prüfung für Wirtschaft, Mathematik und Deutsch.",
      },
    ],
  }),
  component: () => <DemoStudyToolIndexPage track="wiso" kind="tutor-exam" />,
});
