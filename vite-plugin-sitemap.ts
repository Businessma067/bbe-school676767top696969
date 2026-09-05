import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import type { Plugin } from "vite";
import { renderSitemapXml } from "./src/lib/sitemap";

/** Writes the generated sitemap where the host actually serves `/sitemap.xml` from. */
export function writeSitemapXml(cwd = process.cwd()): string {
  const xml = renderSitemapXml();
  mkdirSync(resolve(cwd, "public"), { recursive: true });
  for (const name of ["sitemap.xml", "pages-sitemap.xml"]) {
    const dest = resolve(cwd, "public", name);
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, xml);
  }
  return xml;
}

/**
 * Cloudflare/Lovable serve files in `public/` ahead of the Worker, so a
 * generated static `sitemap.xml` is what crawlers actually receive.
 */
export function sitemapPlugin(): Plugin {
  return {
    name: "generate-sitemap",
    buildStart() {
      writeSitemapXml();
    },
    configureServer() {
      writeSitemapXml();
    },
    generateBundle() {
      const xml = renderSitemapXml();
      this.emitFile({ type: "asset", fileName: "sitemap.xml", source: xml });
      this.emitFile({ type: "asset", fileName: "pages-sitemap.xml", source: xml });
    },
  };
}
