import { createContext, createElement, useContext, type ReactNode } from "react";
import { translate, type Lang } from "../dictionary";

/**
 * Language used for JSX text on the current page. Study surfaces pin this to
 * English (same rule as PageTranslator), even when the chrome language is DE.
 */
export const PageLangContext = createContext<Lang>("en");

const NoTranslateContext = createContext(false);

/** Host tags whose text must stay verbatim (same set PageTranslator skips). */
const VERBATIM_SUBTREE_TAGS = new Set(["code", "pre", "svg", "math", "kbd", "samp"]);

/** Host tags that require plain-string children. */
const STRING_ONLY_TAGS = new Set(["script", "style", "textarea", "title", "option"]);

function hasTranslation(text: string): boolean {
  return translate(text, "de") !== null || translate(text, "uk") !== null;
}

function I18nText({ text }: { text: string }) {
  const lang = useContext(PageLangContext);
  const verbatim = useContext(NoTranslateContext);
  if (verbatim || lang === "en") return text;
  return translate(text, lang) ?? text;
}

function localizeChildren(children: unknown, inArray: boolean, index = 0): unknown {
  if (typeof children === "string") {
    if (!hasTranslation(children)) return children;
    return createElement(
      I18nText,
      inArray ? { key: `__i18n_${index}`, text: children } : { text: children },
    );
  }
  if (Array.isArray(children)) {
    let changed = false;
    const next = children.map((child, i) => {
      const localized = localizeChildren(child, true, i);
      if (localized !== child) changed = true;
      return localized;
    });
    return changed ? next : children;
  }
  return children;
}

function isVerbatimElement(type: unknown, props: Record<string, unknown>): boolean {
  if (props["data-no-i18n"] !== undefined && props["data-no-i18n"] !== false) return true;
  if (typeof type === "string" && VERBATIM_SUBTREE_TAGS.has(type)) return true;
  const className = props.className;
  return typeof className === "string" && /\bkatex\b/.test(className);
}

/**
 * Rewrites JSX props so translatable string children render through
 * `I18nText`. Server and client derive the language from the URL, so `/de`
 * and `/uk` pages are server-rendered in their language and hydrate cleanly.
 */
export function localizeJsxProps(type: unknown, props: unknown): unknown {
  if (!props || typeof props !== "object") return props;
  const record = props as Record<string, unknown>;
  if (!("children" in record) || record.children == null) return props;
  if (typeof type === "string" && STRING_ONLY_TAGS.has(type)) return props;

  if (isVerbatimElement(type, record)) {
    // Positional children keep React's "static list" semantics (no key warnings).
    const inner = Array.isArray(record.children)
      ? (record.children as ReactNode[])
      : [record.children as ReactNode];
    return {
      ...record,
      children: createElement(NoTranslateContext.Provider, { value: true }, ...inner),
    };
  }

  const children = localizeChildren(record.children, false);
  return children === record.children ? props : { ...record, children };
}
