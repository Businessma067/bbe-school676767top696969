import { createFileRoute } from "@tanstack/react-router";
import { DemoStudyToolIndexPage } from "@/components/study-modes/DemoStudyToolPages";

export const Route = createFileRoute("/wiso/demo-practice/flashcards/")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://bbe-school.com/wiso/demo-practice/flashcards" },
    ],
    meta: [
      { title: "WiSo Demo Karteikarten — BBE School" },
      {
        name: "description",
        content: "Probiere WiSo-Demo-Karteikarten für Wirtschaft, Mathematik und Deutsch.",
      },
    ],
  }),
  component: () => <DemoStudyToolIndexPage track="wiso" kind="flashcards" />,
});
