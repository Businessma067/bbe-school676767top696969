import { useEffect, useState } from "react";
import { BookOpen, ClipboardList, Layers, Puzzle } from "lucide-react";
import { cn } from "@/lib/utils";

type StudyToolKind = "flashcards" | "matching" | "tutor";

type FeatureCard = {
  id: string;
  title: string;
  description: string;
  icon: typeof BookOpen;
  tools?: { name: string; blurb: string; kind: StudyToolKind }[];
};

const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "questions",
    title: "3,000+ practice questions",
    description:
      "A growing bank of exam-style cases across every content area, with a short explanation under each statement so you learn the logic instead of only the answer key.",
    icon: BookOpen,
  },
  {
    id: "mocks",
    title: "Full timed mock exams",
    description:
      "Sit complete simulations with real pacing pressure and partial-credit scoring, then review where points were won or lost.",
    icon: ClipboardList,
  },
  {
    id: "builder",
    title: "Custom mock builder",
    description:
      "Build your own timed sets by topic and difficulty so you can close weak spots without spending hours on material you already know.",
    icon: Layers,
  },
  {
    id: "tools",
    title: "Study tools",
    description: "Quick drills between full practice sessions until recall feels automatic.",
    icon: Puzzle,
    tools: [
      {
        name: "Flash cards",
        blurb: "Flip through definitions, formulas, and vocab until recall feels automatic.",
        kind: "flashcards",
      },
      {
        name: "Matching",
        blurb: "Pair each term with its meaning on a timed board using the same decks in a different drill.",
        kind: "matching",
      },
      {
        name: "Tutor exam",
        blurb: "A short random theory quiz with instant feedback from the tutor robot.",
        kind: "tutor",
      },
    ],
  },
];

const DEFAULT_SUBTITLE =
  "Everything you need to prepare for a WU entrance exam, built around the real format, scoring, and time pressure.";

const WISO_SUBTITLE =
  "Everything you need for the WiSo Aufnahmeprüfung — Wirtschaft verstehen, Mathematik, and German reading — built around the real format and Teilpunktesystem.";

