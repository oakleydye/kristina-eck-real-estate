import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // General crawlers — allow everything except the API
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      {
        // Aggressive SEO crawlers — slow them down on the properties section
        userAgent: ["AhrefsBot", "SemrushBot", "MJ12bot", "DotBot"],
        disallow: ["/api/", "/properties/"],
        crawlDelay: 10,
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
