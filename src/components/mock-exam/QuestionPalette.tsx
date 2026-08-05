import { useMemo } from "react";
import { Flag } from "lucide-react";
import { cn } from "@/lib/utils";
import { SUBJECT_META, type SubjectKey } from "@/config/scoring-config";
import type { ExamQuestion } from "@/lib/mock-exams";
import { isQuestionAnswered } from "@/lib/mock-exam-session";

export type PaletteState = "not-opened" | "visited" | "answered" | "flagged" | "current";

type Props = {
  questions: ExamQuestion[];
  currentIndex: number;
  answers: Record<string, boolean[]>;
  flagged: Set<string>;
  visited: Set<string>;
  onNavigate: (index: number) => void;
  compact?: boolean;
};

function stateFor(
  q: ExamQuestion,
  currentIndex: number,
  answers: Record<string, boolean[]>,
  flagged: Set<string>,
  visited: Set<string>,
): PaletteState {
  if (q.index - 1 === currentIndex) return "current";
  if (flagged.has(q.id)) return "flagged";
  if (isQuestionAnswered(answers[q.id])) return "answered";
  if (visited.has(q.id)) return "visited";
  return "not-opened";
}

const TILE: Record<PaletteState, string> = {
  "not-opened": "border-border bg-muted/40 text-muted-foreground",
  visited: "border-blue-500/40 bg-blue-500/15 text-blue-700 dark:text-blue-300",
  answered: "border-orange-500/50 bg-orange-500 text-white",
  flagged: "border-orange-600 bg-orange-500 text-white",
  current: "border-foreground bg-foreground text-background ring-2 ring-foreground/30 ring-offset-2 ring-offset-card",
};

export function QuestionPalette({
  questions,
  currentIndex,
  answers,
  flagged,
  visited,
  onNavigate,
  compact,
}: Props) {
  const groups = useMemo(() => {
    const order: SubjectKey[] = ["economics", "english", "math"];
    return order
      .map((subject) => ({
        subject,
        items: questions.filter((q) => q.subject === subject),
      }))
      .filter((g) => g.items.length > 0);
  }, [questions]);

  return (
    <div className={cn("space-y-3", compact && "space-y-2")}>
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-medium uppercase tracking-wider text-taupe">
        <Legend swatch="bg-muted border-border" label="Not opened" />
        <Legend swatch="bg-blue-500/20 border-blue-500/40" label="Visited" />
        <Legend swatch="bg-orange-500 border-orange-500" label="Answered" />
        <Legend swatch="bg-orange-500 border-orange-600" label="Flagged" flag />
        <Legend swatch="bg-foreground border-foreground" label="Current" />
      </div>

      {groups.map(({ subject, items }) => {
        const sm = SUBJECT_META[subject];
        return (
          <div key={subject}>
            <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-taupe">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: sm.color }}
                aria-hidden
              />
              {sm.label}
            </div>
            <div className="flex flex-wrap gap-1.5" role="list" aria-label={`${sm.label} questions`}>
              {items.map((item) => {
                const state = stateFor(item, currentIndex, answers, flagged, visited);
                const answered = isQuestionAnswered(answers[item.id]);
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="listitem"
                    aria-label={`Question ${item.index}, ${state.replace("-", " ")}${answered ? ", answered" : ""}`}
                    aria-current={state === "current" ? "true" : undefined}
                    onClick={() => onNavigate(item.index - 1)}
                    className={cn(
                      "relative flex h-8 w-8 items-center justify-center rounded-md border text-xs font-semibold transition-colors hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel-deep",
                      TILE[state],
                      compact && "h-7 w-7 text-[11px]",
                    )}
                  >
                    {item.index}
                    {(state === "flagged" || (flagged.has(item.id) && state === "current")) && (
                      <Flag
                        className="absolute -right-1 -top-1 h-3 w-3 text-red-700 fill-red-600 drop-shadow-[0_0_1.5px_rgba(255,255,255,0.95)]"
                        aria-hidden
                      />
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

function Legend({
  swatch,
  label,
  flag,
}: {
  swatch: string;
  label: string;
  flag?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-1">
      <span className={cn("relative inline-block h-2.5 w-2.5 rounded-sm border", swatch)}>
        {flag && (
          <Flag
            className="absolute -right-1 -top-1 h-2.5 w-2.5 text-red-700 fill-red-600 drop-shadow-[0_0_1px_white]"
            aria-hidden
          />
        )}
      </span>
      {label}
    </span>
  );
}
