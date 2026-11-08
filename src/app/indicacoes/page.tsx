import { indicacaoCategorias, produtos } from "@data/indicacoes";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AffiliateNotice } from "@/components/commerce/AffiliateNotice";
import { ProductCard } from "@/components/commerce/ProductCard";

export const metadata = buildMetadata({
  title: "Indicações: produtos úteis para pequenos negócios",
  description:
    "Seleção de produtos do Mercado Livre, Shopee e Amazon que ajudam a organizar, vender e enviar melhor no dia a dia do pequeno negócio.",
  path: "/indicacoes",
});

export default function IndicacoesPage() {
  const groups = indicacaoCategorias
    .map((c) => ({ ...c, items: produtos.filter((p) => p.categoria === c.slug) }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="container-page py-10">
      <Breadcrumbs items={[{ name: "Indicações", href: "/indicacoes" }]} />

      <header className="mt-5 max-w-3xl">
        <p className="eyebrow">Indicações</p>
        <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl">Produtos que ajudam no dia a dia do negócio</h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-600">
          Uma seleção curta de itens úteis para organizar, fotografar, embalar e vender melhor. Só indicamos o que faz
          sentido para pequenos negócios.
        </p>
      </header>

      <AffiliateNotice className="mt-6" />

      <nav aria-label="Categorias de indicações" className="mt-6 flex flex-wrap gap-2">
        {groups.map((g) => (
          <a
            key={g.slug}
            href={`#${g.slug}`}
            className="inline-flex min-h-[44px] items-center rounded-full border border-navy-200 bg-white px-4 text-sm font-semibold text-navy-800 hover:bg-navy-50"
          >
            <span aria-hidden="true" className="mr-1">{g.emoji}</span>
            {g.nome}
          </a>
        ))}
      </nav>

      {groups.map((g) => (
        <section key={g.slug} id={g.slug} aria-labelledby={`t-${g.slug}`} className="mt-12 scroll-mt-24">
          <h2 id={`t-${g.slug}`} className="text-2xl font-extrabold">
            <span aria-hidden="true">{g.emoji} </span>
            {g.nome}
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {g.items.map((p) => (
              <ProductCard key={p.id} produto={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
