import { Languages, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type TaskContentLang = "de" | "en";

type TaskContentLangToggleProps = {
  lang: TaskContentLang;
  onChange: (lang: TaskContentLang) => void;
  loading?: boolean;
  className?: string;
  /** Compact label for the control cluster. */
  label?: string;
};

/**
 * DE | EN content switch for WiSo practice (task stem + explanations).
 * German remains the default source; English is either the BBE bank (math)
 * or an on-demand translation (economics / texts).
 */
export function TaskContentLangToggle({
  lang,
  onChange,
  loading = false,
  className,
  label = "Text",
}: TaskContentLangToggleProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-1 rounded-md border border-border bg-card p-0.5 shadow-sm",
        className,
      )}
      role="group"
      aria-label="Task language"
    >
      <span className="hidden items-center gap-1 px-1.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground sm:inline-flex">
        {loading ? (
          <Loader2 className="h-3 w-3 animate-spin" aria-hidden />
        ) : (
          <Languages className="h-3 w-3" aria-hidden />
        )}
        {label}
      </span>
      <button
        type="button"
        disabled={loading}
        onClick={() => onChange("de")}
        className={cn(
          "rounded px-2 py-1 text-xs font-semibold transition-colors disabled:opacity-60",
          lang === "de"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground",
        )}
        aria-pressed={lang === "de"}
      >
        DE
      </button>
      <button
        type="button"
        disabled={loading}
        onClick={() => onChange("en")}
        className={cn(
          "rounded px-2 py-1 text-xs font-semibold transition-colors disabled:opacity-60",
          lang === "en"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground",
        )}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
