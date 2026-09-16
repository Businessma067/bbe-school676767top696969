"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/config/site-nav";
import { ExamTrackSwitcher } from "@/components/ExamTrackSwitcher";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LocalizedLink } from "@/components/LocalizedLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getCurrentAuthState, type AuthState } from "@/lib/auth-ui";
import { supabase } from "@/integrations/supabase/client";
import { NavItemLink } from "./NavItemLink";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type MobileNavProps = {
  items: NavItem[];
  /** Mirror SiteHeader: these controls live in the sheet on small screens. */
  showTrackSwitcher?: boolean;
  showThemeToggle?: boolean;
  showLanguageSwitcher?: boolean;
  showGuestAuth?: boolean;
};

export function MobileNav({
  items,
  showTrackSwitcher = false,
  showThemeToggle = false,
  showLanguageSwitcher = false,
  showGuestAuth = false,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState<AuthState | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const showChrome =
    showTrackSwitcher || showThemeToggle || showLanguageSwitcher;

  useEffect(() => {
    if (!showGuestAuth) return;
    let cancelled = false;
    const refresh = async () => {
      const next = await getCurrentAuthState();
      if (!cancelled) {
        setAuth(next);
        setAuthReady(true);
      }
    };
    void refresh();
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") {
        void refresh();
      }
    });
    return () => {
      cancelled = true;
      data.subscription.unsubscribe();
    };
  }, [showGuestAuth]);

  const guestAuthVisible = showGuestAuth && authReady && !auth;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="touch-target inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-card text-foreground transition-all hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85vw] max-w-sm border-l border-border bg-background p-0 [&>button]:hidden">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <SheetTitle className="font-display text-base font-semibold tracking-tight text-foreground">
              Menu
            </SheetTitle>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="touch-target inline-flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <SheetDescription className="sr-only">Navigation menu</SheetDescription>

          {showChrome ? (
            <div className="flex flex-wrap items-center gap-2 border-b border-border px-4 py-3 sm:px-6 lg:hidden">
              {showTrackSwitcher ? <ExamTrackSwitcher /> : null}
              {showThemeToggle ? <ThemeToggle /> : null}
              {showLanguageSwitcher ? <LanguageSwitcher /> : null}
            </div>
          ) : null}

          <nav className="flex-1 overflow-y-auto px-4 py-4 sm:px-6">
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.label}>
                  <NavItemLink
                    item={item}
                    onNavigate={() => setOpen(false)}
                    className="block w-full rounded-lg px-3 py-3.5 text-left font-display text-base font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary"
                  />
                </li>
              ))}
            </ul>
          </nav>

          {guestAuthVisible ? (
            <div className="flex flex-col gap-2 border-t border-border px-4 py-4 sm:px-6 lg:hidden">
              <LocalizedLink
                to="/login"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-card px-3 py-2 text-sm font-semibold hover:bg-secondary"
              >
                Sign in
              </LocalizedLink>
              <LocalizedLink
                to="/signup"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
              >
                Sign up
              </LocalizedLink>
            </div>
          ) : null}
        </div>
      </SheetContent>
    </Sheet>
  );
}
