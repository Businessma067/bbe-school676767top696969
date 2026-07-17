import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Lock, X as CloseIcon } from "lucide-react";
import answerSheetImg from "@/assets/answer-sheet-simulator.png.asset.json";

export const Route = createFileRoute("/important-features")({
  head: () => ({
    meta: [
      { title: "Important Features — BBE School" },
      {
        name: "description",
        content:
          "Explore the premium features of BBE School: the Official Answer Sheet and more tools built for WU Vienna exam success.",
      },
      { property: "og:title", content: "Important Features — BBE School" },
      {
        property: "og:description",
        content: "Premium tools crafted for WU Vienna BBE candidates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ImportantFeaturesPage,
});

type Feature = {
  title: string;
  description: string;
  image: string;
  tags: [string, string];
};

const features: Feature[] = [
  {
    title: "Official Answer Sheet",
    description:
      "Practice transferring your answers into a perfect digital replica of the official WU Vienna answer sheet to eliminate technical mistakes under exam pressure.",
    image: answerSheetImg.url,
    tags: ["#Stress & Focus", "#Time Management"],
  },
];

function ImportantFeaturesPage() {
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-md ring-1 ring-primary/30 transition-transform group-hover:scale-105">
              <span className="font-display text-sm font-bold leading-none text-primary-foreground tracking-tight">
                BBE
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold tracking-tight text-foreground">
                BBE School
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">
                WU Vienna · Prep
              </span>
            </div>
          </Link>
          <Link
            to="/"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="mb-10 max-w-2xl">
          <span className="mb-3 inline-block rounded-full border border-border bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Product Directory
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Important Features
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            A curated set of premium tools engineered to sharpen every advantage
            you need for the WU Vienna BBE entrance exam.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              feature={f}
              onViewMore={() => setOpenTitle(f.title)}
            />
          ))}
        </div>
      </main>

      {openTitle === "Official Answer Sheet" && (
        <AnswerSheetModal onClose={() => setOpenTitle(null)} />
      )}
    </div>
  );
}

