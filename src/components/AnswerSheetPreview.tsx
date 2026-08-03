import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* ============================================================
   Animated Answer Sheet Preview
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

export function AnswerSheetPreview({ embedded = false }: { embedded?: boolean }) {
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

  // Helper: schedule with cleanup tracking
  const schedule = (fn: () => void, delay: number) => {
    const id = window.setTimeout(fn, delay);
    timers.current.push(id);
    return id;
  };

  /** Maps viewport coords (after CSS scale on ancestors) back to local sheet pixels. */
  const sheetScale = () => {
    const sheet = sheetRef.current;
    if (!sheet) return 1;
    const visual = sheet.getBoundingClientRect().width;
    const local = sheet.offsetWidth;
    return local > 0 && visual > 0 ? visual / local : 1;
  };

  const toLocalPoint = (el: HTMLElement, offsetX = 0, offsetY = 0) => {
    const sheet = sheetRef.current;
    if (!sheet) return { x: 0, y: 0 };
    const s = sheet.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const scale = sheetScale();
    return {
      x: (r.left - s.left) / scale + offsetX,
      y: (r.top - s.top) / scale + offsetY,
    };
  };

  const centerOf = (el: HTMLElement | null) => {
    if (!el) return { x: 0, y: 0 };
    const sheet = sheetRef.current;
    if (!sheet) return { x: 0, y: 0 };
    const s = sheet.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const scale = sheetScale();
    return {
      x: (r.left - s.left + r.width / 2) / scale,
      y: (r.top - s.top + r.height / 2) / scale,
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

      // --- Glide (as pointer) toward the signature line, THEN pick up the pen ---
      schedule(() => {
        const sig = sigRef.current;
        if (sig) {
          const p = toLocalPoint(sig, 6, sig.offsetHeight / 2);
          setCursor({ x: p.x, y: p.y });
        }
      }, t);
      t += 900; // let the smooth pointer transition finish

      // Swap to pen once already in place
      schedule(() => setCursorMode("pen"), t);
      t += 250;

      // --- Draw signature: pen traces just across the written text ---
      const SIG_TEXT_WIDTH = 92; // "John Doe" at 22px cursive ~ 92px
      const sigSteps = 60;
      for (let i = 1; i <= sigSteps; i++) {
        const p = i / sigSteps;
        schedule(() => {
          setSigProgress(p);
          const sig = sigRef.current;
          if (sig) {
            const base = toLocalPoint(sig, 6, sig.offsetHeight / 2);
            const wobble = Math.sin(p * Math.PI * 3) * 1.2;
            setCursor({ x: base.x + p * SIG_TEXT_WIDTH, y: base.y + wobble });
          }
        }, t);
        t += 45;
      }

      // Immediately drop the pen — no lingering — swap to pointer for the grid
      schedule(() => setCursorMode("pointer"), t);
      t += 50;




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
      className={cn(
        "relative w-full overflow-hidden bg-white",
        embedded ? "w-[448px]" : "max-w-md rounded-2xl shadow-2xl",
      )}
      style={
        embedded
          ? undefined
          : {
              boxShadow: `0 20px 60px -10px ${ORANGE}55, 0 0 0 2px ${ORANGE}`,
            }
      }
    >
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

    </div>
  );
}

const NEON_FRAME =
  "rounded-2xl p-px shadow-[0_20px_60px_-10px_rgba(234,106,44,0.33)]";
const NEON_BORDER_BG = { backgroundColor: ORANGE };

/** Scales the animated preview to fill its container. Neon border stays on the frame. */
export function AnswerSheetPreviewFill({
  className,
  fit = "cover",
}: {
  className?: string;
  /** cover = edge-to-edge fill; width = fit column width, full height visible */
  fit?: "cover" | "width";
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({ scale: 1, width: 0, height: 0 });

  useLayoutEffect(() => {
    const update = () => {
      const container = containerRef.current;
      const content = contentRef.current;
      if (!container || !content) return;

      const contentW = content.offsetWidth;
      const contentH = content.offsetHeight;
      if (!contentW || !contentH) return;

      if (fit === "width") {
        const cw = container.clientWidth;
        if (!cw) return;
        const scale = cw / contentW;
        setLayout({ scale, width: cw, height: contentH * scale });
        return;
      }

      const cw = container.clientWidth;
      const ch = container.clientHeight;
      if (!cw || !ch) return;

      const scale = Math.max(cw / contentW, ch / contentH);
      setLayout({ scale, width: cw, height: ch });
    };

    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [fit]);

  if (fit === "width") {
    return (
      <div ref={containerRef} className={cn("w-full", className)}>
        <div
          className={NEON_FRAME}
          style={{
            ...NEON_BORDER_BG,
            width: layout.width || undefined,
            height: layout.height || undefined,
          }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[15px] bg-white">
            <div
              className="absolute left-0 top-0 origin-top-left"
              style={{ transform: `scale(${layout.scale})` }}
            >
              <div ref={contentRef}>
                <AnswerSheetPreview embedded />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div className={cn("h-full w-full", NEON_FRAME)} style={NEON_BORDER_BG}>
        <div className="relative h-full w-full overflow-hidden rounded-[15px] bg-white">
          <div
            className="absolute left-1/2 top-1/2"
            style={{ transform: `translate(-50%, -50%) scale(${layout.scale})` }}
          >
            <div ref={contentRef}>
              <AnswerSheetPreview embedded />
            </div>
          </div>
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

