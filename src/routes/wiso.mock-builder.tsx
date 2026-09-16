import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/mock-builder" as const;

export const Route = createFileRoute("/wiso/mock-builder")({
  head: () => ({
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "WiSo Mock Builder | BBE School" },
      {
        name: "description",
        content: "WiSo custom mock builder will live on this URL, separate from BBE.",
      },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoMockBuilderPlaceholder,
});

export function WisoMockBuilderPlaceholder() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-800 dark:text-indigo-300">
          WiSo · Coming next
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold">WiSo Mock Builder</h1>
        <p className="mt-4 text-muted-foreground">
          The WiSo mock builder will be configured on this URL in a later step.
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
