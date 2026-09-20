import { createFileRoute, Link } from "@tanstack/react-router";
import economicsAsset from "@/assets/economics-bw.jpg.asset.json";
import mathAsset from "@/assets/math-bw.jpg.asset.json";
import { Layers, Shuffle, Sparkles } from "lucide-react";
import { LocalizedLink } from "@/components/LocalizedLink";
import { SiteHeader } from "@/components/SiteHeader";
import { RequireFullCourse } from "@/components/RequireFullCourse";
import { storeExamTrack } from "@/lib/exam-track";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";
import { WISO_COURSE_SUBJECTS_UI } from "@/lib/wiso-study-ui";

const PATH = "/wiso/products/full-course-subjects" as const;
const INDIGO = "#3730A3";
const ui = WISO_COURSE_SUBJECTS_UI;

export const Route = createFileRoute("/wiso/products/full-course-subjects")({
  head: () => ({
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "Full WiSo Course — Fächer wählen | BBE School" },
      {
        name: "description",
        content:
          "Öffne WiSo Full Course Fächer: Wirtschaft verstehen, Mathematik und Deutsches Sprachverständnis für die WU Wien Aufnahmeprüfung.",
      },
      { property: "og:title", content: "Full WiSo Course — Fächer wählen" },
      {
        property: "og:description",
        content:
          "Wirtschaft, Mathematik und deutsches Leseverständnis auf eigenen /wiso-URLs für die WiSo-Aufnahmeprüfung.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://bbe-school.com${PATH}` },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath(PATH),
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: function WisoFullCourseSubjectsRoute() {
    return (
      <RequireFullCourse minTier="full" productSlug="wiso-full-course">
        <WisoFullCourseSubjects />
      </RequireFullCourse>
    );
  },
});

const subjects = [
  {
    id: "economics",
    title: "Wirtschaft verstehen",
    image: economicsAsset.url,
    accent: INDIGO,
    tag: ui.econTag,
    description: ui.econDescription,
    to: "/wiso/products/full-course-economics",
    ready: true,
  },
  {
    id: "math",
    title: "Mathematik",
    image: mathAsset.url,
    accent: "#4338CA",
    tag: ui.mathTag,
    description: ui.mathDescription,
    to: "/wiso/products/full-course-math",
    ready: true,
  },
  {
    id: "german",
    title: "Deutsches Sprachverständnis",
    image: economicsAsset.url,
    accent: "#6366F1",
    tag: ui.germanTag,
    description: ui.germanDescription,
    to: "/wiso/products/full-course-german",
    ready: true,
  },
] as const;

const studyTools = [
  {
    id: "flashcards",
    title: ui.flashcardsTitle,
    blurb: ui.flashcardsBlurb,
    to: "/wiso/flashcards" as const,
    accent: INDIGO,
    icon: Layers,
    cta: ui.openFlashcards,
  },
  {
    id: "matching",
    title: ui.matchingTitle,
    blurb: ui.matchingBlurb,
    to: "/wiso/matching" as const,
    accent: "#4338CA",
    icon: Shuffle,
    cta: ui.openMatching,
  },
  {
    id: "tutor",
    title: ui.tutorTitle,
    blurb: ui.tutorBlurb,
    to: "/wiso/tutor-exam" as const,
    accent: "#6366F1",
    icon: Sparkles,
    cta: ui.openTutor,
  },
] as const;

function WisoFullCourseSubjects() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-7xl"
        actions={
          <LocalizedLink
            to="/wiso/products/full-course"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            {ui.back}
          </LocalizedLink>
        }
      />

      <main className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-300">
              {ui.trackEyebrow}
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              {ui.pageTitle}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{ui.chooseSubject}</p>
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
                    alt={`${s.title}`}
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
                  <h2 className="font-display text-xl font-semibold text-foreground">{s.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  {s.ready ? (
                    <Link
                      to={s.to}
                      className="mt-5 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110"
                      style={{
                        backgroundColor: s.accent,
                        boxShadow: `0 4px 14px -4px ${s.accent}80`,
                      }}
                    >
                      {ui.goToTasks}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="mt-5 inline-flex cursor-not-allowed items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white opacity-80"
                      style={{ backgroundColor: s.accent }}
                    >
                      {ui.comingNext}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <section className="mt-14">
            <div className="mb-6 text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-300">
                {ui.studyEyebrow}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {ui.studyTitle}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                {ui.studyBlurb}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {studyTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.id}
                    to={tool.to}
                    onClick={() => storeExamTrack("wiso")}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                    style={{ borderTop: `4px solid ${tool.accent}` }}
                  >
                    <span
                      className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg text-white"
                      style={{ backgroundColor: tool.accent }}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{tool.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{tool.blurb}</p>
                    <span className="mt-4 text-xs font-semibold" style={{ color: tool.accent }}>
                      {tool.cta}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
