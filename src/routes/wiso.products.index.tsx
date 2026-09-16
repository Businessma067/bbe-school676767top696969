import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/products" as const;
const TEAL = "#0F766E";
const WISO_COURSE_IMAGE = "/full-course-product-v2.png";

export const Route = createFileRoute("/wiso/products/")({
  head: () => ({
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "WiSo Products — BBE School" },
      {
        name: "description",
        content: "WiSo preparation products: Full WiSo Course for the WU Vienna Aufnahmeprüfung.",
      },
      { property: "og:title", content: "WiSo Products — BBE School" },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoProductsPage,
});

export function WisoProductsPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        actions={
          <LocalizedLink
            to="/wiso"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary"
          >
            ← Back
          </LocalizedLink>
        }
      />

      <main className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              WiSo products
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Prep built for the German-taught WiSo entrance exam — not a relabel of BBE English.
            </p>
          </div>

          <div className="mx-auto grid max-w-xl gap-8">
            <div
              className="group relative flex flex-col overflow-visible rounded-2xl border-2 bg-card shadow-lg transition-all hover:-translate-y-1"
              style={{
                borderColor: TEAL,
                boxShadow: `0 12px 40px -12px ${TEAL}55`,
              }}
            >
              <span
                className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide text-white ring-4 ring-background"
                style={{ backgroundColor: TEAL }}
              >
                WiSo track
              </span>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-[14px] bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900">
                <img
                  src={WISO_COURSE_IMAGE}
                  alt="Full WiSo Course"
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-80 mix-blend-luminosity transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 to-transparent" />
                <p className="absolute bottom-4 left-4 font-display text-2xl font-bold text-white">
                  Full WiSo Course
                </p>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  Economics from Wirtschaft verstehen, mathematics, and German reading comprehension —
                  with practice, mocks, and study tools on dedicated WiSo URLs.
                </p>
                <LocalizedLink
                  to="/wiso/products/full-course"
                  className="mt-5 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110"
                  style={{ backgroundColor: TEAL }}
                >
                  View Full WiSo Course →
                </LocalizedLink>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Looking for BBE?{" "}
              <LocalizedLink to="/products" className="font-semibold text-primary hover:underline">
                Open BBE products
              </LocalizedLink>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
