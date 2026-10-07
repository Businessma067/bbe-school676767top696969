import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import {
  ACCEPTANCE_NOTES,
  averageStarsLabel,
  notesFor,
  type AcceptanceTrack,
  type StarRating,
} from "@/data/acceptance-notes";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { useLanguage } from "@/lib/i18n/context";
import { socialImageMetaForPath } from "@/lib/seo/social-image";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    links: [...hreflangLinks("/reviews"), { rel: "canonical", href: "https://bbe-school.com/reviews" }],
    meta: [
      { title: "Acceptance notes | BBE, WiSo, and Hybrid | BBE School" },
      {
        name: "description",
        content:
          "Notes from people who sat the WU Vienna entrance exam: 17 on BBE, 11 on WiSo, and 3 who prepared for both.",
      },
      { property: "og:title", content: "Acceptance notes | BBE, WiSo, and Hybrid | BBE School" },
      {
        property: "og:description",
        content:
          "Notes from people who sat the WU Vienna entrance exam: 17 on BBE, 11 on WiSo, and 3 who prepared for both.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://bbe-school.com/reviews" },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath("/reviews"),
    ],
  }),
  component: ReviewsPage,
});

const FILTERS: { id: AcceptanceTrack | "all"; hash?: AcceptanceTrack }[] = [
  { id: "all" },
  { id: "bbe", hash: "bbe" },
  { id: "wiso", hash: "wiso" },
  { id: "hybrid", hash: "hybrid" },
];

function trackFromHash(hash: string): AcceptanceTrack | "all" {
  const id = hash.replace(/^#/, "");
  if (id === "bbe" || id === "wiso" || id === "hybrid") return id;
  return "all";
}

function StarRow({ value }: { value: StarRating }) {
  const { t } = useLanguage();
  const label = t(value === 3 ? "3 out of 5" : value === 4 ? "4 out of 5" : "5 out of 5");
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={label}>
      {[1, 2, 3, 4, 5].map((step) => (
        <Star
          key={step}
          className={
            step <= value
              ? "h-3.5 w-3.5 fill-amber-500 text-amber-500"
              : "h-3.5 w-3.5 text-muted-foreground/35"
          }
          aria-hidden
        />
      ))}
    </span>
  );
}

function AverageStars({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden>
      {[1, 2, 3, 4, 5].map((step) => {
        const fill = Math.min(1, Math.max(0, value - (step - 1)));
        return (
          <span key={step} className="relative inline-block h-5 w-5">
            <Star className="h-5 w-5 text-muted-foreground/30" />
            <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
            </span>
          </span>
        );
      })}
    </span>
  );
}

export function ReviewsPage() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  const active = trackFromHash(hash);
  const tracks: AcceptanceTrack[] =
    active === "all" ? ["bbe", "wiso", "hybrid"] : [active];
  const { t } = useLanguage();
  const average = averageStarsLabel(ACCEPTANCE_NOTES);
  const averageValue = Number(average);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader maxWidthClassName="max-w-3xl" />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <header className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-caramel-deep">
            Acceptance notes
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            What students sent after results
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The short selection stays on the course pages. This is the longer list, from the July
            2025 and July 2026 sittings.
          </p>
          <div
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2"
            aria-label={t("4.7 out of 5")}
          >
            <p className="font-display text-4xl font-semibold leading-none" data-no-i18n>
              {average}
            </p>
            <AverageStars value={averageValue} />
            <p className="text-sm text-muted-foreground">Average · 31 notes</p>
          </div>
        </header>

        <nav
          aria-label="Filter notes"
          className="mt-8 flex flex-wrap gap-2"
        >
          {FILTERS.map((filter) => {
            const selected = active === filter.id;
            return (
              <LocalizedLink
                key={filter.id}
                to="/reviews"
                hash={filter.hash}
                aria-current={selected ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-10 items-center gap-2 rounded-sm border px-3 py-1.5 text-sm font-semibold transition-colors",
                  selected
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card text-foreground hover:bg-secondary",
                )}
              >
                {filter.id === "all" ? (
                  "All notes"
                ) : filter.id === "bbe" ? (
                  "BBE"
                ) : filter.id === "wiso" ? (
                  "WiSo"
                ) : (
                  "Hybrid"
                )}
                <span className={cn("text-xs font-medium", selected ? "text-background/80" : "text-muted-foreground")}>
                  {filter.id === "all"
                    ? "31 notes"
                    : filter.id === "bbe"
                      ? "17 notes"
                      : filter.id === "wiso"
                        ? "11 notes"
                        : "3 notes"}
                </span>
              </LocalizedLink>
            );
          })}
        </nav>

        <div className="mt-10">
          {tracks.map((track) => (
            <section key={track} id={track} className="scroll-mt-28">
              <div className="mb-2 flex items-baseline justify-between gap-4 border-b border-border pb-3">
                <h2 className="font-display text-xl font-semibold">
                  {track === "bbe" ? "BBE" : track === "wiso" ? "WiSo" : "Hybrid"}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {track === "bbe" ? "17 notes" : track === "wiso" ? "11 notes" : "3 notes"}
                </p>
              </div>
              <ol>
                {notesFor(track).map((note) => (
                  <li
                    key={note.id}
                    className={cn(
                      "border-b border-border/70 py-6 pl-4",
                      track === "wiso"
                        ? "border-l-2 border-l-indigo-600/45"
                        : track === "hybrid"
                          ? "border-l-2 border-l-teal-700/55"
                          : "border-l-2 border-l-caramel-deep/70",
                    )}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="font-display text-sm font-semibold" data-no-i18n>
                        {note.name}
                        <span className="font-sans font-normal text-muted-foreground">
                          {" "}
                          · {note.city}
                        </span>
                      </p>
                      <div className="flex items-center gap-2">
                        <StarRow value={note.stars} />
                        <p className="text-xs text-muted-foreground">{note.when}</p>
                      </div>
                    </div>
                    <p className="mt-3 whitespace-pre-line text-[0.95rem] leading-[1.65] text-foreground/90">
                      {note.quote}
                    </p>
                    <p className="mt-3 text-xs font-semibold tracking-wide text-muted-foreground">
                      {note.outcome}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </main>
      <footer className="border-t border-border px-4 py-8 text-center text-xs text-muted-foreground sm:px-6">
        © 2026 BBE School. Not affiliated with WU Vienna.
      </footer>
    </div>
  );
}
