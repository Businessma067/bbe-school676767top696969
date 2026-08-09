import { createFileRoute, Link } from "@tanstack/react-router";
import economicsAsset from "@/assets/economics-bw.jpg.asset.json";
import mathAsset from "@/assets/math-bw.jpg.asset.json";
import englishAsset from "@/assets/english-bw-v2.jpg.asset.json";
import { Wand2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/products/full-course-subjects")({
  head: () => ({
    meta: [
      { title: "Full Course â€” Choose a Subject â€” BBE School" },
      {
        name: "description",
        content: "Access 2000+ tasks across Economics, Math, and English for the WU BBE exam.",
      },
      { property: "og:title", content: "Full Course â€” Choose a Subject â€” BBE School" },
      {
        property: "og:description",
        content: "Access 2000+ tasks across Economics, Math, and English for the WU BBE exam.",
      },
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
      <SiteHeader
        maxWidthClassName="max-w-7xl"
        actions={
          <Link
            to="/products/full-course"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            â† Back
          </Link>
        }
      />

      <main className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs font-medium tracking-wide text-taupe">
                2000+ tasks Â· Full access
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Full Course
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">Choose a subject to begin.</p>
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
                  {s.id === "economics" || s.id === "math" || s.id === "english" ? (
                    <Link
                      to={
                        s.id === "economics"
                          ? "/products/full-course-economics"
                          : s.id === "math"
                            ? "/products/full-course-math"
                            : "/products/full-course-english"
                      }
                      className="mt-5 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background"
                      style={{
                        backgroundColor: s.accent,
                        boxShadow: `0 4px 14px -4px ${s.accent}80`,
                      }}
                    >
                      Go to tasks →
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="mt-5 inline-flex cursor-not-allowed items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white opacity-90 shadow-sm transition-all hover:brightness-110"
                      style={{
                        backgroundColor: s.accent,
                        boxShadow: `0 4px 14px -4px ${s.accent}80`,
                      }}
                    >
                      Go to tasks →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-6">
            <Link
              to="/mock-exams"
              className="group flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
              style={{ borderTop: "4px solid #C2703A" }}
            >
              <div>
                <span className="mb-2 inline-block rounded-full bg-[#C2703A] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                  Full simulation
                </span>
                <h2 className="font-display text-xl font-semibold text-foreground">Mock Exams</h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Full-length exam simulations: 34 tasks, 2 hours, 160 points, scored with the
                  official wi2 method.
                </p>
              </div>
              <span
                className="inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all group-hover:brightness-110"
                style={{ backgroundColor: "#C2703A", boxShadow: "0 4px 14px -4px #C2703A80" }}
              >
                Go to mock exams →
              </span>
            </Link>

            <Link
              to="/products/custom-mock-builder"
              className="group flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
              style={{ borderTop: "4px solid #8B5E3C" }}
            >
              <div>
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#8B5E3C] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                  <Wand2 className="h-3 w-3" />
                  Free access
                </span>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Custom Mock Builder
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Build Economics mocks by textbook subtopic (2.1, 2.2, â€¦) from the Full Course
                  question bank.
                </p>
              </div>
              <span
                className="inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all group-hover:brightness-110"
                style={{ backgroundColor: "#8B5E3C", boxShadow: "0 4px 14px -4px #8B5E3C80" }}
              >
                Open builder →
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

