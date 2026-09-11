import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { toggleTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => toggleTheme()}
      aria-label={t("Toggle color theme")}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring",
        className,
      )}
    >
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
      <Moon className="h-4 w-4 dark:hidden" aria-hidden="true" />
    </button>
  );
}
