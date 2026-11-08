import type { Metadata } from "next";
import { siteConfig } from "@data/site.config";

interface BuildMetadataInput {
  title: string;
  description: string;
  /** Caminho começando com "/" (ex.: "/blog/meu-artigo"). */
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

export function absoluteUrl(path = "/"): string {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
