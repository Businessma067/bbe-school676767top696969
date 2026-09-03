import { cn } from "@/lib/utils";

type Milestone = {
  title: string;
  label: string;
  icon: "demo" | "lite" | "full" | "exam";
  youAreHere?: boolean;
  destination?: boolean;
};

const MILESTONES: Milestone[] = [
  {
    title: "Free Demo",
    label: "100+ tasks, 1 mock exam, all 3 subjects",
    icon: "demo",
    youAreHere: true,
  },
  {
    title: "Build the Fundamentals",
    label: "3000+ questions, self-paced",
    icon: "lite",
  },
  {
    title: "Full Simulation",
    label: "Interactive modes, customized mocks, and timed exam practice",
    icon: "full",
  },
  {
    title: "Exam Day",
    label: "2027 BBE, WU Vienna",
    icon: "exam",
    destination: true,
  },
];

function MilestoneIcon({
  type,
  className,
}: {
  type: Milestone["icon"];
  className?: string;
}) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden fill="none">
      {type === "demo" && (
        <>
          <rect x="6.5" y="5.5" width="13" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M9.5 10h7M9.5 13.5h7M9.5 17h4.5"
            stroke="currentColor"
            strokeWidth="1.45"
            strokeLinecap="round"
          />
          <circle cx="21.5" cy="21.5" r="5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M25 25l2.8 2.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </>
      )}
      {type === "lite" && (
        <>
          <rect x="5" y="11" width="14" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.55" />
          <rect
            x="10"
            y="6"
            width="14"
            height="15"
            rx="1.5"
            className="fill-[color-mix(in_oklab,var(--ivory)_92%,white)]"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M13.2 12.2l2 2 4-4.2"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.2 18l2 2 4-4.2"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {type === "full" && (
        <>
          <rect x="4.5" y="13" width="12" height="14" rx="1.4" stroke="currentColor" strokeWidth="1.4" />
          <rect x="8.5" y="9" width="12" height="14" rx="1.4" stroke="currentColor" strokeWidth="1.45" />
          <rect
            x="12.5"
            y="4.5"
            width="12"
            height="14"
            rx="1.4"
            className="fill-[color-mix(in_oklab,var(--ivory)_92%,white)]"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="18.5" cy="11.5" r="3" stroke="currentColor" strokeWidth="1.45" />
          <path
            d="M16.6 14c-.55 1.35-1.35 2.35-2.15 3M20.4 14c.55 1.35 1.35 2.35 2.15 3"
            stroke="currentColor"
            strokeWidth="1.45"
            strokeLinecap="round"
          />
        </>
      )}
      {type === "exam" && (
        <>
          <path d="M11 25.5V7.5" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" />
          <path
            d="M11.2 7.5h11.3l-2.6 3.5 2.6 3.5H11.2V7.5z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

function NodeCircle({
  milestone,
  index,
  size = "md",
}: {
  milestone: Milestone;
  index: number;
  size?: "sm" | "md" | "lg";
}) {
  const dim =
    size === "lg"
      ? "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]"
      : size === "sm"
        ? "h-12 w-12"
        : "h-14 w-14 sm:h-16 sm:w-16";
  const iconDim =
    size === "lg" ? "h-8 w-8 sm:h-9 sm:w-9" : size === "sm" ? "h-6 w-6" : "h-7 w-7 sm:h-8 sm:w-8";

  return (
    <div
      className={cn(
        "prep-roadmap-node relative grid place-items-center rounded-full",
        dim,
        milestone.destination
          ? "bg-[var(--exam-red)] text-white shadow-[0_8px_20px_-8px_color-mix(in_oklab,var(--exam-red)_55%,transparent)]"
          : "border-[1.5px] border-foreground/70 bg-[color-mix(in_oklab,var(--ivory)_88%,white)] text-foreground",
        milestone.youAreHere && "border-[var(--exam-red)]",
      )}
      style={{ animationDelay: `${0.22 + index * 0.22}s` }}
    >
      {milestone.youAreHere && (
        <>
          <span
            className="prep-roadmap-here-ring pointer-events-none absolute inset-0 rounded-full border border-[var(--exam-red)]"
            aria-hidden
          />
          <span
            className="prep-roadmap-here-ring prep-roadmap-here-ring-2 pointer-events-none absolute inset-0 rounded-full border border-[var(--exam-red)]"
            aria-hidden
          />
        </>
      )}
      <MilestoneIcon type={milestone.icon} className={iconDim} />
      {milestone.youAreHere && (
        <span
          className="absolute -top-3 left-1/2 z-[2] -translate-x-1/2 whitespace-nowrap rounded-full border border-[var(--exam-red)] bg-[var(--exam-red)] px-2 py-[3px] text-[9px] font-semibold uppercase tracking-[0.08em] leading-none text-white shadow-[0_4px_12px_-6px_color-mix(in_oklab,var(--exam-red)_70%,transparent)]"
          aria-hidden
        >
          you are here
        </span>
      )}
    </div>
  );
}


function NodeCaption({
  milestone,
  align = "center",
  compact,
}: {
  milestone: Milestone;
  align?: "center" | "left";
  compact?: boolean;
}) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left")}>
      <p
        className={cn(
          "font-display font-semibold leading-snug text-foreground",
          compact ? "text-sm" : "text-sm sm:text-base",
        )}
      >
        {milestone.title}
      </p>
      <p
        className={cn(
          "mt-0.5 leading-snug text-muted-foreground",
          compact ? "text-[11px]" : "text-[11px] sm:text-xs",
        )}
      >
        {milestone.label}
      </p>
    </div>
  );
}

/** Wide desktop: soft S-curve across the full content width. */
function SpreadDesktopRoadmap() {
  return (
    <div className="relative hidden h-[340px] w-full md:block">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1100 340"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <filter id="prepGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          id="prepRoadmapPath"
          className="prep-roadmap-path"
          d="M132 97 C 220 97, 320 199, 407 199 S 600 97, 693 97 S 880 152, 968 152"
          fill="none"
          stroke="#161616"
          strokeOpacity="0.26"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="prep-roadmap-comet"
          d="M132 97 C 220 97, 320 199, 407 199 S 600 97, 693 97 S 880 152, 968 152"
          fill="none"
          stroke="var(--exam-red)"
          strokeWidth="2.4"
          strokeLinecap="round"
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          filter="url(#prepGlow)"
        />
      </svg>

      <div className="absolute left-[0%] top-[18%] flex w-[24%] flex-col items-center gap-2.5">
        <NodeCircle milestone={MILESTONES[0]} index={0} size="lg" />
        <NodeCaption milestone={MILESTONES[0]} />
      </div>
      <div className="absolute left-[25%] top-[48%] flex w-[24%] flex-col items-center gap-2.5">
        <NodeCircle milestone={MILESTONES[1]} index={1} size="lg" />
        <NodeCaption milestone={MILESTONES[1]} />
      </div>
      <div className="absolute left-[51%] top-[18%] flex w-[24%] flex-col items-center gap-2.5">
        <NodeCircle milestone={MILESTONES[2]} index={2} size="lg" />
        <NodeCaption milestone={MILESTONES[2]} />
      </div>
      <div className="absolute left-[76%] top-[34%] flex w-[24%] flex-col items-center gap-2.5">
        <NodeCircle milestone={MILESTONES[3]} index={3} size="lg" />
        <NodeCaption milestone={MILESTONES[3]} />
      </div>
    </div>
  );
}

/** Mobile: vertical straight path. */
function MobileRoadmap() {
  return (
    <div className="relative mx-auto flex w-full max-w-md flex-col justify-center gap-0 px-1 py-2 md:hidden">
      <div
        className="prep-roadmap-path-mobile absolute bottom-8 left-[1.9rem] top-8 w-px bg-foreground/25"
        aria-hidden
      />
      {MILESTONES.map((m, i) => (
        <div key={m.title} className="relative z-[1] flex items-start gap-3.5 py-2.5 sm:gap-4">
          <NodeCircle milestone={m} index={i} size="sm" />
          <div className="min-w-0 flex-1 pt-1.5">
            <NodeCaption milestone={m} align="left" compact />
          </div>
        </div>
      ))}
    </div>
  );
}

export function PrepJourneyRoadmap({ className }: { className?: string }) {
  return (
    <div
      className={cn("prep-roadmap relative w-full", className)}
      role="img"
      aria-label="Step by step preparation: Free Demo, Build the Fundamentals, Full Simulation, Exam Day"
    >
      <SpreadDesktopRoadmap />
      <MobileRoadmap />
    </div>
  );
}
