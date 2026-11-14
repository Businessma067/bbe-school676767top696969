import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { Suspense, lazy, useEffect, useMemo, useState } from "react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteContacts } from "@/components/SiteContacts";
import { getExamTrackFromPath, resolveExamTrack, type ExamTrack } from "@/lib/exam-track";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const HowItWorksSection = lazy(() =>
  import("@/components/HowItWorksSection").then((m) => ({ default: m.HowItWorksSection })),
);

const PATH = "/how-it-works" as const;
const TITLE = "How it works — BBE & WiSo prep walkthrough | BBE School";
const DESCRIPTION =
  "See how BBE School prep works: practice cases, mock exams, theory, and study tools for the WU Vienna BBE and WiSo entrance exams.";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://bbe-school.com${PATH}` },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: HowItWorksPage,
});

export function HowItWorksPage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [storageReady, setStorageReady] = useState(false);
  useEffect(() => {
    setStorageReady(true);
  }, []);
  const track = useMemo<ExamTrack>(
    () =>
      storageReady
        ? resolveExamTrack(pathname)
        : (getExamTrackFromPath(pathname) ?? "bbe"),
    [pathname, storageReady],
  );

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader showNav showMobileNav />

      <main>
        <Suspense fallback={<div className="min-h-[12rem] bg-background sm:min-h-[28rem]" aria-hidden />}>
          <HowItWorksSection track={track} headingLevel="h1" />
        </Suspense>

        <footer className="border-t border-border bg-card px-6 py-10 lg:px-8">
          <div className="mx-auto mb-8 max-w-7xl">
            <SiteContacts />
          </div>
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="font-display text-sm font-semibold tracking-widest uppercase text-foreground">
              BBE School
            </span>
            <p className="text-xs text-muted-foreground">© 2026 BBE School. Not affiliated with WU Vienna.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
