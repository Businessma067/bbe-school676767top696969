// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules/katex")) return "katex";
            if (
              id.includes("node_modules/react-markdown") ||
              id.includes("node_modules/remark-") ||
              id.includes("node_modules/rehype-") ||
              id.includes("node_modules/unified") ||
              id.includes("node_modules/mdast-") ||
              id.includes("node_modules/hast-")
            ) {
              return "markdown";
            }
            if (id.includes("node_modules/recharts") || id.includes("node_modules/d3-")) {
              return "charts";
            }
            // Keep each math chapter bank in its own async chunk.
            const mathCh = id.match(/[/\\]src[/\\]data[/\\]math-ch(\d+)/);
            if (mathCh) return `math-ch${mathCh[1]}`;
            if (id.includes("/src/data/math-cases-ch") || id.includes("\\src\\data\\math-cases-ch")) {
              return "math-cases";
            }
            if (
              id.includes("/src/data/math-ch") ||
              id.includes("\\src\\data\\math-ch")
            ) {
              return "math-data";
            }
          },
        },
      },
    },
  },
});
