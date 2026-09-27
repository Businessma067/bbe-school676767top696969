import { useState } from "react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const MATH = "#10b981";

const CASES = [
  { id: "neg", label: "Δ < 0", detail: "no real roots" },
  { id: "zero", label: "Δ = 0", detail: "one real root" },
  { id: "pos", label: "Δ > 0", detail: "two real roots" },
];

/**
 * Algebra formula card on a ruled grid — not the economics chip deck.
 * Flip Δ, light the three cases, mark Know, then reveal vertex form.
 */
export function DemoMathDelta({ caption }: DemoProps) {
  const [flipped, setFlipped] = useState(false);
  const [idx, setIdx] = useState(0);
  const [know, setKnow] = useState(false);
  const [lit, setLit] = useState(-1);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(220);
    setFlipped(false);
    setIdx(0);
    setKnow(false);
    setLit(-1);
    setFade(false);
    await api.wait(460);

    await api.moveTo('[data-d="card"]');
    await api.click();
    setFlipped(true);
    await api.wait(760);
    for (let i = 0; i < CASES.length; i++) {
      if (api.cancelled()) return;
      await api.moveTo(`[data-d="case${i}"]`);
      await api.click();
      setLit(i);
      await api.wait(220);
    }
    await api.wait(160);

    await api.moveTo('[data-d="know"]');
    await api.click();
    setKnow(true);
    await api.wait(520);
    setIdx(1);
    setFlipped(false);
    setKnow(false);
    setLit(-1);
    await api.wait(480);

    await api.moveTo('[data-d="card"]');
    await api.click();
    setFlipped(true);
    await api.wait(1200);
  }, []);

  return (
    <DemoShell url="/flashcards/mathematics" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "mx-auto flex h-[380px] max-w-md flex-col justify-center transition-opacity duration-500 sm:h-[420px]",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p
                className="text-[10px] font-semibold uppercase tracking-widest"
                style={{ color: MATH }}
              >
                Subject room · Algebra
              </p>
              <h3 className="font-display text-lg font-bold">Formula cards</h3>
            </div>
            <span className="font-mono text-xs text-muted-foreground">{idx + 1} / 32</span>
          </div>

          <div data-d="card" className={cn("news-uniq-flip-stage", flipped && "is-flipped")}>
            <div className="news-uniq-flip-inner" style={{ minHeight: 210 }}>
              <div
                className="news-uniq-flip-face news-uniq-flip-front overflow-hidden rounded-2xl border border-emerald-200 shadow-sm"
                style={{
                  backgroundImage:
                    "linear-gradient(#10b98114 1px, transparent 1px), linear-gradient(90deg, #10b98114 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                  backgroundColor: "#f3fbf7",
                }}
              >
                <div className="flex h-full flex-col items-center justify-center p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-800">
                    {idx === 0 ? "Quadratic" : "Parabola"}
                  </p>
                  <p className="mt-3 font-display text-3xl font-bold tracking-tight">
                    {idx === 0 ? "Δ = b² − 4ac" : "y = a(x − h)² + k"}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">Tap the grid to flip</p>
                </div>
              </div>
              <div className="news-uniq-flip-face news-uniq-flip-back rounded-2xl border border-emerald-300 bg-card p-5 shadow-sm">
                {idx === 0 ? (
                  <div>
                    <p className="font-display text-sm font-bold">Discriminant cases</p>
                    <ul className="mt-3 space-y-2">
                      {CASES.map((c, i) => (
                        <li
                          key={c.id}
                          data-d={`case${i}`}
                          className={cn(
                            "flex items-center justify-between rounded-lg border px-3 py-2 text-sm transition-colors duration-300",
                            lit >= i
                              ? "border-emerald-400 bg-emerald-50"
                              : "border-border bg-background text-muted-foreground",
                          )}
                        >
                          <span className="font-mono font-semibold">{c.label}</span>
                          <span>{c.detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <Parabola />
                    <p className="mt-3 text-sm leading-relaxed">
                      Vertex at <span className="font-mono font-semibold">(h, k)</span>. Sign of a
                      opens the parabola up or down.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <span
            data-d="know"
            className={cn(
              "mt-3 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white transition-opacity",
              know ? "opacity-100" : "opacity-90",
            )}
            style={{ backgroundColor: MATH }}
          >
            {know ? "Known · next formula" : "Know"}
          </span>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}

function Parabola() {
  return (
    <svg viewBox="0 0 120 64" className="h-16 w-28" aria-hidden>
      <line x1="8" y1="56" x2="112" y2="56" stroke="#10b981" strokeWidth="1.2" />
      <line x1="60" y1="6" x2="60" y2="60" stroke="#10b981" strokeWidth="1.2" />
      <path d="M16 52 Q60 4 104 52" fill="none" stroke="#047857" strokeWidth="2.2" />
      <circle cx="60" cy="16" r="3" fill="#E85D3A" />
    </svg>
  );
}
