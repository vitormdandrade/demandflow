import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Next.js App Router generates /robots.txt from this file automatically.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/success"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
