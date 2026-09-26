import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { formatNewsDate, getNewsPost } from "@/data/news/posts";
import { socialImageMetaForPath } from "@/lib/seo/social-image";

export const Route = createFileRoute("/news/$slug")({
  beforeLoad: ({ params }) => {
    if (!getNewsPost(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const post = getNewsPost(params.slug);
    const title = post ? `${post.title} — BBE School News` : "News — BBE School";
    const description = post?.summary ?? "A post from the BBE School creators.";
    const path = `/news/${params.slug}`;
    return {
      links: [{ rel: "canonical", href: `https://bbe-school.com${path}` }],
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...socialImageMetaForPath("/news"),
      ],
    };
  },
  component: NewsPostPage,
});

export function NewsPostPage() {
  const { slug } = Route.useParams();
  const post = getNewsPost(slug);
  if (!post) return null;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-5xl"
        actions={
          <LocalizedLink
            to="/news"
            className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary sm:px-3"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to news</span>
          </LocalizedLink>
        }
      />

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <article>
          <header className="mb-8 border-b border-border pb-8">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs text-muted-foreground">
              <time dateTime={post.date}>{formatNewsDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.author}</span>
            </div>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{post.summary}</p>
          </header>

          <div className="space-y-5 text-base leading-relaxed text-foreground">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
