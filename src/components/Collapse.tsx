import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Height animation driven by grid-template-rows, so the open state resolves to the
 * real content height instead of a guessed max-height.
 */
export function Collapse({
  open,
  className,
  children,
}: {
  open: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("collapse-grid", open && "is-open", className)} aria-hidden={!open}>
      <div className={cn(!open && "pointer-events-none")}>{children}</div>
    </div>
  );
}
