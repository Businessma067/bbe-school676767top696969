import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/practice")({
  component: PracticePage,
  head: () => ({
    meta: [
      { title: "Practice — BBE School" },
      { name: "description", content: "Practice true/false questions with instant feedback and explanations." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

type QuestionRow = {
  id: string;
  stem_text: string;
  subject_id: string | null;
  topic_id: string | null;
  topics: { id: string; name: string; subjects: { id: string; name: string } | null } | null;
};
type StatementRow = {
  id: string;
  statement_order: number;
  statement_text: string;
  correct_answer: boolean;
  explanation: string | null;
};

function PracticePage() {
  const [question, setQuestion] = useState<QuestionRow | null>(null);
  const [statements, setStatements] = useState<StatementRow[]>([]);
  const [answers, setAnswers] = useState<Record<string, boolean | undefined>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    setSubmitted(false);
    setAnswers({});
    setQuestion(null);
    setStatements([]);
    try {
      const { count, error: cErr } = await supabase
        .from("questions")
        .select("*", { count: "exact", head: true });
      if (cErr) throw cErr;
      if (!count) {
        setError("No questions found.");
        return;
      }
      const offset = Math.floor(Math.random() * count);
      const { data: qData, error: qErr } = await supabase
        .from("questions")
        .select("id, stem_text, topics ( name, subjects ( name ) )")
        .range(offset, offset)
        .single();
      if (qErr || !qData) throw qErr ?? new Error("No question");
      const { data: sData, error: sErr } = await supabase
        .from("statements")
        .select("id, statement_order, statement_text, correct_answer, explanation")
        .eq("question_id", qData.id)
        .order("statement_order", { ascending: true });
      if (sErr) throw sErr;
      if (!sData?.length) {
        setError("This question has no statements.");
        return;
      }
      setQuestion(qData as unknown as QuestionRow);
      setStatements(sData);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const allAnswered = statements.length > 0 && statements.every((s) => answers[s.id] !== undefined);
  const correctCount = submitted
    ? statements.filter((s) => answers[s.id] === s.correct_answer).length
    : 0;

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Practice</h1>
        {submitted && (
          <div className="rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold">
            Score: {correctCount}/{statements.length} correct
          </div>
        )}
      </div>

      {loading && <p className="text-muted-foreground">Loading…</p>}
      {error && (
        <div className="rounded border border-destructive/50 bg-destructive/10 p-4 text-destructive">
          <strong>Error:</strong> {error}
        </div>
      )}

      {question && !loading && (
        <section className="space-y-5">
          <p className="text-sm text-muted-foreground">
            {question.topics?.subjects?.name ?? "—"} · {question.topics?.name ?? "—"}
          </p>
          <p className="text-lg font-medium">{question.stem_text}</p>

          <ol className="space-y-4">
            {statements.map((s, i) => {
              const picked = answers[s.id];
              const isCorrect = submitted && picked === s.correct_answer;
              return (
                <li key={s.id} className="rounded-lg border border-border p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-sm text-muted-foreground">{i + 1}.</span>
                    <p className="flex-1">{s.statement_text}</p>
                    {submitted && (
                      <span
                        className={
                          "text-lg font-bold " +
                          (isCorrect ? "text-green-600" : "text-red-600")
                        }
                        aria-label={isCorrect ? "Correct" : "Incorrect"}
                      >
                        {isCorrect ? "✓" : "✗"}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2 pl-6">
                    {([true, false] as const).map((val) => {
                      const selected = picked === val;
                      return (
                        <button
                          key={String(val)}
                          type="button"
                          disabled={submitted}
                          onClick={() =>
                            setAnswers((a) => ({ ...a, [s.id]: val }))
                          }
                          className={
                            "rounded-md border px-4 py-1.5 text-sm font-medium transition-colors " +
                            (selected
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-card hover:bg-secondary") +
                            (submitted ? " opacity-80 cursor-not-allowed" : "")
                          }
                        >
                          {val ? "True" : "False"}
                        </button>
                      );
                    })}
                  </div>

                  {submitted && s.explanation && (
                    <p className="pl-6 text-sm text-muted-foreground border-l-2 border-border ml-2">
                      {s.explanation}
                    </p>
                  )}
                </li>
              );
            })}
          </ol>

          <div className="flex gap-3">
            {!submitted ? (
              <button
                type="button"
                onClick={async () => {
                  setSubmitted(true);
                  // Log session + answers when signed in (best-effort; errors ignored to not disrupt UX)
                  try {
                    const { data: sess } = await supabase.auth.getSession();
                    const uid = sess.session?.user?.id;
                    if (!uid || !question) return;
                    const correctCount = statements.filter((s) => answers[s.id] === s.correct_answer).length;
                    const subjectId = (question as any).topics?.subjects?.id ?? null;
                    const topicId = (question as any).topics?.id ?? null;
                    const { data: created, error: sErr } = await supabase
                      .from("practice_sessions")
                      .insert({
                        user_id: uid,
                        mode: "practice",
                        subject_id: subjectId,
                        topic_id: topicId,
                        total_questions: statements.length,
                        correct_answers: correctCount,
                        completed_at: new Date().toISOString(),
                      })
                      .select("id")
                      .single();
                    if (sErr || !created) return;
                    await supabase.from("session_answers").insert(
                      statements.map((s) => ({
                        session_id: created.id,
                        user_id: uid,
                        question_id: question.id,
                        statement_id: s.id,
                        selected_answer: answers[s.id] as boolean,
                        is_correct: answers[s.id] === s.correct_answer,
                      })),
                    );
                  } catch { /* swallow */ }
                }}
                disabled={!allAnswered}
                className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit
              </button>
            ) : (
              <button
                type="button"
                onClick={() => void load()}
                className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm"
              >
                Next Question →
              </button>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
