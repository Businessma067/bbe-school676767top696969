import { useEffect, useState } from "react";

type Statement = {
  id: number;
  text: string;
  answer: "TRUE" | "FALSE";
  proof: string;
  textbook: string;
  highlightRange: [number, number]; // char indices to highlight in textbook
  explanation: string;
  trap?: boolean;
};

const STATEMENTS: Statement[] = [
  {
    id: 1,
    text: "In a perfectly competitive market, individual firms are price takers because no single seller can influence the market price.",
    answer: "TRUE",
    proof: "Firms in perfect competition are price takers.",
    textbook:
      "Under perfect competition each firm supplies a negligible share of total output, so no single seller can influence the market price. Firms are therefore price takers who accept the equilibrium price determined by market supply and demand.",
    highlightRange: [72, 154],
    explanation:
      "Correct. The definition of perfect competition explicitly excludes any single firm having market power.",
  },
  {
    id: 2,
    text: "An increase in the price of a substitute good will shift the demand curve for the original good to the left.",
    answer: "FALSE",
    proof: "Substitute price ↑ → demand for the other good ↑ (shifts right).",
    textbook:
      "When two goods are substitutes, a rise in the price of one good increases the demand for the other. The demand curve of the other good shifts to the RIGHT, not to the left. A leftward shift corresponds to complementary goods.",
    highlightRange: [63, 158],
    explanation:
      "Trick sign flip. Substitutes move together in demand — the shift is to the right.",
  },
  {
    id: 3,
    text: "The marginal cost curve intersects the average total cost curve at the minimum point of the ATC.",
    answer: "TRUE",
    proof: "MC crosses ATC exactly at min(ATC).",
    textbook:
      "By construction, whenever marginal cost lies below average total cost the average is falling; when marginal cost lies above, the average is rising. Therefore the MC curve must intersect the ATC curve precisely at the minimum point of ATC.",
    highlightRange: [170, 235],
    explanation: "Standard cost-curve geometry. Always true by definition of averages.",
  },
  {
    id: 4,
    text: "A monopolist always produces the socially optimal quantity where price equals marginal cost.",
    answer: "FALSE",
    proof: "Monopolist sets MR = MC, with P > MC → deadweight loss.",
    textbook:
      "A profit-maximising monopolist chooses output where marginal revenue equals marginal cost. Because the monopolist faces a downward-sloping demand curve, price exceeds marginal revenue and therefore exceeds marginal cost. Output is below the socially optimal level, creating deadweight loss.",
    highlightRange: [96, 218],
    explanation: "P > MC under monopoly — output is under-supplied vs. the social optimum.",
  },
  {
    id: 5,
    text: "If GDP grows by 4% and the population grows by 2%, the standard of living has necessarily improved.",
    answer: "FALSE",
    proof: "GDP per capita ↑ ≠ living standard ↑ (distribution, inflation, composition ignored).",
    textbook:
      "Real GDP per capita rising is a necessary but NOT sufficient condition for a rising standard of living. The measure ignores income distribution, non-market activity, environmental costs, and the composition of output. Examiners frequently exploit the word 'necessarily' to convert a partially true idea into a false statement.",
    highlightRange: [0, 90],
    explanation:
      "The Professor's Trap: the word 'necessarily' invalidates the claim. Per-capita GDP growth does not guarantee welfare gains — distribution, inflation, and composition matter.",
    trap: true,
  },
];

const HOLD_MS = 3000;

