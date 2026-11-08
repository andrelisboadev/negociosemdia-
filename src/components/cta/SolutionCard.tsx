import { whatsappUrl } from "@data/site.config";
import type { Solucao } from "@data/solucoes";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function SolutionCard({ solucao }: { solucao: Solucao }) {
  return (
    <article id={solucao.id} className="card flex h-full flex-col p-6">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl">
          {solucao.emoji}
        </span>
        <h3 className="text-lg font-bold leading-snug">{solucao.nome}</h3>
      </div>

      <dl className="mt-5 flex-1 space-y-4 text-sm leading-relaxed">
        <div>
          <dt className="font-semibold text-red-700">A dor</dt>
          <dd className="mt-0.5 text-slate-700">{solucao.dor}</dd>
        </div>
        <div>
          <dt className="font-semibold text-navy-700">A solução</dt>
          <dd className="mt-0.5 text-slate-700">{solucao.solucao}</dd>
        </div>
        <div>
          <dt className="font-semibold text-brand-700">O benefício</dt>
          <dd className="mt-0.5 text-slate-700">{solucao.beneficio}</dd>
        </div>
      </dl>

      <a
        href={whatsappUrl(solucao.mensagem)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-6 w-full"
      >
        <WhatsAppIcon />
        Quero saber mais
      </a>
    </article>
  );
}
