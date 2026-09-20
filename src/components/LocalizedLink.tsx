import { Link, useRouterState } from "@tanstack/react-router";
import type { ComponentPropsWithoutRef } from "react";
import { entryLangForDestination } from "@/lib/exam-track";
import { useLanguage } from "@/lib/i18n/context";
import type { Lang } from "@/lib/i18n/dictionary";
import { effectiveLangFromLocation, getLocaleLinkProps } from "@/lib/i18n/locale-nav";

type LocalizedLinkProps = {
  to: string;
  hash?: string;
  search?: Record<string, unknown>;
  /** Force a language for this link (overrides track defaults). */
  lang?: Lang;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "to" | "params" | "hash" | "search">;

/**
 * Link that stays on `/de/...` or `/uk/...` while browsing a translated site,
 * and uses plain English routes on the default site.
 *
 * Entering a track from outside uses that track's default language:
 * BBE → English, WiSo → German (e.g. homepage CTAs).
 */
export function LocalizedLink({ to, hash, search, lang: langOverride, ...props }: LocalizedLinkProps) {
  const { lang, setLang } = useLanguage();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const entryLang = entryLangForDestination(to, pathname);
  const effective =
    langOverride ?? entryLang ?? effectiveLangFromLocation(pathname, lang);
  const pathWithHash = hash ? `${to}#${hash}` : to;
  const link = getLocaleLinkProps(pathWithHash, effective);

  const userOnClick = props.onClick;
  const onClick: typeof userOnClick = (event) => {
    if (langOverride) setLang(langOverride);
    else if (entryLang) setLang(entryLang);
    userOnClick?.(event);
  };

  return (
    <Link
      to={link.to as never}
      params={link.params as never}
      hash={link.hash}
      search={search as never}
      {...props}
      onClick={onClick}
    />
  );
}
