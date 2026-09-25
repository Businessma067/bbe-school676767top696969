export const THEME_STORAGE_KEY = "bbe.theme";

export type Theme = "light" | "dark";

/** Default is always light. Dark only when the user explicitly chose it. */
export const THEME_INIT_SCRIPT = `(function(){try{var d=localStorage.getItem("${THEME_STORAGE_KEY}")==="dark";document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){document.documentElement.classList.remove("dark");document.documentElement.style.colorScheme="light";}})();`;

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function persistTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* storage unavailable */
  }
}

export function toggleTheme(): Theme {
  const next: Theme = document.documentElement.classList.contains("dark") ? "light" : "dark";
  applyTheme(next);
  persistTheme(next);
  return next;
}
