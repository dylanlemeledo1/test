import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nebula.app";
  const routes = [
    "",
    "/features",
    "/demo",
    "/pricing",
    "/about",
    "/changelog",
    "/contact",
    "/login",
    "/signup",
    "/legal/privacy",
    "/legal/terms",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
