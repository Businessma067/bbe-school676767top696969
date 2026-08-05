import { cn } from "@/lib/utils";

type Props = {
  value: string;
  onChange: (value: string) => void;
  questionLabel: string;
  className?: string;
};

/** Typed notes panel — independent from handwritten annotations. */
export function ExamNotesPanel({ value, onChange, questionLabel, className }: Props) {
  return (
    <div className={cn("flex min-h-0 flex-col", className)}>
      <div className="mb-2 flex items-baseline justify-between gap-2">
        <h3 className="text-[10px] font-semibold uppercase tracking-widest text-taupe">Notes</h3>
        <span className="truncate text-[10px] text-muted-foreground">{questionLabel}</span>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paragraphs, bullets, quick calculations…"
        spellCheck
        className="min-h-[140px] flex-1 resize-y rounded-xl border border-border bg-background px-3 py-2.5 text-sm leading-relaxed outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-caramel-deep focus:ring-1 focus:ring-caramel-deep/30"
        aria-label={`Notes for ${questionLabel}`}
      />
    </div>
  );
}
