import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AnnotatablePassage } from "@/components/AnnotatablePassage";
import { CaseContextRich } from "@/components/CaseContextRich";
import { ExplanationProse } from "@/components/ExplanationProse";
import { ExplanationText } from "@/components/ExplanationText";
import { FlashcardMath } from "@/components/FlashcardMath";
import { scrubStatementHints } from "@/lib/case-context";
import type { ExamQuestion } from "@/lib/mock-exams";
import { cn } from "@/lib/utils";

function MathText({ text, className }: { text: string; className?: string }) {
  return <FlashcardMath text={text.replace(/\*\*/g, "")} className={className} />;
}

export function ExamQuestionBody({
  q,
  emphasized,
  showPassage = true,
}: {
  q: ExamQuestion;
  emphasized?: boolean;
  showPassage?: boolean;
}) {
  const isMath = q.subject === "math";

  return (
    <div className="space-y-4">
      {showPassage && q.passage ? (
        <div className="max-h-[min(28rem,55vh)] overflow-y-auto rounded-xl border border-border bg-secondary/20 p-4 sm:p-5">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-taupe">
            Passage
          </p>
          <AnnotatablePassage passage={q.passage} storageKey={q.id} className="text-sm" />
        </div>
      ) : null}

      {isMath ? (
        <div className={cn("text-sm leading-relaxed text-foreground", emphasized && "text-base")}>
          <p
            className={cn(
              emphasized && "font-display text-lg font-semibold sm:text-xl",
            )}
          >
            <MathText text={q.stem} />
          </p>
          {q.figure ? (
            <img
              src={q.figure}
              alt=""
              className="mx-auto mt-3 max-h-80 w-full max-w-lg rounded-xl border border-border bg-white object-contain p-2"
            />
          ) : null}
          {q.tablesMarkdown ? (
            <div className="mt-3 overflow-x-auto text-sm [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-border [&_td]:px-2 [&_td]:py-1 [&_th]:border [&_th]:border-border [&_th]:px-2 [&_th]:py-1">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{q.tablesMarkdown}</ReactMarkdown>
            </div>
          ) : null}
        </div>
      ) : (
        <CaseContextRich content={q.stem} emphasized={emphasized} className="text-foreground" />
      )}
    </div>
  );
}

export function ExamStatementText({
  q,
  text,
}: {
  q: ExamQuestion;
  text: string;
}) {
  if (q.subject === "math") {
    return <MathText text={text} />;
  }
  return <>{scrubStatementHints(text)}</>;
}

export function ExamExplanationText({
  q,
  text,
  className,
}: {
  q: ExamQuestion;
  text: string;
  className?: string;
}) {
  if (q.subject === "math") {
    return (
      <p className={cn("whitespace-pre-wrap leading-relaxed", className)}>
        <MathText text={text} />
      </p>
    );
  }
  if (q.subject === "english") {
    return <ExplanationProse text={text} className={className} />;
  }
  return <ExplanationText text={text} className={className} />;
}

export function ExamSolutionOverview({
  text,
  subject,
  className,
}: {
  text: string;
  subject: ExamQuestion["subject"];
  className?: string;
}) {
  if (!text.trim()) return null;
  if (subject === "math") {
    return (
      <div className={cn("rounded-lg border border-border bg-secondary/30 p-3 text-sm", className)}>
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-taupe">
          Overview
        </p>
        <MathText text={text} />
      </div>
    );
  }
  return (
    <div className={cn("rounded-lg border border-border bg-secondary/30 p-3 text-sm", className)}>
      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-taupe">
        Overview
      </p>
      <ExplanationProse text={text} />
    </div>
  );
}
