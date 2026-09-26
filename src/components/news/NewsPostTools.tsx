import { useMemo, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const INK = "#161616";
const MUTED = "#5a584f";
const RULE = "#d8d6ce";
const EMBER = "#c45f1a";
const MINT = "#3d6b5a";
const STEEL = "#3a5a78";
const PAPER = "#fdf9f0";

function ToolFrame({
  eyebrow,
  title,
  caption,
  children,
}: {
  eyebrow: string;
  title: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-border bg-card">
      <div className="bg-[var(--paper)] px-4 py-5 sm:px-6 sm:py-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: MUTED }}>
          {eyebrow}
        </p>
        <p className="mt-1 font-display text-lg font-semibold" style={{ color: INK }}>
          {title}
        </p>
        <div className="mt-5">{children}</div>
      </div>
      <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:px-6">
        {caption}
      </figcaption>
    </figure>
  );
}

/** Mini BBE-style partial credit toy: toggle marks, watch the floor at zero. */
export function PartialCreditToy({ caption }: { caption: string }) {
  const truths = [true, true, false, true, false];
  const [marks, setMarks] = useState([false, false, false, false, false]);
  const max = 5;
  const r = truths.filter(Boolean).length;
  const unit = max / r;

  const score = useMemo(() => {
    let pts = 0;
    truths.forEach((isTrue, i) => {
      if (!marks[i]) return;
      pts += isTrue ? unit : -unit;
    });
    return Math.max(0, Math.round(pts * 10) / 10);
  }, [marks]);

  return (
    <ToolFrame
      eyebrow="Interactive example"
      title="Partial credit with a floor at zero"
      caption={caption}
    >
      <p className="mb-4 text-sm leading-relaxed" style={{ color: MUTED }}>
        Five statements under one question. Each label shows whether the statement is true or false in
        the key. Tap to mark an answer. Wrong marks reduce the score; blanks do not.
      </p>
      <ul className="space-y-2">
        {truths.map((isTrue, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() =>
                setMarks((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
              }
              className={cn(
                "flex w-full items-center justify-between gap-3 rounded-md border px-3 py-2.5 text-left text-sm transition-colors",
                marks[i] ? "border-foreground/30 bg-background" : "border-border bg-background/50",
              )}
            >
              <span style={{ color: INK }}>
                Statement {i + 1}
                <span className="ml-2 text-xs" style={{ color: MUTED }}>
                  ({isTrue ? "true in key" : "false in key"})
                </span>
              </span>
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                style={{ color: marks[i] ? EMBER : MUTED }}
              >
                {marks[i] ? "Marked" : "Blank"}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div
        className="mt-4 flex items-end justify-between rounded-md border px-3.5 py-3"
        style={{ borderColor: RULE, background: "rgba(255,255,255,0.55)" }}
      >
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: MUTED }}>
            Task score
          </p>
          <p className="mt-1 font-display text-2xl font-bold" style={{ color: INK }}>
            {score}
            <span className="text-base font-semibold" style={{ color: MUTED }}>
              {" "}
              / {max}
            </span>
          </p>
        </div>
        <p className="max-w-[14rem] text-right text-xs leading-relaxed" style={{ color: MUTED }}>
          If you mark false statements, points are subtracted. The task score cannot go below zero.
        </p>
      </div>
    </ToolFrame>
  );
}

const SAMPLE_CARDS = [
  {
    front: "opportunity cost",
    back: "The value of the next-best alternative you give up when you choose.",
  },
  {
    front: "ceteris paribus",
    back: "Holding other relevant factors constant while examining one relationship.",
  },
  {
    front: "sunk cost",
    back: "A cost already incurred that should not drive the next decision.",
  },
];

/** Flip through sample exam-register flashcards. */
export function FlashcardPeek({ caption }: { caption: string }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = SAMPLE_CARDS[index]!;

  return (
    <ToolFrame eyebrow="Study tool" title="Sample flashcard" caption={caption}>
      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        className="flex min-h-[160px] w-full flex-col items-center justify-center rounded-md border px-4 py-8 text-center transition-colors hover:bg-background"
        style={{ borderColor: RULE, background: PAPER }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: MUTED }}>
          {flipped ? "Meaning" : "Term"}
        </p>
        <p className="mt-3 font-display text-xl font-semibold sm:text-2xl" style={{ color: INK }}>
          {flipped ? card.back : card.front}
        </p>
        <p className="mt-4 text-xs" style={{ color: MUTED }}>
          Tap the card to flip it
        </p>
      </button>
      <div className="mt-3 flex items-center justify-between gap-2">
        <button
          type="button"
          className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold"
          onClick={() => {
            setFlipped(false);
            setIndex((i) => (i + SAMPLE_CARDS.length - 1) % SAMPLE_CARDS.length);
          }}
        >
          Prev
        </button>
        <p className="text-xs" style={{ color: MUTED }}>
          {index + 1} / {SAMPLE_CARDS.length}
        </p>
        <button
          type="button"
          className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold"
          onClick={() => {
            setFlipped(false);
            setIndex((i) => (i + 1) % SAMPLE_CARDS.length);
          }}
        >
          Next
        </button>
      </div>
    </ToolFrame>
  );
}

/** BBE vs WiSo compare picker. */
export function TrackCompareTool({ caption }: { caption: string }) {
  const [track, setTrack] = useState<"bbe" | "wiso">("bbe");
  const copy =
    track === "bbe"
      ? {
          title: "BBE",
          points: [
            "English-taught Business and Economics entrance path at WU.",
            "Practice covers English, mathematics, and economics statement tasks.",
            "Demo Exam and BBE Mock Builder are on this track.",
          ],
        }
      : {
          title: "WiSo",
          points: [
            "German-language Wirtschafts- und Sozialwissenschaften entrance path.",
            "Practice focuses on German and economics surfaces for that exam.",
            "WiSo demos, course pages, and mock builder follow this track.",
          ],
        };

  return (
    <ToolFrame eyebrow="Compare" title="BBE or WiSo" caption={caption}>
      <div className="flex gap-2">
        {(
          [
            ["bbe", "BBE"],
            ["wiso", "WiSo"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTrack(id)}
            className={cn(
              "flex-1 rounded-md border px-3 py-2.5 font-display text-sm font-semibold transition-colors",
              track === id
                ? "border-foreground/30 bg-background"
                : "border-border bg-background/40 text-muted-foreground hover:bg-background",
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        className="mt-4 rounded-md border px-3.5 py-3"
        style={{ borderColor: RULE, background: "rgba(255,255,255,0.55)" }}
      >
        <p className="font-display text-sm font-semibold" style={{ color: track === "bbe" ? EMBER : STEEL }}>
          {copy.title}
        </p>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed" style={{ color: MUTED }}>
          {copy.points.map((p) => (
            <li key={p}>• {p}</li>
          ))}
        </ul>
      </div>
    </ToolFrame>
  );
}

/** Drag-free subject mix preview for Mock Builder storytelling. */
export function BuilderMixTool({ caption }: { caption: string }) {
  const [econ, setEcon] = useState(8);
  const [math, setMath] = useState(6);
  const [eng, setEng] = useState(6);
  const total = econ + math + eng;

  return (
    <ToolFrame eyebrow="Builder example" title="Example subject mix" caption={caption}>
      <p className="mb-4 text-sm leading-relaxed" style={{ color: MUTED }}>
        This is not the live Mock Builder. It simply shows how changing the number of tasks in each
        subject changes the shape of a practice paper.
      </p>
      {(
        [
          ["Economics", econ, setEcon, STEEL],
          ["Mathematics", math, setMath, EMBER],
          ["English", eng, setEng, MINT],
        ] as const
      ).map(([label, value, setter, tone]) => (
        <label key={label} className="mb-3 block">
          <div className="mb-1 flex items-center justify-between text-xs font-semibold">
            <span style={{ color: INK }}>{label}</span>
            <span style={{ color: tone }}>{value} tasks</span>
          </div>
          <input
            type="range"
            min={2}
            max={12}
            value={value}
            onChange={(e) => setter(Number(e.target.value))}
            className="w-full accent-[var(--espresso,#161616)]"
          />
        </label>
      ))}
      <div
        className="mt-2 rounded-md border px-3.5 py-3 text-sm"
        style={{ borderColor: RULE, background: "rgba(255,255,255,0.55)", color: MUTED }}
      >
        Total length:{" "}
        <span className="font-display font-semibold" style={{ color: INK }}>
          {total} tasks
        </span>
        . The live banks stay demanding regardless of the mix you choose.
      </div>
    </ToolFrame>
  );
}

const TOOLS = {
  "partial-credit": PartialCreditToy,
  "flashcard-peek": FlashcardPeek,
  "track-compare": TrackCompareTool,
  "builder-mix": BuilderMixTool,
} as const;

export type NewsToolId = keyof typeof TOOLS;

export function NewsPostTool({ id, caption }: { id: string; caption: string }) {
  const Tool = TOOLS[id as NewsToolId];
  if (!Tool) return null;
  return <Tool caption={caption} />;
}
