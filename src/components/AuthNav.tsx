import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  getCurrentAuthState,
  peekAuthState,
  type AuthState,
} from "@/lib/auth-ui";
import { ChevronDown } from "lucide-react";
import { LocalizedLink } from "@/components/LocalizedLink";
import { useLanguage } from "@/lib/i18n/context";

type AuthNavProps = {
  /** When true, hide Sign in / Sign up (they live in the mobile menu instead). */
  hideGuestLinks?: boolean;
};

export function AuthNav({ hideGuestLinks = false }: AuthNavProps) {
  const { t } = useLanguage();
  const peeked = typeof window !== "undefined" ? peekAuthState() : null;
  const [auth, setAuth] = useState<AuthState | null>(() => peeked?.auth ?? null);
  // Prefer cached chrome immediately, even while a background refresh is in flight.
  const [ready, setReady] = useState(() => Boolean(peeked?.ready || peeked?.auth));
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const refresh = async (options?: { refresh?: boolean }) => {
      const next = await getCurrentAuthState(options);
      if (!cancelled) {
        setAuth(next);
        setReady(true);
      }
    };

    void refresh();
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") {
        void refresh({ refresh: true });
      }
    });

    return () => {
      cancelled = true;
      data.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const handle = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open]);

  if (!ready) {
    if (hideGuestLinks) return null;
    return (
      <div className="h-9 w-16 rounded-md border border-border bg-card sm:w-28" aria-hidden="true" />
    );
  }

  if (!auth) {
    if (hideGuestLinks) {
      return (
        <div className="hidden shrink-0 items-center gap-2 lg:flex" data-no-i18n>
          <LocalizedLink
            to="/login"
            className="inline-flex min-h-9 shrink-0 items-center justify-center rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary"
          >
            {t("Sign in")}
          </LocalizedLink>
          <LocalizedLink
            to="/signup"
            className="inline-flex min-h-9 shrink-0 items-center justify-center rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
          >
            {t("Sign up")}
          </LocalizedLink>
        </div>
      );
    }
    return (
      <div className="flex shrink-0 items-center gap-1 sm:gap-2" data-no-i18n>
        <LocalizedLink
          to="/login"
          className="inline-flex min-h-9 shrink-0 items-center justify-center rounded-md border border-border bg-card px-2.5 py-2 text-xs font-semibold hover:bg-secondary sm:px-3 sm:py-1.5"
        >
          <span className="sm:hidden">In</span>
          <span className="hidden sm:inline">{t("Sign in")}</span>
        </LocalizedLink>
        <LocalizedLink
          to="/signup"
          className="inline-flex min-h-9 shrink-0 items-center justify-center rounded-md bg-primary px-2.5 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 sm:px-4 sm:py-2"
        >
          <span className="sm:hidden">Join</span>
          <span className="hidden sm:inline">{t("Sign up")}</span>
        </LocalizedLink>
      </div>
    );
  }

  const initial = auth.name.charAt(0).toUpperCase();

  return (
    <div className="flex items-center gap-2" data-no-i18n>
      {auth.role === "admin" && (
        <Link
          to="/admin/users"
          className="hidden rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary sm:inline-flex"
        >
          {t("Admin panel")}
        </Link>
      )}
      <div className="relative" ref={menuRef}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Open account menu"
          aria-expanded={open}
          aria-haspopup="menu"
          className="touch-target flex min-h-9 items-center gap-1.5 rounded-md border border-border bg-card px-1.5 py-1 hover:bg-secondary sm:gap-2 sm:px-2"
        >
          <div className="grid h-7 w-7 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {initial}
          </div>
          <span className="hidden max-w-[140px] truncate text-xs font-medium text-foreground sm:inline">
            {auth.name}
          </span>
          <ChevronDown
            className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className={`absolute right-0 top-full z-50 mt-2 w-44 origin-top-right rounded-lg border border-border bg-card p-1 shadow-lg transition-all duration-300 ease-out ${
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-2 scale-95 opacity-0"
          }`}
        >
          <LocalizedLink
            to="/dashboard"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="block rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            {t("Dashboard")}
          </LocalizedLink>
          <LocalizedLink
            to="/account"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="block rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            {t("Settings")}
          </LocalizedLink>
          {auth.role === "admin" && (
            <Link
              to="/admin/users"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="block rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              {t("Admin panel")}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
