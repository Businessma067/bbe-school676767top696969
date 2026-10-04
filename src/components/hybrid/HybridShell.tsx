import type { ReactNode } from "react";
import { LocalizedLink } from "@/components/LocalizedLink";
import { SiteHeader } from "@/components/SiteHeader";
import { HYBRID_ACCENT, HYBRID_NAV } from "@/lib/hybrid-course";
import { cn } from "@/lib/utils";
import { useRouterState } from "@tanstack/react-router";

export function HybridShell({
  children,
  title,
  lead,
}: {
  children: ReactNode;
  title?: string;
  lead?: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-6xl"
        actions={
          <LocalizedLink
            to="/products"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
          >
            ← Products
          </LocalizedLink>
        }
      />

      <div className="border-b border-border/70 bg-card/40">
        <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 py-2 sm:px-6 lg:px-8">
          {HYBRID_NAV.map((item) => {
            const active =
              item.to === "/hybrid"
                ? pathname === "/hybrid" || pathname.endsWith("/hybrid/")
                : pathname.includes(item.to);
            return (
              <LocalizedLink
                key={item.to}
                to={item.to}
                className={cn(
                  "shrink-0 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors",
                  active ? "text-white" : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
                style={active ? { backgroundColor: HYBRID_ACCENT } : undefined}
              >
                <span className="sm:hidden">{item.short}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </LocalizedLink>
            );
          })}
        </nav>
      </div>

      <main className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl">
          {(title || lead) && (
            <header className="mb-8">
              {title ? (
                <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {title}
                </h1>
              ) : null}
              {lead ? <p className="mt-2 max-w-2xl text-muted-foreground">{lead}</p> : null}
            </header>
          )}
          {children}
        </div>
      </main>
    </div>
  );
}
