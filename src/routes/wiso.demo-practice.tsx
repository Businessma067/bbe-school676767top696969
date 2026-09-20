import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

const PATH = "/wiso/demo-practice" as const;

export const Route = createFileRoute("/wiso/demo-practice")({
  head: () => ({
    links: [...hreflangLinks(PATH), { rel: "canonical", href: `https://bbe-school.com${PATH}` }],
    meta: [
      { title: "WiSo Demo Practice | BBE School" },
      {
        name: "description",
        content: "WiSo demo practice will live on this URL, separate from BBE demo-practice.",
      },
      ...socialImageMetaForPath(PATH),
    ],
  }),
  component: WisoDemoPracticePlaceholder,
});

export function WisoDemoPracticePlaceholder() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-800 dark:text-indigo-300">
          WiSo · Coming next
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold">WiSo Demo Practice</h1>
        <p className="mt-4 text-muted-foreground">
          WiSo demo tasks will live here so they stay separate from BBE demo-practice. Content guided
          next.
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
