import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { translate } from "@/lib/i18n/dictionary";

const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "NOSCRIPT",
  "CODE",
  "PRE",
  "TEXTAREA",
  "SVG",
  "MATH",
]);

/**
 * Translates rendered marketing copy in place. English is the source of
 * truth: originals are cached per text node and restored when switching back.
 */
export function PageTranslator() {
  const { lang } = useLanguage();

  useEffect(() => {
    if (typeof document === "undefined") return;
    const originals = new WeakMap<Text, string>();

    const shouldSkip = (node: Text) => {
      let el = node.parentElement;
      while (el) {
        if (SKIP_TAGS.has(el.tagName)) return true;
        if (el.hasAttribute("data-no-i18n")) return true;
        el = el.parentElement;
      }
      return false;
    };

    const applyTo = (root: Node) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes: Text[] = [];
      let current = walker.nextNode();
      while (current) {
        nodes.push(current as Text);
        current = walker.nextNode();
      }
      if (root.nodeType === Node.TEXT_NODE) nodes.push(root as Text);

      for (const node of nodes) {
        const value = node.nodeValue ?? "";
        if (!value.trim() || shouldSkip(node)) continue;
        const source = originals.get(node) ?? value;
        const next = lang === "en" ? source : (translate(source, lang) ?? source);
        if (next !== value) {
          if (!originals.has(node)) originals.set(node, source);
          node.nodeValue = next;
        }
      }
    };

    applyTo(document.body);

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === "characterData") {
          applyTo(record.target);
        } else {
          record.addedNodes.forEach((n) => applyTo(n));
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [lang]);

  return null;
}
