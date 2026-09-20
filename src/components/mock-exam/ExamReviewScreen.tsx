import { Flag } from "lucide-react";
import { isQuestionAnswered } from "@/lib/mock-exam-session";
import type { ExamQuestion } from "@/lib/mock-exams";
import { PRACTICE_BODY } from "@/lib/practice-layout";

type Props = {
  questions: ExamQuestion[];
  answers: Record<string, boolean[]>;
  flagged: Set<string>;
  usesAnswerSheet?: boolean;
  onJump: (index: number) => void;
  onSubmit: () => void;
  onBack: () => void;
  locale?: "en" | "de";
};

export function ExamReviewScreen({
  questions,
  answers,
  flagged,
  usesAnswerSheet = true,
  onJump,
  onSubmit,
  onBack,
  locale = "en",
}: Props) {
  const de = locale === "de";
  const totalQuestions = questions.length;
  const totalStatements = totalQuestions * 5;
  const answeredQuestions = questions.filter((q) => isQuestionAnswered(answers[q.id]));
  const unansweredQuestions = questions.filter((q) => !isQuestionAnswered(answers[q.id]));
  const flaggedQuestions = questions.filter((q) => flagged.has(q.id));

  return (
    <div className={`${PRACTICE_BODY} flex-col py-10`}>
      <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
        {de ? "Prüfen vor dem Abgeben" : "Review before submission"}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {de
          ? "Offene und markierte Aufgaben noch einmal prüfen. "
          : "Check unanswered and flagged items. "}
        {usesAnswerSheet
          ? de
            ? "Beim Abgeben zählen nur die Markierungen auf dem Antwortbogen."
            : "Submission uses your Answer Sheet marks only."
          : de
            ? "Beim Abgeben zählen die Markierungen neben den Aussagen. Die richtigen Antworten erscheinen erst danach."
            : "Submission uses the marks you selected next to each statement. Correct answers are revealed after you submit."}
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <Stat label={de ? "Aufgaben gesamt" : "Total questions"} value={String(totalQuestions)} />
        <Stat label={de ? "Aussagen gesamt" : "Total statements"} value={String(totalStatements)} />
        <Stat
          label={de ? "Beantwortete Aufgaben" : "Answered questions"}
          value={String(answeredQuestions.length)}
          accent
        />
        <Stat
          label={de ? "Offene Aufgaben" : "Unanswered questions"}
          value={String(unansweredQuestions.length)}
          warn={unansweredQuestions.length > 0}
        />
        <Stat
          label={de ? "Markierte Aufgaben" : "Flagged questions"}
          value={String(flaggedQuestions.length)}
          className="sm:col-span-2"
        />
      </div>

      {unansweredQuestions.length > 0 && (
        <JumpList
          title={de ? "Offen" : "Unanswered"}
          items={unansweredQuestions}
          onJump={onJump}
          questionPrefix={de ? "A" : "Q"}
        />
      )}

      {flaggedQuestions.length > 0 && (
        <JumpList
          title={de ? "Zur Prüfung markiert" : "Flagged for review"}
          items={flaggedQuestions}
          onJump={onJump}
          flagged
          questionPrefix={de ? "A" : "Q"}
        />
      )}

      <div className="mt-10 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onBack}
          className="rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-all hover:bg-secondary"
        >
          {de ? "Weiter prüfen" : "Continue exam"}
        </button>
        <button
          type="button"
          onClick={onSubmit}
          className="rounded-md bg-caramel-deep px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
        >
          {de ? "Prüfung abgeben" : "Submit exam"}
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
          warn ? "text-orange-600 dark:text-orange-300" : accent ? "text-caramel-deep" : ""
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
  questionPrefix = "Q",
}: {
  title: string;
  items: ExamQuestion[];
  onJump: (index: number) => void;
  flagged?: boolean;
  questionPrefix?: string;
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
            {flagged && <Flag className="h-3 w-3 text-orange-600 dark:text-orange-300" aria-hidden />}
            {questionPrefix}
            {q.index}
          </button>
        ))}
      </div>
    </div>
  );
}