export default function FiveStatementSimulator() {
  const [active, setActive] = useState<number>(0); // index in STATEMENTS
  const [clicked, setClicked] = useState<Set<number>>(new Set());
  const [choice, setChoice] = useState<Record<number, "TRUE" | "FALSE">>({});
  const [cursorTarget, setCursorTarget] = useState<{ x: number; y: number }>({ x: 8, y: 8 });
  const [clicking, setClicking] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [phase, setPhase] = useState<"idle" | "moving" | "clicked" | "highlight">("idle");

  useEffect(() => {
    let cancelled = false;

    const wait = (ms: number) =>
      new Promise<void>((r) => setTimeout(() => (cancelled ? null : r()), ms));

    const moveTo = (id: number) => {
      const el = document.querySelector<HTMLElement>(
        `[data-sim-btn="${id}-${STATEMENTS[id - 1].answer}"]`,
      );
      const stage = document.querySelector<HTMLElement>("[data-sim-stage]");
      if (!el || !stage) return;
      const s = stage.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      setCursorTarget({
        x: b.left - s.left + b.width / 2,
        y: b.top - s.top + b.height / 2,
      });
    };

    const run = async () => {
      while (!cancelled) {
        setResetting(false);
        setClicked(new Set());
        setChoice({});
        setActive(0);
        await wait(400);

        for (let i = 0; i < STATEMENTS.length; i++) {
          if (cancelled) return;
          const st = STATEMENTS[i];
          setActive(i);
          setPhase("moving");
          // let DOM paint the newly-active row
          await wait(60);
          moveTo(st.id);
          await wait(st.trap ? 1400 : 700);
          setClicking(true);
          setPhase("clicked");
          await wait(180);
          setClicking(false);
          setChoice((c) => ({ ...c, [st.id]: st.answer }));
          setClicked((s) => new Set([...s, st.id]));
          setPhase("highlight");
          await wait(st.trap ? 1600 : 1000);
        }

        await wait(HOLD_MS);
        setResetting(true);
        await wait(600);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      data-sim-stage
      className={`relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f17] shadow-2xl transition-opacity duration-500 ${
        resetting ? "opacity-40" : "opacity-100"
      }`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#111826] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-4 flex-1">
          <div className="mx-auto max-w-md rounded-md bg-[#1a2233] px-3 py-1 text-center text-[11px] text-white/50">
            bbe-school.app / demo-practice / economics / case-14
          </div>
        </div>
        <div className="hidden text-[10px] font-medium tracking-widest text-caramel-deep sm:block">
          LIVE SIMULATION
        </div>
      </div>

      {/* Split panels */}
      <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
        {/* Left: statements */}
        <div className="border-b border-white/10 bg-[#0d1320] p-4 sm:p-6 lg:border-b-0 lg:border-r">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Case 14 · Microeconomics
              </div>
              <div className="mt-1 font-display text-sm font-semibold text-white sm:text-base">
                Mark each statement TRUE or FALSE
              </div>
            </div>
            <div className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/60">
              {clicked.size}/5
            </div>
          </div>

          <ol className="space-y-2.5">
            {STATEMENTS.map((s, i) => {
              const isActive = active === i && !resetting;
              const isDone = clicked.has(s.id);
              const picked = choice[s.id];
              return (
                <li
                  key={s.id}
                  className={`rounded-lg border p-3 transition-all duration-300 ${
                    isActive
                      ? "border-caramel-deep/60 bg-caramel-deep/5 shadow-[0_0_0_1px_rgba(232,93,58,0.35)]"
                      : isDone
                        ? "border-white/10 bg-white/[0.03]"
                        : "border-white/5 bg-white/[0.02] opacity-70"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-md text-[11px] font-bold ${
                        isDone
                          ? "bg-caramel-deep text-white"
                          : "bg-white/10 text-white/70"
                      }`}
                    >
                      {s.id}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[12px] leading-snug text-white/85 sm:text-[13px]">
                        {s.text}
                      </p>
                      <div className="mt-2 flex gap-2">
                        {(["TRUE", "FALSE"] as const).map((opt) => {
                          const isPicked = picked === opt;
                          const isCorrect = s.answer === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              data-sim-btn={`${s.id}-${opt}`}
                              className={`rounded-md border px-2.5 py-1 text-[10px] font-semibold tracking-wide transition-all ${
                                isPicked
                                  ? isCorrect
                                    ? "border-emerald-400/60 bg-emerald-400/15 text-emerald-300"
                                    : "border-red-400/60 bg-red-400/15 text-red-300"
                                  : "border-white/10 bg-white/[0.04] text-white/60"
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Right: AI Explanation Hub */}
        <div className="relative bg-[#0a0f1a] p-4 sm:p-6">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-caramel-deep">
              AI Explanation Hub
            </div>
            <div className="flex items-center gap-1 text-[10px] text-white/40">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              RAG · live
            </div>
          </div>

          <ExplanationPanel
            active={STATEMENTS[active]}
            visible={!resetting && (phase === "highlight" || clicked.has(STATEMENTS[active].id))}
          />
        </div>
      </div>

      {/* Cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-30 transition-all duration-700 ease-out"
        style={{
          transform: `translate(${cursorTarget.x}px, ${cursorTarget.y}px)`,
        }}
      >
        <div className="relative -translate-x-1 -translate-y-1">
          <svg width="22" height="22" viewBox="0 0 24 24" className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            <path
              d="M3 2 L3 18 L7.5 14 L10.5 21 L13.5 19.7 L10.5 12.8 L17 12.8 Z"
              fill="#fff"
              stroke="#0a0f1a"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
          {clicking && (
            <span className="absolute -left-2 -top-2 h-8 w-8 animate-ping rounded-full bg-caramel-deep/60" />
          )}
        </div>
      </div>
    </div>
  );
}

function ExplanationPanel({
  active,
  visible,
}: {
  active: Statement;
  visible: boolean;
}) {
  const [beforeHi, hi, afterHi] = splitHighlight(active.textbook, active.highlightRange);

  return (
    <div
      className={`transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      {/* Classic Explanation Card */}
      <div
        className={`rounded-lg border p-3 sm:p-4 ${
          active.trap
            ? "border-caramel-deep/50 bg-gradient-to-br from-caramel-deep/10 to-transparent"
            : "border-white/10 bg-white/[0.03]"
        }`}
      >
        <div className="mb-1.5 flex items-center gap-2">
          <span
            className={`rounded px-1.5 py-0.5 text-[9px] font-bold tracking-wider ${
              active.answer === "TRUE"
                ? "bg-emerald-400/20 text-emerald-300"
                : "bg-red-400/20 text-red-300"
            }`}
          >
            {active.answer}
          </span>
          {active.trap && (
            <span className="rounded bg-caramel-deep/25 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-caramel-deep">
              PROFESSOR'S TRAP
            </span>
          )}
          <span className="text-[10px] text-white/40">Task {active.id}</span>
        </div>
        <p className="text-[12px] leading-relaxed text-white/85 sm:text-[13px]">
          {active.explanation}
        </p>
      </div>

      {/* Textbook Canvas */}
      <div className="mt-3 rounded-lg border border-white/10 bg-[#111826] p-3 sm:p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
            Textbook Canvas · Mankiw, ch. {active.id + 3}
          </div>
          <div className="text-[10px] text-white/30">p. {120 + active.id * 7}</div>
        </div>
        <p className="relative text-[12px] leading-relaxed text-white/70 sm:text-[13px]">
          {beforeHi}
          <span className="relative inline">
            <span className="relative z-10">{hi}</span>
            {visible && (
              <span
                key={active.id}
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 -mx-0.5 rounded-sm bg-caramel-deep/45 shadow-[0_0_14px_rgba(232,93,58,0.55)]"
                style={{
                  animation: "sim-highlight-sweep 1s ease-out forwards",
                }}
              />
            )}
          </span>
          {afterHi}
        </p>
        <div className="mt-3 flex items-center gap-2 border-t border-white/5 pt-2 text-[10px] text-white/50">
          <span className="rounded bg-white/5 px-1.5 py-0.5">Proof</span>
          <span className="truncate">{active.proof}</span>
        </div>
      </div>
    </div>
  );
}

function splitHighlight(text: string, range: [number, number]): [string, string, string] {
  const [a, b] = range;
  const clampA = Math.max(0, Math.min(text.length, a));
  const clampB = Math.max(clampA, Math.min(text.length, b));
  return [text.slice(0, clampA), text.slice(clampA, clampB), text.slice(clampB)];
}
