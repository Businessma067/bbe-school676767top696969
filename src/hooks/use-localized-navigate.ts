import { useNavigate, useRouterState } from "@tanstack/react-router";
import { useCallback } from "react";
import { entryLangForDestination } from "@/lib/exam-track";
import { useLanguage } from "@/lib/i18n/context";
import { effectiveLangFromLocation, getLocaleLinkProps } from "@/lib/i18n/locale-nav";

type NavigateOpts = {
  to: string;
  search?: Record<string, unknown>;
  replace?: boolean;
  hash?: string;
};

/**
 * Programmatic navigation that stays on `/de/...` or `/uk/...` when the
 * target path is localizable.
 *
 * Entering a track from outside uses that track's default language
 * (BBE → English, WiSo → German).
 *
 * Always sets `search` (default `{}`) so leaving `/dashboard?tab=games` does
 * not briefly clear the tab on the dashboard before the destination mounts.
 */
export function useLocalizedNavigate() {
  const navigate = useNavigate();
  const { lang, setLang } = useLanguage();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const effective = effectiveLangFromLocation(pathname, lang);

  return useCallback(
    ({ to, search, replace, hash }: NavigateOpts) => {
      const entryLang = entryLangForDestination(to, pathname);
      const linkLang = entryLang ?? effective;
      if (entryLang) setLang(entryLang);
      const pathWithHash = hash ? `${to}#${hash}` : to;
      const link = getLocaleLinkProps(pathWithHash, linkLang);
      return navigate({
        to: link.to as never,
        params: link.params as never,
        search: (search ?? {}) as never,
        ...(link.hash || hash ? { hash: (link.hash ?? hash) as never } : {}),
        ...(replace != null ? { replace } : {}),
      });
    },
    [effective, navigate, pathname, setLang],
  );
}
