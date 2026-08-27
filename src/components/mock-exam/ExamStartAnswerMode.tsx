import { cn } from "@/lib/utils";

type Props = {
  withAnswerSheet: boolean;
  onChange: (withAnswerSheet: boolean) => void;
};

export function ExamStartAnswerMode({ withAnswerSheet, onChange }: Props) {
  return (
    <div>
      <p className="text-xs font-medium text-muted-foreground">How do you want to answer?</p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <button
          type="button"
          aria-pressed={withAnswerSheet}
          onClick={() => onChange(true)}
          className={cn(
            "rounded-md border px-3 py-2.5 text-sm font-semibold transition-all",
            withAnswerSheet
              ? "border-foreground bg-foreground text-background"
              : "border-border bg-card hover:bg-secondary",
          )}
        >
          With answer sheet
        </button>
        <button
          type="button"
          aria-pressed={!withAnswerSheet}
          onClick={() => onChange(false)}
          className={cn(
            "rounded-md border px-3 py-2.5 text-sm font-semibold transition-all",
            !withAnswerSheet
              ? "border-foreground bg-foreground text-background"
              : "border-border bg-card hover:bg-secondary",
          )}
        >
          Without answer sheet
        </button>
      </div>
      <p className="mt-2 text-xs text-taupe">
        {withAnswerSheet
          ? "Mark True on the optical answer sheet, like the real exam."
          : "Mark True next to each statement. Answers stay hidden until you finish."}
      </p>
    </div>
  );
}
