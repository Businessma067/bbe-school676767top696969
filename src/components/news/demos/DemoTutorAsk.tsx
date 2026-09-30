import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const MATH = "#10b981";

function TutorFace({ mood }: { mood: "idle" | "happy" | "sad" }) {
  return (
    <div
      className={cn(
        "relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border shadow-sm",
        mood === "happy"
          ? "border-emerald-300 bg-emerald-50"
          : mood === "sad"
            ? "border-red-300 bg-red-50"
            : "border-border bg-card",
      )}
      aria-hidden
    >
      <svg viewBox="0 0 32 32" className="h-9 w-9 text-foreground/80">
        <rect x="5" y="9" width="22" height="16" rx="5" fill="currentColor" opacity="0.12" />
        <rect
          x="5"
          y="9"
          width="22"
          height="16"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="12" cy="16" r="1.6" fill="currentColor" />
        <circle cx="20" cy="16" r="1.6" fill="currentColor" />
        {mood === "happy" ? (
          <path
            d="M12.5 21.5c1.2 1.4 5.8 1.4 7 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        ) : mood === "sad" ? (
          <path
            d="M12.5 22.5c1.2-1.2 5.8-1.2 7 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M13 21.5h6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        )}
        <circle cx="16" cy="5.5" r="1.4" fill="currentColor" opacity="0.75" />
        <line x1="16" y1="7" x2="16" y2="9" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    </div>
  );
}

const CHOICES = [
  { letter: "A", text: "x ≥ 2 and x ≠ 5" },
  { letter: "B", text: "x > 2" },
  { letter: "C", text: "x ≠ 5" },
  { letter: "D", text: "all real x" },
];

/** Tutor bot domain quiz with face swap + progress bar. */
export function DemoTutorAsk({ caption }: DemoProps) {
  const [picked, setPicked] = useState(-1);
  const [mood, setMood] = useState<"idle" | "happy" | "sad">("idle");
  const [progress, setProgress] = useState(28);
  const [feedback, setFeedback] = useState(false);
  const [hesitate, setHesitate] = useState(-1);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(200);
    setPicked(-1);
    setMood("idle");
    setProgress(28);
    setFeedback(false);
    setHesitate(-1);
    setFade(false);
    await api.wait(180);

    await api.moveTo('[data-d="c1"]');
    await api.click();
    setHesitate(1);
    await api.wait(80);
    await api.moveTo('[data-d="c0"]');
    await api.click();
    setHesitate(-1);
    setPicked(0);
    setMood("happy");
    setFeedback(true);
    setProgress(52);
    await api.wait(80);

    await api.moveTo('[data-d="next"]');
    await api.click();
    setPicked(-1);
    setMood("idle");
    setFeedback(false);
    setProgress(52);
    await api.wait(200);
  }, []);

  return (
    <DemoShell url="/tutor-exam/mathematics" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "news-uniq-scroll mx-auto h-[380px] max-w-md overflow-y-auto transition-opacity duration-500 sm:h-[420px]",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="relative h-1.5 w-full bg-border/60">
              <div
                className="absolute inset-y-0 left-0 transition-all duration-700 ease-out"
                style={{ width: `${progress}%`, backgroundColor: MATH }}
              />
            </div>

            <div className="flex gap-3 border-b border-border p-4">
              <TutorFace mood={mood} />
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
                  Tutor Bot · Q3
                </p>
                <div className="mt-1.5 rounded-2xl rounded-tl-md border border-border bg-secondary/50 px-3.5 py-2.5 text-sm leading-snug">
                  {feedback
                    ? "Correct: domain needs x − 2 ≥ 0 and a non-zero denominator."
                    : "Read carefully. Pick the best domain for the expression."}
                </div>
              </div>
            </div>

            <div className="space-y-3 p-4">
              <div className="rounded-xl border border-dashed border-border bg-background/80 px-4 py-3">
                <p className="font-display text-base font-semibold">√(x − 2) / (x − 5)</p>
                <p className="mt-1 text-[11px] text-muted-foreground">Mathematics · Domains</p>
              </div>
              <ul className="space-y-2">
                {CHOICES.map((c, i) => {
                  const on = picked === i;
                  return (
                    <li
                      key={c.letter}
                      data-d={`c${i}`}
                      className={cn(
                        "flex items-start gap-3 rounded-xl border px-3.5 py-3 text-sm transition-all",
                        on
                          ? "border-emerald-400 bg-emerald-50"
                          : hesitate === i
                            ? "border-amber-400 bg-amber-50"
                            : "border-border bg-card",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold",
                          on
                            ? "border-emerald-500 bg-emerald-500 text-white"
                            : "border-border bg-background text-muted-foreground",
                        )}
                      >
                        {on ? <Check className="h-3.5 w-3.5" /> : c.letter}
                      </span>
                      {c.text}
                    </li>
                  );
                })}
              </ul>
              {feedback ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-taupe">
                    Reveal
                  </p>
                  <p className="mt-1 font-semibold">x ≥ 2 and x ≠ 5</p>
                  <p className="mt-1 text-[13px] text-muted-foreground">
                    The radicand must be non-negative, and the denominator cannot be zero.
                  </p>
                  <span
                    data-d="next"
                    className="mt-3 inline-flex items-center rounded-md px-4 py-2 text-xs font-semibold text-white"
                    style={{ backgroundColor: MATH }}
                  >
                    Next question →
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
