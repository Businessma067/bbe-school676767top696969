import { createFileRoute } from "@tanstack/react-router";
import { sitemapXmlResponse } from "@/lib/sitemap";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => sitemapXmlResponse("GET"),
      HEAD: async () => sitemapXmlResponse("HEAD"),
    },
  },
});
