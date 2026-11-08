import Link from "next/link";
import { siteConfig } from "@data/site.config";
import { AffiliateNotice } from "@/components/commerce/AffiliateNotice";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-navy-900 text-navy-100">
      <div className="container-page grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-xl font-extrabold text-white">{siteConfig.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed">{siteConfig.tagline}. Conteúdo gratuito para organizar, vender mais e crescer.</p>
          {siteConfig.social.instagram && (
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-sun-300 underline underline-offset-4"
            >
              Siga no Instagram
            </a>
          )}
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-white">Conteúdo</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/solucoes" className="hover:text-white">Soluções</Link></li>
            <li><Link href="/maquininhas" className="hover:text-white">Maquininhas</Link></li>
            <li><Link href="/indicacoes" className="hover:text-white">Indicações</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-white">Institucional</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/sobre" className="hover:text-white">Sobre</Link></li>
            <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
            <li><Link href="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</Link></li>
            <li><Link href="/aviso-de-afiliados" className="hover:text-white">Aviso de Afiliados</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page space-y-3 py-6">
          <AffiliateNotice variant="inline" />
          <p className="text-xs text-navy-300">
            © {year} {siteConfig.name}. Este conteúdo é informativo e não substitui a orientação de um contador ou
            consultor.
          </p>
        </div>
      </div>
    </footer>
  );
}
