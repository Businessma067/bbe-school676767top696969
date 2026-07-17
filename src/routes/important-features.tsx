import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Lock } from "lucide-react";
import answerSheetImg from "@/assets/answer-sheet-simulator.png.asset.json";

export const Route = createFileRoute("/important-features")({
  head: () => ({
    meta: [
      { title: "Important Features — BBE School" },
      {
        name: "description",
        content:
          "Explore the premium features of BBE School: the Answer Sheet Simulator and more tools built for WU Vienna exam success.",
      },
      { property: "og:title", content: "Important Features — BBE School" },
      {
        property: "og:description",
        content: "Premium tools crafted for WU Vienna BBE candidates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ImportantFeaturesPage,
});

type Feature = {
  title: string;
  description: string;
  image: string;
  tags: [string, string];
  href: string;
};

const features: Feature[] = [
  {
    title: "Answer Sheet Simulator",
    description:
      "Practice transferring your answers into a perfect digital replica of the official WU Vienna answer sheet to eliminate technical mistakes under exam pressure.",
    image: answerSheetImg.url,
    tags: ["#Stress & Focus", "#Time Management"],
    href: "#",
  },
];

function ImportantFeaturesPage() {
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
            to="/"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="mb-10 max-w-2xl">
          <span className="mb-3 inline-block rounded-full border border-border bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Product Directory
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Important Features
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            A curated set of premium tools engineered to sharpen every advantage
            you need for the WU Vienna BBE entrance exam.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {features.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>
      </main>
    </div>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      {/* Top-left overlay tags */}
      <div className="pointer-events-none absolute left-4 top-4 z-10 flex flex-wrap gap-1.5">
        {feature.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-foreground/85 px-2 py-0.5 text-[10px] font-bold tracking-tight text-background backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-[minmax(0,42%)_minmax(0,58%)]">
        {/* LEFT — image */}
        <div className="relative flex items-center justify-center bg-secondary/50 p-4 md:p-6">
          <img
            src={feature.image}
            alt={feature.title}
            className="h-full max-h-[420px] w-full rounded-xl object-contain"
            loading="lazy"
          />
        </div>

        {/* RIGHT — content */}
        <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {feature.title}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {feature.description}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={feature.href}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              View More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              <Lock className="h-3 w-3" />
              For full course users only
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
