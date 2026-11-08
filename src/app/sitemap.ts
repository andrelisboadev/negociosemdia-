import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: Array<{ path: string; priority: number }> = [
    { path: "/", priority: 1 },
    { path: "/blog", priority: 0.9 },
    { path: "/solucoes", priority: 0.8 },
    { path: "/maquininhas", priority: 0.8 },
    { path: "/indicacoes", priority: 0.6 },
    { path: "/sobre", priority: 0.4 },
    { path: "/contato", priority: 0.4 },
    { path: "/politica-de-privacidade", priority: 0.2 },
    { path: "/aviso-de-afiliados", priority: 0.2 },
  ];

  const posts = getAllPosts();
  const latest = posts[0]?.updated ?? new Date().toISOString().slice(0, 10);

  return [
    ...staticPages.map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: latest,
      priority: p.priority,
    })),
    ...posts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: p.updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
