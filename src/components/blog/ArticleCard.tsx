import Link from "next/link";
import { getCategory } from "@data/site.config";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export function ArticleCard({ post }: { post: PostMeta }) {
  const category = getCategory(post.category);

  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <div className="flex items-center gap-2 bg-navy-900 px-5 py-3 text-sm font-semibold text-white">
        <span aria-hidden="true">{category?.emoji}</span>
        <span>{category?.name}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug">
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0 hover:text-navy-600 focus-visible:outline-offset-4"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{post.description}</p>
        <p className="mt-4 text-xs text-slate-500">
          {formatDate(post.updated)} · {post.readingTime} min de leitura
        </p>
      </div>
    </article>
  );
}
