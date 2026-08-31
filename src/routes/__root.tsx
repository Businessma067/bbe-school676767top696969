import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { HashScrollOnLoad } from "../components/HashScrollOnLoad";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { IntroSplash } from "../components/IntroSplash";
import { ActivityTracker } from "../components/ActivityTracker";
import { SiteAccessGuard } from "../components/SiteAccessGuard";
import { PracticeCaseProvider } from "../lib/practice-case-context";
import { DeferredChrome, lazyNamed } from "../components/DeferredChrome";

const FloatingAssistant = lazyNamed(
  () => import("../components/FloatingAssistant"),
  "FloatingAssistant",
);
const ExplainSelectionChip = lazyNamed(
  () => import("../components/ExplainSelectionChip"),
  "ExplainSelectionChip",
);

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BBE School | WU Vienna BBE Exam Prep" },
      { name: "description", content: "Interactive exam simulator for WU Vienna BBE selection. Practice under real time constraints, master the scoring logic, and track your progress." },
      { name: "author", content: "BBE School" },
      { name: "google-site-verification", content: "3lPV7T3noTUbd1bD7X-m8CUYNLhXWe6LTqY2HV7YBQo" },
      { property: "og:title", content: "BBE School | WU Vienna BBE Exam Prep" },
      { property: "og:description", content: "Interactive exam simulator for WU Vienna BBE selection. Practice under real time constraints, master the scoring logic, and track your progress." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@BBESchool" },
      { name: "twitter:title", content: "BBE School | WU Vienna BBE Exam Prep" },
      { name: "twitter:description", content: "Interactive exam simulator for WU Vienna BBE selection. Practice under real time constraints, master the scoring logic, and track your progress." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/9cb82508-9c21-494a-b668-61297a2abfd0" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/9cb82508-9c21-494a-b668-61297a2abfd0" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        // Two families only — fewer render-blocking stylesheet bytes on every page.
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <PracticeCaseProvider>
        <IntroSplash />
        <HashScrollOnLoad />
        <ActivityTracker />
        <SiteAccessGuard />
        <Breadcrumbs />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        <DeferredChrome>
          <ExplainSelectionChip />
          <FloatingAssistant />
        </DeferredChrome>
      </PracticeCaseProvider>
    </QueryClientProvider>
  );
}
