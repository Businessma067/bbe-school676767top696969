import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { WISO_EXAM_FORMAT } from "@/config/wiso-exam-hub";

const SLIDES = [
  { id: "places", label: "Places", short: "Places" },
  { id: "german", label: "German", short: "German" },
  { id: "dach", label: "DACH", short: "DACH" },
] as const;

/**
 * WiSo-home counterpart to BBE's WhyUsSlider: three swipeable pages with
 * animated stats under the indigo Why Choose Us palette.
 */
export function WisoDachAdvantageSlider() {
  const [active, setActive] = useState(0);
  const total = SLIDES.length;
  const goTo = (index: number) => setActive(((index % total) + total) % total);
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = rootRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const visible = rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4;
      if (!visible) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const touch = useRef<{ x: number; y: number } | null>(null);

  return (
    <div
      ref={rootRef}
      className="relative w-full overflow-hidden pb-12 pt-2 sm:pb-14 sm:pt-4"
    >
      {/* Named tabs */}
      <div className="relative z-20 mx-auto mb-2 flex max-w-xl justify-center px-4 sm:mb-4 sm:px-6">
        <div
          role="tablist"
          aria-label="Why WiSo slides"
          className="inline-flex w-full max-w-md items-center gap-1 rounded-full border border-white/12 bg-black/35 p-1.5 backdrop-blur-md sm:gap-1.5 sm:p-2"
        >
          {SLIDES.map((slide, i) => {
            const selected = active === i;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`wiso-slide-${slide.id}`}
                id={`wiso-tab-${slide.id}`}
                onClick={() => goTo(i)}
                className={cn(
                  "relative flex-1 rounded-full px-3 py-2.5 text-center text-xs font-semibold tracking-wide transition-all duration-300 sm:px-4 sm:py-3 sm:text-sm",
                  selected
                    ? "bg-indigo-500/90 text-white shadow-[0_0_12px_-6px_rgba(99,102,241,0.35)]"
                    : "text-why-us-fg/55 hover:bg-white/5 hover:text-why-us-fg/85",
                )}
              >
                <span className="sm:hidden">{slide.short}</span>
                <span className="hidden sm:inline">{slide.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Side arrows from sm up — phones use tabs, dots, and swipe */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-why-us-fg backdrop-blur-sm transition-all hover:border-indigo-400/50 hover:bg-black/70 hover:text-white sm:left-6 sm:flex sm:h-12 sm:w-12"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-why-us-fg backdrop-blur-sm transition-all hover:border-indigo-400/50 hover:bg-black/70 hover:text-white sm:right-6 sm:flex sm:h-12 sm:w-12"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 sm:bottom-6 sm:gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to ${slide.label}`}
            onClick={() => goTo(i)}
            className="flex h-10 w-10 items-center justify-center"
          >
            <span
              className={cn(
                "rounded-full transition-all duration-300",
                active === i ? "h-2 w-8 bg-indigo-400" : "h-2 w-2 bg-primary-foreground/30",
              )}
            />
          </button>
        ))}
      </div>

      <div
        className="relative z-10 w-full overflow-hidden"
        onTouchStart={(e) => {
          const t = e.touches[0];
          touch.current = { x: t.clientX, y: t.clientY };
        }}
        onTouchEnd={(e) => {
          const start = touch.current;
          touch.current = null;
          if (!start) return;
          const t = e.changedTouches[0];
          const dx = t.clientX - start.x;
          const dy = t.clientY - start.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
            dx < 0 ? next() : prev();
          }
        }}
      >
        <div
          className="flex w-full"
          style={{
            transform: `translate3d(-${active * 100}%, 0, 0)`,
            transitionProperty: "transform",
            transitionDuration: "900ms",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <WhySlide
            id="wiso-slide-places"
            labelledBy="wiso-tab-places"
            step="01"
            title="Places on the same campus"
            active={active === 0}
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              <RingMetric
                value={String(WISO_EXAM_FORMAT.places)}
                label="WiSo places"
                sublabel="German-taught bachelor intake"
                variant="accent"
                percent={1}
                glow
              />
              <RingMetric
                value="240"
                label="BBE places"
                sublabel="English-taught track on the same campus"
                variant="muted"
                percent={240 / WISO_EXAM_FORMAT.places}
              />
            </div>
            <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-semibold leading-relaxed text-why-us-fg sm:text-xl">
              More seats do not make the paper gentle. They do make WiSo a real scale path onto the
              same WU campus.
            </p>
          </WhySlide>

          <WhySlide
            id="wiso-slide-german"
            labelledBy="wiso-tab-german"
            step="02"
            title="German is not only an exam section"
            active={active === 1}
          >
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <p className="text-base leading-relaxed text-why-us-fg/75 sm:text-[17px]">
                If you stay in Austria or anywhere in the DACH region after graduation, strong German
                is part of ordinary working life. Offices, clients, and public services still run on
                it. Starting that work now for the Aufnahmeprüfung is early practice for the country
                you are walking into, not a side quest you can postpone forever.
              </p>
              <LanguageBars />
            </div>
          </WhySlide>

          <WhySlide
            id="wiso-slide-dach"
            labelledBy="wiso-tab-dach"
            step="03"
            title="Start German on a hard deadline"
            active={active === 2}
          >
            <p className="max-w-3xl text-base leading-relaxed text-why-us-fg/75 sm:text-[17px]">
              BBE keeps English as the language pillar. WiSo asks you to build German under exam
              pressure instead. That looks harder on paper, and it is harder in the hall, but it is
              also closer to how life after WU often looks if you stay in Vienna or move across the
              DACH job market. Using the Aufnahmeprüfung as the first hard deadline is usually cleaner
              than waiting until lectures begin.
            </p>
            <DachTicker />
          </WhySlide>
        </div>
      </div>
    </div>
  );
}

function WhySlide({
  id,
  labelledBy,
  step,
  title,
  children,
  active,
}: {
  id: string;
  labelledBy: string;
  step: string;
  title: string;
  children: ReactNode;
  active: boolean;
}) {
  return (
    <section
      id={id}
      role="tabpanel"
      aria-labelledby={labelledBy}
      aria-hidden={!active}
      className="relative flex w-full min-w-full flex-none items-center justify-center px-3 py-6 sm:px-10 sm:py-10 lg:px-16"
    >
      <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/12 bg-why-us-card p-4 shadow-[0_16px_48px_-36px_rgba(99,102,241,0.18)] sm:p-10 lg:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-indigo-500/[0.06] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-10 h-48 w-48 rounded-full bg-indigo-400/[0.04] blur-3xl"
        />
        <div className="relative mb-6 border-b border-white/12 pb-4 sm:mb-8 sm:pb-5">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-indigo-300/70">
            <span data-no-i18n>{step}</span>
            {" · "}
            Why WiSo
          </p>
          <h3 className="font-display text-xl font-semibold text-why-us-fg sm:text-3xl">{title}</h3>
        </div>
        <div className="relative">{children}</div>
      </div>
    </section>
  );
}

function RingMetric({
  value,
  label,
  sublabel,
  variant,
  percent,
  glow,
}: {
  value: string;
  label: string;
  sublabel: string;
  variant: "muted" | "accent";
  percent: number;
  glow?: boolean;
}) {
  const isAccent = variant === "accent";
  const containerRef = useRef<HTMLDivElement>(null);
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const [animatedNumber, setAnimatedNumber] = useState(0);
  const hasAnimated = useRef(false);

  const numericMatch = value.match(/[0-9]*\.?[0-9]+/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = value.replace(/[0-9]*\.?[0-9]+/, "");
  const decimals = value.includes(".") ? value.split(".")[1].replace(/[^0-9]/g, "").length : 0;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1600;
          const start = performance.now();
          const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
          const tick = (now: number) => {
            const raw = Math.min((now - start) / duration, 1);
            const eased = easeOutCubic(raw);
            setAnimatedPercent(eased * percent);
            setAnimatedNumber(eased * targetNumber);
            if (raw < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [percent, targetNumber]);

  // Stroke rings stay filled at 100% (path arcs collapse at exactly 360°).
  const trackR = 70;
  const circumference = 2 * Math.PI * trackR;
  const pct = Math.max(0, Math.min(1, animatedPercent));
  const dashOffset = circumference * (1 - pct);

  const displayValue =
    decimals > 0
      ? `${animatedNumber.toFixed(decimals)}${suffix}`
      : `${Math.round(animatedNumber).toLocaleString("en-US")}${suffix}`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col items-center rounded-2xl border border-white/10 bg-why-us-card px-6 py-10 text-center sm:px-8 sm:py-12",
        glow && "why-us-glow why-us-pulse",
      )}
    >
      <div className="relative h-44 w-44">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 180 180" aria-hidden>
          <circle
            cx="90"
            cy="90"
            r={trackR}
            fill="none"
            stroke="currentColor"
            strokeWidth="24"
            className="text-white/15"
          />
          <circle
            cx="90"
            cy="90"
            r={trackR}
            fill="none"
            stroke="currentColor"
            strokeWidth="24"
            strokeLinecap="butt"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            className={isAccent ? "text-caramel-deep" : "text-why-us-fg/45"}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center" data-no-i18n>
          <span
            className={cn(
              "font-display font-bold tabular-nums leading-none tracking-tight",
              displayValue.length >= 5 ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl",
              isAccent ? "text-caramel-deep" : "text-why-us-fg/60",
            )}
          >
            {displayValue}
          </span>
        </div>
      </div>
      <h3 className="mt-6 font-display text-lg font-semibold text-why-us-fg">{label}</h3>
      <p className="mt-1 text-sm text-why-us-fg/60">{sublabel}</p>
    </div>
  );
}

function LanguageBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const dur = 1500;
          const t0 = performance.now();
          const ease = (t: number) => 1 - Math.pow(1 - t, 3);
          const tick = (now: number) => {
            const r = Math.min((now - t0) / dur, 1);
            setProgress(ease(r));
            if (r < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.55 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const rows = [
    { label: "Exam reading & stems", pct: 1, accent: true },
    { label: "Office & client German", pct: 0.92, accent: true },
    { label: "English-only classroom path", pct: 0.38, accent: false },
  ];

  return (
    <div ref={ref} className="rounded-xl border border-white/10 bg-black/40 p-6 sm:p-8">
      <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-why-us-fg/50">
        Where German shows up
      </p>
      <div className="space-y-5">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="mb-2 flex items-center justify-between gap-3 text-xs sm:text-sm">
              <span className="font-medium text-why-us-fg/80">{row.label}</span>
              <span className="tabular-nums text-why-us-fg/55" data-no-i18n>
                {Math.round(row.pct * 100 * progress)}%
              </span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
              <div
                className={cn(
                  "h-full rounded-full",
                  row.accent ? "bg-caramel-deep" : "bg-white/30",
                )}
                style={{ width: `${row.pct * 100 * progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 border-t border-white/10 pt-4 text-center text-xs text-why-us-fg/55">
        Exam German is the first hard deadline. Work German is the longer one.
      </p>
    </div>
  );
}

function DachTicker() {
  const regions = [
    {
      code: "AT" as const,
      name: "Austria",
      note: "Vienna campus life + local firms",
    },
    {
      code: "DE" as const,
      name: "Germany",
      note: "DACH recruiting reach",
    },
    {
      code: "CH" as const,
      name: "Switzerland",
      note: "Cross-border career options",
    },
  ];

  return (
    <div className="mt-8 rounded-xl border border-white/12 bg-black/40 px-4 py-6 sm:px-8 sm:py-8">
      <p className="mb-6 text-center text-sm font-medium text-why-us-fg/55">DACH is where it pays off</p>
      <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
        {regions.map((r) => (
          <div
            key={r.code}
            className="group flex flex-col items-center rounded-xl border border-white/12 bg-gradient-to-b from-white/[0.04] to-transparent px-4 py-6 text-center transition hover:border-white/20 hover:from-white/[0.07]"
          >
            <span className="relative mb-3 block h-11 w-[4.25rem] overflow-hidden rounded-sm shadow-[0_6px_16px_-8px_rgba(0,0,0,0.55)] transition duration-300 group-hover:scale-[1.02] sm:h-12 sm:w-[4.75rem]">
              <DachFlag code={r.code} />
            </span>
            <span className="text-sm font-semibold text-why-us-fg">{r.name}</span>
            <span className="mt-1 text-xs leading-relaxed text-why-us-fg/55">{r.note}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 border-t border-white/12 pt-4 text-center text-xs text-why-us-fg/55">
        Serious German now beats catching up after lectures start.
      </p>
    </div>
  );
}

function DachFlag({ code }: { code: "AT" | "DE" | "CH" }) {
  if (code === "AT") {
    return (
      <svg viewBox="0 0 21 14" className="h-full w-full" aria-hidden role="img">
        <title>Austria</title>
        <rect width="21" height="14" fill="#ED2939" />
        <rect y="4.67" width="21" height="4.66" fill="#fff" />
      </svg>
    );
  }
  if (code === "DE") {
    return (
      <svg viewBox="0 0 21 14" className="h-full w-full" aria-hidden role="img">
        <title>Germany</title>
        <rect width="21" height="14" fill="#FFCC00" />
        <rect width="21" height="4.67" fill="#000" />
        <rect y="4.67" width="21" height="4.66" fill="#DD0000" />
      </svg>
    );
  }
  // Swiss flag is square; center it in the shared rectangular frame.
  return (
    <svg viewBox="0 0 21 14" className="h-full w-full" aria-hidden role="img">
      <title>Switzerland</title>
      <rect width="21" height="14" fill="#FF0000" />
      <g transform="translate(3.5 0)">
        <rect width="14" height="14" fill="#FF0000" />
        <rect x="5.5" y="2.5" width="3" height="9" fill="#fff" />
        <rect x="2.5" y="5.5" width="9" height="3" fill="#fff" />
      </g>
    </svg>
  );
}