export function WhyChooseUsSection({
  track = "shared",
  subtitle,
}: {
  track?: "shared" | "wiso" | "bbe";
  subtitle?: string;
}) {
  const resolvedSubtitle =
    subtitle ?? (track === "wiso" ? WISO_SUBTITLE : DEFAULT_SUBTITLE);
  const isWiso = track === "wiso";

  return (
    <section
      id="why-choose-us"
      className={cn(
        "relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20",
        isWiso ? "why-choose-us--wiso bg-why-us-bg" : "bg-why-us-bg",
      )}
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[1.75rem] font-semibold leading-[1.1] text-why-us-fg sm:text-4xl lg:text-5xl">
            Why Choose US
          </h2>
          <p className="mt-4 text-base leading-relaxed text-why-us-fg/80 sm:text-lg">
            {resolvedSubtitle}
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-5 sm:grid-cols-2 sm:gap-6">
          {FEATURE_CARDS.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.id}
                className="flex h-full flex-col rounded-2xl border border-white/12 bg-why-us-card p-6 sm:p-8"
              >
                <div
                  className={cn(
                    "grid h-11 w-11 place-items-center rounded-xl",
                    isWiso
                      ? "bg-indigo-500/20 text-indigo-300"
                      : "bg-caramel-deep/20 text-caramel-deep",
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-why-us-fg sm:text-xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-why-us-fg/75 sm:text-base">
                  {feature.description}
                </p>
                {feature.id === "builder" ? <MockBuilderOrbit /> : null}
                {feature.tools ? <StudyToolsCycle tools={feature.tools} /> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StudyToolsCycle({
  tools,
}: {
  tools: { name: string; blurb: string; kind: StudyToolKind }[];
}) {
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const slideMs = 5200;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || tools.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % tools.length);
    }, slideMs);
    return () => window.clearInterval(id);
  }, [reduceMotion, tools.length]);

  const renderVisual = (kind: StudyToolKind) => {
    if (kind === "flashcards") {
      return (
        <div className="stc-flash">
          <div className="stc-flash-stack" aria-hidden>
            <span className="stc-flash-deck stc-flash-deck-3" />
            <span className="stc-flash-deck stc-flash-deck-2" />
          </div>
          <div className="stc-flash-flip">
            <div className="stc-flash-inner">
              <div className="stc-flash-face stc-flash-front">
                <span className="stc-flash-eyebrow">Economics</span>
                <span className="stc-flash-term">Net present value</span>
                <span className="stc-flash-hint">Tap to flip</span>
              </div>
              <div className="stc-flash-face stc-flash-back">
                <span className="stc-flash-eyebrow">Definition</span>
                <span className="stc-flash-def">
                  Today’s value of future cash flows, discounted at the required rate.
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (kind === "matching") {
      const pairs = [
        ["Elasticity", "%ΔQ / %ΔP"],
        ["Opportunity cost", "Next-best forgone"],
        ["NPV", "Discounted cash"],
      ] as const;
      return (
        <div className="stc-match">
          {pairs.map(([left, right], i) => (
            <div key={left} className={cn("stc-match-row", `stc-match-row-${i}`)}>
              <span className="stc-match-chip stc-match-left">{left}</span>
              <span className="stc-match-link">
                <span className="stc-match-line" />
                <span className="stc-match-node" />
              </span>
              <span className="stc-match-chip stc-match-right">{right}</span>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="stc-tutor">
        <div className="stc-tutor-bot">
          <span className="stc-tutor-face" />
          <span className="stc-tutor-name">Tutor</span>
        </div>
        <div className="stc-tutor-chat">
          <p className="stc-tutor-msg stc-tutor-q">True or false: NPV uses discounted cash flows.</p>
          <div className="stc-tutor-choices">
            <span className="stc-tutor-choice stc-tutor-true">True</span>
            <span className="stc-tutor-choice stc-tutor-false">False</span>
          </div>
          <p className="stc-tutor-msg stc-tutor-ok">Correct — keep going.</p>
        </div>
      </div>
    );
  };

  const renderSlide = (
    tool: { name: string; blurb: string; kind: StudyToolKind },
    opts?: { static?: boolean },
  ) => (
    <div
      key={tool.name}
      className={cn("study-tools-cycle-slide", opts?.static ? "is-static" : "is-active")}
      style={{ ["--stc-slide" as string]: `${slideMs}ms` }}
    >
      <div className={cn("study-tools-cycle-visual", `is-${tool.kind}`)}>{renderVisual(tool.kind)}</div>
      <p className="mt-3 text-sm leading-relaxed text-why-us-fg/75 sm:mt-4">
        <span className="font-semibold text-why-us-fg">{tool.name}.</span> {tool.blurb}
      </p>
    </div>
  );

  return (
    <div className="study-tools-cycle mt-5 flex flex-1 flex-col" aria-hidden>
      <div
        className={cn(
          "study-tools-cycle-stage relative flex flex-1 flex-col",
          reduceMotion ? "min-h-0" : "min-h-[14.5rem] sm:min-h-[15.5rem]",
        )}
      >
        {reduceMotion
          ? tools.map((tool) => renderSlide(tool, { static: true }))
          : renderSlide(tools[active]!)}
      </div>
      {!reduceMotion ? (
        <div className="study-tools-cycle-dots mt-3 flex items-center justify-center gap-2 sm:mt-4">
          {tools.map((tool, index) => (
            <span
              key={tool.name}
              className={cn("study-tools-cycle-dot", index === active && "is-active")}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MockBuilderOrbit() {
  const steps = [
    { label: "Topic" },
    { label: "Subtopic" },
    { label: "Mix" },
    { label: "Time" },
    { label: "Start" },
  ] as const;

  const cycleSec = 10;
  const stepSec = cycleSec / steps.length;
  const tipLeadSec = (12 / 100) * cycleSec;

  return (
    <div
      className="mock-builder-orbit mt-6 flex flex-1 flex-col items-center justify-center"
      aria-hidden
      style={{ ["--orbit-cycle" as string]: `${cycleSec}s` }}
    >
      <div className="relative h-[15.5rem] w-[15.5rem] sm:h-[16.5rem] sm:w-[16.5rem]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 160 160" fill="none">
          <circle
            cx="80"
            cy="80"
            r="44"
            className="mock-builder-orbit-ring"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="80"
            cy="80"
            r="44"
            className="mock-builder-orbit-progress"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            pathLength={100}
          />
        </svg>

        {steps.map((step, index) => {
          const angle = -90 + index * (360 / steps.length);
          const rad = (angle * Math.PI) / 180;
          const dotR = (44 / 160) * 100;
          const labelR = step.label === "Subtopic" || step.label === "Start" ? 46.5 : 43;
          const dx = 50 + Math.cos(rad) * dotR;
          const dy = 50 + Math.sin(rad) * dotR;
          const lx = 50 + Math.cos(rad) * labelR;
          const ly = 50 + Math.sin(rad) * labelR;
          const delay = `${index * stepSec - tipLeadSec}s`;
          return (
            <div key={step.label}>
              <span
                className="mock-builder-orbit-dot absolute grid h-7 w-7 place-items-center rounded-full border text-[10px] font-semibold tabular-nums sm:h-8 sm:w-8 sm:text-[11px]"
                style={{ left: `${dx}%`, top: `${dy}%`, animationDelay: delay }}
              >
                {index + 1}
              </span>
              <span
                className={cn(
                  "mock-builder-orbit-label absolute text-center text-[9px] font-semibold leading-none tracking-wide uppercase sm:text-[10px]",
                  step.label === "Subtopic"
                    ? "w-auto max-w-none whitespace-nowrap px-0.5"
                    : "w-[3.25rem] sm:w-[3.5rem]",
                )}
                style={{ left: `${lx}%`, top: `${ly}%`, animationDelay: delay }}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
