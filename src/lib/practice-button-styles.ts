import { cn } from "@/lib/utils";

/** Primary submit on task cards (Check Answers / Submit). */
export const practiceSubmitButtonClass =
  "inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 disabled:opacity-50";

/** Secondary reset (Try again). */
export const practiceTryAgainButtonClass =
  "inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary";

/** Task-level explanation / solutions toggle — text only, no leading icon. */
export function practiceExplanationToggleClass(open: boolean) {
  return cn(
    "inline-flex items-center justify-center rounded-md border px-4 py-2.5 text-sm font-semibold transition-all",
    open
      ? "border-primary/40 bg-primary/10 text-primary"
      : "border-border bg-background text-foreground hover:bg-secondary",
  );
}

/** Per-statement inline “Explanation” expand chip. Chevron trails the label. */
export const practiceInlineExplanationButtonClass =
  "inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-foreground hover:bg-secondary";

/** Per-statement AI / textbook action — text only, no leading icon. */
export function practiceInlineAiButtonClass(active: boolean) {
  return cn(
    "inline-flex items-center justify-center rounded-md border px-2.5 py-1 text-[11px] font-semibold transition-colors",
    active
      ? "border-primary bg-primary text-primary-foreground"
      : "border-primary/60 bg-primary/10 text-primary hover:bg-primary/20",
  );
}

/** Passage locate / highlight helper — text only. */
export function practiceInlineLocateButtonClass(active: boolean) {
  return cn(
    "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-[11px] font-semibold transition-colors",
    active
      ? "border-foreground/30 bg-foreground text-background"
      : "border-border bg-background text-foreground hover:bg-secondary",
  );
}

/** Section labels in explanation panels — uppercase, no decorative icon. */
export const practicePanelSectionLabelClass =
  "text-[10px] font-bold uppercase tracking-widest text-primary";

export const practicePanelSubsectionLabelClass =
  "rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground";
