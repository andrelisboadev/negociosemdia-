import Link from "next/link";
import { siteConfig } from "@data/site.config";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CtaBox } from "@/components/cta/CtaBox";

export const metadata = buildMetadata({
  title: "Sobre o Negócios em Dia",
  description:
    "Conheça o Negócios em Dia: conteúdo e soluções para pequenos empreendedores do Brasil organizarem o negócio, venderem mais e crescerem.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <div className="container-page max-w-3xl py-10">
      <Breadcrumbs items={[{ name: "Sobre", href: "/sobre" }]} />

      <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl">Sobre o {siteConfig.name}</h1>

      <div className="prose prose-slate mt-6 max-w-none">
        <p>
          O <strong>{siteConfig.name}</strong> nasceu no Instagram para ajudar pequenos empreendedores a organizar o
          negócio sem complicação. Este site é a extensão desse trabalho: um lugar para você ler com calma, consultar
          quando precisar e aplicar no dia a dia.
        </p>
        <h2>O que você encontra aqui</h2>
        <ul>
          <li>
            <strong>Dicas de negócios</strong> sobre finanças, tributos, vendas, marketing e automação.
          </li>
          <li>
            <strong>Soluções</strong>: sistemas e automações simples para quem quer ganhar tempo.
          </li>
          <li>
            <strong>Comparativos e indicações</strong> de maquininhas e produtos que podem ajudar.
          </li>
        </ul>
        <h2>Quem escreve</h2>
        <p>
          Eu sou o <strong>{siteConfig.author.name}</strong>. {siteConfig.author.bio} Trabalho de perto com
          comércios e prestadores de serviço, e escrevo aqui o que aprendo na prática.
        </p>
        <h2>Como o site se mantém</h2>
        <p>
          O conteúdo é gratuito. O site pode receber receita de duas formas: pela venda dos meus sistemas e automações
          e por comissões de links de afiliado, sem custo extra para você. Isso está explicado no{" "}
          <Link href="/aviso-de-afiliados">Aviso de Afiliados</Link>. Os artigos têm caráter informativo e não
          substituem a orientação de um contador ou consultor.
        </p>
      </div>

      <CtaBox
        title="Quer falar comigo?"
        text="Conte sobre o seu negócio e as suas dúvidas. Respondo pelo WhatsApp."
        buttonLabel="Chamar no WhatsApp"
      />
    </div>
  );
}
