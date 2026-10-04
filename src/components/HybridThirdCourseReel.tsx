import { useEffect, useRef, useState, type ReactNode } from "react";
import mathAsset from "@/assets/math-bw.jpg.asset.json";
import economicsAsset from "@/assets/economics-bw.jpg.asset.json";
import wuAsset from "@/assets/wu-vienna.jpg.asset.json";
import hallAsset from "@/assets/exam-hall-real.png.asset.json";
import { cn } from "@/lib/utils";

const DROP_MS = 900;

const PAGES = [
  { id: "core", label: "Shared core" },
  { id: "lanes", label: "Language lanes" },
  { id: "modes", label: "Every mode" },
] as const;

/**
 * The whole green square is the scroller. Wheel or swipe moves that square
 * to the next page; the rest of the document stays put until the last page.
 */
export function HybridThirdCourseReel() {
  const [front, setFront] = useState(0);
  const [dropTo, setDropTo] = useState<number | null>(null);
  const [dir, setDir] = useState<"down" | "up">("down");
  const [reduceMotion, setReduceMotion] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef(0);
  const busyRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (dropTo === null) return;
    const id = window.setTimeout(() => {
      frontRef.current = dropTo;
      setFront(dropTo);
      setDropTo(null);
      busyRef.current = false;
    }, reduceMotion ? 0 : DROP_MS + 40);
    return () => window.clearTimeout(id);
  }, [dropTo, reduceMotion]);

  const begin = (to: number) => {
    if (busyRef.current || to === frontRef.current || to < 0 || to >= PAGES.length) return false;
    if (reduceMotion) {
      frontRef.current = to;
      setFront(to);
      return true;
    }
    busyRef.current = true;
    setDir(to > frontRef.current ? "down" : "up");
    setDropTo(to);
    return true;
  };

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    let acc = 0;
    const onWheel = (event: WheelEvent) => {
      const index = frontRef.current;
      const atStart = index === 0;
      const atEnd = index === PAGES.length - 1;
      if (event.deltaY > 0 && atEnd && !busyRef.current) return;
      if (event.deltaY < 0 && atStart && !busyRef.current) return;
      event.preventDefault();
      if (busyRef.current) return;
      acc += event.deltaY;
      if (Math.abs(acc) < 36) return;
      const next = acc > 0 ? index + 1 : index - 1;
      acc = 0;
      begin(next);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [reduceMotion]);

  const touch = useRef<{ y: number } | null>(null);

  return (
    <div
      ref={stageRef}
      className="relative h-[100svh] min-h-[36rem] w-full overflow-hidden bg-[#071612]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Why a third course"
      onTouchStart={(event) => {
        touch.current = { y: event.touches[0]?.clientY ?? 0 };
      }}
      onTouchEnd={(event) => {
        const start = touch.current;
        touch.current = null;
        if (!start) return;
        const dy = (event.changedTouches[0]?.clientY ?? start.y) - start.y;
        if (Math.abs(dy) < 48) return;
        begin(frontRef.current + (dy < 0 ? 1 : -1));
      }}
    >
        {PAGES.map((page, index) => {
          const dropping = dropTo !== null && index === front;
          const underneath = dropTo === index;
          const shift = dir === "down" ? "105%" : "-105%";
          return (
            <article
              key={page.id}
              aria-hidden={index !== front}
              className="absolute inset-0 bg-[#071612]"
              style={{
                transform: dropping ? `translate3d(0, ${shift}, 0)` : "translate3d(0, 0, 0)",
                transition: dropping ? `transform ${DROP_MS}ms cubic-bezier(0.22, 1, 0.36, 1)` : "none",
                zIndex: dropping ? 3 : underneath ? 2 : index === front ? 2 : 1,
              }}
            >
              {index === 0 ? <SharedCorePage live={index === front} /> : null}
              {index === 1 ? <LanguageLanesPage live={index === front} /> : null}
              {index === 2 ? <EveryModePage live={index === front} /> : null}
            </article>
          );
        })}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {PAGES.map((page, index) => {
            const selected = index === front;
            return (
              <button
                key={page.id}
                type="button"
                aria-label={page.label}
                aria-current={selected ? "true" : undefined}
                onClick={() => begin(index)}
                className="flex h-10 items-center"
              >
                <span
                  className={cn(
                    "relative block h-1.5 overflow-hidden rounded-full bg-white/25 transition-all",
                    selected ? "w-12" : "w-2.5",
                  )}
                >
                  {selected ? <span className="absolute inset-0 bg-teal-300" /> : null}
                </span>
              </button>
            );
          })}
        </div>
    </div>
  );
}

function PageFrame({
  step,
  kicker,
  title,
  body,
  visual,
}: {
  step: string;
  kicker: string;
  title: string;
  body: string;
  visual: ReactNode;
}) {
  return (
    <div className="relative h-full overflow-hidden bg-[#071612]">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">{visual}</div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-t from-[#071612] via-[#071612]/75 to-[#071612]/20 lg:w-[46%] lg:bg-gradient-to-r lg:from-[#071612] lg:via-[#071612]/88 lg:to-transparent" />
      <div className="relative z-10 flex h-full w-full flex-col justify-end px-6 pb-16 pt-8 sm:px-10 lg:w-[46%] lg:justify-center lg:px-14 lg:pb-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-200/55">
          Why a third course
        </p>
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-200/80">
          <span data-no-i18n>{step}</span>
          {" · "}
          {kicker}
        </p>
        <h3 className="mt-3 font-display text-[1.7rem] font-semibold leading-[1.12] text-why-us-fg sm:text-4xl">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-why-us-fg/75 sm:text-base">{body}</p>
      </div>
    </div>
  );
}

