import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Lock } from "lucide-react";
import { AnswerSheetPreviewFill } from "@/components/AnswerSheetPreview";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/important-features")({
  head: () => ({
    meta: [
      { title: "Important Features — BBE School" },
      {
        name: "description",
        content:
          "Explore the premium features of BBE School: the Official Answer Sheet and more tools built for WU Vienna exam success.",
      },
      { property: "og:title", content: "Important Features — BBE School" },
      {
        property: "og:description",
        content: "Premium tools crafted for WU Vienna BBE candidates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ImportantFeaturesPage,
});

type Feature = {
  title: string;
  description: string;
  tags: [string, string];
  to: string;
};

const features: Feature[] = [
  {
    title: "Official Answer Sheet",
    description:
      "Practice transferring your answers into a perfect digital replica of the official WU Vienna answer sheet to eliminate technical mistakes under exam pressure.",
    tags: ["#Stress & Focus", "#Time Management"],
    to: "/features/answer-sheet",
  },
];

function ImportantFeaturesPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-7xl"
        actions={
          <Link
            to="/"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Home
          </Link>
        }
      />

      <main className="mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="mb-10 max-w-2xl">
          <span className="mb-3 inline-block rounded-full border border-border bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Product Directory
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Important Features
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            A curated set of premium tools engineered to sharpen every advantage you need for the WU
            Vienna BBE entrance exam.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {features.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>

        <section className="mt-14">
          <div className="mb-5 max-w-2xl">
            <span className="mb-3 inline-block rounded-full border border-border bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Live Preview
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Custom Mock Builder
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Watch how a personal Economics mock exam is assembled: pick the subtopics, set the
              number of questions, shape the topic weights, and the exam opens on question one.
            </p>
          </div>
          <MockBuilderSimulator />
        </section>
      </main>

    </div>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md sm:flex-row">
      <AnswerSheetPreviewFill className="h-64 shrink-0 sm:h-72 sm:w-[42%]" />

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h2 className="font-display text-lg font-bold tracking-tight text-foreground">
          {feature.title}
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>

        <div className="mt-auto flex flex-col items-start gap-2 pt-2">
          <Link
            to={feature.to}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            View More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <div className="flex flex-wrap gap-1.5">
            {feature.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-secondary/70 px-1.5 py-0.5 text-[9px] font-bold tracking-tight text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            <Lock className="h-3 w-3" />
            For full course users only
          </span>
        </div>
      </div>
    </article>
  );
}
