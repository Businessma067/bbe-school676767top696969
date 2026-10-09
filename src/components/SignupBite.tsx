import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { X } from "lucide-react";

import { LocalizedLink } from "@/components/LocalizedLink";
import { getCurrentAuthState } from "@/lib/auth-ui";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";

const DISMISS_KEY = "bbe-signup-bite-dismissed";

/** Small homepage nudge above the chat button. Guests only. */
export function SignupBite() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const home = stripLocalePrefix(pathname) === "/";
  const [open, setOpen] = useState(false);
  const [clearOfHero, setClearOfHero] = useState(false);

  useEffect(() => {
    if (!home) {
      setOpen(false);
      return;
    }
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") return;
    } catch {
      /* private mode */
    }

    let cancelled = false;
    const timer = window.setTimeout(() => {
      getCurrentAuthState()
        .then((auth) => {
          if (!cancelled && !auth) setOpen(true);
        })
        .catch(() => {
          if (!cancelled) setOpen(true);
        });
    }, 900);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [home]);

  useEffect(() => {
    if (!home || !open) return;
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
  }, [home, open]);

  if (!open || !clearOfHero) return null;

  const dismiss = () => {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
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
