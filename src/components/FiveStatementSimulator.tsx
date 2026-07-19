import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, RotateCcw, Sparkles, X, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

// Real case pulled verbatim from economics_cases (CASE 2.01)
const CASE = {
  case_id: "CASE 2.01",
  title: "Being Part of the Economy",
  difficulty_level: 2,
  context:
    "Statements test foundational claims about participation in the economy and resource exchange.",
  statements: [
    "Businesses provide goods and services to satisfy the needs of individuals and other businesses.",
    "Individuals never exchange goods or services directly with one another outside formal business transactions.",
    "Exchange would be simpler if all desired goods were available in unlimited abundance.",
    "No participant in the economy is able to opt out of making economic decisions.",
    "Resources are described as being abundant rather than scarce in most economic contexts.",
  ],
  answer_key: [true, false, true, true, false],
  tactical_explanations: [
    "TRUE. Businesses are explicitly described as offering goods and services to satisfy needs of individuals and other businesses.",
    "FALSE. Individuals may exchange goods and services directly with each other, e.g. exchanging vegetables for wine.",
    "TRUE. Exchange would be easier if everything wanted/needed were available in abundance.",
    "TRUE. No one is explicitly able to opt out of making economic decisions.",
    "FALSE. Resources are explicitly described as scarce, not abundant.",
  ],
  // textbook passages (mirroring the Textbook Canvas panel style, with a highlight substring)
  textbook: [
    {
      body: "Businesses in a market economy exist to provide goods and services that satisfy the needs of individuals and other businesses. Every firm depends on customers, and firms themselves are customers of other firms — components, energy, logistics, professional services.",
      highlight: "provide goods and services that satisfy the needs of individuals and other businesses",
    },
    {
      body: "Direct exchange between individuals — barter, favours, informal trade — remains a basic form of economic activity. A gardener trading vegetables for a neighbour's homemade wine is a textbook example of exchange outside any formal business transaction.",
      highlight: "Direct exchange between individuals — barter, favours, informal trade — remains a basic form of economic activity",
    },
    {
      body: "Exchange arises precisely because goods are scarce. If every desired good were available in unlimited abundance, the coordination problem would disappear and exchange would be far simpler — no prices, no negotiation, no scarcity-driven trade-offs.",
      highlight: "If every desired good were available in unlimited abundance, the coordination problem would disappear and exchange would be far simpler",
    },
    {
      body: "Every household, firm, and government is embedded in the economy through the decisions it makes about consumption, production, work, and savings. No participant can genuinely opt out of making economic decisions — even inaction is itself an economic choice.",
      highlight: "No participant can genuinely opt out of making economic decisions",
    },
    {
      body: "The starting point of economics is scarcity: resources — time, labour, capital, raw materials — are limited relative to human wants. This is why households and firms must economise. Resources are therefore scarce, not abundant, in almost every relevant context.",
      highlight: "Resources are therefore scarce, not abundant, in almost every relevant context",
    },
  ],
};

type Phase = "click" | "submit" | "explain" | "hold" | "reset";

