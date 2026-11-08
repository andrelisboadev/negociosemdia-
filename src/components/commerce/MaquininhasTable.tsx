import { siteConfig } from "@data/site.config";
import type { Maquininha } from "@data/maquininhas";
import { formatDate } from "@/lib/utils";
import { AffiliateLink } from "./AffiliateLink";

function pct(value: number | null): string {
  if (value === null) return "—";
  return `${value.toFixed(2).replace(".", ",")}%`;
}

function linkFor(m: Maquininha): string {
  return siteConfig.affiliateLinks.maquininhas[m.id] ?? "#";
}

export function MaquininhasTable({ items }: { items: Maquininha[] }) {
  return (
    <div>
      {/* Tabela (telas médias e maiores) */}
      <div className="card hidden overflow-x-auto md:block">
        <table className="w-full min-w-[860px] border-collapse text-left text-sm">
          <caption className="sr-only">Comparativo de maquininhas de cartão</caption>
          <thead className="bg-navy-900 text-white">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Maquininha</th>
              <th scope="col" className="px-4 py-3 font-semibold">Débito</th>
              <th scope="col" className="px-4 py-3 font-semibold">Crédito 1x</th>
              <th scope="col" className="px-4 py-3 font-semibold">Crédito 12x</th>
              <th scope="col" className="px-4 py-3 font-semibold">Recebimento</th>
              <th scope="col" className="px-4 py-3 font-semibold">Para quem serve</th>
              <th scope="col" className="px-4 py-3 font-semibold"><span className="sr-only">Contratar</span></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-100">
            {items.map((m) => (
              <tr key={m.id} className="align-top">
                <th scope="row" className="px-4 py-4 text-base font-bold text-navy-900">
                  {m.nome}
                  {m.destaque && (
                    <span className="mt-1 block w-fit rounded-full bg-sun-100 px-2 py-0.5 text-xs font-semibold text-sun-700">
                      {m.destaque}
                    </span>
                  )}
                  <span className="mt-1 block text-xs font-normal text-slate-500">
                    {m.mensalidade} · {m.preco}
                  </span>
                </th>
                <td className="px-4 py-4">{pct(m.taxaDebito)}</td>
                <td className="px-4 py-4">{pct(m.taxaCredito1x)}</td>
                <td className="px-4 py-4">{pct(m.taxaCredito12x)}</td>
                <td className="px-4 py-4">{m.prazo}</td>
                <td className="max-w-[220px] px-4 py-4 text-slate-600">{m.paraQuem}</td>
                <td className="px-4 py-4">
                  <AffiliateLink href={linkFor(m)} variant="button" className="whitespace-nowrap">
                    Ver oferta
                  </AffiliateLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards (celular) */}
      <ul className="grid gap-4 md:hidden">
        {items.map((m) => (
          <li key={m.id} className="card p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold">{m.nome}</h3>
              {m.destaque && (
                <span className="rounded-full bg-sun-100 px-2 py-0.5 text-xs font-semibold text-sun-700">
                  {m.destaque}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-slate-600">{m.paraQuem}</p>
            <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg bg-navy-50 p-2">
                <dt className="text-xs text-slate-600">Débito</dt>
                <dd className="font-bold text-navy-900">{pct(m.taxaDebito)}</dd>
              </div>
              <div className="rounded-lg bg-navy-50 p-2">
                <dt className="text-xs text-slate-600">Crédito 1x</dt>
                <dd className="font-bold text-navy-900">{pct(m.taxaCredito1x)}</dd>
              </div>
              <div className="rounded-lg bg-navy-50 p-2">
                <dt className="text-xs text-slate-600">Crédito 12x</dt>
                <dd className="font-bold text-navy-900">{pct(m.taxaCredito12x)}</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm">
              <span className="font-semibold text-navy-800">Recebimento:</span> {m.prazo}
            </p>
            <p className="text-sm text-slate-600">
              {m.mensalidade} · {m.preco}
            </p>
            <AffiliateLink href={linkFor(m)} variant="button" className="mt-4">
              Ver oferta
            </AffiliateLink>
          </li>
        ))}
      </ul>

      {items.some((m) => m.ultimaConferencia) && (
        <p className="mt-3 text-xs text-slate-500">
          Última conferência dos valores:{" "}
          {formatDate(
            items
              .map((m) => m.ultimaConferencia)
              .filter((d): d is string => Boolean(d))
              .sort()
              .reverse()[0],
          )}
          .
        </p>
      )}
    </div>
  );
}
