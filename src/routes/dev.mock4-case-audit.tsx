import { createFileRoute } from "@tanstack/react-router";
import { CaseContextRich } from "@/components/CaseContextRich";
import { ExamExplanationText } from "@/components/mock-exam/ExamQuestionContent";
import { buildMockExam4Questions, MOCK_EXAM_4_CONTENT_REV } from "@/lib/mock-exam-4-content";

export const Route = createFileRoute("/dev/mock4-case-audit")({
  head: () => ({
    meta: [
      { title: "Mock4 case audit (dev)" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Mock4CaseAuditPage,
});

/** Focus customs that must appear after Lovable Git sync. */
const FOCUS_INDEXES = [22, 23, 25, 26, 28, 30, 31, 32, 33, 34];

function Mock4CaseAuditPage() {
  const questions = buildMockExam4Questions().filter((q) => FOCUS_INDEXES.includes(q.index));

  return (
    <div className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-8">
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-1 border-b border-border pb-4">
          <h1 className="font-display text-2xl font-semibold">Mock Exam 4 — case + KaTeX audit</h1>
          <p className="text-sm text-muted-foreground">rev {MOCK_EXAM_4_CONTENT_REV}</p>
          <p className="text-sm text-muted-foreground">
            If this page still shows an older rev after GitHub sync, Lovable preview is stale.
            After a successful update the stamp must include <code>ff-push sync</code>. Custom
            math Q22–33 must render KaTeX, not raw <code>$$…$$</code>.
          </p>
        </header>
        {questions.map((q) => (
          <section key={q.id} className="space-y-4 rounded-xl border border-border p-4 sm:p-5">
            <h2 className="text-sm font-semibold text-foreground">
              Q{q.index} · {q.id}
            </h2>
            <CaseContextRich content={q.stem} emphasized />
            <div className="space-y-3 border-t border-border pt-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Statements
              </h3>
              <ol className="list-decimal space-y-2 pl-5 text-sm">
                {q.statements.map((s) => (
                  <li key={s.id}>
                    <CaseContextRich content={s.text} />
                  </li>
                ))}
              </ol>
              <h3 className="pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Explanations (KaTeX check)
              </h3>
              {q.statements.map((s, i) => (
                <div
                  key={`ex-${s.id}`}
                  className="rounded-lg border border-border bg-secondary/20 p-3 text-sm"
                >
                  <p className="mb-2 text-xs font-semibold text-muted-foreground">
                    {String.fromCharCode(65 + i)} · {s.isTrue ? "True" : "False"}
                  </p>
                  <ExamExplanationText q={q} text={s.explanation} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
