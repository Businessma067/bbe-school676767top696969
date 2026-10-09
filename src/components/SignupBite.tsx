import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { X } from "lucide-react";

import { LocalizedLink } from "@/components/LocalizedLink";
import { supabase } from "@/integrations/supabase/client";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";

const DISMISS_KEY = "bbe-signup-bite-dismissed";

/** Small homepage nudge beside the chat button. Hidden once a session exists. */
export function SignupBite() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const home = stripLocalePrefix(pathname) === "/";
  const [guest, setGuest] = useState<boolean | null>(null);
  const [clearOfHero, setClearOfHero] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const apply = (signedIn: boolean) => {
      if (!cancelled) setGuest(!signedIn);
    };

    const refresh = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        apply(!!data.session);
      } catch {
        apply(true);
      }
    };

    void refresh();
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (
        event === "INITIAL_SESSION" ||
        event === "SIGNED_IN" ||
        event === "SIGNED_OUT" ||
        event === "TOKEN_REFRESHED" ||
        event === "USER_UPDATED"
      ) {
        apply(!!session);
      }
    });

    return () => {
      cancelled = true;
      data.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!home || guest !== true) return;
    const update = () => {
      const hero = document.querySelector("main > section");
      if (!hero) {
        setClearOfHero(window.scrollY > 520);
        return;
      }
      setClearOfHero(hero.getBoundingClientRect().bottom < window.innerHeight - 120);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [home, guest]);

  let dismissed = false;
  if (typeof window !== "undefined") {
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      dismissed = false;
    }
  }

  if (!home || guest !== true || dismissed || !clearOfHero) return null;

  const dismiss = () => {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    setGuest(false);
  };

  return (
    <aside className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[calc(max(1rem,env(safe-area-inset-right))+4.25rem)] z-40 w-[min(17.5rem,calc(100vw-6.75rem))]">
      <div className="flex items-start gap-2 rounded-2xl border border-border bg-background p-3 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.45)]">
        <div className="min-w-0 flex-1">
          <p className="font-display text-[13px] font-semibold leading-snug text-foreground">
            Register now and get 100+ free tasks
          </p>
          <LocalizedLink
            to="/signup"
            search={{ returnTo: "/demo-practice" }}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-foreground px-3 py-1.5 text-xs font-semibold text-background transition-colors hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Register now
          </LocalizedLink>
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </aside>
  );
}
