import { useNavigate, useRouterState } from "@tanstack/react-router";
import { useCallback } from "react";
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
 */
export function useLocalizedNavigate() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const effective = effectiveLangFromLocation(pathname, lang);

  return useCallback(
    ({ to, search, replace, hash }: NavigateOpts) => {
      const pathWithHash = hash ? `${to}#${hash}` : to;
      const link = getLocaleLinkProps(pathWithHash, effective);
      return navigate({
        to: link.to as never,
        params: link.params as never,
        ...(search ? { search: search as never } : {}),
        ...(link.hash || hash ? { hash: (link.hash ?? hash) as never } : {}),
        ...(replace != null ? { replace } : {}),
      });
    },
    [effective, navigate],
  );
}
