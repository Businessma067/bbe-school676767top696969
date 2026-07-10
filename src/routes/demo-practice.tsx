import { createFileRoute, Link } from "@tanstack/react-router";
import economicsAsset from "@/assets/economics.png.asset.json";
import mathAsset from "@/assets/math.png.asset.json";
import englishAsset from "@/assets/english.png.asset.json";

export const Route = createFileRoute("/demo-practice")({
  head: () => ({
    meta: [
      { title: "Demo Practice — BBE School" },
      { name: "description", content: "Try 50+ demo tasks in Economics, Math, and English for the WU BBE exam." },
      { property: "og:title", content: "Demo Practice — BBE School" },
      { property: "og:description", content: "Try 50+ demo tasks in Economics, Math, and English for the WU BBE exam." },
    ],
  }),
  component: DemoPractice,
});

const subjects = [
  {
    id: "economics",
    title: "Economics",
    image: economicsAsset.url,
    description:
      "Master supply and demand, market structures, elasticities, and the economic intuition tested on the WU BBE exam.",
  },
  {
    id: "math",
    title: "Math",
    image: mathAsset.url,
    description:
      "Sharpen algebra, ratios, percentages, graphs, and the quantitative shortcuts that save time under pressure.",
  },
  {
    id: "english",
    title: "English",
    image: englishAsset.url,
    description:
      "Build reading speed, vocabulary, and logical reasoning for the language and comprehension part of the exam.",
  },
];

function DemoPractice() {
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
            to="/"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Back
          </Link>
        </div>
      </header>

      <main className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs font-medium tracking-wide text-taupe">50+ tasks for start</span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Demo Practice
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose a subject to begin your free demo practice.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {subjects.map((s) => (
              <div
                key={s.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={s.image}
                    alt={`${s.title} practice`}
                    width={768}
                    height={576}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-xl font-semibold text-foreground">{s.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <button className="mt-5 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
                    Go to tasks →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
