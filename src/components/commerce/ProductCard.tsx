import Image from "next/image";
import { siteConfig } from "@data/site.config";
import { indicacaoCategorias, lojaNomes, type Produto } from "@data/indicacoes";
import { AffiliateLink } from "./AffiliateLink";

export function ProductCard({ produto }: { produto: Produto }) {
  const href = produto.url ?? siteConfig.affiliateLinks.lojas[produto.loja] ?? "#";
  const categoria = indicacaoCategorias.find((c) => c.slug === produto.categoria);

  return (
    <article className="card flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] w-full bg-navy-50">
        {produto.image ? (
          <Image
            src={produto.image}
            alt={produto.titulo}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
            className="object-contain p-4"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-50 to-brand-50 text-5xl"
          >
            {categoria?.emoji ?? "🛍️"}
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy-800 shadow-sm">
          {lojaNomes[produto.loja]}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-bold leading-snug">{produto.titulo}</h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-600">
          <span className="font-semibold text-navy-800">Por que indicamos: </span>
          {produto.motivo}
        </p>
        <AffiliateLink href={href} variant="button">
          Ver na {lojaNomes[produto.loja]}
        </AffiliateLink>
      </div>
    </article>
  );
}
