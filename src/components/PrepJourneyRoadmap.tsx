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
    label: "50+ tasks, all 3 subjects",
    icon: "demo",
    youAreHere: true,
  },
  {
    title: "Build the Fundamentals",
    label: "950+ questions, self-paced",
    icon: "lite",
  },
  {
    title: "Full Simulation",
    label: "Timed mocks, answer sheets, stress mode",
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
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? "h-12 w-12" : "h-14 w-14 sm:h-16 sm:w-16";
  const iconDim = size === "sm" ? "h-6 w-6" : "h-7 w-7 sm:h-8 sm:w-8";

  return (
    <div
      className={cn(
        "prep-roadmap-node relative grid place-items-center rounded-full",
        dim,
        milestone.destination
          ? "bg-[var(--caramel-deep)] text-white shadow-[0_8px_20px_-8px_color-mix(in_oklab,var(--caramel-deep)_55%,transparent)]"
          : "border-[1.5px] border-foreground/70 bg-[color-mix(in_oklab,var(--ivory)_88%,white)] text-foreground",
      )}
      style={{ animationDelay: `${0.22 + index * 0.22}s` }}
    >
      <MilestoneIcon type={milestone.icon} className={iconDim} />
      {milestone.youAreHere && (
        <span
          className="prep-roadmap-pulse absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-foreground"
          aria-hidden
        />
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
      {milestone.youAreHere && (
        <p className="mb-1 text-[10px] font-medium leading-none text-muted-foreground">
          you are here
        </p>
      )}
      <p
        className={cn(
          "font-display font-semibold leading-snug text-foreground",
          compact ? "text-sm" : "text-[13px] sm:text-sm",
        )}
      >
        {milestone.title}
      </p>
      <p
        className={cn(
          "mt-0.5 leading-snug text-muted-foreground",
          compact ? "text-[11px]" : "text-[10px] sm:text-[11px]",
        )}
      >
        {milestone.label}
      </p>
    </div>
  );
}

/** Desktop: soft S-curve path through four nodes. */
function DesktopRoadmap() {
  return (
    <div className="relative hidden h-full w-full lg:block">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 640 360"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <path
          className="prep-roadmap-path"
          d="M56 150 C 145 96, 205 96, 248 150 S 355 240, 408 155 S 520 80, 584 138"
          fill="none"
          stroke="#161616"
          strokeOpacity="0.26"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
        />
      </svg>

      {/* Node positions tuned to the path curve */}
      <div className="absolute left-[3%] top-[22%] flex w-[23%] flex-col items-center gap-2">
        <NodeCircle milestone={MILESTONES[0]} index={0} />
        <NodeCaption milestone={MILESTONES[0]} />
      </div>
      <div className="absolute left-[27%] top-[48%] flex w-[23%] flex-col items-center gap-2">
        <NodeCircle milestone={MILESTONES[1]} index={1} />
        <NodeCaption milestone={MILESTONES[1]} />
      </div>
      <div className="absolute left-[51%] top-[22%] flex w-[23%] flex-col items-center gap-2">
        <NodeCircle milestone={MILESTONES[2]} index={2} />
        <NodeCaption milestone={MILESTONES[2]} />
      </div>
      <div className="absolute left-[74%] top-[34%] flex w-[23%] flex-col items-center gap-2">
        <NodeCircle milestone={MILESTONES[3]} index={3} />
        <NodeCaption milestone={MILESTONES[3]} />
      </div>
    </div>
  );
}

/** Mobile / tablet: vertical straight path. */
function MobileRoadmap() {
  return (
    <div className="relative flex h-full w-full flex-col justify-center gap-0 px-2 py-3 lg:hidden">
      <div
        className="prep-roadmap-path-mobile absolute left-[1.9rem] top-8 bottom-8 w-px bg-foreground/25 sm:left-[2.15rem]"
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
      className={cn(
        "prep-roadmap relative h-full w-full overflow-hidden rounded-xl",
        "bg-[color-mix(in_oklab,var(--ivory)_92%,#F2F1EA)]",
        className,
      )}
      role="img"
      aria-label="Step by step preparation: Free Demo, Build the Fundamentals, Full Simulation, Exam Day"
    >
      {/* Soft paper grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(22,22,22,0.03), transparent 40%), radial-gradient(circle at 80% 70%, rgba(194,100,58,0.05), transparent 45%)",
        }}
      />
      <DesktopRoadmap />
      <MobileRoadmap />
    </div>
  );
}
