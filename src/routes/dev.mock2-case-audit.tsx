import { createFileRoute } from "@tanstack/react-router";
import { CaseContextRich } from "@/components/CaseContextRich";
import { ExamExplanationText } from "@/components/mock-exam/ExamQuestionContent";
import {
  buildMockExam2Questions,
  MOCK_EXAM_2_CONTENT_REV,
} from "@/lib/mock-exam-2-content";

export const Route = createFileRoute("/dev/mock2-case-audit")({
  head: () => ({
    meta: [
      { title: "Mock2 case audit (dev)" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Mock2CaseAuditPage,
});

function Mock2CaseAuditPage() {
  const questions = buildMockExam2Questions();
  // Stock+bonds chart, English with passage, inequalities, radioactive, ch9 figure, ch12 tables
  // Q1 unit-of-account · Q10 LakeForge stock+bonds · Q11 English+passage ·
  // Q27 hard inequalities · Q30 ch9 figure · Q31 radioactive · Q33 ch12 tables
  const focus = questions.filter((q) =>
    [1, 10, 11, 27, 30, 31, 33].includes(q.index),
  );

  return (
    <div className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-8">
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-1 border-b border-border pb-4">
          <h1 className="font-display text-2xl font-semibold">
            Mock Exam 2 — case + KaTeX audit
          </h1>
          <p className="text-sm text-muted-foreground">rev {MOCK_EXAM_2_CONTENT_REV}</p>
          <p className="text-sm text-muted-foreground">
            Spot-check: unit-of-account econ, LakeForge stock+bonds chart, Shifting Anatomy
            English, hard inequalities, radioactive exp/log, ch9 chart title, ch12 tables.
          </p>
        </header>
        {focus.map((q) => (
          <section key={q.id} className="space-y-4 rounded-xl border border-border p-4 sm:p-5">
            <h2 className="text-sm font-semibold text-foreground">
              Q{q.index} · {q.subject} · {q.subtopicTag || q.id}
            </h2>
            {q.passage ? (
              <div className="rounded-lg border border-border bg-secondary/10 p-3 text-sm leading-relaxed">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Passage
                </p>
                <p className="whitespace-pre-wrap">{q.passage.slice(0, 500)}…</p>
              </div>
            ) : null}
            <CaseContextRich content={q.stem} emphasized />
            {q.figure ? (
              <img
                src={q.figure}
                alt="Question figure"
                className="w-full max-w-xl rounded-lg border border-border"
              />
            ) : null}
            {q.tablesMarkdown ? (
              <pre className="overflow-x-auto rounded-lg border border-border bg-secondary/10 p-3 text-xs">
                {q.tablesMarkdown}
              </pre>
            ) : null}
            <div className="space-y-3 border-t border-border pt-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Statements + explanations (KaTeX check)
              </h3>
              {q.statements.map((s, i) => (
                <div
                  key={s.id}
                  className="rounded-lg border border-border bg-secondary/20 p-3 text-sm"
                >
                  <p className="mb-1 text-xs font-semibold text-muted-foreground">
                    {String.fromCharCode(65 + i)} · {s.isTrue ? "True" : "False"}
                  </p>
                  <p className="mb-2">{s.text}</p>
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
