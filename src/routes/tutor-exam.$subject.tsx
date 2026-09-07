import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { FlashcardMath } from "@/components/FlashcardMath";
import {
  countCards,
  getFlashcardSubject,
} from "@/data/flashcards";
import {
  buildTutorExam,
  pickLine,
  TUTOR_CORRECT,
  TUTOR_EXAM_SIZE,
  TUTOR_GREETINGS,
  TUTOR_WRONG,
  type TutorExamQuestion,
} from "@/lib/tutor-exam";
import { Bot, Check, RotateCcw, Shuffle, X } from "lucide-react";

export const Route = createFileRoute("/tutor-exam/$subject")({
  beforeLoad: ({ params }) => {
    const subject = getFlashcardSubject(params.subject);
    if (!subject || subject.comingSoon) {
      throw redirect({ to: "/tutor-exam" });
    }
  },
  head: ({ params }) => {
    const subject = getFlashcardSubject(params.subject);
    const title = subject
      ? `${subject.title} Tutor Exam — BBE School`
      : "Tutor Exam — BBE School";
    return {
      links: [{ rel: "canonical", href: `https://bbe-school.com/tutor-exam/${params.subject}` }],
      meta: [
        { title },
        {
          name: "description",
          content:
            subject?.description ??
            "Random theoretical exam with a tutor robot for the WU entrance exam.",
        },
      ],
    };
  },
  component: TutorExamSubjectPage,
});

type AnswerState = {
  choiceId: string;
  correct: boolean;
  tutorLine: string;
};

function TutorExamSubjectPage() {
  const { subject: subjectId } = Route.useParams();
  const subject = getFlashcardSubject(subjectId)!;
  const total = countCards(subject.sections);

  const [sectionId, setSectionId] = useState<string | "all">(() =>
    subjectId === "english" ? (subject.sections[0]?.id ?? "all") : "all",
  );
  const [examNo, setExamNo] = useState(1);
  const [questions, setQuestions] = useState<TutorExamQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState<AnswerState | null>(null);
  const [greeting, setGreeting] = useState(() => pickLine(TUTOR_GREETINGS));
  const [finished, setFinished] = useState(false);

  const startExam = useCallback(
    (nextSection: string | "all", nextExam?: number) => {
      const qs = buildTutorExam(subject.sections, nextSection, TUTOR_EXAM_SIZE);
      setQuestions(qs);
      setIndex(0);
      setScore(0);
      setAnswer(null);
      setFinished(false);
      setGreeting(pickLine(TUTOR_GREETINGS));
      if (nextExam != null) setExamNo(nextExam);
    },
    [subject.sections],
  );

  useEffect(() => {
    startExam(sectionId, 1);
  }, [sectionId, startExam]);

  const current = questions[index] ?? null;
  const progressLabel =
    questions.length === 0
      ? "0 / 0"
      : `${Math.min(index + (finished ? 0 : 1), questions.length)} / ${questions.length}`;

  const onPick = (choiceId: string) => {
    if (!current || answer) return;
    const correct = choiceId === current.correctChoiceId;
    if (correct) setScore((s) => s + 1);
    setAnswer({
      choiceId,
      correct,
      tutorLine: pickLine(correct ? TUTOR_CORRECT : TUTOR_WRONG),
    });
  };

  const onNext = () => {
    if (!answer) return;
    if (index + 1 >= questions.length) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setAnswer(null);
  };

  const pct =
    questions.length === 0
      ? 0
      : Math.round((score / questions.length) * 100);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-7xl"
        actions={
          <div className="flex items-center gap-2">
            <Link
              to="/tutor-exam"
              className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
            >
              ← Subjects
            </Link>
            <Link
              to="/dashboard"
              className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
            >
              Dashboard
            </Link>
          </div>
        }
      />

      <main className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-taupe">
                <Bot className="h-3.5 w-3.5 text-caramel-deep" />
                Tutor Exam · {subject.title}
              </div>
              <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
                Theory exam with Tutor Bot
              </h1>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                Every start draws a fresh random set from {total} concepts.
                Modes mix “what does it mean?” and “which term is this?”.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => startExam(sectionId, examNo)}
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold hover:bg-secondary"
              >
                <Shuffle className="h-3.5 w-3.5" />
                Reshuffle
              </button>
              <button
                type="button"
                onClick={() => startExam(sectionId, examNo + 1)}
                className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-semibold text-white"
                style={{ backgroundColor: subject.accent }}
              >
                <RotateCcw className="h-3.5 w-3.5" />
                New exam
              </button>
            </div>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            <SectionChip
              active={sectionId === "all"}
              label="All topics"
              accent={subject.accent}
              onClick={() => setSectionId("all")}
            />
            {subject.sections.map((s) => (
              <SectionChip
                key={s.id}
                active={sectionId === s.id}
                label={s.title}
                accent={subject.accent}
                onClick={() => setSectionId(s.id)}
              />
            ))}
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full border border-border bg-card px-2.5 py-1 font-semibold text-foreground">
              Exam {examNo}
            </span>
            <span>Question {progressLabel}</span>
            <span>
              Score {score}
              {finished || answer ? ` · ${pct}%` : ""}
            </span>
          </div>

          {questions.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-10 text-center text-sm text-muted-foreground">
              No concepts in this topic yet.
            </div>
          ) : finished ? (
            <ResultsPanel
              accent={subject.accent}
              score={score}
              total={questions.length}
              pct={pct}
              onAgain={() => startExam(sectionId, examNo + 1)}
            />
          ) : current ? (
            <ExamCard
              accent={subject.accent}
              greeting={index === 0 && !answer ? greeting : null}
              question={current}
              questionNo={index + 1}
              total={questions.length}
              answer={answer}
              onPick={onPick}
              onNext={onNext}
              isLast={index + 1 >= questions.length}
            />
          ) : null}
        </div>
      </main>
    </div>
  );
}

