import { AnnotatablePassage } from "@/components/AnnotatablePassage";
import { CaseContextRich } from "@/components/CaseContextRich";
import { ExplanationProse } from "@/components/ExplanationProse";
import { FlashcardMath } from "@/components/FlashcardMath";
import { MathMarkdownTable } from "@/components/mock-exam/MathMarkdownTable";
import { scrubStatementHints } from "@/lib/case-context";
import { cleanExplanation } from "@/lib/clean-explanation";
import type { ExamQuestion } from "@/lib/mock-exams";
import { ZoomableImage } from "@/components/ZoomableImage";
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
          <AnnotatablePassage passage={q.passage} storageKey={q.id} className="text-sm" />
        </div>
      ) : null}

      {isMath ? (
        <div
          className={cn(
            "min-w-0 space-y-3.5 text-sm leading-relaxed text-foreground [overflow-wrap:anywhere]",
            emphasized && "text-base",
          )}
        >
          <div
            className={cn(
              "min-w-0 space-y-3.5 overflow-x-auto overflow-y-visible",
              emphasized && "font-display text-lg font-semibold sm:text-xl",
            )}
          >
            {q.stem
              .split(/\n\n+/)
              .map((para) => para.trim())
              .filter(Boolean)
              .map((para, i) => (
                <div key={i} className="min-w-0 overflow-x-auto overflow-y-visible">
                  <MathText text={para} />
                </div>
              ))}
          </div>
          {q.figure ? (
            <ZoomableImage
              src={q.figure}
              alt="Question figure"
              wrapperClassName="mx-auto w-full max-w-lg"
              className="max-h-80 w-full rounded-xl border border-border bg-card object-contain p-2"
            />
          ) : null}
          {q.tablesMarkdown ? <MathMarkdownTable markdown={q.tablesMarkdown} /> : null}
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
  // Math keeps **Part / **A.** markers for ExplanationProse structure + truth tables.
  const cleaned = q.subject === "math" ? text : cleanExplanation(text);
  return <ExplanationProse text={cleaned} className={className} />;
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
  void subject;
  return (
    <div className={cn("rounded-lg border border-border bg-secondary/30 p-4 text-sm sm:p-5", className)}>
      <ExplanationProse text={text} />
    </div>
  );
}
