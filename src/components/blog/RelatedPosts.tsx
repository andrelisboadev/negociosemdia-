import type { PostMeta } from "@/lib/posts";
import { ArticleCard } from "./ArticleCard";

export function RelatedPosts({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="relacionados" className="mt-14">
      <h2 id="relacionados" className="text-2xl font-extrabold">
        Leia também
      </h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <div key={p.slug} className="relative">
            <ArticleCard post={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
