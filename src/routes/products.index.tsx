import { createFileRoute, Link } from "@tanstack/react-router";
import { CompareTable } from "@/components/CompareTable";
import { SiteHeader } from "@/components/SiteHeader";
import demoAsset from "@/assets/demo-practice-product.png.asset.json";
import fullAsset from "@/assets/full-course-product.png.asset.json";
import liteAsset from "@/assets/lite-bbe-course.png.asset.json";
import { useFullCourseAccess } from "@/hooks/use-full-course-access";
import { FULL_COURSE_HREF, FULL_COURSE_PRODUCT_HREF } from "@/lib/full-course-access";
import { LocalizedLink } from "@/components/LocalizedLink";
import { hreflangLinks } from "@/lib/i18n/locale-path";

const PROVIDER = {
  "@type": "Organization",
  name: "BBE School",
  url: "https://bbe-school.com",
} as const;

/** Course structured data for the three offerings listed on this page. */
const courseListJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Demo-Practice Package",
    description:
      "A free trial with 50+ starter cases across Economics, Mathematics and English with step-by-step explanations of the real WU Vienna BBE exam format.",
    url: "https://bbe-school.com/products/demo-practice",
    provider: PROVIDER,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://bbe-school.com/products/demo-practice",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Lite BBE Course",
    description:
      "A curated 950+ question database with step-by-step logic under every statement, built for steady self-paced WU Vienna BBE preparation.",
    url: "https://bbe-school.com/products/lite-bbe-course",
    provider: PROVIDER,
    offers: {
      "@type": "Offer",
      price: "279",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://bbe-school.com/products/lite-bbe-course",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Full BBE Course",
    description:
      "The complete WU Vienna BBE prep system: 1500+ practice cases, timing and stress modules, full mock exams, a study assistant and detailed task breakdowns.",
    url: "https://bbe-school.com/products/full-course",
    provider: PROVIDER,
    offers: {
      "@type": "Offer",
      price: "479",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://bbe-school.com/products/full-course",
    },
  },
];

export const Route = createFileRoute("/products/")({
  head: () => ({
    links: [...hreflangLinks("/products"), { rel: "canonical", href: "https://bbe-school.com/products" }],
    meta: [
      { title: "Products — BBE School" },
      {
        name: "description",
        content:
          "Explore BBE School products: free Demo-Practice Package and the Full BBE Course for WU Vienna entrance exam prep.",
      },
      { property: "og:title", content: "Products — BBE School" },
      {
        property: "og:description",
        content: "Explore BBE School products: free Demo-Practice Package and the Full BBE Course.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://bbe-school.com/products" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(courseListJsonLd) },
    ],
  }),
  component: ProductsPage,
});

const ORANGE = "#C2643A";

type Product = {
  title: string;
  image: string;
  description: string;
  cta: string;
  to?: string;
  disabled?: boolean;
  badge?: string;
  /** When set, CTA switches for Full Course owners. */
  ownedCta?: string;
  ownedTo?: string;
};

const products: Product[] = [
  {
    title: "Demo-Practice Package",
    image: demoAsset.url,
    description:
      "A free trial with 50+ starter cases across all three subjects and step by step explanations, so you can see what the real exam feels like before committing to anything.",
    cta: "Visit for free",
    to: "/products/demo-practice",
  },
  {
    title: "Full BBE Course",
    image: fullAsset.url,
    description:
      "The complete prep system: 1500+ practice cases across all three subjects, timing and stress modules, full mock exams, a study assistant, and detailed task breakdowns. Everything you actually need on exam day.",
    cta: "Buy course · €479",
    to: FULL_COURSE_PRODUCT_HREF,
    ownedCta: "Go to course",
    ownedTo: FULL_COURSE_HREF,
    badge: "Best option",
  },
  {
    title: "Lite BBE Course",
    image: liteAsset.url,
    description:
      "Access to a curated 950+ question database with clear step by step logic under every statement. Built for steady, self paced preparation when you still have time on your side.",
    cta: "Coming soon",
    disabled: true,
  },
];

export function ProductsPage() {
  const { ready, ownsFullCourse } = useFullCourseAccess();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        actions={
          <LocalizedLink
            to="/"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Back
          </LocalizedLink>
        }
      />

      <main className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ORANGE }} />
              <span className="text-xs font-medium tracking-wide text-taupe">
                BBE-School products
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Our products
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Pick the path that fits where you are in your WU BBE prep.
            </p>
          </div>

          <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => {
              const isFull = p.title === "Full BBE Course";
              const owned = isFull && ownsFullCourse;
              const cta = owned && p.ownedCta ? p.ownedCta : p.cta;
              const to = owned && p.ownedTo ? p.ownedTo : p.to;

              return (
                <div
                  key={p.title}
                  className={`group relative flex flex-col overflow-visible rounded-2xl border bg-card transition-all hover:-translate-y-1 ${
                    p.badge
                      ? "z-10 border-2 shadow-lg md:-my-2 md:scale-[1.03]"
                      : "border-border shadow-sm hover:shadow-lg"
                  }`}
                  style={
                    p.badge
                      ? {
                          borderColor: ORANGE,
                          boxShadow: `0 12px 40px -12px ${ORANGE}55`,
                        }
                      : undefined
                  }
                >
                  {p.badge && (
                    <span
                      className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide text-white ring-4 ring-background"
                      style={{
                        backgroundColor: ORANGE,
                        boxShadow: `0 8px 24px -4px ${ORANGE}aa`,
                      }}
                    >
                      {p.badge}
                    </span>
                  )}
                  <div
                    className={`relative flex min-h-[200px] items-center justify-center overflow-hidden bg-secondary sm:min-h-[220px] ${
                      p.badge ? "rounded-t-[14px]" : "rounded-t-2xl"
                    }`}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="max-h-[240px] w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02] sm:max-h-[280px]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-xl font-semibold text-foreground">{p.title}</h2>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    {!ready && isFull ? (
                      <div
                        className="mt-5 h-10 animate-pulse rounded-md bg-secondary"
                        aria-hidden
                      />
                    ) : to && !p.disabled ? (
                      <Link
                        to={to}
                        className="mt-5 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background"
                        style={{
                          backgroundColor: ORANGE,
                          boxShadow: `0 4px 14px -4px ${ORANGE}80`,
                        }}
                      >
                        {cta} →
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="mt-5 inline-flex cursor-not-allowed items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white opacity-80 shadow-sm"
                        style={{ backgroundColor: ORANGE }}
                      >
                        {cta}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <CompareTable />
        </div>
      </main>
    </div>
  );
}
