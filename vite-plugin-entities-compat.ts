import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";

/**
 * REQUIRED for Cloudflare/Nitro builds when entities@6 is hoisted.
 * @react-email/render imports `entities/lib/decode.js` (v4 layout).
 * entities@6 dropped `lib/` — map those paths to the v6 ESM builds.
 * If entities@4 is present (lib/ exists), leave imports alone.
 */
export function entitiesCompatPlugin(): Plugin {
  const root = path.resolve(process.cwd(), "node_modules/entities");
  const decodeCandidates = [
    path.join(root, "lib/decode.js"),
    path.join(root, "dist/esm/decode.js"),
  ];
  const encodeCandidates = [
    path.join(root, "lib/encode.js"),
    path.join(root, "dist/esm/encode.js"),
  ];
  const decode = decodeCandidates.find((p) => fs.existsSync(p));
  const encode = encodeCandidates.find((p) => fs.existsSync(p));

  return {
    name: "entities-compat",
    enforce: "pre",
    config() {
      if (!decode || !encode) return {};
      // Only alias when the requested v4 path is missing (entities v6).
      const needsAlias = !fs.existsSync(path.join(root, "lib/decode.js"));
      if (!needsAlias) return {};
      return {
        resolve: {
          alias: {
            "entities/lib/decode.js": decode,
            "entities/lib/encode.js": encode,
          },
        },
      };
    },
  };
}