function FeatureCard({
  feature,
  onViewMore,
}: {
  feature: Feature;
  onViewMore: () => void;
}) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="pointer-events-none absolute left-4 top-4 z-10 flex flex-wrap gap-1.5">
        {feature.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-foreground/85 px-2 py-0.5 text-[10px] font-bold tracking-tight text-background backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-[minmax(0,42%)_minmax(0,58%)]">
        <div className="relative flex items-center justify-center bg-secondary/50 p-4 md:p-6">
          <img
            src={feature.image}
            alt={feature.title}
            className="h-full max-h-[420px] w-full rounded-xl object-contain"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {feature.title}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {feature.description}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-3">
            <button
              type="button"
              onClick={onViewMore}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              View More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              <Lock className="h-3 w-3" />
              For full course users only
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   Animated Answer Sheet Modal
   ============================================================ */

const ORANGE = "#EA6A2C";

type Mark = { row: number; col: number };

// Choreographed clicks — rhythmic pattern across first several rows
const CLICK_SEQUENCE: Mark[] = [
  { row: 1, col: 0 },
  { row: 1, col: 1 },
  { row: 1, col: 2 },
  { row: 2, col: 4 },
  { row: 3, col: 1 },
  { row: 4, col: 3 },
  { row: 5, col: 1 },
  { row: 5, col: 3 },
  { row: 6, col: 0 },
  { row: 7, col: 4 },
  { row: 8, col: 1 },
  { row: 9, col: 3 },
  { row: 10, col: 0 },
  { row: 10, col: 1 },
  { row: 10, col: 3 },
  { row: 10, col: 4 },
];

function AnswerSheetModal({ onClose }: { onClose: () => void }) {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [sigProgress, setSigProgress] = useState(0); // 0..1
  const [marks, setMarks] = useState<Mark[]>([]);
  const [cursor, setCursor] = useState({ x: 60, y: 60 });
  const [clickPulse, setClickPulse] = useState(0);
  const [cursorMode, setCursorMode] = useState<"pointer" | "pen">("pointer");

  const sheetRef = useRef<HTMLDivElement | null>(null);
  const lastNameRef = useRef<HTMLDivElement | null>(null);
  const firstNameRef = useRef<HTMLDivElement | null>(null);
  const sigRef = useRef<HTMLDivElement | null>(null);
  const cellRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());
  const timers = useRef<number[]>([]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Helper: schedule with cleanup tracking
  const schedule = (fn: () => void, delay: number) => {
    const id = window.setTimeout(fn, delay);
    timers.current.push(id);
    return id;
  };

  const centerOf = (el: HTMLElement | null) => {
    const sheet = sheetRef.current;
    if (!el || !sheet) return { x: 0, y: 0 };
    const s = sheet.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    return {
      x: r.left - s.left + r.width / 2,
      y: r.top - s.top + r.height / 2,
    };
  };

  // Master animation loop
  useEffect(() => {
    let cancelled = false;

    const runLoop = () => {
      if (cancelled) return;

      // Reset
      setLastName("");
      setFirstName("");
      setSigProgress(0);
      setMarks([]);
      setClickPulse(0);
      setCursor({ x: 40, y: 40 });
      setCursorMode("pointer");

      let t = 400;

      // --- Step 1: Type "Doe" in Last name ---
      schedule(() => {
        const p = centerOf(lastNameRef.current);
        setCursor({ x: p.x + 40, y: p.y });
      }, t);
      t += 700;

      const doe = "Doe";
      for (let i = 0; i < doe.length; i++) {
        schedule(() => setLastName(doe.slice(0, i + 1)), t);
        t += 180;
      }
      t += 300;

      // --- Type "John" in First name ---
      schedule(() => {
        const p = centerOf(firstNameRef.current);
        setCursor({ x: p.x + 40, y: p.y });
      }, t);
      t += 600;

      const john = "John";
      for (let i = 0; i < john.length; i++) {
        schedule(() => setFirstName(john.slice(0, i + 1)), t);
        t += 180;
      }
      t += 300;

      // --- Pick up the pen and move to signature line ---
      schedule(() => {
        setCursorMode("pen");
        const sheet = sheetRef.current;
        const sig = sigRef.current;
        if (sheet && sig) {
          const s = sheet.getBoundingClientRect();
          const r = sig.getBoundingClientRect();
          setCursor({ x: r.left - s.left + 6, y: r.top - s.top + r.height - 6 });
        }
      }, t);
      t += 600;

      // --- Draw signature: pen traces the stroke ---
      const sigSteps = 40;
      for (let i = 1; i <= sigSteps; i++) {
        const p = i / sigSteps;
        schedule(() => {
          setSigProgress(p);
          const sheet = sheetRef.current;
          const sig = sigRef.current;
          if (sheet && sig) {
            const s = sheet.getBoundingClientRect();
            const r = sig.getBoundingClientRect();
            // trace along signature width with a gentle vertical wobble
            const x = r.left - s.left + 6 + p * (r.width - 12);
            const wobble = Math.sin(p * Math.PI * 5) * 4;
            const y = r.top - s.top + r.height / 2 + wobble;
            setCursor({ x, y });
          }
        }, t);
        t += 55;
      }
      t += 500;

      // --- Put the pen down, back to pointer for the grid ---
      schedule(() => setCursorMode("pointer"), t);
      t += 200;


      // --- Step 2: Click X's on the grid ---
      for (const m of CLICK_SEQUENCE) {
        schedule(() => {
          const el = cellRefs.current.get(`${m.row}-${m.col}`) ?? null;
          const p = centerOf(el);
          setCursor({ x: p.x, y: p.y });
        }, t);
        t += 220;
        schedule(() => {
          setMarks((prev) => [...prev, m]);
          setClickPulse((n) => n + 1);
        }, t);
        t += 150;
      }

      // Hold, then loop
      t += 2000;
      schedule(() => runLoop(), t);
    };

    // small initial delay so refs are laid out
    const boot = window.setTimeout(runLoop, 250);
    timers.current.push(boot);

    return () => {
      cancelled = true;
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-3 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Official Answer Sheet preview"
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl animate-scale-in"
        style={{
          boxShadow: `0 20px 60px -10px ${ORANGE}55, 0 0 0 2px ${ORANGE}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-gray-700 shadow ring-1 ring-black/10 transition hover:bg-white"
        >
          <CloseIcon className="h-4 w-4" />
        </button>

        <div
          ref={sheetRef}
          className="relative select-none bg-white p-4 text-[9px] leading-tight text-black sm:text-[10px]"
          style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
        >
          {/* Header */}
          <div className="mb-1 text-[13px] font-bold sm:text-sm">
            Vienna University of Economics and Business
          </div>
          <div className="text-[11px] font-bold sm:text-xs">
            BBE Entrance Exam 2026
          </div>
          <div className="mb-2 text-[9px] text-gray-600 sm:text-[10px]">
            Date: 30.06.2026 – Scrambling: 1
          </div>

          {/* Personal data + Exam ID row */}
          <div className="flex gap-2">
            <div className="flex-1 rounded-md border border-gray-300 p-2">
              <div className="mb-1 text-[8px] font-semibold text-gray-500 sm:text-[9px]">
                Personal data
              </div>

              <FieldRow label="Last name:" inputRef={lastNameRef}>
                <HandText text={lastName} />
              </FieldRow>
              <FieldRow label="First name:" inputRef={firstNameRef}>
                <HandText text={firstName} />
              </FieldRow>
              <FieldRow label="Signature:" inputRef={sigRef} tall>
                <Signature progress={sigProgress} />
              </FieldRow>
            </div>

            <div className="w-[70px] rounded-md border border-gray-300 p-1.5 text-center">
              <div className="text-[8px] font-semibold text-gray-500">
                Exam ID
              </div>
              <IdBubbles />
            </div>
          </div>

          {/* Confirmation strip */}
          <div className="mt-2 flex items-start gap-1.5 rounded-md border border-gray-300 p-1.5">
            <div className="mt-[1px] h-3 w-3 flex-shrink-0 rounded-sm border border-gray-400" />
            <div className="text-[7.5px] leading-snug text-gray-600 sm:text-[8.5px]">
              I hereby confirm that I completed this examination on my own,
              without assistance from any other person.
            </div>
          </div>

          {/* Answers */}
          <div className="mt-3">
            <div className="mb-1 text-[10px] font-bold sm:text-[11px]">
              Answers 1 – 40
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
              <AnswerColumn
                start={1}
                end={20}
                marks={marks}
                cellRefs={cellRefs}
              />
              <AnswerColumn
                start={21}
                end={40}
                marks={marks}
                cellRefs={cellRefs}
              />
            </div>
          </div>

          {/* Cursor overlay */}
          <div
            className="pointer-events-none absolute left-0 top-0 z-10"
            style={{
              transform: `translate(${cursor.x}px, ${cursor.y}px)`,
              transition:
                cursorMode === "pen"
                  ? "transform 55ms linear"
                  : "transform 500ms ease-out",
            }}
          >
            <div className="relative">
              {cursorMode === "pen" ? <PenIcon /> : <CursorIcon />}
              {clickPulse > 0 && (
                <span
                  key={clickPulse}
                  className="absolute left-0 top-0 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    animation: "ripple 500ms ease-out forwards",
                    background: `${ORANGE}55`,
                  }}
                />
              )}
            </div>
          </div>


          <style>{`
            @keyframes ripple {
              0% { transform: translate(-50%, -50%) scale(0.2); opacity: 1; }
              100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
            }
            @keyframes glowIn {
              0% { transform: scale(0.4); opacity: 0; }
              60% { transform: scale(1.15); opacity: 1; }
              100% { transform: scale(1); opacity: 1; }
            }
          `}</style>
        </div>

        <div className="border-t border-gray-200 bg-gray-50 px-4 py-2 text-center text-[10px] text-gray-500">
          Auto-preview · Official WU answer sheet replica
        </div>
      </div>
    </div>
  );
}

function FieldRow({
  label,
  children,
  inputRef,
  tall,
}: {
  label: string;
  children: React.ReactNode;
  inputRef: React.RefObject<HTMLDivElement | null>;
  tall?: boolean;
}) {
  return (
    <div className="mb-1">
      <div className="text-[8px] text-gray-600 sm:text-[9px]">{label}</div>
      <div
        ref={inputRef}
        className={`relative border-b border-gray-400 ${tall ? "h-8" : "h-4"}`}
      >
        {children}
      </div>
    </div>
  );
}

function HandText({ text }: { text: string }) {
  return (
    <span
      className="absolute bottom-0 left-1 text-[14px] leading-none"
      style={{
        color: ORANGE,
        fontFamily:
          '"Segoe Script", "Bradley Hand", "Comic Sans MS", cursive',
        fontWeight: 600,
      }}
    >
      {text}
      {text.length > 0 && (
        <span
          className="ml-0.5 inline-block h-3 w-[1.5px] align-middle"
          style={{ background: ORANGE, animation: "pulse 1s infinite" }}
        />
      )}
    </span>
  );
}

function Signature({ progress }: { progress: number }) {
  // Reveal a cursive "John Doe" left-to-right as the pen moves.
  const pct = Math.max(0, Math.min(1, progress)) * 100;
  return (
    <div
      className="absolute bottom-0 left-1 h-8 w-[130px] overflow-hidden"
      style={{
        clipPath: `inset(0 ${100 - pct}% 0 0)`,
        transition: "clip-path 55ms linear",
      }}
    >
      <span
        className="absolute bottom-[-2px] left-0 whitespace-nowrap"
        style={{
          color: ORANGE,
          fontFamily:
            '"Snell Roundhand", "Segoe Script", "Bradley Hand", "Lucida Handwriting", cursive',
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "22px",
          lineHeight: 1,
          letterSpacing: "0.5px",
          textShadow: `0 0 1px ${ORANGE}55`,
        }}
      >
        John Doe
      </span>
    </div>
  );
}


function IdBubbles() {
  return (
    <div className="mt-1 flex justify-center gap-0.5">
      {[0, 1, 2, 3].map((c) => (
        <div key={c} className="flex flex-col gap-[1px]">
          {Array.from({ length: 10 }).map((_, r) => (
            <div
              key={r}
              className="h-[5px] w-2.5 rounded-sm border border-gray-400"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function AnswerColumn({
  start,
  end,
  marks,
  cellRefs,
}: {
  start: number;
  end: number;
  marks: Mark[];
  cellRefs: React.MutableRefObject<Map<string, HTMLDivElement | null>>;
}) {
  const rows = useMemo(
    () => Array.from({ length: end - start + 1 }, (_, i) => start + i),
    [start, end],
  );
  const cols = ["a", "b", "c", "d", "e"];

  return (
    <div className="flex flex-col gap-0.5">
      <div className="ml-4 grid grid-cols-5 gap-1 text-center text-[8px] text-gray-500">
        {cols.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
      {rows.map((r) => (
        <div key={r} className="flex items-center gap-1">
          <span className="w-3 text-right text-[8px] font-bold text-gray-700">
            {r}
          </span>
          <div className="grid flex-1 grid-cols-5 gap-1">
            {cols.map((_, ci) => {
              const filled = marks.some(
                (m) => m.row === r && m.col === ci,
              );
              return (
                <div
                  key={ci}
                  ref={(el) => {
                    cellRefs.current.set(`${r}-${ci}`, el);
                  }}
                  className="relative grid aspect-[5/3] place-items-center rounded-[3px] border border-gray-400 bg-white"
                >
                  {filled && (
                    <span
                      className="text-[11px] font-black leading-none"
                      style={{
                        color: ORANGE,
                        textShadow: `0 0 6px ${ORANGE}88`,
                        animation: "glowIn 300ms ease-out",
                      }}
                    >
                      ✕
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function CursorIcon() {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      style={{ filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.35))" }}
    >
      <path
        d="M2 2 L2 17 L6.2 13 L9 19.5 L11.5 18.4 L8.7 12 L14 12 Z"
        fill="white"
        stroke="black"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PenIcon() {
  // Pen with tip at (2, 22) so the cursor coordinate maps to the writing point.
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      style={{
        filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.35))",
        transform: "translate(-2px, -22px)",
      }}
    >
      {/* barrel */}
      <path
        d="M17 3 L23 9 L11 21 L4 22 L5 15 Z"
        fill="#1f2937"
        stroke="#000"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* metallic collar */}
      <path
        d="M14.5 5.5 L20.5 11.5 L18.5 13.5 L12.5 7.5 Z"
        fill="#c0c4cc"
        stroke="#000"
        strokeWidth="0.8"
      />
      {/* orange tip */}
      <path
        d="M5 15 L4 22 L2 22 L4 20 Z"
        fill={ORANGE}
        stroke="#000"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

