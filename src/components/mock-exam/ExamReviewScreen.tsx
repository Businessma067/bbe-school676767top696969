import { Flag } from "lucide-react";
import { isQuestionAnswered } from "@/lib/mock-exam-session";
import type { ExamQuestion } from "@/lib/mock-exams";
import { PRACTICE_BODY } from "@/lib/practice-layout";

type Props = {
  questions: ExamQuestion[];
  answers: Record<string, boolean[]>;
  flagged: Set<string>;
  onJump: (index: number) => void;
  onSubmit: () => void;
  onBack: () => void;
};

export function ExamReviewScreen({
  questions,
  answers,
  flagged,
  onJump,
  onSubmit,
  onBack,
}: Props) {
  const totalQuestions = questions.length;
  const totalStatements = totalQuestions * 5;
  const answeredQuestions = questions.filter((q) => isQuestionAnswered(answers[q.id]));
  const unansweredQuestions = questions.filter((q) => !isQuestionAnswered(answers[q.id]));
  const flaggedQuestions = questions.filter((q) => flagged.has(q.id));

  return (
    <div className={`${PRACTICE_BODY} flex-col py-10`}>
      <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
        Review before submission
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Check unanswered and flagged items. Submission uses your Answer Sheet marks only.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <Stat label="Total questions" value={String(totalQuestions)} />
        <Stat label="Total statements" value={String(totalStatements)} />
        <Stat label="Answered questions" value={String(answeredQuestions.length)} accent />
        <Stat label="Unanswered questions" value={String(unansweredQuestions.length)} warn={unansweredQuestions.length > 0} />
        <Stat
          label="Flagged questions"
          value={String(flaggedQuestions.length)}
          className="sm:col-span-2"
        />
      </div>

      {unansweredQuestions.length > 0 && (
        <JumpList
          title="Unanswered"
          items={unansweredQuestions}
          onJump={onJump}
        />
      )}

      {flaggedQuestions.length > 0 && (
        <JumpList
          title="Flagged for review"
          items={flaggedQuestions}
          onJump={onJump}
          flagged
        />
      )}

      <div className="mt-10 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onBack}
          className="rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-all hover:bg-secondary"
        >
          Continue exam
        </button>
        <button
          type="button"
          onClick={onSubmit}
          className="rounded-md bg-caramel-deep px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
        >
          Submit exam
        </button>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  accent,
  warn,
  className,
}: {
  label: string;
  value: string;
  accent?: boolean;
  warn?: boolean;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-4 shadow-sm ${className ?? ""}`}>
      <div className="text-[10px] font-semibold uppercase tracking-widest text-taupe">{label}</div>
      <div
        className={`mt-1 font-display text-2xl font-bold tabular-nums ${
          warn ? "text-orange-600" : accent ? "text-caramel-deep" : ""
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function JumpList({
  title,
  items,
  onJump,
  flagged,
}: {
  title: string;
  items: ExamQuestion[];
  onJump: (index: number) => void;
  flagged?: boolean;
}) {
  return (
    <div className="mt-8">
      <h2 className="mb-3 font-display text-lg font-semibold">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {items.map((q) => (
          <button
            key={q.id}
            type="button"
            onClick={() => onJump(q.index - 1)}
            className="inline-flex items-center gap-1 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            {flagged && <Flag className="h-3 w-3 text-orange-600" aria-hidden />}
            Q{q.index}
          </button>
        ))}
      </div>
    </div>
  );
}
