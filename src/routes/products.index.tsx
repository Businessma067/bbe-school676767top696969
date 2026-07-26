import { createFileRoute, Link } from "@tanstack/react-router";
import { CompareTable } from "@/components/CompareTable";
import demoAsset from "@/assets/demo-practice-product.png.asset.json";
import fullAsset from "@/assets/full-course-product.png.asset.json";
import liteAsset from "@/assets/lite-bbe-course.png.asset.json";
import simulatorAsset from "@/assets/speed-focus-simulator.png.asset.json";
import ultimateBbeCourseAsset from "@/assets/ultimate-bbe-course.png.asset.json";



export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — BBE School" },
      { name: "description", content: "Explore BBE School products: free Demo-Practice Package and the Full BBE Course for WU Vienna entrance exam prep." },
      { property: "og:title", content: "Products — BBE School" },
      { property: "og:description", content: "Explore BBE School products: free Demo-Practice Package and the Full BBE Course." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
    cta: "Unlock full access",
    to: "/products/full-course",
    badge: "#BEST DEAL",
  },
  {
    title: "Lite BBE Course",
    image: liteAsset.url,
    description:
      "Access to a curated 950+ question database with clear step by step logic under every statement. Built for steady, self paced preparation when you still have time on your side.",
    cta: "Unlock lite access",
    to: "/products/lite-bbe-course",
  },
];




function ProductsPage() {
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
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ORANGE }} />
              <span className="text-xs font-medium tracking-wide text-taupe">BBE-School products</span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Our products
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Pick the path that fits where you are in your WU BBE prep.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg last:lg:col-start-2"
              >
                <div className={`relative aspect-[3/2] bg-secondary ${p.badge ? "overflow-visible pt-5" : "overflow-hidden"}`}>
                  {p.badge && (
                    <span
                      className="absolute left-1/2 top-0 z-10 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-md"
                      style={{ backgroundColor: ORANGE }}
                    >
                      {p.badge}
                    </span>
                  )}
                  <div className={`h-full w-full ${p.badge ? "overflow-hidden rounded-t-2xl" : ""}`}>
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    {p.title}
                  </h2>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  {p.to && !p.disabled ? (
                    <Link
                      to={p.to}
                      className="mt-5 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background"
                      style={{ backgroundColor: ORANGE, boxShadow: `0 4px 14px -4px ${ORANGE}80` }}
                    >
                      {p.cta} →
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="mt-5 inline-flex cursor-not-allowed items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white opacity-80 shadow-sm"
                      style={{ backgroundColor: ORANGE }}
                    >
                      {p.cta}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <CompareTable />
        </div>
      </main>
    </div>
  );
}
