import type { ReactNode, RefObject } from "react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "@/components/news/demos/DemoCursor";

/** Full-bleed practice stage used inside the How it works Course frame. */
export function CourseFrame({
  stageRef,
  scrollRef,
  cursorRef,
  clicking,
  fade,
  children,
  overlay,
}: {
  stageRef: RefObject<HTMLDivElement | null>;
  scrollRef: RefObject<HTMLDivElement | null>;
  cursorRef: RefObject<HTMLDivElement | null>;
  clicking: boolean;
  fade: boolean;
  children: ReactNode;
  overlay?: ReactNode;
}) {
  return (
    <div ref={stageRef} className="absolute inset-0 bg-paper">
      <div
        ref={scrollRef}
        className={cn(
          "news-uniq-scroll h-full overflow-y-auto overscroll-contain p-3 transition-opacity duration-500 sm:p-5",
          fade ? "opacity-0" : "opacity-100",
        )}
      >
        {children}
      </div>
      {overlay}
      <DemoCursor cursorRef={cursorRef} clicking={clicking} />
    </div>
  );
}
