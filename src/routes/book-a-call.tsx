import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteContacts } from "@/components/SiteContacts";
import { BookCallSection } from "@/components/BookCallSection";

const TITLE = "Book a free 30-minute call — BBE & WiSo prep | BBE School";
const DESCRIPTION =
  "Book a free 30-minute call with BBE School. Talk through the WU Vienna BBE exam, WiSo entrance exam, or Hybrid course and get a prep plan.";

export const Route = createFileRoute("/book-a-call")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/book-a-call" }],
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://bbe-school.com/book-a-call" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: BookACallPage,
});

function BookACallPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <BookCallSection
          headingLevel="h1"
          description="Pick a time that works for you. In 30 minutes we can walk through BBE, WiSo, or Hybrid, answer your questions about the WU Vienna entrance exam, and help you choose a prep plan."
        />
        <footer className="border-t border-border bg-card px-6 py-10 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SiteContacts />
          </div>
        </footer>
      </main>
    </div>
  );
}
