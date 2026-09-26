import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type DemoProps = {
  caption: string;
};

function DemoShell({
  url,
  caption,
  actionLabel,
  children,
  className,
}: {
  url: string;
  caption: string;
  actionLabel: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border bg-secondary/50 px-3 py-2.5 sm:px-4">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </span>
          <div className="min-w-0 flex-1 truncate rounded-md border border-border bg-background px-2.5 py-1 text-[11px] text-muted-foreground">
            bbe-school.com{url}
          </div>
        </div>
      </div>
      <div
        className={cn(
          "news-ui-demo relative aspect-[16/10] overflow-hidden bg-[var(--paper)] px-3 py-4 sm:px-5 sm:py-5",
          className,
        )}
      >
        <div className="pointer-events-none absolute left-3 top-3 z-20 sm:left-4 sm:top-4">
          <span className="inline-flex items-center rounded-full border border-border bg-background/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground shadow-sm">
            {actionLabel}
          </span>
        </div>
        {children}
      </div>
      <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:px-6">
        {caption}
        <span className="mt-1 block text-xs">You can also click inside the preview.</span>
      </figcaption>
    </figure>
  );
}

/** Animated pointer so the current action is always visible. */
function DemoCursor({
  x,
  y,
  clicking,
  pulseKey,
}: {
  x: string;
  y: string;
  clicking?: boolean;
  /** Remounts the click ring so each step pulse is visible. */
  pulseKey?: string | number;
}) {
  return (
    <div
      className={cn("news-demo-cursor", clicking && "is-clicking")}
      style={{ left: x, top: y }}
      aria-hidden="true"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 3.5L5 18.5L9.2 14.8L12.2 21.2L14.4 20.2L11.3 13.9L17 13.9L5 3.5Z"
          fill="#161616"
          stroke="#f2f1ed"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      {clicking ? (
        <span key={pulseKey ?? "click"} className="news-demo-click-ring" />
      ) : null}
    </div>
  );
}

