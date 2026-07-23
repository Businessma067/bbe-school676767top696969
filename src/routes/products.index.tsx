import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
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
    to: "/products/full-course",
  },
  {
    title: "Lite BBE Course",
    image: liteAsset.url,
    description:
      "Get access to the comprehensive 950+ question database with full step-by-step logic explanations under every statement, designed for steady self-paced preparation.",
    cta: "Unlock lite access",
    to: "/products/lite-bbe-course",
  },
  {
    title: "Speed & Focus Simulator",
    image: simulatorAsset.url,
    description:
      "Special countdown testing modules, rapid True/False decision drills, and memory-training tools designed strictly to build your exam speed and help you maintain focus under pressure.",
    cta: "Try now",
    disabled: true,
  },
  {
    title: "Ultimate BBE course",
    image: ultimateBbeCourseAsset.url,
    description:
      "The ultimate bundle combines our \"Full Practice course\" and \"Speed & Focus Simulator\", with every exclusive platform feature fully unlocked, providing the best value.",
    cta: "Unlock ultimate access",
    disabled: true,
  },
];

type ComparisonCell = {
  label: string;
  free: string;
  lite: string;
  full: string;
};

type ComparisonSection = {
  title: string;
  rows: ComparisonCell[];
};

const comparisonSections: ComparisonSection[] = [
  {
    title: "Features",
    rows: [
      { label: "Math Tasks", free: "50", lite: "550", full: "800+" },
      { label: "Economics Tasks", free: "35", lite: "375", full: "500+" },
      { label: "English Tasks", free: "10", lite: "150", full: "240+" },
      { label: "Textbook Theory", free: "❌", lite: "Crucial materials", full: "Full materials" },
      { label: "Answer Sheet Simulator", free: "❌", lite: "❌", full: "tick" },
      { label: "Interactive Speed Simulators", free: "❌", lite: "❌", full: "tick" },
      { label: "Mock Exams", free: "❌", lite: "3", full: "7+ exams with answer sheets" },
    ],
  },
  {
    title: "Insider Guide",
    rows: [
      { label: "Step by step explanations", free: "tick", lite: "tick", full: "tick" },
      { label: "AI Study Assistant", free: "❌", lite: "❌", full: "tick" },
      { label: "Tactical Trap Callouts", free: "❌", lite: "❌", full: "tick" },
      { label: "Dynamic Focus Heatmap", free: "❌", lite: "tick", full: "tick" },
      { label: "Support Chat", free: "❌", lite: "tick", full: "tick" },
      { label: "Achievements & Medals Tab", free: "❌", lite: "tick", full: "tick" },
      { label: "OSA Guide", free: "❌", lite: "❌", full: "tick" },
    ],
  },
];

const columns = [
  { key: "free", label: "Free Sample", featured: false },
  { key: "lite", label: "BBE Lite Practice", featured: false },
  { key: "full", label: "BBE Full Course", featured: true },
] as const;

function renderValue(value: string) {
  if (value === "tick" || value === "✔️") {
    return <Check className="mx-auto h-5 w-5 text-caramel-deep" strokeWidth={3} />;
  }
  if (value === "❌") {
    return <X className="mx-auto h-5 w-5 text-gray-400" strokeWidth={2.5} />;
  }
  return value;
}

function CompareTable() {
  return (
    <section className="mt-20 overflow-hidden rounded-3xl border border-border bg-card text-foreground shadow-sm">
      <div className="px-6 py-12 lg:px-10 lg:py-16">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Compare plans
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Pick the prep package that matches your ambition.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-background">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="sticky left-0 z-10 w-[220px] bg-muted px-4 py-4 text-left font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Compare
                </th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={`relative px-4 py-4 text-center font-display text-xs font-semibold uppercase tracking-widest ${col.featured ? "text-foreground" : "text-muted-foreground"} ${col.featured ? "bg-muted" : "bg-muted/50"} ${col.featured ? "featured-column" : ""}`}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonSections.map((section, sectionIdx) => (
                <>
                  <tr key={section.title} className="border-t border-border">
                    <td
                      colSpan={4}
                      className="sticky left-0 z-10 bg-background px-4 py-3 text-left font-display text-xs font-semibold uppercase tracking-widest text-caramel-deep"
                    >
                      {section.title}
                    </td>
                  </tr>
                  {section.rows.map((row, rowIdx) => (
                    <tr
                      key={row.label}
                      className={`border-t border-border ${rowIdx % 2 === 0 ? "bg-muted/[0.4]" : "bg-transparent"}`}
                    >
                      <td className="sticky left-0 z-10 w-[220px] bg-background px-4 py-3.5 font-medium text-foreground/90">
                        {row.label}
                      </td>
                      {columns.map((col) => {
                        const isFeatured = col.featured;
                        const value = row[col.key];
                        return (
                          <td
                            key={col.key}
                            className={`relative px-4 py-3.5 text-center font-medium text-foreground/80 ${isFeatured ? "featured-column" : ""}`}
                          >
                            {renderValue(value)}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  {sectionIdx < comparisonSections.length - 1 && (
                    <tr className="border-t border-border">
                      <td colSpan={4} className="h-2 bg-background" />
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

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