export default function FiveStatementSimulator() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [openExpl, setOpenExpl] = useState<Record<number, boolean>>({});
  const [activeExplIdx, setActiveExplIdx] = useState<number | null>(null);
  const [cursor, setCursor] = useState({ x: 20, y: 20 });
  const [clicking, setClicking] = useState(false);
  const [dim, setDim] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    const wait = (ms: number) =>
      new Promise<void>((r) => setTimeout(() => (cancelled ? null : r()), ms));

    const moveTo = (selector: string) => {
      const stage = stageRef.current;
      const el = stage?.querySelector<HTMLElement>(selector);
      if (!stage || !el) return;
      const s = stage.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      setCursor({
        x: b.left - s.left + b.width / 2,
        y: b.top - s.top + b.height / 2,
      });
    };

    const click = async () => {
      setClicking(true);
      await wait(180);
      setClicking(false);
    };

    const loop = async () => {
      while (!cancelled) {
        // Reset
        setDim(true);
        await wait(400);
        setAnswers({});
        setChecked(false);
        setOpenExpl({});
        setActiveExplIdx(null);
        setDim(false);
        await wait(500);

        // Step 1: click TRUE (checkbox) on each of the 5 statements the student thinks true
        // Real user pattern: they mark all TRUE statements (indices where answer_key is true: 0, 2, 3)
        // But to show the "trap" they also mark statement 4 (index 4) — which is FALSE — as true.
        const toMark = [0, 2, 3, 4];
        for (const i of toMark) {
          if (cancelled) return;
          moveTo(`[data-sim-check="${i}"]`);
          await wait(650);
          await click();
          setAnswers((a) => ({ ...a, [i]: true }));
          await wait(250);
        }

        // Step 2: submit
        moveTo(`[data-sim-submit]`);
        await wait(650);
        await click();
        setChecked(true);
        await wait(900);

        // Step 3: for each statement open AI textbook explanation, one-by-one
        for (let i = 0; i < CASE.statements.length; i++) {
          if (cancelled) return;
          moveTo(`[data-sim-ai="${i}"]`);
          await wait(i === 4 ? 1100 : 600); // pause longer on the trap
          await click();
          setActiveExplIdx(i);
          setOpenExpl((s) => ({ ...s, [i]: true }));
          await wait(i === 4 ? 1800 : 1200);
        }

        // Hold final diagnostic state
        await wait(3000);
      }
    };

    loop();
    return () => {
      cancelled = true;
    };
  }, []);

  const activeTextbook = activeExplIdx !== null ? CASE.textbook[activeExplIdx] : null;
  const activeCorrect = activeExplIdx !== null ? CASE.answer_key[activeExplIdx] : null;

  return (
    // Outer "video frame" — matches the Rimini video block styling above
    <div className="relative h-[560px] overflow-hidden rounded-2xl border border-border bg-card p-1 shadow-xl sm:h-[600px] lg:h-[640px]">
      <div
        ref={stageRef}
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-xl bg-background transition-opacity duration-500",
          dim ? "opacity-40" : "opacity-100",
        )}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex-1">
            <div className="mx-auto max-w-md rounded-md border border-border bg-background px-3 py-1 text-center text-[11px] text-muted-foreground">
              bbe-school.app / demo-practice / economics / {CASE.case_id.toLowerCase().replace(" ", "-")}
            </div>
          </div>
          <div className="hidden text-[10px] font-semibold tracking-widest text-primary sm:block">
            LIVE DEMO
          </div>
        </div>

        <div className="grid min-h-0 flex-1 gap-4 overflow-hidden p-3 sm:p-5 lg:grid-cols-[1.1fr_1fr] lg:gap-5">
          {/* LEFT: real CaseCard replica */}
          <article className="min-h-0 overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                Task 1
              </span>
              <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
                Difficulty {CASE.difficulty_level}
              </span>
              <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                {CASE.case_id}
              </span>
              <span className="flex-1" />
              {checked && (
                <span className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2 py-1 text-[10px] font-semibold text-muted-foreground">
                  <RotateCcw className="h-3 w-3" /> Reset task
                </span>
              )}
            </div>

            <p className="mt-2 whitespace-pre-line text-[13px] leading-relaxed text-muted-foreground">
              {CASE.context}
            </p>

            <ol className="mt-5 divide-y divide-border overflow-hidden rounded-xl border border-border bg-background">
              <li className="flex items-center gap-3 bg-secondary/60 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                <span className="w-6 text-center">#</span>
                <span className="flex-1">Statement</span>
                <span className="w-14 text-center">Correct</span>
                {checked && <span className="w-6" aria-hidden />}
              </li>

              {CASE.statements.map((stmt, i) => {
                const userAns = answers[i];
                const isChecked = userAns === true;
                const correctAns = CASE.answer_key[i];
                const isCorrect = checked && isChecked === correctAns;
                const isWrong = checked && isChecked !== correctAns;
                return (
                  <li
                    key={i}
                    className={cn(
                      "px-4 py-3 transition-colors",
                      isCorrect && "bg-emerald-500/5",
                      isWrong && "bg-destructive/5",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 text-center text-xs font-bold text-muted-foreground">
                        {i + 1}.
                      </span>
                      <p className="flex-1 text-[13px] leading-relaxed text-foreground">{stmt}</p>
                      <div className="flex w-14 justify-center">
                        <span
                          data-sim-check={i}
                          className={cn(
                            "grid h-6 w-6 place-items-center rounded border-2 transition-all",
                            isChecked
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-background",
                          )}
                        >
                          {isChecked && <Check className="h-4 w-4" strokeWidth={3} />}
                        </span>
                      </div>
                      {checked && (
                        <span
                          className={cn(
                            "grid h-6 w-6 place-items-center rounded-full",
                            isCorrect
                              ? "bg-emerald-500 text-white"
                              : "bg-destructive text-destructive-foreground",
                          )}
                        >
                          {isCorrect ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                        </span>
                      )}
                    </div>

                    {checked && (
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-foreground">
                          Explanation
                          <ChevronDown
                            className={cn(
                              "h-3.5 w-3.5 transition-transform",
                              openExpl[i] && "rotate-180",
                            )}
                          />
                        </span>
                        <span
                          data-sim-ai={i}
                          className={cn(
                            "inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-[11px] font-semibold transition-colors",
                            activeExplIdx === i
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-primary/60 bg-primary/10 text-primary",
                          )}
                        >
                          <Sparkles className="h-3 w-3" />
                          {activeExplIdx === i ? "AI textbook shown →" : "Show AI textbook explanation"}
                        </span>
                        {openExpl[i] && (
                          <p
                            className={cn(
                              "mt-1 w-full rounded-md p-3 text-xs leading-relaxed",
                              isCorrect
                                ? "bg-emerald-500/10 text-emerald-900 dark:text-emerald-200"
                                : "bg-destructive/10 text-destructive",
                            )}
                          >
                            {CASE.tactical_explanations[i]}
                          </p>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              {!checked ? (
                <span
                  data-sim-submit
                  className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm"
                >
                  Check answers
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold text-muted-foreground">
                  Score:{" "}
                  <span className="text-foreground">
                    {CASE.answer_key.filter((v, i) => (answers[i] === true) === v).length}/5
                  </span>
                </span>
              )}
            </div>
          </article>

          {/* RIGHT: AI Explanation Hub (Classic + Textbook Canvas) */}
          <aside className="min-h-0 overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                AI Explanation Engine
              </div>
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                RAG · live
              </div>
            </div>

            {activeExplIdx === null || !activeTextbook ? (
              <div className="grid h-[180px] place-items-center rounded-xl border border-dashed border-border bg-background/60 p-6 text-center sm:h-[220px]">
                <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                  After you check your answers, tap{" "}
                  <span className="font-semibold text-primary">Show AI textbook explanation</span>{" "}
                  under any statement to open the double-panel engine here.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {/* Classic Explanation */}
                <div className="rounded-xl border border-border bg-background p-3 sm:p-4">
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                      Classic Explanation
                    </span>
                    <span
                      className={cn(
                        "rounded px-1.5 py-0.5 text-[9px] font-bold tracking-wider",
                        activeCorrect
                          ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300"
                          : "bg-destructive/20 text-destructive",
                      )}
                    >
                      Answer: {activeCorrect ? "TRUE" : "FALSE"}
                    </span>
                    <span className="ml-auto text-[10px] text-muted-foreground">
                      Statement {activeExplIdx + 1}
                    </span>
                  </div>
                  <p className="mb-2 text-[11px] italic text-muted-foreground">
                    "{CASE.statements[activeExplIdx]}"
                  </p>
                  <p className="text-[12px] leading-relaxed text-foreground">
                    {CASE.tactical_explanations[activeExplIdx]}
                  </p>
                </div>

                {/* Textbook Canvas */}
                <div className="rounded-xl border border-border bg-background p-3 sm:p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                      <BookOpen className="h-3.5 w-3.5" /> Textbook Canvas
                    </div>
                    <span className="text-[10px] text-muted-foreground">
                      Ch. {activeExplIdx + 2} · p. {110 + activeExplIdx * 6}
                    </span>
                  </div>
                  <TextbookBody
                    key={activeExplIdx}
                    text={activeTextbook.body}
                    highlight={activeTextbook.highlight}
                  />
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Cursor */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-30 transition-all duration-700 ease-out"
          style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
        >
          <div className="relative -translate-x-1 -translate-y-1">
            <svg width="22" height="22" viewBox="0 0 24 24" className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
              <path
                d="M3 2 L3 18 L7.5 14 L10.5 21 L13.5 19.7 L10.5 12.8 L17 12.8 Z"
                fill="#fff"
                stroke="#111"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
            {clicking && (
              <span className="absolute -left-2 -top-2 h-8 w-8 animate-ping rounded-full bg-primary/50" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TextbookBody({ text, highlight }: { text: string; highlight: string }) {
  const idx = text.indexOf(highlight);
  if (idx < 0) {
    return <p className="text-[12px] leading-relaxed text-muted-foreground">{text}</p>;
  }
  return (
    <p className="text-[12px] leading-relaxed text-muted-foreground">
      {text.slice(0, idx)}
      <span className="neon-highlight text-foreground">{highlight}</span>
      {text.slice(idx + highlight.length)}
    </p>
  );
}
