import { createFileRoute } from "@tanstack/react-router";
import { CaseContextRich } from "@/components/CaseContextRich";
import { buildMockExam1Questions, MOCK_EXAM_1_CONTENT_REV } from "@/lib/mock-exam-1-content";

export const Route = createFileRoute("/dev/mock1-case-audit")({
  head: () => ({
    meta: [
      { title: "Mock1 case audit (dev)" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Mock1CaseAuditPage,
});

function Mock1CaseAuditPage() {
  const questions = buildMockExam1Questions().filter((q) => q.subject === "economics");
  const focus = questions.filter((q) => [6, 7, 9, 10].includes(q.index));

  return (
    <div className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-8">
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-1 border-b border-border pb-4">
          <h1 className="font-display text-2xl font-semibold">Mock Exam 1 — case audit</h1>
          <p className="text-sm text-muted-foreground">rev {MOCK_EXAM_1_CONTENT_REV}</p>
        </header>
        {focus.map((q) => (
          <section key={q.id} className="space-y-3 rounded-xl border border-border p-4 sm:p-5">
            <h2 className="text-sm font-semibold text-foreground">
              Q{q.index} · {q.id}
            </h2>
            <CaseContextRich content={q.stem} emphasized />
          </section>
        ))}
      </div>
    </div>
  );
}
