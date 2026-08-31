import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Height animation via grid-template-rows.
 * Closed panels unmount children so large task lists are not reconciled every click.
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
      <div className={cn(!open && "pointer-events-none")}>{open ? children : null}</div>
    </div>
  );
}
