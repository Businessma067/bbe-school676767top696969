/**
 * After a Monobank iframe payment, redirectUrl loads inside the iframe.
 * Promote navigation to the top window so the user leaves the pay widget
 * and lands on our normal success / failed pages.
 */

export function breakOutOfIframe(): void {
  if (typeof window === "undefined") return;
  try {
    if (window.top && window.top !== window.self) {
      window.top.location.replace(window.location.href);
    }
  } catch {
    // Cross-origin parent — ignore.
  }
}

/** Navigate the top browsing context (escape Monobank iframe when needed). */
export function navigateTopWindow(pathWithSearch: string): void {
  if (typeof window === "undefined") return;
  let url: string;
  try {
    url = new URL(pathWithSearch, window.location.origin).toString();
  } catch {
    url = pathWithSearch;
  }
  try {
    if (window.top && window.top !== window.self) {
      window.top.location.replace(url);
      return;
    }
  } catch {
    // Fall through to same-window navigation.
  }
  window.location.replace(url);
}
