import { Globe, Loader2 } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { warmLanguage } from "@/lib/i18n/auto-translate";
import { useLanguage } from "@/lib/i18n/context";
import { LANGUAGES, type Lang } from "@/lib/i18n/dictionary";
import { isAutoLang } from "@/lib/i18n/languages";
import { getLocaleLinkProps } from "@/lib/i18n/locale-nav";
import {
  isLocalizablePath,
  localizePath,
  stripLocalePrefix,
} from "@/lib/i18n/locale-path";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });
  const search = useRouterState({ select: (s) => s.location.search });
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [switching, setSwitching] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const requestRef = useRef(0);

  const closeMenu = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) closeMenu();
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open, closeMenu]);

  const active = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];
  const needle = query.trim().toLowerCase();
  const visible = LANGUAGES.filter(
    (option) =>
      !needle ||
      option.label.toLowerCase().includes(needle) ||
      option.short.toLowerCase().includes(needle) ||
      option.code.toLowerCase().includes(needle),
  );

  const switchLanguage = (next: Lang) => {
    closeMenu();
    if (next === lang) return;
    const request = ++requestRef.current;
    try {
      window.localStorage.setItem("bbe.lang", next);
    } catch {
      /* storage unavailable */
    }
    const withHash = hash
      ? `${pathname}${hash.startsWith("#") ? hash : `#${hash}`}`
      : pathname;
    const target = localizePath(withHash, next);
    const onLocalizable = isLocalizablePath(stripLocalePrefix(pathname));

    void (async () => {
      if (isAutoLang(next)) {
        setSwitching(true);
        // Wait briefly for a clean swap, then show the language and let the
        // page translate progressively instead of looking frozen.
        await Promise.race([
          warmLanguage(next).catch(() => undefined),
          new Promise((resolve) => setTimeout(resolve, 1200)),
        ]);
      }
      if (requestRef.current !== request) return;
      setSwitching(false);
      if (onLocalizable && target !== withHash) {
        const link = getLocaleLinkProps(withHash, next);
        if (isAutoLang(next)) setLang(next);
        void navigate({
          to: link.to as never,
          params: link.params as never,
          hash: link.hash,
          search: search as never,
        });
        return;
      }
      setLang(next);
    })();
  };

  return (
    <div ref={ref} className={cn("relative shrink-0", className)} data-no-i18n>
      <button
        type="button"
        onClick={() => {
          if (open) closeMenu();
          else setOpen(true);
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-busy={switching}
        aria-label={t("Change language")}
        className="touch-target inline-flex h-9 min-w-9 shrink-0 items-center justify-center gap-1 rounded-md border border-border bg-card px-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring sm:h-auto sm:min-w-0 sm:gap-1.5 sm:px-2.5 sm:py-1.5"
      >
        {switching ? (
          <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin text-muted-foreground" aria-hidden="true" />
        ) : (
          <Globe className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
        )}
        {active.short}
      </button>
      {open ? (
        <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-md border border-border bg-card shadow-lg">
          <div className="border-b border-border p-2">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              autoFocus
              placeholder={t("Search language")}
              aria-label={t("Search language")}
              className="h-8 w-full rounded-md border border-border bg-background px-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <ul role="listbox" className="max-h-[min(24rem,70vh)] overflow-y-auto py-1">
            {visible.map((option, index) => {
              const showAutoHint = !needle && option.auto && !visible[index - 1]?.auto;
              return (
                <li key={option.code}>
                  {showAutoHint ? (
                    <p className="px-3 pb-1 pt-2 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      Automatic
                    </p>
                  ) : null}
                  <button
                    type="button"
                    role="option"
                    aria-selected={option.code === lang}
                    onClick={() => switchLanguage(option.code)}
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
              );
            })}
            {visible.length === 0 ? (
              <li className="px-3 py-2 text-sm text-muted-foreground">No match</li>
            ) : null}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
