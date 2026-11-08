import { siteConfig } from "@data/site.config";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Aviso de Afiliados",
  description:
    "Entenda como funcionam os links de afiliado do Negócios em Dia e como isso afeta (ou não) o preço e as nossas indicações.",
  path: "/aviso-de-afiliados",
});

export default function AvisoAfiliadosPage() {
  return (
    <div className="container-page max-w-3xl py-10">
      <Breadcrumbs items={[{ name: "Aviso de Afiliados", href: "/aviso-de-afiliados" }]} />

      <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">Aviso de Afiliados</h1>

      <div className="prose prose-slate mt-6 max-w-none">
        <p>
          Por transparência, queremos que você saiba: o {siteConfig.name} participa de programas de afiliados. Isso
          significa que alguns links do site são <strong>links de afiliado</strong>.
        </p>

        <h2>Como funciona</h2>
        <p>
          Quando você clica em um desses links e compra um produto ou contrata um serviço, a loja ou empresa pode nos
          pagar uma <strong>comissão</strong>. Você <strong>não paga nada a mais</strong> por isso: o preço é o mesmo
          que você pagaria sem passar pelo nosso link.
        </p>

        <h2>Onde aparecem</h2>
        <ul>
          <li>Na página de <a href="/indicacoes">Indicações</a> (Mercado Livre, Shopee e Amazon).</li>
          <li>Na página de <a href="/maquininhas">Maquininhas</a> (links das operadoras).</li>
          <li>Em alguns artigos do blog, sempre com aviso visível na própria página.</li>
        </ul>
        <p>
          Os links de afiliado são identificados com o atributo <code>rel=&quot;sponsored nofollow&quot;</code> e abrem em nova
          aba.
        </p>

        <h2>Nosso compromisso</h2>
        <ul>
          <li>Indicamos apenas o que acreditamos fazer sentido para pequenos negócios.</li>
          <li>A comissão não define o que escrevemos nos artigos educativos.</li>
          <li>Mostramos pontos de atenção e para quem cada opção serve, e não só vantagens.</li>
          <li>Os valores e condições podem mudar. Confirme sempre no site oficial antes de comprar ou contratar.</li>
        </ul>

        <h2>Soluções próprias</h2>
        <p>
          O site também apresenta sistemas e automações desenvolvidos por nós, que podem ser contratados. Quando for o
          caso, deixamos claro que são serviços do {siteConfig.name}.
        </p>

        <h2>Dúvidas</h2>
        <p>
          Escreva para <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
        </p>
      </div>
    </div>
  );
}
