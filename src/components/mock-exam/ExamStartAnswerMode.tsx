import { cn } from "@/lib/utils";

type Props = {
  withAnswerSheet: boolean;
  onChange: (withAnswerSheet: boolean) => void;
  /** WiSo builder / WiSo mocks use German copy. */
  locale?: "en" | "de";
};

export function ExamStartAnswerMode({ withAnswerSheet, onChange, locale = "en" }: Props) {
  const de = locale === "de";
  return (
    <div>
      <p className="text-xs font-medium text-muted-foreground">
        {de ? "Wie möchtest du antworten?" : "How do you want to answer?"}
      </p>
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
          {de ? "Mit Antwortbogen" : "With answer sheet"}
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
          {de ? "Ohne Antwortbogen" : "Without answer sheet"}
        </button>
      </div>
      <p className="mt-2 text-xs text-taupe">
        {withAnswerSheet
          ? de
            ? "Markiere „richtig“ auf dem optischen Antwortbogen — wie in der echten WiSo-Prüfung."
            : "Mark True on the optical answer sheet, like the real exam."
          : de
            ? "Markiere „richtig“ direkt neben jeder Aussage. Antworten bleiben bis zum Ende verborgen."
            : "Mark True next to each statement. Answers stay hidden until you finish."}
      </p>
    </div>
  );
}
