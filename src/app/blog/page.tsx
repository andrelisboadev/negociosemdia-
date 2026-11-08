import { getAllPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BlogExplorer } from "@/components/blog/BlogExplorer";

export const metadata = buildMetadata({
  title: "Blog: dicas de finanças, tributos, vendas e automação",
  description:
    "Artigos práticos para pequenos empreendedores: fluxo de caixa, MEI, vendas pelo WhatsApp, marketing e automação do negócio.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container-page py-10">
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
      <header className="mt-5 max-w-2xl">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Blog</h1>
        <p className="mt-2 text-lg text-slate-600">
          Dicas práticas para organizar, vender mais e crescer com o seu pequeno negócio.
        </p>
      </header>
      <div className="mt-8">
        <BlogExplorer posts={posts} />
      </div>
    </div>
  );
}
