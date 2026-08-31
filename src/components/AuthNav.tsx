import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { getCurrentAuthState, type AuthState } from "@/lib/auth-ui";
import { ChevronDown } from "lucide-react";

export function AuthNav() {
  const [auth, setAuth] = useState<AuthState | null>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const refresh = async () => {
      const next = await getCurrentAuthState();
      if (!cancelled) {
        setAuth(next);
        setReady(true);
      }
    };

    void refresh();
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED")
        void refresh();
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

  if (!ready)
    return <div className="h-9 w-28 rounded-md border border-border bg-card" aria-hidden="true" />;

  if (!auth) {
    return (
      <div className="flex items-center gap-1 sm:gap-2">
        <Link
          to="/login"
          className="rounded-md border border-border bg-card px-2 py-2 text-xs font-semibold hover:bg-secondary sm:px-3 sm:py-1.5"
        >
          <span className="sm:hidden">In</span>
          <span className="hidden sm:inline">Sign in</span>
        </Link>
        <Link
          to="/signup"
          className="inline-flex min-h-9 items-center justify-center rounded-md bg-primary px-2.5 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 sm:px-4 sm:py-2"
        >
          <span className="sm:hidden">Join</span>
          <span className="hidden sm:inline">Sign up</span>
        </Link>
      </div>
    );
  }

  const initial = auth.name.charAt(0).toUpperCase();

  return (
    <div className="flex items-center gap-2">
      {auth.role === "admin" && (
        <Link
          to="/admin"
          className="hidden rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary sm:inline-flex"
        >
          Admin panel
        </Link>
      )}
      <div className="relative" ref={menuRef}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1 hover:bg-secondary"
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
          <Link
            to="/dashboard"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="block rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            Dashboard
          </Link>
          <Link
            to="/account"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="block rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            Settings
          </Link>
          {auth.role === "admin" && (
            <Link
              to="/admin"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="block rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              Admin panel
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