function DemoMockBuilder({ caption }: DemoProps) {
  const subjects = [
    { id: "econ", label: "Economics", count: 8 },
    { id: "math", label: "Mathematics", count: 6 },
    { id: "eng", label: "English", count: 6 },
  ] as const;
  const [selected, setSelected] = useState<Record<string, boolean>>({
    econ: false,
    math: false,
    eng: false,
  });
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % 5), 1400);
    return () => window.clearInterval(id);
  }, [paused]);

  useEffect(() => {
    if (paused) return;
    if (step === 0) setSelected({ econ: false, math: false, eng: false });
    if (step === 1) setSelected({ econ: true, math: false, eng: false });
    if (step === 2) setSelected({ econ: true, math: true, eng: false });
    if (step === 3) setSelected({ econ: true, math: true, eng: true });
  }, [step, paused]);

  const cursorPos =
    step === 0
      ? { x: "18%", y: "38%" }
      : step === 1
        ? { x: "22%", y: "48%" }
        : step === 2
          ? { x: "24%", y: "58%" }
          : step === 3
            ? { x: "50%", y: "78%" }
            : { x: "50%", y: "78%" };

  const actionLabel =
    step === 0
      ? "Selecting Economics"
      : step === 1
        ? "Selecting Mathematics"
        : step === 2
          ? "Selecting English"
          : step === 3
            ? "Ready to start"
            : "Starting mock";

  const total =
    (selected.econ ? 8 : 0) + (selected.math ? 6 : 0) + (selected.eng ? 6 : 0);

  return (
    <DemoShell url="/products/custom-mock-builder" caption={caption} actionLabel={actionLabel}>
      <div
        className="relative mx-auto flex h-full max-w-lg flex-col justify-center gap-3"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Mock Builder
          </p>
          <p className="mt-1 font-display text-base font-semibold text-foreground sm:text-lg">
            Build your practice exam
          </p>
        </div>
        <div className="grid gap-2">
          {subjects.map((row) => {
            const on = selected[row.id];
            return (
              <button
                key={row.id}
                type="button"
                onClick={() => {
                  setPaused(true);
                  setSelected((prev) => ({ ...prev, [row.id]: !prev[row.id] }));
                }}
                className={cn(
                  "flex items-center justify-between rounded-md border px-3 py-2.5 text-left transition-all duration-300",
                  on
                    ? "border-foreground/40 bg-background shadow-sm"
                    : "border-border bg-background/70",
                )}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={cn(
                      "inline-flex h-4 w-4 items-center justify-center rounded border transition-colors duration-300",
                      on ? "border-foreground bg-foreground" : "border-border bg-transparent",
                    )}
                  >
                    {on ? (
                      <span className="h-1.5 w-2 border-b-2 border-r-2 border-background rotate-45 translate-y-[-1px]" />
                    ) : null}
                  </span>
                  <span className="text-sm font-medium text-foreground">{row.label}</span>
                </div>
                <span className="text-xs font-semibold text-muted-foreground">{row.count} tasks</span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setPaused(true)}
          className={cn(
            "mt-1 rounded-md px-3 py-2.5 text-center text-sm font-semibold transition-all duration-300",
            total > 0
              ? "bg-foreground text-background scale-[1.01]"
              : "bg-foreground/30 text-background",
          )}
        >
          Start custom mock · {total} tasks
        </button>
        <DemoCursor
          x={cursorPos.x}
          y={cursorPos.y}
          clicking={step > 0 && step < 4}
          pulseKey={step}
        />
      </div>
    </DemoShell>
  );
}

function DemoFlashcards({ caption }: DemoProps) {
  const cards = [
    {
      front: "opportunity cost",
      back: "The value of the next-best alternative you give up when you choose.",
    },
    {
      front: "ceteris paribus",
      back: "Holding other relevant factors constant while examining one relationship.",
    },
  ];
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [paused, setPaused] = useState(false);
  const card = cards[index]!;

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setFlipped((f) => {
        if (!f) return true;
        setIndex((i) => (i + 1) % cards.length);
        return false;
      });
    }, 1800);
    return () => window.clearInterval(id);
  }, [paused, cards.length]);

  return (
    <DemoShell
      url="/flashcards/economics"
      caption={caption}
      actionLabel={flipped ? "Showing meaning" : "Showing term · tap to flip"}
    >
      <div
        className="relative flex h-full flex-col items-center justify-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Flashcards · Economics
        </p>
        <button
          type="button"
          onClick={() => {
            setPaused(true);
            setFlipped((v) => !v);
          }}
          className="news-demo-card-stage"
        >
          <div className={cn("news-demo-card news-demo-card-manual", flipped && "is-flipped")}>
            <div className="news-demo-card-face news-demo-card-front">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Term
              </span>
              <span className="mt-3 font-display text-xl font-semibold text-foreground sm:text-2xl">
                {card.front}
              </span>
            </div>
            <div className="news-demo-card-face news-demo-card-back">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Meaning
              </span>
              <span className="mt-3 max-w-[16rem] text-center text-sm leading-relaxed text-foreground sm:text-base">
                {card.back}
              </span>
            </div>
          </div>
        </button>
        <div className="mt-5 flex gap-2">
          <button
            type="button"
            className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
            onClick={() => {
              setPaused(true);
              setFlipped(false);
              setIndex((i) => (i + cards.length - 1) % cards.length);
            }}
          >
            Again
          </button>
          <button
            type="button"
            className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
            onClick={() => {
              setPaused(true);
              setFlipped(false);
              setIndex((i) => (i + 1) % cards.length);
            }}
          >
            Knew it
          </button>
        </div>
        <DemoCursor
          x={flipped ? "58%" : "50%"}
          y={flipped ? "72%" : "52%"}
          clicking={!flipped}
          pulseKey={`${index}-${flipped ? "back" : "front"}`}
        />
      </div>
    </DemoShell>
  );
}

