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
  lane = false,
  children,
  overlay,
}: {
  stageRef: RefObject<HTMLDivElement | null>;
  scrollRef: RefObject<HTMLDivElement | null>;
  cursorRef: RefObject<HTMLDivElement | null>;
  clicking: boolean;
  fade: boolean;
  /** Keep the task in the lane left of the explanation sheet. */
  lane?: boolean;
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
          lane && "sm:pr-[58%]",
        )}
      >
        {children}
      </div>
      {overlay}
      <DemoCursor cursorRef={cursorRef} clicking={clicking} />
    </div>
  );
}
