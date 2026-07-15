import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import slide1 from "@/assets/demo-slide-1.png.asset.json";
import slide2 from "@/assets/demo-slide-2.png.asset.json";
import slide3 from "@/assets/demo-slide-3.png.asset.json";
import slide4 from "@/assets/demo-slide-4.png.asset.json";
import slide5 from "@/assets/demo-slide-5.png.asset.json";

export const Route = createFileRoute("/products/demo-practice")({
  head: () => ({
    meta: [
      { title: "Demo-Practice Package — BBE School" },
      { name: "description", content: "Free trial: 50+ baseline WU BBE exam cases across three subjects with step-by-step explanations." },
      { property: "og:title", content: "Demo-Practice Package — BBE School" },
      { property: "og:description", content: "Free trial with 50+ baseline cases across three subjects." },
      { property: "og:image", content: slide1.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DemoPracticeProduct,
});

const ORANGE = "#C2643A";

const slides = [slide1.url, slide2.url, slide3.url, slide4.url, slide5.url];

function Star({ fill }: { fill: "full" | "half" | "empty" }) {
  const id = `g-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <defs>
        <linearGradient id={id}>
          <stop offset="50%" stopColor={ORANGE} />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.5l2.94 6.36 6.96.66-5.25 4.7 1.56 6.82L12 17.75l-6.21 3.29 1.56-6.82L2.1 9.52l6.96-.66L12 2.5z"
        fill={fill === "full" ? ORANGE : fill === "half" ? `url(#${id})` : "transparent"}
        stroke={ORANGE}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DemoPracticeProduct() {
  const [idx, setIdx] = useState(0);
  const go = (n: number) => setIdx((n + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-md ring-1 ring-primary/30 transition-transform group-hover:scale-105">
              <span className="font-display text-sm font-bold leading-none text-primary-foreground tracking-tight">BBE</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold tracking-tight text-foreground">BBE School</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">WU Vienna · Prep</span>
            </div>
          </Link>
          <Link
            to="/products"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Products
          </Link>
        </div>
      </header>

      <main className="px-6 py-10 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Demo-Practice Package
          </h1>

          {/* Carousel */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {slides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="w-full flex-shrink-0 object-cover"
                  draggable={false}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(idx - 1)}
              aria-label="Previous"
              className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-foreground shadow-md ring-1 ring-border backdrop-blur transition hover:bg-background"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(idx + 1)}
              aria-label="Next"
              className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-foreground shadow-md ring-1 ring-border backdrop-blur transition hover:bg-background"
            >
              ›
            </button>

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-foreground" : "w-1.5 bg-foreground/40"}`}
                />
              ))}
            </div>
          </div>

          {/* Rating */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              <Star fill="full" />
              <Star fill="full" />
              <Star fill="full" />
              <Star fill="full" />
              <Star fill="half" />
            </div>
            <span className="font-display text-lg font-semibold text-foreground">4.58</span>
            <span className="text-sm text-muted-foreground">17 Reviews</span>
          </div>

          {/* Feature panel */}
          <div className="mt-6 rounded-2xl border border-border/60 bg-card/60 p-5 shadow-sm backdrop-blur">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="flex flex-col items-center">
                <span className="font-display text-2xl font-bold text-foreground">3</span>
                <span className="mt-1 text-xs font-medium text-muted-foreground">Subjects</span>
              </div>
              <div className="flex flex-col items-center border-x border-border/60">
                <span className="font-display text-2xl font-bold text-foreground">100+</span>
                <span className="mt-1 text-xs font-medium text-muted-foreground">Practice tasks</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-display text-2xl font-bold text-foreground">✓</span>
                <span className="mt-1 text-xs font-medium text-muted-foreground">Explanations</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/demo-practice"
            className="mt-6 flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background"
            style={{ backgroundColor: ORANGE, boxShadow: `0 8px 24px -8px ${ORANGE}80` }}
          >
            Start Practicing →
          </Link>
        </div>
      </main>
    </div>
  );
}
