import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { WISO_EXAM_FORMAT } from "@/config/wiso-exam-hub";

/**
 * WiSo-home counterpart to BBE's WhyUsSlider: three swipeable pages with
 * animated stats under the indigo Why Choose Us palette.
 */
export function WisoDachAdvantageSlider() {
  const [active, setActive] = useState(0);
  const total = 3;
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
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-why-us-fg backdrop-blur-sm transition-all hover:border-white/40 hover:bg-black/70 hover:text-white sm:left-6 sm:h-12 sm:w-12"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-why-us-fg backdrop-blur-sm transition-all hover:border-white/40 hover:bg-black/70 hover:text-white sm:right-6 sm:h-12 sm:w-12"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 sm:bottom-6 sm:gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className="flex h-10 w-10 items-center justify-center"
          >
            <span
              className={cn(
                "rounded-full transition-all duration-300",
                active === i ? "h-2 w-8 bg-white" : "h-2 w-2 bg-primary-foreground/30",
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
          <WhySlide title="Places on the same campus">
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

          <WhySlide title="German is not only an exam section">
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

          <WhySlide title="Start German on a hard deadline">
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

function WhySlide({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="relative flex w-full min-w-full flex-none items-center justify-center px-4 py-8 sm:px-10 sm:py-10 lg:px-16">
      <div className="relative w-full max-w-6xl rounded-2xl border border-white/12 bg-why-us-card p-5 sm:p-10 lg:p-12">
        <div className="mb-6 border-b border-white/12 pb-4 sm:mb-8 sm:pb-5">
          <h3 className="font-display text-xl font-semibold text-why-us-fg sm:text-3xl">{title}</h3>
        </div>
        {children}
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

  const outerR = 82;
  const innerR = 58;
  const cx = 90;
  const cy = 90;
  const angle = Math.max(0, Math.min(1, animatedPercent)) * 360;

  function polar(r: number, deg: number) {
    const rad = ((deg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  const startOuter = polar(outerR, 0);
  const endOuter = polar(outerR, angle);
  const startInner = polar(innerR, 0);
  const endInner = polar(innerR, angle);
  const largeArc = angle > 180 ? 1 : 0;

  const filledPath = [
    `M ${startOuter.x} ${startOuter.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${endOuter.x} ${endOuter.y}`,
    `L ${endInner.x} ${endInner.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${startInner.x} ${startInner.y}`,
    "Z",
  ].join(" ");

  const fullCircle = [
    `M ${cx} ${cy - outerR}`,
    `A ${outerR} ${outerR} 0 1 1 ${cx} ${cy + outerR}`,
    `A ${outerR} ${outerR} 0 1 1 ${cx} ${cy - outerR}`,
    `L ${cx} ${cy - innerR}`,
    `A ${innerR} ${innerR} 0 1 0 ${cx} ${cy + innerR}`,
    `A ${innerR} ${innerR} 0 1 0 ${cx} ${cy - innerR}`,
    "Z",
  ].join(" ");

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
        <svg className="h-full w-full" viewBox="0 0 180 180">
          <path d={fullCircle} className="fill-white/15" />
          <path d={filledPath} className="ring-animate-fill fill-caramel-deep" />
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
    { code: "AT", name: "Austria", note: "Vienna campus life + local firms" },
    { code: "DE", name: "Germany", note: "DACH recruiting reach" },
    { code: "CH", name: "Switzerland", note: "Cross-border career options" },
  ];

  return (
    <div className="mt-8 rounded-xl border border-white/12 bg-black/40 px-4 py-6 sm:px-8 sm:py-8">
      <p className="mb-6 text-center text-sm font-medium text-why-us-fg/55">DACH is where it pays off</p>
      <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
        {regions.map((r, i) => (
          <div
            key={r.code}
            className="group flex flex-col items-center rounded-lg border border-white/15 bg-why-us-card/80 px-4 py-5 text-center transition hover:border-white/35"
            style={{
              animation: `why-us-pulse 2.4s ease-in-out ${i * 0.18}s infinite`,
            }}
          >
            <span className="font-display text-2xl font-semibold tracking-wide text-caramel-deep">
              {r.code}
            </span>
            <span className="mt-2 text-sm font-semibold text-why-us-fg">{r.name}</span>
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
