import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { FLASHCARD_SUBJECTS, countCards } from "@/data/flashcards";
import { Layers } from "lucide-react";
import economicsImage from "../../assets/flashcard-previews/flashcards-economics-single.png";
import mathImage from "../../assets/flashcard-previews/flashcards-math-single.png";
import englishImage from "../../assets/flashcard-previews/flashcards-english-single.png";

const SUBJECT_IMAGES: Record<string, string> = {
  economics: economicsImage,
  math: mathImage,
  english: englishImage,
};

export const Route = createFileRoute("/flashcards/")({
  head: () => ({
    meta: [
      { title: "Flashcards — BBE School" },
      {
        name: "description",
        content:
          "Study BBE Economics, Math, and English flashcards — terms, formulas, and concepts for the WU entrance exam.",
      },
      { property: "og:title", content: "Flashcards — BBE School" },
      {
        property: "og:description",
        content:
          "Study BBE Economics, Math, and English flashcards — terms, formulas, and concepts for the WU entrance exam.",
      },
    ],
  }),
  component: FlashcardsIndexPage,
});

function FlashcardsIndexPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-7xl"
        actions={
          <Link
            to="/dashboard"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Dashboard
          </Link>
        }
      />

      <main className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-sm">
              <Layers className="h-3.5 w-3.5 text-caramel-deep" />
              <span className="text-xs font-medium tracking-wide text-taupe">
                Study mode · Flashcards
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Flashcards
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose a subject to drill terms and formulas.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {FLASHCARD_SUBJECTS.map((s) => {
              const n = countCards(s.sections);
              const cardInner = (
                <>
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={SUBJECT_IMAGES[s.id]}
                      alt={`${s.title} flashcards`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span
                      className="absolute bottom-3 left-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest shadow-sm backdrop-blur-sm"
                      style={{ color: s.accent }}
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
                    <p className="mt-3 text-xs font-semibold text-muted-foreground">
                      {s.comingSoon
                        ? "Coming soon"
                        : s.id === "english"
                          ? `${n} cards · 3 modes`
                          : `${n} cards · ${s.sections.length} topics`}
                    </p>
                    <span
                      className={
                        "mt-5 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm " +
                        (s.comingSoon
                          ? "cursor-not-allowed opacity-70"
                          : "transition-all group-hover:brightness-110")
                      }
                      style={{
                        backgroundColor: s.accent,
                        boxShadow: s.comingSoon
                          ? undefined
                          : `0 4px 14px -4px ${s.accent}80`,
                      }}
                    >
                      {s.comingSoon ? "Coming soon" : "Study flashcards →"}
                    </span>
                  </div>
                </>
              );

              if (s.comingSoon) {
                return (
                  <div
                    key={s.id}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                    style={{ borderTop: `4px solid ${s.accent}` }}
                  >
                    {cardInner}
                  </div>
                );
              }

              return (
                <Link
                  key={s.id}
                  to="/flashcards/$subject"
                  params={{ subject: s.id }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderTop: `4px solid ${s.accent}` }}
                >
                  {cardInner}
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
