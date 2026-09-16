import { createFileRoute, Link } from "@tanstack/react-router";
import economicsAsset from "@/assets/economics-bw.jpg.asset.json";
import mathAsset from "@/assets/math-bw.jpg.asset.json";
import { SiteHeader } from "@/components/SiteHeader";
import { RequireFullCourse } from "@/components/RequireFullCourse";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/products/full-course-subjects" as const;
const INDIGO = "#3730A3";

export const Route = createFileRoute("/wiso/products/full-course-subjects")({
  head: () => ({
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "Full WiSo Course — Fächer wählen | BBE School" },
      {
        name: "description",
        content:
          "Open WiSo Full Course subjects: Wirtschaft verstehen, Mathematik, and Deutsches Sprachverständnis for the WU Vienna Aufnahmeprüfung.",
      },
      { property: "og:title", content: "Full WiSo Course — Choose a subject" },
      {
        property: "og:description",
        content:
          "Economics, Mathematics, and German reading practice on dedicated /wiso URLs for the WiSo entrance exam.",
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
    tag: "Economics",
    description:
      "Cases remapped onto the official Wirtschaft verstehen chapters — scarcity, circular flow, firms, accounting and marketing.",
    to: "/wiso/products/full-course-economics",
    ready: true,
  },
  {
    id: "math",
    title: "Mathematik",
    image: mathAsset.url,
    accent: "#4338CA",
    tag: "Quantitative",
    description:
      "Full Course mathematics with German syllabus labels — algebra, functions, finance math, probability and more.",
    to: "/wiso/products/full-course-math",
    ready: true,
  },
  {
    id: "german",
    title: "Deutsches Sprachverständnis",
    image: economicsAsset.url,
    accent: "#6366F1",
    tag: "Language",
    description:
      "Zehn Lesetexte mit je zehn Aufgaben — akademisches Sprachverständnis für die WiSo-Aufnahmeprüfung.",
    to: "/wiso/products/full-course-german",
    ready: true,
  },
];

function WisoFullCourseSubjects() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-7xl"
        actions={
          <Link
            to="/wiso/products/full-course"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Back
          </Link>
        }
      />

      <main className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-300">
              WiSo track
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Full WiSo Course
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
                      Go to tasks →
                    </Link>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="mt-5 inline-flex cursor-not-allowed items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white opacity-80"
                      style={{ backgroundColor: s.accent }}
                    >
                      Coming next
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
