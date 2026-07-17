import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://umme-fatima-portfolio.vercel.app/sitemap.xml",
  };
}
