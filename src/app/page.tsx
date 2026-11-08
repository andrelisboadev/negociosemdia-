import Link from "next/link";
import { siteConfig } from "@data/site.config";
import { solucoes } from "@data/solucoes";
import { getAllPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { LeadCaptureForm } from "@/components/cta/LeadCaptureForm";

export const metadata = buildMetadata({
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const latest = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white">
        <div className="container-page grid items-center gap-10 py-14 md:grid-cols-5 md:py-20">
          <div className="md:col-span-3">
            <p className="eyebrow !text-sun-300">Para quem tem um pequeno negócio</p>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight !text-white sm:text-4xl lg:text-5xl">
              Organize o seu negócio, venda mais e fique em dia com os impostos.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100">
              Dicas simples e práticas sobre finanças, tributos, vendas e automação, sem termo difícil e sem enrolação.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/blog" className="btn-accent">
                Ler as dicas
              </Link>
              <a href="#receber-dicas" className="btn border border-white/30 text-white hover:bg-white/10">
                Receber dicas grátis
              </a>
            </div>
          </div>

          <ul className="space-y-3 md:col-span-2" aria-label="O que você encontra aqui">
            {[
              ["📘", "Guias passo a passo", "Do fluxo de caixa ao MEI, em linguagem de gente."],
              ["⚙️", "Ideias de automação", "Para ganhar tempo no dia a dia do negócio."],
              ["💳", "Comparativos", "Maquininhas e ferramentas, sem achismo."],
            ].map(([icon, title, text]) => (
              <li key={title} className="flex gap-4 rounded-2xl bg-white/10 p-4">
                <span aria-hidden="true" className="text-2xl">{icon}</span>
                <div>
                  <p className="font-display font-bold text-white">{title}</p>
                  <p className="text-sm text-navy-100">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Últimos artigos */}
      <section className="container-page py-14" aria-labelledby="ultimos">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Blog</p>
            <h2 id="ultimos" className="mt-1 text-2xl font-extrabold sm:text-3xl">
              Últimos artigos
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-navy-700 underline underline-offset-4">
            Ver todos
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post) => (
            <div key={post.slug} className="relative">
              <ArticleCard post={post} />
            </div>
          ))}
        </div>
      </section>

      {/* Categorias */}
      <section className="bg-white py-14" aria-labelledby="categorias">
        <div className="container-page">
          <p className="eyebrow">Explore por assunto</p>
          <h2 id="categorias" className="mt-1 text-2xl font-extrabold sm:text-3xl">
            Categorias
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {siteConfig.categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/blog?categoria=${c.slug}`}
                  className="card flex h-full flex-col p-5 transition-shadow hover:shadow-lg"
                >
                  <span aria-hidden="true" className="text-3xl">{c.emoji}</span>
                  <span className="mt-3 font-display text-lg font-bold text-navy-900">{c.name}</span>
                  <span className="mt-1 text-sm leading-relaxed text-slate-600">{c.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Captura */}
      <section id="receber-dicas" className="container-page py-14" aria-labelledby="titulo-captura">
        <div className="card grid gap-8 p-6 sm:p-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">Newsletter</p>
            <h2 id="titulo-captura" className="mt-1 text-2xl font-extrabold sm:text-3xl">
              Receba dicas de negócios direto no seu e-mail ou WhatsApp
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              Conteúdo curto e útil para você aplicar na mesma semana. Sem spam, e você cancela quando quiser.
            </p>
          </div>
          <LeadCaptureForm source="home" />
        </div>
      </section>

      {/* Destaque discreto: Soluções */}
      <section className="container-page pb-6" aria-labelledby="solucoes-destaque">
        <div className="flex flex-col gap-4 rounded-2xl border border-navy-100 bg-navy-50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="solucoes-destaque" className="text-lg font-bold">
              Cansado de fazer tudo no caderno ou na planilha?
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Conheça {solucoes.length} sistemas e automações simples feitos para pequenos negócios.
            </p>
          </div>
          <Link href="/solucoes" className="btn-secondary shrink-0">
            Conhecer as soluções
          </Link>
        </div>
      </section>
    </>
  );
}
