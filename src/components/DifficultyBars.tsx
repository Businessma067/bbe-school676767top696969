import { cn } from "@/lib/utils";

function parseDifficulty(level: string): { n: number; max: number } {
  const [rawN, rawMax] = level.split("/");
  const max = Math.max(1, Number(rawMax) || 5);
  const n = Math.max(0, Math.min(Number(rawN) || 0, max));
  return { n, max };
}

/** Green → red heat for difficulty 1…5. */
const DIFFICULTY_BAR_COLORS = [
  "bg-emerald-500",
  "bg-lime-500",
  "bg-amber-400",
  "bg-orange-500",
  "bg-red-500",
] as const;

/** Cell-signal bars for chapter sidebar task lists and task headers. */
export function DifficultyBars({
  level,
  className,
}: {
  level: string;
  className?: string;
}) {
  const { n, max } = parseDifficulty(level);
  const color = DIFFICULTY_BAR_COLORS[Math.max(0, n - 1)] ?? DIFFICULTY_BAR_COLORS[0];
  const heights = ["h-[3px]", "h-[5px]", "h-[7px]", "h-[9px]", "h-[11px]"];
  return (
    <span
      className={cn("inline-flex h-[11px] shrink-0 items-end gap-[2px]", className)}
      title={`Difficulty ${level}`}
      aria-label={`Difficulty ${level}`}
    >
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={cn(
            "w-[3px] rounded-[1px]",
            heights[i] ?? "h-[11px]",
            i < n ? color : "bg-muted-foreground/20",
          )}
        />
      ))}
    </span>
  );
}
