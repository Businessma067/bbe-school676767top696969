import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/mock-exams" as const;

export const Route = createFileRoute("/wiso/mock-exams")({
  head: () => ({
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "WiSo Mock Exams | BBE School" },
      {
        name: "description",
        content: "WiSo mock exams will live on this URL, separate from BBE mock exams.",
      },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoMockExamsPlaceholder,
});

export function WisoMockExamsPlaceholder() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-800 dark:text-indigo-300">
          WiSo · Coming next
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold">WiSo Mock Exams</h1>
        <p className="mt-4 text-muted-foreground">
          Full WiSo mocks will be built on this dedicated URL so they never mix with BBE exams.
        </p>
        <LocalizedLink
          to="/wiso"
          className="mt-8 inline-flex rounded-md bg-indigo-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-800"
        >
          WiSo home
        </LocalizedLink>
      </main>
    </div>
  );
}
