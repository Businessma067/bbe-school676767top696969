import { createFileRoute } from "@tanstack/react-router";
import { DemoStudyToolIndexPage } from "@/components/study-modes/DemoStudyToolPages";

export const Route = createFileRoute("/wiso/demo-practice/matching/")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://bbe-school.com/wiso/demo-practice/matching" },
    ],
    meta: [
      { title: "WiSo Demo Zuordnung — BBE School" },
      {
        name: "description",
        content: "Probiere WiSo-Demo-Zuordnung für Wirtschaft, Mathematik und Deutsch.",
      },
    ],
  }),
  component: () => <DemoStudyToolIndexPage track="wiso" kind="matching" />,
});
