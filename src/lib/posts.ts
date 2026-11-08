import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { CategorySlug } from "@data/site.config";
import { siteConfig } from "@data/site.config";
import { slugify } from "./utils";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export interface PostSource {
  label: string;
  url: string;
}

export interface PostCta {
  title: string;
  text: string;
  /** id da solução em data/solucoes.ts (ex.: "estoque"). Define a mensagem do WhatsApp. */
  solution?: string;
  buttonLabel?: string;
}

export interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  category: CategorySlug;
  date: string;
  updated: string;
  author: string;
  tags: string[];
  readingTime: number;
  sources: PostSource[];
  cta?: PostCta;
  hasAffiliate: boolean;
  /** Tipo editorial, usado só para organizar o mix 80/15/5. */
  kind: "educativo" | "solucao" | "indicacao";
}

export interface Post {
  meta: PostMeta;
  content: string;
  headings: Heading[];
}

function toIsoDate(value: unknown, fallback: string): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string" && value.length >= 10) return value.slice(0, 10);
  return fallback;
}

function stripMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`]/g, "")
    .trim();
}

export function extractHeadings(markdown: string): Heading[] {
  const headings: Heading[] = [];
  let inFence = false;
  for (const line of markdown.split("\n")) {
    if (line.trim().startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const match = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (!match) continue;
    const text = stripMarkdown(match[2]);
    headings.push({ id: slugify(text), text, level: match[1].length as 2 | 3 });
  }
  return headings;
}

function readingTimeMinutes(markdown: string): number {
  const words = markdown.replace(/```[\s\S]*?```/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function parsePostFile(file: string): Post {
  const slug = file.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const date = toIsoDate(data.date, "2026-01-01");

  const meta: PostMeta = {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    category: (data.category ?? "financas") as CategorySlug,
    date,
    updated: toIsoDate(data.updated, date),
    author: String(data.author ?? siteConfig.author.name),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingTime: readingTimeMinutes(content),
    sources: Array.isArray(data.sources) ? (data.sources as PostSource[]) : [],
    cta: data.cta as PostCta | undefined,
    hasAffiliate: Boolean(data.hasAffiliate),
    kind: (data.kind ?? "educativo") as PostMeta["kind"],
  };

  return { meta, content, headings: extractHeadings(content) };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => parsePostFile(f).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  for (const ext of ["mdx", "md"]) {
    const file = `${slug}.${ext}`;
    if (fs.existsSync(path.join(POSTS_DIR, file))) return parsePostFile(file);
  }
  return null;
}

export function getRelatedPosts(current: PostMeta, limit = 3): PostMeta[] {
  const others = getAllPosts().filter((p) => p.slug !== current.slug);
  const scored = others.map((p) => {
    let score = p.category === current.category ? 3 : 0;
    score += p.tags.filter((t) => current.tags.includes(t)).length;
    return { p, score };
  });
  return scored
    .sort((a, b) => b.score - a.score || (a.p.date < b.p.date ? 1 : -1))
    .slice(0, limit)
    .map((s) => s.p);
}
