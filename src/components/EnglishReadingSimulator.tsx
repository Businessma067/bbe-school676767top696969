import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, RotateCcw, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  practiceInlineAiButtonClass,
  practiceInlineExplanationButtonClass,
} from "@/lib/practice-button-styles";

// Excerpt of the demo Reading passage (paragraphs 1–3), matching demo-practice/english TASK 1.
const PASSAGE = `(1) For much of the late nineteenth and early twentieth centuries, the majority of the world's major economies operated under a monetary arrangement known as the classical gold standard, in which a country's currency was directly convertible into a fixed quantity of gold at a legally defined rate. Britain formally adopted the system in 1821, fixing the pound sterling at a rate of approximately 3.89 pounds per fine ounce of gold, a rate that would remain essentially unchanged for over a century. Other major powers followed at varying intervals: Germany adopted gold convertibility in 1871 following its unification and the receipt of French war reparations, while the United States, despite earlier bimetallic experiments, did not formally commit to a gold standard in law until the Gold Standard Act of 1900.

(2) Under this system, the core promise made to citizens and foreign governments alike was that paper currency and bank deposits could, in principle, be exchanged for physical gold on demand at the fixed rate. This convertibility was intended to impose automatic discipline on national monetary policy: if a country ran a persistent trade deficit, gold would flow out to pay foreign creditors, its domestic money supply would contract, prices would fall, and its exports would eventually become cheaper and more competitive again, restoring balance without any deliberate policy intervention. Economists later termed this self-correcting mechanism the "price-specie flow mechanism," and it was often cited as one of the standard's principal theoretical virtues.

(3) In practice, however, the system's stability during its so-called golden age, roughly 1870 to 1914, depended heavily on factors beyond the automatic mechanism itself. London functioned as the unquestioned financial center of the system, and the Bank of England's discount rate served as a coordinating signal that other central banks frequently followed, lending the network a degree of cooperative stability that the theoretical model alone did not guarantee. Estimates suggest that global gold production roughly tripled between 1890 and 1914, driven substantially by major discoveries in South Africa's Witwatersrand basin, which alone was estimated to account for close to 40% of total world gold output by the early 1900s, easing what might otherwise have been a persistently deflationary bias in a system reliant on a fixed physical commodity.`;

const CASE = {
  case_id: "TASK 1",
  title: "Paragraphs 1–3 — Classical Gold Standard",
  difficulty: "5/5",
  context:
    "Short statements testing precise recall of dates, figures, and mechanism, including a calculation-based trap.",
  statements: [
    "Britain fixed the pound at approximately 3.89 pounds per ounce of gold beginning in 1821.",
    "The United States formally committed to a gold standard in law before Germany did.",
    "The price-specie flow mechanism describes automatic self-correction of trade imbalances without deliberate policy intervention.",
    "If global gold production was approximately 5 million ounces in 1890, tripling by 1914 would put 1914 production at approximately 15 million ounces.",
    "The Witwatersrand basin is described as accounting for close to 40% of world gold output by the early 1900s.",
  ],
  answer_key: [true, false, true, true, true],
  tactical: [
    "TRUE. Matches the explicit date and rate given for Britain's adoption.",
    "FALSE. Germany adopted gold convertibility in 1871; the US did not formally commit in law until 1900 — the order is reversed.",
    "TRUE. Matches the explicit description of this self-correcting mechanism.",
    "TRUE. Correct arithmetic: tripling means multiplying by 3, so 5 million × 3 = 15 million.",
    "TRUE. Matches the explicit statistic given for the Witwatersrand basin's share of output.",
  ],
  highlights: [
    "Britain formally adopted the system in 1821, fixing the pound sterling at a rate of approximately 3.89 pounds per fine ounce of gold",
    "Germany adopted gold convertibility in 1871",
    'Economists later termed this self-correcting mechanism the "price-specie flow mechanism,"',
    "global gold production roughly tripled between 1890 and 1914",
    "close to 40% of total world gold output by the early 1900s",
  ],
};

