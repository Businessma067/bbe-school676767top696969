import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { NewsMedia } from "@/components/news/NewsMedia";
import { NewsPostFigure } from "@/components/news/NewsPostFigures";
import {
  NewsCriteriaExplorer,
  NewsFeedLanesExplorer,
} from "@/components/news/NewsPostInteractive";
import { NewsPostTool } from "@/components/news/NewsPostTools";
import { NewsShippingTimeline } from "@/components/news/NewsShippingTimeline";
import { NewsSteps } from "@/components/news/NewsSteps";
import { NewsUiDemo } from "@/components/news/NewsUiDemos";
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

          <div className="text-base leading-relaxed text-foreground">
            {post.body.map((block, index) => {
              if (block.type === "figure") {
                return (
                  <NewsPostFigure
                    key={`${block.id}-${index}`}
                    id={block.id}
                    caption={block.caption}
                  />
                );
              }
              if (block.type === "criteria") {
                return (
                  <NewsCriteriaExplorer
                    key={`criteria-${index}`}
                    caption={block.caption}
                    intro={block.intro}
                    criteria={block.criteria}
                  />
                );
              }
              if (block.type === "lanes") {
                return (
                  <NewsFeedLanesExplorer
                    key={`lanes-${index}`}
                    caption={block.caption}
                    lanes={block.lanes}
                  />
                );
              }
              if (block.type === "timeline") {
                return (
                  <NewsShippingTimeline
                    key={`timeline-${index}`}
                    caption={block.caption}
                    entries={block.entries}
                  />
                );
              }
              if (block.type === "media") {
                return (
                  <NewsMedia
                    key={`media-${index}`}
                    kind={block.kind}
                    src={block.src}
                    alt={block.alt}
                    caption={block.caption}
                  />
                );
              }
              if (block.type === "demo") {
                return (
                  <NewsUiDemo key={`demo-${index}`} id={block.id} caption={block.caption} />
                );
              }
              if (block.type === "steps") {
                return (
                  <NewsSteps
                    key={`steps-${index}`}
                    title={block.title}
                    caption={block.caption}
                    steps={block.steps}
                  />
                );
              }
              if (block.type === "tool") {
                return (
                  <NewsPostTool key={`tool-${index}`} id={block.id} caption={block.caption} />
                );
              }
              if (block.type === "cta") {
                const [path, query] = block.href.split("?");
                const search = query
                  ? Object.fromEntries(new URLSearchParams(query))
                  : undefined;
                return (
                  <div
                    key={`cta-${index}`}
                    className="my-8 rounded-lg border border-border bg-card px-4 py-4 sm:px-5"
                  >
                    <p className="text-sm leading-relaxed text-muted-foreground">{block.note}</p>
                    <LocalizedLink
                      to={path || "/"}
                      search={search}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:underline"
                    >
                      {block.label}
                      <ArrowRight className="h-4 w-4" />
                    </LocalizedLink>
                  </div>
                );
              }
              if (block.type === "h2") {
                return (
                  <h2
                    key={`h2-${index}`}
                    className="mb-3 mt-10 font-display text-xl font-bold tracking-tight text-foreground first:mt-0 sm:text-2xl"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "aside") {
                return (
                  <aside
                    key={`aside-${index}`}
                    className="my-7 border-l-2 border-foreground/25 pl-4 text-[0.95rem] leading-relaxed text-muted-foreground"
                  >
                    {block.text}
                  </aside>
                );
              }
              return (
                <p key={`p-${index}`} className="mb-5 last:mb-0">
                  {block.text}
                </p>
              );
            })}
          </div>
        </article>
      </main>
    </div>
  );
}
