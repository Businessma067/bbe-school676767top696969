import { createFileRoute } from "@tanstack/react-router";
import { DemoStudyToolIndexPage } from "@/components/study-modes/DemoStudyToolPages";

export const Route = createFileRoute("/demo-practice/tutor-exam/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/demo-practice/tutor-exam" }],
    meta: [
      { title: "Demo Tutor Exam — BBE School" },
      {
        name: "description",
        content: "Try the BBE demo tutor exam for Economics, Math, and English.",
      },
    ],
  }),
  component: () => <DemoStudyToolIndexPage track="bbe" kind="tutor-exam" />,
});