export default function EnglishReadingSimulator() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [openExpl, setOpenExpl] = useState<Record<number, boolean>>({});
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [cursor, setCursor] = useState({ x: 20, y: 20 });
  const [clicking, setClicking] = useState(false);
  const [dim, setDim] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLElement | null>(null);
  const rightRef = useRef<HTMLElement | null>(null);
  const highlightRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    const MOVE_DURATION = 840;
    const CLICK_PRESS = 90;
    const CLICK_SETTLE = 90;
    const STEP_SETTLE = 208;
    const wait = (ms: number) =>
      new Promise<void>((r) => setTimeout(() => (cancelled ? null : r()), ms));

    const smoothScroll = (el: HTMLElement, to: number, duration = MOVE_DURATION) => {
      const start = el.scrollTop;
      const change = to - start;
      if (Math.abs(change) < 1) return Promise.resolve();
      return new Promise<void>((resolve) => {
        const t0 = performance.now();
        const step = (now: number) => {
          if (cancelled) return resolve();
          const t = Math.min(1, (now - t0) / duration);
          const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
          el.scrollTop = start + change * eased;
          if (t < 1) requestAnimationFrame(step);
          else resolve();
        };
        requestAnimationFrame(step);
      });
    };

    const moveTo = async (selector: string) => {
      const stage = stageRef.current;
      const el = stage?.querySelector<HTMLElement>(selector);
      if (!stage || !el) return;
      const s = stage.getBoundingClientRect();
      const eb = el.getBoundingClientRect();
      const left = leftRef.current;
      let cursorY: number;
      let scrollP = Promise.resolve();
      if (left && left.contains(el)) {
        const lb = left.getBoundingClientRect();
        const desired = left.scrollTop + (eb.top - lb.top) - lb.height / 2 + eb.height / 2;
        const clamped = Math.max(0, Math.min(desired, left.scrollHeight - left.clientHeight));
        scrollP = smoothScroll(left, clamped, MOVE_DURATION);
        const delta = clamped - left.scrollTop;
        cursorY = eb.top - s.top + eb.height / 2 - delta;
      } else {
        cursorY = eb.top - s.top + eb.height / 2;
      }
      setCursor({ x: eb.left - s.left + eb.width / 2, y: cursorY });
      await Promise.all([scrollP, wait(MOVE_DURATION)]);
      await wait(STEP_SETTLE);
    };

    const scrollRightToHighlight = async () => {
      const right = rightRef.current;
      const hl = highlightRef.current;
      if (!right || !hl) return;
      const rb = right.getBoundingClientRect();
      const hb = hl.getBoundingClientRect();
      const desired = right.scrollTop + (hb.top - rb.top) - rb.height / 2 + hb.height / 2;
      const clamped = Math.max(0, Math.min(desired, right.scrollHeight - right.clientHeight));
      await smoothScroll(right, clamped, MOVE_DURATION);
    };

    const click = async () => {
      setClicking(true);
      await wait(CLICK_PRESS);
      setClicking(false);
      await wait(CLICK_SETTLE);
    };

    const loop = async () => {
      while (!cancelled) {
        setDim(true);
        await wait(320);
        setAnswers({});
        setChecked(false);
        setOpenExpl({});
        setActiveIdx(null);
        if (rightRef.current) rightRef.current.scrollTop = 0;
        setDim(false);
        await wait(400);

        // Mark TRUEs (student marks 0,2,3,4 — misses statement 4 wait, 4 is actually TRUE)
        const toMark = [0, 2, 3, 4];
        for (const i of toMark) {
          if (cancelled) return;
          await moveTo(`[data-sim-check="${i}"]`);
          await click();
          setAnswers((a) => ({ ...a, [i]: true }));
          await wait(STEP_SETTLE);
        }

        await moveTo(`[data-sim-submit]`);
        await click();
        setChecked(true);
        await wait(880);

        for (let i = 0; i < CASE.statements.length; i++) {
          if (cancelled) return;
          await moveTo(`[data-sim-ai="${i}"]`);
          await click();
          setActiveIdx(i);
          setOpenExpl((s) => ({ ...s, [i]: true }));
          await wait(96);
          await scrollRightToHighlight();
          await wait(1280);
        }

        await wait(2080);
      }
    };
    loop();
    return () => {
      cancelled = true;
    };
  }, []);

  const activeCorrect = activeIdx !== null ? CASE.answer_key[activeIdx] : null;
  const activeHighlight = activeIdx !== null ? CASE.highlights[activeIdx] : "";

  return (
    <div className="relative h-[480px] overflow-hidden rounded-2xl border border-border bg-card p-1 shadow-xl sm:h-[520px] lg:h-[560px]">
      <div
        ref={stageRef}
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-xl bg-background transition-opacity duration-500",
          dim ? "opacity-40" : "opacity-100",
        )}
      >
        <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex-1">
            <div className="mx-auto max-w-md rounded-md border border-border bg-background px-3 py-1 text-center text-[11px] text-muted-foreground">
              bbe-school.app / demo-practice / english / reading / task-1
            </div>
          </div>
          <div className="hidden text-[10px] font-semibold tracking-widest text-primary sm:block">
            LIVE DEMO
          </div>
        </div>

        <div className="grid min-h-0 flex-1 gap-4 overflow-hidden p-3 sm:p-5 lg:grid-cols-[1.1fr_1fr] lg:gap-5">
          {/* LEFT */}
          <article
            ref={leftRef}
            className="min-h-0 overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6"
          >
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                {CASE.case_id}
              </span>
              <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-taupe">
                Difficulty {CASE.difficulty}
              </span>
              <span className="rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                Reading
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
                return (
                  <li
                    key={i}
                    className="px-4 py-3"
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
                        <span className={practiceInlineExplanationButtonClass}>
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
                          className={practiceInlineAiButtonClass(activeIdx === i)}
                        >
                          {activeIdx === i ? "Highlighted in passage →" : "Show AI text explanation"}
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
                            {CASE.tactical[i]}
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

          {/* RIGHT: Reading passage panel */}
          <aside
            ref={rightRef}
            className="min-h-0 overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                {activeIdx === null
                  ? "Reading Passage"
                  : `AI Highlight · Statement ${activeIdx + 1}`}
              </div>
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                RAG · live
              </div>
            </div>

            {activeIdx !== null && (
              <div className="mb-3 rounded-lg border border-border bg-background p-3">
                <span
                  className={cn(
                    "inline-block rounded px-1.5 py-0.5 text-[9px] font-bold tracking-wider",
                    activeCorrect
                      ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300"
                      : "bg-destructive/20 text-destructive",
                  )}
                >
                  Answer: {activeCorrect ? "TRUE" : "FALSE"}
                </span>
                <p className="mt-2 text-[11px] italic text-muted-foreground">
                  "{CASE.statements[activeIdx]}"
                </p>
              </div>
            )}

            <div className="text-[12px] leading-relaxed text-muted-foreground">
              <PassageBody
                passage={PASSAGE}
                highlight={activeHighlight}
                highlightRef={highlightRef}
              />
            </div>
          </aside>
        </div>

        {/* Cursor */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-30 transition-transform duration-[720ms] ease-in-out"
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
              <span className="absolute -left-3 -top-3 h-10 w-10 rounded-full bg-primary/60 animate-[click-ripple_0.42s_ease-out_forwards]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PassageBody({
  passage,
  highlight,
  highlightRef,
}: {
  passage: string;
  highlight: string;
  highlightRef: React.MutableRefObject<HTMLSpanElement | null>;
}) {
  const paragraphs = passage.split(/\n\n+/);
  const idx = highlight ? passage.indexOf(highlight) : -1;

  if (idx === -1 || !highlight) {
    return (
      <>
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-3 whitespace-pre-line">
            {p}
          </p>
        ))}
      </>
    );
  }

  let cursor = 0;
  return (
    <>
      {paragraphs.map((p, i) => {
        const start = cursor;
        const end = cursor + p.length;
        cursor = end + 2;
        if (idx >= start && idx < end) {
          const rel = idx - start;
          const before = p.slice(0, rel);
          const match = p.slice(rel, rel + highlight.length);
          const after = p.slice(rel + highlight.length);
          return (
            <p key={i} className="mb-3 whitespace-pre-line">
              {before}
              <span ref={highlightRef} className="neon-highlight text-foreground">
                {match}
              </span>
              {after}
            </p>
          );
        }
        return (
          <p key={i} className="mb-3 whitespace-pre-line">
            {p}
          </p>
        );
      })}
    </>
  );
}
