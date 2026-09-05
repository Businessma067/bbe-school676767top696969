import { Link, useRouterState } from "@tanstack/react-router";
import type { ComponentPropsWithoutRef } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { effectiveLangFromLocation, getLocaleLinkProps } from "@/lib/i18n/locale-nav";

type LocalizedLinkProps = {
  to: string;
  hash?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "to" | "params" | "hash">;

/**
 * Link that stays on `/de/...` or `/uk/...` while browsing a translated site,
 * and uses plain English routes on the default site.
 */
export function LocalizedLink({ to, hash, ...props }: LocalizedLinkProps) {
  const { lang } = useLanguage();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const effective = effectiveLangFromLocation(pathname, lang);
  const pathWithHash = hash ? `${to}#${hash}` : to;
  const link = getLocaleLinkProps(pathWithHash, effective);

  return (
    <Link
      to={link.to as never}
      params={link.params as never}
      hash={link.hash}
      {...props}
    />
  );
}
