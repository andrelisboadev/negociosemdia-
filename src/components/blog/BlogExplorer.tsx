"use client";

import { useEffect, useMemo, useState } from "react";
import { siteConfig, type CategorySlug } from "@data/site.config";
import type { PostMeta } from "@/lib/posts";
import { ArticleCard } from "./ArticleCard";
import { cn } from "@/lib/utils";

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function BlogExplorer({ posts }: { posts: PostMeta[] }) {
  // O filtro de categoria é lido da URL no navegador (após a hidratação). Assim a página
  // é gerada estática com TODOS os artigos no HTML, sem "pulo" de layout nem Suspense.
  const [activeCategory, setActiveCategory] = useState<CategorySlug | "">("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const read = () => {
      const c = new URLSearchParams(window.location.search).get("categoria") ?? "";
      const valid = siteConfig.categories.some((cat) => cat.slug === c);
      setActiveCategory(valid ? (c as CategorySlug) : "");
    };
    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, []);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return posts.filter((p) => {
      if (activeCategory && p.category !== activeCategory) return false;
      if (!q) return true;
      const haystack = normalize([p.title, p.description, p.tags.join(" ")].join(" "));
      return haystack.includes(q);
    });
  }, [posts, query, activeCategory]);

  function selectCategory(slug: CategorySlug | "") {
    setActiveCategory(slug);
    window.history.replaceState(null, "", slug ? `/blog?categoria=${slug}` : "/blog");
  }

  return (
    <div>
      <div role="search" className="space-y-4">
        <div>
          <label htmlFor="busca-blog" className="sr-only">
            Buscar artigos
          </label>
          <input
            id="busca-blog"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar artigos (ex.: MEI, estoque, WhatsApp)"
            className="min-h-[48px] w-full rounded-xl border border-navy-200 bg-white px-4 text-base text-navy-900 placeholder:text-slate-400"
          />
        </div>

        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          <button
            type="button"
            onClick={() => selectCategory("")}
            aria-pressed={activeCategory === ""}
            className={cn(
              "min-h-[44px] shrink-0 rounded-full border px-4 text-sm font-semibold transition-colors",
              activeCategory === ""
                ? "border-navy-900 bg-navy-900 text-white"
                : "border-navy-200 bg-white text-navy-800 hover:bg-navy-50",
            )}
          >
            Todos
          </button>
          {siteConfig.categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => selectCategory(c.slug)}
              aria-pressed={activeCategory === c.slug}
              className={cn(
                "min-h-[44px] shrink-0 rounded-full border px-4 text-sm font-semibold transition-colors",
                activeCategory === c.slug
                  ? "border-navy-900 bg-navy-900 text-white"
                  : "border-navy-200 bg-white text-navy-800 hover:bg-navy-50",
              )}
            >
              <span aria-hidden="true">{c.emoji} </span>
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-5 text-sm text-slate-500" aria-live="polite">
        {filtered.length === 1 ? "1 artigo encontrado" : `${filtered.length} artigos encontrados`}
      </p>

      <h2 className="sr-only">Artigos</h2>
      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.slug} className="relative">
              <ArticleCard post={p} />
            </div>
          ))}
        </div>
      ) : (
        <div className="card mt-6 p-8 text-center">
          <p className="font-semibold text-navy-900">Nenhum artigo encontrado.</p>
          <p className="mt-1 text-sm text-slate-600">Tente outra palavra ou escolha outra categoria.</p>
        </div>
      )}
    </div>
  );
}
