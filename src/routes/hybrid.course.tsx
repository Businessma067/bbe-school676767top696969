import { createFileRoute, Link } from "@tanstack/react-router";
import economicsAsset from "@/assets/economics-bw.jpg.asset.json";
import mathAsset from "@/assets/math-bw.jpg.asset.json";
import englishAsset from "@/assets/english-bw-v2.jpg.asset.json";
import {
  ClipboardCheck,
  FileText,
  GitBranch,
  Layers,
  Shuffle,
  Sparkles,
  Wand2,
} from "lucide-react";
import { HybridStudyBoard } from "@/components/hybrid/HybridStudyBoard";
import { LocalizedLink } from "@/components/LocalizedLink";
import { SiteHeader } from "@/components/SiteHeader";
import { storeExamTrack } from "@/lib/exam-track";
import { HYBRID_ACCENT } from "@/lib/hybrid-course";
import { patchHybridProgress, loadHybridProgress } from "@/lib/hybrid-progress";

export const Route = createFileRoute("/hybrid/course")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/hybrid/course" }],
    meta: [
      { title: "Hybrid Course — Subjects & modes | BBE School" },
      {
        name: "description",
        content:
          "Hybrid BBE + WiSo course: shared math in English and German, a hybrid paper, bridge cases, economics, English, German, mocks, flashcards, matching, and tutor exam.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: HybridCoursePage,
});

const TEAL = HYBRID_ACCENT;
const ORANGE = "#C2643A";
const INDIGO = "#3730A3";

const subjects = [
  {
    id: "econ-bbe",
    title: "Economics",
    image: economicsAsset.url,
    accent: ORANGE,
    tag: "BBE · English",
    description:
      "Supply and demand, market structures, elasticities, and the English economics wording of the BBE exam.",
    to: "/products/full-course-economics",
    track: "bbe" as const,
  },
  {
    id: "econ-wiso",
    title: "Wirtschaft verstehen",
    image: economicsAsset.url,
    accent: INDIGO,
    tag: "WiSo · German",
    description:
      "The same economics ideas in Wirtschaft-verstehen wording for the German-taught WiSo exam.",
    to: "/wiso/products/full-course-economics",
    track: "wiso" as const,
  },
  {
    id: "math",
    title: "Mathematics",
    image: mathAsset.url,
    accent: TEAL,
    tag: "Shared · EN / DE",
    description:
      "One math bank for both exams. Flip English or German stems without studying the chapter twice.",
    to: "/hybrid/math",
    track: null,
  },
  {
    id: "english",
    title: "English",
    image: englishAsset.url,
    accent: "#2DD4A8",
    tag: "BBE · Language",
    description: "Reading speed, vocabulary, and grammar for the BBE language section.",
    to: "/products/full-course-english",
    track: "bbe" as const,
    overlay: "en" as const,
  },
  {
    id: "german",
    title: "Deutsches Sprachverständnis",
    image: englishAsset.url,
    accent: "#6366F1",
    tag: "WiSo · Language",
    description: "German reading comprehension for the WiSo language section.",
    to: "/wiso/products/full-course-german",
    track: "wiso" as const,
    overlay: "de" as const,
  },
] as const;

const studyModes = [
  {
    id: "mock-bbe",
    title: "Mock Exams · BBE",
    blurb: "Full-length BBE simulations with English and wi2-style scoring.",
    to: "/mock-exams",
    accent: ORANGE,
    icon: ClipboardCheck,
    cta: "Open BBE mocks →",
    track: "bbe" as const,
  },
  {
    id: "mock-wiso",
    title: "Probeprüfungen · WiSo",
    blurb: "Full WiSo mocks with German reading and Teilpunktesystem pacing.",
    to: "/wiso/mock-exams",
    accent: INDIGO,
    icon: ClipboardCheck,
    cta: "Open WiSo mocks →",
    track: "wiso" as const,
  },
  {
    id: "builder-bbe",
    title: "Custom Mock Builder",
    blurb: "Build BBE mocks by textbook topic across Economics, Math, and English.",
    to: "/products/custom-mock-builder",
    accent: "#8B5E3C",
    icon: Wand2,
    cta: "Open BBE builder →",
    track: "bbe" as const,
  },
  {
    id: "builder-wiso",
    title: "WiSo Mock Builder",
    blurb: "Build WiSo mocks from Wirtschaft verstehen, Mathematik, and German reading.",
    to: "/wiso/mock-builder",
    accent: "#4338CA",
    icon: Wand2,
    cta: "Open WiSo builder →",
    track: "wiso" as const,
  },
  {
    id: "flash-bbe",
    title: "Flashcards · BBE",
    blurb: "Economics, math, and English recall decks from the BBE course.",
    to: "/flashcards",
    accent: ORANGE,
    icon: Layers,
    cta: "Open BBE flashcards →",
    track: "bbe" as const,
  },
  {
    id: "flash-wiso",
    title: "Karteikarten · WiSo",
    blurb: "German decks for Wirtschaft, Mathematik, and Sprachverständnis.",
    to: "/wiso/flashcards",
    accent: INDIGO,
    icon: Layers,
    cta: "Open WiSo flashcards →",
    track: "wiso" as const,
  },
  {
    id: "match-bbe",
    title: "Matching · BBE",
    blurb: "Pair each term with its meaning on the BBE decks.",
    to: "/matching",
    accent: "#C2703A",
    icon: Shuffle,
    cta: "Open BBE matching →",
    track: "bbe" as const,
  },
  {
    id: "match-wiso",
    title: "Zuordnung · WiSo",
    blurb: "Same WiSo decks as flashcards, matching drill.",
    to: "/wiso/matching",
    accent: "#4338CA",
    icon: Shuffle,
    cta: "Open WiSo matching →",
    track: "wiso" as const,
  },
  {
    id: "tutor-bbe",
    title: "Tutor Exam · BBE",
    blurb: "Guided BBE theory checks with a fresh mix each run.",
    to: "/tutor-exam",
    accent: "#E85D3A",
    icon: Sparkles,
    cta: "Open BBE tutor →",
    track: "bbe" as const,
  },
  {
    id: "tutor-wiso",
    title: "Tutor-Prüfung · WiSo",
    blurb: "Guided WiSo theory checks in German.",
    to: "/wiso/tutor-exam",
    accent: "#6366F1",
    icon: Sparkles,
    cta: "Open WiSo tutor →",
    track: "wiso" as const,
  },
] as const;

