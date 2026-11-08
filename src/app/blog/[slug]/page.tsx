import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getCategory, siteConfig, type CategorySlug } from "@data/site.config";
import { getAllPosts, getPost, getRelatedPosts } from "@/lib/posts";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { CtaBox } from "@/components/cta/CtaBox";
import { LeadCaptureForm } from "@/components/cta/LeadCaptureForm";
import { AffiliateNotice } from "@/components/commerce/AffiliateNotice";

type Params = { slug: string };

/** CTA padrão por categoria, usado quando o artigo não define "cta" no frontmatter. */
const defaultSolutionByCategory: Record<CategorySlug, string> = {
  financas: "estoque",
  tributos: "orcamentos",
  vendas: "catalogo",
  marketing: "catalogo",
  automacao: "atendimento-ia",
};

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const { meta } = post;
  return buildMetadata({
    title: meta.title,
    description: meta.description,
    path: `/blog/${meta.slug}`,
    type: "article",
    publishedTime: meta.date,
    modifiedTime: meta.updated,
  });
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { meta, content, headings } = post;
  const category = getCategory(meta.category);
  const related = getRelatedPosts(meta);
  const url = absoluteUrl(`/blog/${meta.slug}`);
  const isTax = meta.category === "tributos";

  return (
    <article className="container-page py-10">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: meta.title,
          description: meta.description,
          datePublished: meta.date,
          dateModified: meta.updated,
          inLanguage: siteConfig.language,
          mainEntityOfPage: url,
          image: [absoluteUrl("/opengraph-image")],
          author: { "@type": "Person", name: meta.author },
          publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Blog", href: "/blog" },
          ...(category ? [{ name: category.name, href: `/blog?categoria=${category.slug}` }] : []),
          { name: meta.title, href: `/blog/${meta.slug}` },
        ]}
      />

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="min-w-0">
          <header>
            {category && (
              <Link
                href={`/blog?categoria=${category.slug}`}
                className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-800"
              >
                <span aria-hidden="true">{category.emoji}</span> {category.name}
              </Link>
            )}
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">{meta.title}</h1>
            <p className="mt-3 text-lg leading-relaxed text-slate-600">{meta.description}</p>
            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
              <span>
                Por <strong className="font-semibold text-navy-800">{meta.author}</strong>
              </span>
              <span aria-hidden="true">·</span>
              <span>
                Atualizado em{" "}
                <time dateTime={meta.updated} className={isTax ? "font-semibold text-navy-800" : undefined}>
                  {formatDate(meta.updated)}
                </time>
              </span>
              <span aria-hidden="true">·</span>
              <span>{meta.readingTime} min de leitura</span>
            </p>
          </header>

          {/* Índice no celular */}
          <details className="card mt-6 p-4 lg:hidden">
            <summary className="cursor-pointer font-display font-bold text-navy-900">Neste artigo</summary>
            <div className="mt-3">
              <ArticleToc headings={headings} />
            </div>
          </details>

          {meta.hasAffiliate && <AffiliateNotice className="mt-6" />}

          <div className="prose prose-slate mt-8 max-w-none">
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>

          {meta.sources.length > 0 && (
            <section
              aria-labelledby="fontes"
              className="mt-10 rounded-xl border border-navy-100 bg-white p-5 text-sm"
            >
              <h2 id="fontes" className="font-display text-base font-bold">
                {isTax ? "Fontes oficiais" : "Fontes"}
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {meta.sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-navy-700 underline underline-offset-2"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
              {isTax && (
                <p className="mt-3 text-slate-500">
                  Regras e valores podem mudar. Conferido em {formatDate(meta.updated)}. Em caso de dúvida, consulte o
                  portal oficial ou um contador.
                </p>
              )}
            </section>
          )}

          <CtaBox
            solution={meta.cta?.solution ?? defaultSolutionByCategory[meta.category]}
            title={meta.cta?.title}
            text={meta.cta?.text}
            buttonLabel={meta.cta?.buttonLabel}
          />

          <section aria-labelledby="captura-artigo" className="card p-6">
            <h2 id="captura-artigo" className="text-xl font-extrabold">
              Gostou? Receba as próximas dicas
            </h2>
            <p className="mt-1 mb-4 text-sm text-slate-600">Conteúdo curto e útil, sem spam.</p>
            <LeadCaptureForm source={`artigo:${meta.slug}`} />
          </section>
        </div>

        {/* Índice no desktop */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <ArticleToc headings={headings} />
          </div>
        </aside>
      </div>

      <RelatedPosts posts={related} />
    </article>
  );
}