function DemoMatching({ caption }: DemoProps) {
  const pairs = [
    { left: "Sunk cost", right: "Already incurred cost" },
    { left: "Ceteris paribus", right: "Hold other factors constant" },
    { left: "Liquidity", right: "Ease of converting to cash" },
  ];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % pairs.length), 1600);
    return () => window.clearInterval(id);
  }, [paused, pairs.length]);

  return (
    <DemoShell
      url="/matching/economics"
      caption={caption}
      actionLabel={`Connecting “${pairs[active]!.left}”`}
    >
      <div
        className="relative mx-auto flex h-full max-w-md flex-col justify-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Matching · Economics
        </p>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 gap-y-3 sm:gap-x-3">
          {pairs.map((pair, i) => {
            const on = i === active;
            return (
              <div key={pair.left} className="contents">
                <button
                  type="button"
                  onClick={() => {
                    setPaused(true);
                    setActive(i);
                  }}
                  className={cn(
                    "rounded-md border px-2.5 py-2 text-left text-[11px] font-semibold transition-all duration-500 sm:text-xs",
                    on
                      ? "border-foreground/45 bg-background text-foreground shadow-sm"
                      : "border-border bg-background/60 text-muted-foreground",
                  )}
                >
                  {pair.left}
                </button>
                <div
                  className={cn(
                    "h-[2px] w-6 origin-left rounded-full transition-all duration-500 sm:w-10",
                    on ? "scale-x-100 bg-foreground" : "scale-x-50 bg-border",
                  )}
                />
                <button
                  type="button"
                  onClick={() => {
                    setPaused(true);
                    setActive(i);
                  }}
                  className={cn(
                    "rounded-md border px-2.5 py-2 text-left text-[11px] font-medium transition-all duration-500 sm:text-xs",
                    on
                      ? "border-foreground/45 bg-background text-foreground shadow-sm"
                      : "border-border bg-background/60 text-muted-foreground",
                  )}
                >
                  {pair.right}
                </button>
              </div>
            );
          })}
        </div>
        <DemoCursor
          x="18%"
          y={`${42 + active * 14}%`}
          clicking
          pulseKey={active}
        />
      </div>
    </DemoShell>
  );
}

function DemoTutorExam({ caption }: DemoProps) {
  const choices = ["x ≥ 2 and x ≠ 5", "x > 2", "x ≠ 5", "all real x"];
  const [picked, setPicked] = useState<number | null>(null);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % 4), 1600);
    return () => window.clearInterval(id);
  }, [paused]);

  useEffect(() => {
    if (paused) return;
    if (step < 2) setPicked(null);
    if (step === 2) setPicked(0);
  }, [step, paused]);

  const actionLabel =
    step === 0
      ? "Reading the question"
      : step === 1
        ? "Reviewing choices"
        : step === 2
          ? "Selecting the answer"
          : "Showing feedback";

  return (
    <DemoShell url="/tutor-exam/mathematics" caption={caption} actionLabel={actionLabel}>
      <div
        className="relative mx-auto flex h-full max-w-md flex-col justify-center gap-3"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          <span>Tutor exam · Math</span>
          <span>12:40</span>
        </div>
        <div className="rounded-md border border-border bg-background px-3.5 py-3 transition-opacity duration-500">
          <p className="text-sm font-medium leading-relaxed text-foreground">
            For which values of x is the expression defined?
          </p>
          <p className="mt-2 font-display text-base text-foreground">√(x − 2) / (x − 5)</p>
        </div>
        <div className="grid gap-2">
          {choices.map((choice, i) => {
            const on = picked === i;
            return (
              <button
                key={choice}
                type="button"
                onClick={() => {
                  setPaused(true);
                  setPicked(i);
                }}
                className={cn(
                  "rounded-md border px-3 py-2 text-left text-sm transition-all duration-300",
                  on
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background text-muted-foreground hover:text-foreground",
                )}
              >
                {choice}
              </button>
            );
          })}
        </div>
        <div
          className={cn(
            "rounded-md border border-border bg-background/90 px-3 py-2 text-xs leading-relaxed text-muted-foreground transition-all duration-500",
            picked === 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1",
          )}
        >
          Correct. Domain needs x − 2 ≥ 0 and a non-zero denominator.
        </div>
        <DemoCursor
          x="40%"
          y={step < 2 ? "36%" : step === 2 ? "58%" : "86%"}
          clicking={step === 2}
          pulseKey={step}
        />
      </div>
    </DemoShell>
  );
}

