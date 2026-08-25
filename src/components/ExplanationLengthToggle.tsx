import { cn } from "@/lib/utils";
import { useExplanationLength, type ExplanationLength } from "@/hooks/use-explanation-length";

const OPTIONS: Array<{ value: ExplanationLength; label: string; hint: string }> = [
  { value: "compact", label: "Short", hint: "Compressed answers" },
  { value: "full", label: "Full", hint: "Tutorial write-up" },
];

type Props = {
  className?: string;
  /** Smaller control for tight headers. */
  size?: "header" | "panel";
  showLabel?: boolean;
};

/** Always-visible Short / Full switch — default Short, easy to find on a phone. */
export function ExplanationLengthToggle({ className, size = "header", showLabel = true }: Props) {
  const [length, setLength] = useExplanationLength();
  const compact = size === "header";

  return (
    <div
      className={cn("flex items-center gap-1.5", compact ? "min-w-0" : "flex-wrap", className)}
      role="group"
      aria-label="Solution length"
    >
      {showLabel && (
        <span
          className={cn(
            "shrink-0 font-bold uppercase tracking-widest text-muted-foreground",
            compact ? "hidden text-[10px] sm:inline" : "text-[10px]",
          )}
        >
          Answers
        </span>
      )}
      <div className="inline-flex rounded-lg border border-border bg-background p-0.5">
        {OPTIONS.map((opt) => {
          const on = length === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              aria-pressed={on}
              title={opt.hint}
              onClick={() => setLength(opt.value)}
              className={cn(
                "rounded-md font-bold transition-colors",
                compact
                  ? "min-h-8 min-w-[3.25rem] px-2.5 text-[11px] sm:min-h-9 sm:px-3 sm:text-xs"
                  : "min-h-10 min-w-[4.5rem] px-3.5 text-sm",
                on
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
