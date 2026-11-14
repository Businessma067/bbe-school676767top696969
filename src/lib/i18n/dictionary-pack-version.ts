import { useSyncExternalStore } from "react";
import {
  getDictionaryPackVersion,
  subscribeDictionaryPacks,
} from "./dictionary";

/** Re-render JSX / PageTranslator when lazy packs merge into the registry. */
export function useDictionaryPackVersion(): number {
  return useSyncExternalStore(
    subscribeDictionaryPacks,
    getDictionaryPackVersion,
    () => 0,
  );
}
