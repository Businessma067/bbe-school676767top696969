import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n/context";
import { translate } from "@/lib/i18n/dictionary";
import { isStudyContentPath } from "@/lib/i18n/locale-path";

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
 * truth: originals are cached per text node (across language changes) and
 * restored when switching back to English or re-translated into DE/UK.
 *
 * Study surfaces (full/lite course, games, mock builder, mock exams) always
 * stay in English so exam content is never rewritten.
 *
 * Important: when React updates live English UI (timers, ON/OFF labels, etc.),
 * we refresh the cached source instead of reverting the DOM to the first
 * value we saw — otherwise dynamic controls appear stuck.
 */
export function PageTranslator() {
  const { lang } = useLanguage();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const effectiveLang = isStudyContentPath(pathname) ? "en" : lang;
  // Persist across lang changes so DE↔UK can re-translate from English,
  // not from already-translated DOM text.
  const originalsRef = useRef(new WeakMap<Text, string>());
  const lastWrittenRef = useRef(new WeakMap<Text, string>());

  useEffect(() => {
    if (typeof document === "undefined") return;
    const originals = originalsRef.current;
    const lastWritten = lastWrittenRef.current;

    const shouldSkip = (node: Text) => {
      let el = node.parentElement;
      while (el) {
        if (SKIP_TAGS.has(el.tagName)) return true;
        if (el.hasAttribute("data-no-i18n")) return true;
        el = el.parentElement;
      }
      return false;
    };

    const writeNode = (node: Text, next: string) => {
      if ((node.nodeValue ?? "") === next) return;
      lastWritten.set(node, next);
      node.nodeValue = next;
    };

    const applyTo = (root: Node, fromCharacterData = false) => {
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

        // Echo of our own write — ignore so we don't loop.
        if (fromCharacterData && lastWritten.get(node) === value) {
          lastWritten.delete(node);
          continue;
        }

        if (effectiveLang === "en") {
          // Live English from React is authoritative (timers, toggles, counters).
          originals.set(node, value);
          continue;
        }

        if (fromCharacterData || !originals.has(node)) {
          // First sight, or React changed the English source text.
          originals.set(node, value);
        }

        const source = originals.get(node) ?? value;
        const next = translate(source, effectiveLang) ?? source;
        writeNode(node, next);
      }
    };

    applyTo(document.body);

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === "characterData") {
          applyTo(record.target, true);
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
  }, [effectiveLang]);

  return null;
}
