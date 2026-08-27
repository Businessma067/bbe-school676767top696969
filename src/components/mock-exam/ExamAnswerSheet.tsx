import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { isQuestionAnswered } from "@/lib/mock-exam-session";

const MARK = "#EA6A2C";

type Props = {
  /** 1-based question numbers → five statement marks */
  marksByNumber: Record<number, boolean[]>;
  questionCount: number;
  currentQuestion: number;
  flaggedNumbers: Set<number>;
  onToggle: (questionNumber: number, statementIndex: number) => void;
  onNavigate: (questionNumber: number) => void;
  className?: string;
};

/**
 * Interactive optical answer sheet for mock exams started with the answer-sheet option.
 * Visual language shared with AnswerSheetPreview (marketing demo).
 */
export function ExamAnswerSheet({
  marksByNumber,
  questionCount,
  currentQuestion,
  flaggedNumbers,
  onToggle,
  onNavigate,
  className,
}: Props) {
  const mid = Math.ceil(questionCount / 2);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-white text-black shadow-sm",
        className,
      )}
      style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
    >
      <div className="border-b border-gray-200 bg-gray-50 px-3 py-2">
        <div className="text-[11px] font-bold leading-tight sm:text-xs">
          Vienna University of Economics and Business
        </div>
        <div className="text-[10px] font-semibold text-gray-700">BBE Entrance Exam — Answer Sheet</div>
        <p className="mt-0.5 text-[9px] text-gray-500">
          Mark ✕ for True. Click a number to jump. Answers update instantly.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-0 p-2.5 text-[9px] leading-tight sm:p-3 sm:text-[10px]">
        <AnswerColumn
          start={1}
          end={mid}
          marksByNumber={marksByNumber}
          currentQuestion={currentQuestion}
          flaggedNumbers={flaggedNumbers}
          onToggle={onToggle}
          onNavigate={onNavigate}
        />
        <AnswerColumn
          start={mid + 1}
          end={questionCount}
          marksByNumber={marksByNumber}
          currentQuestion={currentQuestion}
          flaggedNumbers={flaggedNumbers}
          onToggle={onToggle}
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
}

function AnswerColumn({
  start,
  end,
  marksByNumber,
  currentQuestion,
  flaggedNumbers,
  onToggle,
  onNavigate,
}: {
  start: number;
  end: number;
  marksByNumber: Record<number, boolean[]>;
  currentQuestion: number;
  flaggedNumbers: Set<number>;
  onToggle: (q: number, i: number) => void;
  onNavigate: (q: number) => void;
}) {
  const rows = useMemo(
    () => Array.from({ length: Math.max(0, end - start + 1) }, (_, i) => start + i),
    [start, end],
  );
  const cols = ["a", "b", "c", "d", "e"];

  return (
    <div className="flex flex-col gap-0.5">
      <div className="ml-5 grid grid-cols-5 gap-0.5 text-center text-[8px] font-medium text-gray-500">
        {cols.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
      {rows.map((r) => {
        const marks = marksByNumber[r] ?? [false, false, false, false, false];
        const isCurrent = r === currentQuestion;
        const answered = isQuestionAnswered(marks);
        const flagged = flaggedNumbers.has(r);
        return (
          <div
            key={r}
            className={cn(
              "flex items-center gap-1 rounded-sm px-0.5 py-0.5",
              isCurrent && "bg-orange-50 ring-1 ring-[#EA6A2C]/50",
            )}
          >
            <button
              type="button"
              onClick={() => onNavigate(r)}
              className={cn(
                "w-4 shrink-0 text-right text-[8px] font-bold tabular-nums transition-colors hover:text-[#EA6A2C]",
                isCurrent && "text-[#EA6A2C]",
                answered && !isCurrent && "text-orange-600",
                flagged && "underline decoration-[#EA6A2C]",
              )}
              aria-label={`Go to question ${r}`}
              aria-current={isCurrent ? "true" : undefined}
            >
              {r}
            </button>
            <div className="grid flex-1 grid-cols-5 gap-0.5">
              {cols.map((_, ci) => {
                const filled = marks[ci];
                return (
                  <button
                    key={ci}
                    type="button"
                    onClick={() => onToggle(r, ci)}
                    aria-label={`Question ${r} statement ${cols[ci]}${filled ? ", marked true" : ""}`}
                    aria-pressed={filled}
                    className={cn(
                      "relative grid aspect-[5/3] min-h-[14px] place-items-center rounded-[2px] border border-gray-400 bg-white transition-colors hover:border-[#EA6A2C] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EA6A2C]",
                      filled && "border-[#EA6A2C]/70 bg-orange-50",
                    )}
                  >
                    {filled && (
                      <span
                        className="text-[10px] font-black leading-none"
                        style={{ color: MARK }}
                        aria-hidden
                      >
                        ✕
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