function DemoEconomics({ caption }: DemoProps) {
  const rows = [
    { text: "Opportunity cost includes only explicit money costs.", mark: "False", ok: false },
    { text: "Ceteris paribus holds other relevant factors constant.", mark: "True", ok: true },
    { text: "A sunk cost should decide the next investment.", mark: "False", ok: false },
  ];
  const [marks, setMarks] = useState<(string | null)[]>([null, null, null]);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % 5), 1400);
    return () => window.clearInterval(id);
  }, [paused]);

  useEffect(() => {
    if (paused) return;
    if (step === 0) setMarks([null, null, null]);
    if (step === 1) setMarks(["False", null, null]);
    if (step === 2) setMarks(["False", "True", null]);
    if (step === 3) setMarks(["False", "True", "False"]);
  }, [step, paused]);

  const actionLabel =
    step === 0
      ? "Reading statements"
      : step === 1
        ? "Marking statement 1 False"
        : step === 2
          ? "Marking statement 2 True"
          : step === 3
            ? "Marking statement 3 False"
            : "Review complete";

  return (
    <DemoShell url="/demo-practice/economics" caption={caption} actionLabel={actionLabel}>
      <div
        className="relative mx-auto flex h-full max-w-md flex-col justify-center gap-3"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Economics · Statement cluster
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">
            Which of the following statements are true?
          </p>
        </div>
        <div className="space-y-2">
          {rows.map((row, i) => {
            const mark = marks[i];
            return (
              <button
                key={row.text}
                type="button"
                onClick={() => {
                  setPaused(true);
                  setMarks((prev) =>
                    prev.map((m, idx) => (idx === i ? (m ? null : row.mark) : m)),
                  );
                }}
                className="flex w-full items-start justify-between gap-3 rounded-md border border-border bg-background px-3 py-2.5 text-left transition-all duration-300 hover:border-foreground/30"
              >
                <p className="text-xs leading-relaxed text-foreground sm:text-sm">{row.text}</p>
                <span
                  className={cn(
                    "shrink-0 rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] transition-all duration-300",
                    mark
                      ? row.ok
                        ? "bg-[color-mix(in_oklab,#3d6b5a_18%,white)] text-[#2f5648]"
                        : "bg-[color-mix(in_oklab,#b3392a_14%,white)] text-[#8f2f24]"
                      : "bg-secondary text-muted-foreground",
                  )}
                >
                  {mark ?? "Mark"}
                </span>
              </button>
            );
          })}
        </div>
        <DemoCursor
          x="82%"
          y={step === 0 ? "40%" : `${48 + Math.min(step, 3) * 12}%`}
          clicking={step > 0 && step < 4}
          pulseKey={step}
        />
      </div>
    </DemoShell>
  );
}

const DEMOS = {
  "mock-builder": DemoMockBuilder,
  flashcards: DemoFlashcards,
  matching: DemoMatching,
  "tutor-exam": DemoTutorExam,
  economics: DemoEconomics,
} as const;

export type NewsDemoId = keyof typeof DEMOS;

export function NewsUiDemo({ id, caption }: { id: string; caption: string }) {
  const Demo = DEMOS[id as NewsDemoId];
  if (!Demo) return null;
  return <Demo caption={caption} />;
}