const hybridModes = [
  {
    id: "math",
    title: "Shared Math library",
    blurb:
      "Thirteen chapters. One task at a time: BBE, then WiSo, or the other way around. One progress count.",
    to: "/hybrid/math",
    icon: Layers,
    cta: "Open math library →",
  },
  {
    id: "bridge",
    title: "Bridge case library",
    blurb: "Twenty economics concepts in four units. English, then German, scored once.",
    to: "/hybrid/bridge",
    icon: GitBranch,
    cta: "Open bridge library →",
  },
  {
    id: "paper",
    title: "Hybrid paper",
    blurb: "Mathematics plus German reading, one task at a time. BBE then WiSo, or the reverse.",
    to: "/hybrid/mock-builder",
    icon: FileText,
    cta: "Open paper builder →",
  },
] as const;

function rememberOverlay(overlay?: "en" | "de") {
  if (overlay === "en") {
    patchHybridProgress({ englishSessions: loadHybridProgress().englishSessions + 1 });
  }
  if (overlay === "de") {
    patchHybridProgress({ germanSessions: loadHybridProgress().germanSessions + 1 });
  }
}

function HybridCoursePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-7xl"
        actions={
          <LocalizedLink
            to="/products/hybrid-course"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Course
          </LocalizedLink>
        }
      />

      <main className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: TEAL }}
            >
              Hybrid · BBE + WiSo
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Hybrid Course
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Shared math counts once, in English, German, or both at the same time. The hybrid
              paper leans toward BBE, half, or WiSo. Bridge cases and both full libraries sit
              underneath.
            </p>
          </div>

          <HybridStudyBoard />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
                  <h2 className="font-display text-xl font-semibold text-foreground">{s.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <Link
                    to={s.to}
                    onClick={() => {
                      if (s.track) storeExamTrack(s.track);
                      if ("overlay" in s) rememberOverlay(s.overlay);
                    }}
                    className="mt-5 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110"
                    style={{
                      backgroundColor: s.accent,
                      boxShadow: `0 4px 14px -4px ${s.accent}80`,
                    }}
                  >
                    Go to tasks →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <section className="mt-14">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Study modes
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Same modes as both full courses
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                Mocks, builders, flashcards, matching, and tutor exam — BBE and WiSo, side by side.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {studyModes.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.id}
                    to={tool.to}
                    onClick={() => storeExamTrack(tool.track)}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
                    style={{ borderTop: `4px solid ${tool.accent}` }}
                  >
                    <div className="flex gap-4">
                      <span
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white"
                        style={{ backgroundColor: tool.accent }}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold">{tool.title}</h3>
                        <p className="mt-1 max-w-xl text-sm text-muted-foreground">{tool.blurb}</p>
                      </div>
                    </div>
                    <span
                      className="mt-4 shrink-0 text-xs font-semibold sm:mt-0"
                      style={{ color: tool.accent }}
                    >
                      {tool.cta}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="mt-14">
            <div className="mb-6">
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: TEAL }}
              >
                Hybrid-only
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Hybrid tools
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {hybridModes.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.id}
                    to={tool.to}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                    style={{ borderTop: `4px solid ${TEAL}` }}
                  >
                    <span
                      className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg text-white"
                      style={{ backgroundColor: TEAL }}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{tool.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{tool.blurb}</p>
                    <span className="mt-4 text-xs font-semibold" style={{ color: TEAL }}>
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