function SectionChip({
  active,
  label,
  accent,
  onClick,
}: {
  active: boolean;
  label: string;
  accent: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "rounded-full border px-3 py-1.5 text-left text-[11px] font-semibold transition-colors " +
        (active
          ? "border-transparent text-white"
          : "border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground")
      }
      style={active ? { backgroundColor: accent } : undefined}
    >
      {label}
    </button>
  );
}

function TutorFace({ mood }: { mood: "idle" | "happy" | "sad" }) {
  return (
    <div
      className={
        "relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border shadow-sm " +
        (mood === "happy"
          ? "border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/50"
          : mood === "sad"
            ? "border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950/40"
            : "border-border bg-card")
      }
      aria-hidden
    >
      <svg viewBox="0 0 32 32" className="h-9 w-9 text-foreground/80">
        <rect x="5" y="9" width="22" height="16" rx="5" fill="currentColor" opacity="0.12" />
        <rect
          x="5"
          y="9"
          width="22"
          height="16"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="12" cy="16" r="1.6" fill="currentColor" />
        <circle cx="20" cy="16" r="1.6" fill="currentColor" />
        {mood === "happy" ? (
          <path
            d="M12.5 21.5c1.2 1.4 5.8 1.4 7 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        ) : mood === "sad" ? (
          <path
            d="M12.5 22.5c1.2-1.2 5.8-1.2 7 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M13 21.5h6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        )}
        <circle cx="16" cy="5.5" r="1.4" fill="currentColor" opacity="0.75" />
        <line
          x1="16"
          y1="7"
          x2="16"
          y2="9"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    </div>
  );
}

function ExamCard({
  accent,
  greeting,
  question,
  questionNo,
  total,
  answer,
  onPick,
  onNext,
  isLast,
}: {
  accent: string;
  greeting: string | null;
  question: TutorExamQuestion;
  questionNo: number;
  total: number;
  answer: AnswerState | null;
  onPick: (id: string) => void;
  onNext: () => void;
  isLast: boolean;
}) {
  const mood: "idle" | "happy" | "sad" = !answer
    ? "idle"
    : answer.correct
      ? "happy"
      : "sad";

  const bubbleText = answer
    ? answer.tutorLine
    : greeting ??
      (question.mode === "define"
        ? "Define the concept. Pick the best meaning."
        : "Read the meaning. Pick the matching concept.");

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="relative h-1.5 w-full bg-border/60">
        <div
          className="absolute inset-y-0 left-0 transition-all duration-300"
          style={{
            width: `${(questionNo / total) * 100}%`,
            backgroundColor: accent,
          }}
        />
      </div>

      <div className="flex gap-3 border-b border-border p-4 sm:p-5">
        <TutorFace mood={mood} />
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
            Tutor Bot · Q{questionNo}
          </p>
          <div className="mt-1.5 rounded-2xl rounded-tl-md border border-border bg-secondary/50 px-3.5 py-2.5 text-sm leading-snug text-foreground">
            {bubbleText}
          </div>
        </div>
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
            {question.prompt}
          </p>
          <div className="mt-2 rounded-xl border border-dashed border-border bg-background/80 px-4 py-3">
            <FlashcardMath
              text={question.stem}
              className={
                "text-base leading-snug " +
                (question.mode === "define" ? "font-semibold" : "text-[15px]")
              }
            />
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">
            {question.sectionTitle}
          </p>
        </div>

        <ul className="space-y-2">
          {question.choices.map((c, i) => {
            const letter = String.fromCharCode(65 + i);
            const picked = answer?.choiceId === c.id;
            const isCorrect = c.id === question.correctChoiceId;
            const showCorrect = answer != null && isCorrect;
            const showWrong = answer != null && picked && !isCorrect;

            return (
              <li key={c.id}>
                <button
                  type="button"
                  disabled={answer != null}
                  onClick={() => onPick(c.id)}
                  className={
                    "flex w-full items-start gap-3 rounded-xl border px-3.5 py-3 text-left text-sm transition-all " +
                    (showCorrect
                      ? "border-emerald-300 bg-emerald-50/90 dark:border-emerald-800 dark:bg-emerald-950/50"
                      : showWrong
                        ? "border-red-400 bg-red-50 dark:border-red-700 dark:bg-red-950/40"
                        : answer
                          ? "border-border bg-card opacity-60"
                          : "border-border bg-card hover:border-caramel/40 hover:bg-secondary/60")
                  }
                >
                  <span
                    className={
                      "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold " +
                      (showCorrect
                        ? "border-emerald-500 bg-emerald-500 text-white"
                        : showWrong
                          ? "border-red-400 bg-red-500 text-white"
                          : "border-border bg-background text-muted-foreground")
                    }
                  >
                    {showCorrect ? (
                      <Check className="h-3.5 w-3.5" />
                    ) : showWrong ? (
                      <X className="h-3.5 w-3.5" />
                    ) : (
                      letter
                    )}
                  </span>
                  <FlashcardMath
                    text={c.label}
                    className="min-w-0 flex-1 leading-snug"
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {answer && (
          <div
            className={
              "rounded-xl border px-4 py-3 text-sm " +
              (answer.correct
                ? "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/30"
                : "border-border bg-secondary/40")
            }
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
              Reveal
            </p>
            <p className="mt-1 font-semibold">
              <FlashcardMath text={question.revealTerm} />
            </p>
            <p className="mt-1 text-[13px] text-muted-foreground">
              <FlashcardMath text={question.revealExplanation} />
            </p>
            <button
              type="button"
              onClick={onNext}
              className="mt-3 inline-flex items-center rounded-md px-4 py-2 text-xs font-semibold text-white"
              style={{ backgroundColor: accent }}
            >
              {isLast ? "See results →" : "Next question →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ResultsPanel({
  accent,
  score,
  total,
  pct,
  onAgain,
}: {
  accent: string;
  score: number;
  total: number;
  pct: number;
  onAgain: () => void;
}) {
  const line =
    pct >= 80
      ? "Strong theory pass. Want another random set?"
      : pct >= 50
        ? "Solid mid-range. Shuffle again and keep drilling."
        : "Rough round — another random exam will hit different cards.";

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="flex gap-3">
        <TutorFace mood={pct >= 50 ? "happy" : "sad"} />
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
            Tutor Bot · Exam complete
          </p>
          <div className="mt-1.5 rounded-2xl rounded-tl-md border border-border bg-secondary/50 px-3.5 py-2.5 text-sm">
            {line}
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="font-display text-4xl font-bold tracking-tight">
          {score}/{total}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{pct}% correct</p>
        <button
          type="button"
          onClick={onAgain}
          className="mt-5 inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 text-sm font-semibold text-white"
          style={{ backgroundColor: accent }}
        >
          <Shuffle className="h-4 w-4" />
          New random exam →
        </button>
      </div>
    </div>
  );
}
