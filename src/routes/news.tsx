import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { formatNewsDate, getAllNewsPosts } from "@/data/news/posts";
import { hreflangLinks } from "@/lib/i18n/locale-path";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

export const Route = createFileRoute("/news")({
  head: () => ({
    links: [...hreflangLinks("/news"), { rel: "canonical", href: "https://bbe-school.com/news" }],
    meta: [
      { title: "News — BBE School" },
      {
        name: "description",
        content:
          "Updates from the BBE School creators: product notes, exam tips, and behind-the-scenes prep posts.",
      },
      { property: "og:title", content: "News — BBE School" },
      {
        property: "og:description",
        content: "Latest posts from the BBE School creators.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...socialImageMetaForPath("/news"),
    ],
  }),
  component: NewsPage,
});

export function NewsPage() {
  const posts = getAllNewsPosts();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-5xl"
        actions={
          <LocalizedLink
            to="/"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            ← Home
          </LocalizedLink>
        }
      />

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">News</p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Latest from the creators
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Product updates, exam notes, and short posts from the people building BBE School.
          </p>
        </header>

        <ul className="divide-y divide-border border-y border-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <LocalizedLink
                to={`/news/${post.slug}`}
                className="group block py-6 transition-colors hover:bg-secondary/40 sm:px-2"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <time dateTime={post.date}>{formatNewsDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-foreground group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                  Read post
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </LocalizedLink>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
