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
  bleed = false,
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
  /** Edge-to-edge page, the same shell as the live exam. */
  bleed?: boolean;
  children: ReactNode;
  overlay?: ReactNode;
}) {
  return (
    <div
      ref={stageRef}
      className={cn(
        "absolute inset-0",
        bleed ? "bg-background [container-name:exam-stage] [container-type:size] [transform:translateZ(0)]" : "bg-paper",
      )}
    >
      <div
        ref={scrollRef}
        className={cn(
          "news-uniq-scroll h-full overflow-y-auto overscroll-contain transition-opacity duration-500",
          bleed ? "" : "px-3 pb-24 pt-3 sm:px-5 sm:pb-24 sm:pt-5",
          fade ? "opacity-0" : "opacity-100",
          lane && !bleed && "sm:pr-[58%]",
        )}
      >
        {children}
      </div>
      {overlay}
      <DemoCursor cursorRef={cursorRef} clicking={clicking} hidden={fade} />
    </div>
  );
}
