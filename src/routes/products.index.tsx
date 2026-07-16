import { createFileRoute, Link } from "@tanstack/react-router";
import demoAsset from "@/assets/demo-practice-product.png.asset.json";
import fullAsset from "@/assets/full-course-product.png.asset.json";
import liteAsset from "@/assets/lite-bbe-course.png.asset.json";
import simulatorAsset from "@/assets/speed-focus-simulator.png.asset.json";

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
      "A free trial version containing 50+ baseline cases across three subjects with step-by-step logic explanations to get a real look at the exam format.",
    cta: "Visit for free",
    to: "/products/demo-practice",
  },
  {
    title: "Full BBE Course",
    image: fullAsset.url,
    description:
      "Complete exam preparation guide containing over 1500 complex practice cases across all three subjects, equipped with custom Timing and Stress-Test Modules, Full Mock Exams, a context-aware AI Assistant, task explanations and much more...",
    cta: "Unlock full access",
    disabled: true,
  },
  {
    title: "Lite BBE Course",
    image: liteAsset.url,
    description:
      "Get access to the comprehensive 950+ question database with full step-by-step logic explanations under every statement, designed for steady self-paced preparation.",
    cta: "Unlock lite access",
    disabled: true,
  },
  {
    title: "Speed & Focus Simulator",
    image: simulatorAsset.url,
    description:
      "Special countdown testing modules, rapid True/False decision drills, and memory-training tools designed strictly to build your exam speed and help you maintain focus under pressure.",
    cta: "Try now",
    disabled: true,
    badge: "🔥 FIRST ON THE MARKET",
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

          <div className="grid gap-8 md:grid-cols-2">
            {products.map((p) => (
              <div
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
                  {p.badge && (
                    <span
                      className="absolute left-1/2 top-12 z-10 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-md"
                      style={{ backgroundColor: ORANGE }}
                    >
                      {p.badge}
                    </span>
                  )}
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
        </div>
      </main>
    </div>
  );
}
