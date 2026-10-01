import { useRef, type ReactNode, type RefObject } from "react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "@/components/news/demos/DemoCursor";
import { useFillFrame } from "./useFillFrame";

/** Full-bleed practice stage used inside the How it works Course frame. */
export function CourseFrame({
  stageRef,
  scrollRef,
  cursorRef,
  clicking,
  fade,
  lane = false,
  bleed = false,
  fill = true,
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
  /** Scale a short stage up to the frame. Off when the demo's own clicks must stay put. */
  fill?: boolean;
  children: ReactNode;
  overlay?: ReactNode;
}) {
  const innerRef = useRef<HTMLDivElement | null>(null);
  useFillFrame(fill && !bleed, scrollRef, innerRef);

  return (
    <div
      ref={stageRef}
      className={cn(
        "absolute inset-0",
        bleed
          ? "bg-background [container-name:exam-stage] [container-type:size] [transform:translateZ(0)]"
          : "bg-paper",
      )}
    >
      <div
        ref={scrollRef}
        className={cn(
          "news-uniq-scroll h-full overflow-x-hidden overflow-y-auto overscroll-contain transition-opacity duration-500",
          bleed ? "" : "px-3 py-3 sm:px-4 sm:py-4",
          fade ? "opacity-0" : "opacity-100",
          lane && !bleed && "sm:pr-[58%]",
        )}
      >
        {bleed ? (
          children
        ) : (
          <div ref={innerRef} className="origin-top-left">
            {children}
          </div>
        )}
      </div>
      {overlay}
      <DemoCursor cursorRef={cursorRef} clicking={clicking} hidden={fade} />
    </div>
  );
}
