import { createFileRoute, Link } from "@tanstack/react-router";
import economicsAsset from "@/assets/economics-bw.jpg.asset.json";
import mathAsset from "@/assets/math-bw.jpg.asset.json";
import englishAsset from "@/assets/english-bw-v2.jpg.asset.json";

export const Route = createFileRoute("/products/full-course-subjects")({
  head: () => ({
    meta: [
      { title: "Full Course — Choose a Subject — BBE School" },
      { name: "description", content: "Access 2000+ tasks across Economics, Math, and English for the WU BBE exam." },
      { property: "og:title", content: "Full Course — Choose a Subject — BBE School" },
      { property: "og:description", content: "Access 2000+ tasks across Economics, Math, and English for the WU BBE exam." },
    ],
  }),
  component: FullCourseSubjects,
});

const subjects = [
  {
    id: "economics",
    title: "Economics",
    image: economicsAsset.url,
    accent: "#E85D3A",
    tag: "Markets & Business",
    description:
      "Master supply and demand, market structures, elasticities, and the economic intuition tested on the WU BBE exam.",
  },
  {
    id: "math",
    title: "Math",
    image: mathAsset.url,
    accent: "#3B82F6",
    tag: "Quantitative",
    description:
      "Sharpen algebra, ratios, percentages, graphs, and the quantitative shortcuts that save time under pressure.",
  },
  {
    id: "english",
    title: "English",
    image: englishAsset.url,
    accent: "#2DD4A8",
    tag: "Language",
    description:
      "Build reading speed, vocabulary, and logical reasoning for the language and comprehension part of the exam.",
  },
];

function FullCourseSubjects() {
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
            to="/products/full-course"
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
              <span className="text-xs font-medium tracking-wide text-taupe">2000+ tasks · Full access</span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Full Course
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose a subject to begin.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {subjects.map((s) => (
              <div
                key={s.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ borderTop: `4px solid ${s.accent}` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={s.image}
                    alt={`${s.title} practice`}
                    width={768}
                    height={576}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white shadow-sm"
                    style={{ backgroundColor: s.accent }}
                  >
                    {s.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    <span
                      className="mr-2 inline-block h-2 w-2 rounded-full align-middle"
                      style={{ backgroundColor: s.accent }}
                    />
                    {s.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <button
                    type="button"
                    className="mt-5 inline-flex cursor-not-allowed items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white opacity-90 shadow-sm transition-all hover:brightness-110"
                    style={{ backgroundColor: s.accent, boxShadow: `0 4px 14px -4px ${s.accent}80` }}
                  >
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