function SharedCorePage({ live }: { live: boolean }) {
  return (
    <PageFrame
      step="01"
      kicker="Shared core"
      title="One chapter counts for both papers."
      body="Mathematics and economics stay a single queue. You flip the wording between English and German. You do not restart the chapter."
      visual={
        <div className="relative h-full min-h-[16rem] overflow-hidden">
          <img src={economicsAsset.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" />
          <img
            src={mathAsset.url}
            alt=""
            className="absolute inset-y-0 left-0 hidden w-1/2 object-cover opacity-70 sm:block"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#071612]/40 via-transparent to-[#071612]/25" />
          <div className="relative flex h-full flex-col items-end justify-center gap-4 px-6 py-16 sm:px-10">
          <div className="w-full max-w-xs rounded-2xl border border-white/15 bg-black/50 p-4 backdrop-blur">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-200">One queue</p>
            <div className="mt-3 space-y-2">
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-4/5 rounded-full bg-teal-300" />
              </div>
              <div className="flex justify-between text-[11px] text-white/75">
                <span>Math</span>
                <span>shared</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/5 rounded-full bg-teal-500" />
              </div>
              <div className="flex justify-between text-[11px] text-white/75">
                <span>Economics</span>
                <span>shared</span>
              </div>
            </div>
          </div>
          <div className={cn("hybrid-flip w-full max-w-xs", !live && "[&_.hybrid-flip-inner]:![animation:none]")}>
            <div className="hybrid-flip-inner h-36">
              <div className="hybrid-flip-face flex h-full flex-col justify-between rounded-2xl border border-white/15 bg-[#10241e]/90 p-4 shadow-2xl backdrop-blur">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-200">English · BBE</p>
                <p className="font-display text-lg font-semibold text-white">Elasticity</p>
                <p className="text-xs text-white/70">How quantity answers a price change.</p>
              </div>
              <div className="hybrid-flip-face hybrid-flip-back flex h-full flex-col justify-between rounded-2xl border border-teal-200/20 bg-[#0c2a24]/95 p-4 shadow-2xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-200">Deutsch · WiSo</p>
                <p className="font-display text-lg font-semibold text-white">Elastizität</p>
                <p className="text-xs text-white/70">Wie die Menge auf den Preis reagiert.</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      }
    />
  );
}

const EN_LANE = ["demand", "margin", "surplus", "incentive", "trade-off", "cost"];
const DE_LANE = ["Nachfrage", "Marge", "Überschuss", "Anreiz", "Abwägung", "Kosten"];

function LanguageLanesPage({ live }: { live: boolean }) {
  return (
    <PageFrame
      step="02"
      kicker="Both language lanes"
      title="English and German stay in the same week."
      body="BBE still needs the English paper. WiSo still needs German reading. Hybrid keeps both lanes moving, lighter than buying a second full course."
      visual={
        <div className="relative h-full min-h-[16rem] overflow-hidden">
          <img src={wuAsset.url} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[#071612]/35" />
          <div className="absolute inset-0 grid grid-cols-2 gap-3 p-5 sm:p-8">
            <Lane title="English" words={EN_LANE} reverse={false} live={live} />
            <Lane title="Deutsch" words={DE_LANE} reverse live={live} />
          </div>
        </div>
      }
    />
  );
}

function Lane({
  title,
  words,
  reverse,
  live,
}: {
  title: string;
  words: string[];
  reverse: boolean;
  live: boolean;
}) {
  const loop = [...words, ...words];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-teal-100/20 bg-[#12352d]/90 backdrop-blur-sm">
      <p className="border-b border-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-100">
        {title}
      </p>
      <div className="h-52 overflow-hidden sm:h-64">
        <div className={cn("hybrid-lane-track", reverse && "hybrid-lane-track-reverse", !live && "![animation:none]")}>
          {loop.map((word, i) => (
            <p key={`${word}-${i}`} className="px-3 py-2.5 font-display text-base text-white sm:text-lg">
              {word}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

const MODES = [
  { time: "Morning", name: "BBE mock", note: "English clock" },
  { time: "Midday", name: "Bridge", note: "Same idea, two wordings" },
  { time: "Afternoon", name: "Mirror drill", note: "EN then DE, again" },
  { time: "Evening", name: "WiSo mock", note: "German clock" },
];

function EveryModePage({ live }: { live: boolean }) {
  return (
    <PageFrame
      step="03"
      kicker="Every mode"
      title="Both exam days, one rehearsal."
      body="Mocks, builders, flashcards, matching, and tutor stay. Hybrid adds Bridge, Mirror, Exam Flip, and a dual mock day so the two formats never blur together."
      visual={
        <div className="relative h-full min-h-[16rem] overflow-hidden">
          <img src={hallAsset.url} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#071612]/75 via-[#071612]/45 to-teal-950/25" />
          <div className="relative flex h-full flex-col justify-center gap-3 p-6 sm:p-8">
            <div className="mb-1 flex items-center gap-3 text-teal-100">
              <span className="relative grid h-9 w-9 place-items-center rounded-full border border-teal-200/40">
                <span className="absolute h-px w-3.5 bg-teal-200 hybrid-clock-hand" />
                <span className="h-1.5 w-1.5 rounded-full bg-teal-200" />
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em]">One study day</p>
            </div>
            {MODES.map((mode, i) => (
              <div
                key={mode.name}
                className={cn(
                  "hybrid-mode-chip flex items-center justify-between rounded-xl border border-white/12 bg-black/40 px-4 py-3 backdrop-blur",
                  !live && "![animation:none] opacity-100",
                )}
                style={{ animationDelay: `${i * 0.7}s` }}
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-200/80">{mode.time}</p>
                  <p className="font-display text-base font-semibold text-white">{mode.name}</p>
                </div>
                <p className="text-xs text-white/70">{mode.note}</p>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}
