import { createFileRoute, Link } from "@tanstack/react-router";
import economicsAsset from "@/assets/economics-bw.jpg.asset.json";
import mathAsset from "@/assets/math-bw.jpg.asset.json";
import englishAsset from "@/assets/english-bw-v2.jpg.asset.json";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/demo-practice" as const;

export const Route = createFileRoute("/wiso/demo-practice/")({
  head: () => ({
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "WiSo Demo Practice — BBE School" },
      {
        name: "description",
        content:
          "Try free WiSo demo tasks in Mathematik, Wirtschaft verstehen, and Deutsch for the WU Aufnahmeprüfung.",
      },
      { property: "og:title", content: "WiSo Demo Practice — BBE School" },
      {
        property: "og:description",
        content:
          "Try free WiSo demo tasks in Mathematik, Wirtschaft verstehen, and Deutsch for the WU Aufnahmeprüfung.",
      },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoDemoPractice,
});

const subjects = [
  {
    id: "math",
    title: "Mathematik",
    image: mathAsset.url,
    accent: "#3B82F6",
    tag: "Quantitative",
    description:
      "Kostenlose Demo-Aufgaben aus den ersten Kapiteln — andere Fragen als im BBE-Demo, damit du beides ausprobieren kannst.",
  },
  {
    id: "economics",
    title: "Wirtschaft verstehen",
    image: economicsAsset.url,
    accent: "#E85D3A",
    tag: "Wirtschaft",
    description:
      "Die ersten Aufgaben jedes Kapitels freischalten und Wirtschaft verstehen für die WiSo-Aufnahmeprüfung üben.",
  },
  {
    id: "german",
    title: "Deutsch",
    image: englishAsset.url,
    accent: "#2DD4A8",
    tag: "Sprachverständnis",
    description:
      "Kostenlose Leseverständnis-Aufgaben aus den ersten beiden Texten — True/False wie in der Prüfung.",
  },
] as const;

export function WisoDemoPractice() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-7xl"
        actions={
          <LocalizedLink
            to="/wiso"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Back
          </LocalizedLink>
        }
      />

      <main className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-800 dark:text-indigo-300">
              WiSo · WU Aufnahmeprüfung
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Demo Practice
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose a subject to begin your free WiSo demo practice.
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
                  <Link
                    to={
                      s.id === "economics"
                        ? "/wiso/demo-practice/economics"
                        : s.id === "math"
                          ? "/wiso/demo-practice/math"
                          : "/wiso/demo-practice/german"
                    }
                    className="mt-5 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background"
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
        </div>
      </main>
    </div>
  );
}
