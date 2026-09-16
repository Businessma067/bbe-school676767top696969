import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { WISO_PRACTICE_ROUTES } from "@/config/wiso-exam-hub";

type Props = {
  title: string;
  description: string;
};

export function WisoComingSoonPage({ title, description }: Props) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 py-20 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400">
          WiSo track
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LocalizedLink
            to={WISO_PRACTICE_ROUTES.home}
            className="inline-flex rounded-md bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
          >
            Back to WiSo home
          </LocalizedLink>
          <LocalizedLink
            to="/wiso/entrance-exam"
            className="inline-flex rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            Exam info
          </LocalizedLink>
        </div>
      </main>
    </div>
  );
}
