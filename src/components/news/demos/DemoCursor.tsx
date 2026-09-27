import type { RefObject } from "react";
import { cn } from "@/lib/utils";

/** Pointer rendered via DOM transform (written by useDemoPlayer — no React re-renders). */
export function DemoCursor({
  cursorRef,
  clicking,
}: {
  cursorRef: RefObject<HTMLDivElement | null>;
  clicking: boolean;
}) {
  return (
    <div
      ref={cursorRef}
      className="pointer-events-none absolute left-0 top-0 z-30 will-change-transform"
      style={{ transform: "translate3d(36px, 36px, 0)" }}
      aria-hidden
    >
      <div className={cn("transition-transform duration-150 ease-out", clicking ? "scale-90" : "scale-100")}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 3l14 8.5-6.2 1.3L9.6 20 5 3z"
            fill="white"
            stroke="black"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
        {clicking ? (
          <span className="absolute left-0 top-0 h-6 w-6 animate-ping rounded-full bg-primary/40" />
        ) : null}
      </div>
    </div>
  );
}
