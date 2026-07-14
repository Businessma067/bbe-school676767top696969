import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { getCurrentAuthState, type AuthState } from "@/lib/auth-ui";

export function AuthNav() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState<AuthState | null>(null);
  const [ready, setReady] = useState(false);

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
      if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") void refresh();
    });

    return () => {
      cancelled = true;
      data.subscription.unsubscribe();
    };
  }, []);

  if (!ready) return <div className="h-9 w-28 rounded-md border border-border bg-card" aria-hidden="true" />;

  if (!auth) {
    return (
      <div className="flex items-center gap-2">
        <Link
          to="/login"
          className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:bg-secondary"
        >
          Log in
        </Link>
        <Link
          to="/signup"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
        >
          Sign up
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
      <Link
        to="/account"
        className="flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1 hover:bg-secondary"
      >
        <div className="grid h-7 w-7 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
          {initial}
        </div>
        <span className="hidden max-w-[140px] truncate text-xs font-medium text-foreground sm:inline">{auth.name}</span>
      </Link>
      <button
        type="button"
        onClick={async () => {
          await supabase.auth.signOut();
          navigate({ to: "/" });
        }}
        className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-secondary"
      >
        Log out
      </button>
    </div>
  );
}
