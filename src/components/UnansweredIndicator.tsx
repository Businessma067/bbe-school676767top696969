import { cn } from "@/lib/utils";

type ProgressIds = {
  passed: string[];
  revision: string[];
};

/** Unlocked tasks the user has not submitted yet (not passed, not revision). */
export function countUnansweredTasks(
  items: ReadonlyArray<{ id: string; locked?: boolean; placeholder?: boolean }>,
  progress: ProgressIds,
): number {
  let n = 0;
  for (const item of items) {
    if (item.placeholder || item.locked) continue;
    if (progress.passed.includes(item.id) || progress.revision.includes(item.id)) {
      continue;
    }
    n += 1;
  }
  return n;
}

/**
 * Compact sidebar cue for remaining free demo questions.
 * Hidden when count is 0.
 */
export function UnansweredIndicator({
  count,
  className,
  noun = "question",
}: {
  count: number;
  className?: string;
  noun?: string;
}) {
  if (count <= 0) return null;
  const label = `${count} unanswered ${count === 1 ? noun : `${noun}s`}`;
  return (
    <span
      className={cn(
        "inline-flex h-5 min-w-5 shrink-0 items-center justify-center rounded-md bg-amber-500/15 px-1.5 text-[10px] font-bold tabular-nums text-amber-800 dark:text-amber-300",
        className,
      )}
      title={label}
      aria-label={label}
    >
      {count}
    </span>
  );
}
