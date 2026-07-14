import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/db-test")({
  component: DbTestPage,
  head: () => ({
    meta: [
      { title: "DB Test" },
      { name: "description", content: "Database connectivity and query test page." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

type Counts = { subjects: number; topics: number; questions: number; statements: number };
type QuestionRow = {
  id: string;
  stem_text: string;
  topics: { name: string; subjects: { name: string } | null } | null;
};
type StatementRow = {
  id: string;
  statement_order: number;
  statement_text: string;
  correct_answer: boolean;
};

function DbTestPage() {
  const [counts, setCounts] = useState<Counts | null>(null);
  const [question, setQuestion] = useState<QuestionRow | null>(null);
  const [statements, setStatements] = useState<StatementRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const tables = ["subjects", "topics", "questions", "statements"] as const;
        const countResults = await Promise.all(
          tables.map((t) => supabase.from(t).select("*", { count: "exact", head: true }))
        );
        const c: Counts = { subjects: 0, topics: 0, questions: 0, statements: 0 };
        for (let i = 0; i < tables.length; i++) {
          const r = countResults[i];
          if (r.error) {
            setError(`Table "${tables[i]}" could not be found or read: ${r.error.message}`);
            setLoading(false);
            return;
          }
          if (r.count === null || r.count === 0) {
            setError(`Table "${tables[i]}" has no rows.`);
            setLoading(false);
            return;
          }
          c[tables[i]] = r.count;
        }
        setCounts(c);

        const offset = Math.floor(Math.random() * c.questions);
        const { data: qData, error: qErr } = await supabase
          .from("questions")
          .select("id, stem_text, topics ( name, subjects ( name ) )")
          .range(offset, offset)
          .single();
        if (qErr || !qData) {
          setError(`Failed to fetch a random question: ${qErr?.message ?? "no data"}`);
          setLoading(false);
          return;
        }
        setQuestion(qData as unknown as QuestionRow);

        const { data: sData, error: sErr } = await supabase
          .from("statements")
          .select("id, statement_order, statement_text, correct_answer")
          .eq("question_id", qData.id)
          .order("statement_order", { ascending: true });
        if (sErr) {
          setError(`Failed to fetch statements: ${sErr.message}`);
          setLoading(false);
          return;
        }
        if (!sData || sData.length === 0) {
          setError(`Table "statements" has no rows for question ${qData.id}.`);
          setLoading(false);
          return;
        }
        setStatements(sData);
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <h1 className="text-2xl font-bold">Database Test</h1>

      {loading && <p className="text-muted-foreground">Loading…</p>}

      {error && (
        <div className="rounded border border-destructive/50 bg-destructive/10 p-4 text-destructive">
          <strong>Error:</strong> {error}
        </div>
      )}

      {counts && (
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Row counts</h2>
          <ul className="list-disc pl-6">
            <li>subjects: {counts.subjects}</li>
            <li>topics: {counts.topics}</li>
            <li>questions: {counts.questions}</li>
            <li>statements: {counts.statements}</li>
          </ul>
        </section>
      )}

      {question && (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Random question</h2>
          <p className="text-sm text-muted-foreground">
            Subject: {question.topics?.subjects?.name ?? "—"} · Topic:{" "}
            {question.topics?.name ?? "—"}
          </p>
          <p className="font-medium">{question.stem_text}</p>

          <ol className="space-y-2 pl-6 list-decimal">
            {statements.map((s) => (
              <li key={s.id}>
                <span>{s.statement_text}</span>{" "}
                <span className="text-sm text-muted-foreground">
                  — correct_answer: <strong>{String(s.correct_answer)}</strong>
                </span>
              </li>
            ))}
          </ol>
        </section>
      )}
    </main>
  );
}
