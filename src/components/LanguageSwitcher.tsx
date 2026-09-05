import { Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n/context";
import { LANGUAGES, type Lang } from "@/lib/i18n/dictionary";
import { getLocaleLinkProps } from "@/lib/i18n/locale-nav";
import {
  isLocalizablePath,
  localizePath,
  stripLocalePrefix,
} from "@/lib/i18n/locale-path";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });
  const search = useRouterState({ select: (s) => s.location.search });
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const active = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  const switchLanguage = (next: Lang) => {
    setOpen(false);
    const withHash = hash
      ? `${pathname}${hash.startsWith("#") ? hash : `#${hash}`}`
      : pathname;
    const target = localizePath(withHash, next);
    const onLocalizable = isLocalizablePath(stripLocalePrefix(pathname));

    if (onLocalizable && target !== withHash) {
      // Set language immediately so PageTranslator re-runs as soon as the
      // remounted English source is in the DOM (LocaleSync will confirm from URL).
      setLang(next);
      const link = getLocaleLinkProps(withHash, next);
      void navigate({
        to: link.to as never,
        params: link.params as never,
        hash: link.hash,
        search: search as never,
      });
      return;
    }

    setLang(next);
  };

  return (
    <div ref={ref} className={cn("relative", className)} data-no-i18n>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <Globe className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
        {active.short}
      </button>
      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg"
        >
          {LANGUAGES.map((option) => (
            <li key={option.code}>
              <button
                type="button"
                role="option"
                aria-selected={option.code === lang}
                onClick={() => switchLanguage(option.code as Lang)}
                className={cn(
                  "flex w-full items-center justify-between px-3 py-2 text-left text-sm transition-colors hover:bg-secondary",
                  option.code === lang ? "font-semibold text-primary" : "text-foreground",
                )}
              >
                {option.label}
                <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
                  {option.short}
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
