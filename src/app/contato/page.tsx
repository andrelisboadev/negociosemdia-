import { siteConfig, whatsappUrl } from "@data/site.config";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { WhatsAppIcon } from "@/components/cta/WhatsAppIcon";

export const metadata = buildMetadata({
  title: "Contato",
  description: "Fale com o Negócios em Dia pelo WhatsApp, e-mail ou Instagram.",
  path: "/contato",
});

export default function ContatoPage() {
  const { contact, social } = siteConfig;

  return (
    <div className="container-page max-w-3xl py-10">
      <Breadcrumbs items={[{ name: "Contato", href: "/contato" }]} />

      <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">Fale comigo</h1>
      <p className="mt-3 text-lg text-slate-600">
        Tem dúvida, sugestão de assunto ou quer conhecer as soluções? Escolha o canal que for melhor para você.
      </p>

      <div className="mt-8 grid gap-4">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="card flex items-center gap-4 p-5 transition-shadow hover:shadow-lg"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
            <WhatsAppIcon className="h-6 w-6" />
          </span>
          <span>
            <span className="block font-display font-bold text-navy-900">WhatsApp</span>
            <span className="text-sm text-slate-600">{contact.whatsappDisplay}: resposta mais rápida</span>
          </span>
        </a>

        <a href={`mailto:${contact.email}`} className="card flex items-center gap-4 p-5 transition-shadow hover:shadow-lg">
          <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-2xl">
            ✉️
          </span>
          <span>
            <span className="block font-display font-bold text-navy-900">E-mail</span>
            <span className="text-sm text-slate-600">{contact.email}</span>
          </span>
        </a>

        {social.instagram && (
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-center gap-4 p-5 transition-shadow hover:shadow-lg"
          >
            <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-xl bg-sun-50 text-2xl">
              📸
            </span>
            <span>
              <span className="block font-display font-bold text-navy-900">Instagram</span>
              <span className="text-sm text-slate-600">Dicas rápidas todos os dias</span>
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
