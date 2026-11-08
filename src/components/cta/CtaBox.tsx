import { siteConfig, whatsappUrl } from "@data/site.config";
import { getSolucao } from "@data/solucoes";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface CtaBoxProps {
  /** id de uma solução em data/solucoes.ts: preenche texto e mensagem automaticamente */
  solution?: string;
  title?: string;
  text?: string;
  buttonLabel?: string;
  /** Mensagem do WhatsApp (sobrescreve a da solução) */
  message?: string;
}

export function CtaBox({ solution, title, text, buttonLabel, message }: CtaBoxProps) {
  const sol = getSolucao(solution);
  const finalTitle = title ?? (sol ? `Quer resolver isso de vez? Conheça: ${sol.nome}` : "Quer ajuda para colocar isso em prática?");
  const finalText = text ?? sol?.beneficio ?? "Fale comigo no WhatsApp e conte como funciona o seu negócio. Sem compromisso.";
  const finalMessage = message ?? sol?.mensagem ?? siteConfig.contact.defaultMessage;

  return (
    <aside
      aria-label="Chamada para ação"
      className="not-prose my-10 overflow-hidden rounded-2xl bg-navy-900 p-6 text-white shadow-card sm:p-8"
    >
      <p className="eyebrow !text-sun-300">Próximo passo</p>
      <h2 className="mt-1 font-display text-xl font-extrabold leading-snug !text-white sm:text-2xl">{finalTitle}</h2>
      <p className="mt-2 max-w-2xl text-navy-100">{finalText}</p>
      <a
        href={whatsappUrl(finalMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-accent mt-5 w-full sm:w-auto"
      >
        <WhatsAppIcon />
        {buttonLabel ?? "Falar no WhatsApp"}
      </a>
    </aside>
  );
}
