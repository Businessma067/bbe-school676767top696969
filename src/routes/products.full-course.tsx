import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  ListChecks,
  Headphones,
  Sparkles,
  ClipboardCheck,
  Gem,
  Check,
  AlertTriangle,
  Clock,
} from "lucide-react";
import fullAsset from "@/assets/full-course-product.png.asset.json";

export const Route = createFileRoute("/products/full-course")({
  head: () => ({
    meta: [
      { title: "Full BBE Course — Unlock Full Access" },
      {
        name: "description",
        content:
          "The complete WU BBE entrance exam preparation system: 2000+ tasks, full mock exams, AI explanations, and direct human support.",
      },
      { property: "og:title", content: "Full BBE Course — Unlock Full Access" },
      {
        property: "og:description",
        content:
          "2000+ practice tasks, mock exams, AI assistance, and direct support built for the real WU BBE exam.",
      },
      { property: "og:image", content: fullAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FullCourseProduct,
});

const ORANGE = "#C2643A";

const features = [
  {
    icon: BookOpen,
    title: "3 Subjects",
    text: "Math, English, and Business & Economics — fully covered.",
    accent: false,
  },
  {
    icon: ListChecks,
    title: "2000+ Practice Tasks",
    text: "A constantly growing question bank across every chapter.",
    accent: false,
  },
  {
    icon: Headphones,
    title: "Direct Support",
    text: "Real answers from real people, not a bot ticket queue.",
    accent: true,
  },
  {
    icon: Sparkles,
    title: "AI Assistance",
    text: "Personalized explanations, on demand, for every question.",
    accent: true,
  },
  {
    icon: ClipboardCheck,
    title: "Mock Exams",
    text: "Full-length simulations under real exam conditions and timing.",
    accent: true,
  },
  {
    icon: Gem,
    title: "Special Features",
    text: "Exclusive tools you won't find in any other prep course.",
    accent: true,
  },
];

const failureReasons = [
  "They memorize isolated facts instead of understanding how concepts connect — so a familiar idea phrased slightly differently on exam day throws them off completely.",
  "They practice with question formats that don't match the real exam's structure, so the actual test format feels unfamiliar under pressure.",
  "They never train against the exam's true difficulty — confident, logical-sounding statements that are actually false — so they get fooled by exactly the kind of trap the real exam is built around.",
  "They run out of time, because they've never practiced under real timing constraints across all three subjects.",
  "They study alone, with no way to check whether their understanding is actually correct until it's too late.",
];

function Star({ fill }: { fill: "full" | "almost" | "empty" }) {
  const id = `fs-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <defs>
        <linearGradient id={id}>
          <stop offset="87%" stopColor={ORANGE} />
          <stop offset="87%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.5l2.94 6.36 6.96.66-5.25 4.7 1.56 6.82L12 17.75l-6.21 3.29 1.56-6.82L2.1 9.52l6.96-.66L12 2.5z"
        fill={fill === "full" ? ORANGE : fill === "almost" ? `url(#${id})` : "transparent"}
        stroke={ORANGE}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CtaButton({ label = "Unlock Full Access" }: { label?: string }) {
  return (
    <button
      type="button"
      className="inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-base font-semibold text-white shadow-sm transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background sm:w-auto"
      style={{ backgroundColor: ORANGE, boxShadow: `0 10px 28px -8px ${ORANGE}90` }}
    >
      {label} →
    </button>
  );
}

function FullCourseProduct() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-md ring-1 ring-primary/30 transition-transform group-hover:scale-105">
              <span className="font-display text-sm font-bold leading-none text-primary-foreground tracking-tight">
                BBE
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold tracking-tight text-foreground">
                BBE School
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-taupe">
                WU Vienna · Prep
              </span>
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
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <h1 className="mb-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Full BBE Course
          </h1>

          <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm">
            <img
              src={fullAsset.url}
              alt="Full BBE Course"
              className="w-full object-cover"
              draggable={false}
            />
          </div>

          {/* Rating */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              <Star fill="full" />
              <Star fill="full" />
              <Star fill="full" />
              <Star fill="full" />
              <Star fill="almost" />
            </div>
            <span className="font-display text-lg font-semibold text-foreground">4.87</span>
            <span className="text-sm text-muted-foreground">114 Reviews</span>
          </div>

          {/* Price + CTA */}
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-center">
            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-taupe">
                One-time payment
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-foreground">€359</span>
                <span className="text-sm text-muted-foreground">full access</span>
              </div>
            </div>
            <CtaButton />
          </div>

          {/* Section 1 — Feature grid */}
          <section className="mt-12">
            <h2 className="mb-6 text-center font-display text-2xl font-bold tracking-tight text-foreground">
              Everything included
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="relative grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl"
                      style={{
                        backgroundColor: `${ORANGE}18`,
                        boxShadow: `inset 0 0 0 1px ${ORANGE}40`,
                      }}
                    >
                      <f.icon className="h-5 w-5" style={{ color: ORANGE }} />
                      {f.accent && (
                        <span
                          className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full text-white"
                          style={{ backgroundColor: ORANGE }}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {f.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sticky top CTA of persuasive section */}
          <section className="mt-16">
            <div className="mb-8 flex justify-center">
              <CtaButton />
            </div>

            <h2 className="mb-6 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Why Most Applicants Fail — And Why This Course Is Built to Fix That
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground">
              Every year, the vast majority of applicants walk into the WU BBE entrance exam and
              walk out disappointed. Not because they didn't study — but because they studied the
              wrong way.
            </p>

            <h3 className="mt-8 font-display text-lg font-semibold text-foreground">
              The most common reasons students fail:
            </h3>
            <ul className="mt-4 space-y-4">
              {failureReasons.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full"
                    style={{ backgroundColor: "#dc262620" }}
                  >
                    <AlertTriangle className="h-3.5 w-3.5" style={{ color: "#dc2626" }} />
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{r}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-2xl font-bold tracking-tight text-foreground">
              Why this course is different
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              This course was built around one idea: you don't rise to the level of your goals, you
              fall to the level of your preparation. Every practice task here is engineered to match
              the real exam's logic — not simplified, not softened. You'll face the same kind of
              misleading, plausible-sounding statements you'll meet on exam day, so by the time you
              sit down for the real thing, nothing about the format surprises you.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              With over 2,000 practice tasks across all three subjects, full mock exams run under
              real timing conditions, on-demand AI explanations for every single question, and
              direct support from real people who know this exam inside out — this isn't just "more
              practice." It's the preparation system top scorers actually use.
            </p>

            <div
              className="mt-10 rounded-2xl border p-6 text-center"
              style={{
                borderColor: `${ORANGE}55`,
                backgroundColor: `${ORANGE}10`,
              }}
            >
              <p className="font-display text-lg font-semibold text-foreground sm:text-xl">
                Stop guessing. Start training the way the exam actually tests you.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-3">
              <CtaButton />
              <p className="text-xs text-muted-foreground">
                One-time payment · €359 · Instant full access
              </p>
            </div>
          </section>

          {/* Section 3 — Time investment */}
          <section className="mt-16 rounded-2xl border border-border bg-gradient-to-br from-secondary to-background p-6 sm:p-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <div
                className="grid h-14 w-14 place-items-center rounded-2xl"
                style={{ backgroundColor: `${ORANGE}18`, boxShadow: `inset 0 0 0 1px ${ORANGE}40` }}
              >
                <Clock className="h-7 w-7" style={{ color: ORANGE }} />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  How much time it takes
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                  Start preparing early, and even one relaxed hour a day is enough to reach the
                  top. No cramming. No all-nighters. Just steady, focused progress that compounds
                  into real confidence by exam day.
                </p>
              </div>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-border bg-background px-5 py-3">
                <span className="font-display text-3xl font-bold" style={{ color: ORANGE }}>
                  1
                </span>
                <span className="text-sm text-muted-foreground">
                  hour / day on lazy days when you start in advance
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
